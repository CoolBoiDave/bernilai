"use client";
import React from "react";
import styles from "./SubmitButton.module.css";

const SubmitButton = ({ onClick, disabled }) => {
  return (
    <div className={styles.submitContainer}>
      <button
        className={styles.submitButton}
        onClick={onClick}
        disabled={disabled}
        type="submit"
      >
        <svg
          width="760"
          height="130"
          viewBox="0 0 791 158"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.buttonBackground}
        >
          <g filter="url(#filter0_d_64_458)">
            <path
              d="M0 30C0 13.4315 13.4315 0 30 0H730C746.569 0 760 13.4315 760 30V100C760 116.569 746.569 130 730 130H30C13.4315 130 0 116.569 0 100V30Z"
              fill="#AECFD6"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_64_458"
              x="0"
              y="0"
              width="790.5"
              height="157.5"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="17" dy="14" />
              <feGaussianBlur stdDeviation="6.75" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_64_458"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_64_458"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <span className={styles.submitText}>SUBMIT FORM</span>
      </button>
    </div>
  );
};

export default SubmitButton;
