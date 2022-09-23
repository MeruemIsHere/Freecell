import React from 'react'
import { CARD_SIZE, GAP_CARDS_INTO_BOARDCELL } from './../../globalConstant';

const SelectionMarker = ({selection}) => {
    const selectionHeight = CARD_SIZE.height + ((selection.length - 1) * GAP_CARDS_INTO_BOARDCELL)

    return (
        <div className='selection-marker' style={{height: `${selectionHeight}px`}}></div>
    )
}

export default SelectionMarker