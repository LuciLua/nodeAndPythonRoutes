import json
import requests

# url = 'http://localhost:3000'
url = 'http://localhost:3000/fruits'

# getResult = requests.get(url)

payload = {'fruits': ['apple', 'banana', 'orange']}
postApple = requests.post(url, params=payload)

print('Status:', postApple.status_code, ' => ',  postApple.url, '\nResposta:', postApple.text)