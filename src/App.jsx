import { HashRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from "./pages/home"
import { Sport } from "./pages/sport"
import {Article} from "./pages/article"
import { Blog } from "./pages/blog"
import { Read } from "./pages/read"
import { ScrollToTop } from "./components/scrolltotop"

import './App.css'

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Read" element={<Read />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/Sport" element={<Sport />}></Route>
          <Route path="/Article" element={<Article />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
