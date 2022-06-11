import React, { useState } from 'react';
import Modal from '../../Components/Modal'
import { doneTodoList, deleteTodoList } from '../../Service';
import './Ongoing.css'

const Ongoing = ({myData, setMyData}) => {
   const [editItem, setEditItem] = useState('');
   const [showModal, setShowModal] = useState(false);

   const handleClosed = () => {
       setShowModal(false)
    }

   const handleOpen = (id) =>{
    setShowModal(true)
    setEditItem(id)
   }

   const handleDoneTodoList = (id) => {
       doneTodoList(setMyData, id);
   }
   const handleDeleteTodoList = (id) => {
       deleteTodoList(setMyData, id);
   }

   const listData = myData?.filter((item)=> item?.ongoing === true)?.map((item) => {
        return(
            <div className='bg-primary px-5 py-2 my-3 text-start rounded-pill' key={item.id} >
                <div className='d-flex flex-row justify-content-between align-items-center'>
                    <div className='flex-col align-items-center'>
                        <div className='text-white'>{item.title}</div>
                        <div className='text-white'>{item.dateStart}</div>
                    </div>
                    <div className='d-flex flex-row gap-4 py-2'>
                        <button 
                            className='btn btn-warning rounded-pill btn-shadow'
                            onClick={handleOpen.bind(null, item.id)}
                        >
                            Edit
                        </button>
                        <button 
                            className='btn btn-success text-black rounded-pill btn-shadow'
                            onClick={handleDoneTodoList.bind(null, item.id)}
                        >
                            Done
                        </button>
                        <button 
                            className='btn btn-danger text-black rounded-pill btn-shadow'
                            onClick={handleDeleteTodoList.bind(null, item.id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
                
            </div>
        )
    })

  return (
    <>
        <Modal 
            show={showModal} 
            onHide={handleClosed}
            id={editItem}
            setMyData={setMyData}
        />
        <div className='container py-5'>
            <div className='bg-create py-4 content-rounded'>
                <div className='container fw-bold bg-create-title rounded-pill p-2 w-75'>
                    On Going
                </div>
                    <div className='container w-100 d-flex flex-column py-4 gap-4'>
                        <div className='container bg-create-title content-rounded p-3 w-75'>
                            {listData}
                        </div>
                    </div>
            </div>
        </div>
    </>
  )
}

export default Ongoing