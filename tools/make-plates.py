# Feito por GustavoN-S (https://github.com/GustavoN-S)

import os

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'assets', 'images', 'products')

C = {
    'plate':    '#F2ECE0',
    'frame':    '#CBBEA4',
    'label':    '#8C8372',
    'ink':      '#1A1A18',
    'navy':     '#17344F',
    'navyMid':  '#24486A',
    'navyLo':   '#0E2338',
    'grey':     '#C6C2B8',
    'greyMid':  '#B0ABA0',
    'greyLo':   '#96907F',
    'white':    '#F8F5EF',
    'whiteMid': '#E7E1D4',
    'brick':    '#9C2B21',
    'brickLo':  '#7C1F17',
    'brass':    '#A98A52',
    'sand':     '#DCD2BD',
    'sea':      '#5B7F92',
    'seaLo':    '#3F6072',
    'red':      '#B23A2E',
    'cream':    '#EDE5D5',
}

def grasshopper(x, y, s, fill, opacity=1.0):
    return f'''<g transform="translate({x},{y}) scale({s})" fill="{fill}" opacity="{opacity}">
    <path d="M5 33C13 27 30 24 52 24.5c12 .3 21 1.5 26 3.5l1 9c-5 2.5-14 4-27 4C30 41 13 39 5 33Z"/>
    <path d="M78 26c9 0 15 3 15 6.5S87 39 78 39Z"/>
    <path d="M90 27c5-6 11-10 18-13M92 30c6-4 12-7 19-9" stroke="{fill}" stroke-width="2.2"
          fill="none" stroke-linecap="round"/>
    <path d="M56 27 38 3 27 7l20 23Z"/>
    <path d="M32 5 8 18" stroke="{fill}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M8 18 2 25" stroke="{fill}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <path d="M70 40l-3 12M58 41l-8 10" stroke="{fill}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  </g>'''

def plate(inner, number, caption, motif='', scale=1.6, dx=0, dy=0):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="800" height="1000" role="img" aria-label="{caption}">
  <title>{caption}</title>
  <rect width="800" height="1000" fill="{C['plate']}"/>
  <rect x="24.5" y="24.5" width="751" height="951" fill="none" stroke="{C['frame']}" stroke-width="1"/>
  <g stroke="{C['frame']}" stroke-width="1">
    <path d="M24.5 64 h34 M24.5 936 h34 M741.5 64 h34 M741.5 936 h34" opacity=".85"/>
  </g>
  <g transform="translate({400 + dx},{460 + dy}) scale({scale})">
    {inner}
  </g>
  {motif}
  <g font-family="Archivo, 'Helvetica Neue', Arial, sans-serif" font-size="17" letter-spacing="3.4" fill="{C['label']}">
    <text x="56" y="922">PLATE {number}</text>
    <text x="744" y="922" text-anchor="end">BEST OF BOSTON</text>
  </g>
  <path d="M56 890 H744" stroke="{C['frame']}" stroke-width="1"/>
  {grasshopper(682, 838, 0.40, C['frame'], 0.9)}
