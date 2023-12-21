import React from "react";

function UpdateForm({ initialData, onUpdate }) {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          No HP:
        </label>
        <input
          type="number"
          className="form-control"
          id="number"
          name="number"
          value=""
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Update
      </button>
    </form>
  );
}

export default UpdateForm;
