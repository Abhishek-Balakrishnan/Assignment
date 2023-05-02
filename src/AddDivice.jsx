import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LeftSide from './LeftSide';
function AddDivice() {
    const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
    
      <Button onClick={() => setLgShow(true)}>Add Devices & Parameters</Button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          <i class="fa-solid fa-microchip me-2"></i>Add Devices & Parameter
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> <div class="container ">
     <div class="row">
    <div class="col-5"><label>Device Type<i class="fa-solid fa-star-of-life"id='star'></i><i class="fa-solid fa-circle-info p-2"id='vv'></i></label><br />
      
      <select class="form-select" id="inputGroupSelect01">
  <option selected>Animater ToolKit</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <br />
</select><br />
<label>Attach Device<i class="fa-solid fa-star-of-life"id='star'></i><i class="fa-solid fa-circle-info p-2"id='vv'></i></label><br />
      
      <select class="form-select" id="inputGroupSelect01">
  <option selected>Antminer ToolKit(#AJ2930KP)</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select><br />
<label>Device Name<i class="fa-solid fa-star-of-life"id='star'></i><i class="fa-solid fa-circle-info p-2"id='vv'></i></label><br />
      
      <select class="form-select" id="inputGroupSelect01">
  <option selected>Antminer ToolKit(#AJ2930KP)</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select><br />
<label htmlFor="">Device ID<i class="fa-solid fa-star-of-life"id='star'></i></label>
<br />

<span class="input-group-text">AJ2930KP</span>
<br />
<label htmlFor="">Selected Parameters<i class="fa-solid fa-circle-info p-2"id='vv'></i></label>
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Channel 1(#HJ91K)
    <span class="badge rounded-pill">Wattage</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  Channel 1(#ND44K)
    <span class="badge  rounded-pill">Hash Rate</span>
  </li>
 
</ul>


</div>
    <div class="col-7"><LeftSide/></div>
  </div>
</div></Modal.Body>
      </Modal>
    </>
  )
}

export default AddDivice