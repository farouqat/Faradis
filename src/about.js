import React from "react";
import { FormattedMessage } from 'react-intl';

export default class About extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div className={localStorage.faradisLang}>
                <div id="componentz"  className="about-comp">
                    <h1 className="text_div">
                        <FormattedMessage id = "about_us"></FormattedMessage>
                    </h1>
                    <div className="text_div">
                        <FormattedMessage id = "together"></FormattedMessage>
                    </div>
                    <div className="text_div">
                        <FormattedMessage id = "expect"></FormattedMessage>
                    </div>
                    <h3 className="text_div">
                        <FormattedMessage id = "what_we_offer"></FormattedMessage>
                    </h3>
                    <div className="text_div">
                        <FormattedMessage id = "offer1"></FormattedMessage>
                    </div>
                    <div className="text_div">
                        <FormattedMessage id = "offer2"></FormattedMessage>
                    </div>
                    <div className="text_div">
                        <FormattedMessage id = "offer3"></FormattedMessage>
                    </div>
                    <div className="text_div">
                        <FormattedMessage id = "offer4"></FormattedMessage>
                    </div>
                    <h2 className="text_div">
                        <FormattedMessage id = "management"></FormattedMessage>
                    </h2>
                    <div className="text_div">
                        <FormattedMessage id = "management_text1"></FormattedMessage>
                    </div>
                    <div className="text_div">
                        <FormattedMessage id = "management_text2"></FormattedMessage>
                    </div>
                    <h2 className="text_div">
                        <FormattedMessage id = "team"></FormattedMessage>
                    </h2>
                    <div className="text_div">
                        <FormattedMessage id = "team_text1"></FormattedMessage>
                    </div>
                    <div className="text_div">
                        <FormattedMessage id = "team_text2"></FormattedMessage>
                    </div>

                </div>
            </div>
        );
    }
}
