import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Carousel from './carousel.js';
import { FormattedMessage } from 'react-intl';



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
                    <div  className="home_comp">
                    
                        <Carousel />
                        <div className="introductions_wrapper" >
                            <div className="introductions_div">
                                <FormattedMessage id = "welcome_text"></FormattedMessage>
                            </div>
                            <div className="introductions_div">
                                <FormattedMessage id="faradis_meaning"></FormattedMessage>
                            </div>
                            <div className="introductions_div">
                                <FormattedMessage id="contact_info"></FormattedMessage>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
