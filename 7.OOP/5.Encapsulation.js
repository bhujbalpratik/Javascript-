function Counter() {
  let _count = 0;
  this.increment = () => {
    _count++;
  };
  this.decrement = () => {
    _count--;
  };
  this.getCount = () => {
    return _count;
  };
}

const counter = new Counter();

console.log(counter.getCount());
counter.increment(); // 1
counter.increment(); // 2
counter.increment(); // 3
counter.increment(); // 4
console.log(counter.getCount());
