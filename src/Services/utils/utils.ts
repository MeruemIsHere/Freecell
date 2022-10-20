import cards from '../../Services/data/cards.json'
import shuffle from 'lodash.shuffle'
import { Card } from '../types'



function shuffleCards() : Card[] {
    //FIXME: remove forced narrowing 'as Card[]'
    return shuffle(cards) as Card[]
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
                card.value = designation
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