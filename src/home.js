import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Carousel from './carousel.js';
import { FormattedMessage } from 'react-intl';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }
    componentDidMount(){
        console.log("this.state",this.state);
        console.log("localStorage.faradisLang",localStorage.faradisLang);

    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div  className="home_comp">
                        <Carousel />
                        <div className={localStorage.faradisLang}>
                            <div className="introductions_wrapper" >
                                <div className={"text_div " + localStorage.faradisLang}>
                                    <FormattedMessage id = "welcome_text"></FormattedMessage>
                                </div>
                                <div className={"text_div " + localStorage.faradisLang}>
                                    <FormattedMessage id="faradis_meaning"></FormattedMessage>
                                </div>
                                <div  className={"text_div " + localStorage.faradisLang}>
                                    <FormattedMessage id="contact_info"></FormattedMessage>
                                </div>
                                <div className={"text_div " + localStorage.faradisLang}>
                                    <FormattedMessage id="tel"></FormattedMessage>
                                </div>
                                <div className={"text_div " + localStorage.faradisLang}>
                                    <FormattedMessage id="mob"></FormattedMessage>
                                </div>
                                <div className={"text_div " + localStorage.faradisLang}>
                                    <FormattedMessage id="mob2"></FormattedMessage>
                                </div>
                                <div className={"text_div " + localStorage.faradisLang}>
                                    <FormattedMessage id="email"></FormattedMessage>
                                </div>
                                <div className={"text_div " + localStorage.faradisLang}>
                                    <FormattedMessage id="rashad"></FormattedMessage>
                                </div>
                                <div className={"text_div " + localStorage.faradisLang}>
                                    <FormattedMessage id="maneger"></FormattedMessage>
                                </div>
                                <div className={"text_div " + localStorage.faradisLang}>
                                    <FormattedMessage id="rathous"></FormattedMessage>
                                </div>
                                <div className={"text_div " + localStorage.faradisLang}>
                                    <FormattedMessage id="pz"></FormattedMessage>
                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
