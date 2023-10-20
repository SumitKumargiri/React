import './App.css';
import {Header} from './component/Header';
import Movie from './component/Movie';
import movies from './movie.json'

function App() {
  // let login=true;
  // if(login==false){
  //   return <h1>Ja nahi dikhaunga</h1>
  // }


  return (
    <>

    <div className="App">
      <Header/>
    </div>
    <div className="main">
      {
        movies.map((element)=>{
          return(
            <Movie
              title={element.title}
              year={element.year}
              img={element.poster}
            />
          )
        })
      }
    </div>
    
  </>
  );
}

export default App;
