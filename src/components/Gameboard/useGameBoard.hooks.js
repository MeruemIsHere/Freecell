import { useState, useEffect } from 'react';
import { STARTER_DECK } from '../../data/globalConstant';
import { handleSelection, handleDistribution } from './Gameboard.helpers';


export function useDeck() {
    const [deck, setDeck] = useState(STARTER_DECK)
    const [cardSelected, setCardSelected] = useState(null)
    const [selection, setSelection] = useState(null)


    const handleClickCard = () => {
        if (!cardSelected) {
            setSelection(null)
            return
        }


        const { indexCard, card, typeCell, indexCell } = cardSelected

        if (!selection) {
            handleSelection(cardSelected, deck, setSelection)

        } else {
            let cellSelectionOrigin = selection.cellOrigin
            let sameCellClicked = (typeCell === cellSelectionOrigin.type) && (indexCell === cellSelectionOrigin.index)

            if (sameCellClicked) {
                handleSelection(cardSelected, deck, setSelection)

            } else {
                handleDistribution()

            }
        }
    }


    useEffect(() => {
        handleClickCard()
    }, [cardSelected])


    return { deck, selection, setCardSelected }
}