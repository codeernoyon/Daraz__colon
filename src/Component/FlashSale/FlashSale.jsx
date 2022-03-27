import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import FlashhSale from "../../Apis/Apis";
import Button from "../Common/Button";
import "./FlashSell.scss";

export default function FlashSale() {
  const [width, setWidth] = useState(0);
  const scrollItem = useRef();
  useEffect(() => {
    setWidth(scrollItem.current.scrollWidth - scrollItem.current.offsetWidth + 2);
  }, []);
  return (
    <div className="flash__sell" id="flash__sell">
      <div className="container">
        <div className="top__title"><span>FlashSale</span></div>
        <div className="top__ber flex">
          <div className="right flex">
            <span className="marketing__text">On Sale Now</span>
            <div className="counter flex">
              <span className="text">Ending in</span>
              <div className="count flex">54</div>
              <span className="clone">:</span>
              <div className="count flex">6</div>
              <span className="clone">:</span>
              <div className="count flex">23</div>
            </div>
          </div>
          <div className="left">
            <Button title="Shop More" className="button" />
          </div>
        </div>
        <motion.div
          className="items"
          ref={scrollItem}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="inner__items"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {
            FlashhSale.map((item) => (
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
