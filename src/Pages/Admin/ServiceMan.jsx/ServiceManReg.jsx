import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServiceManReg = () => {
  const [data, setData] = useState([]); // State to store API data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/Servicesman');
        setData(response.data); // Set the fetched data to state
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Technician</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Technician</li>
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
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={item.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.firstName || 'N/A'} {item.lastName || ''}</td>
                      <td>{item.email || 'N/A'}</td>
                      <td>{item.contactNumber || 'N/A'}</td>
                      <td>{item.city || 'N/A'}</td>
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
  )
}

export default ServiceManReg