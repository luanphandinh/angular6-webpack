export class Review {
  constructor(
    public author: string,
    public content: string,
    public id: string,
    public url: string,
  ) { }

  static createFromResponse(blob: any) {
    const author: string = blob.author;
    const content: string = blob.content;
    const id: string = blob.id;
    const url: string = blob.url;

    return new Review(
      author,
      content,
      id,
      url,
    );
  }

  getAuthorAvatar(): string {
    return this.author.slice(0, 1);
  }

  static createCollectionFromResponse(blobs: any, limit?: number): Review[] | null {
    let limittedBlobs = blobs;
    if (!blobs) {
      return null;
    }
    if (limit) {
      limittedBlobs = blobs.slice(0, limit);
    }
    const collections: Review[] = [];
    limittedBlobs.forEach((blob: any) => {
      collections.push(Review.createFromResponse(blob));
    });

    return collections;
  }
}
