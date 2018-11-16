import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';



class Front extends Component {
    clicker = () => {
        let path = `/gamepage`;
        this.props.history.push(path);
        console.log("CLICKED");
    }
    render() {
        return <div className="App">
            <body className="App-header">
            <div className="grid-container">
                <div className="lefttop"><img src={logo} className="logo" alt="logo" /></div>
                <div className="leftbottom"><p>WELCOME TO THE RUPAUL'S DRAG AND DROP DEAD RACE!</p></div>
                <div className="middle"></div>
                <div className="righttop"><p>GENTLEMEN, START YOUR ENGINES, AND MAY THE BEST WOMAN WIN</p></div>
                <div className="rightbottom"><img src="https://www.freeiconspng.com/uploads/purple-right-arrow-icon-28.png" alt="arrow" onClick={this.clicker} /></div>
            </div>
            </body>
        </div>;
    }
}

export default Front;
