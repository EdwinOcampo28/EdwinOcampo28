"""Portfolio asset helper for Edwin Ocampo.

The page artwork is already generated and stored in public/img/pages/.
This safe helper reports the current assets instead of overwriting them.
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAGES = ROOT / "public" / "img" / "pages"

if __name__ == "__main__":
    count = len(list(PAGES.glob("*.webp"))) if PAGES.exists() else 0
    print(f"Personalized Spanish page textures available: {count}")
