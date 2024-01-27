import store from "../../store/store"
import classes from "./PersonalPage.module.scss"

const PersonalPage = () => {
  function handleSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const get_token = event.target.auto_enter.checked;
    store.user.login(username, password, get_token);
  }
  return (
    <div>
      <form
        action=""
        className={classes.form}
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <p className={classes.title}>Вход</p>
        <input
          className={classes.input}
          type="text"
          name="username"
          id=""
          placeholder="Логин"
        />
        <input
          className={classes.input}
          type="text"
          name="password"
          id=""
          placeholder="Пароль"
        />
        <label htmlFor="auto_enter" className={classes.checkboxContainer}>
          <input
            type="checkbox"
            name="auto_enter"
            id="auto_enter"
            className={classes.realCheckbox}
          />
          <span className={classes.checkmark}></span>
          Запомни меня
        </label>
        <button type="submit" className={classes.button}>
          Войти
        </button>
      </form>
    </div>
  );
}

export default PersonalPage