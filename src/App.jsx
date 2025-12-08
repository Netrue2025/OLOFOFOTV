import { HashRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from "./pages/home"
import { Sport } from "./pages/sport"
import {Article} from "./pages/article"
import { Blog } from "./pages/blog"
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/Sport" element={<Sport />}></Route>
          <Route path="/Article" element={<Article />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
