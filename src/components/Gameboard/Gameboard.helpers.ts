import { Card, CardClicked, Deck, Selection, SetSelection } from "../../Services/types"


function authorizationSelection(cardsSelected: Card[]): boolean {
    let authorizations: boolean[] = []

    cardsSelected.reduce((prevCard, currCard) => {
        let colorPrevCard = (prevCard.symbole === "♥️") || (prevCard.symbole === "♦️") ? "red" : "black"
        let colorCurrCard = (currCard.symbole === "♥️") || (currCard.symbole === "♦️") ? "red" : "black"

        let oppositeColor = colorPrevCard !== colorCurrCard
        //FIXME: configure eslint + prettier for optional chaining
        let valuesIsDecreasing = prevCard.value && currCard.value === (prevCard.value - 1)

        authorizations.push((oppositeColor && valuesIsDecreasing) ? true : false)

        return currCard
    })

    return !authorizations.includes(false)
}





function handleSelectionBoardCell(cardClicked: CardClicked, cards: Card[]): Selection | null {
    const { indexCard, card, typeCell, indexCell } = cardClicked

    let copyCellCards = [...cards]
    let nbCardsSelected = cards.length - indexCard

    let cardsSelected = copyCellCards.splice(indexCard, nbCardsSelected)

    let newSelection = {
        cards: cardsSelected,
        cellOrigin: {
            type: typeCell,
            index: indexCell
        }
    }

    const isAuthorize = authorizationSelection(cardsSelected)

    return isAuthorize ? newSelection : null
}





export function handleSelection(cardClicked: CardClicked, deck: Deck, setSelection: SetSelection): void {
    const { indexCard, card, typeCell, indexCell } = cardClicked

    switch (typeCell) {
        case "wincell":
            break

        case "bonuscell":
            let newSelection = {
                cards: [cardClicked.card],
                cellOrigin: {
                    type: typeCell,
                    index: indexCell
                }
            }
            setSelection(newSelection)
            break

        case "boardcell":
            setSelection(handleSelectionBoardCell(cardClicked, deck.boardCells[indexCell]))
            break

        default:
            break
    }
}



export function handleDistribution() {
    console.log("distribution");
}