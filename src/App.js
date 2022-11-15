import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/sb-admin-2.min.css";
import "./css/sb-admin-2.css";
import "./fontawesome-free/css/all.css";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tables from "./Tables";
import Charst from "./Charst";
import { UserContext } from "./UserContext";
import { useContext, useState } from "react";
import Login from "./Login/Login";
import PortalLayout from "./PortalLayout";
import Resister from "./Login/Resister";
import ForgetPassword from "./Login/ForgetPassword";
import Err404 from "./Login/Err404";
import Blank1 from "./Login/Blank1";
import Colors from "./Utilitie/Colors";
import Borders from "./Utilitie/Borders";
import Others from "./Utilitie/Others";
import Animations from "./Utilitie/Animations";
import Buttons from "./Components/Buttons";
import Cards from "./Components/Cards";


function App() {
  const {user} = useContext(UserContext)
  return (
    <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login/>}></Route>
              <Route path="/register" element={<Resister/>}></Route>
              <Route path="/forgetpassword" element={<ForgetPassword/>}></Route>
              <Route path="/portal" element={<PortalLayout/>}>
              <Route path="dashboard" element={<Dashboard/>}/>
              <Route path="table" element={<Tables/>}/>
              <Route path="charts" element={<Charst/>}/>
              <Route path="err404" element={<Err404/>}/>
              <Route path="blank" element={<Blank1/>}/>
              <Route path="colors" element={<Colors/>}/>
              <Route path="animations" element={<Animations/>}/>
              <Route path="borders" element={<Borders/>}/>
              <Route path="others" element={<Others/>}/>
              <Route path="buttons" element={<Buttons/>}/>
              <Route path="cards" element={<Cards/>}/>
              </Route> 
            </Routes>
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2021</span>
                    </div>
                </div>
            </footer>
            <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

        <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
