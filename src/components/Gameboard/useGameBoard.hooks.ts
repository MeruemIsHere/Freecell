import { useState, useEffect } from 'react';
import { STARTER_DECK } from '../../data/globalConstant';
import { CardClicked, Deck, Selection } from '../../Services/types';
import { handleSelection, handleDistribution } from './Gameboard.helpers';



export function useDeck() {
    const [deck, setDeck] = useState<Deck>(STARTER_DECK)
    const [cardClicked, setCardClicked] = useState<CardClicked | null>(null)
    const [selection, setSelection] = useState<Selection | null>(null)


    const handleClickCard = () => {
        if (!cardClicked) {
            setSelection(null)
            return
        }


        const { indexCard, card, typeCell, indexCell } = cardClicked

        if (!selection) {
            handleSelection(cardClicked, deck, setSelection)

        } else {
            let cellSelectionOrigin = selection.cellOrigin
            let sameCellClicked = (typeCell === cellSelectionOrigin.type) && (indexCell === cellSelectionOrigin.index)

            if (sameCellClicked) {
                handleSelection(cardClicked, deck, setSelection)

            } else {
                handleDistribution()

            }
        }
    }


    useEffect(() => {
        handleClickCard()
    }, [cardClicked])


    return { deck, selection, setCardClicked }
}