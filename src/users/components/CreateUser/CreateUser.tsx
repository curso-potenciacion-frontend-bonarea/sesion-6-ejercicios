const CreateUser = (): React.ReactElement => {
  return (
    <div className="forms">
      <form className="form">
        <div className="form__group">
          <label htmlFor="name" className="form__label">
            Nom:
          </label>
          <input type="text" id="name" className="form__control" />
        </div>
        <div className="form__group">
          <label htmlFor="lastName" className="form__label">
            Cognom:
          </label>
          <input type="text" id="lastName" className="form__control" />
        </div>
        <div className="form__group">
          <label htmlFor="username" className="form__label">
            Nom d'usuari:
          </label>
          <input type="text" id="username" className="form__control" />
        </div>
        <div className="form__group">
          <label htmlFor="password" className="form__label">
            Contrasenya:
          </label>
          <input type="password" id="password" className="form__control" />
        </div>
        <div className="form__group actions">
          <button className="button">Anterior</button>
          <button className="button">Següent</button>
        </div>
      </form>
      <form className="form">
        <div className="form__group">
          <label htmlFor="email" className="form__label">
            Email:
          </label>
          <input type="email" id="email" className="form__control" />
        </div>
        <div className="form__group">
          <label htmlFor="address" className="form__label">
            Adreça:
          </label>
          <input type="text" id="address" className="form__control" />
        </div>
        <div className="form__group">
          <label htmlFor="city" className="form__label">
            Localitat:
          </label>
          <input type="text" id="city" className="form__control" />
        </div>
        <div className="form__group actions">
          <button className="button">Anterior</button>
          <button className="button">Següent</button>
        </div>
      </form>
      <form className="form">
        <div className="form__group">
          <label htmlFor="developer" className="form__label">
            <input type="checkbox" id="developer" className="form__control" />
            Ets developer?
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="frontBack" className="form__label">
            Front o back:
          </label>
          <select id="frontBack" className="form__control">
            <option value="front">Front</option>
            <option value="back">Back</option>
          </select>
        </div>
        <div className="form__group actions">
          <button className="button">Anterior</button>
          <button className="button">Següent</button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
