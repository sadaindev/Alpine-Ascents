// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault();

//     alert("Your feedback was submitted!");

//     this.reset();
// });


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    Swal.fire({
        title: "Thank You!",
        text: "Your feedback was submitted successfully.",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#198754",
        background: "#ffffff",
        color: "#333333"
    });

    this.reset();
});