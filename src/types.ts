export type Disc = {
  id: number;
  name: string;
  artistName: string;
  imageUrl: string;
  price: number;
  originalPrice: number;
  discFormat: "Vinyl" | "Digital";
  isDiscOfTheMonth: boolean;
};
