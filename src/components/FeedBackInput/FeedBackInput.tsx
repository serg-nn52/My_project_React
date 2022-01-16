import React from "react";
import style from "./FeedBackInput.module.scss";

type FeedbackInputType = {
  label: string;

  type: string;
  placeholder: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
};

const FeedbackInput: React.FC<FeedbackInputType> = (props) => {
  const { label, type, placeholder, setValue, value } = props;
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <>
      <p className={style.label}>{label}</p>
      <input
        onChange={inputHandler}
        className={`${style.input} browser-default`}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
};
export default FeedbackInput;
