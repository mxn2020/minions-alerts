/**
 * Minions Alerts SDK
 *
 * Alert rules, delivery preferences, and alert history for availability changes
 *
 * @module @minions-alerts/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Alerts.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
