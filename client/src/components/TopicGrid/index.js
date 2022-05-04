import React, { useState,useEffect } from 'react'
import {FcLock} from "react-icons/fc"
import {useSelector,useDispatch} from'react-redux'
import { selectedTopic } from '../../actions/EventActions';
import {useNavigate} from "react-router-dom"

export const TopicGrid = () => {
    const [error,setError]=useState("")
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const { Topics, userName } = useSelector(
        (state) => ({
        Topics: state.Topics,
        userName:state.UserDetails.name
        }),
    );
    useEffect(()=>{
        if(!userName){
            navigate("/")
        }
    })


    function handleValue(value){
        console.log(value,"here is value")
        dispatch(selectedTopic(value))
        navigate("/quiz")
    }
   
    return (
        <div className='container'>
            <div className="row" style={{marginTop:"2%"}}>
                <h1 className='text-center'>Hello {userName}</h1>
                {error===""?
                    <h4  className='text-center mb-4 '>Please choose a topic</h4>
                :
                    <h4  className='text-center bg-danger  mb-4'>You can not visit a locked topic</h4>
                                }
                <br/>
            {Topics.map((value,index)=>(
                <div className='col-md-3 mb-2' key={index}>
                    {value.name!=="locked" ?
                    <button className={`bg-${value.color} hover width`}
                    onClick={()=>handleValue(value.name)}>
                        <div className= {`d-flex justify-content-center align-items-center`}style={{padding:"40px"}}>
                        <h3>{value.name}</h3>
                        </div>
                    </button>:<button className={`bg-danger width`} onClick={()=>setError(value.name)}>
                        <div className=' d-flex flex-column justify-content-center align-items-center'style={{padding:"25px 35px"}}>
                            <h3>Locked</h3>
                            <div>
                                <FcLock style={{fontSize:"40px"}}></FcLock>
                            </div>
                        </div>
                    </button>
                    }</div>
                ))}
            </div>
        </div>
    )
}
