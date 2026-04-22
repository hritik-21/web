import React, { useState } from "react";

function App() {
  // State for form inputs (Controlled Components)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // State for displayed results after submission
  const [submittedData, setSubmittedData] = useState(null);
  
  // State for validation errors
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required!");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    // Process and display data dynamically
    setSubmittedData(formData);
    setError(""); // Clear errors
    
    // Optional: Clear form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Experiment 5: React Form Component</h1>
      
      <div style={styles.formCard}>
        <h2>User Registration</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label>Name:</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Enter your name"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Enter your email"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label>Message:</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Enter your message"
              style={styles.textarea}
            />
          </div>

          {error && <p style={styles.error}>{error}</p>}
          
          <button type="submit" style={styles.button}>Submit Data</button>
        </form>
      </div>

      {/* Dynamic Display of Submitted Data */}
      {submittedData && (
        <div style={styles.resultCard}>
          <h3>Submitted Information:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Message:</strong> {submittedData.message}</p>
          <button onClick={() => setSubmittedData(null)} style={styles.clearBtn}>Clear View</button>
        </div>
      )}
    </div>
  );
}

// Styling for Experiment 5
const styles = {
  container: { padding: "40px", fontFamily: "'Segoe UI', sans-serif", display: "flex", flexDirection: "column", alignLines: "center", backgroundColor: "#f0f2f5", minHeight: "100vh" },
  header: { color: "#1a73e8", textAlign: "center" },
  formCard: { background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", maxWidth: "400px", margin: "20px auto", width: "100%" },
  form: { display: "flex", flexDirection: "column" },
  inputGroup: { marginBottom: "15px", display: "flex", flexDirection: "column" },
  input: { padding: "10px", borderRadius: "5px", border: "1px solid #ccc", marginTop: "5px" },
  textarea: { padding: "10px", borderRadius: "5px", border: "1px solid #ccc", marginTop: "5px", minHeight: "80px" },
  button: { padding: "12px", background: "#1a73e8", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" },
  error: { color: "red", fontSize: "14px", margin: "10px 0" },
  resultCard: { background: "#e6f4ea", padding: "20px", borderRadius: "10px", border: "1px solid #34a853", maxWidth: "400px", margin: "20px auto", width: "100%" },
  clearBtn: { marginTop: "10px", background: "#5f6368", color: "white", border: "none", padding: "5px 10px", borderRadius: "3px", cursor: "pointer" }
};

export default App;