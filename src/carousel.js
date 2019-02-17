import React from "react";

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
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

            timer = setTimeout(moveImages, 4000);
        }

        var timer = setTimeout(moveImages, 4000);
        images[current].classList.add('onscreen');
        dots[current].classList.add('active');
    }
    render() {
        return (
            <div className='whole_carousel'>
                <div className="carousel-dots">
                    <div className="active"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="carousel-wrapper">
                    <div id="0" className="carousel-image">
                        <img src="DSC_9630.JPG" alt="kit1"/>
                    </div>
                    <div id="1" className="carousel-image">
                        <img src="DSC_9386.JPG" alt="kit2"/>
                    </div>
                    <div id="2" className="carousel-image">
                        <img src="DSC_7971.JPG" alt="kit3"/>
                    </div>
                    <div id="3" className="carousel-image">
                        <img src="DSC_8016.JPG" alt="kit4"/>
                    </div>
                </div>
            </div>
        );
    }
}
