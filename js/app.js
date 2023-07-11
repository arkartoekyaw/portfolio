var birthDate = new Date("1996-11-17");
var today = new Date();
var age = today.getFullYear() - birthDate.getFullYear();

// Check if the birthday hasn't occurred yet this month
if (
  today.getMonth() < birthDate.getMonth() ||
  (today.getMonth() === birthDate.getMonth() && today.getDate() <= birthDate.getDate())
) {
  age--;
}


document.getElementById("age").innerText = age;
