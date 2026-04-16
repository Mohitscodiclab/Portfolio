# ✦ DrawFlow — Infinite Canvas Drawing App

A fully offline, dependency-free drawing application inspired by Excalidraw.  
Built with pure **HTML5 Canvas + CSS + Vanilla JavaScript** — no frameworks, no CDN, no backend.

---

## 🚀 Quick Start

### Run Locally (Offline)
```bash
# Option 1: Just double-click
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux

# Option 2: Serve locally (optional)
npx serve .            # Node.js
python3 -m http.server # Python
```

> **No internet required.** Everything runs from `index.html`.

---

### Deploy to GitHub Pages

1. Fork or push this repo to GitHub
2. Go to **Settings → Pages**
3. Set Source to `main` branch, `/ (root)` folder
4. Save — your app is live at `https://<username>.github.io/<repo>/`

---

## ✨ Features

### Drawing Tools
| Tool | Shortcut | Description |
|------|----------|-------------|
| Select | `V` | Select, move, resize elements |
| Pencil | `P` | Freehand smooth drawing |
| Rectangle | `R` | Draw rectangles (Shift = square) |
| Ellipse | `C` | Draw ellipses (Shift = circle) |
| Line | `L` | Straight lines (Shift = snap angle) |
| Arrow | `A` | Lines with arrowheads |
| Text | `T` | Click to type, multiline support |
| Eraser | `E` | Click elements to erase them |

### Canvas Controls
- **Pan** — Space + drag, or middle-mouse drag
- **Zoom** — Scroll wheel, `+`/`-` keys, toolbar buttons
- **Zoom Reset** — `0` key or click the zoom % label
- **Fit View** — Reset zoom button

### Selection
- **Click** — Select element
- **Shift+Click** — Add to selection
- **Drag on empty** — Rubber-band multi-select
- **Ctrl+A** — Select all
- **Arrow keys** — Nudge (Shift+Arrow = 10px steps)
- **Delete / Backspace** — Delete selected
- **Double-click text** — Re-edit text

### Style Panel (Left Sidebar)
- 🎨 **Stroke color** — 7 presets + custom color picker
- 🪣 **Fill color** — Transparent + 5 presets + custom
- 📏 **Stroke width** — 1–20px slider
- 💧 **Opacity** — 10–100% slider
- ✏️ **Roughness** — Clean / Sketch / Wild (hand-drawn effect)
- 🔤 **Font size** — 10–72px (text tool only)

### Layers
- **Bring to Front** — Move selected elements to top
- **Send to Back** — Move selected elements to bottom

### History
- **Undo** — `Ctrl+Z` (up to 80 steps)
- **Redo** — `Ctrl+Y` or `Ctrl+Shift+Z`

### File Operations
| Action | Shortcut | Description |
|--------|----------|-------------|
| Save JSON | `Ctrl+S` | Download drawing as `.json` file |
| Load JSON | — | Upload previously saved `.json` |
| Export PNG | `Ctrl+E` | Download as image |

### Auto-Save
Your work is **automatically saved** to `localStorage` on every change.  
Reloading the page restores your last session.

### UI Toggles
- **Dark Mode** — `D` key or toolbar button
- **Grid** — `G` key or toolbar button (dot grid, snaps drawing)
- **Escape** — Deselect all / cancel current action

---

## 📁 Project Structure

```
excalidraw-clone/
├── index.html      ← Main application entry point
├── style.css       ← Complete UI styling (CSS variables, dark mode)
├── script.js       ← All application logic (~700 lines)
├── assets/         ← (empty — no external assets needed)
└── README.md       ← This file
```

---

## 🎮 Keyboard Shortcuts Reference

```
V          Select tool          G          Toggle Grid
P          Pencil               D          Toggle Dark Mode
R          Rectangle            0          Reset Zoom
C          Ellipse              +/-        Zoom In/Out
L          Line                 ←↑↓→      Nudge selected (1px)
A          Arrow                Shift+←↑↓→ Nudge selected (10px)
T          Text                 Ctrl+A     Select all
E          Eraser               Ctrl+S     Save JSON
Escape     Deselect/Cancel      Ctrl+E     Export PNG
Delete     Delete selected      Ctrl+Z     Undo
Space+Drag Pan canvas           Ctrl+Y     Redo
```

### While Drawing
- **Shift+drag** (Rect/Circle): Constrain to square/circle
- **Shift+drag** (Line/Arrow): Snap to 45° angles
- **Shift+click** (Select): Add to selection

---

## 🏗️ Architecture Notes

### Code Organization (`script.js`)

| Section | Purpose |
|---------|---------|
| State | Single source of truth (`STATE` object) |
| Seeded Random | Deterministic rough drawing effects |
| Rough Helpers | Sketch-style bezier curves for shapes |
| Element Factories | `makeRect()`, `makePencil()` etc. |
| Bounding Box | `getBounds()` — used for selection & export |
| Renderer | `drawElement()` dispatches per type |
| Hit Testing | `hitTest()` — point-in-element detection |
| Resize Handles | 8-point selection handle system |
| History | Snapshot-based undo/redo (JSON diff) |
| File I/O | JSON save/load, PNG export, localStorage |
| Keyboard | Full shortcut system |

### Coordinate System
- **World coordinates**: The infinite canvas space
- **Screen coordinates**: Pixels on the actual `<canvas>` element
- Transform: `screen = world × zoom + pan`

### Roughness Effect
Each element has a `seed` value. The seeded Mulberry32 PRNG generates
consistent bezier control-point offsets so rough shapes look the same
on every render without flickering.

---

## 🔒 Privacy
All data stays on your device. No network requests are made.  
LocalStorage is used only for session persistence.

---

## 📜 License
MIT — Use freely, modify freely.
