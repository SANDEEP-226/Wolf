import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="HomeImg">
                <h1>The WOLF</h1>
                <img src={this.props.imgSrc} />
                <h4>The wolf (Canis lupus[a]), also known as the gray wolf or grey wolf, is a large canine native to Eurasia and North America. More than thirty subspecies of Canis lupus have been recognized, and gray wolves, as colloquially understood, comprise non-domestic/feral subspecies. <br />The wolf is the largest extant member of the family Canidae, males averaging 40 kg (88 lb) and females 37 kg (82 lb). </h4>
            </div>
        );
    }
}

export default Home;