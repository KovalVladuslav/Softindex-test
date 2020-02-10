import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ sortPeopleArr, reverseArrow }) => (
  <div className="table__title item">
    <div className="item__block">
      <h3>Name</h3>
      <img
        src="./icons/sort.svg"
        alt="sort"
        className={reverseArrow.firstName? "item__sort" : "reverse item__sort"}
        onClick={() => sortPeopleArr('firstName')}/>
    </div>
    <div className="item__block">
      <h3>Last Name</h3>
      <img
        src="./icons/sort.svg"
        alt="sort"
        className={reverseArrow.lastName? "item__sort" : "reverse item__sort"}
        onClick={() => sortPeopleArr('lastName')}/>
    </div>
    <div className="item__block">
      <h3>Phone</h3>
      <img
        src="./icons/sort.svg"
        alt="sort"
        className={reverseArrow.phone? "item__sort" : "reverse item__sort"}
        onClick={() => sortPeopleArr('phone')}/>
    </div>
    <div className="item__block">
      <h3>Gender</h3>
      <img
        src="./icons/sort.svg"
        alt="sort"
        className={reverseArrow.gender? "item__sort" : "reverse item__sort"}
        onClick={() => sortPeopleArr('gender')}/>
    </div>
    <div className="item__block">
      <h3>Age</h3>
      <img
        src="./icons/sort.svg"
        alt="sort"
        className={reverseArrow.age? "item__sort" : "reverse item__sort"}
        onClick={() => sortPeopleArr('age')}></img>
    </div>
  </div>
)

export default TableHeader;

TableHeader.propTypes = {
  sortPeopleArr: PropTypes.func.isRequired,
}
