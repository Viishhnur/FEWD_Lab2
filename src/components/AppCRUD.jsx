import React, { useEffect, useState } from "react";
import axios from "axios";
function AppCRUD() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const apiURL = "https://jsonplaceholder.typicode.com/users";
  // GET request: fetch all users
  const fetchUsers = () => {
    axios
      .get(apiURL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("GET Error:", err));
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  // POST request: add a new user
  const addUser = () => {
    axios
      .post(apiURL, newUser)
      .then((res) => {
        setUsers([...users, res.data]);
        setNewUser({ name: "", email: "" });
      })
      .catch((err) => console.error("POST Error:", err));
  };
  // PUT request: update a user
  const updateUser = (id) => {
    const updatedUser = { name: "Updated Name", email: "updated@example.com" };
    axios
      .put(`${apiURL}/${id}`, updatedUser)
      .then((res) => {
        setUsers(users.map((user) => (user.id === id ? res.data : user)));
      })
      .catch((err) => console.error("PUT Error:", err));
  };
  // DELETE request: remove a user
  const deleteUser = (id) => {
    axios
      .delete(`${apiURL}/${id}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((err) => console.error("DELETE Error:", err));
  };
  return (
    <div style={{ padding: "20px" }}>
      <h2>Axios CRUD Example</h2>

      <h3>Add New User</h3>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <button onClick={addUser}>Add User</button>

      <h3>User List</h3>
      <ul>
        {users.slice(0, 11).map(
          (
            user // Limit to first 9 users for demo
          ) => (
            <li key={user.id}>
              {user.name} ({user.email}) &nbsp;
              <button onClick={() => updateUser(user.id)}>Edit</button> &nbsp;
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
export default AppCRUD;