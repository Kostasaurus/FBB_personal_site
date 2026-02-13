import Header from "../components/header/Header.jsx"
import Footer from "../components/footer/Footer.jsx"
import Hero from "../components/Hero/Hero.jsx"

const MainPage = () => {
	
	
	return (
		<div className="bg-primary-50 text-primary-800 dark:bg-primary-900 dark:text-lime-50 min-h-screen">
			<Header />
			<div className="container mx-auto px-4 py-8">
				<Hero />

			
			</div>
			<Footer />
		</div>
	
	)
	
}

export default MainPage