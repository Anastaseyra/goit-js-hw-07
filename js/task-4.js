const docForm = document.querySelector(".login-form");

docForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
    const objForm = {};
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
  
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
    };

  const key = [...form.querySelectorAll(".label-input")];
  const arayKey = key.map(elem => elem.name);

    objForm[arayKey[0]] = email;
    objForm[arayKey[1]] = password;

 console.log(objForm)
    form.reset();
    
  }