"""Run once after you know your GitHub Pages address:
   python3 set_url.py https://USERNAME.github.io/REPOSITORY
(user site: https://USERNAME.github.io). No trailing slash."""
import sys,pathlib
old="https://YOUR-USERNAME.github.io/YOUR-REPO"
new=sys.argv[1].rstrip("/")
n=0
for f in pathlib.Path(".").rglob("*"):
    if f.suffix in(".html",".xml",".txt",".md") and f.is_file():
        t=f.read_text(encoding="utf-8")
        if old in t: f.write_text(t.replace(old,new),encoding="utf-8"); n+=1
print("Updated",n,"files")