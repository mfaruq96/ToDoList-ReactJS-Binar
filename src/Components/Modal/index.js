/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { editTodoList, getById } from '../../Service';
import { useForm } from 'react-hook-form'
import './Modal.css'

const MyModal = ({ show, onHide, id, setMyData }) => {
    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
    const [title, setTitle] = useState("");
    const [date, setDate] = useState();

    useEffect(() => {
        const dt = getById(id);
        setValue('title', dt?.title)
        setValue('date', dt?.dateStart)
    }, [id, setValue])
    
    const handleOnChange = (e) =>{
        if(e.target.name === 'title'){
            setTitle(e.target.value)
        }else if(e.target.name === 'date'){
            setDate(e.target.value)
        }
    }

    
   const onSubmit = (value) => {
     editTodoList(setMyData, id, value.title, value.date)
     onHide()
 }
    

  return (
    <Modal 
        show={show} 
        onHide={onHide}
        centered
    >
        <Modal.Body className='bg-modal'>
            <div className='text-modal'>
                Edit My To do List
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='container w-100 d-flex flex-column align-items-center py-4 gap-4'>
                        <div className="input-group w-75 mb-3">
                            <span className="input-group-text bg-create-label">
                                <span className='me-4'>Title</span>:
                            </span>
                            <input 
                                type="text" 
                                className="form-control bg-create-color" 
                                placeholder="Title"
                                // name='title'
                                {...register("title")}
                                value={title}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="input-group w-75 mb-3">
                            <span className="input-group-text bg-create-label">
                                <span className='me-4'>Date</span>:
                            </span>
                            <input 
                                type="date" 
                                className="form-control bg-create-color" 
                                // name='date'
                                {...register("date")}
                                value={date}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className='d-flex justify-content-end w-75 gap-4'>
                            <button 
                                className='btn btn-warning rounded-pill py-2 px-4 btn-shadow rounded'
                                type='submit'
                                onClick={handleSubmit}
                            >
                                Edit
                            </button>
                            <button 
                                type='button'
                                className='btn btn-danger rounded-pill py-2 px-4 btn-shadow rounded'
                                onClick={onHide}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
        </Modal.Body>
  </Modal>
  )
}

export default MyModal