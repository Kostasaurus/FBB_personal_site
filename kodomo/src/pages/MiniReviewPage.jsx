import Header from "../components/header/Header.jsx"
import Footer from "../components/footer/Footer.jsx"
import Minireview from "../components/minireview/Minireview.jsx"

const MiniReviewPage = () => {
	
	
	return (
		<div className="bg-primary-50 text-primary-800 dark:bg-primary-900 dark:text-lime-50 min-h-screen">
			<Header />
			<div className="container mx-auto px-4 py-8">
				<Minireview />
			
			
			</div>
			<Footer />
		</div>
	
	)
	
}

export default MiniReviewPage