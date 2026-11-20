import json

with open("src/data/all_plans.json", "r", encoding="utf-8") as f:
    data = json.load(f)

total = 0
for brand, plans in data.items():
    print(f"{brand:12}: {len(plans):2} plans")
    total += len(plans)

print(f"Total plans: {total}")
