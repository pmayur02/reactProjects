import { useState } from "react";

function ToDoList(){
    
    const [item,setItem] = useState([]);
    

    const addItemHandler = ()=>{
        const item = document.getElementById("inputItem").value;
        document.getElementById("inputItem").value = ""; 
        setItem(i=>[...i, item]);
    }
    
    const deleteItemHandler = (index)=>{
        let updatedList = item.filter((_,i) => i !== index);
        setItem(updatedList)
    }

    const moveUpHandler = (index)=>{
        if(index > 0){
        const updatedList = [...item];
        [updatedList[index],updatedList[index-1]] = [updatedList[index-1],updatedList[index]]
        setItem(updatedList); 
        }
    }

    const moveDownHandler = (index)=>{
        if(index <  item.length -1){
        const updatedList = [...item];
        [updatedList[index],updatedList[index+1]] = [updatedList[index+1],updatedList[index]]
        setItem(updatedList);
        }
    }

    return(
        <div className="main">
            <h1 className="title">To Do List</h1>
            <div className="heading">
                <input id="inputItem" type="text"/>
                <button className="addButton" onClick={addItemHandler}>Add</button>
            </div>
            <div className="itemList">
                <ul>
                    {item.map((i,index)=> 
                    <li key={index}> {i}
                         <button onClick={()=> deleteItemHandler(index)}>delete</button>
                         <button onClick={()=> moveUpHandler(index)} >up</button>
                         <button onClick={()=> moveDownHandler(index)}>down</button>
                    </li>)}
                    
                </ul>
            </div>

        </div>
    )
}

export default ToDoList;