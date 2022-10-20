import { useEffect, useState } from 'react';
import { CARD_SIZE } from '../../data/globalConstant';
import { Card, CardStyle } from '../../Services/types';
import { defineColor, defineTopPos } from './Card.helpers';


export default function useCard(typeCell: string, index: number, card: Card): {cardStyle: CardStyle} {

    const [cardStyle, setCardStyle] = useState<CardStyle>({
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