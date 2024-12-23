function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  })
}
luckyDraw("Carolina ").then((result) => {
  console.log(result)
})
  .then(() => {
    luckyDraw("joe").then((result) => {
      console.log(result)
    })
  })
  .then(() => {
    luckyDraw("Sabrina").then((result) => {
      console.log(result)
    })
  })
  .catch((error) => {
    console.log(error)
  })