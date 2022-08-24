import { useState } from "react";
import Item from "./Components/Item";
import { v4 as uuidv4} from "uuid";

export default function Form(){

    const[dataArr, setDatArr]= useState([
        {txt : "Promener le chien ",id:uuidv4()},
        {txt : "Support",id:uuidv4()},
        {txt : " Coder avec React",id:uuidv4()},
    ])
    
    const [stateInput,setStateInput]= useState();

    const linkedInput = e =>{
        console.log(e)
        setStateInput(e);
    }

    
    const addToDo= e=> {
        e.preventDefault();
        const newArr= [...dataArr];
        const newtoDo ={};

        newtoDo.txt = stateInput;
        newtoDo.id= uuidv4();

        newArr.push(newtoDo)
        setDatArr(newArr)
        setStateInput('')
    }

    const deleteElement = id=>{
        const filterState = dataArr.filter(item=>{
            return item.id !==id;
        })
        setDatArr(filterState)
    }

    return(
        <div className="m-auto px-4 col-12 col-cm-10 col-lg-6">
            <form  onSubmit={e=>addToDo(e)} className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">Chose à faire</label>
                
                <input type="text" className="form-control" 
                onInput={e=>linkedInput(e.target.value)}
                id="todo"  value={stateInput}/>
                
                <button className="mt-2 btn btn-primary d-block"> Envoyer</button>
            </form>
            <h2>Liste des chose à faire :</h2>
             {dataArr.map((item,index)=>{
                return (
                <Item txt ={item.txt} 
                       Key={index}
                       id={item.id}
                       delFun={deleteElement}
                />
                )
             })}
            <ul className="list-group"></ul>
        </div>
    )
}