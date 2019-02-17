import React from "react";
import { BrowserRouter , Route } from 'react-router-dom';
import Home from './home.js';
import { IntlProvider } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import messages from "./messages";
import { changeLang } from "./actions";
import CanaryIslands from "./trips-canaryislands";


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
                <BrowserRouter>
                    <div>
                        <IntlProvider locale={lang} messages={messages[lang]}>
                            <div>
                                <div className="header">
                                    <div className="logo">
                                        <img className="logo" src="logo.png" />
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
                                        <div className="single_nav"><FormattedMessage  id = "nav.home" defaultMessage="Home"/></div>
                                        <div className="single_nav"><FormattedMessage  id = "nav.about" defaultMessage="About"/></div>
                                        <div className="single_nav"><FormattedMessage  id = "nav.galerie" defaultMessage="Galerie"/></div>
                                        <div className="single_nav"><FormattedMessage  id = "nav.trips" defaultMessage="Trips"/></div>
                                        <div className="single_nav"><FormattedMessage  id = "nav.booking_and_contact" defaultMessage="Booking and contant"/></div>
                                    </nav>
                                </div>
                                <div>
                                    <Route
                                        exact path="/"
                                        component={Home}
                                    />
                                    <Route
                                        path="/trips/canary-islands"
                                        component={CanaryIslands}
                                    />
                                </div>
                                <footer className="lower_nav">
                                    <div className="single_nav"><FormattedMessage  id = "nav.home" defaultMessage="Home"/></div>
                                    <div className="single_nav"><FormattedMessage  id = "nav.about" defaultMessage="About"/></div>
                                    <div className="single_nav"><FormattedMessage  id = "nav.impressum" defaultMessage="Impressum"/></div>
                                    <div className="single_nav"><FormattedMessage  id = "nav.trips" defaultMessage="Trips"/></div>
                                    <div className="single_nav"><FormattedMessage  id = "nav.booking_and_contact" defaultMessage="Booking and contant"/></div>
                                </footer>
                            </div>
                        </IntlProvider>
                    </div>
                </BrowserRouter>
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
