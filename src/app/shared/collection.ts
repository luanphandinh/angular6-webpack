export class Collection {
  constructor(
    public id: number,
    public name: string,
    public posterPath: string,
    public backdropPath: string,
  ) { }

  static createFromReponse(blob: any) {
    const id: number = Number(blob.id);
    const name: string = blob.name;
    const posterPath: string = blob.poster_path
      ? 'https://image.tmdb.org/t/p/w200' + blob.poster_path
      : null;
    const backdropPath: string = blob.backdrop_path
      ? 'https://image.tmdb.org/t/p/w200' + blob.backdrop_path
      : null;
    return new Collection(
      id,
      name,
      posterPath,
      backdropPath,
    );
  }
}
