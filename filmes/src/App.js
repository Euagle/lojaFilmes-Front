// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from './constants/url/url';
import { GlobalStyled } from './GlobalStyled';
import { CardFilmes } from './components/Card/card';

function App() {
  const [filmes, setFilmes] = useState([])
  useEffect(()=>{
  filme()
  }, [])
  const filme = async ()=>{
try {
  const response = await axios.get(`${BASE_URL}/filmes`)
  setFilmes(response.data)
  console.log(response.data)
} catch (error) {
  console.log(error)
}
  }

  return (
    <div className="App">
            <GlobalStyled/>

     <h1>Filmes</h1>
     <section>
      {filmes && filmes.map((filme)=>{return(
            <CardFilmes
            key={filme.id}
            filme={filme}/>
      )})}
     </section>
    </div>
  );
}

export default App;
