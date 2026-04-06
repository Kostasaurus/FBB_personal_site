import Router from "./Router.jsx"
import MainPage from "./pages/MainPage.jsx"
import PageNotFound from "./pages/PageNotFound.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import SemesterOnePage from "./pages/SemesterOnePage.jsx"
import SemesterTwoPage from "./pages/SemesterTwoPage.jsx"
import MiniReviewPage from "./pages/MiniReviewPage.jsx"
import ProteinStructurePage from "./pages/ProteinStructurePage.jsx"
import UniprotPage from "./pages/UniprotPage.jsx"
import ProteomPage from "./pages/ProteomPage.jsx"


function App() {
  
  const routes = {
    '/': MainPage,
    '*': PageNotFound,
    '/about':AboutPage,
    '/semesters1':SemesterOnePage,
    '/semesters2':SemesterTwoPage,
    '/minireview': MiniReviewPage,
    '/proteinstr': ProteinStructurePage,
    '/uniprot': UniprotPage,
    '/proteom': ProteomPage
    
    
    
  }

  return (
      <Router routes={routes}>
      </Router>
   
  )
}

export default App
