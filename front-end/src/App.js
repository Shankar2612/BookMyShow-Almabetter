import "./App.css";
import MovieState from "./Context/MovieState"
import Home from "./Pages/Home";

function App() {

  return 
  (
    <MovieState >
      <Home />;
    </MovieState>
  )
}

export default App;
