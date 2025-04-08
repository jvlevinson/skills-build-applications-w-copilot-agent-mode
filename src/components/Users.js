import React, { useEffect, useState } from 'react';

const baseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/api/users/`)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1 className="mb-4 text-warning">Users</h1>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
