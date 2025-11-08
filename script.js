const raceCourses = [
  "Sapporo 1200 m・Turf",
  "Sapporo 1500 m・Turf",
  "Sapporo 1800 m・Turf",
  "Sapporo 2000 m・Turf",
  "Sapporo 2600 m・Turf",
  "Sapporo 1000 m・Dirt",
  "Sapporo 1700 m・Dirt",
  "Sapporo 2400 m・Dirt",
  "Hakodate 1000 m・Turf",
  "Hakodate 1200 m・Turf",
  "Hakodate 1800 m・Turf",
  "Hakodate 2000 m・Turf",
  "Hakodate 2600 m・Turf",
  "Hakodate 1000 m・Dirt",
  "Hakodate 1700 m・Dirt",
  "Hakodate 2400 m・Dirt",
  "Niigata 1000 m・Turf",
  "Niigata 1200 m・Turf・Inner",
  "Niigata 1400 m・Turf・Inner",
  "Niigata 1600 m・Turf・Outer",
  "Niigata 1800 m・Turf・Outer",
  "Niigata 2000 m・Turf・Inner",
  "Niigata 2000 m・Turf・Outer",
  "Niigata 2200 m・Turf・Inner",
  "Niigata 2400 m・Turf・Inner",
  "Niigata 1200 m・Dirt",
  "Niigata 1800 m・Dirt",
  "Niigata 2500 m・Dirt",
  "Fukushima 1200 m・Turf",
  "Fukushima 1800 m・Turf",
  "Fukushima 2000 m・Turf",
  "Fukushima 2600 m・Turf",
  "Fukushima 1150 m・Dirt",
  "Fukushima 1700 m・Dirt",
  "Fukushima 2400 m・Dirt",
  "Nakayama 1200 m・Turf・Outer",
  "Nakayama 1600 m・Turf・Outer",
  "Nakayama 1800 m・Turf・Inner",
  "Nakayama 2000 m・Turf・Inner",
  "Nakayama 2200 m・Turf・Outer",
  "Nakayama 2500 m・Turf・Inner",
  "Nakayama 3600 m・Turf・Inner",
  "Nakayama 1200 m・Dirt",
  "Nakayama 1800 m・Dirt",
  "Nakayama 2400 m・Dirt",
  "Nakayama 2500 m・Dirt",
  "Tokyo 1400 m・Turf",
  "Tokyo 1600 m・Turf",
  "Tokyo 1800 m・Turf",
  "Tokyo 2000 m・Turf",
  "Tokyo 2300 m・Turf",
  "Tokyo 2400 m・Turf",
  "Tokyo 2500 m・Turf",
  "Tokyo 3400 m・Turf",
  "Tokyo 1300 m・Dirt",
  "Tokyo 1400 m・Dirt",
  "Tokyo 1600 m・Dirt",
  "Tokyo 2100 m・Dirt",
  "Tokyo 2400 m・Dirt",
  "Chukyo 1200 m・Turf",
  "Chukyo 1400 m・Turf",
  "Chukyo 1600 m・Turf",
  "Chukyo 2000 m・Turf",
  "Chukyo 2200 m・Turf",
  "Chukyo 1200 m・Dirt",
  "Chukyo 1400 m・Dirt",
  "Chukyo 1800 m・Dirt",
  "Chukyo 1900 m・Dirt",
  "Kyoto 1200 m・Turf・Inner",
  "Kyoto 1400 m・Turf・Inner",
  "Kyoto 1400 m・Turf・Outer",
  "Kyoto 1600 m・Turf・Inner",
  "Kyoto 1600 m・Turf・Outer",
  "Kyoto 1800 m・Turf・Outer",
  "Kyoto 2000 m・Turf・Inner",
  "Kyoto 2200 m・Turf・Outer",
  "Kyoto 2400 m・Turf・Outer",
  "Kyoto 3000 m・Turf・Outer",
  "Kyoto 3200 m・Turf・Outer",
  "Kyoto 1200 m・Dirt",
  "Kyoto 1400 m・Dirt",
  "Kyoto 1800 m・Dirt",
  "Kyoto 1900 m・Dirt",
  "Hanshin 1200 m・Turf・Inner",
  "Hanshin 1400 m・Turf・Inner",
  "Hanshin 1600 m・Turf・Outer",
  "Hanshin 1800 m・Turf・Outer",
  "Hanshin 2000 m・Turf・Inner",
  "Hanshin 2200 m・Turf・Inner",
  "Hanshin 2400 m・Turf・Outer",
  "Hanshin 2600 m・Turf・Outer",
  "Hanshin 3000 m・Turf・Inner",
  "Hanshin 1200 m・Dirt",
  "Hanshin 1400 m・Dirt",
  "Hanshin 1800 m・Dirt",
  "Hanshin 2000 m・Dirt",
  "Hanshin 3200 m・Turf・Outer",
  "Kokura 1200 m・Turf",
  "Kokura 1800 m・Turf",
  "Kokura 2000 m・Turf",
  "Kokura 2600 m・Turf",
  "Kokura 1000 m・Dirt",
  "Kokura 1700 m・Dirt",
  "Kokura 2400 m・Dirt",
  "Ooi 1200 m・Dirt",
  "Ooi 1800 m・Dirt",
  "Ooi 2000 m・Dirt",
  "Kawasaki 1400 m・Dirt",
  "Kawasaki 1600 m・Dirt",
  "Kawasaki 2100 m・Dirt",
  "Funabashi 1000 m・Dirt",
  "Funabashi 1600 m・Dirt",
  "Funabashi 1800 m・Dirt",
  "Funabashi 2400 m・Dirt",
  "Morioka 1200 m・Dirt",
  "Morioka 1600 m・Dirt",
  "Morioka 1800 m・Dirt",
  "Morioka 2000 m・Dirt",
  "Longchamp 2400 m・Turf",
  "Santa Anita Park 2000 m・Turf",
];

const seasons = ["Fall", "Spring", "Summer", "Winter"];
const weathers = ["Cloudy", "Rainy", "Sunny", "Snowy"];
const conditions = ["Firm", "Wet"];

function randomizeRace() {
  const raceCourse =
    raceCourses[Math.floor(Math.random() * raceCourses.length)];
  const season = 
    seasons[Math.floor(Math.random() * seasons.length)];
  const weather =
    season !== "Winter"
      ? weathers[Math.floor(Math.random() * weathers.length - 1)]
      : "Snowy";
  const condition =
    weather !== "Rainy" && weather !== "Snowy"
      ? conditions[Math.floor(Math.random() * conditions.length)]
      : "Wet";

  const result = `
🏁 Race Course: ${raceCourse}
🌸 Season: ${season}
🌦️ Weather: ${weather}
🌿 Condition: ${condition}
  `;

  document.getElementById("result").textContent = result;
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("generateBtn")
    .addEventListener("click", randomizeRace);
});
