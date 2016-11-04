
//hoisting vs blocks | const


function isSoccerMatch(bool) {
  if (bool) {
    var res = 'Delete all properties';
    console.log(res);
  } else {
    console.log(res);
  }
}

isSoccerMatch(false);
