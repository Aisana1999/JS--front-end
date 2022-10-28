let username = "john.smith";
let password = "rainbow123";

let providedUsername = "john.smith";
let providedPassword = "rainbow123";

const isUserAlreadyLoggedIn = true;
const result = username == providedUsername && password == providedPassword;

if (result) {
  console.log("Access is Granted");
} else if (isUserAlreadyLoggedIn) {
  console.log("Access is Granted as User is already logged in.");
} else {
  console.log("Incorrect Credentials");
}
