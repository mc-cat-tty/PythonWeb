# AJAX + CGI approach

1. A static _.html_ page (either _stats_basic.html_ or _stats_bootstrap.html_) is sent to the client
2. As soon as the page is loaded into the browser, a GET request is sent to the server and _ajax_stats.py_ is executed
3. The server responds with a JSON object containing statistics about the system
4. Whenever the _refresh_ button is pressed these last two steps are repeated. If _auto-refresh-checkbox_ is checked, last two steps are repeated at regular intervals.

## Endpoints

|          URL           |                 Description                 |    Return value    | Return format |
|------------------------|---------------------------------------------|--------------------|---------------|
| /stats_basic.html      | Main page, basic version                    | Front-end web page | HTML          |
| /stats_bootstrap.html  | Main page, beautiful and responsive version | Front-end web page | HTML          |
| /cgi-bin/ajax_stats.py | AJAX endpoint                               | System statistics  | JSON          |
