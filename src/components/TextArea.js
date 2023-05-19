import React from 'react'
import { useSelector } from 'react-redux'

function TextArea() {
  const wordList = useSelector((state) => state.typing.wordList);
  const curentItems = useSelector((state) => state.typing.curentItems)
  const fontSize = useSelector((state) => state.typing.fontSize);

  return (
    <>
      <div id='textAreaDiv' className='p-5 '>
        <div className="card" style={{maxWidth: "1200px"}}>
          <div className="card-body h-100 p-3 text-left overflow-auto" >
            {
              wordList.map((word, index) => (
                <span key={index}>
                  <span
                    className='p-2 fw-medium text-nowrap'
                    style={{
                      margin: "10px", fontSize: `${fontSize}%`,
                      backgroundColor: 
                      index === curentItems.index && curentItems.bgColor,
                      color:
                      wordList[index].color
                    }}
                  >
                    {word.word }
                  </span>
                </span>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default TextArea;


