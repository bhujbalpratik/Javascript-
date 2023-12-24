// Asynchronous Actions are the actions that javascript allows certain operations to be executed independantly from the main program flow.
// Javascript gives techniques callbacks,promises,and async/await which allow developers to handle asynchronus operations more efficiently

// Synchronous actions are the actions that initiate and finish one by one. Operations run one after another.Normal functions is synchronus functions like add(); multiply();

// Synchronous functions
/*
const SynchronousFunc = () => {
  const FirstFunc = () => console.log("First");
  const SecondFunc = () => console.log("Second");
  const ThirdFunc = () => console.log("Third");

  FirstFunc();
  SecondFunc();
  ThirdFunc();
};

SynchronousFunc();
 */

// Asynchronous functions
const AsynchronousFunc = () => {
  const FirstFunc = () => console.log("First");
  const SecondFunc = () => {
    setTimeout(() => {
      console.log("second");
    }, 3000);
  };
  const ThirdFunc = () => console.log("Third");
  FirstFunc();
  SecondFunc();
  ThirdFunc();
};

AsynchronousFunc();
