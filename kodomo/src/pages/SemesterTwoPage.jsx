import SemesterTwo from "../components/semesters/SemesterTwo.jsx"
import Footer from "../components/footer/Footer.jsx"
import Header from "../components/header/Header.jsx"

export default function SemesterTwoPage () {
	return (
		<div className="bg-primary-50 text-primary-800 dark:bg-primary-900 dark:text-lime-50 min-h-screen">
			<Header />
			
			
			
			<SemesterTwo/>
			<Footer />
		</div>
	)
}