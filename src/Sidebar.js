import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [action, setAction] = useState(false);
  const [action1, setAction1] = useState(false);
  const [action2, setAction2] = useState(false);
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <Link className="nav-link" to={"dashboard"}>
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Interface</div>
      
    {action ? 
      (<li class="nav-item">
      <a onClick={()=>{
        setAction(false)
      }}  class="nav-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <i class="fas fa-fw fa-cog"></i>
          <span>Components</span>
      </a>
      <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Custom Components:</h6>
              <Link class="collapse-item" to={"buttons"} >Buttons</Link>
              <Link class="collapse-item" to={"cards"}>Cards</Link>
          </div>
      </div>
  </li>) : 
      (<li class="nav-item">
      <a onClick={()=>{
        setAction(true)
      }} class="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <i class="fas fa-fw fa-cog"></i>
          <span>Components</span>
      </a>
  </li>) }

  {action1 ? 
      (<li class="nav-item">
      <a onClick={()=>{
        setAction1(false)
      }}  class="nav-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <i className="fas fa-fw fa-wrench"></i>
          <span>Utilities</span>
      </a>
      <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Utilities:</h6>
            <Link className="collapse-item" to={"colors"}>
              Colors
            </Link>
            <Link className="collapse-item" to={"borders"}>
              Borders
            </Link>
            <Link className="collapse-item"to={"animations"}>
              Animations
            </Link>
            <Link className="collapse-item" to={"others"}>
              Other
            </Link>
          </div>
      </div>
        
     
  </li>) : 
      (<li class="nav-item">
      <a onClick={()=>{
        setAction1(true)
      }} class="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <i className="fas fa-fw fa-wrench"></i>
          <span>Utilities</span>
      </a>
  </li>) }

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Addons</div>

      {action2 ? 
      (<li class="nav-item">
      <a onClick={()=>{
        setAction2(false)
      }}  class="nav-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        <i className="fas fa-fw fa-folder"></i>
          <span>Pages</span>
      </a>
      <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Login Screens:</h6>
            <Link to={"/"} className="collapse-item">
              Login
            </Link>
            <a className="collapse-item" href="/register">
              Register
            </a>
            <a className="collapse-item" href="/forgotpassword">
              Forgot Password
            </a>
            <div className="collapse-divider"></div>
            <h6 className="collapse-header">Other Pages:</h6>
            <a className="collapse-item" href="/portal/err404">
              404 Page
            </a>
            <a className="collapse-item" href="/portal/blank">
              Blank Page
            </a>
          </div>
      </div>
        
     
  </li>) : 
      (<li class="nav-item">
      <a onClick={()=>{
        setAction2(true)
      }} class="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         <i className="fas fa-fw fa-folder"></i>
          <span>Pages</span>
      </a>
  </li>) }

      <li className="nav-item">
        <Link className="nav-link" to={"charts"}>
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Charts</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to={"table"}>
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Tables</span>
        </Link>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

      <div className="sidebar-card d-none d-lg-flex">
        <img
          className="sidebar-card-illustration mb-2"
          src="img/undraw_rocket.svg"
          alt="..."
        />
        <p className="text-center mb-2">
          <strong>SB Admin Pro</strong> is packed with premium features,
          components, and more!
        </p>
        <a
          className="btn btn-success btn-sm"
          href="https://startbootstrap.com/theme/sb-admin-pro"
        >
          Upgrade to Pro!
        </a>
      </div>
    </ul>
  );
}

export default Sidebar;
