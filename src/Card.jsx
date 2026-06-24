import React, { useEffect } from 'react'
import { useState } from 'react'
import Progressbar from './Progressbar'

function Card() {
    let [Qno,setQno]=useState(1)
    const [datas,setDatas]=useState([])
    const [showAns,setShowAns]=useState(false)
    useEffect(()=>{
        fetch("http://localhost:3000/datas")
        .then((data)=>data.json())
        .then((data)=>setDatas(data))
        .catch((err)=>console.log(err))
    },[Qno,showAns])
    const handleNext=()=>{setQno(Qno+1);setShowAns(false)}
    const handlePrevious=()=>{setQno(Qno-1);setShowAns(false)}
    const handleAnswer=()=>{showAns?setShowAns(false):setShowAns(true)}

  return (
    <div>
        <Progressbar currentIndex={Qno} totalCards={datas.length} />
        {datas.length>0?(
            <div className='box'>
                {datas.map((data)=>(
                    data.id==Qno && <div key={data.id} className='question'>
                        <p>{showAns?data.data.answer:data.data.question}</p>                        
                    </div>)
                )}
                <div className='control'>
                    <div role='button' onClick={handlePrevious} style={{opacity: Qno <= 1 ? 0.7 : 1,cursor: Qno <= 1 ? 'not-allowed' : 'pointer',pointerEvents: Qno <= 1 ? 'none' : 'auto'}} className='previousbtn'><i class="bi bi-caret-left-fill"></i>Previous</div>
                    <div role='button' onClick={handleAnswer} className='answerbtn'>{showAns?"hide Answer":"Show Answer"}<i className="bi bi-chevron-double-up"></i></div>
                    <div role='button' onClick={handleNext} style={{opacity: Qno >= datas.length ? 0.5 : 1,cursor: Qno >= datas.length ? 'not-allowed' : 'pointer',pointerEvents: Qno >= datas.length ? 'none' : 'auto'}} className='nextbtn'>Next<i class="bi bi-caret-right-fill"></i></div>
                </div>
            </div>
        ):(
            <div>
                Loading...
            </div>
        )}
    </div>
  )
}

export default Card