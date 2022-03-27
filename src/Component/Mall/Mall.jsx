import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AiOutlineRight } from 'react-icons/ai';
import { Malll } from "../../Apis/Apis";
import Button from "../Common/Button";
import "./Mall.scss";


export default function Mall() {
  const [width, setWidth] = useState(0);
  const scrollItem = useRef();
  useEffect(() => {
    setWidth(scrollItem.current.scrollWidth - scrollItem.current.offsetWidth + 2);
  }, []);
  return (
    <div className="mall" id="mall">
      <div className="container">
        <div className="top__title flex">
          <span>Mall</span>
          <div className="btn flex">
            <Button title="Shop More" className="button" />
            <AiOutlineRight className="icon" />
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
            Malll.map((item) => (
              <div className="item" key={item.id}>
                <div className="img">
                  <img src={item.img} alt="image" />
                </div>
                <div className="inner__text">
                  <div className="img_2">
                    <img src={item.img2} alt="photo" />
                  </div>
                  <div className="all__text">
                    <div className="title"><span>{item.title}</span></div>
                    <div className="text"><span>{item.text}</span></div>
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
