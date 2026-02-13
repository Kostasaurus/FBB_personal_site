import Header from "../components/header/Header.jsx"
import Footer from "../components/footer/Footer.jsx"


const PageNotFound = () => {
	
	
	
	
	return (
		<div className="bg-primary-50 text-primary-800 dark:bg-primary-900 dark:text-lime-50 min-h-screen">
			<Header />
			
			
			
			<div className="container mx-auto px-4 py-8">
				<section id="home" className="relative z-10">
					
					
					<div className="text-center py-12 md:pb-24 relative">
						
						<h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-10 leading-tight">
                    <span className="block text-gradient text-shadow-glow bg-clip-text">
                         404
                    </span>
							<span className="block  text-gradient text-shadow-glow bg-clip-text mt-6">
                        Страница не найдена
                    </span>
						</h1>
					</div>
				</section>
			
			</div>
			<Footer />
		</div>
	
	)
	
}

export default PageNotFound