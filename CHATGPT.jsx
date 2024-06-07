import { useEffect, useState } from "react";
import "./App.css";
import { getData, postData, deleteData } from "./api/apiServices";

function App() {
  const [count, setCount] = useState(1);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [deleteId, setDeleteId] = useState("");

  useEffect(() => {
    getData().then((data) => setUsers(data));
  }, [count]);

  function nextPage() {
    setCount(count + 1);
  }
  function previousPage() {
    if (count >= 2) {
      setCount(count - 1);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(name, email, gender, status).then(() => {
      getData().then((data) => setUsers(data));
      setName("");
      setEmail("");
      setGender("");
      setStatus("");
    });
  };

  const handleDelete = () => {
    deleteData(deleteId).then(() => {
      getData().then((data) => setUsers(data));
      setDeleteId("");
    });
  };

  return (
    <>
      <nav>
        <h1>User Page Management</h1>
      </nav>
      <main>
        <div className="col-1">
          <h2>The Data (Read Code)</h2>
          <div className="page-controller">
            <button onClick={previousPage}>Previous</button>
            <p>{count}</p>
            <button onClick={nextPage}>Next</button>
          </div>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email} - {user.gender} - {user.status}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-2">
          <h2>Add New User</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <button type="submit">Add User</button>
          </form>
          <h2>Delete User</h2>
          <input
            type="text"
            placeholder="User ID to delete"
            value={deleteId}
            onChange={(e) => setDeleteId(e.target.value)}
            required
          />
          <button onClick={handleDelete}>Delete User</button>
        </div>
      </main>
    </>
  );
}

export default App;
