import { beforeEach, describe, expect, it } from 'vitest'
import { Card } from '../../types'
import { attributeValues, starterDistribution } from '../utils'

interface CardCxt {
    card: Card,
    cardExpect: Card
}

describe('attributeValues()', () => {

    beforeEach<CardCxt>(context => {
            context.card = {symbole: "♥️", designation: 'A'}
            context.cardExpect = {symbole: "♥️", designation: 'A'}
        }
    )
    
    it<CardCxt>('attributes value 1 for As', ({card, cardExpect}) => {
        cardExpect.value = 1

        const result = attributeValues([card])
        expect(result).toStrictEqual([cardExpect])
    })


    it<CardCxt>('attributes value 13 for King', ({card, cardExpect}) => {
        card.designation = 'K'
        cardExpect.designation = 'K'
        cardExpect.value = 13

        const result = attributeValues([card])
        expect(result).toStrictEqual([cardExpect])
    })


    it<CardCxt>('attributes value 12 for Queen', ({card, cardExpect}) => {
        card.designation = 'Q'
        cardExpect.designation = 'Q'
        cardExpect.value = 12

        const result = attributeValues([card])
        expect(result).toStrictEqual([cardExpect])
    })


    it<CardCxt>('attributes value 11 for Jack', ({card, cardExpect}) => {
        card.designation = 'J'
        cardExpect.designation = 'J'
        cardExpect.value = 11

        const result = attributeValues([card])
        expect(result).toStrictEqual([cardExpect])
    })


    it<CardCxt>('attributes value same number than designation', ({card, cardExpect}) => {
        card.designation = 5
        cardExpect.designation = 5
        cardExpect.value = 5

        const result = attributeValues([card])
        expect(result).toStrictEqual([cardExpect])
    })
})




describe('starterDistribution()', () => {
    const starterDeck = starterDistribution()

    it('should return starterDeck with 8 cell', () => {
        expect(starterDeck).toHaveLength(8)
    })

    it('should have 7 cards in 1st cell', () => {
        expect(starterDeck[0]).toHaveLength(7)
    })

    it('should have 7 cards in 2nd cell', () => {
        expect(starterDeck[1]).toHaveLength(7)
    })

    it('should have 7 cards in 3rd cell', () => {
        expect(starterDeck[2]).toHaveLength(7)
    })

    it('should have 7 cards in 4th cell', () => {
        expect(starterDeck[3]).toHaveLength(7)
    })

    it('should have 6 cards in 5th cell', () => {
        expect(starterDeck[4]).toHaveLength(6)
    })

    it('should have 6 cards in 6th cell', () => {
        expect(starterDeck[5]).toHaveLength(6)
    })

    it('should have 6 cards in 7th cell', () => {
        expect(starterDeck[6]).toHaveLength(6)
    })

    it('should have 6 cards in 8th cell', () => {
        expect(starterDeck[7]).toHaveLength(6)
    })
})