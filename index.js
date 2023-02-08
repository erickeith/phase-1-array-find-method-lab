// code your solution here

function superbowlWin(array) {
    const checker = array.find(check => check.result === 'W')
    console.log(checker)
}