import React from 'react'

const ManageEnquiry = () => {
  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Enquiry</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
        <section className=" dashboard">
          <div className="row p-2">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Mobile Number</th>
                  <th scope="col">Registration Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>himanshu patel</td>
                  <td>himansu@gmail.com</td>
                  <td>9452124536</td>
                  <td>User</td>
              
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>mayur makwana</td>
                  <td>mayurmakwana12@gmail.com</td>
                  <td>7845365214</td>
                  <td>Vendor</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>mayur makwana</td>
                  <td>mayurmakwana12@gmail.com</td>
                  <td>7845365214</td>
                  <td>Service man</td>
                </tr>
               
              </tbody>
            </table>

          </div>
        </section>
      </main>
      {/* End #main */}
    </>
  )
}

export default ManageEnquiry