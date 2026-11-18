#!/usr/bin/env python3
"""Generate Trivia or Nada app icons + splash screens from the De Nada master art.

Master: W.'s final icon artwork (1254x1254 JPG) - De Nada over the TRIVIA or NADA
title inside a gold rounded frame on dark navy. The artwork itself is never
redrawn or recoloured; this script only scales/places it and pads with the
artwork's own sampled background navy.

Usage: python3 scripts/generate-icons.py /path/to/master.jpg
Outputs:
  assets/icon.png (1024 master) + assets/splash.png (2732 master)
  iOS AppIcon + Splash imageset (existing filenames preserved)
  Android mipmap ic_launcher / ic_launcher_round / ic_launcher_foreground
  Android splash.png in every existing drawable bucket (sizes preserved)
"""
import sys, os
from PIL import Image, ImageDraw

MASTER = sys.argv[1]
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')

art = Image.open(MASTER).convert('RGB')
assert art.size == (1254, 1254), art.size

# Sample the artwork's own outer background (ring outside the gold frame)
pts = []
for x in range(0, 1254, 7):
    pts.append(art.getpixel((x, 3))); pts.append(art.getpixel((x, 1250)))
for y in range(0, 1254, 7):
    pts.append(art.getpixel((3, y))); pts.append(art.getpixel((1250, y)))
NAVY = tuple(round(sum(c) / len(pts)) for c in zip(*pts))
print('sampled navy:', NAVY, '#%02x%02x%02x' % NAVY)
LANCZOS = Image.LANCZOS

def save(im, path):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    im.save(path)
    print(' ', os.path.relpath(path, ROOT), im.size, im.mode)

# ---- Icon master: 1024x1024, opaque, artwork at 92% so the whole gold frame
# sits inside the store corner-mask safe area (~4% margin), navy fill around it.
icon = Image.new('RGB', (1024, 1024), NAVY)
inner = art.resize((942, 942), LANCZOS)
icon.paste(inner, (41, 41))
save(icon, os.path.join(ROOT, 'assets/icon.png'))

# ---- Splash master: 2732x2732, artwork centred at 60% on the navy field.
splash = Image.new('RGB', (2732, 2732), NAVY)
s = 1639
splash.paste(art.resize((s, s), LANCZOS), ((2732 - s) // 2, (2732 - s) // 2))
save(splash, os.path.join(ROOT, 'assets/splash.png'))

# ---- iOS (existing single-icon appiconset + 3-file splash imageset)
save(icon, os.path.join(ROOT, 'ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png'))
for name in ('splash-2732x2732.png', 'splash-2732x2732-1.png', 'splash-2732x2732-2.png'):
    save(splash, os.path.join(ROOT, 'ios/App/App/Assets.xcassets/Splash.imageset', name))

# ---- Android
RES = os.path.join(ROOT, 'android/app/src/main/res')
DENS = {  # folder: (launcher px, adaptive foreground px)
    'mipmap-mdpi': (48, 108), 'mipmap-hdpi': (72, 162), 'mipmap-xhdpi': (96, 216),
    'mipmap-xxhdpi': (144, 324), 'mipmap-xxxhdpi': (192, 432),
}
for folder, (lp, fp) in DENS.items():
    d = os.path.join(RES, folder)
    # legacy launcher: the opaque icon master, full-bleed
    save(icon.resize((lp, lp), LANCZOS).convert('RGBA'), os.path.join(d, 'ic_launcher.png'))
    # round launcher: same art under a circular alpha mask
    rnd = icon.resize((lp, lp), LANCZOS).convert('RGBA')
    mask = Image.new('L', (lp * 4, lp * 4), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, lp * 4, lp * 4), fill=255)
    rnd.putalpha(mask.resize((lp, lp), LANCZOS))
    save(rnd, os.path.join(d, 'ic_launcher_round.png'))
    # adaptive foreground: framed artwork centred at 68% on transparency
    # (mirrors the previous foreground's content ratio; background colour
    #  ic_launcher_background was updated to the sampled navy to match)
    fg = Image.new('RGBA', (fp, fp), (0, 0, 0, 0))
    fs = round(fp * 0.68)
    fg.paste(art.resize((fs, fs), LANCZOS).convert('RGBA'), ((fp - fs) // 2, (fp - fs) // 2))
    save(fg, os.path.join(d, 'ic_launcher_foreground.png'))

# Android splash screens: keep every existing bucket + exact pixel size,
# navy field with the artwork centred at 72% of the short side.
for folder in sorted(os.listdir(RES)):
    p = os.path.join(RES, folder, 'splash.png')
    if not os.path.isfile(p):
        continue
    w, h = Image.open(p).size
    canvas = Image.new('RGB', (w, h), NAVY)
    side = round(0.72 * min(w, h))
    canvas.paste(art.resize((side, side), LANCZOS), ((w - side) // 2, (h - side) // 2))
    save(canvas, p)
print('done')
