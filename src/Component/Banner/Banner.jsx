import Banneer from '../../assets/sponser/2.jpg';
import './Banner.scss';

export default function Banner() {
  return (
    <div className="banner container">
      <div className="banner__img">
        <img src={Banneer} alt="" />
      </div>
    </div>
  );
}
