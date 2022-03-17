const formContainer = document.getElementById("form_container");
const showPassBtn = document.querySelectorAll(".fixed_right");
const showForm = () => {
  formContainer.classList.toggle("show");
};
const showPassword = (e) => {
  e.classList.toggle("fa-eye-slash");
  e.classList.toggle("fa-eye");
  parent = e.parentNode;
  elements = e.parentNode.childNodes;
  elements.forEach((element) => {
    if (element.type == "password") {
      element.type = "text";
    } else {
      element.type = "password";
    }
  });
};
