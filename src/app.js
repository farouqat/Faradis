import React from "react";
import { BrowserRouter , Route } from 'react-router-dom';
import Home from './home.js';
import { IntlProvider } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import messages from "./messages";
import { changeLang } from "./actions";


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
            <IntlProvider locale={lang} messages={messages[lang]}>
                <div>
                    <div className="header">
                        <div className="logo">
                            <img className="logo" src="logo.png" />
                        </div>

                        <button onClick ={()=> {
                            var en="en";

                            this.props.dispatch(changeLang(en));
                        }
                        } >EN</button>
                        <button onClick = { ()=> {
                            var ar="ar";
                            this.props.dispatch(changeLang(ar));
                        }
                        } >AR</button>

                        <nav className="upper_nav">



                            <div className="single_nav"><FormattedMessage  id = "nav.home" defaultMessage="Home"/></div>

                            <div className="single_nav"><FormattedMessage  id = "nav.about" defaultMessage="About"/></div>

                            <div className="single_nav"><FormattedMessage  id = "nav.galerie" defaultMessage="Galerie"/></div>

                            <div className="single_nav"><FormattedMessage  id = "nav.trips" defaultMessage="Trips"/></div>

                            <div className="single_nav"><FormattedMessage  id = "nav.booking_and_contact" defaultMessage="Booking and contant"/></div>


                        </nav>
                    </div>
                    <BrowserRouter>
                        <div className="app_comp">
                            <Route
                                path="/"
                                render={() => (
                                    <Home />
                                )}
                            />
                        </div>
                    </BrowserRouter>
                    <div>
                        <nav className="lower_nav">
                            <p id = "home">Home</p>
                            <p id = "about">About</p>
                            <p id = "galerie">Galerie</p>
                            <p id = "impressum"> Impressum </p>
                            <p id = "trips">Trips</p>
                            <p id = "booking_and_contact">Booking & Contact</p>
                        </nav>
                    </div>
                </div>
            </IntlProvider>
        );
    }
}



const mapStateToProps = function(state) {
    return {
        lang: state.lang
    };

};

export default connect(mapStateToProps)(App);
