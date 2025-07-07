import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const defaultUsers = [
  { email: "abc@gmail.com", password: "1234" },
  { email: "erdf@example.com", password: "5678" },
];

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userFound = defaultUsers.some(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (userFound) {
      setMessage("Login Successful ");
      localStorage.setItem("user", JSON.stringify(formData));
      sessionStorage.setItem("user", JSON.stringify(formData));

      setTimeout(() => {
        navigate("/");
      }, 800);
    } else {
      setMessage("Invalid credentials ");
    }
  };
  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        {/* Login Side */}
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Card
            className="p-4 shadow"
            style={{ width: "100%", maxWidth: "400px" }}
          >
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              {message && (
                <div className="mb-3 text-center">
                  <small>{message}</small>
                </div>
              )}
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
          </Card>
        </Col>

        {/* Image Side */}
        <Col className="mx-5">
          <img
            src="/login.jpg"
            alt="About Us"
            className="img-fluid w-100 h-100"
            style={{ objectFit: "contain" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;