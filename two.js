const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input the number of families : ", (numb) => {
  rl.question("Input the number of members in the family : ", (members) => {
    const maxPassengersOfBus = 4
    const membersList = members.split(' ')
    let passenggers = 0
      membersList.forEach(el => passenggers = passenggers + +el)
    if (+numb !== membersList.length) {
      console.log('Input must be equal with count of family')
    } else {
      const minimumBus = Math.ceil(passenggers / maxPassengersOfBus)
      console.log(`Minimum bus required is: ${minimumBus}`)
    }
  })
})