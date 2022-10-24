type cardNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 
type cardFigures = "J" | "Q" | "K" | "A" 

export type Card = {
    designation: cardNumbers | cardFigures ,
    symbole: "♥️" | "♦️" | "♠️" | "♣️",
    value?: number
}

type Cell = Card[]

export type TypeCell = "bonuscell" | "wincell" | "boardcell"

export type Deck = {
    bonusCells: Cell[],
    winCells: Cell[],
    boardCells: Cell[]
}

export type CardClicked = {
    indexCard: number,
    card: Card,
    typeCell: TypeCell,
    indexCell: number
}

export type Selection = {
    cards: Card[],
    cellOrigin: {
        type: TypeCell,
        index: number
    }
}

export type CardStyle = {
    width: number,
    height: number,
    color: string
}




export type SetSelection = React.Dispatch<React.SetStateAction<Selection | null>>

export type SetCardClicked = React.Dispatch<React.SetStateAction<CardClicked | null>>

export type SetCardStyle = React.Dispatch<React.SetStateAction<CardStyle>>




export interface CellProps {
    type: TypeCell,
    cards: Card[],
    indexCell: number,
    selection?: Selection | null,
    setCardClicked: SetCardClicked
}

export interface CellMarkProps {
    type: TypeCell,
    indexCell: number
}

export interface SelectionMarkerProps {
    selection: Selection
} 

export interface ListCardsProps {
    cards: Card[],
    typeCell: TypeCell,
    indexCell: number,
    setCardClicked: SetCardClicked
}

export interface CardProps {
    index: number,
    card: Card,
    typeCell: TypeCell,
    indexCell: number,
    setCardClicked: SetCardClicked
}