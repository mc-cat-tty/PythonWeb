"""
CGI + AJAX for dynamic refresh
"""

__author__ = "Franceco Mecatti"

import logging
import argparse
from http.server import CGIHTTPRequestHandler, HTTPServer

HOST, PORT = '', 9999  # Default values. Can be changed through command line arguments

class WSHandler(CGIHTTPRequestHandler):
    cgi_directories = ["/cgi"]

def main(host, port):
    httpd = HTTPServer((HOST, PORT), WSHandler)
    httpd.serve_forever()


if __name__ == "__main__":
    logging.basicConfig(level=logging.DEBUG, format="%(asctime)s - %(levelname)s: %(message)s",
                        datefmt="%H:%M:%S")
    parser = argparse.ArgumentParser()
    parser.add_argument("-a", "--address", help="host address", default=HOST, type=str,
                        dest="address")  # If an argument is not provided the default value is used
    parser.add_argument("-p", "--port", help="port number", default=PORT, type=int, dest="port")
    args = parser.parse_args()
    PORT = args.port
    HOST = args.address
    main(HOST, PORT)