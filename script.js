//your JS code here. If required.
document.getElementById("enterBtn").addEventListener("click", () => {
      const statusElement = document.getElementById("status");

      // Create a new h1 element
      const h1 = document.createElement("h1");
      h1.id = "status"; // Maintain the same ID
      h1.textContent = "Entered Metaverse";

      // Replace the <p> element with the new <h1> element
      statusElement.replaceWith(h1);
    });