import { createContext } from "react"

export const ShiftingCardsContext = createContext({
    selection: null,
    handleClickCard: () => {}
})