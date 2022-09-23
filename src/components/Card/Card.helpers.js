import { GAP_CARDS_INTO_BOARDCELL } from './../../globalConstant';


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