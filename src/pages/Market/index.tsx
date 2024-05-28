import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Collapse from "../../components/Collapse";
import Tag from "../../components/Tag";
import Star from "../../components/Star";
import Carousel from "../../components/Carousel";
import "./Market.scss";
import { LodgingType } from "../../types";


type MarketPropsType = {
  logements: Array<LodgingType>;
};

const Market:React.FC<MarketPropsType> =({ logements }) => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const currentLodging = logements.find((Lodging) => Lodging.id === params.id);
  useEffect(() => {
    if (!currentLodging) {
      navigate("/*");
    }
  },[]);

  return (
    <div>
      {!currentLodging ? null : (
        <div>
          <Header />
          <main className="page-containe">
            <Carousel picture={currentLodging.pictures} key={"carousel"} />
            <section className="info-container">
              <section className="left">
                <div className="title-container">
                  <h1>{currentLodging.title}</h1>
                  <h2>{currentLodging.location}</h2>
                </div>
                <Tag
                  tags={currentLodging.tags}
                  key={"tags"}
                />
              </section>
              <section className="right">
                <div className="profil-container">
                  <p className="profil-name">{currentLodging.host.name}</p>
                  <img
                    className="profil-picture"
                    src={currentLodging.host.picture}
                    alt=""
                  />
                </div>
                <Star rating={currentLodging.rating} />
              </section>
            </section>
            <section className="collapse-container">
              <Collapse
                className="market"
                key={"description"}
                title={"Description"}> 
                <p className="text">{currentLodging.description}</p>           
              </Collapse>

              <Collapse
                className="market"
                key={"Equipement"}
                title={"Equipement"}> 
                <ul>
                  {currentLodging.equipments.map((element, index) => (
                    <li key={index}>{element}</li>
                  ))}
                </ul>
              </Collapse>
              
            </section>
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Market;