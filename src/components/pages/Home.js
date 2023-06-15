import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadusers();
  }, []);
  const loadusers = async () => {
    let result = await axios.get("http://localhost:3003/users");
    setUsers(result.data.reverse());
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    Swal.fire({
      title: 'user deleted',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    loadusers();
  };
  return (
    <div>
      <h1>Home page</h1>
      <div className="container">
        <table class="table table-striped border shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link className="btn btn-primary" to={`/users/${user.id}`}>View</Link>
                      <Link
                        className="btn btn-outline-primary"
                        to={`/users/edit/${user.id}`}
                      >
                        Edit
                      </Link>
                      <Link
                        className="btn btn-danger"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
