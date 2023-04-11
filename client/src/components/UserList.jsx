import React, { useState, useEffect } from 'react';

function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/users/');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {data.map((item) => (
        <p key={item._id}>{item.email}</p>
      ))}
    </div>
  );
}

export default UserList;