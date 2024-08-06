import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../models/user';
import axios from 'axios';

const Login: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/usersData.json');
      const usersArray: User[] = response.data.users.map((user: any) => {
        return new User(user.id, user.username, user.password, user.fullName, user.email);
      });
      setUsers(usersArray);
    };
    fetchData();
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      alert('Login successful');
    } else {
      alert('Wrong username or password');
    }
  };

  return (
    <section className="contact-form-main" style={{ height: "100%", margin: 0 }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7">
            <div className="form-wrapper">
              <div className="form-tittle">
                <div className="row ">
                  <div className="col-lg-11 col-md-10 col-sm-10">
                    <div className="section-tittle">
                      <span>Login Form</span>
                      <h2>Log in to your account</h2>
                    </div>
                  </div>
                </div>
              </div>
              <form id="contact-form" method="POST" onSubmit={handleSubmit}>
                <div className="">
                  <div className="col-lg-12 col-md-6">
                    <div className="form-box user-icon mb-30">
                      <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="form-box email-icon mb-30">
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12" style={{ marginTop: "70px" }}>
                    <div className="submit-info">
                      <button className="btn" type="submit">Log In</button>
                    </div>
                    <div className="mt-30">
                      <p>Don't have an account?<Link to="/register" className="reg-btn">Register</Link></p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
