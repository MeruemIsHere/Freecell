import { ShiftingCardsContext } from "./ShiftingCardsContext"

const GlobalContext = ({children, valueShiftingCards}) => {
  return (
    <ShiftingCardsContext.Provider value={valueShiftingCards}>
        {children}
    </ShiftingCardsContext.Provider>
  )
}

export default GlobalContext