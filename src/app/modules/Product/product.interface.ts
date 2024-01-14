export type TProduct = {
  category: string;
  name: string;
  imgUrl: string;
  price: number;
  oldPrice: number;
  rating: number;
  deal: "Hot" | "New" | "Sale";
};
