import en, { type Dict } from './en';

// Register each translation here as it is added, e.g. `es: () => import('./es')`.
const dictionaries: Record<string, Dict> = { en };

export function t(code: string): Dict {
  return dictionaries[code] ?? en;
}
