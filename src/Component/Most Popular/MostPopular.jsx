import { AiOutlineRight } from 'react-icons/ai';
import { mostPopular } from "../../Apis/Apis";
import Button from "../Common/Button";
import "./poppuler.scss";

export default function MostPopular() {
  return (
    <div className="MostPopular" id="MostPopular">
      <div className="container">
        <div className="top__title flex">
          <span>Most Popular</span>
          <div className="btn flex">
            <Button title="Shop More" className="button" />
            <AiOutlineRight className="icon" />
          </div>

        </div>
        <div className="items">
          {
      mostPopular.map((item) => (
        <div className={`${item.class === "vertical" ? "item flex horizontal vertical" : "item flex horizontal"}`} key={item.id} id={item.id}>
          <div className="img">
            <img src={item.img} alt="image" />
          </div>
          <div className="all__text">
            <div className="title"><span>{item.title}</span></div>
            <div className="text"><span>{item.text}</span></div>
          </div>
        </div>
      ))
    }

        </div>
      </div>
    </div>
  );
}
