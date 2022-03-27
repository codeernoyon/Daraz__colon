import { JusttForYou } from "../../Apis/Apis";
import Button from "../Common/Button";
import "./JustForU.scss";

export default function JustForYou() {
  return (
    <div className="just__for__you" id="just__for__you">
      <div className="container">
        <div className="top__title"><span>Just For You</span></div>
        <div className="items">
          {
          JusttForYou.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.img} alt="image" />
              <div className="inner__text">
                <div className="title">{item.title}</div>
                <div className="tk">{item.tk}</div>
                <div className="parentage">
                  <span className="first">{item.dTk}</span>
                  <span className="offer__pr">{item.parentage}</span>
                </div>
              </div>
            </div>
          ))
        }

        </div>
        <Button title="Load More" className="btn" />
      </div>
    </div>
  );
}
