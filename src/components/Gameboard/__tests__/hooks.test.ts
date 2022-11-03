import { beforeEach, describe, expect, it, vi } from "vitest";
import { act } from '@testing-library/react';
import { useDeck } from "../useGameBoard.hooks";
import { CardClicked } from "../../../Services/types";
import handleClickCard from './../helpers/handleClickCard';
import { resetHook } from "../../../__tests__/helpers";
import { cardClickedMock } from "../../../__tests__/mocks";

/**
* @vitest-environment jsdom
*/

interface Context {
    cardClicked: CardClicked
}

describe('useDeck', () => {

    const setup = () => resetHook(useDeck)
    
    vi.mock('../helpers/handleClickCard')

    beforeEach<Context>(cxt => {
        vi.restoreAllMocks()
        cxt.cardClicked = structuredClone(cardClickedMock)
    })



    it<Context>('call setSelection(null) when cardClicked return to null', ({cardClicked}) => {

        // at launch
        const result = setup()
        
        expect(result.current.cardClicked).toBe(null)
        expect(result.current.selection).toBe(null)
        


        // at selection
        act(() => result.current.setCardClicked(cardClicked))
        // handleClickCard is normally called here but it will be tested at the next test
        // and it's optional here since it can either setSelection(newSelection) or setSelection(null)
        expect(result.current.cardClicked).not.toBe(null)
        


        // at deselection
        act(() => result.current.setCardClicked(null)) 
        
        expect(result.current.cardClicked).toBe(null)
        expect(result.current.selection).toBe(null)
        
    })

    it<Context>('call handleCardClicked() when card is clicked', ({cardClicked}) => {
        const result = setup()
        
        act(() => result.current.setCardClicked(cardClicked))
        
        expect(handleClickCard).toHaveBeenCalledOnce()
        
    })
})