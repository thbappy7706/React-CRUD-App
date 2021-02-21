import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {

    const [users, setUsers] = useState([
        { id: 1, name: "Bappy", position: "Back End Dev", salary: 28000 },
        { id: 2, name: "Ashik", position: "Data Scientist", salary: 26000 },
        { id: 3, name: "Lokman Hossen", position: "Full Stack Dev", salary: 87000 },
    ]);

    return (
        <UserContext.Provider value={[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    );
};