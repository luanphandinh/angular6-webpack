import { DataFormatter } from './data-formatter';

export class People {
  constructor(
    public castId: number,
    public character:  string,
    public creditId: string,
    public gender: number,
    public id: number,
    public name: string,
    public order: number,
    public profilePath:  string,
  ) { }

  static createFromResponse(blob: any) {
    const castId: number = blob.cast_id;
    const character: string = blob.character;
    const creditId: string = blob.credit_id;
    const gender: number = blob.gender;
    const id: number = blob.id;
    const name: string = blob.name;
    const order: number = blob.order;
    const profilePath: string = DataFormatter.resizeImage(blob.profile_path, 138, 175);
    return new People(
      castId,
      character,
      creditId,
      gender,
      id,
      name,
      order,
      profilePath,
    );
  }

  getBackgroundStyle() {
    return DataFormatter.formatBackgroundStyle(this.profilePath);
  }

  static createCollectionFromResponse(blobs: any, limit?: number): People[] | null {
    let limittedBlobs = blobs;
    if (!blobs) {
      return null;
    }
    if (limit) {
      limittedBlobs = blobs.slice(0, limit);
    }
    const collections: People[] = [];
    limittedBlobs.forEach((blob: any) => {
      collections.push(People.createFromResponse(blob));
    });
    return collections;
  }
}
