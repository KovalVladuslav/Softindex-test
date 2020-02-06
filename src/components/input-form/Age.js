import React from 'react';

const Age = React.memo(({ age, setAge, register }) => (
  <input
    placeholder="how old are you?"
    type="text"
    className="form__input"
    value={age}
    onChange={(event) => setAge(event.target.value)}
    name="age"
    ref={register({ required: true, pattern: /^[1][0-2][0-9]$|^[1-9][0-9]$/})}
    autocomplete="off"
  />
));

export default Age