// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    return Math.abs(pickup - 42)
   }
   
   function distanceFromHqInFeet (pickup) {
     const blocks = distanceFromHqInBlocks(pickup)
     return blocks * 264;
   }

   function distanceTravelledInFeet(start, end) {
    const distTravelled = Math.abs(start-end)
    return distTravelled * 264;
  }

  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance < 400) {
        return 0
      } else if (distance > 400 && distance < 2000) {
        return (distance - 400) * 0.02
      } else if (distance > 2500) {
        return 'cannot travel that far'
      } else if (distance > 2000) {
        return 25
      }
    }