import Card from './../Card/Card';
import { memo } from 'react';

const ListCards = ({cards, typeCell, indexCell, clickCard}) => {
    const cellNotEmpty = cards.length > 0

    return (
        <>
            {cellNotEmpty && cards.map(
                (card, index) => 
                    <Card 
                    key={index} 
                    index={index}
                    card={card}
                    typeCell={typeCell}
                    indexCell={indexCell}
                    clickCard={clickCard}
                    />
                )
            }
        </>
    )
}

export default memo(ListCards)