import React from 'react'
import { useSelector } from 'react-redux';

function Result() {
  const {keyPressed, correctWord, wrongWord} = useSelector((state) => state.typing);
  const totalWord = Number(correctWord) + Number(wrongWord);
  const percent = ( 100 * Number(correctWord)) / Number(totalWord);
  const dks = totalWord / 60;

  return (
    <>
      <div id='resultCard' className='p-5 m-5'>
        <div className="card" style={{ width: "400px" }}>
          <div className="card-body">
            <h5 className="card-title">
              <span style={{ color: "green", fontWeight: "bold" }}>{dks.toFixed(2)} DKS</span>
            </h5>
            <span>(kelime yazabiliyorum)</span>
            <p className="card-text"></p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Tuş vuruşu <span id='pressed'>{keyPressed}</span> </li>
            <li className="list-group-item">Doğruluk <span id='percent' style={{ fontWeight: "bold" }}>{Math.round(percent)}%</span> </li>
            <li className="list-group-item">Doğru kelime <span id='correct' style={{textAlign:"end", color: "green" }}>{correctWord}</span> </li>
            <li className="list-group-item">Yanlış kelime <span id='wrong' style={{ color: "red" }}>{wrongWord}</span> </li>
          </ul>
        </div>
      </div>
    </>

  )
}

export default Result
