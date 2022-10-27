import { useState, useEffect } from 'react';
import { STARTER_DECK } from '../../Services/constants/globalConstant';
import { CardClicked, Deck, Selection } from '../../Services/types';
import handleClickCard from './helpers/handleClickCard';



export function useDeck() {
    console.log();
    
    const [deck, setDeck] = useState<Deck>(STARTER_DECK)
    const [cardClicked, setCardClicked] = useState<CardClicked | null>(null)
    const [selection, setSelection] = useState<Selection | null>(null)


    useEffect(() => {
        if (cardClicked) {
            const handleClickCardArg = {
                deck,
                cardClicked,
                selection,
                setSelection
            }
            
            handleClickCard(handleClickCardArg)
        }
        else {
            // not setSelection at launch
            selection && setSelection(null) 
        }
        
    }, [cardClicked])


    return { 
        deck, 
        selection, 
        setSelection, 
        cardClicked,
        setCardClicked, 
        handleClickCard 
    }
}