</svg>
'''

def wordmark(text, y, size=30, fill=None, letter=5.5, family='serif'):
    fam = ("'Libre Caslon Display','Libre Caslon Text',Georgia,serif"
           if family == 'serif' else "Archivo,'Helvetica Neue',Arial,sans-serif")
    return (f'<text x="0" y="{y}" text-anchor="middle" font-family="{fam}" '
            f'font-size="{size}" letter-spacing="{letter}" fill="{fill or C["white"]}">{text}</text>')

def skyline(cx, cy, w, fill, opacity=1.0):
    u = w / 100.0
    p = (f'M{cx-50*u} {cy} '
         f'v{-11*u} h{6*u} v{-7*u} h{7*u} v{18*u} '
         f'M{cx-37*u} {cy} v{-22*u} h{9*u} v{22*u} '
         f'M{cx-28*u} {cy} v{-14*u} h{7*u} v{14*u} '
         f'M{cx-21*u} {cy} v{-30*u} h{3*u} v{-9*u} h{5*u} v{9*u} h{3*u} v{30*u} '
         f'M{cx-10*u} {cy} v{-17*u} h{8*u} v{17*u} '
         f'M{cx-2*u} {cy} v{-26*u} l{5*u} {-8*u} l{5*u} {8*u} v{26*u} '
         f'M{cx+8*u} {cy} v{-13*u} h{9*u} v{13*u} '
         f'M{cx+17*u} {cy} v{-20*u} h{6*u} v{20*u} '
         f'M{cx+23*u} {cy} v{-9*u} h{10*u} v{9*u} '
         f'M{cx+33*u} {cy} v{-16*u} h{7*u} v{16*u} '
         f'M{cx+40*u} {cy} v{-8*u} h{10*u} v{8*u} Z')
    return f'<path d="{p}" fill="{fill}" opacity="{opacity}"/>'

def codfish(cx, cy, w, fill, opacity=1.0):
    u = w / 100.0
    body = (f'M{cx-48*u} {cy} C{cx-40*u} {cy-17*u} {cx-14*u} {cy-24*u} {cx+14*u} {cy-19*u} '
            f'C{cx+28*u} {cy-16*u} {cx+34*u} {cy-9*u} {cx+36*u} {cy-4*u} '
            f'L{cx+50*u} {cy-14*u} L{cx+46*u} {cy} L{cx+50*u} {cy+14*u} L{cx+36*u} {cy+4*u} '
            f'C{cx+33*u} {cy+10*u} {cx+24*u} {cy+17*u} {cx+8*u} {cy+19*u} '
            f'C{cx-18*u} {cy+22*u} {cx-40*u} {cy+14*u} {cx-48*u} {cy} Z')
    fin = (f'M{cx-16*u} {cy-21*u} l{7*u} {-11*u} l{11*u} {9*u} Z '
           f'M{cx-10*u} {cy+20*u} l{5*u} {10*u} l{12*u} {-7*u} Z')
    eye = f'<circle cx="{cx-34*u}" cy="{cy-4*u}" r="{2.8*u}" fill="{C["plate"]}"/>'
    return (f'<g opacity="{opacity}"><path d="{body}" fill="{fill}"/>'
            f'<path d="{fin}" fill="{fill}"/>{eye}</g>')

LONG_SLEEVE = ('M-40 -142 C-64 -140 -86 -134 -104 -124 L-196 42 '
               'C-200 52 -196 61 -186 65 L-150 83 C-140 87 -131 83 -127 73 '
               'L-96 -6 L-96 128 C-96 136 -92 140 -84 140 L84 140 '
               'C92 140 96 136 96 128 L96 -6 L127 73 C131 83 140 87 150 83 '
               'L186 65 C196 61 200 52 196 42 L104 -124 '
               'C86 -134 64 -140 40 -142 C30 -118 -30 -118 -40 -142 Z')

SHORT_SLEEVE = ('M-40 -142 C-64 -140 -86 -134 -102 -124 L-142 -42 '
                'C-146 -32 -142 -23 -132 -20 L-96 -8 L-96 128 '
                'C-96 136 -92 140 -84 140 L84 140 C92 140 96 136 96 128 '
                'L96 -8 L132 -20 C142 -23 146 -32 142 -42 L102 -124 '
                'C86 -134 64 -140 40 -142 C30 -118 -30 -118 -40 -142 Z')

def garment(body, shade, long_sleeve=True, chest='', hood=False,
            pocket=False, ringer=None):
    d = LONG_SLEEVE if long_sleeve else SHORT_SLEEVE
    cuff = ('<path d="M-214 26 L-196 84 L-116 112 L-98 50 Z"/>'
            '<path d="M214 26 L196 84 L116 112 L98 50 Z"/>') if long_sleeve else \
           ('<path d="M-160 -62 L-150 -2 L-92 12 L-88 -44 Z"/>'
            '<path d="M160 -62 L150 -2 L92 12 L88 -44 Z"/>')
    p = []
    if hood:
        p.append(f'<path d="M-78 -122 C-82 -184 -48 -216 0 -216 C48 -216 82 -184 78 -122 '
                 f'C64 -148 44 -160 0 -160 C-44 -160 -64 -148 -78 -122 Z" fill="{shade}"/>')
        p.append(f'<path d="M-78 -122 C-82 -184 -48 -216 0 -216 C48 -216 82 -184 78 -122" '
                 f'fill="none" stroke="{body}" stroke-width="7" opacity=".5"/>')
    p.append(f'<defs><clipPath id="cut"><path d="{d}"/></clipPath></defs>')
    p.append(f'<path d="{d}" fill="{body}"/>')
    p.append(f'<g clip-path="url(#cut)">')
    p.append(f'  <rect x="46" y="-230" width="280" height="480" fill="{shade}" opacity=".4"/>')
    p.append(f'  <g fill="{shade}" opacity=".8">{cuff}</g>')
    p.append(f'  <rect x="-120" y="110" width="240" height="46" fill="{shade}" opacity=".8"/>')
    if ringer:
        p.append(f'  <g fill="{ringer}">{cuff}</g>' if not long_sleeve else '')
    p.append('</g>')
    p.append(f'<path d="M-41 -143 C-30 -117 30 -117 41 -143 C30 -128 -30 -128 -41 -143 Z" fill="{shade}"/>')
    if ringer:
        p.append(f'<path d="M-40 -142 C-30 -118 30 -118 40 -142" fill="none" '
                 f'stroke="{ringer}" stroke-width="10" stroke-linecap="round"/>')
    if hood:
        p.append(f'<path d="M-13 -128 L-17 -84 M13 -128 L17 -84" stroke="{shade}" '
                 f'stroke-width="6" stroke-linecap="round" fill="none"/>')
        p.append(f'<circle cx="-18" cy="-80" r="6" fill="{shade}"/>'
                 f'<circle cx="18" cy="-80" r="6" fill="{shade}"/>')
    if pocket:
        p.append(f'<path d="M-68 30 L68 30 L62 100 L-62 100 Z" fill="none" '
                 f'stroke="{shade}" stroke-width="4" opacity=".95"/>')
    if chest:
        p.append(chest)
    return '\n    '.join(x for x in p if x)

def mug():
    return f'''<g>
    <path d="M-118 -66 C-118 -76 -110 -82 -98 -82 L98 -82 C110 -82 118 -76 118 -66
             L110 94 C108 122 92 134 62 134 L-62 134 C-92 134 -108 122 -110 94 Z" fill="{C['white']}"/>
    <path d="M40 -82 L98 -82 C110 -82 118 -76 118 -66 L110 94 C108 122 92 134 62 134 L18 134
             C48 134 62 122 64 94 Z" fill="{C['whiteMid']}"/>
    <path d="M104 -44 C160 -42 190 -18 190 16 C190 52 162 76 106 80" fill="none"
          stroke="{C['whiteMid']}" stroke-width="34" stroke-linejoin="round"/>
    <path d="M104 -44 C160 -42 190 -18 190 16 C190 52 162 76 106 80" fill="none"
          stroke="{C['white']}" stroke-width="22"/>
    <ellipse cx="0" cy="-82" rx="118" ry="26" fill="{C['whiteMid']}"/>
    <ellipse cx="0" cy="-82" rx="102" ry="19" fill="{C['sand']}"/>
    <path d="M-96 -6 H96" stroke="{C['navy']}" stroke-width="5" opacity=".85"/>
    <path d="M-96 62 H96" stroke="{C['navy']}" stroke-width="5" opacity=".85"/>
    {wordmark('BOSTON', 34, 33, C['navy'], 6)}
  </g>'''

def tote():
    return f'''<g>
    <path d="M-150 -60 L150 -60 L164 152 C165 164 158 170 146 170 L-146 170
             C-158 170 -165 164 -164 152 Z" fill="{C['cream']}"/>
    <path d="M60 -60 L150 -60 L164 152 C165 164 158 170 146 170 L74 170 Z"
          fill="{C['whiteMid']}" opacity=".8"/>
    <path d="M-150 -60 L150 -60 L152 -28 L-152 -28 Z" fill="{C['sand']}"/>
    <path d="M-98 -62 C-98 -142 -34 -142 -34 -62" fill="none" stroke="{C['navy']}"
          stroke-width="15" stroke-linecap="round"/>
    <path d="M34 -62 C34 -142 98 -142 98 -62" fill="none" stroke="{C['navy']}"
          stroke-width="15" stroke-linecap="round"/>
    {codfish(0, 50, 190, C['navy'])}
    {wordmark('SACRED COD', 128, 25, C['navy'], 6)}
  </g>'''

def ball_cap():
    return f'''<g>
    <path d="M-146 62 C-150 -32 -84 -104 0 -104 C84 -104 150 -32 146 62 Z" fill="{C['navy']}"/>
    <path d="M14 -103 C92 -96 150 -26 146 62 L40 62 C46 -14 34 -74 14 -103 Z"
          fill="{C['navyLo']}" opacity=".55"/>
    <path d="M-146 62 C-146 70 -140 76 -130 76 L130 76 C140 76 146 70 146 62 Z" fill="{C['navyLo']}"/>
    <path d="M-150 64 C-124 62 124 62 150 64 C176 78 188 104 178 124 C152 108 -152 108 -178 124
             C-188 104 -176 78 -150 64 Z" fill="{C['navyLo']}"/>
    <path d="M-150 64 C-124 62 124 62 150 64 C168 74 179 90 180 106 C150 92 -150 92 -180 106
             C-179 90 -168 74 -150 64 Z" fill="{C['navy']}"/>
    <path d="M-52 -96 C-30 -34 -30 4 -34 62 M52 -96 C30 -34 30 4 34 62" fill="none"
          stroke="{C['navyLo']}" stroke-width="3" opacity=".8"/>
    <circle cx="0" cy="-104" r="12" fill="{C['navyLo']}"/>
    {wordmark('BOS', 22, 44, C['sand'], 3)}
  </g>'''

def beanie():
    return f'''<g>
    <path d="M-134 66 C-142 -46 -74 -122 0 -122 C74 -122 142 -46 134 66 Z" fill="{C['navy']}"/>
    <path d="M18 -121 C86 -112 142 -40 134 66 L46 66 C56 -18 44 -84 18 -121 Z"
          fill="{C['navyLo']}" opacity=".5"/>
    <path d="M-142 62 L142 62 C150 62 154 68 154 78 L154 124 C154 134 150 140 142 140
             L-142 140 C-150 140 -154 134 -154 124 L-154 78 C-154 68 -150 62 -142 62 Z"
          fill="{C['sand']}"/>
    <path d="M-126 66 V136 M-84 66 V136 M-42 66 V136 M0 66 V136 M42 66 V136 M84 66 V136 M126 66 V136"
          stroke="{C['greyLo']}" stroke-width="3" opacity=".45"/>
    <circle cx="0" cy="-140" r="34" fill="{C['sand']}"/>
    <circle cx="0" cy="-140" r="34" fill="none" stroke="{C['greyLo']}" stroke-width="2" opacity=".4"/>
    {wordmark('BOSTON', 112, 26, C['navy'], 5)}
  </g>'''

def ornament():
    return f'''<g>
    <path d="M0 -168 C-26 -168 -26 -196 0 -196 C26 -196 26 -168 0 -168" fill="none"
          stroke="{C['brass']}" stroke-width="6"/>
    <rect x="-24" y="-170" width="48" height="34" rx="6" fill="{C['brass']}"/>
    <rect x="-24" y="-160" width="48" height="6" fill="{C['plate']}" opacity=".35"/>
    <circle cx="0" cy="14" r="128" fill="{C['navy']}"/>
    <path d="M40 -104 C96 -80 124 -32 118 24 C112 84 64 130 4 140 C68 122 104 74 104 20
             C104 -32 80 -78 40 -104 Z" fill="{C['navyLo']}" opacity=".5"/>
    <circle cx="0" cy="14" r="128" fill="none" stroke="{C['navyLo']}" stroke-width="3"/>
    <path d="M-118 -18 C-60 -44 60 -44 118 -18" fill="none" stroke="{C['brass']}" stroke-width="3" opacity=".85"/>
    <path d="M-118 52 C-60 78 60 78 118 52" fill="none" stroke="{C['brass']}" stroke-width="3" opacity=".85"/>
    {skyline(0, 40, 150, C['sand'])}
    {wordmark('BEACON HILL', -42, 22, C['sand'], 4)}
  </g>'''

def pint_glass():
    return f'''<g>
    <path d="M-88 -140 L88 -140 L64 158 C63 168 57 172 47 172 L-47 172
             C-57 172 -63 168 -64 158 Z" fill="{C['sea']}" opacity=".16"/>
    <path d="M-88 -140 L88 -140 L64 158 C63 168 57 172 47 172 L-47 172 C-57 172 -63 168 -64 158 Z"
          fill="none" stroke="{C['seaLo']}" stroke-width="4"/>
    <ellipse cx="0" cy="-140" rx="88" ry="19" fill="{C['plate']}" stroke="{C['seaLo']}" stroke-width="4"/>
    <path d="M-74 -60 L74 -60" stroke="{C['seaLo']}" stroke-width="2.5" opacity=".45"/>
    <path d="M56 -126 L38 146" stroke="{C['white']}" stroke-width="10" opacity=".7" stroke-linecap="round"/>
    {wordmark('BOSTON', 22, 31, C['navy'], 5)}
    <path d="M-50 44 H50" stroke="{C['brick']}" stroke-width="3"/>
    <text x="0" y="74" text-anchor="middle" font-family="Archivo,'Helvetica Neue',Arial,sans-serif"
          font-size="11" letter-spacing="3" fill="{C['navy']}" opacity=".7">CHARLES RIVER</text>
  </g>'''

def snow_globe():
    return f'''<g>
    <circle cx="0" cy="-34" r="142" fill="{C['sea']}" opacity=".2"/>
    <circle cx="0" cy="-34" r="142" fill="none" stroke="{C['seaLo']}" stroke-width="4" opacity=".8"/>
    <path d="M-142 -34 C-142 32 -80 88 0 88 C80 88 142 32 142 -34" fill="{C['sea']}" opacity=".12"/>
    {skyline(0, 44, 180, C['navy'])}
    <circle cx="-72" cy="-84" r="5" fill="{C['white']}"/>
    <circle cx="34" cy="-116" r="4" fill="{C['white']}"/>
    <circle cx="86" cy="-58" r="5" fill="{C['white']}"/>
    <circle cx="-36" cy="-42" r="4" fill="{C['white']}"/>
    <circle cx="62" cy="6" r="4" fill="{C['white']}"/>
    <circle cx="-98" cy="6" r="4" fill="{C['white']}"/>
    <path d="M-118 62 C-78 92 78 92 118 62 L142 150 C144 164 136 172 120 172
             L-120 172 C-136 172 -144 164 -142 150 Z" fill="{C['navy']}"/>
    <path d="M40 80 C76 76 104 68 118 62 L142 150 C144 164 136 172 120 172 L54 172 Z"
          fill="{C['navyLo']}" opacity=".5"/>
    <path d="M-134 114 H134" stroke="{C['brass']}" stroke-width="4"/>
    {wordmark('BOSTON', 156, 27, C['sand'], 6)}
  </g>'''

def magnet():
    return f'''<g>
    <rect x="-172" y="-118" width="344" height="236" rx="10" fill="{C['navy']}"/>
    <rect x="-156" y="-102" width="312" height="204" rx="6" fill="{C['sand']}"/>
    <rect x="-156" y="-102" width="312" height="204" rx="6" fill="none" stroke="{C['brass']}" stroke-width="3"/>
    {skyline(0, 92, 236, C['navy'])}
    {wordmark('BOSTON', -44, 44, C['navy'], 7)}
    <path d="M-96 -30 H96" stroke="{C['brick']}" stroke-width="2" opacity=".8"/>
    {wordmark('MASSACHUSETTS', -12, 13, C['brick'], 4.5)}
  </g>'''

def postcards():
    def card(rot, dx, dy, fill, accent, mark=True):
        return f'''<g transform="translate({dx},{dy}) rotate({rot})">
      <rect x="-160" y="-112" width="320" height="224" rx="4" fill="{fill}"/>
      <rect x="-160" y="-112" width="320" height="224" rx="4" fill="none" stroke="{C['frame']}" stroke-width="2"/>
      <rect x="96" y="-92" width="46" height="54" fill="none" stroke="{accent}" stroke-width="3"/>
      <path d="M104 -52 h30 M104 -62 h30 M104 -72 h30" stroke="{accent}" stroke-width="2.4"/>
      <path d="M-138 -76 h180 M-138 -54 h150 M-138 -32 h170" stroke="{C['greyLo']}" stroke-width="3" opacity=".5"/>
      <path d="M-138 22 H142" stroke="{accent}" stroke-width="2.5"/>
      {'' if not mark else f'''<text x="-138" y="70" font-family="'Libre Caslon Display','Libre Caslon Text',Georgia,serif" font-size="33" letter-spacing="3.5" fill="{accent}">BOSTON</text>'''}
    </g>'''
    return f'''<g>
    {card(-11, -40, 30, C['whiteMid'], C['greyLo'], False)}
    {card(5, -6, -4, C['white'], C['navy'], False)}
    {card(-2, 30, -46, C['plate'], C['brick'], True)}
  </g>'''

def keyring():
    return f'''<g>
    <circle cx="0" cy="-172" r="46" fill="none" stroke="{C['greyLo']}" stroke-width="12"/>
    <circle cx="0" cy="-172" r="46" fill="none" stroke="{C['grey']}" stroke-width="4.5"/>
    <path d="M0 -126 V-104" stroke="{C['greyLo']}" stroke-width="8" stroke-linecap="round"/>
    <rect x="-11" y="-108" width="22" height="20" rx="5" fill="{C['greyLo']}"/>
    <g transform="translate(0,34)">
      <path d="M-16 -136 C-40 -168 -62 -184 -86 -192 M16 -136 C40 -168 62 -184 86 -192"
            stroke="{C['brick']}" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M-34 -84 C-58 -96 -80 -96 -96 -84 M34 -84 C58 -96 80 -96 96 -84"
            stroke="{C['brick']}" stroke-width="13" fill="none" stroke-linecap="round"/>
      <path d="M-96 -92 C-120 -104 -144 -96 -148 -76 L-112 -68 Z" fill="{C['brick']}"/>
      <path d="M-96 -62 C-120 -50 -144 -58 -148 -76 L-112 -74 Z" fill="{C['brickLo']}"/>
      <path d="M96 -92 C120 -104 144 -96 148 -76 L112 -68 Z" fill="{C['brick']}"/>
      <path d="M96 -62 C120 -50 144 -58 148 -76 L112 -74 Z" fill="{C['brickLo']}"/>
      <path d="M0 -142 C22 -142 40 -122 40 -94 C40 -72 30 -58 16 -52 L-16 -52
               C-30 -58 -40 -72 -40 -94 C-40 -122 -22 -142 0 -142 Z" fill="{C['brick']}"/>
      <path d="M-38 -70 L-64 -56 M-35 -56 L-60 -38 M-30 -42 L-54 -22
               M38 -70 L64 -56 M35 -56 L60 -38 M30 -42 L54 -22"
            stroke="{C['brick']}" stroke-width="4.5" fill="none" stroke-linecap="round"/>
      <path d="M-32 -52 H32 L30 -20 H-30 Z" fill="{C['brick']}"/>
      <path d="M-30 -20 H30 L27 10 H-27 Z" fill="{C['brickLo']}" opacity=".85"/>
      <path d="M-27 10 H27 L23 40 H-23 Z" fill="{C['brick']}"/>
      <path d="M-23 40 H23 L18 66 H-18 Z" fill="{C['brickLo']}" opacity=".85"/>
      <path d="M-18 66 H18 L36 106 L13 92 L0 112 L-13 92 L-36 106 Z" fill="{C['brick']}"/>
      <circle cx="-14" cy="-118" r="5" fill="{C['plate']}"/>
      <circle cx="14" cy="-118" r="5" fill="{C['plate']}"/>
    </g>
  </g>'''

def pennant():
    return f'''<g transform="translate(-30,0)">
    <path d="M-118 -112 L232 -4 L-118 104 Z" fill="{C['navy']}"/>
    <path d="M-118 -112 L232 -4 L-118 -4 Z" fill="{C['navyMid']}" opacity=".35"/>
    <rect x="-146" y="-116" width="30" height="224" fill="{C['brick']}"/>
    <circle cx="-131" cy="-88" r="7" fill="{C['plate']}"/>
    <circle cx="-131" cy="80" r="7" fill="{C['plate']}"/>
    <path d="M-96 -70 L140 -3 M-96 46 L140 5" stroke="{C['sand']}" stroke-width="3.5" opacity=".55"/>
    <text x="-86" y="-6" font-family="'Libre Caslon Display','Libre Caslon Text',Georgia,serif"
          font-size="44" letter-spacing="3" fill="{C['sand']}">BOSTON</text>
    <text x="-84" y="26" font-family="Archivo,'Helvetica Neue',Arial,sans-serif"
          font-size="15" letter-spacing="5" fill="{C['sand']}" opacity=".85">HOCKEY CLUB</text>
  </g>'''

def puck():
    return f'''<g>
    <ellipse cx="0" cy="66" rx="160" ry="52" fill="{C['navyLo']}"/>
    <rect x="-160" y="-32" width="320" height="98" fill="{C['navyLo']}"/>
    <ellipse cx="0" cy="-32" rx="160" ry="52" fill="{C['navy']}"/>
    <ellipse cx="0" cy="-32" rx="132" ry="41" fill="none" stroke="{C['sand']}" stroke-width="3" opacity=".55"/>
    <path d="M-160 24 a160 52 0 0 0 320 0" fill="none" stroke="{C['navy']}" stroke-width="3" opacity=".5"/>
    <text x="0" y="-38" text-anchor="middle" font-family="'Libre Caslon Display','Libre Caslon Text',Georgia,serif"
          font-size="42" letter-spacing="5" fill="{C['sand']}">BOSTON</text>
    <text x="0" y="-12" text-anchor="middle" font-family="Archivo,'Helvetica Neue',Arial,sans-serif"
          font-size="16" letter-spacing="6" fill="{C['sand']}" opacity=".8">OFFICIAL WEIGHT</text>
  </g>'''

def plush_cod():
    return f'''<g>
    <path d="M-160 0 C-140 -62 -60 -92 10 -78 C60 -68 92 -40 104 -14 L162 -54 L146 0
             L162 54 L104 14 C92 40 60 68 10 78 C-60 92 -140 62 -160 0 Z" fill="{C['sea']}"/>
    <path d="M-160 0 C-140 -62 -60 -92 10 -78 C40 -72 64 -60 80 -46 C30 -58 -70 -46 -120 -6
             C-136 6 -150 8 -160 0 Z" fill="{C['seaLo']}" opacity=".4"/>
    <path d="M-74 -70 L-52 -132 L-2 -96 Z" fill="{C['sea']}"/>
    <path d="M-60 68 L-42 122 L8 92 Z" fill="{C['sea']}"/>
    <path d="M-160 0 C-140 -62 -60 -92 10 -78 C60 -68 92 -40 104 -14 L162 -54 L146 0
             L162 54 L104 14 C92 40 60 68 10 78 C-60 92 -140 62 -160 0 Z"
          fill="none" stroke="{C['seaLo']}" stroke-width="4" opacity=".7"/>
    <circle cx="-108" cy="-16" r="19" fill="{C['white']}"/>
    <circle cx="-104" cy="-16" r="9" fill="{C['ink']}"/>
    <path d="M-152 22 C-132 40 -104 44 -84 36" fill="none" stroke="{C['seaLo']}"
          stroke-width="5" stroke-linecap="round"/>
    <path d="M-62 -50 C-48 -6 -48 22 -58 50" fill="none" stroke="{C['seaLo']}"
          stroke-width="4" opacity=".7"/>
    <path d="M8 -62 C20 -20 20 18 8 56 M46 -50 C56 -18 56 12 46 44" fill="none"
          stroke="{C['seaLo']}" stroke-width="3.5" opacity=".45"/>
  </g>'''

def taffy_tin():
    return f'''<g>
    <ellipse cx="0" cy="92" rx="148" ry="44" fill="{C['brickLo']}"/>
    <rect x="-148" y="-64" width="296" height="156" fill="{C['brick']}"/>
    <rect x="-148" y="-6" width="296" height="44" fill="{C['sand']}"/>
    <ellipse cx="0" cy="-64" rx="148" ry="44" fill="{C['brickLo']}"/>
    <ellipse cx="0" cy="-70" rx="148" ry="44" fill="{C['brick']}"/>
    <ellipse cx="0" cy="-70" rx="118" ry="33" fill="none" stroke="{C['sand']}" stroke-width="3" opacity=".7"/>
    <path d="M-148 -6 H148 M-148 38 H148" stroke="{C['brickLo']}" stroke-width="3" opacity=".5"/>
    <text x="0" y="24" text-anchor="middle" font-family="'Libre Caslon Display','Libre Caslon Text',Georgia,serif"
          font-size="28" letter-spacing="2.5" fill="{C['brick']}">SALT WATER</text>
    <text x="0" y="72" text-anchor="middle" font-family="Archivo,'Helvetica Neue',Arial,sans-serif"
          font-size="14" letter-spacing="4" fill="{C['sand']}">NEW ENGLAND TAFFY</text>
  </g>'''

def candy_box():
    return f'''<g>
    <path d="M-170 -40 L0 -104 L170 -40 L0 26 Z" fill="{C['sand']}"/>
    <path d="M-170 -40 L0 26 L0 150 L-170 84 Z" fill="{C['brass']}"/>
    <path d="M170 -40 L0 26 L0 150 L170 84 Z" fill="{C['brick']}"/>
    <path d="M170 -40 L0 26 L0 150 L170 84 Z" fill="{C['brickLo']}" opacity=".25"/>
    <path d="M-170 -40 L0 -104 L170 -40" fill="none" stroke="{C['brickLo']}" stroke-width="3" opacity=".4"/>
    <g transform="translate(88,52) skewY(-21)">
      <text x="0" y="0" text-anchor="middle" font-family="'Libre Caslon Display','Libre Caslon Text',Georgia,serif"
            font-size="28" letter-spacing="3" fill="{C['sand']}">MAPLE</text>
      <text x="0" y="30" text-anchor="middle" font-family="Archivo,'Helvetica Neue',Arial,sans-serif"
            font-size="14" letter-spacing="5" fill="{C['sand']}" opacity=".85">NEW ENGLAND</text>
    </g>
    <g transform="translate(-88,52) skewY(21)">
      <path d="M-52 -14 H52 M-52 10 H52" stroke="{C['brickLo']}" stroke-width="3" opacity=".35"/>
    </g>
  </g>'''

CHEST_CREW = (f'<text x="0" y="-8" text-anchor="middle" '
              f'font-family="\'Libre Caslon Display\',\'Libre Caslon Text\',Georgia,serif" '
              f'font-size="33" letter-spacing="3.5" fill="{C["sand"]}">BOSTON</text>'
              f'<path d="M-62 4 H62" stroke="{C["sand"]}" stroke-width="1.6" opacity=".55"/>'
              f'<text x="0" y="26" text-anchor="middle" '
              f'font-family="Archivo,\'Helvetica Neue\',Arial,sans-serif" '
              f'font-size="10.5" letter-spacing="3" fill="{C["sand"]}" opacity=".8">MASSACHUSETTS</text>')

CHEST_HOOD = (f'<text x="0" y="-18" text-anchor="middle" '
              f'font-family="\'Libre Caslon Display\',\'Libre Caslon Text\',Georgia,serif" '
              f'font-size="24" letter-spacing="1.6" fill="{C["navy"]}">FANEUIL HALL</text>'
              f'<text x="0" y="4" text-anchor="middle" '
              f'font-family="Archivo,\'Helvetica Neue\',Arial,sans-serif" '
              f'font-size="10.5" letter-spacing="4" fill="{C["navy"]}" opacity=".75">EST. 1742</text>')

CHEST_TRAIL = (f'<path d="M-60 -28 C-32 -14 -14 8 -2 40" fill="none" stroke="{C["brick"]}" '
               f'stroke-width="8" stroke-linecap="round" stroke-dasharray="1 15"/>'
               f'<text x="0" y="-48" text-anchor="middle" '
               f'font-family="\'Libre Caslon Display\',\'Libre Caslon Text\',Georgia,serif" '
               f'font-size="21" letter-spacing="1.2" fill="{C["navy"]}">FREEDOM TRAIL</text>'
               f'<text x="22" y="60" text-anchor="middle" '
               f'font-family="Archivo,\'Helvetica Neue\',Arial,sans-serif" '
               f'font-size="10.5" letter-spacing="3.5" fill="{C["navy"]}" opacity=".75">2.5 MILES</text>')

CHEST_BALL = (f'<circle cx="0" cy="-12" r="46" fill="none" stroke="{C["brick"]}" stroke-width="4.5"/>'
              f'<text x="0" y="8" text-anchor="middle" '
              f'font-family="\'Libre Caslon Display\',\'Libre Caslon Text\',Georgia,serif" '
              f'font-size="56" fill="{C["brick"]}">B</text>')

CATALOG = [
    ('boston-classic-crewneck', 'Boston Classic Crewneck',
     garment(C['navy'], C['navyLo'], chest=CHEST_CREW), 1.72, 0, 20),
    ('faneuil-hall-hoodie', 'Faneuil Hall Hooded Sweatshirt',
     garment(C['grey'], C['greyMid'], hood=True, pocket=True, chest=CHEST_HOOD), 1.60, 0, 50),
    ('freedom-trail-tee', 'Freedom Trail T-Shirt',
     garment(C['white'], C['whiteMid'], long_sleeve=False, chest=CHEST_TRAIL), 1.80, 0, 20),
    ('harbor-watch-cap', 'Boston Harbor Knit Cap', beanie(), 1.85, 0, 30),
    ('north-end-ball-cap', 'North End Ball Cap', ball_cap(), 1.75, 0, 0),
    ('quincy-market-mug', 'Quincy Market Stoneware Mug', mug(), 1.85, -34, -10),
    ('sacred-cod-tote', 'Sacred Cod Canvas Tote', tote(), 1.90, 0, -20),
    ('beacon-hill-ornament', 'Beacon Hill Glass Ornament', ornament(), 1.90, 0, 46),
    ('charles-river-pint-glass', 'Charles River Pint Glass', pint_glass(), 1.95, 0, -10),
    ('boston-snow-globe', 'Boston Skyline Snow Globe', snow_globe(), 1.85, 0, 6),
    ('skyline-magnet', 'Boston Skyline Magnet', magnet(), 1.90, 0, 0),
    ('landmark-postcard-set', 'Landmark Postcard Set', postcards(), 1.70, 0, 10),
    ('harbor-lobster-keyring', 'Harbor Lobster Keyring', keyring(), 1.65, 0, 34),
    ('hockey-felt-pennant', 'Boston Hockey Felt Pennant', pennant(), 1.62, 44, 0),
    ('baseball-ringer-tee', 'Boston Baseball Ringer Tee',
     garment(C['white'], C['whiteMid'], long_sleeve=False, ringer=C['brick'],
             chest=CHEST_BALL), 1.80, 0, 20),
    ('official-weight-puck', 'Boston Official Weight Puck', puck(), 1.95, 0, -10),
    ('plush-sacred-cod', 'Plush Sacred Cod', plush_cod(), 1.95, 0, 0),
    ('salt-water-taffy-tin', 'New England Salt Water Taffy Tin', taffy_tin(), 1.95, 0, -10),
    ('maple-candy-box', 'New England Maple Candy Box', candy_box(), 1.85, 0, -14),
]

def main():
    os.makedirs(OUT, exist_ok=True)
    for i, (slug, caption, art, scale, dx, dy) in enumerate(CATALOG, start=1):
        svg = plate(art, '%02d' % i, caption, scale=scale, dx=dx, dy=dy)
        path = os.path.join(OUT, slug + '.svg')
        with open(path, 'w', encoding='utf-8') as f:
            f.write(svg)
        print('OK  %-30s %6d bytes' % (slug + '.svg', len(svg)))
    print('\n%d pranchas geradas em %s' % (len(CATALOG), os.path.normpath(OUT)))

if __name__ == '__main__':
    main()
