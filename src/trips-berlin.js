import React from "react";
// import { BrowserRouter , Route } from 'react-router-dom';
// import { FormattedMessage } from 'react-intl';


export default class Berlin extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div  id="componentz" className="berlin-comp">
                <h1> TRAVEL TO Berlin </h1>
                <div>
                    <div>
                        <iframe width="700" height="400"  src="https://www.bing.com/maps/embed?h=400&w=700&cp=52.512230999999986~13.388328000000019&lvl=11&typ=d&sty=r&src=SHELL&FORM=MBEDV8" scrolling="no">
                        </iframe>
                        <div style="white-space: nowrap; text-align: center; width: 700px; padding: 6px 0;">
                            <a id="largeMapLink"  href="https://www.bing.com/maps?cp=52.512230999999986~13.388328000000019&amp;sty=r&amp;lvl=11&amp;FORM=MBEDLD">View Larger Map</a> &nbsp; | &nbsp;
                            <a id="dirMapLink"  href="https://www.bing.com/maps/directions?cp=52.512230999999986~13.388328000000019&amp;sty=r&amp;lvl=11&amp;rtp=~pos.52.512230999999986_13.388328000000019____&amp;FORM=MBEDLD">Get Directions</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
