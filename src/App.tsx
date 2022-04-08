import React, { useState } from 'react'
import "./App.css"
import Form from './component/form'
import List from './component/list'

export interface IState{
  people:{
    name: string,
    age: number,
    bio: string
  }[]
}
export default function App() {
  const [people, setPeople]=useState<IState["people"]>([{name:"Luu Tran Anh Khoa", age:21, bio:"Photographer"}])
  return (
    <div className="container">
      <Form  people={people} setPeople={setPeople}/>
      <List people={people} />
    </div>
  
  )
}