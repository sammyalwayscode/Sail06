import Cards from "../../../reusable/cards/Cards";
import "./AboutSection1.css";
import myCardImage1 from "../../../../assets/se1.png";
import myCardImage2 from "../../../../assets/se2.png";

const AboutSection1 = () => {
  return (
    <div className="sectionOneContainer">
      <Cards
        cardImage={myCardImage1}
        cardText="Explore our products and features across Search, Google Workspace, and more"
      />
      <Cards
        cardImage={myCardImage2}
        cardText="See how we’re tackling some of the most challenging problems in computer science"
      />
    </div>
  );
};

export default AboutSection1;
