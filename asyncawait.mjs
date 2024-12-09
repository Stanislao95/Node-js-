

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
    })}
  

async function getResult() {
    try{
        const result = await Promise.all([
            luckyDraw("Carolina " , result),
            luckyDraw("joe", result),
            luckyDraw("Sabrina", result)
        ])
    }
    catch{
        console.log(error)
    }
}
getResult()