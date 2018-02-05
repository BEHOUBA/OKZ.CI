import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CategoryService } from './../category.service';
import { LocationService } from './../location.service';
import { UploadImagesService } from '../upload-images.service';
import { Image } from './../image';
import { AdvertService } from '../advert.service';
import { InfoSnackService } from './../info-snack.service';

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
  imagesList: Image[] = [];
  inputSelector;
  upload;
  notification: string;

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


// cette methode permet d'avoir un apercu des images a ajouter avec l'annonce.
async addImages() {
  this.inputSelector = (<HTMLInputElement>document.getElementById('input'));
  this.imgPreviewer = document.getElementById('img');

  if (this.imagesList.length + this.inputSelector.files.length <= 6 ) {
    const filesList = this.inputSelector.files;

    for (let i = 0; i < filesList.length; i++) {
        if (/\.(jpg|png|jpeg|tif|tiff|gif|jpx)$/i.test(filesList[i].name)) {
          // var div = document.createElement("div");
          // div.className = 'col-4'
          await this.up.upload(filesList[i], 'behouba2', 1992);
          const image = document.createElement('img');
          const img = new Image();
          img.userName = 'behouba2';
          img.adId = 1992;
          img.fileName = filesList[i].name;
          img.url = this.up.ImageUrl;
          image.src = this.up.ImageUrl;
          image.className = 'img-to-upload';
          this.imgPreviewer.appendChild(image);
          image.onclick = this.deleteImages;
          this.imagesList.push(img);
        } else {
          this.notification = 'Le format d\'image que vous avez choisi n\'est pas supporté!';
          this.infoSnackService.displayInfo('snackBarP');
        }
    }
  } else {
    this.notification = 'Desolé mais vous ne pouvez pas ajouter plus de 6 photos';
    this.infoSnackService.displayInfo('snackBarP');
  }
  // console.log(this.imagesList);
}

// cette methode supprime les images lorsque l'utilisateur clique sur cette derniere.
deleteImages = (e) => {
  const tag = e.target;
  let indexOfTag: number;
  this.imagesList.forEach( (imageObj, index) => {
    if ( tag.src === imageObj.url) {
      indexOfTag = index;
    }
  });
  this.imgPreviewer.removeChild(tag);
  const target = this.imagesList.splice(indexOfTag, 1);
  // console.log(this.imagesList);
  this.up.cancelImage(target[0].fileName, target[0].userName, target[0].adId);
}


  constructor(
    private categoryService: CategoryService,
    private locationService: LocationService,
    private up: UploadImagesService,
    private advertService: AdvertService,
    private infoSnackService: InfoSnackService) {
    this.categories$ = categoryService.getCategories().valueChanges();
    this.locations = locationService.locations;
    this.localCategories = categoryService.localCategories;
    // this.upload = this.up;
   }

  ngOnInit() {
  }


  add(x) {
    const adsData = x.value;
    adsData.images = this.imagesList;
    // console.log(adsData);
    this.advertService.sentAdToFirebase(adsData);
    console.log('data saved !');
  }

}

