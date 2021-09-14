import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Container } from '@material-ui/core';

import Header from './components/Header/Header'

function App() {
  const [word, setWord] = useState("")
  const [meanings, setMeanings] = useState([])
  const [category, setCategory] = useState("en")

  const dictionaryAPI = async () => {
    try {
      const {data} = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/plane")
      console.log(data);
      setMeanings(data)
    } catch (error) {
      console.log(error);
    }
  }

  console.log(meanings);

  useEffect(() => {
    dictionaryAPI()
  }, [])

  return (
    <div className="App" style={{height:'100vh', backgroundColor:'#282c34', color:'white'}}>
      <Container maxWidth="md" style={{display:'flex', flexDirection:'column', height:'100vh'}}>
        <Header category={category} setCategory={setCategory}/>
      </Container>
    </div>
  );
}

export default App;
