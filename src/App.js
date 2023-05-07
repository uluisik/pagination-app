import { useEffect, useState } from "react";
import "./App.css";
import Users from "./Users";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await fetch(
        "https://randomuser.me/api/?page=1&results=50&nat=us"
      );
      const data = await res.json();
      console.log(data);
      setLoading(false);
      setUsers(data.result);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Pagination App</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Users users={users} page={page} />
        </>
      )}
    </div>
  );
}

export default App;
