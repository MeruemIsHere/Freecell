import { CARD_SIZE, GAP_CARDS_INTO_BOARDCELL } from '../../Services/constants/globalConstant';
import { Card } from '../../Services/types';


export function defineHeightCellContainer(cards: Card[]): {height: string} {
    const numberOfCards = cards.length - 1
    const heightCardsContainer = CARD_SIZE.height + (GAP_CARDS_INTO_BOARDCELL * numberOfCards)

    return { height: `${heightCardsContainer}px` }
}