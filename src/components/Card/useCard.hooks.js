import { useEffect, useState } from 'react';
import { CARD_SIZE } from './../../globalConstant';
import { defineColor, defineTopPos } from './Card.helpers';


export default function useCard(typeCell, index, card) {

    const [cardStyle, setCardStyle] = useState({
        width: CARD_SIZE.width,
        height: CARD_SIZE.height,
        color: defineColor(card.symbole)
    })

    useEffect(() => {

        defineTopPos(typeCell, index, setCardStyle)

    }, [typeCell, index])


    return { cardStyle }
}