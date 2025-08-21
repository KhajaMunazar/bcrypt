import bcrypt from "bcrypt";
// bcrypt is a package which secures our passwords
const password = "Khaja@123";

bcrypt.hash(password, 10, (err,hash) => {
  if (err) throw err;
  console.log("Hashed Password:", hash);
// it is used to compare the password

  bcrypt.compare(password, hash, (err, result) => {
    console.log("Password Match:", result);
  });
});