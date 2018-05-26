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
}
