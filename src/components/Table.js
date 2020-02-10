import React from 'react';
import PropTypes from 'prop-types';
import '../styles/table.css';
import TableHeader from './TableHeader';

const Table = ({ peopleArr, sortPeopleArr, deleteItemPeople, reverseArrow }) => (
  <div className="table">
    <TableHeader sortPeopleArr={sortPeopleArr} reverseArrow={reverseArrow}/>
    {!peopleArr.length > 0 ? (
      <h1 className="table__empty">The list is empty...</h1>
    ) : (
      peopleArr.map((item, index) => (
        <div className="item" key={item.phone}>
          <div className="item__block">
            <h3>{item.firstName}</h3>
          </div>
          <div className="item__block">
            <h3>{item.lastName}</h3>
          </div>
          <div className="item__block">
            <h3>{item.phone}</h3>
          </div>
          <div className="item__block">
            <h3>{item.gender}</h3>
          </div>
          <div className="item__block">
            <h3>{item.age}</h3>
          </div>
          <button
            className="item__button"
            type="button"
            onClick={() => deleteItemPeople(index)}
          >
            <img src="./icons/remove.svg" alt="delete" className="item__delete"></img>
          </button>
        </div>
      ))
    )}
  </div>
)

export default Table;

Table.propTypes = {
  peopleArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPeopleArr: PropTypes.func.isRequired,
  deleteItemPeople: PropTypes.func.isRequired,
}