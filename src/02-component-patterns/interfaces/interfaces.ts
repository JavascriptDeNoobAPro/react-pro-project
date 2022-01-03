

export interface Product {
    id: string,
   title: string,
    img?: string,
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (amount: number) => void;
    product: Product;
}