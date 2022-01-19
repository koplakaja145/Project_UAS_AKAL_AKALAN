function validate () {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "admin" && password == "admin12345") {
    alert("Welcome, Admin!!");
    window.location("index_admin.html");
  } else {
    alert("Loh, Anda Siapa?");
  }
}