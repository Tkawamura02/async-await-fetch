let rand;
function getRandomNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      rand = Math.floor(Math.random() * 1000000);
      resolve();

    }, 500);

  });
}

async function print(callback) {
	await callback();
	console.log(rand);
}

print(getRandomNumber);
