import { DataFormatter } from './data-formatter';
import { Collection } from './collection';
import { ProductionCompany } from './production-company';
import { Genre } from './genre';

export class Movie {
  constructor(
    public id: number,
    public voteCount: number,
    public video: boolean,
    public voteAverage: number,
    public title: string,
    public popularity: string,
    public posterPath: string,
    public originalLanguage: string,
    public originalTitle: string,
    public backdropPath: string,
    public adult: boolean,
    public overview: string,
    public releaseDate: string,
  ) {
    this.image = this.posterPath;
    this.subtitle = String(this.voteAverage);
  }

  image: string;
  subtitle: string;
  collection: Collection | null;
  productions: ProductionCompany[] | null;
  genres: Genre[] | null;
  isHover: boolean;

  static createFromResponse(blob: any) {
    const id: number = blob.id;
    const voteCount: number = blob.vote_count;
    const video: boolean = blob.video;
    const voteAverage: number = blob.vote_average;
    const title: string = DataFormatter.decodeHtml(blob.title);
    const popularity: string = blob.popularity;
    const posterPath: string = 'https://image.tmdb.org/t/p/w300' + blob.poster_path;
    const originalLanguage: string = blob.original_language;
    const originalTitle: string = blob.original_title;
    const backdropPath: string =
      'https://image.tmdb.org/t/p/w1400_and_h450_face' + blob.backdrop_path;
    const adult: boolean = blob.adult;
    const overview: string = DataFormatter.decodeHtml(blob.overview);
    const releaseDate: string = blob.release_date;
    return new Movie(
      id,
      voteCount,
      video,
      voteAverage,
      title,
      popularity,
      posterPath,
      originalLanguage,
      originalTitle,
      backdropPath,
      adult,
      overview,
      releaseDate,
    );
  }

  static createMovieDetailFromResponse(blob: any) {
    const movie = Movie.createFromResponse(blob);
    movie.collection = blob.belongs_to_collection
      ? Collection.createFromReponse(blob.belongs_to_collection)
      : null;
    movie.productions = ProductionCompany.createCollectionFromResponse(blob.production_companies);
    movie.genres = Genre.createCollectionFromResponse(blob.genres);
    return movie;
  }

  getLogoStyle() {
    return {
      backgroundImage: this.posterPath ? `url('${this.posterPath}')` : 'none',
    };
  }

  getBackdropImageStyle() {
    return {
      backgroundImage: this.backdropPath ? `url('${this.backdropPath}')` : 'none',
    };
  }


  static createCollectionFromResponse(blobs: any): Movie[] | null {
    if (!blobs) {
      return null;
    }
    const collections: Movie[] = [];
    blobs.forEach((blob: any) => collections.push(Movie.createFromResponse(blob)));
    return collections;
  }
}
