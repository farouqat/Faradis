import React from "react";
// import { FormattedMessage } from 'react-intl';
import axios from 'axios';
import swal from 'sweetalert';



export default class BookingAndContact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            first: " ",
            last: " ",
            email: " ",
            phone: " ",
            numberOfPassengers: " ",
            dateFrom: " ",
            dateTo: " ",
            message: " "
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState(
            {[e.target.name]: e.target.value}
        );
    }
    async handleSubmit(e){
        e.preventDefault();
        const { first, last , email , phone , numberOfPassengers , dateFrom , dateTo ,  message } = this.state ;
        const form = await axios.post('/api/form', {
            first, last , email , phone , numberOfPassengers , dateFrom , dateTo ,  message
        }
        ).then((results)=>{
            if(results){
                successMessage();
            }
        });
        function successMessage(){
            swal({
                title: "Thanks",
                text: "Your message was successfuly sent!",
                icon: "success",
                button: "ok"
            });
        }
    }
    render(){
        return(
            <div id="componentz" className="booking-comp">
                <h2 className="booking-comp-desc">Booking and contact</h2>
                <form onSubmit={this.handlesubmit}>
                    <div className="question">
                        <label>First name:</label>
                        <input
                            type="name"
                            name="first"
                            onChange={this.handleChange}
                        ></input>
                    </div>
                    <div className="question">
                        <label>Last name:</label>
                        <input
                            type="name"
                            name="last"
                            onChange={this.handleChange}
                        ></input>
                    </div>
                    <div className="question">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                        ></input>
                    </div>
                    <div className="question">
                        <label>Phone:</label>
                        <input
                            type="number"
                            name="phone"
                            onChange={this.handleChange}
                        ></input>
                    </div>
                    <div className="question">
                        <label>Number of passengers:</label>
                        <input
                            type="number"
                            name="numberOfPassengers"
                            onChange={this.handleChange}
                        ></input>
                    </div>
                    <div className="question">
                        <label>Date from:</label>
                        <input
                            type="datepicker"
                            name="dateFrom"
                            onChange={this.handleChange}
                        ></input>
                    </div>
                    <div className="question">
                        <label>Date to:</label>
                        <input
                            type="datepicker"
                            name="dateTo"
                            onChange={this.handleChange}
                        ></input>
                    </div>
                    <div className="question">
                        <label>Message:</label>
                        <textarea
                            className="messagefield"
                            type="textarea"
                            name="message"
                            onChange={this.handleChange}
                        ></textarea>
                    </div>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}
