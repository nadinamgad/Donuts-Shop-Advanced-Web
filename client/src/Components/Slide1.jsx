import bg from "../assets/vanilla_tower.png";
import leave1 from "../assets/leaf01-removebg-preview (1).png";
import leave2 from "../assets/leaf03-removebg-preview.png";
import leave3 from "../assets/leaf04-removebg-preview.png";
import leave4 from "../assets/leaf05-removebg-preview.png";

const Slide1 = () => {
  return (
    <div>
      <img src={bg} className="donuts" id="slide1" />
      <img src={leave1} className="leave1" />
      <img src={leave2} className="leave2" />
      <img src={leave3} className="leave3" />
      <img src={leave4} className="leave4" />
    </div>
  );
};

export default Slide1;
