const allCharacters = [
  "Special Week",
  "Silence Suzuka",
  "Tokai Teio",
  "Maruzensky",
  "Fuji Kiseki",
  "Oguri Cap",
  "Gold Ship",
  "Vodka",
  "Daiwa Scarlet",
  "Taiki Shuttle",
  "Grass Wonder",
  "Hishi Amazon",
  "Mejiro McQueen",
  "El Condor Pasa",
  "TM Opera O",
  "Narita Brian",
  "Symboli Rudolf",
  "Air Groove",
  "Agnes Digital",
  "Seiun Sky",
  "Tamamo Cross",
  "Fine Motion",
  "Biwa Hayahide",
  "Mayano Top Gun",
  "Manhattan Cafe",
  "Mihono Bourbon",
  "Mejiro Ryan",
  "Hishi Akebono",
  "Yukino Bijin",
  "Rice Shower",
  "Ines Fujin",
  "Agnes Tachyon",
  "Admire Vega",
  "Marvelous Sunday",
  "Matikanefukukitaru",
  "Meisho Doto",
  "Mejiro Dober",
  "Nice Nature",
  "King Halo",
  "Matikanetannhauser",
  "Ikuno Dictus",
  "Mejiro Palmer",
  "Daitaku Helios",
  "Twin Turbo",
  "Satono Diamond",
  "Kitasan Black",
  "Sakura Chiyono O",
  "Sirius Symboli",
  "Mejiro Ardan",
  "Yaeno Muteki",
];

const threeStarCharacters = [
  "Special Week",
  "Silence Suzuka",
  "Tokai Teio",
  "Maruzensky",
  "Fuji Kiseki",
  "Oguri Cap",
  "Taiki Shuttle",
  "Hishi Amazon",
  "Mejiro McQueen",
  "TM Opera O",
  "Narita Brian",
  "Symboli Rudolf",
  "Agnes Digital",
  "Seiun Sky",
  "Tamamo Cross",
  "Fine Motion",
  "Biwa Hayahide",
  "Manhattan Cafe",
  "Mihono Bourbon",
  "Hishi Akebono",
  "Yukino Bijin",
  "Rice Shower",
  "Ines Fujin",
  "Admire Vega",
  "Meisho Doto",
  "Mejiro Dober",
  "Matikanetannhauser",
  "Ikuno Dictus",
  "Mejiro Palmer",
  "Daitaku Helios",
  "Twin Turbo",
  "Satono Diamond",
  "Kitasan Black",
  "Sakura Chiyono O",
  "Sirius Symboli",
  "Mejiro Ardan",
  "Yaeno Muteki",
];

const freeCharacters = [
  "Gold Ship",
  "Daiwa Scarlet",
  "Vodka",
  "Sakura Bakushin O",
  "Haru Urara",
  "King Halo",
  "Agnes Tachyon",
  "Winning Ticket",
  "Mejiro Ryan",
  "Nice Nature",
  "Matikanefukukitaru",
  "Grass Wonder",
  "El Condor Pasa",
  "Air Groove",
  "Mayano Top Gun",
  "Super Creek",
];

function getRandomItems(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function randomize() {
  const threeStarCount =
    parseInt(document.getElementById("threeStarCount").value) || 0;
  const freeCount = parseInt(document.getElementById("freeCount").value) || 0;

  if (
    threeStarCount > threeStarCharacters.length ||
    freeCount > freeCharacters.length
  ) {
    alert("You selected more characters than available in one of the lists.");
    return;
  }

  const selectedThreeStar = getRandomItems(threeStarCharacters, threeStarCount);
  const selectedFree = getRandomItems(freeCharacters, freeCount);

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
        <h3>⭐ 3★ Results</h3>
        <ul>${selectedThreeStar.map((c) => `<li>${c}</li>`).join("")}</ul>

        <h3>🎁 Free Results</h3>
        <ul>${selectedFree.map((c) => `<li>${c}</li>`).join("")}</ul>
      `;
}
