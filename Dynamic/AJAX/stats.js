    function refreshStats() {
        function fillStats(stats) {
            document.getElementById("average-load").innerHTML = stats.average_load + "%";
            document.getElementById("memory-total").innerHTML = stats.memory.total;
            document.getElementById("memory-available").innerHTML = stats.memory.available;
            document.getElementById("memory-in-use").innerHTML = stats.memory.in_use + "%";
            document.getElementById("disk-total").innerHTML = stats.disk.total;
            document.getElementById("disk-in-use").innerHTML = stats.disk.in_use + "%";
            document.getElementById("disk-available").innerHTML = stats.disk.available;
            document.getElementById("network-bytes-sent").innerHTML = stats.network.bytes.sent;
            document.getElementById("network-bytes-received").innerHTML = stats.network.bytes.received;
            document.getElementById("network-packets-sent").innerHTML = stats.network.packets.sent;
            document.getElementById("network-packets-received").innerHTML = stats.network.packets.received;
            document.getElementById("boot-time").innerHTML = stats.boot_time;
        }
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                const stats = JSON.parse(this.responseText);
                fillStats(stats);
            }
        };
        xhttp.open("GET", "/cgi-bin/ajax_stats.py", true);
        xhttp.send();
    }