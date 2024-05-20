//The basic concept about 'closure.'

function createHelloWorld() {
  return () => "Hello World";
}

const tmp = createHelloWorld();
console.log(tmp());
