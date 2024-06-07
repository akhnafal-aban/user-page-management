import { useEffect, useState } from "react"
import "./App.css"
import { getData, postData, deleteData } from "./api/apiServices"

function App() {
  const [count, setCount] = useState(1)
  const [users, setUsers] = useState([])
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  const [deleteId, setDeleteId] = useState(''); // State untuk menyimpan ID yang akan dihapus

  // Fitur mencari (search)
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(
        users.filter((user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, users]);

  // Untuk handle getData
  useEffect(() => {
    getData(count).then((data) => setUsers(data))
  }, [count])

  function nextPage() {
    setCount(count + 1)
  }
  function previousPage() {
    if (count >= 2) {
      setCount(count - 1)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(name, email, gender, status).then(() => {
      getData().then((data) => setUsers(data));
      setName('');
      setEmail('');
      setGender("");
      setStatus("");
    })
  }

  const handleDelete = () => {
    deleteData(deleteId).then(() => {
      getData().then((data) => setUsers(data))
      setDeleteId('');
    })
  }

  return (
    <>
      <nav>
        <h1>Create, Read, Search, and Delete</h1>
      </nav>
      <main>
        <div className="col-1">
          <input type="text"
            className="search-box"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}>
          </input>
          <div className="page-controller">
            <button onClick={previousPage} className="previous">Previous</button>
            <p>{count}</p>
            <button onClick={nextPage} className="next">Next</button>
          </div>
          <ul>
            {filteredUsers.map((user) => (
              <li key={user.id} className="user-item">
                {/* <div><strong>ID:</strong> {user.id}</div>
                <div><strong>Name:</strong> {user.name}</div>
                <div><strong>Email:</strong> {user.email}</div>
                <div><strong>Gender:</strong> {user.gender}</div>
                <div><strong>Status:</strong> {user.status}</div> */}
                {user.id} - {user.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-2">
          <div className="form-container">
            <form onSubmit={handleSubmit} className="user-form">
              <h2>Create New User</h2>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="input-field"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
              />
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
                className="select-field"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
                className="select-field"
              >
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <button type="submit" className="submit-button">Add User</button>
            </form>
            <h2>Delete User</h2>
            <input
              type="text"
              placeholder="User ID to delete"
              value={deleteId}
              onChange={(e) => setDeleteId(e.target.value)}
              required
              className="input-field"
            />
            <button onClick={handleDelete} className="delete-button">Delete User</button>
          </div>
        </div>
      </main>
      <footer>
        <br />
        <p>by NOOR AKHNAFAL ABAN</p>
      </footer>
    </>
  );
}

export default App;
