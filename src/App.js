import "./styles/main.css"

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contacts from "./pages/Contacts"
import ProjectPage from "./pages/ProjectPage"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <ScrollToTop/>
                <Navbar />
                <Routes>
                    <Route path="/portfolio" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="/projects/:id" element={<ProjectPage />} />
                </Routes>
                {/*  <Home /> */}
                {/* <Projects/> */}
                {/* <ProjectPage /> */}
                {/*  <Contacts/> */}
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
