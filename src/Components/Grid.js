
import graphic from "../images/graphic.jpg";
import ui from "../images/ui.jpg";
import app from "../images/app.png";
import illustration from "../images/illustration.jpg";
import photography from "../images/photography.jpg";
import motion from "../images/motion.jpg";


function Grid() {
    return (
        <div className="grid container">

            {/* text contents of grid container */}
            <div className="grid__text">
                <h1 className="grid__headline">Design solution made easy</h1>
                <p className="text">With over 10 years experience in various design desciplines I'm Your one-stop <br />
                 shop for your design needs</p>
            </div>

            {/* grid images */}
            <div className="grid__gallery py">

                <div className="graphic">
                    <img src={graphic} alt="graphic.jpg" />
                    <span className="gallery-text">Graphic Design</span>
                </div>
                <div className="ui">
                    <img src={ui} alt="ui.jpg" />
                    <span className="gallery-text">Ui/Ux</span>
                </div>
                <div className="app">
                    <img src={app} alt="app.jpg" />
                    <span className="gallery-text">Apps</span>
                </div>
                <div className="illustration">
                    <img src={illustration} alt="illustration.jpg" />
                    <span className="gallery-text">Illustrations</span>
                </div>
                <div className="photo">
                    <img src={photography} alt="photography.jpg" />
                    <span className="gallery-text">Photography</span>
                </div>
                <div className="motion">
                    <img src={motion} alt="motion.jpg" />
                    <span className="gallery-text">Motion Graphics</span>
                </div>
            </div>
        </div>
    )
}

export default Grid