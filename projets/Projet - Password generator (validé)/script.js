function generatePassword() {
  var length = document.getElementById("length").value;
  var charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  var password = "";
  for (var i = 0; i < length; i++) {
    var char = charset.charAt(Math.floor(Math.random() * charset.length));
    password += char;
  }
  document.getElementById("password").value = password;
}

function copyToClipboard() {
  var passwordText = document.getElementById("password");
  passwordText.select();
  document.execCommand("copy");
  alert("Mot de passe copié !");
}
