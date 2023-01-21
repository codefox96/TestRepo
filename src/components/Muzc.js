import React from "react";
import "./Muzc.css";


//"extends React.Component" gives your component access to React.Component's functions.
export default class Muzc extends React.Component {

    // React components has a built-in state object.

    // The state object is where you store property values that belongs to the component.

    // When the state object changes, the component re-renders.

    constructor (props) {
        super(props);
            
        this.state = {
            lyric: "",
            artist: ""
        };
        
//  Passing the state as an argument to the generateLyric() function
        this.generateLyric = this.generateLyric.bind(this);
    }

    generateLyric() {
        fetch("http://localhost:8080/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    lyric: data.lyric,
                    artist: data.artist
                });
            })
            .catch(error => {
                this.setState({ error });
              });
    }

    // allows us to execute the React code when the component is already placed in the DOM
    componentDidMount() {
        this.generateLyric();
    }

    // Renders page
    render() {
        let lyric = this.state.lyric;
        let artist = this.state.artist;

        return (
            <div>
                <h1 className="lyric">{lyric}</h1> 

                <p className="lyric" id="text">
                    {artist}
                </p>

                <div>
                <button className="cta" onClick={this.generateLyric} id="new-quote">
                    New quote
                </button>
                </div>
            </div>
            
            
        );
    }
}

