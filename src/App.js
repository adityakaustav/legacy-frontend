import React from 'react';
//import SignUpNext from './Pages/SignUp/SignUpNext';
import NavbarCommon from './Pages/NavbarCommon';
import TeachersDashboard from './Pages/Dashboard/TeachersDashboard'
// import SignUp from './Pages/SignUp/SignUp';
//import Login from './Pages/Login/Login';
import './App.css';
function App() {
  return (
    <div className="App">
    {/* <SignUpNext /> */}
    <NavbarCommon />
    <TeachersDashboard />
    {/* <SignUp /> */}
    {/* <Login /> */}
    </div>
  );
}

export default App;
