
import hero from '../images/hero.jpg';

function Hero() {
    return (
        <div className="hero container py">

            <div className="hero__img">
                <img className="img" src={hero} alt="hero.jpg" />
            </div>

            <div className="hero__text">
                <h2 className="headline">
                    Hi, I'm Amy, and I'd love to <br />
                    work on your next project</h2>
                <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam rerum iusto tempora repellendus molestiae unde quis facilis commodi provident? Incidunt nam ducimus, consectetur reprehenderit error maxime dignissimos ex obcaecati adipisci.</p>
                
                <button className="btn hero__btn btn--red">Free Consultation</button>
            </div>
        </div>
    )
}

export default Hero