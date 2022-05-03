import React, { useEffect }  from 'react'
import {useSelector} from 'react-redux'
import {  useNavigate } from 'react-router-dom'; 

export const QuestionLayout = () => {
  const navigate=useNavigate()
  const userInfo = useSelector(state=>state.UserInfo)
  const {UserDetails} = userInfo

 const {diff}= UserDetails
 const {selectedTopic} =userInfo

 console.log("here is details",selectedTopic)

 useEffect(()=>{
   if(!UserDetails.difficulty){
     navigate("/")
   }
 })
  return (
    <div className='container'>


      <div className='row ' style={{marginTop:"12%"}}>
        <div className='col-md-8 bg-primary'>

          <div className='p-4 d-flex justify-content-center align-items-center '>
              <h6 className='bg-light p-4 w-50 text-center border rounded'> Question 5</h6>

          </div>



          <div className='p-2 d-flex  justify-content-center align-items-center rounded '>
              <div className='' style={{marginRight:"10px",fontSize:"25px"}}>Time:</div>
              <div  className='text-lg' style={{fontSize:"25px"}}>12:00</div>
          </div>

          <div className=' d-flex  justify-content-around align-items-center rounded '>
    
              <div className='w-25 text-center mb-4'>
                  <p className='bg-white border rounded'>Option 1</p>
                  <p className='bg-white border rounded'>Option 2</           p>
              </div>

              <div className='w-25 text-center'>
                <p className='bg-white border rounded '>Option 1</p>
                <p className='bg-white border rounded'>Option 2</p>
              </div>

          </div>

        </div>

        <div className='col-md-4 bg-secondary p-4'>
          <div className='p-4 d-flex justify-content-center align-items-center '>
            <h6 className='bg-light p-4 w-50 text-center border rounded'> Score</h6>

          </div>  

          <div className='d-flex justify-content-center align-items-center'>
                <h6 className=' p-1  text-center ' style={{fontSize:"25px"}}> Level:</h6>
                <h6 className=' p-1  text-center ' style={{fontSize:"25px"}}>{diff} </h6>
          </div>
          <div className='d-flex justify-content-center align-items-center'>
              <h6 className=' p-1  text-center ' style={{fontSize:"25px"}}> Topic:</h6>
              <h6 className=' p-1  text-center ' style={{fontSize:"25px"}}>{selectedTopic} </h6>
          </div>

        </div>

      </div>
    </div>
  )
}
