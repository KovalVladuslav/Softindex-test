import React from 'react';

const Phone = React.memo(({ phone, setPhone, register}) => (
  <input
    type="text"
    className="form__input"
    name="phone"
    placeholder="Your phone"
    value={phone}
    onChange={(event) => setPhone(event.target.value)}
    ref={register({ required: true, pattern: /^\d+$/i})}
    autocomplete="off"
  />
));

export default Phone;
