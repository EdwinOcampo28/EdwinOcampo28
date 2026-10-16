"""Legacy asset generator placeholder for Edwin Ocampo's portfolio.

The English page textures are already personalized in public/img/pages-en/.
Do not regenerate from the original portfolio data; edit the textures or page
content deliberately before adding a new generator.
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAGES = ROOT / "public" / "img" / "pages-en"

if __name__ == "__main__":
    count = len(list(PAGES.glob("*.webp"))) if PAGES.exists() else 0
    print(f"Personalized English page textures available: {count}")
