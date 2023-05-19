import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setWord, setState, setTime, reset } from '../redux/typingSlice';
import { formatTime } from "../tools/setTimer"

function Input() {
  const dispatch = useDispatch();
  const [word, setText] = useState();
  const finished = useSelector((state) => state.typing.finished);
  const time = useSelector((state) => state.typing.time);

  const handleChange = (e) => {
    dispatch(setWord(e.slice(0, -1)))
    if (e.endsWith(" ")) {
      dispatch(setState(e.slice(0, -1)))
      setText("")
    } else {
      setText(e)
    }
  }

  useEffect(() => {
    if (finished) {
      const interval = window.setInterval(() => {
        dispatch(setTime());
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [finished, dispatch]);

  const handleClick = () => {
    dispatch(reset())
  }


  return (
    <>
      <div id="inputDiv" className="form-floating px-5">
        <textarea
          className="form-control"
          id="floatingTextarea"
          style={{ fontSize: "24px", width: "500px", height: "75px" }}
          value={word}
          onChange={(e) => handleChange(e.target.value)}
          disabled= {time === 0 ? true : false}
        ></textarea>
        <button type="button" className="ms-5 me-2 btn btn-warning">{formatTime(time)}</button>
        <input className="btn btn-warning me-2" type="reset" value="Reset" onClick={handleClick}></input>
      </div>
    </>
  )
}

export default Input
