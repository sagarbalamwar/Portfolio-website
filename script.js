const scriptURL =
  "https://script.google.com/macros/s/AKfycbxB-RIdI1pG53CPFG1pzzdotyCLiNiqexYTOXI3BZHE0zIj6453AR6cNrM_ZodG_0Or/exec"
const form = document.forms["submit-to-google-sheet"]
const msg = document.getElementById("msg")
form.addEventListener("submit", (e) => {
  e.preventDefault()
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully"
      setTimeout(function () {
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    })
    .catch((error) => console.error("Error!", error.message))
})
