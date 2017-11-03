
Array.prototype.bubbleSort = function(){
  // console.log(this);
  let i = 0;

  let sorted = false;

  while (sorted === false){
    sorted = true;
    const arr = this;
    (function bubbleUp() {
          let j=0;

          while(j < arr.length-1){
            if (arr[j] > arr[j+1]){
              let temp = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp;
              sorted = false;
            }
            j++;
          }
        })();
      i++;
  }

  return this;


};


String.prototype.subStrings = function() {
  // const string = this;
  // console.log(this);
  const substrings = [];
  let i = 0;

  while (i < this.length) {
    let j = 0;
    while (j < this.length) {
      if (j < i){

      }else{
      substrings.push(this.slice(i, j + 1));
      }
      j++;
    }
    i++;
  }
  return substrings;
};
