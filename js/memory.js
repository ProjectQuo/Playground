import React, { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
//zeby zatrzymac timer trzeba  bylo uzyc useRef

const Memory = () => {

    const cardsColor = ['card1', 'card1', 'card2', 'card2',
        'card3', 'card3', 'card4', 'card4', 'card5', 'card5',
        'card6', 'card6', 'card7', 'card7', 'card8', 'card8',
        'card9', 'card9'];

    const cardsFields = ['c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12', 'c13', 'c14', 'c15', 'c16', 'c17'];

    const [activeCards, setActiveCards] = useState([]);
    const [inactiveCards, setInactiveCards] = useState([]);
    const [turnCounter, setTurnCounter] = useState(0);
    const handleClick = e => {

        const activeCard = e.target;
        activeCard.classList.remove('hidden'); //ustawiamy karte na aktywna poprzez zdjecie klasy hidden


        const id1 = activeCards[0];
        const id2 = activeCard.id
        const color1 = getColorCard(id1);
        const color2 = getColorCard(id2);

        if (id1 === id2) {
            return;   //zapobiega klikaniu 2 razy w jeden element
        }

        if (activeCards.length === 1) {
            // zlicacznie prob
            setTurnCounter((prevValue) => prevValue + 1);
            setTimeout(() => {
                if (color1 === color2) { //porównanie kart
                    console.log('kolor ten sam!');
                    setInactiveCards(prev => [...prev, id1, id2]); //dodanie pary kart
                } else {
                    console.log('zly kolor');
                }

                setActiveCards(() => []); //zaznacza aktywne karty

            }, 500);

        }
        setActiveCards(prev => [...prev, activeCard.id]); //nadaje ID


    }
    // console.log(activeCards, 'active!');

    const [indexArr, setIndexArr] = useState([]);   // definujemy mala tablice w state
    useEffect(() => {   //useEffect wywoluje sie tylko raz
        const arr = [];         //definiujemy pusta tablice 
        const len = cardsColor.length;   //definiujemy dlugosc tabicy cardsColor
        for (let i = 0; i < len; i++) {        //petla for do przeiterowania dlugosci tablicy
            const position = Math.floor(Math.random() * cardsColor.length); //definiujemy losowa pozycje karty
            arr.push(cardsColor[position]); //dodajemy wylosowana karte do tablicy na planszy
            cardsColor.splice(position, 1) //uzywamy splice do wyodrebnienia juz wylosowanej karty

        }
        setIndexArr(arr);
    }, []);


    const getColorCard = function (id) {    //wybieranie karty
        let color = null;
        cardsFields.forEach((cardId, index) => {
            if (cardId === id) {
                color = indexArr[index]
            }
        })

        return color;       //zwraca wybrana karte
    }

    const resetClick = () => {          //restart gry
        window.location.reload(false);
    }

    const [timer, setTimer] = useState(0);      //odliczanie czasu gry
    let idInterval = useRef();
    useEffect(() => {
        idInterval.current = setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000);
    },
        []);


    useEffect(() => {       //metoda niezbedna do zatrzymania timera na koniec gry
        console.log(idInterval.current, 'interval');
        if (cardsFields.length === inactiveCards.length) {
            clearInterval(idInterval.current);
        }
    }, [inactiveCards]);

    return (
        <><div className='memory_body'>
            <div className='memory_header'>
                {/* porównanie dlugosci tablicy kart z tablica kart odkrytych co pozwala zakonczyc gre */}
                {cardsFields.length === inactiveCards.length && <h1 className='endMessage'>Brawo! Udało Ci się wygrać!<br />
    Twój wynik to {turnCounter} tur oraz {timer} sekund!</h1>}
                <div className='memory_link'><Link to="/"><button className='memory_button'>Powrót na stronę główną</button></Link></div>
            </div>
            <div className='memory_main'>
                <div className='reset counter'><button className='memory_button' onClick={resetClick}>Nowa Gra</button></div>
                <div className='gameTimer counter'>Czas gry: {timer}</div>
                <div className='turnCounter counter'>Liczba prób: {turnCounter}</div>
                <div className='board'>
                    {/* zakrycie kart na planszy */}
                    {cardsFields.map((id, index) => {
                        let className = 'card';
                        if (!activeCards.includes(id) && !inactiveCards.includes(id)) {
                            className += ' hidden'
                        }
                        else if (inactiveCards.includes(id)) { className += ' off' }
                        //wywolanie pozycji karty z tablicy z o indeksie [index]
                        return <div onClick={handleClick} className={className + ' ' + indexArr[index]} id={id} key={id}></div>;
                    })}

                </div>
                <div className='elefant2'>
                    <div className='left_ear'></div>
                    <div className='elefant_head'>
                        <div className='right_ear'></div>
                        <div className='left_eye'></div>
                        <div className='right_eye'></div>
                        <div className='mouth'></div>
                        <div className='trumpet_1'></div>
                        <div className='trumpet_2'></div>
                    </div>
                    <div className='elefant_torso'></div>
                    <div className='front_legs'></div>
                    <div className='rear_legs'></div>
                    <div className='tail'></div>
                </div>
                <div className='monkey_2'>
                    <div className='monkey_left_ear'></div>
                    <div className='monkey_head'>
                        <div className='monkey_right_ear'></div>
                        <div className='monkey_left_eye'></div>
                        <div className='monkey_right_eye'></div>
                        <div className='monkey_nose'></div>
                        <div className='monkey_mouth'></div>
                        <div className='monkey_face'></div>
                        <div className='monkey_left_hand'></div>
                        <div className='monkey_right_hand'></div>
                    </div>
                    <div className='monkey_torso'></div>
                    <div className='monkey_front_legs'></div>
                    <div className='monkey_rear_legs'></div><div className='monkey_legs'></div>
                    <div className='monkey_tail'></div>
                </div>
            </div>
            <div className='memory_footer'></div>
        </div>
        </>
    )
}


export default Memory;