import React from "react";
import { FormattedMessage } from 'react-intl';

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.timer = null;
    }
    componentWillUnmount(){
        if(this.timer){
            clearTimeout(this.timer);
        }
    }
    componentDidMount() {
        var images = document.getElementsByClassName('carousel-image');
        var dots = document.querySelectorAll('.carousel-dots div');
        var current = 0;
        var inTransition = false;
        dots.forEach(function(val, idx) {
            val.addEventListener('click', function(e){
                if (!e.target.classList.contains('active') && inTransition == false) {
                    e.target.classList.add('active');
                    clearTimeout(timer);
                    moveImages(idx);
                } else if (inTransition == true) {
                    e.target.style.backgroundColor = "rgb(255,0,0,0.5)";
                    e.target.style.border = "6px solid red";
                    setTimeout(function () {
                        e.target.style.backgroundColor = "";
                        e.target.style.border = "";
                    }, 750);
                    return;
                }
            });
        });

        function moveImages(next) {
            inTransition = true;
            images[current].classList.remove('onscreen');
            images[current].classList.add('exit');
            images[current].addEventListener('transitionend', function(e){
                e.target.classList.remove('exit');
                inTransition = false;
                e.target.removeEventListener('transitionend', function(){});
            });

            dots[current].classList.remove('active');


            if (typeof next == 'undefined'){
                current++;
                if (current >= images.length) {
                    current = 0;
                }
            } else {
                current = next;
            }
            images[current].classList.add('onscreen');
            dots[current].classList.add('active');

            this.timer = setTimeout(moveImages, 4000);
        }

        var timer = setTimeout(moveImages, 4000);
        images[current].classList.add('onscreen');
        dots[current].classList.add('active');
    }
    render() {
        return (

            <div className='whole_carousel'>
                <div className="DPE"><FormattedMessage id="dpe" defaultMessage="Discover Paradise on Earth"/></div>

                <div className="carousel-dots">
                    <div className="active"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="carousel-wrapper">
                    <div id="0" className="carousel-image">
                        <img src="https://faradistravel.de/.cm4all/mediadb/.DSC_9630.JPG/picture-2600"/>
                    </div>
                    <div id="2" className="carousel-image">
                        <img src="DSC_7971.JPG"/>
                    </div>
                    <div id="3" className="carousel-image">
                        <img src="DSC_8016.JPG"/>
                    </div>
                    <div id="4" className="carousel-image">
                        <img src="DSC_9468.JPG"/>
                    </div>
                    <div id="5" className="carousel-image">
                        <img src="https://faradistravel.de/.cm4all/mediadb/.DSC_9384.JPG/picture-2600" />
                    </div>
                </div>
            </div>
        );
    }
}
