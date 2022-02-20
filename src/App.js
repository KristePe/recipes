import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from "react";
import mainContext from "./context/mainContext";
import Toolbar from "./context/Toolbar";
import CreateRecipePage from "./pages/CreateRecipePage";
import MainPage from "./pages/MainPage";
import FavoritesPage from "./pages/FavoritesPage";
import SingleRecipePage from "./pages/SingleRecipePage";





function App() {

    const [getImage, setImage] = useState([])
    const [getIngredient, setIngredient] = useState([])
    const [getStep, setStep] = useState([])
    const [getRecipes, setRecipes] = useState([])
    const [getFavorites, setFavorites] = useState([])
    const [getError, setError] = useState(null)
    const [getRecipe, setRecipe] = useState([])
    const [value, setValue] = useState(null)
    const [getByRating, setByRating] = useState("")



  return (
      <div className="App">
          <mainContext.Provider
              value={{
                  getRecipes, setRecipes,
                  getFavorites, setFavorites,
                  getImage, setImage,
                  getIngredient, setIngredient,
                  getStep, setStep,
                  getError, setError,
                  value, setValue,
                  getByRating, setByRating,
                  getRecipe, setRecipe
              }}>


              <BrowserRouter>
                  <Toolbar Favorites={getFavorites}/>
                  <Routes>
                      <Route path="/" element={<MainPage/>}/>
                      <Route path="/recipe/:titleRecipe" element={<SingleRecipePage/>}/>
                      <Route path="/create" element={<CreateRecipePage/>}/>
                      <Route path="/favorites" element={<FavoritesPage products={getFavorites}/>}/>
                  </Routes>
              </BrowserRouter>
          </mainContext.Provider>
      </div>
  );
}

export default App;
