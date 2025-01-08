import React, { useState, useEffect } from "react";
import axios from "axios";

const VandoReg = () => {
  const [data, setData] = useState([]); // State to store API data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/BussinessUser");
        setData(response.data); // Set the fetched data to state
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to handle delete
  const handleDelete = async (userId, userName) => {
    const isConfirmed = window.confirm(`Are you sure you want to delete ${userName}?`);
    if (!isConfirmed) {
      return; // Exit if the user cancels
    }

    try {
      await axios.delete(`/api/BussinessUser/${userId}`);
      // Remove the deleted user from the state
      setData((prevData) => prevData.filter((item) => item.id !== userId));
    } catch (err) {
      console.error("Failed to delete user:", err);
      alert("Error deleting user. Please try again.");
    }
  };

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Vandor</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Vandor</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
        <section className="dashboard">
          <div className="row p-2">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="text-danger">{error}</p>
            ) : (
              <table className="table">
                <thead className="table-info">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile Number</th>
                    <th scope="col">City</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={item.id}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        {item.businessOwnerFirstName || "N/A"} {item.businessOwnerLastName || ""}
                      </td>
                      <td>{item.email || "N/A"}</td>
                      <td>{item.contactNumber || "N/A"}</td>
                      <td>{item.city || "N/A"}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(item.id, item.businessOwnerFirstName || "this user")}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </section>
      </main>
      {/* End #main */}
    </>
  );
};

export default VandoReg;
