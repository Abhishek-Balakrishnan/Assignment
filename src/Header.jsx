import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
function Header() {
  return (
    <>
     <nav class="navbar navbar-expand-lg bg-body-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><h2>PETRAN</h2></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Employee</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link disabled">Assets</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Manage</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Settings</a>
        </li>
       
      </ul>
      
      <div className='h1'>
          <i class="fa-solid fa-location-dot"></i>  
          </div>      
           <div className='h1'> <i class="fa-solid fa-magnifying-glass"></i></div>
            <div className='h1'><i class="fa-regular fa-bell"></i></div>
      
            <div class="dropdown">
  <a class="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Danish
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
   
    </div>
  </div>
</nav>
    </>
  )
}

export default Header