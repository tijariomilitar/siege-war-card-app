import React, { useState, useEffect } from 'react';
// import io from "socket.io-client";

import Deck from "./Deck";
import Lib from "./../lib";
import DeckInfo from "./DeckInfo";
// import EmpireMenu from "./EmpireMenu";
import LeaderMenu from "./LeaderMenu";

import home_icon from "./../image/icon/home-white.png";
// const socket = io("localhost:3001");
const DeckMenu = ({ setScreen }) => {
	let [collectionCards, setCollectionCards] = useState([]);
	let [deckCards, setDeckCards] = useState([]);
	let [collectionLeaders, setCollectionLeaders] = useState([]);
	let [deckLeader, setDeckLeader] = useState({});

	useEffect(() => { fetch("http://127.0.0.1:3002/cards")
	// useEffect(() => { fetch("/cards")
		.then(res => res.json()).then(data => setCollectionCards(Lib.sort(data, "range_id"))); 
	}, []);

	useEffect(() => { fetch("http://127.0.0.1:3002/leaders")
	// useEffect(() => { fetch("/leaders")
		.then(res => res.json()).then(data => {
			setCollectionLeaders(data);
			setDeckLeader(data[0]);
		});
	}, []);

	let switchCardToDeck = (card_id) => {
		let newCollection = [];
		collectionCards.forEach(card => {
			if(card.id === card_id){ setDeckCards(Lib.sort([...deckCards, card], 'range_id')); }
			else { newCollection.push(card); }
		});
		setCollectionCards(Lib.sort(newCollection, 'range_id'));
	};

	let switchCardToCollection = (card_id) => {
		let newDeck = [];
		deckCards.forEach(card => {
			if(card.id === card_id){ setCollectionCards(Lib.sort([...collectionCards, card], 'range_id')); }
			else { newDeck.push(card); }
		});
		setDeckCards(Lib.sort(newDeck, 'range_id'));
	};

	let setLeader = (leader_id) => {
		let leader = collectionLeaders.filter(leader => leader.id === leader_id);
		setDeckLeader(leader[0]);
	};

	return (
		<div className="container h-center cursor-1">
			<div className="box b1 container" style={{ height: window.innerHeight*0.1 }}>
				<div className="mobile-box b8 container" style={{height: window.innerHeight*0.099}}>
					<div className="bg box b1 size-30 center opacity-out-08" style={{color:'#fff', backgroundImage: "url("+home_icon+")"}}
					onClick={() => setScreen('home')}></div>
				</div>
				<div className="mobile-box b3-4" style={{height: window.innerHeight*0.099}}><div className="center">Selecionar Soberania</div></div>
			</div>
			<div className="box a2-5 container padding-10">
				<div className="mobile-box b1 georgia center noselect margin-top-5" style={{color:"#d0a661"}}>{"Coleção de cartas"}</div>
				<Deck title="Coleção de cartas" cards={collectionCards} container={window.innerHeight*0.7 } switchCardTo={switchCardToDeck}/>
			</div>
			<div className="box a5 container padding-10 h-center">
				<div className="mobile-box b1 center opacity-08 noselect" style={{color: '#e4ba75'}}>Líder</div>
				<LeaderMenu collectionLeaders={collectionLeaders} setLeader={setLeader} />
				<DeckInfo deckLeader={deckLeader} collection={collectionCards} deck={deckCards} />
			</div>
			<div className="box a2-5 container padding-10">
				<div className="mobile-box b1 georgia center noselect margin-top-5" style={{color:"#d0a661"}}>{"Cartas no baralho"}</div>
				<Deck title="Coleção de cartas" cards={deckCards} container={window.innerHeight*0.7 } switchCardTo={switchCardToCollection} />
			</div>
		</div>
	);
};

export default DeckMenu;