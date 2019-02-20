import React from "react";
import About from "./about";
import Trips from "./trips";
import Home from './home.js';
import Galerie from "./galerie";
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
        this.state = {};
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
        console.log(this.props);
    }
    onChange(e){
        this.props.dispatch(changeLang(e.target.value))({
        });
    }
    goHome(){
        location.replace('/');
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

                                        <Link to={"/about"}><div className="single_nav"><FormattedMessage id = "nav.about" defaultMessage="About"/></div></Link>

                                        <Link to={"/galerie"}><div className="single_nav"><FormattedMessage id = "nav.galerie" defaultMessage="Galerie"/></div></Link>

                                        <Link to={"/trips"}><div className="single_nav"><FormattedMessage id = "nav.trips" defaultMessage="Trips"/></div></Link>

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
                                        path="/trips"
                                        component={Trips}
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

                                    <Link to={"/trips"}><div className="single_nav"><FormattedMessage id = "nav.trips" defaultMessage="Trips"/></div></Link>

                                    <Link to={"/booking-and-contact"}><div className="single_nav"><FormattedMessage id = "nav.booking_and_contact" defaultMessage="Booking and contant"/></div></Link>
                                    <div>
                                        <select value={this.state.postType} onChange={this.onChange} className="lang-selector">
                                            <option value="en">English</option>
                                            <option value="ar">العربية</option>
                                        </select>
                                        {this.state.postType}
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
