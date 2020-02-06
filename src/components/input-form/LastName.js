import React from 'react';

const LastName = React.memo(({ lastName, setLastName, register }) => (
  <input
    name="lastName"
    className="form__input"
    placeholder="Your last name"
    value={lastName}
    onChange={(event) => setLastName(event.target.value)}
    ref={register({ required: true, pattern: /[^0-9]+$/i })}
    autocomplete="off"
  />
));

export default LastName;