import React from 'react';
import { addTodoList } from '../../Service';
import { useForm } from 'react-hook-form';
import './Create.css'

const Create = ({myData, setMyData}) => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (value) => {
        addTodoList(myData, setMyData, value.title, value.date);
        reset();
    }

  return (
      <>
        <div className='container py-5'>
            <div className='bg-create py-4 content-rounded'>
                <div className='container fw-bold bg-create-title rounded-pill p-2 w-50'>
                    Add To do List
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
                                name='title'
                                required
                                {...register("title")}
                            />
                        </div>
                        <div className="input-group w-75 mb-3">
                            <span className="input-group-text bg-create-label">
                                <span className='me-4'>Date</span>:
                            </span>
                            <input 
                                type="date" 
                                className="form-control bg-create-color"
                                name='date'
                                required
                                {...register("date")}
                            />
                        </div>
                        <div className='d-flex justify-content-end w-75'>
                            <button 
                                className='btn btn-success rounded-pill py-2 px-4 btn-shadow rounded'
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Create