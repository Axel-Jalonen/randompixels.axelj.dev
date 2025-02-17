function generateNoise() {
  const width = parseInt(document.getElementById('width').value) || 500;
  const height = parseInt(document.getElementById('height').value) || 500;
  const canvas = document.getElementById('noiseCanvas');
  const ctx = canvas.getContext('2d');

  canvas.width = width;
  canvas.height = height;

  const imageData = ctx.createImageData(width, height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    data[i] = Math.random() * 255;     // Red
    data[i + 1] = Math.random() * 255; // Green
    data[i + 2] = Math.random() * 255; // Blue
    data[i + 3] = 255;                 // Alpha (fully opaque)
  }

  ctx.putImageData(imageData, 0, 0);
  console.log("Image Generated");
}

const generate_button = document.getElementById("generate-button");
generate_button.addEventListener("click", generateNoise);

window.onload = generateNoise;
