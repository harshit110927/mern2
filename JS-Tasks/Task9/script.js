document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const userTableBody = document.getElementById("userTableBody");

    // Handle form submission
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const contact = document.getElementById("contact").value;
            const address = document.getElementById("address").value;

            const user = { name, email, contact, address };

            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));

            alert("User Registered Successfully!");

            form.reset();
        });
    }

    // Display users in table
    if (userTableBody) {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        users.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.contact}</td>
                <td>${user.address}</td>
            `;
            userTableBody.appendChild(row);
        });
    }
});
