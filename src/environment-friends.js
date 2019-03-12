import React from "react";
// import { FormattedMessage } from 'react-intl';

export default class EnvironmentFriends extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div  className="environment-friends_comp " id="componentz">
                <h1> Projects :</h1>
                <h2>1 -  Houseplants against Fireworks
                </h2>
                <h3>Buying  plants instead of buying and firing  fireworks on the new years  eve day.
                </h3>
                <p><strong>Fireworks </strong> cause extensive air pollution in a short amount of time, leaving metal particles, dangerous toxins, harmful chemicals and smoke in the air for hours and days. Some of the toxins never fully decompose or disintegrate but rather hang around in the environment, poisoning all they come into contact with.</p>
                <p><strong>Houseplants </strong> are commonly grown for decorative purposes, but studies have also shown them the have positive psycological effects. House plants help with indoor air purification. Some species, and the soil-dwelling microbes associated with them, reduce indoor air pollution. </p>
                <img  className="firework" src="https://faradistravel.de/.cm4all/mediadb/Unbenannt.jpg" />
                <h2>2 -  Buy  really your only needs of bread
                </h2>
                <p>According to the  world wide fund for nature  WWF, about 1.7 million tons of baked bread are disposed of in germany annually . This is equivalent to the harvest of about 400,000 hectares of arable land, larger than the spanish island Mallorca, which causes the emmission of 2.46 million tons of greenhouse gases unnecessarily. According to ( Spiegel )  the german website.</p>
                <img className="bread" src="https://faradistravel.de/.cm4all/mediadb/wholesalebreadsuppliers.jpg" />
                <p>we ask kindly to clean the surrounding environment during the trips and wherever you go.
                </p>
            </div>

        );
    }

}
