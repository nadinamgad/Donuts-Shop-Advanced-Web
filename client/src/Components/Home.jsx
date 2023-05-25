import "../App.css";
import Imageslider from "./ImageSlider";
// temporarlyy only after fixing carousel
export default function Home() {
  return (
    <div className="app__header__wrapper_info_text">
      <h1>
        {" "}
        <span className="el_tetr">Donut store,</span>
        <br /> <span className="sub-el-tetr">like never before</span>
      </h1>

      <div className="text-containor-top">
        <h1 className="main-text">Vanilla</h1>
      </div>

      <div></div>
      <div>
        <button className="order-now">order now</button>
      </div>
    </div>
  );
}
