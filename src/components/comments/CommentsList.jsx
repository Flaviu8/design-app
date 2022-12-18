import React, { useEffect, useState } from 'react'
import iconMessage from "../../../src/message.png"
import { CommentsListMain,  CommentsListPar,  ButtonArrow, Messages} from './CommentList.style'
import axios from 'axios'

export default function CommentsList() {
    const [data, setData] = useState([])

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(function (response) {
        // handle success
       setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

    },[])




  return (
    <>
    {data.slice(0,6).map((allData)=> {
        return (
          <CommentsListMain key={allData.id}>
            <ButtonArrow>
              <button><span>&#x2303;</span> 112</button>
              <h4>{allData.name}</h4>
            </ButtonArrow>
              <CommentsListPar>
                  <Messages>
                    <p>{allData.body}</p>
                    <img src={iconMessage} width="30px" height="30px"/>
                    <h4>{allData.id}</h4>
                  </Messages>
                <button>
                   Enhancement
                </button>
              </CommentsListPar>
              
                 
          </CommentsListMain>
    
        )
    
    })}
    
    
    </>
    

  )
}
