import cards from '../data/cards.json'
import shuffle from 'lodash.shuffle'
import { Card } from '../Services/types'



function shuffleCards() : Card[] {
    return shuffle(cards)
}


function attributeValues(cards: Card[]): Card[] {

    cards.forEach((card: Card) : void => {
        const { designation } = card

        switch (designation) {

            case 'A':
                card.value = 1
                break

            case 'J':
                card.value = 11
                break

            case 'Q':
                card.value = 12
                break

            case 'K':
                card.value = 13
                break

            default:
                //FIXME: remove narrowing forced "as number"
                card.value = designation as number
                break

        }
    })

    return cards
}



export function starterDistribution(): Card[][] {
    const numberOfBoardCells = 8
    let cardsShuffled = attributeValues(shuffleCards())

    let starterDeck = []

    for (let i = 0; i < numberOfBoardCells; i++) {
        if (i <= 3) {
            starterDeck[i] = cardsShuffled.splice(0, 7)
        } else {
            starterDeck[i] = cardsShuffled.splice(0, 6)
        }
    }

    return starterDeck

}