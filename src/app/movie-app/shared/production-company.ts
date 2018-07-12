export class ProductionCompany {
  constructor(
  public id: number,
  public logoPath: string | null,
  public name: string,
  public originCountry: string,
  ) {}

  static createFromResponse(blob: any) {
    const id: number = blob.id;
    const logoPath: string | null = blob.logo_path
      ? 'https://image.tmdb.org/t/p/w200' + blob.logo_path
      : null;
    const name: string = blob.name;
    const originCountry: string = blob.origin_country;

    return new ProductionCompany(
      id,
      logoPath,
      name,
      originCountry,
    );
  }

  getBackgroundImageStyle() {
    return {
      backgroundImage: this.logoPath ? `url('${this.logoPath}')` : 'none',
    };
  }

  static createCollectionFromResponse(blobs: any): ProductionCompany[] | null {
    if (!blobs) {
      return null;
    }
    const collections: ProductionCompany[] = [];
    blobs.forEach((blob: any) => {
      if (!blob.logo_path) {
        return;
      }
      collections.push(ProductionCompany.createFromResponse(blob));
    });

    return collections;
  }
}
