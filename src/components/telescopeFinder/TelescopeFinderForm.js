import Styles from "../../styles/telescopeFinder.module.css";
import { questions } from "./Questions";
import { useEffect, useState } from "react";

const TelescopeFinderForm = ({ onFilterChange }) => {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    onFilterChange(filters);
  }, [filters]);

  const handleCheckboxChange = (event) => {
    const filter = event.target.value;
    if (filters.includes(filter)) {
      // If the filter is already selected, remove it
      setFilters(filters.filter((f) => f !== filter));
    } else {
      // If the filter is not selected, add it
      setFilters([...filters, filter]);
    }
  };

  return (
    <section className={Styles.questionContainer}>
      {questions.map((question, key) => {
        return (
          <div key={key} className={Styles.questionDiv}>
            <p
              className={Styles.question}
              key={key}
              dangerouslySetInnerHTML={{ __html: question.question }}
            ></p>

            <div>
              {question.options.map((option, index) => {
                return (
                  <div key={index} className={Styles.option}>
                    <input
                      type="checkbox"
                      key={index}
                      value={option}
                      name={option}
                      onChange={handleCheckboxChange}
                    />
                    <label for={option}>{option}</label>
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

export default TelescopeFinderForm;
