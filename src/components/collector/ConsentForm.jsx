"use client";
import React, { useState } from "react";
import styles from "./ConsentForm.module.css";
import RadioButton from "./RadioButton";

const ConsentForm = ({ onSelectionChange, showError }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelectionChange(value);
  };

  const options = [
    {
      id: "adoption",
      value: "adoption",
      label: '"Adopsi Barang Bernilai" community event',
    },
    {
      id: "donation",
      value: "donation",
      label: "Donation to local orphanages or nursing homes",
    },
    {
      id: "recycling",
      value: "recycling",
      label: "Further recycled by local recycling centers",
    },
  ];

  return (
    <section className={styles.formContainer}>
      <p className={styles.consentText}>
        By choosing the following option(s), I have given my consent to send out
        the items I have listed to Bernilai, and Bernilai can further deliver
        these items to help the communities in need through these following
        methods
      </p>

      {showError && (
        <div className={styles.errorMessage}>
          Please select the desired checkbox
        </div>
      )}

      <div className={styles.checkboxGroup}>
        {options.map((option) => (
          <RadioButton
            key={option.id}
            id={option.id}
            name="consentOptions"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          >
            {option.label}
          </RadioButton>
        ))}
      </div>

      <div className={styles.recycleAnimation}>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/55f9a5f81d1db97e39cb2f1050affc0fdc149650?width=432"
          alt="Earth recycle animation"
          className={styles.recycleImage}
        />
      </div>
    </section>
  );
};

export default ConsentForm;
