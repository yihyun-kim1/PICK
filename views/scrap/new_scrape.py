import dload
import os
import time
import json
import re
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

service = Service('C:/Users/ASUS/.cache/selenium/chromedriver/win32/111.0.5563.64/chromedriver')
driver = webdriver.Chrome(service=service)

driver.get("https://www.eqlstore.com/display/productsList?categoryNumber=EQLA01A01A05A02&thisCtgryDpthCd=4&currentPage=1&sortColumn=SALE_QTY_SEQ&endIndex=40&bestYn=&cateNos=&lCateFilter=&mCateFilter=&sCateFilter=&dCateFilter=&productBrand=&price=&size=&color=&mallGubun=CTGRY&gubunFilter=CTGRY")
# Wait for the page to load
time.sleep(5)

def apply_price_filter(driver):
    wait = WebDriverWait(driver, 20)
    # 1) Click on the "�곸꽭寃���" button
    button = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="filterLayer"]/button')))
    button.click()
    time.sleep(2)

    # 2) Click on the "媛�寃�" button
    price_category = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="ui-id-33"]')))
    price_category.click()
    time.sleep(2)

    # 3) 媛�寃� �꾪꽣 �곸슜
    price_button = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="tabFilter3"]/div/div[4]/div/div/ul/li[2]/span')))
    price_button.click()
    time.sleep(2)

    # 4) 而щ윭 踰꾪듉 �꾨Ⅴ湲�
    color_category = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="ui-id-35"]')))
    color_category.click()
    time.sleep(2)

    # 5) 而щ윭 �꾪꽣 �곸슜
    color_button_1 = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="tabFilter5"]/div/div[4]/div/div/ul/li[2]/span')))
    color_button_1.click()
    color_button_2 = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="tabFilter5"]/div/div[4]/div/div/ul/li[21]/span')))
    color_button_2.click()
    time.sleep(2)

    # 6) �뺤씤 踰꾪듉 �대┃
    confirm_button = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="filterLayer"]/div/div[2]/button[2]')))
    confirm_button.click()
    time.sleep(5)

def extract_image_info(thumbnail):
    style = thumbnail['style']
    img_url = re.findall(r'(https://.*?\.jpg)', style)
    img_url = img_url[0] if img_url else None

    page_url = thumbnail['href']
    if not page_url.startswith('http'):
        page_url = 'http://www.eqlstore.com' + page_url

    # Add additional keys here
    return {
        'img_url': img_url,
        'page_url': page_url,
        'color': 'B&W',  
        'price': 100000  
    }

scrollable_element = driver.find_element(By.CSS_SELECTOR, '#prodGridListScroll > div.os-padding > div')

SCROLL_PAUSE_TIME = 2
thumbnails = []

last_height = driver.execute_script("return arguments[0].scrollHeight", scrollable_element)
apply_price_filter(driver)

seen_urls = set()
while True:
    driver.execute_script("arguments[0].scrollTop = arguments[0].scrollHeight", scrollable_element)
    time.sleep(SCROLL_PAUSE_TIME)

    new_height = driver.execute_script("return arguments[0].scrollHeight", scrollable_element)
    if new_height == last_height:
        break

    last_height = new_height

    req = driver.page_source
    soup = BeautifulSoup(req, 'html.parser')
    new_thumbnails = soup.select('a.img-viewer')

    for thumbnail in new_thumbnails:
        img_info = extract_image_info(thumbnail)
        img_url = img_info['img_url']
        if img_url is not None and img_url not in seen_urls:
            thumbnails.append(thumbnail)
            seen_urls.add(img_url)


image_info_list = [extract_image_info(thumbnail) for thumbnail in thumbnails]

image_dict = image_info_list

with open('0605_shirts_B&w.json', 'w') as f:
    json.dump(image_dict, f)

if not os.path.exists('0605_shirts_B&w'):
    os.makedirs('0605_shirts_B&w')

for i, thumbnail in enumerate(thumbnails):
    img_info = extract_image_info(thumbnail)
    img_url = img_info['img_url']
    if img_url is not None:  # Ensure that the image URL is not None before trying to download
        dload.save(img_url, f'0605_shirts_B&w/{i+1}.jpg')

driver.quit()