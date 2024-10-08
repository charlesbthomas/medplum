/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { PoolClient } from 'pg';

export async function run(client: PoolClient): Promise<void> {
  await client.query(
    `CREATE INDEX CONCURRENTLY IF NOT EXISTS "Encounter_appointment_compound_idx" ON "Encounter" USING gin (compartments, deleted, appointment)`
  );
}
