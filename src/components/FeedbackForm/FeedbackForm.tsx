import React, { useState } from "react";
import PasswordInput from "../PasswordInput/PasswordInput";
import FeedbackInput from "../FeedBackInput/FeedBackInput";
// import "./FeedbackForm.scss";
import Btn from "../Btn/Btn";
import style from "./FeedbackForm.module.scss";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [tel, setTel] = useState("");
  const [mail, setMail] = useState("");
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");

  const reset = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName("");
    setSurname("");
    setTel("");
    setMail("");
    setValue("");
    setValue1("");
  };
  const submitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // Проверяю корректность паролей
    if (value === value1 && value !== "" && value1 !== "") {
      // Выводим в консоль объект с интересующей нас информацией, которую отправил пользователь
      const userSendInfo = {
        userName: name,
        userSurname: surname,
        userTel: tel,
        userMail: mail,
        password: value,
        doublePassword: value1,
      };
      console.log(userSendInfo);
      // eslint-disable-next-line
      alert("Данные успешно отправлены!");
    } else if (value === "" || value1 === "") {
      // eslint-disable-next-line
      alert("Введите пароль, не заполнено поле ввода!");
    } else {
      setName("");
      // eslint-disable-next-line
      alert("Введенные пароли не совпадают!");
      setValue("");
      setValue1("");
    }
  };
  return (
    <>
      <h2 className={style.title}>
        Оставьте свои контакты и мы свяжемся с Вами!
      </h2>
      <form className={style.form} action="#">
        <FeedbackInput
          label="Имя"
          type="text"
          placeholder="Иван"
          setValue={setName}
          value={name}
        />
        <FeedbackInput
          label="Фамилия"
          type="text"
          placeholder="Иванов"
          setValue={setSurname}
          value={surname}
        />
        <FeedbackInput
          label="Телефон"
          type="tel"
          placeholder="+375293333333"
          setValue={setTel}
          value={tel}
        />
        <FeedbackInput
          label="e-mail"
          type="email"
          placeholder="ivanov@yandex.by"
          setValue={setMail}
          value={mail}
        />
        <PasswordInput
          label="Введите пароль"
          value={value}
          setValue={setValue}
        />
        <PasswordInput
          label="Повторите пароль"
          value={value1}
          setValue={setValue1}
        />
        <Btn onClick={submitHandler} btnName="Отправить данные" />
        <Btn onClick={reset} btnName="Очистить форму" />
        {/* <button onClick={reset} type="button">
          Reset
        </button> */}
      </form>
    </>
  );
};
export default FeedbackForm;
