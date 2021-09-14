import React, { useContext } from "react";

import SimpleContext from "../context/SimpleContext";
import Person from "./Person";

const Persons = () => {
  const context = useContext(SimpleContext);

  const {persons} = context;

  return (
    <div className="s1">
      {persons.map((person) => (
        <Person
          key={person.id}
          fullname={person.fullname}
          deleted={() => context.handleDeletPerson(person.id)}
          changed={(event) => context.handleNameChange(event, person.id)}
        />
      ))}
    </div>
  );
};

export default Persons;
