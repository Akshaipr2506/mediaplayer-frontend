import React, { useState } from 'react'
import Add from '../components/Add'
import {Link} from 'react-router-dom'
import {faClockRotateLeft  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Allvideos from '../components/Allvideos'
import Category from '../components/Category'

function Home() {
  const [addStatus, setAddStatus]=useState({})
  const [remove,  setremove]=useState({})
  return (
    <>
      <div className='container d-flex justify-content-between mt-5'>
        <Add setAddStatus={setAddStatus}/>
        <Link to={'/watchhistory'} style={{textDecoration:'none'}}><h5><span className='d-md-inline d-none'>Watch History</span><FontAwesomeIcon icon={faClockRotateLeft} className='ms-3' /></h5></Link>
      </div>

      <div className='container-fluid p-4'>
        <div className='row'>
          <div className="col-md-9">
            <Allvideos addStatus={addStatus} setremove={setremove}/>
          </div>
          <div className="col-md-3">
            <Category remove={remove}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home