import urllib.request
from bs4 import BeautifulSoup
import re

url = "https://jichangbang.top/index.html"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
html = urllib.request.urlopen(req, timeout=15).read().decode("utf-8", errors="ignore")
soup = BeautifulSoup(html, "html.parser")

# Look for table or pricing sections
tables = soup.find_all("table")
print("Tables on index.html:", len(tables))
for t in tables:
    print("Table headers:", [th.get_text(strip=True) for th in t.find_all("th")])

# Look for price texts
prices = soup.find_all(string=re.compile(r'¥\s*\d+'))
print(f"Total price strings found on index: {len(prices)}")
for p in prices[:10]:
    print("  Price string:", p.strip(), "in tag:", p.parent.name)
