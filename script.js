document.getElementById("enterBtn").addEventListener("click", () => {
      const p = document.getElementById("status");

      const h1 = document.createElement("h1");
      h1.id = "status";
      h1.textContent = "Entered Metaverse";

      p.replaceWith(h1);