import { GAP_CARDS_INTO_BOARDCELL } from '../../data/globalConstant';


export const defineColor = (symbole) => {
    if ((symbole === "♥️") || (symbole === "♦️")) {
        return 'red'
    } else {
        return 'black'
    }
}


export const defineTopPos = (index, setCardStyle) => {

    let topPos = index * GAP_CARDS_INTO_BOARDCELL
    setCardStyle(cardStyle => {
        return {...cardStyle, top: topPos }
    })
}

export const handleClick = (e, setCardSelected, dataForSelection) => {
    e.preventDefault()
    const card = dataForSelection.card

    setCardSelected((prevCard) => {
        const sameCard = (prevCard.card.value === card.value) && (prevCard.card.symbole === card.symbole) ? true : false

        if (sameCard) {
            return null
        } else {
            return dataForSelection
        }
    })
}