// Just need to know what 'rest parameter' is.
const args = [{}, null, "3"];

function argumentsLength(...args) {
  return args.length;
}

console.log(argumentsLength(...args));
