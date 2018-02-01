import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CategoryService } from './../category.service';
import { LocationService } from './../location.service';

@Component({
  selector: 'app-post-ad',
  templateUrl: './post-ad.component.html',
  styleUrls: ['./post-ad.component.css'],
  encapsulation: ViewEncapsulation.None, // ajouté afin de permettre l'application du style css des images ajoutés dynamiquement
})



export class PostAdComponent implements OnInit {
  categories$;
  locations: string[];
  localCategories;
  isAuch: boolean;
  imgPreviewer;
  imagesUrlList = [];
  inputSelector;

// methode qui regle le type d'annonce ... j'ai l'intention de faire attendre pour plus tard la fonction de vente aux encheres.
  adType() {
    const select = (<HTMLSelectElement>document.getElementById('bids'));
    const selectedOption = select.options[select.selectedIndex].value.toLowerCase();
    if (selectedOption === 'vente directe') {
      this.isAuch = false;
    } else {
      this.isAuch = true;
    }
  }


  // cette fonction fait apparaitre les champs appropriées a remplir en fonction
  // des choix de l'utilisateur
  hideElements() {
    const select = (<HTMLSelectElement>document.getElementById('categories'));
    const selectedOption = select.options[select.selectedIndex].value.toLowerCase();
    const list = document.getElementById('form-field').children;
    const elementsToHide = (document.getElementsByClassName(selectedOption));

    for (let i = 0; i < list.length; i++) {
      if (list[i].classList.contains(selectedOption) || list[i].classList.contains('all')) {
        (<HTMLElement>list[i]).style.display = 'block';
      } else {
        (<HTMLElement>list[i]).style.display = 'none';
      }
      }
}


// cette methode permet d'ajouter un apercu des images a ajouter avec l'annonce.
addImages(){
  this.inputSelector = (<HTMLInputElement>document.getElementById("input"));
  this.imgPreviewer = document.getElementById("img");

  if(this.imagesUrlList.length + this.inputSelector.files.length <= 6 ){
    var filesList = this.inputSelector.files;
    
    for(var i=0; i < filesList.length; i++){
        if(/\.(jpg|png|jpeg|tif|tiff|gif|jpx)$/i.test(filesList[i].name)){
          var image = document.createElement("img")
          //var div = document.createElement("div");
          //div.className = 'col-4'
          image.className = 'img-to-upload';
          image.src = window.URL.createObjectURL(filesList[i]) ;
          image.onclick = this.deleteImages;
          this.imgPreviewer.appendChild(image);
          this.imagesUrlList.push(image.src); 
        } else {
          alert("Le format d'image que vous avez choisi n'est pas supporté!")
        }
    }
  } else {
    alert("Desolé mais vous ne pouvez pas ajouter plus de 6 photos :(");    
  }
}

// cette methode supprime les images lorsque l'utilisateur clique sur cette derniere.
deleteImages = (e) => {
  var tag = e.target
  var indexOfTag = this.imagesUrlList.indexOf(tag.src);
  this.imgPreviewer.removeChild(tag)
  this.imagesUrlList.splice(indexOfTag, indexOfTag+1)
}


  constructor(categoryService: CategoryService, locationService: LocationService) {
    this.categories$ = categoryService.getCategories().valueChanges();
    this.locations = locationService.locations;
    this.localCategories = categoryService.localCategories;
   }

  ngOnInit() {
  }

  

  add(x) {
    console.log(x.value);
  }

}

