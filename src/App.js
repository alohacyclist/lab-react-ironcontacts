import './App.css';
import contacts from './contacts.json'
import { useState } from 'react'
import { FaAward, FaTrophy } from 'react-icons/fa'

function App() {

  const fiveContacts = contacts.slice(0, 5)
  const [contact, setContact] = useState(fiveContacts)

  let tableContent = () => {
    return(contact.map((contact, index) => {
      return (
        <tr key={contact.id}>
          <td><img style={{width: '200px'}} src={contact.pictureUrl} alt={contact.pictureUrl} /></td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed()}</td>
          <td>{(contact.wonEmmy) ? <FaAward /> : 'not yet'}</td>
          <td>{(contact.wonOscar) ? <FaTrophy /> : 'not yet'}</td>
          <button className='delete-btn' onClick={() => {deleteContact(contact.id)}}>DELETE</button>
        </tr>)
    	}))
  }

  const addContacts = () => {
    let randomContact = contacts[Math.floor(Math.random() * (contacts.length))]
    setContact([...contact, randomContact])
  }

  const sortContactsName = () => {
    const currentContacts = [...contact]
    currentContacts.sort((a, b) => {
     if(a.name > b.name) return 1
     if(a.name < b.name) return -1
    })
    return setContact(currentContacts)
  }

  const sortContactsPop = () => {
    const currentContacts = [...contact]
    currentContacts.sort((a, b) => {
     if(a.popularity > b.popularity) {return 1;}
     if(a.popularity < b.popularity) {return -1;}
    })
    setContact(currentContacts)
  }

  const deleteContact = contactId => {
    const newContacts = contact.filter(contact => {return contact.id !== contactId})
    setContact(newContacts)
  }

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button className='options-btn' onClick={addContacts}>add random Contact</button>
      <button className='options-btn' onClick={sortContactsPop}>sort by popularity</button>
      <button className='options-btn' onClick={sortContactsName}>sort alphabetically</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Rating</th>
          <th>won Emmy</th>
          <th>won Oscar</th>
        </tr>

        <tbody>
          {tableContent()}
        </tbody>
        
    </table>
    </div>
  );
}

export default App;
