import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import './home.scss';
import HeroImgHome from '../../assets/background-img-1.png';
import Logements from '../../data/logements.json'
import Card from '../../components/Card/index'

const text = 'Chez vous, partout et ailleurs'

function Home() {
    return (
      <div className="home">
        <Header from="home" />
        <main className="page-containe">
            <Hero text={text} img={HeroImgHome} />
            <section className="cards-container">
              {Logements.map(({ id, cover, title, description }, index) => (
              <Card
                index={index}
                id={id}
                key={id}
                title={title}
                cover={cover}
                description={description}
              />
            ))}
            </section>
        </main>
        <Footer />
      </div>
    );
}

export default Home