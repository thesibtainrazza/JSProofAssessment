/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
let animeCharactersNFTs = [];
function mintNFT(characterName, animeName, ability, characteristics) {

  const nft = {
    characterName: characterName,
    animeName: animeName,
    ability: ability,
    characteristics: characteristics
  };

  animeCharactersNFTs.push(nft);
  console.log("Just Minted : " + characterName);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {

  for (let i = 0; i < animeCharactersNFTs.length; i++) {
    console.log("--------------------------------------");

    console.log((i + 1) + ":")
    console.log("Name: " + animeCharactersNFTs[i].characterName + "\n")
    console.log("Anime name: " + animeCharactersNFTs[i].animeName + "\n")
    console.log("Abilities : " + animeCharactersNFTs[i].ability + "\n")
    console.log("Charactersitics : " + animeCharactersNFTs[i].characteristics + "\n")

  }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return animeCharactersNFTs.length;

}


// call your functions below this line


mintNFT("Monkey D. Luffy", "One Piece", "Gum Gum Fruit", "Determined and energetic");
mintNFT("Rononoa Zoro", "One Piece", "Master swordsmen", "Loyal and strong");
mintNFT("Gon Freecss", "Hunter x Hunter", "Enhanced human abilities", "Curious and Optimistic");
mintNFT("Eren Yeager", "Attack on Titan", "Titan Transformation", "Determined and Vengeful");


listNFTs();


console.log("------------------------------------------");
console.log("|                                         |");
console.log("|The number of NFTs in the network are : " + getTotalSupply() + "|")
console.log("|                                         |");
console.log("------------------------------------------");



