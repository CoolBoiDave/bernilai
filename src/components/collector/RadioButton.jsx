"use client";
import React from "react";
import styles from "./RadioButton.module.css";

const CheckmarkIcon = ({ checked }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${styles.checkmark} ${checked ? styles.checked : ""}`}
  >
    <path
      d="M10 3L4.5 8.5L2 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RadioButton = ({ id, name, value, checked, onChange, children }) => {
  return (
    <div className={styles.radioItem}>
      <label htmlFor={id} className={styles.radioWrapper}>
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className={styles.hiddenInput}
        />
        <div className={styles.controller}>
          <div className={`${styles.thumb} ${checked ? styles.checked : ""}`}>
            <div className={styles.icon}>
              <CheckmarkIcon checked={checked} />
            </div>
          </div>
        </div>
        <span className={styles.label}>{children}</span>
      </label>
    </div>
  );
};

export default RadioButton;
