import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import HeroImgAbout from '../../assets/background-img-2.png'
import Collapse from '../../components/Collapse'

const dataCollapse = [
    {
        title: 'Fiabilité',
        description:"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        
    },
    {
        title: 'Respect',
        description:"Le respect fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."   
    },
    {
        title: 'Service',
        description:"Le service fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        title: 'Sécurité',
        description:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."   
    }
]

function About() {
    return (
      <div>
        <Header from="about" />
        <main className="page-containe">
          <Hero  img={HeroImgAbout} />
          {dataCollapse.map(({ title, description }, index) => (
            <Collapse
              key={index}
              title={title}>
              <p className="text">{description}</p>
            </Collapse>
          ))}
        </main>
        <Footer />
      </div>
    );
}

export default About