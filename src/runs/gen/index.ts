import {GoogleSpreadsheet, GoogleSpreadsheetWorksheet} from 'google-spreadsheet' // version: ^3.3.0
import credentials from './gs_credentials'
import fs from 'node:fs'
import path from 'node:path'

const trim = (str: string) => {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}

const escapeQuote = (str: string) => {
  return str.replace(/"/g, '\\"')
}

const compose = (...fns: { (str: string): string; (str: string): string }[]) => {
  return (arg: any) => {
    return fns.reduce((composed, f) => {
      return f(composed)
    }, arg)
  }
}

const validCredentials = (credentials: Record<string, string>) => {
  const {private_key, client_email} = credentials
  if (private_key === 'YOUR_PRIVATE_KEY' || client_email === 'YOUR_CLIENT_EMAIL') {
    throw new Error('Please set your credentials in src/runs/gen/gs_credentials.ts')
  }
}

const sheetInit = async (sheetId: string, sheetIndex: number) => {
  const doc = new GoogleSpreadsheet(sheetId)
  await doc.useServiceAccountAuth(credentials)
  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[sheetIndex]
  await sheet.loadCells()
  return sheet
}

const getLocales = async (sheet: GoogleSpreadsheetWorksheet, cell: {x: number, y: number}) => {
  const startingRow = cell.x
  const startingCol = cell.y
  let currentCol = startingCol
  const locales = []
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const cell = sheet.getCell(startingRow, currentCol)
    const cellValue = cell.value

    if (!cellValue) {
      break
    }

    locales.push(compose(trim, escapeQuote)(cellValue))
    currentCol++
  }

  console.log('locales:', locales)
  return locales
}

const getKeys = async (sheet: GoogleSpreadsheetWorksheet, cell: {x: number, y: number}) => {
  const _startingRow = cell.x
  const _startingCol = cell.y
  let _currentRow = _startingRow
  const keys = []
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const cell = sheet.getCell(_currentRow, _startingCol)
    const cellValue = cell.value as string

    if (!cellValue) {
      break
    }

    keys.push(cellValue)
    _currentRow++
  }

  return keys
}

/**
 *
 * @param {string} sheetId google sheet id
 * @param {number[]} sheetIndexs google worksheet index
 * @param {{x: number, y: number}} hStartCell horizontal start cell
 * @param {{x: number, y: number}} vStartCell vertical start cell
 * @returns {Promise<void>} void
 */
const main = async (
  sheetId: string,
  sheetIndexs: number[],
  hStartCell:{x: number, y: number},
  vStartCell:{x: number, y: number},
): Promise<void> => {
  validCredentials(credentials)

  const localesJsonMap: Record<string,  Record<string, string>> = {}
  const firstSheet = await sheetInit(sheetId, sheetIndexs[0])
  const locales = await getLocales(firstSheet, hStartCell)

  sheetIndexs.forEach(async sheetIndex => {
    const sheet = await sheetInit(sheetId, sheetIndex)
    const keys = await getKeys(sheet, vStartCell)

    for (let i = 0; i < locales.length; i++) {
      const json = keys.reduce((res, key, index) => {
        const start = index + 2
        const cell = sheet.getCell(start, i + 2)
        const cellValue = cell.value as string
        console.log(key, cellValue)
        if (cellValue) {
          res[key] = cellValue
        }

        return res
      }, localesJsonMap[locales[i]] || {})
      console.log(`json-${locales[i]}:`, json)
      localesJsonMap[locales[i]] = json

      const _localeDirName = `${locales[i]}`
      const _dirPath = path.join(process.cwd(), _localeDirName)
      const _filePath = path.join(_dirPath, 'index.json')
      if (!fs.existsSync(_dirPath)) {
        fs.mkdirSync(_dirPath)
      }

      try {
        fs.writeFileSync(_filePath, JSON.stringify(json, null, 2))
      } catch (error) {
        console.log('write file error:', error)
      }
    }
  })
}

export default main
