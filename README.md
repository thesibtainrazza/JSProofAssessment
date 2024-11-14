# Anime Characters NFT Collection

This JavaScript project creates a simple collection of anime character NFTs. Each NFT represents a character with metadata, including the character's name, anime series, abilities, and characteristics. 

## Description

The Anime Characters NFT Collection implements basic functionalities to mint, list, and manage NFTs using JavaScript. It includes:
- A variable to store all minted NFTs.
- A `mintNFT` function to create an NFT with metadata and store it in an array.
- A `listNFTs` function to display all NFTs' metadata.
- A `getTotalSupply` function to return the total number of NFTs created.

This project serves as an introductory example of NFT creation and management using JavaScript.

## Getting Started

### Executing the Program

1. Copy the code into a JavaScript file (e.g., `animeNFTCollection.js`).
2. Run the file in a JavaScript environment (e.g., Node.js) to execute the program.

### Example Code

```javascript
// Create an array to hold NFT objects
let animeCharactersNFTs = [];

// Function to mint a new NFT
function mintNFT(characterName, animeName, ability, characteristics) {
  const nft = {
    characterName,
    animeName,
    ability,
    characteristics,
  };
  animeCharactersNFTs.push(nft);
  console.log("Just Minted: " + characterName);
}

// Function to list all NFTs
function listNFTs() {
  animeCharactersNFTs.forEach((nft, index) => {
    console.log(`NFT ${index + 1}`);
    console.log("Name:", nft.characterName);
    console.log("Anime Name:", nft.animeName);
    console.log("Ability:", nft.ability);
    console.log("Characteristics:", nft.characteristics);
  });
}

// Function to get total supply of NFTs
function getTotalSupply() {
  return animeCharactersNFTs.length;
}

// Minting NFTs
mintNFT("Monkey D. Luffy", "One Piece", "Gum Gum Fruit", "Determined and energetic");
mintNFT("Rononoa Zoro", "One Piece", "Master swordsman", "Loyal and strong");
mintNFT("Gon Freecss", "Hunter x Hunter", "Enhanced human abilities", "Curious and optimistic");
mintNFT("Eren Yeager", "Attack on Titan", "Titan Transformation", "Determined and vengeful");

// Listing NFTs and displaying total supply
listNFTs();
console.log("Total NFTs in Collection:", getTotalSupply());
