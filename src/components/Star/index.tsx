import redStarImg from "../../assets/red-star.png";
import greyStarImg from "../../assets/grey-star.png";
import "./Star.scss";

type StarPropsType = {
  rating: string;
}
const Star:React.FC<StarPropsType> = (accLogement) => {
  const maxStars = 5;
  let redStars = parseInt(accLogement.rating);
  if (redStars > 5) {
    redStars = 5;
  } else if (redStars < 0) {
    redStars = 0;
  }
  const greyStars = maxStars - redStars;

  const redStarsToDisplay = Array(redStars)
    .fill(null)
    .map((_, index) => <img key={index} src={redStarImg} alt="red star" />);
  const greyStarsToDisplay = Array(greyStars)
    .fill(null)
    .map((_, index) => <img key={index} src={greyStarImg} alt="grey star" />);
  return (
    <div className="star-container">
      {redStarsToDisplay}
      {greyStarsToDisplay}
    </div>
  );
}

export default Star;