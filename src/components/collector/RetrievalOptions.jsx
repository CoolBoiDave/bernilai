"use client";
import React, { useState } from "react";
import styles from "./RetrievalOptions.module.css";
import RadioButton from "./RadioButton";

const RetrievalOptions = ({ onSelectionChange, showError }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelectionChange(value);
  };

  const options = [
    {
      id: "itemBank",
      value: "itemBank",
      label: "Drop them in a nearby Bernilai's item bank",
    },
    {
      id: "pickup",
      value: "pickup",
      label: "Have a Bernilai officer pick them up at your home",
    },
    {
      id: "delivery",
      value: "delivery",
      label:
        "Send them to our address via delivery services (additional charges might apply)",
    },
  ];

  return (
    <>
      <section className={styles.optionsContainer}>
        <h2 className={styles.questionText}>
          How would you like for us to retrieve your submitted items? (ONE)
        </h2>

        {showError && (
          <div className={styles.errorMessage}>Please select one option!</div>
        )}

        <div className={styles.checkboxGroup}>
          {options.map((option) => (
            <RadioButton
              key={option.id}
              id={option.id}
              name="retrievalOptions"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={handleOptionChange}
            >
              {option.label}
            </RadioButton>
          ))}
        </div>
      </section>

      <div className={styles.deliveryAnimation}>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/b24b72016cdfa9a1445683d4ea42405e3fc3d1f6?width=526"
          alt="Delivery animation"
          className={styles.deliveryImage}
        />
      </div>
    </>
  );
};

export default RetrievalOptions;
