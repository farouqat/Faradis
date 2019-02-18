import React from "react";
import { BrowserRouter , Route } from 'react-router-dom';
import Home from './home.js';
import { IntlProvider } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import messages from "./messages";
import { changeLang } from "./actions";
import About from "./about";
import Galerie from "./galerie";
import Impressum from "./impressum";
import CanaryIslands from "./trips-canaryislands";
import Berlin from "./trips-berlin";
import BookingAndContact from "./booking-and-contact";
import axios from "axios";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log(this.props);
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
                                    <div className="logo">
                                        <img className="logo" src="/en-logo.png" />
                                    </div>
                                    <div className="language_changer">
                                        <a role="button" onClick ={()=> {
                                            var en="en";

                                            this.props.dispatch(changeLang(en));
                                        }
                                        } > EN </a>|
                                        <a role="button" onClick = { ()=> {
                                            var ar="ar";
                                            this.props.dispatch(changeLang(ar));
                                        }
                                        } > AR </a>
                                    </div>

                                    <nav className="upper_nav">
                                        <Link to={"/"}><div className="single_nav"><FormattedMessage id = "nav.home" defaultMessage="Home"/></div></Link>

                                        <Link to={"/about"}><div className="single_nav"><FormattedMessage id = "nav.about" defaultMessage="About"/></div></Link>

                                        <Link to={"/galerie"}><div className="single_nav"><FormattedMessage id = "nav.galerie" defaultMessage="Galerie"/></div></Link>

                                        <Link to={"/trips/canary-islands"}><div className="single_nav"><FormattedMessage id = "nav.trips" defaultMessage="Trips"/></div></Link>

                                        <Link to={"/booking-and-contact"}><div className="single_nav"><FormattedMessage id = "nav.booking_and_contact" defaultMessage="Booking and contant"/></div></Link>
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
                                        exact path="/galerie"
                                        component={Galerie}
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

                                    <Link to={"/galerie"}><div className="single_nav"><FormattedMessage id = "nav.galerie" defaultMessage="Galerie"/></div></Link>

                                    <Link to={"/impressum"}><div className="single_nav"><FormattedMessage id = "nav.impressum" defaultMessage="Impressum"/></div></Link>

                                    <Link to={"/trips/canary-islands"}><div className="single_nav"><FormattedMessage id = "nav.trips" defaultMessage="Trips"/></div></Link>

                                    <Link to={"/booking-and-contact"}><div className="single_nav"><FormattedMessage id = "nav.booking_and_contact" defaultMessage="Booking and contant"/></div></Link>
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
