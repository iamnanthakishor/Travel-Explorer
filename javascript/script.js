
const destinations = [
    {
        id: 1,
        name: "Adam's Peak",
        country: "Sri Lanka",
        category: "Mountain",
        description: "Discover the beauty of Adam's Peak, one of Sri Lanka's most famous mountain destinations.",
        image: "https://images.unsplash.com/photo-1653151106766-52f14da3bb68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        duration: "2-3 Days"
    },
    {
        id: 2,
        name: "Ella",
        country: "Sri Lanka",
        category: "Nature",
        description: "Discover beautiful green mountains, scenic railway journeys, waterfalls and the famous Nine Arch Bridge.",
        image: "https://images.unsplash.com/photo-1598955890270-d77cdb06d2bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        duration: "6-7 Days"
    },
    {
        id: 3,
        name: "Sigiriya",
        country: "Sri Lanka",
        category: "Nature",
        description: "Explore the ancient Lion Rock fortress, beautiful gardens and breathtaking views of Sri Lanka.",
        image: "https://images.unsplash.com/photo-1711100360031-24aaccbcd408?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        duration: "1-2 Days"
    },
    {
        id: 4,
        name: "Mirissa",
        country: "Sri Lanka",
        category: "Beach",
        description: "Relax on golden beaches, enjoy ocean views and experience exciting whale watching adventures.",
        image: "https://images.unsplash.com/photo-1580910527739-556eb89f9d65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        duration: "2-3 Days"
    },
    {
        id: 5,
        name: "Kandy",
        country: "Sri Lanka",
        category: "City",
        description: "Experience Sri Lankan culture, visit the Temple of the Tooth and enjoy the beautiful Kandy Lake.",
        image: "https://images.unsplash.com/photo-1626091022888-485eb96c494a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        duration: "1-2 Days"
    },
    {
        id: 6,
        name: "Nuwara Eliya",
        country: "Sri Lanka",
        category: "Nature",
        description: "Enjoy cool weather, tea plantations, colonial architecture and peaceful mountain scenery.",
        image: "https://images.unsplash.com/photo-1764600276944-537340511979?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        duration: "2 Days"
    },
    {
        id: 7,
        name: "Galle",
        country: "Sri Lanka",
        category: "City",
        description: "Walk through the historic Galle Fort, explore charming streets and enjoy coastal architecture.",
        image: "https://images.unsplash.com/photo-1509982724584-2ce0d4366d8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        duration: "1-2 Days"
    },
    {
        id: 8,
        name: "Arugam Bay",
        country: "Sri Lanka",
        category: "Beach",
        description: "A beautiful coastal destination famous for surfing, relaxing beaches and tropical atmosphere.",
        image: "https://images.unsplash.com/photo-1503384861219-7f20f2f111cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        duration: "2-4 Days"
    },
    {
        id: 9,
        name: "Horton Plains",
        country: "Sri Lanka",
        category: "Nature",
        description: "Discover beautiful grasslands, cloud forests and the spectacular viewpoint known as World's End.",
        image: "https://images.unsplash.com/photo-1783309615767-3512c9d5d2f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        duration: "1 Day"
    },
    {
        id: 10,
        name: "Yala National Park",
        country: "Sri Lanka",
        category: "Wildlife",
        description: "Experience the wild life adventure Truck Ride with the wild animals.",
        image: "https://images.unsplash.com/photo-1656159625990-8cd23231c218?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        duration: "2-3 Days"
    },
    {
        id: 11,
        name: "Trincomalee",
        country: "SriLanka",
        category: "Beach",
        description: "Experience tropical beaches and beautiful temples",
        image: "https://images.unsplash.com/photo-1558446791-ac5fec3caddf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        duration: "4-6 Days"
    },
    {
        id: 12,
        name: "Pasikuda",
        country: "Sri Lanka",
        category: "Beach",
        description: "A beautiful coastal destination famous for surfing, relaxing beaches and tropical atmosphere",
        image: "https://images.unsplash.com/photo-1596967829313-0fe1918d3358?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        duration: "3-5 Days"
    },
];


const destinationGrid = document.getElementById("destination-grid");
const searchInput = document.getElementById("search-input");
const filterButtons = document.querySelectorAll(".filter-btn");
const resultCount = document.getElementById("result-count");
const emptyMessage = document.getElementById("empty-message");
const clearButton = document.getElementById("clear-search");

