import { CARD_SIZE, GAP_CARDS_INTO_BOARDCELL } from './../../globalConstant';


export function defineHeightCellContainer(cards) {
    const numberOfCards = cards.length - 1
    const heightCardsContainer = CARD_SIZE.height + (GAP_CARDS_INTO_BOARDCELL * numberOfCards)

    return { height: `${heightCardsContainer}px` }
}





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





export function handleSelectionBoardCell(cardSelected, cards) {
    let copyCellCards = [...cards]
    let nbCardsSelected = cards.length - cardSelected.index

    let cardsSelected = copyCellCards.splice(cardSelected.index, nbCardsSelected)

    const isAuthorize = authorizationSelection(cardsSelected)

    return isAuthorize ? cardsSelected : null
}