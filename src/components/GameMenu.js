import { useState, useEffect } from 'react';

import Deck from './Deck';
import Lib from "./../lib";

function GameMenu(){
	let [screen, setScreen] = useState('switch cards');
	
	let [deckCards, setDeckCards] = useState([]);
	let [randomCards, setRandomCards] = useState([]);

	let [switchAvailable, setSwitchAvailable] = useState(2);

	useEffect(() => { fetch("http://127.0.0.1:3002/cards")
	// useEffect(() => { fetch("/cards")
		.then(res => res.json()).then(data => setDeckCards(Lib.sort(data, "range_id"))); 
	}, []);

	switch(screen){
		case 'switch cards':
			return renderSwitchMenu();
		default:
			return renderSwitchMenu();
	};

	// let switchCardToRandom = (card_id) => {
	// 	let newDeck = [];
	// 	deckCards.forEach(card => {
	// 		if(card.id === card_id){ setRandomCards(Lib.sort([...randomCards, card], 'id')); }
	// 		else { newDeck.push(card); }
	// 	});
	// 	setDeckCards(Lib.sort(newDeck, 'id'));
	// };

	function switchCardToRandom(card_id){
		if(switchAvailable){
			let newDeck = [];
			deckCards.forEach(card => {
				if(card.id === card_id){ setRandomCards(Lib.sort([...randomCards, card], 'range_id')); }
				else { newDeck.push(card); }
			});
			setDeckCards(Lib.sort(newDeck, 'range_id'));
			setSwitchAvailable(switchAvailable-1);
		}
	};

	function switchCardToDeck(card_id){
		let newRandom = [];
		randomCards.forEach(card => {
			if(card.id === card_id){ setDeckCards(Lib.sort([...deckCards, card], 'range_id')); }
			else { newRandom.push(card); }
		});
		setRandomCards(Lib.sort(newRandom, 'range_id'));
		setSwitchAvailable(switchAvailable+1);
	};

	function renderSwitchMenu(){
		return (
			<div className="container cursor-1">
				<div className="box a1 container min-height-150 border">
					<div className="box b2-3 container center padding-10" style={{color:"#fff"}}>
						<div className="box b2 em13 bold avant-garde center">TROCAR CARTAS</div>
						<div className="box b2 container">
							<div className="box b1 container menu-btn2 height-50 margin-top-10 noselect cursor-3" onClick={() => setScreen('login')}><div className="box b1 center bold avant-garde" style={{color:'#fff'}}>NÃO TROCAR</div></div>
							<div className="box b1 container menu-btn2 height-50 margin-top-10 noselect cursor-3" onClick={() => setScreen('login')}><div className="box b1 center bold avant-garde" style={{color:'#fff'}}>TROCAR</div></div>
						</div>
					</div>
					<div className="box b3 container">
						<div className="mobile-box b1 georgia center noselect margin-top-5" style={{color:"#d0a661"}}>{"Cartas para troca"}</div>
						<Deck title="Coleção de cartas" cards={randomCards} container={ window.innerHeight*0.7 } switchCardTo={switchCardToDeck}/>
					</div>
				</div>
				<div className="mobile-box b1 georgia center noselect margin-top-5" style={{color:"#d0a661"}}>{"Cartas no baralho"}</div>
				<Deck title="Coleção de cartas" cards={deckCards} container={ window.innerHeight*0.7 } switchCardTo={switchCardToRandom}/>
			</div>
		)
	};
};

export default GameMenu;