const app = {
    invader: document.getElementById('invader'),
    defaultGridSize: 16,
    defaultPixelSize: 20,
    selectedColor: 'white',
    styles: [
      'white',
      'black',
      'yellow',
      'green',
    ],
    createGrid: function (gridSize = 8, pixelSize = 30){
        // on crée un div pour accueillir les pixels
        const gridElem = document.createElement('div');
        // on lui ajoute la classe 'grid'
        gridElem.classList.add('grid');
        // on lui donne la largeur voulue (pour que les pixels wrap correctement)
        gridElem.style.width = gridSize * pixelSize + 'px';
        // on crée le nombre de pixels demandé (gridSize * gridSize)
        // avec une boucle for 
        for(let pixelIndex = 0; pixelIndex < gridSize * gridSize; pixelIndex++){
          app.createPixel(pixelSize, gridElem);
        }
        // on met en place un gestionnaire d'évènement au clic sur la grille
        gridElem.addEventListener('click', app.onPixelClick);
        // on vide le div #invader
        app.invader.innerHTML = '';
        // on ajoute la grille dans le div #invader
        app.invader.appendChild(gridElem);
      },
     
      // fonction pour la création des pixel
      createPixel: function (pixelSize, container){
        //on crée un div
        const pixelElem = document.createElement('div');
        // on lui ajoute la classe 'pixel'
        pixelElem.classList.add('pixel');
        // on lui ajoute la classe 'pixel--white'
        pixelElem.classList.add('pixel--white');
        // on défini sa taille
        pixelElem.style.width = pixelSize + 'px';
        pixelElem.style.height = pixelSize + 'px';
        // on l'ajoute au container
        container.appendChild(pixelElem);
      },
      
     
  };
  
  app.init();

