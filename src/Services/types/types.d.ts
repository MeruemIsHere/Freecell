export type Card = {
    designation: number | string,
    symbole: string,
    value?: number
}

type Cell = Card[]

export type Deck = {
    bonusCells: Cell[],
    winCells: Cell[],
    boardCells: Cell[]
}

export type CardClicked = {
    indexCard: number,
    card: Card,
    typeCell: string,
    indexCell: number
}

export type Selection = {
    cards: Card[],
    cellOrigin: {
        type: string,
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
    type: string,
    cards: Card[],
    indexCell: number,
    selection?: Selection | null,
    setCardClicked: SetCardClicked
}

export interface CellMarkProps {
    type: string,
    indexCell: number
}

export interface SelectionMarkerProps {
    selection: Selection
} 

export interface ListCardsProps {
    cards: Card[],
    typeCell: string,
    indexCell: number,
    setCardClicked: SetCardClicked
}

export interface CardProps {
    index: number,
    card: Card,
    typeCell: string,
    indexCell: number,
    setCardClicked: SetCardClicked
}