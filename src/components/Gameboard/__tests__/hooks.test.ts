import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { act } from '@testing-library/react';
import { useDeck } from "../useGameBoard.hooks";
import { CardClicked, Selection } from "../../../Services/types";
import handleClickCard from './../helpers/handleClickCard';
import { resetHook } from "../../../__tests__/helpers";

/**
* @vitest-environment jsdom
*/

describe('useDeck', () => {

    const setup = () => resetHook(useDeck)

    const selectionTemplate: Selection = {
        cards: [
            {
                designation: 10,
                symbole: '♦️',
                value: 10
            }
        ],
        cellOrigin: {
            type: "boardcell",
            index: 3
        }
    }

    const cardClickedTemplate: CardClicked = {
        indexCard: 5,
        card: {
            designation: "J",
            symbole: "♣️",
            value: 11
        },
        typeCell: "boardcell",
        indexCell: 3
    } 

    beforeAll(() => {
        vi.mock('../helpers/handleClickCard')
    })

    afterEach(() => {
        handleClickCard.mockClear()
    })

    afterAll(() => {
        handleClickCard.restore()
    })




    it('call setSelection(null) when cardClicked return to null', async () => {

        // at launch
        const result = setup()
        
        expect(result.current.cardClicked).toBe(null)
        expect(result.current.selection).toBe(null)
        


        // at selection
        const cardClickedMock = {...cardClickedTemplate}
        
        act(() => result.current.setCardClicked(cardClickedMock))
        // handleClickCard is normally called here but it will be tested at the next test
        // and it's optional since it can either setSelection(newSelection) or setSelection(null)
        expect(result.current.cardClicked).not.toBe(null)
        


        // at deselection
        act(() => result.current.setCardClicked(null)) 
        
        expect(result.current.cardClicked).toBe(null)
        expect(result.current.selection).toBe(null)
        
    })

    it('call handleCardClicked() when card is clicked', () => {
        const result = setup()
        const cardClickedMock = {...cardClickedTemplate}
        
        act(() => result.current.setCardClicked(cardClickedMock))
        
        expect(handleClickCard).toHaveBeenCalledOnce()
        
    })
})