"""
endpoint for /stats ajax requests
"""

__author__ = "Francesco Mecatti"

import psutil as ps
import json


class Stats:
    def __init__(self):
        self.average_load: float = 0.0
        self.memory_total: int = 0
        self.memory_available: int = 0
        self.memory_in_use: float = 0.0
        self.disk_total: int = 0
        self.disk_in_use: float = 0.0
        self.disk_available: int = 0
        self.network_bytes_sent: int = 0
        self.network_bytes_received: int = 0
        self.network_packets_sent: int = 0
        self.network_packets_received: int = 0
        self.boot_time: int = 0
        self.update()

    def update(self):
        self.average_load = ps.cpu_percent()
        mem = ps.virtual_memory()
        self.memory_total = mem.total
        self.memory_available = mem.available
        self.memory_in_use = mem.percent
        disk = ps.disk_usage("/")
        self.disk_total = disk.total
        self.disk_in_use = disk.percent
        self.disk_available = disk.free
        net = ps.net_io_counters()
        self.network_bytes_sent = net.bytes_sent
        self.network_bytes_received = net.bytes_recv
        self.network_packets_sent = net.packets_sent
        self.network_packets_received = net.packets_recv
        self.boot_time = ps.boot_time()

    def to_dict(self):
        return {"average_load": self.average_load,
                "memory": {"total": self.memory_total,
                           "available": self.memory_available,
                           "in_use": self.memory_in_use},
                "disk": {"total": self.disk_total,
                         "in_use": self.disk_in_use,
                         "available": self.disk_available},
                "network": {"bytes": {"sent": self.network_bytes_sent,
                                      "received": self.network_bytes_received},
                            "packets": {"sent": self.network_packets_sent,
                                        "received": self.network_packets_received}},
                "boot_time": self.boot_time
                }

    def to_json(self):
        return json.dumps(self.to_dict())


stats = Stats()

print("Content-type: text/html\r\n")
print(stats.to_json())
