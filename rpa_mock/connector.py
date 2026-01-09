import time

class LegacySystemConnector:
    """
    Simulates interaction with FedEx Legacy Systems via RPA.
    """
    def __init__(self):
        pass

    def sync_case_data(self, case_id):
        """
        Mock: Pull latest data for a case from legacy DB.
        """
        print(f"[RPA Bot] Connecting to Legacy System for Case {case_id}...")
        time.sleep(1) # Simulate network lag
        return {
            "case_id": case_id,
            "legacy_status": "OPEN",
            "last_payment_date": "2025-12-01"
        }

    def update_legacy_status(self, case_id, new_status):
        """
        Mock: Push status update to legacy DB.
        """
        print(f"[RPA Bot] Updating Case {case_id} in Legacy System to {new_status}...")
        time.sleep(1)
        print("[RPA Bot] Update successful.")
        return True
