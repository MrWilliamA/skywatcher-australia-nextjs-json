import Styles from "../../styles/productPage.module.css";
import { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import React from "react";
import PropTypes from "prop-types";

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
    Focuser: "Wider focusers allow for a wider field of view.",
    Diagonal:
      "A small triangular attachment for making it easier to observe through the telescope.",
    Eyepieces:
      "Short focal length (5-10mm) eyepieces generally provided high power magnifications.",
    "Tube Weight":
      "You may need a counterweight to prevent your telescope from rotating downwards due to gravity.",
    "Mount Weight": "Weight of the telescope base.",
    "Total Weight": "The combined weight of the telescope tube and base.",
    Weight: "Total weight.",
    "Tube Dimensions": "The physical size of the telescope tube.",
    "Tube Length": "The length of the tube without base or mount.",
    Height: "Height of the telescope at full extension.",
    "Tripod Height": "Height of the tripod without the mount attached.",
    "Base Diameter": "Size of the Dobsonian mount.",
    "Resolving Power":
      "The ability to clearly distinguish between two points whose separation is less than the smallest angle that your eye can resolve.",
    "Stellar Limit Magnitude":
      "The magnitude of the faintest object visible under zero light pollution conditions.",
    "Light Gathering Power":
      "How much brighter things will appear than what the human eye can see.",
    "Recommended Usage": "The recommended applications for this optic.",
    "Secondary Mirror Diameter":
      "Bounces the light back to the primary mirror and through a hole in its center.",
    Obstruction:
      "The secondary mirror in optical systems creates a shadow, which reduces the contrast and effective aperture performance.",
    "Mount Type": "Either Altazimuth or Equatorial design.",
    "Tripod Material": "Steel or Aluminium.",
    "Telescope Mounting": "System for attaching Tubes to the mount.",
    Payload:
      "The weight the mount and dovetail can hold when adding on the tube and  accessories.",
    "Mount Head Weight":
      "Total Weight of the telescope mount, not including tube and tripod.",
    "Tripod Weight": "Weight of the tripod not including the mount.",
    "Counterweight Bar Diam.": "Diameter of the counterweight bar.",
    "Counterweight Bar Length":
      "Length of the counterweight bar for adding additional weights.",
    "Latitude Range": "The minimum and maximum latitude angles.",
    "Azimuth Range": "The minimum and maximum azimuth angles.",
    "Power Requirement": "Power needed to run the mount.",
    "Point Accuracy":
      "How precisely it can be aimed at a specific target in the sky.",
    "Slewing Speed":
      "The rate at which a telescope's mount can move the telescope's pointing direction.",
    "Guiding Speed":
      "Refers to the rate at which a telescope's mount responds to commands from an autoguiding system.",
    "Motors Resolution":
      "The smallest angular increment that a telescope mount's motor system can move.",
    "Encoders Resolution":
      "The smallest angular increment that can be measured by the encoders on a telescope's mount.",
    Encoders:
      "Measure the position and movement of the OTA. Allows precise tracking and pointing of the telescope.",
    "Nearest Focus Distance":
      "The closest distance that an object can be viewed clearly when viewing through the optics.",
    "Field Of View":
      "The extent of the observable world that is seen at any given moment.",
    Magnification: "Magnification range of the optics",
    "Corrected Field Diameter":
      "the maximum diameter of the circular area in the eyepiece where the image remains sharp and clear.",
    "Visual Back Focus":
      "The distance from the eyepiece to the point where the light rays converge to form a focused image.",
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

ProductSpecTable.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductSpecTable;
