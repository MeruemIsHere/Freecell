import Card from './../Card/Card';

const ListCards = ({cards, typeCell, indexCell}) => {
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
                    />
                )
            }
        </>
    )
}

export default ListCards