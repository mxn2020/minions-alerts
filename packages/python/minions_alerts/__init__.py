"""
Minions Alerts Python SDK

Alert rules, delivery preferences, and alert history for availability changes
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Alerts.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
