const { BEER_DATA } = require('./beer-data.js');

function getRandomBeer() {
  const beerIndex = Math.floor(Math.random() * BEER_DATA.length);
  const beer = BEER_DATA[beerIndex];
  const output = `Your random beer is a ${beer.name} from ${beer.brewery}. The style is ${beer.style} and it has an ABV of ${beer.abv}.`;
  return output;
}
