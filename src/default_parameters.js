
//def par function


function applyDiscoutToPackage(cost) {
  let discount = discount || 0.5;
  let finalCost = cost - (cost * discount);
  console.log(finalCost);
}

applyDiscoutToPackage(100);
