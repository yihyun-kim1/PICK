import mysql.connector
import json

# Open the JSON file and load the data
with open('0605_shirts_B&W_10.json') as f:
    image_info_list = json.load(f)

# Connect to your mysql DB
conn = mysql.connector.connect(
    user='prismpick',
    password='prismpick1!',
    host='pickpick.store',
    database='prismpick'
)

# Open a cursor to perform database operations
cur = conn.cursor()

# Insert the image data into the table
for img_info in image_info_list:
    cur.execute('''
    INSERT INTO scrap_test (sort, IMG, url, gender, season, price, color, style, fit, top, bottom) VALUES (%s, %s, %s, %c, %s, %d, %s, %s, %s, %d, %d)
    ''', (img_info['img_url'], img_info['page_url'], img_info['color'], img_info['price']))


# Close communication with the database
conn.commit()
cur.close()
conn.close()