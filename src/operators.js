
//rest
function rest(...matchIds) {
  return matchIds;
}

console.log(rest(9955705, 9955706, 9955707));

//spread
function spreadSum(x, y) {
    return x + y;
}

let matchIds = [9955705, 9955706];
console.log(spreadSum(...match));
