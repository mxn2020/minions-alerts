/**
 * @module @minions-alerts/sdk/schemas
 * Custom MinionType schemas for Minions Alerts.
 */

import type { MinionType } from 'minions-sdk';

export const alertruleType: MinionType = {
  id: 'alerts-alert-rule',
  name: 'Alert rule',
  slug: 'alert-rule',
  description: 'A user-defined rule that triggers an alert when availability conditions are met.',
  icon: '🔔',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'tentId', type: 'string', label: 'tentId' },
    { name: 'tentAreaId', type: 'string', label: 'tentAreaId' },
    { name: 'targetDate', type: 'string', label: 'targetDate' },
    { name: 'targetSessionType', type: 'select', label: 'targetSessionType' },
    { name: 'triggerCondition', type: 'select', label: 'triggerCondition' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
    { name: 'lastTriggeredAt', type: 'string', label: 'lastTriggeredAt' },
  ],
};

export const alertdeliveryType: MinionType = {
  id: 'alerts-alert-delivery',
  name: 'Alert delivery',
  slug: 'alert-delivery',
  description: 'Delivery preference for how and where alerts are sent.',
  icon: '📬',
  schema: [
    { name: 'alertRuleId', type: 'string', label: 'alertRuleId' },
    { name: 'channel', type: 'select', label: 'channel' },
    { name: 'recipientId', type: 'string', label: 'recipientId' },
    { name: 'recipientAddress', type: 'string', label: 'recipientAddress' },
    { name: 'priority', type: 'select', label: 'priority' },
    { name: 'cooldownMinutes', type: 'number', label: 'cooldownMinutes' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
  ],
};

export const alerteventType: MinionType = {
  id: 'alerts-alert-event',
  name: 'Alert event',
  slug: 'alert-event',
  description: 'A record of an alert that was triggered and its delivery status.',
  icon: '🚨',
  schema: [
    { name: 'alertRuleId', type: 'string', label: 'alertRuleId' },
    { name: 'availabilityDiffId', type: 'string', label: 'availabilityDiffId' },
    { name: 'triggeredAt', type: 'string', label: 'triggeredAt' },
    { name: 'summary', type: 'string', label: 'summary' },
    { name: 'deliveryChannel', type: 'select', label: 'deliveryChannel' },
    { name: 'deliveryStatus', type: 'select', label: 'deliveryStatus' },
    { name: 'deliveredAt', type: 'string', label: 'deliveredAt' },
    { name: 'errorMessage', type: 'string', label: 'errorMessage' },
  ],
};

export const alertsnoozeType: MinionType = {
  id: 'alerts-alert-snooze',
  name: 'Alert snooze',
  slug: 'alert-snooze',
  description: 'A temporary suppression of an alert rule.',
  icon: '😴',
  schema: [
    { name: 'alertRuleId', type: 'string', label: 'alertRuleId' },
    { name: 'snoozedAt', type: 'string', label: 'snoozedAt' },
    { name: 'snoozeUntil', type: 'string', label: 'snoozeUntil' },
    { name: 'reason', type: 'string', label: 'reason' },
    { name: 'snoozedBy', type: 'string', label: 'snoozedBy' },
  ],
};

export const customTypes: MinionType[] = [
  alertruleType,
  alertdeliveryType,
  alerteventType,
  alertsnoozeType,
];

