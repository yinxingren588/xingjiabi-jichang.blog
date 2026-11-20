import re

content = open("src/data/airports.ts", "r", encoding="utf-8").read()
# Match id, name, tagline, features
pattern = r'id:\s*"([^"]+)",\s*name:\s*"([^"]+)",[\s\S]*?tagline:\s*"([^"]+)",[\s\S]*?features:\s*\[([\s\S]*?)\]'
matches = re.findall(pattern, content)

for m in matches:
    print(f"\nID: {m[0]} | Name: {m[1]}")
    print(f"  Tagline: {m[2]}")
    feats = [f.strip().strip('"').strip("'") for f in m[3].split(",") if f.strip()]
    print(f"  Features ({len(feats)}):")
    for feat in feats[:4]:
        print(f"    - {feat}")
