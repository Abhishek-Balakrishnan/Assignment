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
<h3>Basic Details</h3>
<div className='bg-light'><h6>Things to do before adding an asset</h6>
<p>Before adding asset,you must create an entry for Business Unit,Cost Center and Department</p>
<button>Business unit</button> <button>Cost Center</button> <button>Department</button>   &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <AddDivice/>
 <br />
<br />

</div>
<form action="">
<div class="container ">
     <div class="row">
    <div class="col-6">
        <label>Asset Name</label><br />
        <input type="text" placeholder='Enter Name Of Asset' /><br /><br />
        <label>Asset Manager</label><br />
      
        <select class="form-select" id="inputGroupSelect01">
    <option selected>Danish Sharma</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select><br />
  <label>Asset Criticality</label><br />
      
      <select class="form-select" id="inputGroupSelect01">
  <option selected>Low</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
    </div>
    <div class="col-6">
    <label>Asset Seriel Number</label><br />
        <input type="text" placeholder='Enter Asset Seriel Number' /><br /><br />
        <label>Asset Category</label><br />
        <input type="text" placeholder='select Asset Category' /><br /><br />

        <select class="form-select" id="inputGroupSelect01">
  <option selected>Fixed</option>
  
</select><br /><br />
    </div>
 
        <label htmlFor="" className='p-2'>labels and tags</label><br />
    <input type="text"placeholder='Assign tags and labels to this asset' /><br /><br />
    
    <label htmlFor="" className='p-2'>Asset Description</label>
    <input  className='a1' type="text"placeholder='Write short description about the asset' />
  </div>
  

</div><br />
<div class="container ">
     <div class="row">
    <div class="col-6">
    <button class="btn btn-outline-danger " type="submit">cancel</button>

    </div>
    <div class="col-6 text-end">
    <button class="btn btn-outline-white" type="submit">Back</button>
     <button class="btn btn-outline-success" type="submit">Save&submit</button>
    </div>
  </div>
</div>
</form>
    </>
  )
}

export default RightAside