"""
Minions Alerts SDK — Type Schemas
Custom MinionType schemas for Minions Alerts.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

alert_rule_type = MinionType(
    id="alerts-alert-rule",
    name="Alert rule",
    slug="alert-rule",
    description="A user-defined rule that triggers an alert when availability conditions are met.",
    icon="🔔",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="tentId", type="string", label="tentId"),
        FieldDefinition(name="tentAreaId", type="string", label="tentAreaId"),
        FieldDefinition(name="targetDate", type="string", label="targetDate"),
        FieldDefinition(name="targetSessionType", type="select", label="targetSessionType"),
        FieldDefinition(name="triggerCondition", type="select", label="triggerCondition"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
        FieldDefinition(name="lastTriggeredAt", type="string", label="lastTriggeredAt"),
    ],
)

alert_delivery_type = MinionType(
    id="alerts-alert-delivery",
    name="Alert delivery",
    slug="alert-delivery",
    description="Delivery preference for how and where alerts are sent.",
    icon="📬",
    schema=[
        FieldDefinition(name="alertRuleId", type="string", label="alertRuleId"),
        FieldDefinition(name="channel", type="select", label="channel"),
        FieldDefinition(name="recipientId", type="string", label="recipientId"),
        FieldDefinition(name="recipientAddress", type="string", label="recipientAddress"),
        FieldDefinition(name="priority", type="select", label="priority"),
        FieldDefinition(name="cooldownMinutes", type="number", label="cooldownMinutes"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
    ],
)

alert_event_type = MinionType(
    id="alerts-alert-event",
    name="Alert event",
    slug="alert-event",
    description="A record of an alert that was triggered and its delivery status.",
    icon="🚨",
    schema=[
        FieldDefinition(name="alertRuleId", type="string", label="alertRuleId"),
        FieldDefinition(name="availabilityDiffId", type="string", label="availabilityDiffId"),
        FieldDefinition(name="triggeredAt", type="string", label="triggeredAt"),
        FieldDefinition(name="summary", type="string", label="summary"),
        FieldDefinition(name="deliveryChannel", type="select", label="deliveryChannel"),
        FieldDefinition(name="deliveryStatus", type="select", label="deliveryStatus"),
        FieldDefinition(name="deliveredAt", type="string", label="deliveredAt"),
        FieldDefinition(name="errorMessage", type="string", label="errorMessage"),
    ],
)

alert_snooze_type = MinionType(
    id="alerts-alert-snooze",
    name="Alert snooze",
    slug="alert-snooze",
    description="A temporary suppression of an alert rule.",
    icon="😴",
    schema=[
        FieldDefinition(name="alertRuleId", type="string", label="alertRuleId"),
        FieldDefinition(name="snoozedAt", type="string", label="snoozedAt"),
        FieldDefinition(name="snoozeUntil", type="string", label="snoozeUntil"),
        FieldDefinition(name="reason", type="string", label="reason"),
        FieldDefinition(name="snoozedBy", type="string", label="snoozedBy"),
    ],
)

custom_types: list[MinionType] = [
    alert_rule_type,
    alert_delivery_type,
    alert_event_type,
    alert_snooze_type,
]

