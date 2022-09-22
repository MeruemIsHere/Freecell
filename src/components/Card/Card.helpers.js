export const defineColor = (symbole) => {
    if ((symbole === "♥️") || (symbole === "♦️")) {
        return 'red'
    } else {
        return 'black'
    }
}


export const defineTopPos = (typeCell, index, setCardStyle) => {

    const GAP = 30

    if (typeCell === 'boardcell') {
        let topPos = index * GAP
        setCardStyle(cardStyle => {
            return {...cardStyle, top: topPos }
        })
    }
}