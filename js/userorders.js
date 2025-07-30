// Dummy data for demonstration
const orders = [
  {
    id: "#123456",
    date: "July 28",
    items: 3,
    total: "$42.99",
    status: "shipped",
  },
  {
    id: "#987654",
    date: "July 20",
    items: 1,
    total: "$15.99",
    status: "delivered",
  },
  {
    id: "#111111",
    date: "July 18",
    items: 2,
    total: "$29.50",
    status: "processing",
  },
  {
    id: "#222222",
    date: "July 15",
    items: 4,
    total: "$58.90",
    status: "processing",
  },
  {
    id: "#333333",
    date: "July 10",
    items: 2,
    total: "$19.00",
    status: "delivered",
  },
];

const ordersList = document.getElementById("ordersList");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const searchInput = document.getElementById("searchInput");
const statusFilter = document.getElementById("statusFilter");
const modal = document.getElementById("orderModal");
const closeBtn = document.querySelector(".close");

let visibleCount = 3;

// Render orders to DOM
function renderOrders() {
  ordersList.innerHTML = "";
  const search = searchInput.value.toLowerCase();
  const filter = statusFilter.value;

  const filteredOrders = orders.filter((order) => {
    const matchSearch = order.id.toLowerCase().includes(search);
    const matchStatus = filter === "" || order.status === filter;
    return matchSearch && matchStatus;
  });

  const visibleOrders = filteredOrders.slice(0, visibleCount);

  visibleOrders.forEach((order) => {
    const card = document.createElement("div");
    card.classList.add("order-card");
    card.innerHTML = `
      <div class="order-info">
        <p><strong>Order ID:</strong> ${order.id}</p>
        <p><strong>Date:</strong> ${order.date}</p>
        <p><strong>Status:</strong> <span class="status ${order.status}">${order.status}</span></p>
      </div>
      <div class="order-summary">
        <p><strong>Items:</strong> ${order.items}</p>
        <p><strong>Total:</strong> ${order.total}</p>
        <button class="view-btn" onclick="openModal('${order.id}', ${order.items}, '${order.total}', '${order.status}')">View Details</button>
      </div>
    `;
    ordersList.appendChild(card);
  });

  loadMoreBtn.style.display =
    visibleCount >= filteredOrders.length ? "none" : "block";
}

// Open modal with order details
function openModal(id, items, total, status) {
  modal.style.display = "block";
  modal.querySelector(
    "p:nth-of-type(1)"
  ).innerHTML = `<strong>Order ID:</strong> ${id}`;
  modal.querySelector(
    "p:nth-of-type(2)"
  ).innerHTML = `<strong>Items:</strong> ${items}`;
  modal.querySelector(
    "p:nth-of-type(3)"
  ).innerHTML = `<strong>Total:</strong> ${total}`;
  modal.querySelector(
    "p:nth-of-type(4)"
  ).innerHTML = `<strong>Status:</strong> ${status}`;
}

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Print invoice
document.querySelector(".print-btn").addEventListener("click", () => {
  window.print();
});

// Events
loadMoreBtn.addEventListener("click", () => {
  visibleCount += 2;
  renderOrders();
});
searchInput.addEventListener("input", renderOrders);
statusFilter.addEventListener("change", renderOrders);

// Initial render
renderOrders();
