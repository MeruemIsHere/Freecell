import React from 'react'
import { CARD_SIZE, GAP_CARDS_INTO_BOARDCELL } from '../../Services/constants/globalConstant';
import { SelectionMarkerProps } from '../../Services/types';

const SelectionMarker: React.FC<SelectionMarkerProps> = ({selection}) => {
    const selectionHeight = CARD_SIZE.height + ((selection.cards.length - 1) * GAP_CARDS_INTO_BOARDCELL)

    return (
        <div className='selection-marker' style={{height: `${selectionHeight}px`}}></div>
    )
}

export default SelectionMarker