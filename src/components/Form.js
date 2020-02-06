import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import '../styles/form.css';

const Form = ({ peopleArr, setPeopleArr }) => {
  const [ name, setName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ phone, setPhone ] = useState('')
  const [ gender, setGender ] = useState('')
  const [ age, setAge ] = useState('');
  const { register, errors, handleSubmit } = useForm()

  const patterValidLetters = (nameLine) => (
    errors[nameLine] && errors[nameLine].type === 'pattern'
      && <span className="form__error">Only letters should be in this line, please correct</span>
  )

  const patterValidNumber = (nameLine) => (
    errors[nameLine] && errors[nameLine].type === 'pattern'
      && <span className="form__error">This line should only contain numbers, please correct</span>
  )

  const patterValidAge = (nameLine) => (
    errors[nameLine] && errors[nameLine].type === 'pattern'
      && <span className="form__error">This line should only contain numbers, 10 to 99 years old</span>
  )

  const requiredValid = (nameLine) => (
    errors[nameLine] && errors[nameLine].type === 'required' && <span className="form__error">Line is required</span>
  )

  const onSubmit = data => { 
    const createPeopleObj = {
      firstName: data.firstName.split('').map((str, i) => {
        if(i === 0) {
          return str.toUpperCase();
        }
        return str.toLowerCase();
      }).join(''),
      lastName: data.lastName.split('').map((str, i) => {
        if(i === 0) {
          return str.toUpperCase();
        }
        return str.toLowerCase();
      }).join(''),
      phone,
      gender,
      age
    }

    setPeopleArr([...peopleArr, createPeopleObj]);
    setName('')
    setLastName('')
    setPhone('')
    setAge('')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h2 className="form__title">Form</h2>
      <div className="form__block">
        <input
          className="form__input"
          name="firstName"
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          ref={register({ required: true, pattern: /^[A-Za-z]+$/i })}
          autocomplete="off"
        />
        {patterValidLetters('firstName')}
        {requiredValid('firstName')}
      </div>
      <div className="form__block">
        <input
          name="lastName"
          className="form__input"
          placeholder="Your last name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          ref={register({ required: true, pattern: /^[A-Za-z]+$/i })}
          autocomplete="off"
        />
        {patterValidLetters("lastName")}
        {requiredValid("lastName")}
      </div>
      <div className="form__block">
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
        {patterValidNumber("phone")}
        {requiredValid("phone")}
      </div>
      <div className="form__block">
        <span className="form__radio">
          <p className="form__radio__title">Choose your gender</p>
          <label>
            <input type="radio"
              value="male"
              name="gender"
              onChange={() => setGender("male")}
              ref={register({ required: true })}
            />
            <p className="form__radio__title">male</p>
          </label>
          <label>
            <input
              type="radio"
              value="female"
              name="gender"
              onChange={() => setGender("female")}
              ref={register({ required: true })}
            />
            <p className="form__radio__title">female</p>
          </label>
        </span>
        {requiredValid("gender")}
      </div>
      <div className="form__block">
        <label>
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
        </label>
        {patterValidAge("age")}
        {requiredValid("age")}
      </div>
      <input type="submit" className="form__button"/>
    </form>
  )
}

export default Form;

Form.propTypes = {
  peopleArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPeopleArr: PropTypes.func.isRequired,
}
