import React, { useState, useEffect } from "react";
import {
    Link,
} from "react-router-dom";



const Playground = () => {


    return (
        <>
        <header></header>
            <main>
                <div className='under_construction'>Strona wciąż w Produkcji :)</div>
                <div className='memory_link'><Link to="/memory"><br></br><button className='memoryButton'> Gra Memory<br></br>Zagraj !</button></Link></div>
                <div className='clouds'><div className='cloud_1'></div><div className='cloud_2'></div></div>
                <div className='clouds_1'><div className='cloud_1'></div><div className='cloud_2'></div></div>
                <div className='clouds_2'><div className='cloud_1'></div><div className='cloud_2'></div></div>
                <div className='clouds_3'><div className='cloud_1'></div><div className='cloud_2'></div></div>
                <div className='sun'></div>
                <div className='animals'>
                    <div className='elefant'>
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
                        <div className='ground_elefant'></div>
                    </div>
                    <div className='cat'>
                        <div className='cat_head'>
                            <div className='cat_left_ear'></div>
                            <div className='cat_right_ear'></div>
                            <div className='cat_left_eye'></div>
                            <div className='cat_right_eye'></div>
                            <div className='cat_nose'></div>
                            <div className='cat_mouth'></div>
                            <div className='cat_whiskers_1'></div>
                            <div className='cat_whiskers_2'></div>
                        </div>
                        <div className='cat_torso'></div>
                        <div className='cat_rear_legs'></div>
                        <div className='cat_front_legs'></div>
                        <div className='cat_tail'></div>
                        <div className='ground_cat'></div>
                    </div>
                    <div className='monkey'>
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
                        <div className='ground_monkey'></div>
                    </div>
                    <div className='fox'>
                        <div className='fox_head'>
                            <div className='fox_left_ear'></div>
                            <div className='fox_right_ear'></div>
                            <div className='fox_left_eye'></div>
                            <div className='fox_right_eye'></div>
                            <div className='fox_nose'></div>
                            <div className='fox_nose_2'></div>
                            <div className='fox_mouth'></div>
                            <div className='fox_whiskers_1'></div>
                            <div className='fox_whiskers_2'></div>
                        </div>
                        <div className='fox_torso'></div>
                        <div className='fox_rear_legs'></div>
                        <div className='fox_front_legs'></div>
                        <div className='fox_tail'></div>
                        <div className='ground_fox'></div>
                    </div>
                </div>
                <div className="banner">
                    <h1 className='banner_h1 multicolortext1'>Witaj</h1>
                    <h2 className='banner_h2 multicolortext1'>na</h2>
                    <h1 className='banner_h1 multicolortext2'>Placu Zabaw !</h1>
                </div>
            </main>
            <footer><div></div>&copy; Copyright <span>&nbsp;Bartosz Jakubiec </span></footer>
        </>
    );
};
export default Playground;