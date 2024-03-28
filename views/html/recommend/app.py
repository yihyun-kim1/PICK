from http.server import HTTPSServer, BaseHTTPSRequestHandler
import json
import mysql.connector
import ssl
import os
from dotenv import load_dotenv

load_dotenv()


class MyHTTPSRequestHandler(BaseHTTPSRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        body = self.rfile.read(content_length)
        data = json.loads(body)

        test_input = data['give_test_input']

        try:
            # MySQL 연결
            connection = mysql.connector.connect(
                host=os.getenv('DB_HOST'),
                port=os.getenv('DB_PORT'),
                user=os.getenv('DB_USER'),
                password=os.getenv('DB_PASSWORD'),
                database=os.getenv('DB_DATABASE')
            )

            if connection.is_connected():
                cursor = connection.cursor()

                # SQL 쿼리 실행
                sql = "INSERT INTO inputdata (input) VALUES (%s)"
                val = (test_input,)
                cursor.execute(sql, val)
                connection.commit()

                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                response = {'result': 'success'}
                self.wfile.write(json.dumps(response).encode())

        except mysql.connector.Error as e:
            print('Database Error:', e)
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            response = {'result': 'error', 'message': 'Database Error'}
            self.wfile.write(json.dumps(response).encode())

        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()
                print('MySQL Connection Closed')


def run(server_class=HTTPSServer, handler_class=MyHTTPSRequestHandler):
    server_address = ('0.0.0.0', 8080)
    httpd = server_class(server_address, handler_class)
    httpd.socket = ssl.wrap_socket(httpd.socket, certfile='./config/www_pick-pick.site_cert.crt',
                                   keyfile='./config/www_pick-pick.site.key', server_side=True)
    httpd.serve_forever()


if __name__ == '__main__':
    run()
