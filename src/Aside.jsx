import React from 'react'
import './Aside.css'
import AddDivice from './AddDivice'

function Aside() {
  return (
    <>
    <div class="container bg- ">
              <p className=' text-dark'>&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-arrow-left"></i> Asset Management</p><br/>

    
    
       &nbsp;  <span className='bold'>NEW ASSET DETAILS</span><br/>

        <button type="button" class="btn"><i class="fa-solid fa-file-pen me-2"></i>Basic Details</button> <br />       
        <button type="button" class="btn"><i class="fa-solid fa-location-dot me-2"></i>Location & Tracking</button><br />       
        <button type="button" class="btn"><i class="fa-solid fa-microchip me-2"></i>Devices & parameters</button><br />        
        <button type="button" class="btn"><i class="fa-solid fa-user me-2"></i>Ownership</button>      <br />  
        <button type="button" class="btn"><i class="fa-solid fa-money-check me-2"></i>Finance Details</button>       <br />
         <button type="button" class="btn"><i class="fa-solid fa-file me-2"></i>Images & files</button>       <br />
        <button type="button" class="btn"><i class="fa-solid fa-circle-info me-2"></i>More Details</button>    <br />
            <button type="button" class="btn"><i class="fa-solid fa-code-merge me-2"></i>Related Assets</button><br />
            
    </div>

    </>
  )
}

export default Aside