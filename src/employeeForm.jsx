// Jovie - Import statements and initial form setup
import{ useState } from 'react'
import './style.css'


const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    position: '',
    resume: null,
  })

  // Raven - Handle popup state and change events
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    })
  }

  // Romnick - Handle form submission and reset
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setShowSuccess(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      dob: '',
      position: '',
      resume: null,
    })
  }

  const closePopup = () => {
    setShowSuccess(false)
  }

  // RJ - Render form and success popup
  return (
    <div className="container">
      <h2>Employee Application Portal</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="formGroup">
          <label className="label">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="formGroup">
          <label className="label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="formGroup">
          <label className="label">Phone Number:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="formGroup">
          <label className="label">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="formGroup">
          <label className="label">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="formGroup">
          <label className="label">Position Applied For:</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="formGroup">
          <label className="label">Resume:</label>
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <button type="submit" className="button">Submit</button>
      </form>

      {showSuccess && (
        <div className="popup">
          <div className="popupContent">
            <h3>Thank you for your application!</h3>
            <p>We have received your details and will get back to you shortly.</p>
            <button onClick={closePopup} className="button">Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default EmployeeForm
