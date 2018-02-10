export interface  Advert  {
    brand: string;
    category: string;
    condition: string;
    description: string;
    images: Images[];
    isNegociable: string;
    location: string;
    model: string;
    position: string;
    price: number;
    rent: number;
    salary: number;
    title: string;
    type: string;
}

interface Images {
    url: string;
    adId: number;
    fileName: string;
    userName: string;
}
