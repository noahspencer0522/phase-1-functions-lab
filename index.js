function distanceFromHqInBlocks (blockNumber){
    console.log("blockNumber", blockNumber)
    if (blockNumber > 42){
        return blockNumber - 42
    } else {
        return 42 - blockNumber
    }   
}
function distanceFromHqInFeet (blockNumber){
const distanceInBlocks = distanceFromHqInBlocks (blockNumber)
return distanceInBlocks * 264
}
function distanceTravelledInFeet(block1, block2){
    let blockToBlock 
    if (block2 >= block1){
        blockToBlock = block2 - block1
    }
    else{
       blockToBlock = block1 - block2
    }
return (264 * blockToBlock)
}
function calculatesFarePrice (start, destination){
    let feetTravelled = distanceTravelledInFeet (start, destination)
    if (feetTravelled <= 400){
        return 0

    } else if (feetTravelled > 400 && feetTravelled < 2000){
        return 2.56
    } else if (feetTravelled >2000 && feetTravelled <2500){
        return 25
    } else {
        return 'cannot travel that far'
    }


}