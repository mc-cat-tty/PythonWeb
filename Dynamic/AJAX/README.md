# AJAX + CGI approach

1. A static _.html_ page is sent to the client
2. As soon as the page is loaded into the browser, a GET request is sent to the server
3. The server responds with a JSON object containing statistics about the system
4. Whenever the _refresh_ button is pressed these last two steps are repeated

## Endpoints


|          URL           |  Description  |    Return value    | Return format |
|------------------------|---------------|--------------------|---------------|
| /stats.html            | Main page     | Front-end web page | HTML          |
| /cgi-bin/ajax_stats.py | AJAX endpoint | System statistics  | JSON          |

