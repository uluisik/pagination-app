import { useEffect, useState } from "react";
import "./App.css";
import Users from "./Users";
import Pagination from "./Pagination";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await fetch(
        "https://randomuser.me/api/?page=1&results=50&nat=us"
      );
      const data = await res.json();
      console.log(data);
      setLoading(false);
      setUsers(data.results);
    };
    fetchUsers();
  }, []);

  const handleClick = (num) => {
    setPage(num);
  };

  return (
    <div>
      <h1>Pagination App</h1>
      <h5>Page : {page} </h5>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Users users={users} page={page} />
          <Pagination totalPages={totalPages} handleClick={handleClick} />
        </>
      )}
    </div>
  );
}

export default App;
