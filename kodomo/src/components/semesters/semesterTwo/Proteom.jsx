

export default function Proteom() {
	return (
		<>
			<header className="mb-12 flex flex-col items-center">
				<h2 className="text-4xl md:text-5xl font-bold mb-4 flex-col items-center justify-center text-center">
					<p className="text-gradient pb-3">Анализ протеома</p>
					<p>
            <span className="text-primary-500 dark:text-shadow-glow dark:text-glow-500 inline-block italic">
              Geobacter metallireducens
            </span>
					</p>
				</h2>
				<p className="text-center w-24 h-1 bg-primary-500 dark:bg-glow-500 rounded-full"></p>
			</header>
			
			
			
		<section className="mb-15">
			<h3 className="section-header mb-3">Общая информация</h3>
			
			<p><span className="font-semibold">NCBI Dataset:</span> <a href="https://www.ncbi.nlm.nih.gov/datasets/genome/GCF_000012925.1/" target="_blank" rel="noreferrer" className="text-primary-600 dark:text-primary-400 underline link-primary">GCF_000012925.1</a></p>
			<p><span className="font-semibold">INSDC:</span> GCA_000012925.1</p>
			<p><span className="font-semibold">RefSeq:</span> GCF_000012925.1</p>
			<p><span className="font-semibold">Query:</span> (genome_assembly:GCA_000012925.1)</p>
			<p><span className="font-semibold">Proteome ID:</span> UP000007073</p>
			<p><span className="font-semibold">Status:</span> Reference proteome</p>
			<p><span className="font-semibold">Скачивание файла:</span> Данный протеом является референсным поэтому искать дополнительно не пришлось. Файл был скачан с помощью curl:</p>
				<p className="text-center font-mono mt-5"><span className="font-mono">curl 'https://rest.uniprot.org/uniprotkb/stream?compressed=true&format=txt&query=(proteome:UP000007073)' > UP000007073.swiss.gz</span></p>
		
		</section>
			
			<section className="mb-5 text-center">
				<h3 className="section-header mb-3">Анализ вторичных структур</h3>
				<div className="text-left space-y-3">
					<p>
						Для оценки частоты встречаемости альфа-спиральных (найдены через слова <span className="font-mono text-primary-700 dark:text-glow-500">HELIX</span> или{' '}
						<span className="font-mono text-primary-700 dark:text-glow-500">COILED </span>)
						и трансмембранных доменов (<span className="font-mono text-primary-700 dark:text-glow-500">TRANSMEM</span>) был написан скрипт на Python,
						который парсит SwissProt‑файл протеома. Подсчёт вёлся по каждой записи белка (разделитель <span className="font-mono text-primary-700 dark:text-glow-500">//</span>).
					</p>
					<p className="font-bold">Результаты:</p>
					<p>Helix: <span className="text-primary-700 dark:text-glow-500">143</span></p>
					<p>Transmembrane: <span className="text-primary-700 dark:text-glow-500">633</span></p>
					<p>All: <span className="text-primary-700 dark:text-glow-500">3502</span></p>
				</div>
			</section>
			
			<section className="mb-5 text-center">
				<h3 className="section-header mb-3">Скрипт</h3>
				<div className="text-left space-y-3">
					<p>
						Для извлечения данных использовался прямой запрос к UniProt REST API. Файл <span className="font-mono">UP000007073.swiss.gz</span>
						был загружен и проанализирован с помощью следующего скрипта:
					</p>
					<pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-xs font-mono">
{`import gzip

proteom = gzip.open('UP000007073.swiss.gz', 'rt')
helix = transmembrane = proteins_count = 0
local_helix = local_transmembrane = 0

for line in proteom:
    if line.startswith('//'):
        if local_helix: helix += 1
        if local_transmembrane: transmembrane += 1
        proteins_count += 1
        local_helix = local_transmembrane = 0
    elif line.startswith('FT'):
        if 'COILED' in line or 'HELIX' in line:
            local_helix = 1
        if 'TRANSMEM' in line:
            local_transmembrane = 1

proteom.close()
print(f"Helix: {helix}, Transmembrane: {transmembrane}, All: {proteins_count}")`}
          </pre>
					<p className="text-sm text-gray-600 dark:text-gray-400">
						Результат выполнения: <span className="font-mono">Helix: 143, Transmembrane: 633, All: 3502</span>
					</p>
				</div>
			</section>
			
			<section className="mb-5 text-center">
				<h3 className="section-header mb-3">Оценка количества ферментов</h3>
				<div className="text-left space-y-2">
					<p>
						🔍 <span className="font-mono">(proteome:UP000007073) AND (ec:*)</span> — получено <strong className="font-bold">778</strong> белков.
					</p>
					<p>
						🔍 <span className="font-mono">(proteome:UP000007073) AND (cc_function:*)</span> — <strong className="font-bold">702</strong> белка.
					</p>
					<p>Значения довольно близки и можно предположить, что это свидетельствует что они отражают реальное количество ферментов (зотя по моему мнению их как-то мало)</p>
				</div>
			</section>
			
			
		</>
	);
}