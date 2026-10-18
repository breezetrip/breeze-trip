#!/usr/bin/env python3
"""
Breeze Trip - Local Web Server
Serves the Breeze Trip web application on http://localhost:8000
"""

import http.server
import socketserver
import os
import sys
import webbrowser
from pathlib import Path

DEFAULT_PORT = 8000

def find_available_port(start_port=DEFAULT_PORT, max_attempts=10):
    import socket
    for port in range(start_port, start_port + max_attempts):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            if s.connect_ex(('localhost', port)) != 0:
                return port
    return start_port

def run_server():
    # Set directory to project root
    project_dir = Path(__file__).resolve().parent
    os.chdir(project_dir)

    port = find_available_port(DEFAULT_PORT)

    handler = http.server.SimpleHTTPRequestHandler
    # Ensure correct MIME types
    handler.extensions_map.update({
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.html': 'text/html',
        '.json': 'application/json',
        '.svg': 'image/svg+xml'
    })

    try:
        with socketserver.TCPServer(("", port), handler) as httpd:
            url = f"http://localhost:{port}"
            print("=" * 60)
            print("  ✈️  BREEZE TRIP - INDIA TRAVEL PLANNER & GUIDE")
            print("=" * 60)
            print(f"  Server running at: {url}")
            print(f"  Serving files from: {project_dir}")
            print("  Press Ctrl + C to stop the server.")
            print("=" * 60)

            # Auto open in browser if not running headlessly
            try:
                webbrowser.open(url)
            except Exception:
                pass

            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping Breeze Trip server. Safe travels!")
        sys.exit(0)
    except Exception as e:
        print(f"Error starting server: {e}")
        sys.exit(1)

if __name__ == '__main__':
    run_server()
