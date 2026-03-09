import allImage from "../../../assets/4u7j_all.png"
import ssImage from "../../../assets/4u7j_ss.png"
import edoAllImage from "../../../assets/edo_all.png"
import edoCloseImage from "../../../assets/edo_close.png"

export default function ProteinStructure() {
	return (
		<>
			<header className="mb-12 flex flex-col items-center">
				<h2 className="text-4xl md:text-5xl font-bold mb-4 flex-col items-center justify-center text-center">
					<p className="text-gradient pb-3">Structure analysis</p>
					<p className="text-gradient mb-2">of</p>
					<p>
            <span className="text-primary-500 dark:text-shadow-glow dark:text-glow-500 inline-block">
              4U7J
            </span>
					</p>
				</h2>
				<p className="text-center w-24 h-1 bg-primary-500 dark:bg-glow-500 rounded-full"></p>
			</header>
			
			<section className="mb-5 text-center">
				<h3 className="section-header mb-3">Структура в целом</h3>
				<p className="text-left">
					В базе данных PDB идентификатору 4U7J соответствует белковый комплекс,
					выделенный из микобактерии{' '}
					<span className="italic">Mycolicibacterium thermoresistibile</span>.
				</p>
				<p className="text-left">
					Структура состоит из двух идентичных по аминокислотной последовательности
					цепей: А и В. Биологическая единица представляет собой тетрамер.
				</p>
				<img src={allImage} alt="Рис.1 Структура белка в целом"/>
				<label className="text-center"><p>Рис.1 Структура белка в целом</p>
				<p>Роз. - цепь А, Зел. - цепь В</p>
				
				</label>
			</section>
			
			<section className="mb-5 text-center">
				<h3 className="section-header mb-3">Отдельные цепи</h3>
				<p className="text-left">
					Данная макромолекула относится к виду{' '}
					<span className="italic">Mycolicibacterium thermoresistibile</span> и
					имеет uniprot_id G7CBN9. Название — G7CBN9_MYCT3.
				</p>
				<p className="text-left">
					Данный комплекс относится к лигазам (аргининосукцинат-синтаза) и
					катализирует реакцию синтеза аргининосукцината из аспартата и цитруллина
					с использованием ATP:
					<br />
					<p className="text-center my-3">L-citrulline + L-aspartate + ATP = 2-(N(omega)-L-arginino)succinate +
						AMP + diphosphate + H<sup>+</sup>.</p>
				</p>
				<section className="mt-2"><p className="text-left">
					Мутаций и модифицированных аминокислотных остатков нет, однако для
					экспрессии в начало каждой цепи был добавлен His-tag (гистидиновый тег).
				</p>
					<p className="text-left">В структуре преобладают альфа-спирали, однако пристуствуют и бета-листы</p></section>
				<img src={ssImage} alt="Рис.2 Вторичная структура белка"/>
				<label className="text-center"><p>Рис.2 Вторичная структура белка</p></label>
			</section>
			
			<section className="mb-5">
				<h3 className="section-header mb-3 text-center">Малые молекулы</h3>
				<p className="text-left">
					Краткое имя — CL, полное имя — CHLORIDE ION,{' '}
					<a
						className="link-primary"
						target="_blank"
						href="https://docs.google.com/document/d/1-zKlQTcfFWlncfEjwfx6QQu9ErvKHf7A2jNMDs6BDbU/edit?usp=sharing"
					>
						PDB-файл
					</a>.
				</p>
				<p className="text-left mt-2 mb-20">
					Краткое имя — EDO, полное имя — 1,2-ETHANEDIOL,{' '}
					<a
						className="link-primary"
						target="_blank"
						href="https://docs.google.com/document/d/10Jv2qzv_AmWwG8IgsN-EwJwucErb9krePMW9vmqPjKY/edit?usp=sharing"
					>
						PDB-файл
					</a>.
				</p>
				<p className="my-4 text-center text-lg">Aминокислотные остатки в радиусе 5 &#8491; от этандиола:</p>
				<div className="mt-20">
					<img src={edoAllImage} alt="Рис.3"/>
					<label className="text-center mt-2"><p>Рис.3 - общий вид взаимодействий</p></label>
				</div>
				<div className="mt-20">
					<img src={edoCloseImage} alt="Рис.4" className="rounded"/>
					<label className="text-center mt-2"><p>Рис.4 - взаимодействия вблизи</p></label>
				</div>
			</section>
		</>
	);
}