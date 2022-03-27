import Li from "../Common/Li";
import "./Footer.scss";
import FooterData, { Daraz, EarnWithDaraz } from "./FooterData";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="top__section flex container">
        <div className="left flex">
          <div className="inner__left">
            <div className="customer__care">
              <h3>Customer Care</h3>
              {FooterData.map((item) => (
                <Li title={item.title} key={item.id} className="li" />
              ))}
            </div>
            <div className="earn__with__daraz">
              <h3>Earn With Daraz</h3>

              {EarnWithDaraz.map((item) => (
                <Li title={item.title} key={item.id} />
              ))}

            </div>
          </div>
          <div className="inner__right">
            <div className="Daraz">
              <h3>Daraz</h3>
              {Daraz.map((item) => (
                <Li title={item.title} key={item.id} />
              ))}
            </div>
          </div>
        </div>
        <div className="right flex">
          <div className="right__top flex">
            <div className="QR">
              <img src="../../assets/footer/qr.png" alt="" />
            </div>
            <div className="daraz ">
              <div className="icon">
                <img src="../../assets/footer/app-icon.png" alt="" />
              </div>
              <div className="daraz__text ">
                <span className="title">Happy Shopping</span>
                <span className="download">Download App</span>
              </div>
            </div>
          </div>
          <div className="right__bottm flex">
            <div className="app" />
            <div className="google" />
            <div className="explore__ap" />
          </div>
        </div>
      </div>
      <div className="bottom__section container ">
        <div className="content flex">
          <div className="Payment">
            <span className="title">Payment Methods</span>
            <div className=" icon case__on" />
            <div className=" icon visa" />
            <div className=" icon masterCard" />
            <div className=" icon Bkas" />
            <div className=" icon fifth" />
          </div>
          <div className="DarazInternational">
            <span className="title">Daraz International</span>
            <div className="icon pakistan" />
            <div className="icon bangladesh" />
            <div className="icon srilanka" />
            <div className="icon vutan" />
            <div className="icon nepal" />
          </div>
          <div className="FollowUs">
            <span className="title">FollowUs</span>
            <div className="icon facebook" />
            <div className="icon daraz" />
            <div className="icon youtube" />
            <div className="icon tweeter" />
            <div className="icon instagram" />
          </div>
          <div className="verified">
            <span className="title">Verified</span>
            <div className="icon verified__img" />
          </div>
        </div>
        <span className="copy__right">
          @Daraz 2022 by Nayan Islam
        </span>
      </div>

    </div>
  );
}
