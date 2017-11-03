Array.prototype.uniq = function() {
  const uniqqued = [];
  this.forEach(el => {
    if (!uniqqued.includes(el)) {
      uniqqued.push(el);
    }
  });

  return uniqqued;
};

console.log([1,1,2,3,4].uniq());


Array.prototype.test = function(){
  return 5;
};

Array.prototype.twoSum = function() {
  const result = [];
  let i = 0;
  while (i < this.length) {
    let j = i;
    while (j < this.length){
      if (this[i] + this[j] == 0){
        result.push([i,j]);
      }
      j++;
    }
    i++;

  }
  return result;


};

Array.prototype.transpose = function() {
  const result = [];
  let i = 0;
  while (i < this.length) {
    let j = 0;
    const arr = [];
    while (j < this[i].length){
      arr.push(this[j][i]);
      j++;
    }
    result.push(arr);
    i++;

  }
  return result;

};
