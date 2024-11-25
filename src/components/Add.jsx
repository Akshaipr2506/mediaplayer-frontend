import React from 'react'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { addVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setAddStatus}) {
    const [show, setShow] = useState(false);
    
    const [videoDetails, setVideoDetails]=useState({
        caption:"",
        imgurl:"",
        embededUrl:""
    })
    console.log(videoDetails);

    
    const handleClose = () => {setShow(false);
      handleCancel()
    }
    const handleShow = () => setShow(true);
    const handleCancel=()=>{
      setVideoDetails({
        caption:"",
        imgurl:"",
        embededUrl:""
      })
    }
    const handleSave=async()=>{
      const {caption,imgurl,embededUrl}=videoDetails
      if(!caption || !imgurl || !embededUrl){
        toast.info('please fill the form')
      }
      else{
        
        if(embededUrl.startsWith('https://youtu.be/')){
          //https://youtu.be/ImYm2GO46iY?si=itsgME6Yv7y-80A8
          let link= `https://www.youtube.com/embed/${embededUrl.slice(17,28)}`
          console.log(link);
          const result = await addVideoApi({caption,imgurl,embededUrl:link})
          console.log(result);
          if(result.status>=200 && result.status<300){
            toast.success('video added successfully')
            handleClose()
            setAddStatus(result)
          }
          else{
            toast.error('something went wrong')
          }
          
        }
        else{
          //https://www.youtube.com/watch?v=ImYm2GO46iY
          let link= `https://www.youtube.com/embed/${embededUrl.slice(-11)}`
          console.log(link);
          const result = await addVideoApi({caption,imgurl,embededUrl:link})
          console.log(result);
          if(result.status>=200 && result.status<300){
            toast.success('video added successfully')
            handleClose()
            setAddStatus(result)
          }
          else{
            toast.error('something went wrong')
            handleCancel()
          }
        }
        
      }
    }

  return (
    <>
    <h5><span className='d-md-inline d-none'>Upload New Video </span><FontAwesomeIcon icon={faCloudArrowUp} className='ms-3'onClick={handleShow} /></h5>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2' />Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Please fill the following details</p>
            <form className='border rounded mt-2 p-3'>
                <input value={videoDetails.caption} onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder='Video Caption' className='form-control' />
                <input value={videoDetails.imgurl} onChange={(e)=>setVideoDetails({...videoDetails,imgurl:e.target.value})} type="text" placeholder='Video Image' className='form-control mt-3' />
                <input value={videoDetails.embededUrl} onChange={(e)=>setVideoDetails({...videoDetails,embededUrl:e.target.value})} type="text" placeholder='Video Url' className='form-control mt-3' />
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleSave}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme="colored" autoClose={2000}/>
    </>
  )
}

export default Add