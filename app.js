// Variables
const clientList = document.getElementById("client-list");
const taskList = document.getElementById("task-list");

// Écouter le formulaire d'ajout de client
document.getElementById("add-client-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("client-name").value;
    const sector = document.getElementById("client-sector").value;
    const products = document.getElementById("client-products").value;
    const email = document.getElementById("client-email").value;
    const phone = document.getElementById("client-phone").value;

    const clientItem = document.createElement("li");
    clientItem.textContent = `${name} - ${sector} - ${products} - ${email} - ${phone}`;
    clientList.appendChild(clientItem);

    // Réinitialiser le formulaire
    document.getElementById("add-client-form").reset();
});

// Écouter le formulaire d'ajout de tâche
document.getElementById("add-task-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const clientName = document.getElementById("task-client").value;
    const description = document.getElementById("task-description").value;
    const dueDate = document.getElementById("task-due-date").value;

    const taskItem = document.createElement("li");
    taskItem.textContent = `${clientName} - ${description} - Due: ${dueDate}`;
    taskList.appendChild(taskItem);

    // Réinitialiser le formulaire
    document.getElementById("add-task-form").reset();
});

