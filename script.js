document.getElementById("rsvp-btn").onclick = function () {
    document.getElementById("rsvp-modal").style.display = "block";
};

document.getElementsByClassName("close-btn")[0].onclick = function () {
    document.getElementById("rsvp-modal").style.display = "none";
};

window.onclick = function (event) {
    if (event.target == document.getElementById("rsvp-modal")) {
        document.getElementById("rsvp-modal").style.display = "none";
    }
};

document.getElementById("rsvp-form").onsubmit = function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const guests = document.getElementById("guests").value;
    alert(`Thank you, ${name}! You've RSVP'd for ${guests} guest(s).`);
    document.getElementById("rsvp-modal").style.display = "none";
    document.getElementById("rsvp-form").reset();
};