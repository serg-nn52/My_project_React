import React, { useState } from "react";
// import "./PasswordInput.scss";
import style from "./PasswordInput.module.scss";

type PasswordInputType = {
  label: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
};

const PasswordInput: React.FC<PasswordInputType> = (props) => {
  const { label, setValue, value } = props;
  //   console.log(props);
  const [password, setPassword] = useState("password");
  const [isPassword, setIsPassword] = useState(true);

  // меняю тип инпута
  const changePasswordType = () => {
    // eslint-disable-next-line
    setPassword((prev) => (prev === "password" ? "text" : "password"));
    setIsPassword(!isPassword);
  };

  // изменяется значение поля
  const passwordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  //   console.log(value);

  return (
    <div className={style.input}>
      <p className="label">{label}</p>
      <input
        onChange={passwordValue}
        className={`${style.form__password} browser-default`}
        type={password}
        placeholder={label}
        value={value}
      />
      <button
        onClick={changePasswordType}
        type="button"
        className={style.password_btn}>
        {isPassword ? (
          <i className="fas fa-eye" />
        ) : (
          <i className="fas fa-eye-slash" />
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
