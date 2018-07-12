export class Genre {
  constructor(
    public id: number,
    public name: string,
  ) { }

  static createFromResponse(blob: any): Genre {
    const id: number = blob.id;
    const name: string = blob.name;

    return new Genre(
      id,
      name,
    );
  }

  static createCollectionFromResponse(blobs: any): Genre[] | null {
    if (!blobs) {
      return null;
    }
    const collections: Genre[] = [];
    blobs.forEach((blob: any) => {
      collections.push(Genre.createFromResponse(blob));
    });

    return collections;
  }
}
