// Async Function
// Async is a special function that is designed to operate asynchronously, meaning that it can perform tasks in the background while other code continues to execute. Async functions are marked with async keyword. Async is a keyword use to turn function declaration to async function.
// Await -> The await operator is used to wait for a promise. It can only be used inside an async function within regular javascript code.

const fetchDataFromServer = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User Data Retrived from the server");
    }, 4000);
  });
};

async function getUserData() {
  try {
    const data = await fetchDataFromServer();
    console.log(data);
    console.log("Remaining Task can be executed here.");
  } catch (err) {
    console.log(err);
  }
}

getUserData().then().catch();
