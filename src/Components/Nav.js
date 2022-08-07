
import camera from "../images/camera.png";
export default function Nav() {
    return (
       <header className=".header">
        <div className="nav container">
         <img src={camera} alt="camera.jpg"/>
         <button className="btn btn--black">Free Consultation</button>
        </div>
       </header>
    )
}