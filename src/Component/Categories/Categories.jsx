import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import { AiOutlineRight } from 'react-icons/ai';
import { categories } from "../../Apis/Apis";
import Button from "../Common/Button";
import "./Catogories.scss";


export default function Categories() {
  const [width, setWidth] = useState(0);
  const scrollWidth = useRef();
  useEffect(() => {
    setWidth(scrollWidth.current.scrollWidth - scrollWidth.current.offsetWidth);
  }, []);
  return (
    <div className="categories" id="categories">
      <div className="container">
        <div className="top__title flex">
          <span>Categories</span>
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
        categories.map((item) => (
          <div className="item flex" key={item.id}>
            <div className="img">
              <img src={item.img} alt="image" />
            </div>
            <div className="all__text">
              <div className="title"><span>{item.title}</span></div>
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
