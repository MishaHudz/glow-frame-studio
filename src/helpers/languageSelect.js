import { ukrTranslate } from 'languages/ukrTranslate';
import { engTranslate } from 'languages/engTranslate';

export function languageSelect(isEnglishSelected) {
  return isEnglishSelected ? engTranslate : ukrTranslate;
}
