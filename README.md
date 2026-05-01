# WifeMagic

<div class="mtg-deck-box">
  <h2>Deck</h2>
  <ul>
    <li>
      2
      <a
        href="https://scryfall.com/search?q=%21Ambitious+Farmhand"
        class="mtg-card-link"
        data-image="https://api.scryfall.com/cards/named?exact=Ambitious%20Farmhand&format=image"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ambitious Farmhand // Seasoned Cathar
      </a>
    </li>
    <li>
      2
      <a
        href="https://scryfall.com/search?q=%21Bereaved+Survivor"
        class="mtg-card-link"
        data-image="https://api.scryfall.com/cards/named?exact=Bereaved%20Survivor&format=image"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bereaved Survivor // Dauntless Avenger
      </a>
    </li>
  </ul>

  <h2>Sideboard</h2>
  <ul>
    <li>
      2
      <a
        href="https://scryfall.com/search?q=%21Bonds+of+Faith"
        class="mtg-card-link"
        data-image="https://api.scryfall.com/cards/named?exact=Bonds%20of%20Faith&format=image"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bonds of Faith
      </a>
    </li>
  </ul>

  <div class="mtg-card-preview" id="mtg-card-preview">
    <img id="mtg-card-preview-img" alt="Card preview" />
  </div>
</div>

<style>
  .mtg-deck-box {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 12px 16px;
    max-width: 420px;
    background: #fafafa;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    position: relative;
  }

  .mtg-deck-box h2 {
    margin: 8px 0;
    font-size: 1.1rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 4px;
  }

  .mtg-deck-box ul {
    list-style: none;
    padding-left: 0;
    margin: 6px 0 10px;
  }

  .mtg-deck-box li {
    margin: 2px 0;
  }

  .mtg-card-link {
    color: #0055aa;
    text-decoration: none;
    cursor: pointer;
  }

  .mtg-card-link:hover {
    text-decoration: underline;
  }

  .mtg-card-preview {
    position: absolute;
    top: 8px;
    right: -260px;
    width: 250px;
    pointer-events: none;
    display: none;
    z-index: 10;
  }

  .mtg-card-preview img {
    width: 100%;
    border-radius: 6px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);
  }

  @media (max-width: 800px) {
    .mtg-card-preview {
      position: static;
      margin-top: 10px;
      right: auto;
      width: 100%;
    }
  }
</style>

<script>
  (function () {
    const links = document.querySelectorAll(".mtg-card-link");
    const preview = document.getElementById("mtg-card-preview");
    const previewImg = document.getElementById("mtg-card-preview-img");

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        const imgUrl = link.getAttribute("data-image");
        if (!imgUrl) return;
        previewImg.src = imgUrl;
        preview.style.display = "block";
      });

      link.addEventListener("mouseleave", () => {
        preview.style.display = "none";
        previewImg.removeAttribute("src");
      });
    });
  })();
</script>
