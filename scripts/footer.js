const currentDate = new Date;
const email = "spacetramp@gmx.de";

const footer = document.querySelector('footer');
footer.innerHTML =
    `<p>©${currentDate.getFullYear()} spaceartistde</p>
     <p>Peter Kästel</p>
     <p><a href="mailto:${email}">${email}</p>`;