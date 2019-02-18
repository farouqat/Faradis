import React from "react";
// import { BrowserRouter , Route } from 'react-router-dom';
// import { FormattedMessage } from 'react-intl';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export default class BookingAndContact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: " ",
            email: " ",
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
        const { name , email , message } = this.state ;

        const form = await axios.post('/api/form', {
            name,
            email,
            message
        }
        );
    }

    render(){
        return(

            <div id="componentz" className="booking-comp">
                <div className="justadivtopushthestuffdown">booooooook</div>

                <Form onSubmit={this.handlesubmit}>
                    <FormGroup>
                        <Label for="email">Name:</Label>
                        <Input
                            type="name"
                            name="name"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email:</Label>
                        <Input
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Message:</Label>
                        <Input
                            type="textarea"
                            name="message"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button onClick={this.handleSubmit}>Submit</Button>
                </Form>
            </div>
        );
    }
}
