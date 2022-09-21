import cards from '../Data/cards.json'
import shuffle from 'lodash.shuffle'

export function shuffleCards() {
    return shuffle(cards)
}