import React, { useEffect } from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Videocard from './Videocard'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi, deleteCategoryApi, getCategoryApi, updateCategoryApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';

function Category({remove}) {

  const [show, setShow] = useState(false);

  const [categoryName,setCategoryName]=useState("")

  const handleClose = () => {
    setShow(false);
    handleCancel()

  }
  const handleShow = () => setShow(true);

  const [categoryStatus, setCategoryStatus]=useState({})

  const [categoryUpdateStatus, setCategoryUpdateStatus]=useState({})

  // console.log(categoryName);

  const handleCancel=()=>{
    setCategoryName("")
  }

  const handleAdd= async()=>{
    if(!categoryName){
      alert('please fil the category name')
    }
    else{
      const reqBody={
        category:categoryName,
        allVideos:[ ]
      }
      const result=await addCategoryApi(reqBody)
      console.log(result);
      if(result.status>=200&& result.status<300){
        toast.success('category added successfully')
        handleClose()
        setCategoryStatus(result)
      }
      else{
        toast.error('something went wrong')
      }
      
    }
  }

  const[categoryDetails, setCategoryDetails]=useState([])

  const getCategory=async()=>{
    const result=await getCategoryApi()
    if(result.status>=200 && result.status<300){
      setCategoryDetails(result.data);
    } 
    
  }
  //console.log(categoryDetails);

  const handleDelete=async(id)=>{
    const result= await deleteCategoryApi(id)
    if(result.status>=200 && result.status<300){
      setDeleteStatus(result)
    }
    //console.log(result);
    
  }
  const [deleteStatus,setDeleteStatus]=useState({})

 

  useEffect(()=>{
    getCategory()
  },[categoryStatus,deleteStatus,remove])

  const videoOver=(e)=>{
    e.preventDefault()
  }
  const videoDrop=async (e,cDetails)=>{
    //console.log(cDetails);
    const videoDetails=JSON.parse(e.dataTransfer.getData('videoDetails'))
    //console.log(videoDetails);
    // cDetails={...cDetails,allVideos:[...cDetails.allVideos,videoDetails]}
    // console.log(cDetails);
    
    if(cDetails.allVideos.find((item)=>item.id==videoDetails.id)){
      alert('video already in thesame category')
    }
    else{
      cDetails.allVideos.push(videoDetails)
      console.log(cDetails);
      const result = await updateCategoryApi(cDetails.id,cDetails)
      //console.log(result);
      if(result.status>=200 && result.status<300){
        setCategoryUpdateStatus(result)
      }
      
      
    }
    
    
  }

  const videoDrag=(e,videoDetails,categoryDetails)=>{
    //console.log(videoDetails,categoryDetails);
    
    const details ={
      videoDetails,
      categoryDetails
    }
    e.dataTransfer.setData("Details",JSON.stringify(details))

  }
  
  return (
    <>
        <h4 className='mt-5'>Category</h4>
        <button onClick={handleShow} className='btn btn-warning rounded mt-4 w-100'>Add Category</button>

        
        {categoryDetails?.length>0?
          categoryDetails?.map((item)=>(
            <div className='border rounded border-secondary p-3 mt-4' droppable onDragOver={(e)=>videoOver(e)}onDrop={(e)=>videoDrop(e,item)}>
            <div className='d-flex justify-content-between'>
                <h6>{item?.category}</h6>
                <button className='btn btn-danger' onClick={()=>{handleDelete(item?.id)}}><FontAwesomeIcon icon={faTrash} /></button>
            </div>
            {item?.allVideos.length>0 &&
              item?.allVideos.map((video)=>(
                <div draggable onDragStart={(e)=>videoDrag(e,video,item)}>
                  <Videocard videoDetails={video} present={true}/>
                </div>
              ))
            }
            
            </div>
          ))
          

        :

        <h5 className='text-center text-warning mt-4'>No Category Added Yet...</h5>}


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-4 rounded border border-dark'>
            <input type="text"placeholder='Enter category name' onChange={(e)=>setCategoryName(e.target.value)} value={categoryName} className='form-control'/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme="colored" autoClose={2000}/>
    </>
  )
}

export default Category