const { createContext, useState } = require("react");

export const UsersContext = createContext();
export const UsersState = (props) => {
  const [users, setUsers] = useState([]);

  const addUsers = (data) => {
    setUsers(data);
  };
  const updateUsers = (data) => {
    setUsers([...users, ...data]);
  };
  const deleteUsers = () => {
    setUsers([]);
  };
  function search(searchString) {
    const filteredArray = users.filter((item) => {
      const firstName = item.firstName?.toLowerCase();
      const lastName = item.lastName?.toLowerCase();
      const search = searchString.toLowerCase();
      return firstName.includes(search) || lastName.includes(search);
    });
    setUsers(filteredArray);
  }
  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        addUsers,
        updateUsers,
        deleteUsers,
        search,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};
