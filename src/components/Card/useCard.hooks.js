import { useEffect, useState } from 'react';
import { CARD_SIZE } from '../../data/globalConstant';
import { defineColor, defineTopPos } from './Card.helpers';


export default function useCard(typeCell, index, card) {

    const [cardStyle, setCardStyle] = useState({
        width: CARD_SIZE.width,
        height: CARD_SIZE.height,
        color: defineColor(card.symbole),
    })

    useEffect(() => {

        if (typeCell === 'boardcell') {
            defineTopPos(index, setCardStyle)
        }

    }, [typeCell, index])


    return { cardStyle }
}