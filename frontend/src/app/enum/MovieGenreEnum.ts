export enum MovieGenreEnum {
  action,
  adventure,
  comedy,
  "cream & gangster",
  drama,
  "epics & historical",
  horror,
  "musicals & dance",
  "science & fiction",
  war,
  westerns,
}

export class MovieGenreTransformer {
  private static StringIsNumber = value => isNaN(Number(value)) === false;

  public static convertStringToArray(stringMovieGenres: string): string[] {
    let arrayMovieGenres: string[] = [];
    for (let i: number = 0; i < stringMovieGenres.length; i++) {
      if (stringMovieGenres[i] == '1') arrayMovieGenres.push(MovieGenreEnum[i]);
    }
    return arrayMovieGenres;
  }

  public static convertArrayToString(arrayOfMovieGenres: string[]): string {
    let stringMovieGenres = '';
    for (let i: number = 0; i < this.getArrayOfKey().length; i++) {
      stringMovieGenres += arrayOfMovieGenres.includes(MovieGenreEnum[i]) ? '1' : '0';
    }
    return stringMovieGenres;
  }

  private static getArrayOfKey() {
    return Object.keys(MovieGenreEnum)
      .filter(this.StringIsNumber)
  }

  public static getArrayOfGenre(): string[] {
    return this.getArrayOfKey().map(key => MovieGenreEnum[key]);
  }
}



