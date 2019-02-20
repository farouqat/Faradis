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
            <div  id="componentz" className="canary_comp">
                <h1> TRAVEL TO CANARY </h1>
                <video width="70%" height="auto" controls >
                    <source src="https://faradistravel.de/.cm4all/uproc.php/0/la%20palma%20houses/.gh_Large.mp4/video.mp4?_=167af22d1d0" type="video/mp4" />
                </video>
                <p className="trips_tags"> The Canary Islands are located in the Atlantic ocean in  front of Morocco and West Sahara. </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d1493590.8066156895!2d-18.492692557815584!3d28.314100894455464!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6bf20c6a87a13b%3A0x8e2037d22330882d!2sLa+Palma!5e1!3m2!1sen!2sde!4v1550684600239" width="700" height="450"></iframe>
            </div>

        );
    }
}
