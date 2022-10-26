const colorList = ["#f2f26b", "#ffff00", "#a8efed", "#00fff8"]; // definisco una sequenza di colori random - sono i colori che saranno usati per colorare i quadratini di sfondo - nella funzione successiva metteremo una scelta random tra cui scegliere
let myImage; //definisco la variabile per caricare l'immagine come sfondo
let myPersonalGiorgias = []; //definisco la variabile per aggungere palline che rappresentano giorgia sempre diverse tra di loro

function preload() {
  //tramite la funzione di preload
  myImage = loadImage("./assets/Giorgia.png"); // carico l'immagine presente negli assets
}

function setup() {
  createCanvas(windowWidth, windowHeight); // creo un canvas con le dimensioni della grandezza della finestra che si viene ad aprire sullo schermo
  textAlign(CENTER); //allineo il testo centrale, infatti nella posizione del testo segnerò x = 0
  for (let i = 0; i < 1; i++) {
    addGiorgia();
  }
}

function draw() {
  background(myImage); // definisco il colore dello sfondo

  for (let x = 0; x < windowWidth; x += 20) {
    //inizio a  definire un ciclo tramite for - definendo che inizialmente con la x=0 e fino alla x < della larghezza della finestra ci sarà un quadrato ogni 20 punti

    for (let y = 0; y < windowHeight; y += 50) {
      //continuo il ciclo andando a definire la y della posizione dei miei quadrati, quindi dò la y iniziale = a 0, fino alla y < dell’altezza della finestra e definisco che ci sarà un quadrato ogni 50 punti

      let colorHex = random(colorList); // definisco una nuova variabile che si chiama colorHex e viene definita dalla scelta casuale di uno dei colori presenti nella colorList che ho definito all’inizio
      fill(color(colorHex)); // definsico che il colore del riempimento di ogni singolo quarato sarà definito dalla variabile colorHex - definita da un colore random della colorList
      rect(x, y, 10, 20); // definisco così ogni quadrato senza dover dare la posizione di ogni signolo poichè verrà attribuita dalle variabili x e y precedentemente definite - dò invece la dimensione di ogni quadrato ovvero di 10 di altezza e 20 di larghezza
    }
  }

  let s = "SONO GIORGIA! SONO UNA DONNA!"; //definisco la prima scritta
  fill(color("black")); //definisco il colore del testo
  textSize(38); //la grandezza
  textStyle(BOLD); //lo spessore
  text(s, 0, 20, windowWidth, windowHeight); //definisco la posizione all'interno del canvas e tramite la variabile che ho definito prima non devo riscrivere il testo

  //ripeto lo stesso per gli altri due testi - modificando la posizione ed il colore
  let p = "clicca per riempire lo schermo di palline";
  fill(color("darkgray"));
  textSize(38);
  textStyle(BOLD);
  text(p, 0, 270, windowWidth, windowHeight);

  let q = "SONO UNA MADRE! SONO CRISTIANA!";
  fill(color("white"));
  textSize(38);
  textStyle(BOLD);
  text(q, 0, 520, windowWidth, windowHeight);

  for (let i = 0; i < myPersonalGiorgias.length; i++) {
    //definsico una variabile che mi permetta di aggiugnere ogni volta una pallina
    myPersonalGiorgias[i].run();
  }
}

function mouseClicked() {
  //definisco che al cliccare del mouse si aziona la funzione di aggiungere una pallina
  addGiorgia();
}

function addGiorgia() {
  //definisco la funzione di aggiungere una pallina e ne definisco i parametri
  const r = random(10), //primo range di colori a scelta
    g = random(50), //secondo range di colori a scelta
    b = random(100); //terzo range di colori a scelta
  const giorgiaColor = color(r, g, b); //scegliere il colore tra i tre range di colori definiti tramite variabili r - g - b
  const aNewGiorgia = new Giorgia( //ogni volta che vado a creare una pallina definisco che
    random(windowWidth), //si andrà a posizionare in una x random all'interno della canvas
    random(windowHeight), //e in una y random all'interno della canvas
    random(20, 40), //il diametro di ogni pallina varierà tra 20 e 40
    giorgiaColor //il colore sarà scelto tra i colori di giorgiaColor
  );
  myPersonalGiorgias.push(aNewGiorgia); //aggiugno quindi una nuova pallina al gruppo di palline definite dalla classe Giorgia
}

class Giorgia {
  //definisco la classe di giorgia - ovvero specifico i metodi degli oggetti appartenenti alla classe giorgia
  constructor(temp_x, temp_y, temp_r, temp_color) {
    this.x = temp_x; //posizione orizzontale
    this.y = temp_y; //posizione verticale
    this.r = temp_r; //raggio
    this.color = temp_color; //colore
  }

  display() {
    //che cosa appare
    push();
    noStroke(); //senza bordo
    fill(this.color); //colore preso dai colori definiti prima
    ellipse(this.x, this.y, this.r * 2); //definisco la forma e la posizione e il raggio dell'ellisse
    pop();
  }

  updatePosition() {
    //la posizione varia randomicamente sia sull'asse delle x che sull'asse delle y oscillando tra due parametri
    this.x += random(-10, 10);
    this.y += random(-3, 3);
  }

  run() {
    //ogni volta che si va a creare la pallina
    this.updatePosition(); //si aggiorna la posizione
    this.display(); //si aggiorna l'estetica della pallina
  }
}
