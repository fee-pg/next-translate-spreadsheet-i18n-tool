import {Args, Command} from '@oclif/core'
import main from '../../runs/gen'

export default class Gen extends Command {
  static description = 'Start generating your files';

  static examples = [
    '$ ntsit gen 1sdfU3AZuFPzP_sDeDdpwa21S0BcH-ETVwNViuU9GqlB 3 C1 B3(./src/commands/gen/index.ts)',
  ];

  static args = {
    sheetId: Args.string({
      description: 'google spreadsheet id',
      required: true,
    }),
    workSheets: Args.string({
      description: 'google spreadsheet worksheet id',
      required: true,
      // parse: input => {
      //   if (input.includes(',')) return input.split(',').map(item => Number.parseInt(item, 10))
      //   return Array.from({length: Number.parseInt(input, 10)}, (_, i) => i)
      // },
    }),
    hStartCell: Args.string({
      description: 'horizontal start cell. e.g. C1',
      required: true,
    }),
    vStartCell: Args.string({
      description: 'vertical start cell. e.g. B3',
      required: true,
    }),
  };

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
    const {args} = await this.parse(Gen)
    const {sheetId, workSheets, hStartCell, vStartCell} = args

    await main(sheetId, Gen.parsedWorkSheets(workSheets), Gen.parsedCell(hStartCell), Gen.parsedCell(vStartCell))
  }
}
