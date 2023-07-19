
import { myStars } from './stars.js';

const main = () => {
  const args = process.argv.slice(2);
  const number = parseInt(args[0], 10) || 12;
  const string = args[1] || "Sonnenschein";

  myStars(number, string);
};

main();
