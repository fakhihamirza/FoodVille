import React, { Component } from 'react'
import abc from '../4.jpg'
export class MainPage extends Component {
    render() {
        return (      
        <>
        <div className="Cardd">
            <div className="CardInner ">
                <label className = 'x-large'>Welcome Home Foodies! Your search for dinner today is now over.</label>
                    <div className="InputContainer" align = 'center'>
                    <input className="loginplaceholders center" type="text" align="center" placeholder="search..." style={{width: 300}}/>
                </div>
            </div>
        </div>
        <div className=" containerr">
            <div className="column">
                <img src={abc} alt="food" align = 'right'style={{width:600}}></img>
             </div>
            <div className="column">
            <p className="x-large" align='left'>We bring you all the best resturants in the country at a single place. Browse through to find your favourites and tell us what you think about them!</p>
            </div>
        </div>
        </>
        )
    }
}

export default MainPage