const modal = document.getElementById("destination-modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalDescription = document.getElementById("modal-description");
const modalLocation = document.getElementById("modal-location");
const modalClose = document.getElementById("modal-close");
const modalFavorite = document.getElementById("modal-favorite");

let selectedCategory = "All";
let searchTerm = "";
let currentDestination = null;


let favorites = [];

try {
    const savedFavorites = JSON.parse(
        localStorage.getItem("travelExplorerFavorites") || "[]"
    );

    if (Array.isArray(savedFavorites)) {
        favorites = savedFavorites.filter(id =>
            destinations.some(destination => destination.id === id)
        );
    }
} catch (error) {
    favorites = [];
}


function saveFavorites() {
    localStorage.setItem(
        "travelExplorerFavorites",
        JSON.stringify(favorites)
    );
}


function displayDestinations(list) {

    destinationGrid.innerHTML = "";

    resultCount.textContent = list.length;

    emptyMessage.hidden = list.length !== 0;

    list.forEach(destination => {

        const isFavorite = favorites.includes(destination.id);

        const card = document.createElement("article");

        card.className = "destination-card";

        card.innerHTML = `
            <div class="card-image">

                <img
                    src="${destination.image}"
                    alt="${destination.name}, ${destination.country}"
                    loading="lazy"
                >

                <span class="category-tag">
                    ${destination.category}
                </span>

                <button
                    class="favorite-btn ${isFavorite ? "favorited" : ""}"
                    data-favorite="${destination.id}"
                    aria-label="${isFavorite ? "Remove from" : "Add to"} favorites"
                    aria-pressed="${isFavorite}"
                >
                    ${isFavorite ? "♥" : "♡"}
                </button>

            </div>

            <div class="card-content">

                <div class="card-location">
                    📍 ${destination.country}
                </div>

                <h3>${destination.name}</h3>

                <p>${destination.description}</p>

                <div class="card-bottom">

                    <span>🕒 ${destination.duration}</span>

                    <button
                        class="details-button"
                        data-details="${destination.id}"
                    >
                        Explore More →
                    </button>

                </div>

            </div>
        `;

        destinationGrid.appendChild(card);

    });

}


function filterDestinations() {

    const filtered = destinations.filter(destination => {

        const matchesCategory =
            selectedCategory === "All" ||
            destination.category === selectedCategory;

        const searchText = `
            ${destination.name}
            ${destination.country}
            ${destination.category}
            ${destination.description}
        `.toLowerCase();

        const matchesSearch =
            searchText.includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;

    });

    displayDestinations(filtered);

}


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        selectedCategory = button.dataset.category;

        filterDestinations();

    });

});


searchInput.addEventListener("input", () => {

    searchTerm = searchInput.value.trim();

    filterDestinations();

});


clearButton.addEventListener("click", () => {

    searchInput.value = "";

    searchTerm = "";

    selectedCategory = "All";

    filterButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.category === "All"
        );

    });

    filterDestinations();

    searchInput.focus();

});


function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites = favorites.filter(item => item !== id);

    } else {

        favorites.push(id);

    }

    saveFavorites();

    filterDestinations();

    if (currentDestination && currentDestination.id === id) {
        updateModalFavoriteButton();
    }

}

function updateModalFavoriteButton() {

    if (!currentDestination) return;

    const isFavorite = favorites.includes(currentDestination.id);

    modalFavorite.textContent = isFavorite
        ? "♥ Remove from Favorites"
        : "♡ Add to Favorites";

}

function openDestination(id) {

    const destination = destinations.find(
        item => item.id === id
    );

    if (!destination) return;

    currentDestination = destination;

    modalImage.src = destination.image;
    modalImage.alt = destination.name;

    modalTitle.textContent = destination.name;

    modalCategory.textContent =
        destination.category.toUpperCase();

    modalDescription.textContent =
        destination.description;

    modalLocation.textContent =
        "📍 " + destination.country +
        "  |  🕒 " + destination.duration;

    updateModalFavoriteButton();

    modal.classList.add("open");

    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    modalClose.focus();

}

function closeModal() {

    modal.classList.remove("open");

    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    currentDestination = null;

}

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", event => {

    if (event.target === modal) {

        closeModal();

    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape" && modal.classList.contains("open")) {

        closeModal();

    }

});


modalFavorite.addEventListener("click", () => {

    if (currentDestination) {

        toggleFavorite(currentDestination.id);

    }

});


destinationGrid.addEventListener("click", event => {

    const favoriteButton = event.target.closest("[data-favorite]");

    const detailsButton = event.target.closest("[data-details]");

    if (favoriteButton) {

        const id = Number(favoriteButton.dataset.favorite);

        toggleFavorite(id);

        return;

    }

    if (detailsButton) {

        const id = Number(detailsButton.dataset.details);

        openDestination(id);

    }

});

function initializeWebsite() {

    displayDestinations(destinations);

    console.log("Travel Explorer successfully initialized!");

    console.log(
        `${destinations.length} destinations loaded.`
    );

}

initializeWebsite();
