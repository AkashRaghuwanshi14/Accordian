

import { useState } from "react";
import data from "./data"

import "./style.css";
export const Accordian = () => {


    const[selected,setselected]=useState(null);
    
    const[Multiple,setMultiple]=useState(false);

    const[multiple,setmultiple]=useState([]);


    function handlevisibility(getid){
        setselected(getid===selected?null:getid);
    }

    function handlemultiple(getid){
          
        let cpymultiple=[...multiple];
        const findindexofid=cpymultiple.indexOf(getid);
        if(findindexofid==-1){
            cpymultiple.push(getid);
        }
        else{
            cpymultiple.splice(findindexofid,1);
        }
        setmultiple(cpymultiple);
    }
    


    
    return (

             
             
               <div className="wrapper">
               <button onClick={()=>setMultiple(!Multiple)}>Multiple Accordian</button>
               
            <div className="accordian">
                     
                {
                    data && data.length > 0 ?
                        data.map((item) => (
                            <div className="content">

                            <div className="item"  onClick={ Multiple ? ()=>handlemultiple(item.id) :()=>handlevisibility(item.id)}>
                                 <h3>{item.question}</h3>
                                 <span>+</span>
                             </div>  
                     
                                   {
                                    Multiple ?
                                    multiple.indexOf(item.id)!=-1 && <div className="answer">{item.answer}</div>:(
                                        selected===item.id && <div className="answer">{item.answer}</div>
                                    )
                                   }
                                    
                                    
                                                    
                            </div>
                                
                                )):
                                <h3>Data is not found</h3>
                
              }
                            </div>
                            
        </div>
        
        
      
            )
}