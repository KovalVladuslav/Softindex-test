import React, { useState, useEffect } from 'react';
import './styles/app.css';
import Table from './components/Table';
import Form from './components/Form';

const App = () => {
  const [peopleArr, setPeopleArr] = useState([]);
  const [selectedSort, setValueSort] = useState('');
  const [reverseArrow, setReverseArrow] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    gender: false,
    age: false
  })

  useEffect(() => {
    const data = localStorage.getItem("list-people");
    if (data) {
      setPeopleArr(JSON.parse(data))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("list-people", JSON.stringify(peopleArr))
  });

  const deleteItemPeople = (index) => {
    const deleteItem = peopleArr.filter(item => peopleArr[index] !== item)

    setPeopleArr(deleteItem);
  };

  const sortPeopleArr = (select) => {
    switch(select) {
      case 'firstName':
      case 'lastName':
      case 'gender':
        if (select !== selectedSort) {
          setPeopleArr([...peopleArr]
            .sort((a, b) => a[select].localeCompare(b[select])));
          setValueSort(select)
        };

        break;
      case 'age':
      case 'phone':
        if (select !== selectedSort) {
          setPeopleArr([...peopleArr]
            .sort((a, b) => a[select] - b[select]));
          setValueSort(select)
        }

        break;
      default: setPeopleArr([...peopleArr]);
    }

    reverseArrow[select] = !reverseArrow[select];
    setReverseArrow(reverseArrow)

    if (select === selectedSort) {
      const reverseArr = [...peopleArr].reverse();
      setPeopleArr(reverseArr)
    }
  };

  return (
    <div className="container">
      <Table
        peopleArr={peopleArr}
        sortPeopleArr={sortPeopleArr}
        deleteItemPeople={deleteItemPeople}
        reverseArrow={reverseArrow}
      />
      <Form
        peopleArr={peopleArr}
        setPeopleArr={setPeopleArr}
      />
    </div>
  )
};

export default App;
