import Styles from "../../styles/productPage.module.css";
import { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import React from "react";

const ProductSpecTable = ({ product }) => {
  const specDefinitions = {
    "Optical Design":
      "The optical design of a telescope is a feature that defines what sort of observing the telescope is suitable for.",
    "Optical Diameter":
      "The aperture (diameter) of a telescope’s main lens or mirror. This describes how much light a telescope can grasp.",
    "Focal Length":
      "The distance that the light has to travel between the aperture and the focal point. A smaller focal lengths will deliver a wider field of view.",
    "F/Ratio":
      "The relationship between the focal length and the aperture, larger f/numbers imply higher magnification.",
    "Highest Practical Power":
      "Exceeding the Highest Practical Power will result in a fuzzy image.",
    "Finder Scope":
      "A low powered mini telescope with a wide field of view to assists with locating objects before observe through the main telescope.",
    "Focuser Diameter": "Wider focusers allow for a wider field of view.",
    Diagonal:
      "A small triangular attachment for making it easier to observe through the telescope.",
    Eyepieces:
      "Short focal length (5-10mm) eyepieces generally provided high power magnifications.",
    "Tube Weight":
      "You may need a counterweight to prevent your telescope from rotating downwards due to gravity.",
    "Tube Dimensions": "The physical size of the telescope tube.",
  };

  const [hoveredStates, setHoveredStates] = useState(
    Object.keys(product).map(() => false)
  );

  function hoverHandle(index) {
    setHoveredStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  }

  return (
    <section className={Styles.specs}>
      {Object.entries(product).map(([key, value], index) => {
        const matchingValue = specDefinitions[key];
        const isHovered = hoveredStates[index];

        return (
          <React.Fragment key={key}>
            <div className={Styles.row} onMouseEnter={() => hoverHandle(index)}>
              <div className={Styles.tableLeft}> {key}</div>
              <div className={Styles.tableRight}> {value}</div>

              {matchingValue ? (
                <div className={Styles.definitions}>
                  <p>
                    <FaAngleDoubleRight />
                    {matchingValue}
                  </p>
                </div>
              ) : null}
            </div>
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default ProductSpecTable;
