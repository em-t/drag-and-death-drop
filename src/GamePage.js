import React, {Component} from 'react';
import './GamePage.css';

class GamePage extends Component {
    render() {
        return (
            <div className="kikkare">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/M4d20Tyzlv0" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
        );
    }
}

export default GamePage;