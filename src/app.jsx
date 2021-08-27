import React, { useState } from "react";
import api from "./api";
import Users from "./components/users";

const App = () => {
  const initialState = api.users.fetchAll().map((v) => {
    return { ...v, booked: false };
  });
  const [users, setUsers] = useState(initialState);
  const hendleDelete = (userId) => {
    setUsers(users.filter((v) => v._id !== userId));
  };
  const hendleReset = () => {
    setUsers(initialState);
  };
  const bookedHendler = (userId) => {
    const newUsers = users.map((user) => {
      if (user._id === userId) {
        user.booked = !user.booked;
      }
      return user;
    });

    setUsers(newUsers);
  };

  return (
    <>
      <Users
        users={users}
        hendleDelete={hendleDelete}
        hendleReset={hendleReset}
        bookedHendler={bookedHendler}
      />
    </>
  );
};

export default App;
