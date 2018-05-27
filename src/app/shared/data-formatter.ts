export class DataFormatter {
  static decodeHtml(text: string): string {
    if (text) {
      const textArea = document.createElement('textarea');
      textArea.innerHTML = text;
      return textArea.textContent.trim() || '';
    }
    return '';
  }

  static resizeImage(imageUrl: string, width?: number, height?: number):string {
    if (width && !height) {
      return ['https://image.tmdb.org/t/p/w', width, '/', imageUrl].join('');
    }
    if (width && height)  {
      return ['https://image.tmdb.org/t/p/w', width, '_and_h',height,'_face/', imageUrl].join('');
    }
    return ['https://image.tmdb.org/t/p/w', 400, '/', imageUrl].join('');
  }

  static formatBackgroundStyle(data: string): any {
    return {
      backgroundImage: data ? `url('${data}')` : 'none',
    };
  }

  static formateVideoSize(maxWidth: number = 1080, maxHeight: number = 720): any {
    const width = window.innerWidth < maxWidth ? window.innerWidth : maxWidth;
    const height = window.innerHeight < maxHeight ? window.innerHeight : maxHeight;
    return {
      width,
      height,
    };
  }
}
