import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AiOutlineRight } from 'react-icons/ai';
import { collections } from "../../Apis/Apis";
import Button from "../Common/Button";
import "./Collection.scss";

export default function Collections() {
  const [width, setWidth] = useState(0);
  const scrollWidth = useRef();
  useEffect(() => {
    setWidth(scrollWidth.current.scrollWidth - scrollWidth.current.offsetWidth);
  }, []);
  return (
    <div className="collection" id="collection">
      <div className="container">
        <div className="top__title flex">
          <span>Collection</span>
          <div className="btn flex">
            <Button title="Shop More" className="button" />
            <AiOutlineRight className="icon" />
          </div>

        </div>
        <motion.div
          className="items"
          ref={scrollWidth}
          whileTap={{ cursor: "grabbing" }}

        >
          <motion.div
            className="inner__items"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {
          collections.map((item) => (
            <div className="item" key={item.id}>
              <div className="all__text">
                <div className="title"><span>{item.title}</span></div>
                <div className="text"><span>{item.text}</span></div>
              </div>
              <div className="img flex">
                <img src={item.img} alt="image" />
                <img src={item.img2} alt="photo" />
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
