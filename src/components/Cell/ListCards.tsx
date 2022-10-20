import Card from '../Card/Card';
import { memo } from 'react';
import { ListCardsProps } from '../../Services/types';

const ListCards: React.FC<ListCardsProps> = ({cards, typeCell, indexCell, setCardClicked}) => {
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
                    setCardClicked={setCardClicked}
                    />
                )
            }
        </>
    )
}

export default memo(ListCards)