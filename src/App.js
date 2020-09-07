import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [chosenOnes, setChosenOnes] = useState([])
  const mockCards = [
    {
      "value": 8,
      "name": "A",
      "suit": "Hearts"
    },
    {
      "value": 9,
      "name": "2",
      "suit": "Hearts"
    },
    {
      "value": 10,
      "name": "3",
      "suit": "Hearts"
    },
    {
      "value": 1,
      "name": "4",
      "suit": "Hearts"
    },
    {
      "value": 2,
      "name": "5",
      "suit": "Hearts"
    },
    {
      "value": 3,
      "name": "6",
      "suit": "Hearts"
    },
    {
      "value": 13,
      "name": "7",
      "suit": "Hearts"
    },
    {
      "value": 6,
      "name": "J",
      "suit": "Hearts"
    },
    {
      "value": 5,
      "name": "Q",
      "suit": "Hearts"
    },
    {
      "value": 7,
      "name": "K",
      "suit": "Hearts"
    },
    {
      "value": 8,
      "name": "A",
      "suit": "Diamonds"
    },
    {
      "value": 9,
      "name": "2",
      "suit": "Diamonds"
    },
    {
      "value": 10,
      "name": "3",
      "suit": "Diamonds"
    },
    {
      "value": 1,
      "name": "4",
      "suit": "Diamonds"
    },
    {
      "value": 2,
      "name": "5",
      "suit": "Diamonds"
    },
    {
      "value": 3,
      "name": "6",
      "suit": "Diamonds"
    },
    {
      "value": 11,
      "name": "7",
      "suit": "Diamonds"
    },
    {
      "value": 6,
      "name": "J",
      "suit": "Diamonds"
    },
    {
      "value": 5,
      "name": "Q",
      "suit": "Diamonds"
    },
    {
      "value": 7,
      "name": "K",
      "suit": "Diamonds"
    },
    {
      "value": 12,
      "name": "A",
      "suit": "Spades"
    },
    {
      "value": 9,
      "name": "2",
      "suit": "Spades"
    },
    {
      "value": 10,
      "name": "3",
      "suit": "Spades"
    },
    {
      "value": 1,
      "name": "4",
      "suit": "Spades"
    },
    {
      "value": 2,
      "name": "5",
      "suit": "Spades"
    },
    {
      "value": 3,
      "name": "6",
      "suit": "Spades"
    },
    {
      "value": 4,
      "name": "7",
      "suit": "Spades"
    },
    {
      "value": 6,
      "name": "J",
      "suit": "Spades"
    },
    {
      "value": 5,
      "name": "Q",
      "suit": "Spades"
    },
    {
      "value": 7,
      "name": "K",
      "suit": "Spades"
    },
    {
      "value": 8,
      "name": "A",
      "suit": "Clubs"
    },
    {
      "value": 9,
      "name": "2",
      "suit": "Clubs"
    },
    {
      "value": 10,
      "name": "3",
      "suit": "Clubs"
    },
    {
      "value": 14,
      "name": "4",
      "suit": "Clubs"
    },
    {
      "value": 2,
      "name": "5",
      "suit": "Clubs"
    },
    {
      "value": 3,
      "name": "6",
      "suit": "Clubs"
    },
    {
      "value": 4,
      "name": "7",
      "suit": "Clubs"
    },
    {
      "value": 6,
      "name": "J",
      "suit": "Clubs"
    },
    {
      "value": 5,
      "name": "Q",
      "suit": "Clubs"
    },
    {
      "value": 7,
      "name": "K",
      "suit": "Clubs"
    }
  ]
  const [players, setPlayers] = useState(
    [
      {
        id: 1,
        name: "Janete",
        cards: []
      },
      {
        id: 2,
        name: "Juão",
        cards: []
      },
      {
        id: 3,
        name: "Teobaldo",
        cards: []
      },
      {
        id: 4,
        name: "Jusé",
        cards: []
      },
      {
        id: 5,
        name: "Jucimara",
        cards: []
      }
    ]
  )

  const [actualPlayer, setActualPlayer] = useState(1)

  const getWinner = () => {
   let winnerCard
    chosenOnes.forEach(co => {
      if (!winnerCard || co.value >= winnerCard.value) winnerCard = co
    })

    return winnerCard && winnerCard.name + '---' + winnerCard.suit + '---' + getPlayer(winnerCard.player_id).name
  }

  const onCardClick = card => {
    setChosenOnes(cs => [...cs, { ...card, player_id: getPlayer(actualPlayer).id }])
    setActualPlayer(ap => ap === players.length ? 1 : ap+1)
  }


  useEffect(() => {

  }, [actualPlayer])

  const getPlayer = playerId => players.find(p => playerId === p.id)

  return (
    <div className="App">
      <div>Vez de { getPlayer(actualPlayer) && getPlayer(actualPlayer).name }</div>
      {getWinner()}
      <div className="cards-wrapper">
        {mockCards.sort((a, b) => b.value - a.value).map(card => (
          <div className="card" key={card.id} onClick={() => onCardClick(card)}>{card.name +'-'+ card.suit + '-' + card.value}</div>
        ))}
      </div>
    </div>
  )
}

export default App
