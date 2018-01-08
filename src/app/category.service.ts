import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class CategoryService {
  localCategories: any[] = [
    {
        'title': 'IMMOBILIER',
         'subCategories': ['vetements', 'electronique', 'loisir', 'etc1', 'etc2', 'etc3']
    },
    {
        'title': 'AUTO',
         'subCategories': ['vetements', 'electronique', 'loisir', 'etc1', 'etc2', 'etc3']
    },
    {
        'title': 'JOBS',
         'subCategories': ['vetements', 'electronique', 'loisir', 'etc1', 'etc2', 'etc3']
    },
    {
        'title': 'VETEMENTS',
         'subCategories': ['vetements', 'electronique', 'loisir', 'etc1', 'etc2', 'etc3']
    },
    {
        'title': 'ELECTRONIQUE',
         'subCategories': ['vetements', 'electronique', 'loisir', 'etc1', 'etc2', 'etc3']
    },
    {
        'title': 'MAISON',
         'subCategories': ['vetements', 'electronique', 'loisir', 'etc1', 'etc2', 'etc3']
    },
    {
        'title': 'LOISIR',
         'subCategories': ['vetements', 'electronique', 'loisir', 'etc1', 'etc2', 'etc3']
    },
    {
        'title': 'SERVICES',
         'subCategories': ['vetements', 'electronique', 'loisir', 'etc1', 'etc2', 'etc3']
    }
];
  constructor(private db: AngularFireDatabase) {
   }

  getCategories() {
    return this.db.list('/categories');
  }
}
