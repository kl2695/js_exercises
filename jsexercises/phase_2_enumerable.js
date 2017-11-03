Array.prototype.myEach = function (callback) {
  let i = 0;
  while (i < this.length) {
    callback(this[i]);
    i++;
  }
  return this;
};

[1,2].myEach(el => 1 + el);

Array.prototype.myMap = function (callback) {
  let result = [];

  this.myEach(function(el){
    result.push(callback(el));
  });

  return result;
};

Array.prototype.myReduce = function (callback, initialValue) {
  let acc;

  if (initialValue === null){
      acc = this[0];
  }else{
     acc = initialValue;
  }

  this.myEach(function(el){
    if (initialValue === null) {
      initialValue = 1;
    }else{
    acc = callback(acc, el);
    }
  });

  return acc;
};
