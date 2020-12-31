function warnTheSheep(queue) {
  const wolfIndex = queue.indexOf("wolf")
return  wolfIndex === queue.length-1 ?  "Pls go away and stop eating my sheep":
  `Oi! Sheep number ${(queue.length-1) - wolfIndex}! You are about to be eaten by a wolf!`
  
}