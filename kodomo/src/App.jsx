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
import Pr9Page from "./pages/Pr9Page.jsx"
import Pr10Page from "./pages/Pr10Page.jsx"


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
    '/proteom': ProteomPage,
    '/pr9': Pr9Page,
    '/pr10': Pr10Page
    
    
    
  }

  return (
      <Router routes={routes}>
      </Router>
   
  )
}

export default App
