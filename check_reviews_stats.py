import os
import glob

files = glob.glob('src/content/reviews/*.md')
for f in sorted(files):
    with open(f, encoding="utf-8") as fp:
        lines = fp.readlines()
        chars = sum(len(line) for line in lines)
        print(f"{os.path.basename(f):16}: {len(lines):4} lines, {chars:5} chars")
