import React from 'react'
import './Aside.css'
import AddDivice from './AddDivice'

function Aside() {
  return (
    <>
    <div class="container bg-light ">
        <p className=' text-dark'>Asset Management</p><br/>

    
    <i class="fa-regular fa-notes"></i>
        <h5><span>NEW ASSET DETAILS</span></h5><br/>

        <button type="button" class="btn">Basic Details</button> <br />       
        <button type="button" class="btn">Location & Tracking</button><br />       
        <button type="button" class="btn">Devices & parameters</button><br />        
        <button type="button" class="btn">Ownership</button>      <br />  
        <button type="button" class="btn">Finance Details</button>       <br />
         <button type="button" class="btn">Images & files</button>       <br />
        <button type="button" class="btn">More Details</button>    <br />
            <button type="button" class="btn">Related Assets</button><br />
            
    </div>

    </>
  )
}

export default Aside