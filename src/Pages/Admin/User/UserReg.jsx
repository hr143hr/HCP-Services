import React, { useEffect, useState } from "react";
import axios from "axios";

const UserReg = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("/api/Users");
                console.log(response.data); // Debugging step to check data structure
                const data = Array.isArray(response.data) ? response.data : [response.data];
                setUsers(data); // Ensure users is an array
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch data");
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    // Function to handle delete
    const handleDelete = async (userId, username) => {
        // Show confirmation dialog with username
        const isConfirmed = window.confirm(`Are you sure you want to delete ${username}?`);
        if (!isConfirmed) {
            return; // Exit if the user cancels
        }

        try {
            await axios.delete(`/api/Users/${userId}`);
            // Update state to remove the deleted user
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
        } catch (err) {
            console.error("Failed to delete user:", err);
            alert("Error deleting user. Please try again.");
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>User</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item active">User</li>
                        </ol>
                    </nav>
                </div>
                {/* End Page Title */}
                <section className="dashboard">
                    <div className="row p-2">
                        <table className="table">
                            <thead className="table-info">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Mobile Number</th>
                                    <th scope="col">Registration Type</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={user.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.mobile}</td>
                                        <td>{user.isActive ? "Active User" : "Inactive User"}</td>
                                        <td>
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => handleDelete(user.id, user.username)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
            {/* End #main */}
        </>
    );
};

export default UserReg;
