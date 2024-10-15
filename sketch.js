// Laboratorio di Computer Grafica per l'Information Design
// Christian Battista Giannarelli
// Vera Molnar, De La Serie (Des) Ordres (detail), 1974. Courtesy of The Anne and Michael Spalter Digital Art Collection.

function setup() {
	// Canvas grande quanto tutta la finestra
	createCanvas(windowWidth, windowHeight);	
}

function draw() {
	// La funzione draw() non viene ripetuta
	noLoop();

	// Numero di colonne
	let cols = 8;
	// Numero di righe
	let rows = 8;

	// Lato del quadrato
	let squareSize = windowWidth / cols;

	// Colonne
	for (let i = 0; i < cols; i++) {
		// Righe
		for (let j = 0; j < rows; j++) {
			// Calcolo della posizione orizzontale
			let x = i * squareSize;
			// Calcolo della posizione verticale
			let y = j * squareSize;
			
			// Disegna quadrati concentrici con variazioni casuali
			drawSquares(x, y, squareSize);
		}
	}
}

// Funzione per il disegno dei quadrati
function drawSquares(x, y, size) {
	// Numero casuale di quadrati interni
	let layers = int(random(5, 15));
	// Distanza casuale tra i quadrati
	let spacing = random(5, 15);

	// Nessun riempimento
	noFill();

	// Creazione dei quadrati interni
	for (let i = 0; i < layers; i++) {
		let currentSize = size - i * spacing;

		// Disegno dei quadrati se 
		if (currentSize > 0) {
			// Spessore del contorno scelto casualmente
			strokeWeight(random(1, 3));
			// Creazione del quadrato (i quadrati sono centrati rispetto a quello iniziale)
			rect(x + (size - currentSize) / 2, y + (size - currentSize) / 2, currentSize, currentSize);
		}
	}
}
