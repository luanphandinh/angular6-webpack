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
    public type: string,
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

  static createFromResponse(blob: any, type: string = 'movie') {
    const id: number = blob.id;
    const voteCount: number = blob.vote_count;
    const video: boolean = blob.video;
    const voteAverage: number = blob.vote_average;
    const title: string = DataFormatter.decodeHtml(blob.title || blob.original_name);
    const popularity: string = blob.popularity;
    const posterPath: string = DataFormatter.resizeImage(blob.poster_path, 300);
    const originalLanguage: string = blob.original_language;
    const originalTitle: string = blob.original_title;
    const backdropPath: string = DataFormatter.resizeImage(blob.backdrop_path, 1400, 450);
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
      type,
    );
  }

  static createMovieDetailFromResponse(blob: any, type: string = 'movie') {
    const movie = Movie.createFromResponse(blob, type);
    movie.collection = blob.belongs_to_collection
      ? Collection.createFromReponse(blob.belongs_to_collection)
      : null;
    movie.productions = ProductionCompany.createCollectionFromResponse(blob.production_companies);
    movie.genres = Genre.createCollectionFromResponse(blob.genres);
    return movie;
  }

  getLogoStyle() {
    return DataFormatter.formatBackgroundStyle(this.posterPath);
  }

  getBackdropImageStyle() {
    return DataFormatter.formatBackgroundStyle(this.backdropPath);
  }

  static createCollectionFromResponse(blobs: any, limit: number = 20, type: string = 'movie'): Movie[] | null {
    let limittedBlobs = blobs;
    if (!blobs) {
      return null;
    }
    if (limit) {
      limittedBlobs = blobs.slice(0, limit);
    }
    const collections: Movie[] = [];
    limittedBlobs.forEach((blob: any) => collections.push(Movie.createFromResponse(blob, type)));
    return collections;
  }
}
