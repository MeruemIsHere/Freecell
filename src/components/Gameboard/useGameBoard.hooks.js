import { useState, useEffect } from 'react';
import { STARTER_DECK } from '../../globalConstant';
import { handleSelection, handleDistribution } from './Gameboard.helpers';


export function useDeck() {
    const [deck, setDeck] = useState(STARTER_DECK)
    const [cardSelected, setCardSelected] = useState({})
    const [selection, setSelection] = useState(null)


    const handleClickCard = () => {
        const { indexCard, card, typeCell, indexCell } = cardSelected

        if (!selection) {
            handleSelection(cardSelected, deck, setSelection)

        } else {

            let firstCardSelection = selection.cards[0]
            let cellSelectionOrigin = selection.cellOrigin

            let clickOnSameCard = (card.value === firstCardSelection.value) && (card.symbole === firstCardSelection.symbole)
            let clickOnSameCell = (typeCell === cellSelectionOrigin.type) && (indexCell === cellSelectionOrigin.index)



            if (clickOnSameCard) {
                setSelection(null)
            } else if (clickOnSameCell) {
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