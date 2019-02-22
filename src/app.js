import React from "react";
import About from "./about";
import Home from './home.js';
import EnvironmentFriends from "./environment-friends";
import messages from "./messages";
import Berlin from "./trips-berlin";
import Impressum from "./impressum";
import { connect } from 'react-redux';
import { changeLang } from "./actions";
import { Link } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import CanaryIslands from "./trips-canaryislands";
import BookingAndContact from "./booking-and-contact";
import { BrowserRouter , Route } from 'react-router-dom';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayMenu: false,
        };
        this.onChange = this.onChange.bind(this);
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    }
    componentDidMount() {
        console.log(this.props);
        console.log(`localStorage.getItem("faradisLang")`, localStorage.getItem("faradisLang"));
        if(localStorage.getItem("faradisLang") == "en" ){
            this.setState({currentLang:
            "English", otherLang: "العربية", currentVal: "en", otherVal: "ar"});
        }
        else {
            this.setState({currentLang:
        "العربية", otherLang: "English", currentVal: "ar", otherVal: "en" });
        }
    }

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }
    onChange(e){
        this.props.dispatch(changeLang(e.target.value));
    }

    goHome(){
        location.replace('/');
    }
    goToBerlin(){
        location.replace('/trips/berlin');
    }
    goToCanary(){
        location.replace('/trips/canary-islands');
    }
    render() {
        const { lang } = this.props;
        return (
            <div>
                <div>
                    <IntlProvider locale={lang} messages={messages[lang]}>
                        <BrowserRouter>
                            <div>
                                <div className="header">
                                    <div className="logo" onClick={this.goHome}>
                                        <img className="logo" src="/en-logo.png" />
                                    </div>
                                    <nav className="upper_nav">
                                        <Link to={"/"}><div className="single_nav"><FormattedMessage id = "nav.home" defaultMessage="Home"/></div></Link>

                                        <Link to={"/about"} ><div className="single_nav"><FormattedMessage id = "nav.about" defaultMessage="About"/></div></Link>


                                        <div className="dropdown" onMouseEnter={this.showDropdownMenu}
                                            onMouseLeave={this.hideDropdownMenu}>
                                            <div className="single_nav"
                                            ><FormattedMessage id = "nav.trips" defaultMessage="Trips"/></div>

                                            { this.state.displayMenu ? (
                                                <ul>
                                                    <li
                                                        onClick={this.goToBerlin}
                                                        onMouseEnter={this.showDropdownMenu} onMouseLeave={this.hideDropdownMenu}><FormattedMessage className="active" id = "nav.trip1" defaultMessage="Berlin"/></li>
                                                    <li
                                                        onClick={this.goToCanary}
                                                        onMouseEnter={this.showDropdownMenu} onMouseLeave={this.hideDropdownMenu}><FormattedMessage className="active" id = "nav.trip2" defaultMessage="Canary Islands"/></li>
                                                </ul>
                                            ):
                                                (
                                                    null
                                                )
                                            }
                                        </div>
                                        <Link to={"/booking-and-contact"}><div className="single_nav"><FormattedMessage id = "nav.booking_and_contact" defaultMessage="Booking and contant"/></div></Link>


                                        <Link to={"/environment-friends"}><div className="single_nav"><FormattedMessage id = "nav.environment-friends" defaultMessage="Environment Friends"/></div></Link>


                                    </nav>


                                </div>
                                <div>
                                    <Route
                                        exact path="/"
                                        component={Home}
                                    />
                                    <Route
                                        exact path="/about"
                                        component={About}
                                    />
                                    <Route
                                        exact path="/environment-friends"
                                        component={EnvironmentFriends}
                                    />
                                    <Route
                                        path="/trips/canary-islands"
                                        component={CanaryIslands}
                                    />
                                    <Route
                                        path="/trips/berlin"
                                        component={Berlin}
                                    />
                                    <Route
                                        exact path="/impressum"
                                        component={Impressum}
                                    />
                                    <Route
                                        exact path="/booking-and-contact"
                                        component={BookingAndContact}
                                    />
                                </div>
                                <footer className="lower_nav">
                                    <Link to={"/"}><div className="single_nav"><FormattedMessage id = "nav.home" defaultMessage="Home"/></div></Link>

                                    <Link to={"/about"}><div className="single_nav"><FormattedMessage id = "nav.about" defaultMessage="About"/></div></Link>


                                    <Link to={"/impressum"}><div className="single_nav"><FormattedMessage id = "nav.impressum" defaultMessage="Impressum"/></div></Link>

                                    <Link to={"/booking-and-contact"}><div className="single_nav"><FormattedMessage id = "nav.booking_and_contact" defaultMessage="Booking and contant"/></div></Link>

                                    <Link to={"/environment-friends"}><div className="single_nav"><FormattedMessage id = "nav.environment-friends" defaultMessage="Environment Friends"/></div></Link>

                                    <div>
                                        <select onChange={this.onChange} className="lang-selector">
                                            <option value={this.state.currentVal}>{this.state.currentLang}</option>
                                            <option value={this.state.otherVal}>{this.state.otherLang}</option>
                                        </select>
                                    </div>
                                </footer>
                            </div>
                        </BrowserRouter>
                    </IntlProvider>
                </div>

            </div>
        );
    }
}


const mapStateToProps = function(state) {
    return {
        lang: state.lang
    };

};

export default connect(mapStateToProps)(App);
