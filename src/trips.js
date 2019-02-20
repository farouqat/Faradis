import React from "react";
import { BrowserRouter, Link } from 'react-router-dom';
// import { FormattedMessage } from 'react-intl';

export default class Trips extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="trips_comp">
                <Link to="/trips/berlin"><div className="each_trip"><p>Berlin</p></div></Link>
                <Link to="/trips/canary-islands"><div className="each_trip"><p>Canary Islands</p></div></Link>
            </div>
        );
    }
}
