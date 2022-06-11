import React from 'react';
import { deleteTodoList } from '../../Service';
import './Complete.css'

const Complete = ({myData, setMyData}) => {
    
   const Duration = (date1, date2) => {
        const d1 = new Date(date1);
        const d2 = new Date(date2);
        const result =  (d1-d2) / (1000 * 3600 * 24)
        return result;
   }

   const handleDeleteTodoList = (id) => {
       deleteTodoList(setMyData, id);
   }

  return (
    <>
        <div className='container py-5'>
            <div className='bg-create py-4 content-rounded'>
                <div className='container fw-bold bg-create-title rounded-pill p-2 w-75'>
                    Complete
                </div>
                    <div className='container w-100 d-flex flex-column py-4 gap-4'>
                        <div className='container bg-create-title content-rounded p-3 w-75'>
                            {myData?.filter((item)=> item?.done === true)?.map((item) => {
                                return(
                                    <div className='bg-primary px-5 py-2 my-3 text-start rounded-pill' key={item.id} >
                                        <div className='d-flex flex-row justify-content-between align-items-center'>
                                            <div className='flex-col align-items-center'>
                                                <div className='text-white'>{item.title}</div>
                                                <div className='text-white d-flex flex-column px-3'>
                                                    <span className='text-small'>Start : {item.dateStart}</span>
                                                    <span className='text-small'>End : {item.dateEnd}</span>
                                                    <span className='text-small'>Duration : {Duration(item.dateEnd,item.dateStart)} days</span>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row gap-4 py-2 px-5'>
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
                            })}
                        </div>
                     
                    </div>
            </div>
        </div>
    </>
  )
}

export default Complete