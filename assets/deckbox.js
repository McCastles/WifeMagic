document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".mtg-card-link");
  const preview = document.getElementById("mtg-card-preview");
  const previewImg = document.getElementById("mtg-card-preview-img");

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      const imgUrl = link.dataset.image;
      if (!imgUrl) return;
      previewImg.src = imgUrl;
      preview.style.display = "block";
    });

    link.addEventListener("mouseleave", () => {
      preview.style.display = "none";
      previewImg.removeAttribute("src");
    });
  });
});
