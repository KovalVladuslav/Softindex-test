import React from 'react';

const FirstName = React.memo(({ name, setName, register }) => (
  <input
    className="form__input"
    name="firstName"
    placeholder="Your name"
    value={name}
    onChange={(event) => setName(event.target.value)}
    ref={register({ required: true, pattern: /[^0-9]+$/i })}
    autocomplete="false"
  />
  ));

export default FirstName;
