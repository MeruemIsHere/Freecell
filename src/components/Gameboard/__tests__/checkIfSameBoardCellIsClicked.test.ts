import { beforeEach, describe, expect, it } from "vitest";
import { checkIfSameBoardCellIsClicked } from "../helpers/checkIfSameBoardCellIsClicked";

interface Context {
    cellOriginOfSelection: {
        type: string,
        index: number
    },
    cellClicked: {
        typeCell: string,
        indexCell: number
    }
}

describe('checkIfSameCellClicked()', () => {

    beforeEach<Context>(ctx => {
        ctx.cellOriginOfSelection = {
            type: "boardcell",
            index: 3
        }
        ctx.cellClicked = {
            typeCell: "boardcell",
            indexCell: 3
        }
    })

    it<Context>('should return false if cell clicked type or cell origin of the selection type is not "boardcell"', ({cellOriginOfSelection, cellClicked}) => {
        // if cellClicked is not "boardcell"
        cellClicked.typeCell = "wincell"
        const resultOne = checkIfSameBoardCellIsClicked(cellOriginOfSelection, cellClicked)

        expect(resultOne).toBe(false)


        // if cellOriginOfSelection is not "boardcell"
        cellClicked.typeCell = "boardcell"
        cellOriginOfSelection.type = "wincell"
        const resultTwo = checkIfSameBoardCellIsClicked(cellOriginOfSelection, cellClicked)

        expect(resultTwo).toBe(false)


        // if cellClicked and cellOriginOfSelection is not "boardcell"
        cellClicked.typeCell = "wincell"
        const resultThree = checkIfSameBoardCellIsClicked(cellOriginOfSelection, cellClicked)

        expect(resultThree).toBe(false)
    })

    it<Context>('should return false if cell clicked type or cell origin of the selection type is "boardcell" but index is different', ({cellOriginOfSelection, cellClicked}) => {
        cellClicked.indexCell = 4
        const result = checkIfSameBoardCellIsClicked(cellOriginOfSelection, cellClicked)

        expect(result).toBe(false)
    })

    it<Context>('should return true if cell clicked type and cell origin of the selection type are equal "boardcell" and indexes are same', ({cellOriginOfSelection, cellClicked}) => {
        const result = checkIfSameBoardCellIsClicked(cellOriginOfSelection, cellClicked)

        expect(result).toBe(true)
    })
})