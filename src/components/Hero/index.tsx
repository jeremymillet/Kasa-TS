import "./Hero.scss";

type HeroPropsType={
    img: string;
    text?: string;
}
    
const Hero: React.FC<HeroPropsType> = ({img,text}) => {
    return (
        <section className="hero">
            <div className={`hero-overlay ${img ==="/static/media/background-img-2.abab3f12f4cb82f1dfa1.png"
            ? "hero-overlay-about"
            : " "}`}>
            </div>
            <img className={`hero-img ${img === "/static/media/background-img-2.abab3f12f4cb82f1dfa1.png" ?
                "hero-about" : ""
                }`}
                src={img}
                alt=""
            />
            {text&&<h1 className="hero-text">{text}</h1>}
        </section>
    )
}

export default Hero;