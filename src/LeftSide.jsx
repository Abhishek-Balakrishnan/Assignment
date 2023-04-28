import React from 'react'
import './RightSide.css'
function LeftSide() {
  return (
    <>
    <h5>Wattage</h5>
    <div class="card">
  <div class="card-header">
    Channel 1 (#hj91k)
    <p>unit:wh &nbsp; &nbsp;  Decimal:Kilo &nbsp; &nbsp;   Min:0.5 &nbsp; &nbsp;  Max:1.9</p>
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"></input>
  </div>
  <div class="nj1">
  <div class="row g-3">
  <div class="col-sm">
  <div class="input-group">
      <div class="input-group-text">unit</div>
      <input type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder=""/>
    </div>
  </div>
  <div class="col-sm">
  <div class="input-group">
      <div class="input-group-text">Dec</div>
      <select class="form-select" id="specificSizeSelect">
      <option selected>Kilo</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    </div>
    
  </div>
  <div class="col-sm">
  <div class="input-group">
      <div class="input-group-text">Min</div>
      <input type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder=""/>
    </div>
  </div>
</div>
  </div>
  <div class="nj1">
  <div class="row g-3">
  <div class="col-sm">
  <div class="input-group">
      <div class="input-group-text">Low</div>
      <input type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder="0.5"/>
    </div>
  </div>
  <div class="col-sm">
  <div class="input-group">
      <div class="input-group-text">High</div>
      
      <input type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder="1.9"/>
    </div>
  
    
    
  </div>
  <div class="col-sm">
  <div class="input-group">
      <div class="input-group-text">max</div>
      <input type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder=""/>
    </div>
  </div>
</div>
  </div>
  
</div>
<div class="card mt-3">
  <div class="card-header">
    Channel 2 (#HJ920)
    <p>unit:wh &nbsp; &nbsp;  Decimal:Kilo &nbsp; &nbsp;   Min:0.5 &nbsp; &nbsp;  Max:1.9</p>
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"></input>

  </div>
 
  </div>
  <div className='mt-4'>
    <h5>Fan Speed</h5>
    <div class="card mt-3">
  <div class="card-header">
    Channel 1 (#PL32D)
    <p>unit:rpm &nbsp; &nbsp;    Min:0 &nbsp; &nbsp;  Max:~~</p>
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"></input>

  </div>
  </div>
  <div class="card mt-3">
  <div class="card-header">
    Channel 2 (#PL21K)
    <p>unit:rpm &nbsp; &nbsp;     Min:0 &nbsp; &nbsp;  Max:~~</p>
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"></input>

  </div>
  </div>
  <div className='mt-4'>
    <h5>Hash Rate</h5>
    <div class="card mt-3">
  <div class="card-header">
    Channel 1 (#ND220)
    <p>unit:Gh/s &nbsp; &nbsp;  Min:0 &nbsp; &nbsp;   Low:9 &nbsp; &nbsp; High:14 &nbsp; &nbsp;  Max:100</p>
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"></input>

  </div>
  </div>
  <div class="card mt-3">
  <div class="card-header">
    Channel 2 (#ND01S)
    <p>unit:Gh/s &nbsp; &nbsp;  Min:0 &nbsp; &nbsp;   Low:9 &nbsp; &nbsp; High:14 &nbsp; &nbsp;  Max:100</p>
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"></input>
  </div>

  </div>
  </div>
  
    
  </div>
  <div class="col- text-end mt-3">
    <button class="btn btn-outline-white" type="submit">Back</button>
     <button class="btn btn-primary" type="submit">Attach to Asset</button>
    </div>

    </>
  )
}

export default LeftSide