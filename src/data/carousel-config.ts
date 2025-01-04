// Mengimpor gambar menggunakan alias
import brand1Img from '@assets/slide/brand1.png';
import brand2Img from '@assets/slide/brand2.png';
import brand3Img from '@assets/slide/brand3.png';
import brand4Img from '@assets/slide/brand4.png';
import brand5Img from '@assets/slide/brand5.png';

// Define the structure of each brand's details
export type BrandDetails = {
  imgUrl: string;
  title: string;
};

// Define the cardDetails object with specific keys
export const cardDetails: Record<string, BrandDetails> = {
  brand1: { imgUrl: brand1Img, title: "Brand 1" },
  brand2: { imgUrl: brand2Img, title: "Brand 2" },
  brand3: { imgUrl: brand3Img, title: "Brand 3" },
  brand4: { imgUrl: brand4Img, title: "Brand 4" },
  brand5: { imgUrl: brand5Img, title: "Brand 5" },
  brand6: { imgUrl: brand1Img, title: "Brand 1" },
  brand7: { imgUrl: brand2Img, title: "Brand 2" },
  brand8: { imgUrl: brand3Img, title: "Brand 3" },
  brand9: { imgUrl: brand4Img, title: "Brand 4" },
  brand10: { imgUrl: brand5Img, title: "Brand 5" },
  brand11: { imgUrl: brand1Img, title: "Brand 1" },
  brand12: { imgUrl: brand2Img, title: "Brand 2" },
  brand13: { imgUrl: brand3Img, title: "Brand 3" },
  brand14: { imgUrl: brand4Img, title: "Brand 4" },
  brand15: { imgUrl: brand5Img, title: "Brand 5" },
  brand16: { imgUrl: brand1Img, title: "Brand 1" },
  brand17: { imgUrl: brand2Img, title: "Brand 2" },
  brand18: { imgUrl: brand3Img, title: "Brand 3" },
  brand19: { imgUrl: brand4Img, title: "Brand 4" },
  brand20: { imgUrl: brand5Img, title: "Brand 5" },
};
