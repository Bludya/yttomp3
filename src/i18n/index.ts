import type { Dict } from './en';
import en from './en';
import zh from './zh';
import hi from './hi';
import es from './es';
import fr from './fr';
import ar from './ar';
import bn from './bn';
import pt from './pt';
import ru from './ru';
import ur from './ur';

const dictionaries: Record<string, Dict> = { en, zh, hi, es, fr, ar, bn, pt, ru, ur };

export function t(code: string): Dict {
  return dictionaries[code] ?? en;
}
