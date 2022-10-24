import { Card } from "../../../Services/types"

export default function authorizationSelection(cardsSelected: Card[]): boolean {
    let authorizations: boolean[] = []

    cardsSelected.reduce((prevCard, currCard) => {
        let colorPrevCard = (prevCard.symbole === "♥️") || (prevCard.symbole === "♦️") ? "red" : "black"
        let colorCurrCard = (currCard.symbole === "♥️") || (currCard.symbole === "♦️") ? "red" : "black"

        let oppositeColor = colorPrevCard !== colorCurrCard
        let valuesIsDecreasing = prevCard.value && currCard.value === (prevCard.value - 1)

        authorizations.push((oppositeColor && valuesIsDecreasing) ? true : false)

        return currCard
    })

    return !authorizations.includes(false)
}
