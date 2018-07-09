import { People } from './people';

export class Video {
  constructor(
    public id: string,
    public key: string,
    public name: string,
    public site: string,
    public size: number,
    public type: string,
  ) { }

  static createFromResponse(blob: any) {
    const id: string = blob.id;
    const key: string = blob.key;
    const name: string = blob.name;
    const site: string = blob.site;
    const size: number = blob.size;
    const type: string = blob.type;
    return new Video(
      id,
      key,
      name,
      site,
      size,
      type,
    );
  }

  static createCollectionFromResponse(blobs: any, limit: number = 20): Video[] | null {
    let limittedBlobs = blobs;
    if (!blobs) {
      return null;
    }
    if (limit) {
      limittedBlobs = blobs.slice(0, limit);
    }
    const collections: Video[] = [];
    limittedBlobs.forEach((blob: any) => {
      collections.push(Video.createFromResponse(blob));
    });
    return collections;
  }
}
