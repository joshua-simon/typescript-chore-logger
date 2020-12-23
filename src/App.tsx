import React, {useState} from 'react';
import Document from './Document'
import './styles.css'

interface Formatter {
  format(): string
}

class ChoreDoc implements Formatter  {
  name:string
  chore:string
  date:string

  constructor(n:string,c:string,d:string){
    this.name = n
    this.chore = c
    this.date = d
  }

  format(){
    return `${this.name} completed this following chore: ${this.chore} on the following date: ${this.date}`
  }
}

function App() {
  const [name, setName] = useState('')
  const [chore, setChore] = useState('')
  const [date, setDate] = useState('')
  const [document, setDocument] = useState<ChoreDoc | null>(null);

  const handleNameChange = (e:React.FormEvent<HTMLInputElement>) => {
      e.preventDefault()
      setName(e.currentTarget.value)
  }
  const handleChoreChange = (e:React.FormEvent<HTMLInputElement>) => {
      e.preventDefault()
      setChore(e.currentTarget.value)
  }
  const handleDateChange = (e:React.FormEvent<HTMLInputElement>)=> {
      e.preventDefault()
      setDate(e.currentTarget.value)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault()
    let doc = new ChoreDoc(name,chore,date)
    setDocument(doc)
  }

  return(
    <>
      <div>
          <form className = 'input-list' onSubmit = {handleSubmit} >
              <label>
              Enter Name <br></br>
              <input type = 'text' name = 'name' onChange = {handleNameChange}></input>
              </label>
              <label>
              Chore <br></br>
              <input type = 'text' name = 'chore' onChange = {handleChoreChange}></input>
              </label>
              <label>
              Date completed <br></br>
              <input type = 'text' name = 'date' onChange = {handleDateChange}></input>
              </label>
              <div>
              <button type = 'submit' >Submit</button>
              </div>
          </form>
      </div>
      <div>
      {document && <Document document={document} />}
      </div>
      </>
  )
}

export default App;
