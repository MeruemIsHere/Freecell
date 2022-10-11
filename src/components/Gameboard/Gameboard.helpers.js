function authorizationSelection(cardsSelected) {
    let authorizations = []

    cardsSelected.reduce((prevCard, currCard) => {
        let colorPrevCard = (prevCard.symbole === "♥️") || (prevCard.symbole === "♦️") ? "red" : "black"
        let colorCurrCard = (currCard.symbole === "♥️") || (currCard.symbole === "♦️") ? "red" : "black"

        let oppositeColor = colorPrevCard !== colorCurrCard
        let valuesIsDecreasing = currCard.value === (prevCard.value - 1)

        authorizations.push((oppositeColor && valuesIsDecreasing) ? true : false)

        return currCard
    })

    return !authorizations.includes(false)
}





function handleSelectionBoardCell(cardSelected, cards) {
    const { indexCard, card, typeCell, indexCell } = cardSelected

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





export function handleSelection(cardSelected, deck, setSelection) {
    const { indexCard, card, typeCell, indexCell } = cardSelected

    switch (typeCell) {
        case "wincell":
            break

        case "bonuscell":
            let newSelection = {
                cards: [cardSelected.card],
                cellOrigin: {
                    type: typeCell,
                    index: indexCell
                }
            }
            setSelection(newSelection)
            break

        case "boardcell":
            setSelection(handleSelectionBoardCell(cardSelected, deck.boardCells[indexCell]))
            break

        default:
            break
    }
}



export function handleDistribution() {
    console.log("distribution");
}