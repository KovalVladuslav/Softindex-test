import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ sortPeopleArr }) => (
  <div className="table__title item">
    <div className="item__block">
      <h3>Name</h3>
      <img src="./icons/sort.svg" alt="sort" className="item__sort" onClick={() => sortPeopleArr('firstName')}></img>
    </div>
    <div className="item__block">
      <h3>Last Name</h3>
      <img src="./icons/sort.svg" alt="sort" className="item__sort" onClick={() => sortPeopleArr('lastName')}></img>
    </div>
    <div className="item__block">
      <h3>Phone</h3>
      <img src="./icons/sort.svg" alt="sort" className="item__sort" onClick={() => sortPeopleArr('phone')}></img>
    </div>
    <div className="item__block">
      <h3>Gender</h3>
      <img src="./icons/sort.svg" alt="sort" className="item__sort" onClick={() => sortPeopleArr('gender')}></img>
    </div>
    <div className="item__block">
      <h3>Age</h3>
      <img src="./icons/sort.svg" alt="sort" className="item__sort" onClick={() => sortPeopleArr('age')}></img>
    </div>
  </div>
)

export default TableHeader;

TableHeader.propTypes = {
  sortPeopleArr: PropTypes.func.isRequired,
}
