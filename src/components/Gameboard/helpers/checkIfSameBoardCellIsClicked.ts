type CellOrigin = {
    type: string,
    index: number
}

type CellClicked = {
    typeCell: string,
    indexCell: number
}

export function checkIfSameBoardCellIsClicked(cellOriginOfSelection: CellOrigin, cellClicked: CellClicked): boolean {
    const areBothBoardCell = cellOriginOfSelection.type === "boardcell" && cellClicked.typeCell === "boardcell"
    const haveSameIndex = cellOriginOfSelection.index === cellClicked.indexCell

    if (areBothBoardCell && haveSameIndex) {
        return true
    }
    else {
        return false
    }
}