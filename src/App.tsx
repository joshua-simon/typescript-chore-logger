import React, {useState} from 'react';
import './styles.css'


const App: React.FC = () => {
  
  type changeFunction = (e:React.FormEvent<HTMLInputElement>) => void
  type submitFunction = (e: React.FormEvent<HTMLFormElement>) => void


  const [text,setText] = useState('')
  const [list,setList] = useState<Array<string>>([])

  
  const handleChange: changeFunction = (e) => {
    setText(e.currentTarget.value)
  }

  const handleSubmit: submitFunction = (e) => {
      e.preventDefault()
      setList([...list,text])
  }

  const deleteHandler = (index:number) => {

  }

  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <input type = "text" onChange = {handleChange}/>
        <button type = 'submit'>Submit</button>
      </form>
      {
        list.map((chore,index) => {
          return(
          <div key = {index}>
            <h1>{chore}</h1>
            <button onClick = {() => deleteHandler(index)}>delete</button>
          </div>
          )
        })
      }
    </div>
  )
}

export default App

