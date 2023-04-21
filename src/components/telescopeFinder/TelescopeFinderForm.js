import Styles from "../../styles/telescopeFinder.module.css";
import { questions } from "./Questions";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const TelescopeFinderForm = ({ onFilterChange }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    onFilterChange(options);
  }, [options]);

  const handleCheckboxChange = (event) => {
    const option = event.target.value;

    if (options.includes(option)) {
      setOptions(options.filter((f) => f !== option));
    } else {
      setOptions([...options, option]);
    }
  };

  return (
    <section className={Styles.questionContainer}>
      {questions.map((question, key) => {
        return (
          <div key={key} className={Styles.questionDiv}>
            <p
              key={key}
              dangerouslySetInnerHTML={{ __html: question.question }}
              className={Styles.question}
            ></p>
            <div>
              {question.options.map((option, index) => {
                const name = option.includes("$") ? "priceRange" : option;
                return (
                  <div key={index} className={Styles.option}>
                    <input
                      type="checkbox"
                      key={index}
                      value={option}
                      name={name}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor={option}>{option}</label>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

TelescopeFinderForm.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default TelescopeFinderForm;
