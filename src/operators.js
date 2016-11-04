
//rest
function rest(...matches) {
  console.log(matches);
}

rest(10, 20, 30);



//spread

function spreadSum(x, y) {
    return x + y;
}

let nums = [1, 2];

console.log(spreadSum(...nums));
