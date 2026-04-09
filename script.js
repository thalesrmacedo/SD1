// Inicializa o mapa
const map = L.map('map').setView([-23.68946763487012, -46.55296332469925], 15);

// Adiciona o tile layer do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Adiciona um marcador na localização da loja
L.marker([-23.68946763487012, -46.55296332469925])
  .addTo(map)
  .bindPopup("Faculdade Anhanguera de SBC<br>R. Atlântica, 731 - Jardim do Mar, São Bernardo do Campo - SP, 09750-480")
  .openPopup();
