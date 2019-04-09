# -* encoding: utf-8 *-

import requests
import lxml.html

response = requests.get('http://gihyo.jp')
root = lxml.html.fromstring(response.content)
print(root)

for a in root.cssselect('#mdHeading01Txt')
