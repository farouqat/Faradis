import React from "react";
// import { BrowserRouter , Route } from 'react-router-dom';
// import { FormattedMessage } from 'react-intl';


export default class CanaryIslands extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div className="canary_comp">
                <h1> TRAVEL TO CANARY </h1>
                <div className="video"> HERE will come a video </div>
                <div> The Canary Islands are located in the Atlantic ocean in  front of Morocco and West Sahara.</div>
                <div>
                    <div>
                        <iframe width="700" height="400" frameBorder="0" src="https://www.bing.com/maps/embed?h=400&w=700&cp=29.885651709713123~-12.466071169117651&lvl=6&typ=d&sty=r&src=SHELL&FORM=MBEDV8" scrolling="no">
                        </iframe>
                        <div>
                            <a id="largeMapLink" rel="noopener norefferer" href="https://www.bing.com/maps?cp=29.885651709713123~-12.466071169117651&amp;sty=r&amp;lvl=6&amp;FORM=MBEDLD"> View Larger Map </a>
                            <a id="dirMapLink" rel="noopener norefferer" href="https://www.bing.com/maps/directions?cp=29.885651709713123~-12.466071169117651&amp;sty=r&amp;lvl=6&amp;rtp=~pos.29.885651709713123_-12.466071169117651____&amp;FORM=MBEDLD"> Get Directions</a>
                        </div>
                    </div>
                </div>
                <video width="700" height="400" controls >
                    <source src="https://faradistravel.de/.cm4all/mediadb/.la%20palma_Medium.mp4/video.mp4" type="video/mp4" />
                </video>
                Your browser does not support the video tag.
                <div> heyyyyyyyyy </div>
                <div> heyyyyyyyyy </div>
                <div> heyyyyyyyyy </div>
                <div> heyyyyyyyyy </div>
            </div>

        );
    }
}
