import shutil, os, sys
from datetime import datetime

now = datetime.now()
src = os.getcwd()
dst = os.path.join(src, sys.argv[1])

content = ""
with open(os.path.join(src, "web.log"), "r") as f:
    for item in f.read():
        content += item
        # nutup stream
    f.close()
try:
    os.mkdir(dst)
except OSError as error:
    error.with_traceback(error.__traceback__)
else:
    filepath=os.path.join(dst, f"{now}.backup.log")
    os.system(f"type web.log>{filepath}")
   # with open(os.path.join(dst, f"{now}.backup.log"), "w") as w:
  #      w.write(content)
   #     w.close()


print(content)
