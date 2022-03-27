import { AiOutlineRight } from 'react-icons/ai';
import Mall from '../../assets/ItemNav/1.gif';
import FreeShipping from '../../assets/ItemNav/2.gif';
import Grocery from '../../assets/ItemNav/3.gif';
import Fashion from '../../assets/ItemNav/4.gif';
import BeautyGlamour from '../../assets/ItemNav/5.gif';
import "./category.scss";

export default function CategoriesNav() {
  return (
    <div className="categories__nav">
      <div className=" nav__container container">
        <div className="item flex">
          <div className="img">
            <img src={Mall} alt="" />
          </div>
          <div className="content">
            <span className="flex">
              Mall

              <AiOutlineRight className="icon" />
            </span>
          </div>
        </div>
        <div className="item flex">
          <div className="img">
            <img src={FreeShipping} alt="" />
          </div>
          <div className="content">
            <span className="flex">
              Free Shipping
              <AiOutlineRight className="icon" />
            </span>
          </div>

        </div>
        <div className="item flex">
          <div className="img">
            <img src={Grocery} alt="" />
          </div>
          <div className="content">
            <span className="flex">
              Grocery

              <AiOutlineRight className="icon" />
            </span>
          </div>

        </div>
        <div className="item flex">
          <div className="img">
            <img src={Fashion} alt="" />
          </div>
          <div className="content">
            <span className="flex">
              Fashion
              <AiOutlineRight className="icon" />
            </span>
          </div>

        </div>
        <div className="item flex">
          <div className="img">
            <img src={BeautyGlamour} alt="" />
          </div>
          <div className="content">
            <span className="flex">
              Beauty Glamour
              <AiOutlineRight className="icon" />
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
