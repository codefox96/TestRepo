import React from "react";
import "./Muzc.css";

export default class Muzc extends React.Component {
    constructor (props) {
        super(props);
            
        this.state = {
            lyric: "",
            artist: ""
        };
        //Where lyric and artist needs to be handled
        this.generateLyric = this.generateLyric.bind(this);

    }

    generateLyric() {
        fetch('https://swapi.dev/api/people/1')
        .then(response => response.json())
        .then(data => {
            this.setState({
                lyric: data.name,
                artist: data.birth_year
            });
        })
    }

    render() {
        let lyric = this.state.lyric;
        let artist = this.state.artist;

        return (
            // <div>
            //     <p>{lyric}</p>
            //     <p>{artist}</p>
            // </div>
            <p className="lyric" id="text">
                {lyric}
            </p>
            
        );
    }
}

