import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Header from "./common/Header";
import Persons from "./component/Persons";
import SimpleContext from "./context/SimpleContext";
import NewPerson from "./component/NewPerson";

const App = () => {
  const [getPersons, setPersons] = useState([
    { id: 1, fullname: "محمد زنگنه" },
    { id: 2, fullname: "مصطفی چمران" },
    { id: 3, fullname: "حاج قاسم سلیمانی" },
    { id: 4, fullname: "احمد محمد مشلب" },
  ]);
  const [getSinglePerson, setSinglePerson] = useState("");
  const [getShowPersons, setShowPersons] = useState(true);

  const handleShowPerson = () => {
    setShowPersons(!getShowPersons);
  };

  const handleDeletPerson = (id) => {
    const persons = [...getPersons];
    const filtredPersons = persons.filter((p) => p.id !== id);
    setPersons(filtredPersons);

    const personIndex = persons.findIndex((p) => p.id === id);
    const person = persons[personIndex];
    toast.error(`شهید ${person.fullname} از لیست حذف شد !`, {
      position: "top-right",
      closeOnClick: true,
    });
  };

  const handleNameChange = (event, id) => {
    const personIndex = getPersons.findIndex((p) => p.id === id);
    const person = getPersons[personIndex];
    person.fullname = event.target.value;

    const persons = [...getPersons];

    persons[personIndex] = person;
    setPersons(persons);
  };

  const handleNewPerson = () => {
    const persons = [...getPersons];
    const person = {
      id: Math.floor(Math.random() * 1000),
      fullname: getSinglePerson,
    };
    if (person.fullname == "") {
      toast.dark("هیچی وارد نکردی که اسکل :/", {
        position: "top-center",
        closeOnClick: true,
      });
    } else if (person.fullname == " ") {
      toast.warning(
        "فقط یه Space زدی ابله ! شهیدی به اسم Space نداریم به مولا",
        {
          position: "bottom-center",
          closeOnClick: true,
        }
      );
    } else {
      persons.push(person);
      setPersons(persons);
      setSinglePerson("");
      toast.success("تبریک ! اسم مبارک شهید به لیستمون اظافه شد :)", {
        position: "top-right",
        closeOnClick: true,
      });
    }
  };
  const setPerson = (event) => {
    setSinglePerson(event.target.value);
  };

  let person = null;

  if (getShowPersons) {
    person = <Persons />;
  }

  return (
    <SimpleContext.Provider
      value={{
        persons: getPersons,
        person: getSinglePerson,
        handleDeletPerson: handleDeletPerson,
        handleNameChange: handleNameChange,
        handleNewPerson: handleNewPerson,
        setPerson: setPerson,
      }}
    >
      <div className="rtl text-center">
        <Header appTitle="لیست تعدادی از شهدا" />

        <NewPerson />

        <button
          onClick={handleShowPerson}
          className={getShowPersons ? "btn btn-primary" : "btn btn-danger"}
        >
          نمایش شهدا
        </button>

        {person}
        <ToastContainer />
      </div>
    </SimpleContext.Provider>
  );
};

export default App;
