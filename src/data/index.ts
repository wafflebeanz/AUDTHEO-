import { ModuleData } from './types';
import { at10001 } from './at10001';
import { at10002 } from './at10002';
import { at10003 } from './at10003';
import { at10004 } from './at10004';
import { at10005 } from './at10005';
import { at10006 } from './at10006';
import { at10007 } from './at10007';
import { at10008 } from './at10008';
import { at10009 } from './at10009';
import { at10010 } from './at10010';
import { at10011 } from './at10011';
import { at10012 } from './at10012';
import { at10013 } from './at10013';
import { at10014 } from './at10014';
import { at10015 } from './at10015';

export * from './types';

export const AUDIT_MODULES: ModuleData[] = [
  at10001,
  at10002,
  at10003,
  at10004,
  at10005,
  at10006,
  at10007,
  at10008,
  at10009,
  at10010,
  at10011,
  at10012,
  at10013,
  at10014,
  at10015
];

export const TOTAL_QUESTIONS = AUDIT_MODULES.reduce((sum, mod) => sum + mod.items.length, 0);

export const MODULE_MAP: Record<string, ModuleData> = AUDIT_MODULES.reduce((map, mod) => {
  map[mod.id] = mod;
  return map;
}, {} as Record<string, ModuleData>);
