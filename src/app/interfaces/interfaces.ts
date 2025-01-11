export interface Partner {
    id: number;
    name: string;
    description: string;
    image: string;
}

export interface Category {
    id?: number;
    name: string;
    description: string;
    image: string;
}

export interface Nomine {
    id?: number;
    name: string;
    description: string;
    image: string;
    categoryId: string;
}

