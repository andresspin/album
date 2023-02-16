import Album from "../src/componentes/Album";
import './App.css';

function App() {
  return (<>
    <Album
      src = "./img/img2.jpg"
      alt= "Sin imagen"
      artist= "Nirvana"
      composer = "Kurt Cobain"
      nameAlbum = "In Utero"
      year = "1993"
      gender = "Grunge"
      />
  
  
  </>  
  );
}

export default App;
