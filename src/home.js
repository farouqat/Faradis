import React from "react";
import { BrowserRouter , Route } from 'react-router-dom';
import Carousel from './carousel.js';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="home_comp">
                        <Route
                            path="/"
                            render={() => (
                                <Carousel />
                            )}
                        />
                        <div className="introductions_wrapper">
                            <div className="introductions_div">
                                <p>Welcome to the website of  Faradis Travel. Faradis is a  tourism  and travel company enthusiastic towards environment friendliness and affordability.
                                We are located in the german capital Berlin.  It is our pleasure to be  your travel partner in Europe. We organize your vacation with the best programs and the finest service. </p>
                            </div>
                            <div className="introductions_div">
                                <p>Faradis is arabic and means heavens.   The idea of the company is to take our clients to the heavens of the earth. We work to creat more trips, make sure to stay up to date and experience  each of them.
                                We hope you enjoy our website and we look forward to welcoming you in one of our trips.</p>
                            </div>
                            <div className="introductions_div">
                                <p>Make a tour in our website and contact us on the following contact Infos:
                                Tel:  0049-3086806573
                                Mob:  0049-17670040289
                                Mob2:  0049-17663316865
                                E-Mail: info@faradistravel.de
                                Rashad Idris
                                General Manager
                                Rathausstr. 7
                                10178 Berlin  </p>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
