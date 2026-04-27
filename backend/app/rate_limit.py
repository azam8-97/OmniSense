from collections import defaultdict, deque
from datetime import datetime, timedelta, timezone


class InMemoryRateLimiter:
    def __init__(self, max_requests: int = 5, per_hours: int = 1):
        self.max_requests = max_requests
        self.window = timedelta(hours=per_hours)
        self.events: dict[str, deque[datetime]] = defaultdict(deque)

    def allow(self, key: str) -> bool:
        now = datetime.now(timezone.utc)
        bucket = self.events[key]

        while bucket and (now - bucket[0]) > self.window:
            bucket.popleft()

        if len(bucket) >= self.max_requests:
            return False

        bucket.append(now)
        return True
