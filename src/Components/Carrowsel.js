
import design1 from "../images/design-1.jpg";
import design2 from "../images/design-2.webp";
import design3 from "../images/design-3.jpg";
import design4 from "../images/design-4.webp";
import design5 from "../images/design-5.jpg";
import design6 from "../images/design-6.jpg";
import design7 from "../images/design-7.png";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";


export default function Carrowsel() {

    const [move, setMove] = useState({ value: -5, flag: false });
    const scrollWidth = window.screen.availWidth - window.innerWidth;

    function moveSlider() {
        if (move.value < 0 && move.value >= scrollWidth) {
            setMove({value: move.value - 100})
        }
    }
    console.log(move.value);
        return (
            <div className="carrowsel py">
                <h2 className="headline carrowsel__headline">My Work</h2>

                <div className="carrowsel__slide" style={{ transform: `translateX(${move.value}px)`}}>
                    <div className="carrowsel__item"><img src={design1} alt="work.jpg" /></div>
                    <div className="carrowsel__item"><img src={design2} alt="work.jpg" /></div>
                    <div className="carrowsel__item"><img src={design3} alt="work.jpg" /></div>
                    <div className="carrowsel__item"><img src={design4} alt="work.jpg" /></div>
                    <div className="carrowsel__item"><img src={design5} alt="work.jpg" /></div>
                    <div className="carrowsel__item"><img src={design6} alt="work.jpg" /></div>
                    <div className="carrowsel__item"><img src={design7} alt="work.jpg" /></div>
                </div>

                <div className="carrowsel__arrows">
                    <BsFillArrowLeftCircleFill onClick={() => setMove({value: move.value -= 23})} />
                    <BsFillArrowRightCircleFill onClick={() => moveSlider()} />
                </div>

            </div>
        )
    }