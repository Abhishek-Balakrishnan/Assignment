import React from 'react'
import Aside from './Aside'
import RightAside from './RightAside'

function Dashboard() {
  return (
    <>
    <div class="container ">
     <div class="row">
    <div class="col-4"><Aside/></div>
    <div class="col-8"><RightAside/></div>
  </div>
</div>
     
    </>
  )
}

export default Dashboard