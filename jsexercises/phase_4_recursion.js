function range(start, end){
  if (start === end){
    return [start];
  }

  return range(start, end - 1).concat([end]);
}

function sumRec(arr){
  if(arr.length === 1){
    return arr[0];
  }
  return sumRec(arr.slice(0,arr.length-1)) + arr[arr.length-1];
}

function exponent1(base,exp){
  if(exp === 0){
    return 1;
  }else{
    return exponent1(base,exp-1) * base;
  }
}

function fibonacci(n){
  if (n===1){
    return [0];
  }else if(n === 2){
    return [0,1];
  }else{
    return fibonacci(n-1).concat([fibonacci(n-1)[n-2] + fibonacci(n-1)[n-3]]);
  }
}

function bsearch(array, target) {

  if (!array.includes(target)) {
    return null;
  }

  let mid = Math.floor(array.length/2);

  if (array[mid] === target) {
    return mid;
  }

  if (array[mid] > target) {
    return bsearch(array.slice(0, mid));
  }

  if(array[mid] < target) {
    return bsearch(array.slice(mid + 1, array.length)) + array.slice(0, mid + 1).length;
  }
}
