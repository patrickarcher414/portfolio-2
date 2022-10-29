import Nav from "./components/Nav"
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import ProjectList from './helpers/ProjectList.js'

function App() {
  return (
   <div>
    <Nav />
    <Gallery />
    <Footer />
    <ProjectList/>
   </div>
  );
}

export default App;
