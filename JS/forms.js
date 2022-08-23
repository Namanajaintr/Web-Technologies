let login = () => {
  console.log("function");
  let emailid = document.getElementById("email").value;
  console.log(emailid);
  let pwdid = document.getElementById("password").value;
  console.log(pwdid);
  if (emailid === "" && pwdid === "") {
    alert("please enter the values");
  } else {
    alert("log on successful");
  }
};
