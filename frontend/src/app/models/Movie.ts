export interface Movie {
  id: number;
  title: string;
  picture;
  description: string;
  ageLimit: number;
  duration: string;
  genres: string | string[];
}
