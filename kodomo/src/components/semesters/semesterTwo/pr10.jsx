export default function Pr10 () {
	
	return (
		<>
			<header className="mb-12 flex flex-col items-center">
				<h2 className="text-4xl md:text-5xl font-bold mb-4 flex-col items-center justify-center text-center">
					<p className="text-primary-500 dark:text-glow-500 pb-3">Практикум 10</p>
				</h2>
				<p className="text-center w-24 h-1 bg-primary-500 dark:bg-glow-500 rounded-full"></p>
			</header>
			
			
			
			<section className="mb-15 ">
				<h3 className="section-header mb-3">Часть 1</h3>
				<p><span className="font-semibold">Protein:</span><span className="font-mono">Mercuric reductase (Q39ZA1_GEOMG)</span> из <span className="italic text-primary-500 dark:text-glow-500">Geobacter
					metallireduscens</span></p>
				
				<p><span className="font-semibold">Database:</span> RefSeq_protein</p>
				<p><span className="font-semibold">Algorithm:</span> blastp</p>
				<p><span className="font-semibold">Max matches in a query range:</span> 0</p>
				<p><span className="font-semibold">Matrix:</span> BLOSUM62</p>
				<p><span className="font-semibold">Gap Costs:</span> Existence: 11 Extension: 1</p>
				<p><span className="font-semibold">Compositional adjustments:</span> Conditional compositional score matrix adjustment</p>
				<p><span className="font-semibold">Filter:</span> no</p>
				<p><span className="font-semibold">Mask:</span> no</p>
				<p><span className="font-semibold"></span> <a href="https://drive.google.com/file/d/1UTS4E5r7fm6sw2K_JEc7mixgGhZArnvC/view?usp=sharing" target="_blank" rel="noreferrer" className="text-primary-600 dark:text-primary-400 underline link-primary">File with alignment</a></p>
				<p><span className="font-semibold"></span> <a href="https://drive.google.com/file/d/1DRHu1IS6YGh5BbolXch3u4jRMlRmu3lS/view?usp=sharing" target="_blank" rel="noreferrer" className="text-primary-600 dark:text-primary-400 underline link-primary">Jalview project</a></p>
				<p className="mt-3"><span className="font-semibold"></span> Белки гомологичны, так как в выравнивании заметны консервативные участки, в той или иной степени сохранающиеся у всех белков</p>
			
			</section>
			
			<section className="mb-5 ">
				<h3 className="section-header mb-3 ">Часть 2</h3>
				
				<h4 className="text-xl mb-3">Информация о белке</h4>
				<p><span className="font-semibold">AC:</span> P16088</p>
				<p><span className="font-semibold">ID:</span> POL_FIVPE</p>
				<p><span className="font-semibold">Organism: </span> Feline immunodeficiency virus (isolate Petaluma) (FIV)</p>
				<p><span className="font-semibold">Coordinates:</span> 155..690</p>
				<p><span className="font-semibold">Name:</span> Reverse transcriptase/ribonuclease H</p>
				<p><span className="font-semibold"></span> <a href="https://drive.google.com/file/d/1gzKeHcVnK3533JJPXCj411lqo-taJMhW/view?usp=sharing" target="_blank" rel="noreferrer" className="text-primary-600 dark:text-primary-400 underline link-primary">Sequence</a></p>
				<h4 className="text-xl mb-3 mt-6">Информация о выравнивани</h4>
				<p><span className="font-semibold">Database:</span> UniProtKB/Swiss-Prot</p>
				<p><span className="font-semibold"></span> <a href="https://drive.google.com/file/d/149LmTf5UFJeHevbsOord8Yb373T1XLLq/view?usp=sharing" target="_blank" rel="noreferrer" className="text-primary-600 dark:text-primary-400 underline link-primary">File with alignment</a></p>
				<p><span className="font-semibold"></span> <a href="https://drive.google.com/file/d/1lMljclczxjSfnbcd5RzPymFpAmBsbX-V/view?usp=sharing" target="_blank" rel="noreferrer" className="text-primary-600 dark:text-primary-400 underline link-primary">Jalview project</a></p>
				<p className="mt-3"><p>Из выбранных белков, по моему мнению, не все гомологичны исследоемому (а именно putative
					viral DNA polymerase [Bovine retrovirus CH15] и gag-pro-pol phusion [Ovine enzootic nasal tumor virus])</p>
					<p>Выдача BLASTP не сильно изменилась, однако E-value различаются примерно на три порядка.</p>
					<p>Например, в первом случае (без ограничений по таксону) E-value для Gag-pol polyprotein [Simian
						immunodeficiency virus (ISOLATE GB1)] равен 4е-154,
						а во втором 2е-155.</p>
					<p>Отсюда следует что доля вирусных белков равна <span className="mono ml-2 mr-1">2е-155 / 4у-154 =</span><span className="text-primary-500 dark:text-glow-500">5%</span></p></p>
			</section>
		</>
	)
}