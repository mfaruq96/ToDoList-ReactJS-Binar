const addTodoList = (myData, setMyData, title, date) =>{
    const newData = [
      ...myData,
      {
        id: myData.length+1, 
        title: title,
        dateStart: date,
        dateEnd: '',
        ongoing: true,
        done: false,
      }
    ]
    setMyData(newData)
    localStorage.setItem('dataTodo', JSON.stringify(newData))
}

const getById = (id) =>{ 
  const myData = JSON.parse(localStorage.getItem('dataTodo'))
  const result = myData?.find((item) => item.id === id);
  return result;
}

const editTodoList = (setMyData, id, title, date) =>{
  const myData = JSON.parse(localStorage.getItem('dataTodo'))
  const check = myData?.find((item) => item.id === id);
  if(check){
    const newData = myData?.map((item) => {
      if(item.id === id){
        return {
                id: myData.length+1, 
                title: title,
                dateStart: date,
                dateEnd: '',
                ongoing: true,
                done: false,
              }
      }else{
        return item
      }
    })
    setMyData(newData)
    localStorage.setItem('dataTodo', JSON.stringify(newData))

  }
}

const doneTodoList = (setMyData, id) =>{
  const myData = JSON.parse(localStorage.getItem('dataTodo'))
  const check = myData?.find((item) => item.id === id);
  const dn = new Date();
  if(check){
    const newData = myData?.map((item) => {
      if(item.id === id){
        return {
                id: item.id, 
                title: item.title,
                dateStart: item.dateStart,
                dateEnd: dn.toISOString().slice(0,10),
                ongoing: false,
                done: true,
              }
      }else{
        return item
      }
    })
    setMyData(newData)
    localStorage.setItem('dataTodo', JSON.stringify(newData))
  }
}

const deleteTodoList = (setMyData, id) =>{
  const myData = JSON.parse(localStorage.getItem('dataTodo'))
  const check = myData?.find((item) => item.id === id);
  if(check){
    const newData = myData?.filter((item) => item.id !== id)
    setMyData(newData)
    localStorage.setItem('dataTodo', JSON.stringify(newData))
  }
}


export { 
    addTodoList, editTodoList, getById, doneTodoList, deleteTodoList
}