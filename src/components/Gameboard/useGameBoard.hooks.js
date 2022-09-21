import { useState } from 'react';
import { starterDistribution } from './Gameboard.helpers';

export function useDeck() {
    const [deck, setDeck] = useState(starterDistribution())

    return { deck }
}