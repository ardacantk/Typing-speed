import React from 'react'
import Header from "./Header";
import TextArea from "./TextArea";
import Input from "./Input";
import Result from "./Result"
import { useSelector } from "react-redux"

function Index() {
  const time = useSelector((state) => state.typing.time);

  return (
    <div>
      <Header />
      <TextArea />
      <Input />
      {
        time === 0 && <Result />
      }
    </div>
  )
}

export default Index
