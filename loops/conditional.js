let username = "john.smith";
let password = "rainbow123";

let providedUsername = "john.smith";
let providedPassword = "rainbow123";

const result = username == providedUsername && password == providedPassword;

if (result) {
  console.log("Access is Granted");
} else {
  console.log("Incorrect Credentials");
}
