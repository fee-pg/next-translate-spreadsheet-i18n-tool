import {Command, ux} from '@oclif/core'
import main from '../../runs/gen'

export default class Gen extends Command {
  static description = 'Start generating your files';

  static examples = [
    '$ ntsit gen 1sdfU3AZuFPzP_sDeDdpwa21S0BcH-ETVwNViuU9GqlB 3 C1 B3(./src/commands/gen/index.ts)',
  ];

  static parsedWorkSheets = (input: string): number[] => {
    if (input.includes(',')) return input.split(',').map(item => Number.parseInt(item, 10))
    return Array.from({length: Number.parseInt(input, 10)}, (_, i) => i)
  }

  static letter2Index = (letter: string): number => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const index = alphabet.indexOf(letter.toUpperCase())
    if (index < 0) throw new Error('letter is out of scope')
    return alphabet.indexOf(letter.toUpperCase())
  }

  static parsedCell = (cell: string): {x: number, y: number} => {
    const [y, x] = [...cell]
    return {
      x: Number.parseInt(x, 10) - 1,
      y: Gen.letter2Index(y),
    }
  }

  async run(): Promise<void> {
    const sheetId = await ux.prompt('google spreadsheet id?')
    const workSheets = await ux.prompt('google spreadsheet worksheet id? count or indexs(e.g. 3 or 0,1,2)')
    const hStartCell = await ux.prompt('horizontal start cell?(e.g. C1)')
    const vStartCell = await ux.prompt('vertical start cell?(e.g. B3)')
    const credentialsPath = await ux.prompt('google credentials path? based on the current directory, use relative path')

    await main({
      sheetId,
      sheetIndexs: Gen.parsedWorkSheets(workSheets),
      hStartCell: Gen.parsedCell(hStartCell),
      vStartCell: Gen.parsedCell(vStartCell),
      credentialsPath,
    })
  }
}
