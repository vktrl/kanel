// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { z } from 'zod';

/** Identifier type for language */
export type LanguageId = number & { __flavor?: 'LanguageId' };

/** Represents the table public.language */
export default interface Language {
  /** Database type: pg_catalog.int4 */
  language_id: LanguageId;

  /** Database type: pg_catalog.bpchar */
  name: string;

  /** Database type: pg_catalog.timestamp */
  last_update: Date;
}

/** Represents the initializer for the table public.language */
export interface LanguageInitializer {
  /**
   * Database type: pg_catalog.int4
   * Default value: nextval('language_language_id_seq'::regclass)
   */
  language_id?: LanguageId;

  /** Database type: pg_catalog.bpchar */
  name: string;

  /**
   * Database type: pg_catalog.timestamp
   * Default value: now()
   */
  last_update?: Date;
}

/** Represents the mutator for the table public.language */
export interface LanguageMutator {
  /** Database type: pg_catalog.int4 */
  language_id?: LanguageId;

  /** Database type: pg_catalog.bpchar */
  name?: string;

  /** Database type: pg_catalog.timestamp */
  last_update?: Date;
}

export const languageId = z.number() as unknown as z.Schema<LanguageId>;

export const language = z.object({
  language_id: languageId,
  name: z.string(),
  last_update: z.date(),
}) as unknown as z.Schema<Language>;

export const languageInitializer = z.object({
  language_id: languageId.optional(),
  name: z.string(),
  last_update: z.date().optional(),
}) as unknown as z.Schema<LanguageInitializer>;

export const languageMutator = z.object({
  language_id: languageId.optional(),
  name: z.string().optional(),
  last_update: z.date().optional(),
}) as unknown as z.Schema<LanguageMutator>;
