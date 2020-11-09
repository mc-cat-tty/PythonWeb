function refreshStats() {
    function fillStats(stats) {
        document.getElementById("average-load").innerHTML = stats.average_load + "%";
        // document.getElementById("average-load-progress-bar").innerHTML = stats.average_load + "%";
        // document.getElementById("average-load-progress-bar").setAttribute("aria-valuenow", stats.average_load);  // TODO: future applications
        // document.getElementById("average-load-progress-bar").style.width = stats.average_load + "%";
        document.getElementById("memory-total").innerHTML = stats.memory.total + "b";
        document.getElementById("memory-available").innerHTML = stats.memory.available + "b";
        document.getElementById("memory-in-use").innerHTML = stats.memory.in_use + "%";
        document.getElementById("disk-total").innerHTML = stats.disk.total + "b";
        document.getElementById("disk-in-use").innerHTML = stats.disk.in_use + "%";
        document.getElementById("disk-available").innerHTML = stats.disk.available + "b";
        document.getElementById("network-bytes-sent").innerHTML = stats.network.bytes.sent;
        document.getElementById("network-bytes-received").innerHTML = stats.network.bytes.received;
        document.getElementById("network-packets-sent").innerHTML = stats.network.packets.sent;
        document.getElementById("network-packets-received").innerHTML = stats.network.packets.received;
        document.getElementById("boot-time").innerHTML = stats.boot_time + "seconds since the epoch";
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