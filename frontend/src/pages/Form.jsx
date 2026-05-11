import React, { useState } from 'react'
function Form() {
    const [formData, setFormData] = useState({
        fname: '',
        email: '',
        address: ''
    })

    const [userData, setUserData] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        setUserData([...userData, formData])
        setFormData({
            fname: '',
            email: '',
            address: ''
        })
    }
    console.log(userData)
    return (
        <div>
            <div>
                <h1>Form Input</h1>
                <form>
                    <input type="text" value={formData.fname} onChange={e => setFormData({ ...formData, fname: e.target.value })} placeholder='Enter Fullname' />
                    <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder='Enter Email Address' />
                    <input type="text" value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} placeholder='Enter Address' />
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>

            <div>
                <h1>View User Data</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Fullname</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.map((data, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{data.fname}</td>
                                    <td>{data.email}</td>
                                    <td>{data.address}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )


}

export default Form