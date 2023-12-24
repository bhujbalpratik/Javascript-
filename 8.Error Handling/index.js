const parseJSON = (jsonString) => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.log(`An error occured while parsing json : ${error}`);
  }
};

const ValidJSON = `{"name":"pratik","email":"pb@gmail.com","password":"1234567890"}`;

const invalidJSON = `{"name":"pratik","email":"pb@gmail.com","password":"1234567890",}`;

const result = parseJSON(invalidJSON);

console.log(result);
