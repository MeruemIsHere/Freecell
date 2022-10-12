import cards from '../data/cards.json'
import shuffle from 'lodash.shuffle'


function shuffleCards() {
    return shuffle(cards)
}


function attributeValues(cards) {

    cards.forEach(card => {
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



export function starterDistribution() {
    let cardsShuffled = attributeValues(shuffleCards())

    let starterDeck = []

    for (let i = 0; i < 8; i++) {
        if (i <= 3) {
            starterDeck[i] = cardsShuffled.splice(0, 7)
        } else {
            starterDeck[i] = cardsShuffled.splice(0, 6)
        }
    }

    return starterDeck

}