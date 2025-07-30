// Get elements
const editBtn = document.getElementById("edit-btn");
const editForm = document.querySelector(".edit-profile-form");
const cancelBtn = document.getElementById("cancel-btn");

// Show edit form
editBtn.addEventListener("click", () => {
  editForm.classList.remove("hidden");
  editBtn.classList.add("hidden");
});

// Hide edit form
cancelBtn.addEventListener("click", () => {
  editForm.classList.add("hidden");
  editBtn.classList.remove("hidden");
});
