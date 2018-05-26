export class DataFormatter {
  static decodeHtml(text: string): string {
    if (text) {
      const textArea = document.createElement('textarea');
      textArea.innerHTML = text;
      return textArea.textContent.trim() || '';
    }
    return '';
  }
}
