// code your solution here
function saturdayFun (activity = 'roller-skate'){
    let saturday 
    return saturday = `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity = "go to the office"){
    let monday;

    return monday = `This Monday, I will ${activity}.`
}
mondayWork('work from home');

function wrapAdjective (visual = "*"){
    return function (adjective = "special"){
        return `You are ${visual}${adjective}${visual}!`
    }
}
wrapAdjective("%")("a dedicated programmer");