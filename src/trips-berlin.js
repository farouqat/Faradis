import React from "react";
// import { BrowserRouter , Route } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';


export default class Berlin extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div className={localStorage.faradisLang}>

                <div  id="componentz" className="berlin-comp">
                    <h1><FormattedMessage id="travel_trip1" /></h1>
                    <h2><FormattedMessage id="trip1_title" /></h2>
                    <p><FormattedMessage id="trip1_desc" /></p>

                    <div className="berlin_homes_images">
                        <img src="https://faradistravel.de/.cm4all/iproc.php/books/1%20%287%29.jpg/scale_777_583%3Bdonotenlarge/1%20(7).jpg" />
                        <img src="https://faradistravel.de/.cm4all/iproc.php/books/1%20%288%29.jpg/scale_777_583%3Bdonotenlarge/1%20(8).jpg" />
                        <img src="https://faradistravel.de/.cm4all/iproc.php/books/1%20%286%29.jpg/scale_777_583%3Bdonotenlarge/1%20(6).jpg" />
                        <img src="https://faradistravel.de/.cm4all/iproc.php/books/1%20%285%29.jpg/scale_777_583%3Bdonotenlarge/1%20(5).jpg" />
                    </div>
                    <h2><FormattedMessage id="berlin_cars" /></h2>
                    <div className="berlin_cars_images">
                        <img src="https://faradistravel.de/.cm4all/mediadb/cars/ModelX-800x600-1.jpg" />
                        <img src="https://faradistravel.de/.cm4all/mediadb/cars/KONA-8_1497258567990155.jpg" />
                        <img src="https://faradistravel.de/.cm4all/mediadb/cars/Interior_Back_Row_Fold-1440.jpg" />
                        <img src="https://faradistravel.de/.cm4all/mediadb/cars/18tdieulhd-eNV200EVALIAHelios108.jpg.ximg.l_full_m.smart.jpg" />
                        <img src="https://faradistravel.de/.cm4all/mediadb/cars/VW-E-Golf-fotoshowBig-d17bd39d-990466.jpg" />
                    </div>
                    <h2><FormattedMessage id="experience_programs" /></h2>
                    <div className="berlin_homes_images">
                        <img src="https://faradistravel.de/.cm4all/mediadb/23.jpg" />
                        <img src="https://faradistravel.de/.cm4all/mediadb/61453112_1491142272-768x432.jpg" />
                        <img src="https://faradistravel.de/.cm4all/mediadb/45176904_2216278478640209_8387504369498587136_n.jpg" />
                        <img src="https://faradistravel.de/.cm4all/mediadb/.DSC_0844.JPG/picture-2600" />
                        <img src="https://faradistravel.de/.cm4all/mediadb/.DSC_0946.JPG/picture-2600" />
                        <img src="https://faradistravel.de/.cm4all/mediadb/.DSC_0908.JPG/picture-2600" />
                        <img src="https://faradistravel.de/.cm4all/mediadb/.DSC_9787.JPG/picture-2600" />
                        <img src="https://faradistravel.de/.cm4all/mediadb/.DSC_0888.JPG/picture-2600" />
                        <img src="https://faradistravel.de/.cm4all/mediadb/.DSC_0884.JPG/picture-2600" />
                        <img src="https://faradistravel.de/.cm4all/mediadb/.DSC_9466.JPG/picture-2600" />
                        <img src="https://faradistravel.de/.cm4all/mediadb/.DSC_9460.JPG/picture-2600" />
                        <img src="https://faradistravel.de/.cm4all/mediadb/.DSC_9477.JPG/picture-2600" />
                        <img src="https://faradistravel.de/.cm4all/mediadb/.DSC_9478.JPG/picture-2600" />
                        <img src="https://faradistravel.de/.cm4all/mediadb/.DSC_9665.JPG/picture-2600" />
                        <img src="https://faradistravel.de/.cm4all/mediadb/.DSC_9634.JPG/picture-2600" />
                        <img src="https://faradistravel.de/.cm4all/mediadb/.DSC_9780.JPG/picture-2600" />
                    </div>
                    <h2><FormattedMessage id="trip1_price" /></h2>
                    <p><FormattedMessage id="trip1_tickets" /></p>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310847.00512175536!2d13.144562011171274!3d52.50643055408043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin!5e0!3m2!1sen!2sde!4v1550776292826" width="700" height="400"></iframe>
                    </div>


                </div>
            </div>
        );
    }
}
