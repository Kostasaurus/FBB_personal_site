import Router from "./Router.jsx"
import MainPage from "./pages/MainPage.jsx"
import PageNotFound from "./pages/PageNotFound.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import SemesterOnePage from "./pages/SemesterOnePage.jsx"
import SemesterTwoPage from "./pages/SemesterTwoPage.jsx"
import MiniReviewPage from "./pages/MiniReviewPage.jsx"


function App() {
  
  const routes = {
    '/': MainPage,
    '*': PageNotFound,
    '/about':AboutPage,
    '/semesters1':SemesterOnePage,
    '/semesters2':SemesterTwoPage,
    '/minireview': MiniReviewPage
    
    
    
  }

  return (
      <Router routes={routes}>
      </Router>
   
  )
}

export default App
