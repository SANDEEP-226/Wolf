import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div className="AboutImg">

                    <img src={this.props.imgSrc1} />

                    <img src={this.props.imgSrc2} />
                </div>
                <h2>The global wild wolf population was estimated to be 300,000 in 2003 and is considered to be of Least Concern by the International Union for Conservation of Nature (IUCN). <br />Wolves have a long history of interactions with humans, having been despised and hunted in most pastoral communities because of their attacks on livestock, while conversely being respected in some agrarian and hunter-gatherer societies.<br /> The wolf is also considered the ancestor of most domestic dog breeds. Although the fear of wolves exists in many human societies, the majority of recorded attacks on people have been attributed to animals suffering from rabies. Wolf attacks on humans are rare because wolves are relatively few, live away from people, and have developed a fear of humans because of their experiences with hunters, ranchers, and shepherds.</h2>
            </div>
        );
    }
}

export default About;