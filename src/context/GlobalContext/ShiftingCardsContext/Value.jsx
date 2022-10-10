import { useCallback, useMemo, useState } from 'react';
import { handleDistribution, handleSelection } from './ShiftingCardsContext.helpers';




export const useShiftingCards = (deck) => {

  const [selection, setSelection] = useState(null)


  
  const handleClickCard = useCallback((cardSelected) => {
    const { indexCard, card, typeCell, indexCell } = cardSelected

    if(!selection) {
      handleSelection(cardSelected, deck, setSelection)

    } 
    else {

      let firstCardSelection = selection.cards[0]
      let cellSelectionOrigin = selection.cellOrigin

      let clickOnSameCard = (card.value === firstCardSelection.value) && (card.symbole === firstCardSelection.symbole)
      let clickOnSameCell = (typeCell === cellSelectionOrigin.type ) && (indexCell === cellSelectionOrigin.index)



      if(clickOnSameCard) {
        setSelection(null)
      } 
      else if (clickOnSameCell) {
        handleSelection(cardSelected, deck, setSelection)
      } 
      else {
        handleDistribution()
        
      }
    }
  }, [selection, deck]
  )



  const value = useMemo(() => {
      return {
        selection,
        handleClickCard
      }
    }, [selection, handleClickCard]
  )

  return value
  
}