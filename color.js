class Color {
    constructor(r, g, b) {
      this.r = r;
      this.g = g;
      this.b = b;
    }
  
    rgb() {
      return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
  
    hex() {
      const hex = (c) => c.toString(16).padStart(2, "0");
      return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
    }
  
    rgba(a) {
      return `rgba(${this.r}, ${this.g}, ${this.b}, ${a})`;
    }
  }
  
  function updateColor() {
    const color = new Color(
      parseInt(document.getElementById("red").value),
      parseInt(document.getElementById("green").value),
      parseInt(document.getElementById("blue").value)
    );
    const alpha = parseFloat(document.getElementById("alpha").value);
  
    document.getElementById("color-box").style.backgroundColor = color.rgba(alpha);

    const hexCode = color.hex();
  document.getElementById("hex-code").innerText = hexCode;
  }
  
  document.getElementById("update-button").addEventListener("click", updateColor);
  
  const color = new Color(255, 0, 0); // Skapa en röd färg
console.log(color.rgb()); // Returnerar "rgb(255, 0, 0)"
console.log(color.hex()); // Returnerar "#ff0000"
console.log(color.rgba(0.5)); // Returnerar "rgba(255, 0, 0, 0.5)"
