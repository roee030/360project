import React from 'react';
import './SearchEngie.css';
class SearchEngie extends React.Component{
    onInputChange = e => {
        console.log(e.target.value);
    }
    render(){
        return(
            <div className="container" >
                <div className="heading">
                    <span className="title1">Did you know we have your future home?</span>
                    <div className="search">
                        <select className="options">
                            <option value="buy">Buy</option>
                            <option value="rent">Rent</option>
                        </select>
                        <input className="search-text" type="text" placeholder = "type a city or address" />
                        <button className="confirm-serach">sumbit</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default SearchEngie;