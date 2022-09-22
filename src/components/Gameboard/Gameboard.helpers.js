import { shuffleCards } from '../../utils/utils';

export const starterDistribution = () => {
    const cardsShuffled = shuffleCards()
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