import './style/Cell.css'
import { CARD_SIZE } from '../../globalConstant';
import cards from '../../Data/cards.json'
import Card from '../Card';
import { useState } from 'react';


const Cell = ({children}) => {

  return (
    <div className="cell-container">
        <div className="cell-mark"  style={{width: CARD_SIZE.width, height: CARD_SIZE.height}}></div>
        <div className={`cards-container`}>
          {children}
        </div>
    </div>
  )
}





export const BonusCell = () => {

  const [bonusCard, setBonusCard] = useState(null)

  return (
    <Cell>
      {bonusCard && <Card card={bonusCard}/>}
    </Cell>
  )
}





export const WinCell = () => {

  const [winCards, setWinCards] = useState([
    cards[0],
    cards[1]
  ])

  return (
    <Cell>
      {winCards && winCards.map(
        (winCard, index) => 
          <Card 
            key={index} 
            index={index}
            card={winCard}
          />
        )
      }
    </Cell>
  )
}





export const BoardCell = () => {

  const [winCards, setWinCards] = useState([
    cards[0],
    cards[1]
  ])

  return (
    <Cell>
      {winCards && winCards.map(
        (winCard, index) => 
          <Card 
            key={index} 
            index={index}
            position='boardcell'
            card={winCard}
          />
        )
      }
    </Cell>
  )
}





export default Cell