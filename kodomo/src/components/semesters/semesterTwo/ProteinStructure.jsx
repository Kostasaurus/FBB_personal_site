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
			
			<section className="mb-5">
				<h3 className="section-header mb-3">Структура в целом</h3>
				<p>
					В базе данных PDB идентификатору 4U7J соответствует белковый комплекс,
					выделенный из микобактерии{' '}
					<span className="italic">Mycolicibacterium thermoresistibile</span>.
				</p>
				<p>
					Структура состоит из двух идентичных по аминокислотной последовательности
					цепей: А и В. Биологическая единица представляет собой тетрамер.
				</p>
			</section>
			
			<section className="mb-5">
				<h3 className="section-header mb-3">Отдельные цепи</h3>
				<p>
					Данная макромолекула относится к виду{' '}
					<span className="italic">Mycolicibacterium thermoresistibile</span> и
					имеет uniprot_id G7CBN9. Название — G7CBN9_MYCT3.
				</p>
				<p>
					Данный комплекс относится к лигазам (аргининосукцинат-синтаза) и
					катализирует реакцию синтеза аргининосукцината из аспартата и цитруллина
					с использованием ATP:
					<br />
					L-citrulline + L-aspartate + ATP = 2-(N(omega)-L-arginino)succinate +
					AMP + diphosphate + H<sup>+</sup>.
				</p>
				<p>
					Мутаций и модифицированных аминокислотных остатков нет, однако для
					экспрессии в начало каждой цепи был добавлен His-tag (гистидиновый тег).
				</p>
			</section>
			
			<section className="mb-5">
				<h3 className="section-header mb-3">Малые молекулы</h3>
				<p>
					Краткое имя — CL, полное имя — CHLORIDE ION,{' '}
					<a
						className="link-primary"
						target="_blank"
						href="https://docs.google.com/document/d/1-zKlQTcfFWlncfEjwfx6QQu9ErvKHf7A2jNMDs6BDbU/edit?usp=sharing"
					>
						PDB-файл
					</a>.
				</p>
				<p>
					Краткое имя — EDO, полное имя — 1,2-ETHANEDIOL,{' '}
					<a
						className="link-primary"
						target="_blank"
						href="https://docs.google.com/document/d/10Jv2qzv_AmWwG8IgsN-EwJwucErb9krePMW9vmqPjKY/edit?usp=sharing"
					>
						PDB-файл
					</a>.
				</p>
			</section>
		</>
	);
}