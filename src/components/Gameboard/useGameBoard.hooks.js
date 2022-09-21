import { useState } from 'react';
import { shuffleCards } from './../../utils/utils';

export function useDeck() {
    const [deck, setDeck] = useState(shuffleCards())

    return { deck }
}