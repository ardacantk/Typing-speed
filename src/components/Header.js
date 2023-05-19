import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage, setFontSize } from '../redux/typingSlice';

function Header() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.typing.language)
  const fontSize = useSelector((state) => state.typing.fontSize);

  const handleSize = () => {
    dispatch(setFontSize())
  }

  return (
    <>
      <div id='headerDiv' className='mt-5 px-5'>
        <button
          id='dropDown'
          type="button"
          className="btn btn-success dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {language}
        </button>
        <ul  className="dropdown-menu" >
          <option onClick={(e) => dispatch(setLanguage(e.target.value))} value="turkish" className="dropdown-item">Turkish</option>
          <option onClick={(e) => dispatch(setLanguage(e.target.value))} value="english" className="dropdown-item">English</option>
        </ul>
        <span id='dropDowntext' className='ms-3 me-5'>Test dilini değiştirin</span>
        <button id='dropDown' className="btn btn-success" onClick={handleSize}>{fontSize} %</button>
        <span id='dropDowntext' className='ms-3 me-5'>Font size değiştirin</span>

      </div>
    </>
  )
}

export default Header
