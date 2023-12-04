// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { inventoryId, type InventoryId } from './Inventory';
import { customerId, type CustomerId } from './Customer';
import { staffId, type StaffId } from './Staff';
import { z } from 'zod';

/** Identifier type for rental */
export type RentalId = number & { __flavor?: 'RentalId' };

/** Represents the table public.rental */
export default interface Rental {
  /** Database type: pg_catalog.int4 */
  rental_id: RentalId;

  /** Database type: pg_catalog.timestamp */
  rental_date: Date;

  /** Database type: pg_catalog.int4 */
  inventory_id: InventoryId;

  /** Database type: pg_catalog.int2 */
  customer_id: CustomerId;

  /** Database type: pg_catalog.timestamp */
  return_date: Date | null;

  /** Database type: pg_catalog.int2 */
  staff_id: StaffId;

  /** Database type: pg_catalog.timestamp */
  last_update: Date;
}

/** Represents the initializer for the table public.rental */
export interface RentalInitializer {
  /**
   * Database type: pg_catalog.int4
   * Default value: nextval('rental_rental_id_seq'::regclass)
   */
  rental_id?: RentalId;

  /** Database type: pg_catalog.timestamp */
  rental_date: Date;

  /** Database type: pg_catalog.int4 */
  inventory_id: InventoryId;

  /** Database type: pg_catalog.int2 */
  customer_id: CustomerId;

  /** Database type: pg_catalog.timestamp */
  return_date?: Date | null;

  /** Database type: pg_catalog.int2 */
  staff_id: StaffId;

  /**
   * Database type: pg_catalog.timestamp
   * Default value: now()
   */
  last_update?: Date;
}

/** Represents the mutator for the table public.rental */
export interface RentalMutator {
  /** Database type: pg_catalog.int4 */
  rental_id?: RentalId;

  /** Database type: pg_catalog.timestamp */
  rental_date?: Date;

  /** Database type: pg_catalog.int4 */
  inventory_id?: InventoryId;

  /** Database type: pg_catalog.int2 */
  customer_id?: CustomerId;

  /** Database type: pg_catalog.timestamp */
  return_date?: Date | null;

  /** Database type: pg_catalog.int2 */
  staff_id?: StaffId;

  /** Database type: pg_catalog.timestamp */
  last_update?: Date;
}

export const rentalId = z.number() as unknown as z.Schema<RentalId>;

export const rental = z.object({
  rental_id: rentalId,
  rental_date: z.date(),
  inventory_id: inventoryId,
  customer_id: customerId,
  return_date: z.date().nullable(),
  staff_id: staffId,
  last_update: z.date(),
}) as unknown as z.Schema<Rental>;

export const rentalInitializer = z.object({
  rental_id: rentalId.optional(),
  rental_date: z.date(),
  inventory_id: inventoryId,
  customer_id: customerId,
  return_date: z.date().optional().nullable(),
  staff_id: staffId,
  last_update: z.date().optional(),
}) as unknown as z.Schema<RentalInitializer>;

export const rentalMutator = z.object({
  rental_id: rentalId.optional(),
  rental_date: z.date().optional(),
  inventory_id: inventoryId.optional(),
  customer_id: customerId.optional(),
  return_date: z.date().optional().nullable(),
  staff_id: staffId.optional(),
  last_update: z.date().optional(),
}) as unknown as z.Schema<RentalMutator>;
