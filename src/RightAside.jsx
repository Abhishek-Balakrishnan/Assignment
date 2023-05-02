import React from 'react'
import './RightSide.css'
import AddDivice from './AddDivice'
function RightAside() {
  return (
    <>
<p>Dashboard &gt; Asset Management &gt; Create Asset  &gt; Basic Details </p>
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <h2 class="">Create Asset</h2>
    <form class="d-flex" role="search">
      
    <button class=" btn btn-success ms-2 " type="submit">Create Asset</button>
      <button class=" btn btn-outline-danger ms-2 " type="submit">cancel</button>
      
    </form>
  </div>
</nav>
<hr/>
{/* <h4>Basic Details</h4>
<div className='position'>
    <i class="fa-solid fa-triangle-exclamation"id='size'></i>
  
</div>  */}
<div className=' bg-light' id='color '>
 <h6>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-triangle-exclamation"id='size'></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Things to do before adding an asset</h6>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Before adding asset,you must create an entry for Business Unit,Cost Center and Department</p>
<button type="button" class="btn btn-light">Business Unit</button>
<button type="button" class="btn btn-light">Cost Center</button>
<button type="button" class="btn btn-light">Department</button>
   &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <AddDivice/>
 <br />
<br />

</div>
<form action="">
<div class="container ">
     <div class="row">
    <div class="col-6">
        <label>Asset Name <i class="fa-solid fa-star-of-life"id='star'></i></label><br />
        <input type="text" class="form-control" placeholder="Enter Name Of Asset"  aria-describedby="basic-addon1"/><br />
        <label>Asset Manager<i class="fa-solid fa-star-of-life"id='star'></i></label><br />
      
        <select class="form-select" id="inputGroupSelect01">
    <option selected>Danish Sharma</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select><br />
  <label>Asset Criticality<i class="fa-solid fa-star-of-life"id='star'></i><i class="fa-solid fa-circle-info p-2"id='vv'></i></label><br />
      
      <select class="form-select" id="inputGroupSelect01">
  <option selected>Low</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
    </div>
    <div class="col-6">
    <label>Asset Seriel Number</label><br />
    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/><br />
        <label>Asset Category<i class="fa-solid fa-star-of-life"id='star'></i></label><br />
        <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder='Select Asset Category' aria-label="Text input with dropdown button"/>
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>            <label>Asset Movability<i class="fa-solid fa-star-of-life" id='star'></i><i class="fa-solid fa-circle-info p-2"id='vv'></i></label><br />

        <select class="form-select" id="inputGroupSelect01">
  <option selected>Fixed</option>
  
</select><br /><br />
    </div>
 
        <label htmlFor="" className='p-2'>labels and tags<i class="fa-solid fa-circle-info p-2" id='vv'></i></label><br />
        <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder='Assign tags and labels to this asset' aria-label="Text input with dropdown button"/>
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>        
    <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Asset Description</label>
  <textarea class="form-control" placeholder='Write short description about the asset' id="exampleFormControlTextarea1" rows="3"></textarea>
</div>  </div>
  

</div><br />
<div class="container ">
     <div class="row">
    <div class="col-6">
    <button class="btn btn-outline-danger " type="submit">cancel</button>

    </div>
    <div class="col-6 text-end">
    <button class="btn btn-outline-white" type="submit">Back</button>
     <button class="btn btn-success" type="submit">Save&submit</button>
    </div>
  </div>
</div>
</form>
    </>
  )
}

export default RightAside