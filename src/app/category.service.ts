import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class CategoryService {
  localCategories: any[] = [
    {
        'title': 'IMMOBILIER',
         'subCategories': [ 'Ventes immobilières', 'Locations', 'Colocations', 'Bureaux & Commerces' ]
    },
    {
        'title': 'VEHICULES',
         'subCategories':  [ 'Voitures', 'Motos', 'Equipement Auto', 'Equipement Moto', 'Autres' ]
    },
    {
        'title': 'JOBS',
         'subCategories': [ 'Offre d\'emploi', 'Proposer des Services' ]
    },
    {
        'title': 'VETEMENTS',
         'subCategories': [ 'Hommes', 'Femmes', 'Enfants', 'Bijoux Hommes', 'Bijoux Femmes', 'Autres' ]
    },
    {
        'title': 'ELECTRONIQUE',
         'subCategories': [ 'Telephones', 'Tablettes', 'Odinateur Portable', 'Ordinateur Bureau',
          'Jeux Videos', 'Materiel informatique', 'Autres' ]
    },
    {
        'title': 'MAISON ET DECORATION',
         'subCategories': [ 'Ameublement', 'Electromenager', 'Jardins', 'Decorations', 'Bricolage', 'Equimement bébé', 'Autres' ]
    },
    {
        'title': 'LOISIR',
         'subCategories':  [ 'Voyages', 'Livre et Magazines', 'Instruments De Musique', 'Equipement de Sport',
         'Chambres d\'hôtes', 'Autres']
    },
    {
        'title': 'AUTRES',
         'subCategories': ['Autres categories']
    }
];
  constructor(private db: AngularFireDatabase) {
   }

  getCategories() {
    return this.db.list('/categories');
  }
}
