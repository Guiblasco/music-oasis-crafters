export type Disc = {
  id: number;
  name: string;
  artistName: string;
  imageUrl: string;
  discFormat: "Vinyl" | "Digital";
  price: number;
  originalPrice: number;
  isMonthlyDisc: boolean;
};
