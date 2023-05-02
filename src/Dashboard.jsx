import React from 'react'
import Aside from './Aside'
import RightAside from './RightAside'
import './Dashboard'

function Dashboard() {
  return (
    <>
    <div class=" ">
     <div class="row">
    <div class="col-4" id='color'><Aside/></div>
    <div class="col-8"><RightAside/></div>
  </div>
</div>
     
    </>
  )
}

export default Dashboard