import { GAP_CARDS_INTO_BOARDCELL } from '../../data/globalConstant';
import { CardClicked, SetCardClicked, SetCardStyle } from '../../Services/types';


export const defineColor = (symbole: string): string => {
    if ((symbole === "♥️") || (symbole === "♦️")) {
        return 'red'
    } else {
        return 'black'
    }
}


export const defineTopPos = (index: number, setCardStyle: SetCardStyle): void => {

    let topPos = index * GAP_CARDS_INTO_BOARDCELL
    setCardStyle((cardStyle) => {
        return {...cardStyle, top: topPos }
    })
}




type HandleCardClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>, 
    setCardClicked: SetCardClicked, 
    dataForSelection: CardClicked
) => void

export const handleCardClick: HandleCardClick = (e, setCardClicked, dataForSelection) => {
    e.preventDefault()
    const card = dataForSelection.card

    setCardClicked((prevCard) => {
        //FIXME: Config eslint + prettier for optional chaining
        let sameCardClicked
        if (prevCard) sameCardClicked = (prevCard.card.value === card.value) && (prevCard.card.symbole === card.symbole) ? true : false

        if (sameCardClicked) {
            return null
        } else {
            return dataForSelection
        }
    })
}