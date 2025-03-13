function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  }


const destinations = [
    "Índia", "Indonésia", "Irão", "Iraque", "Irlanda", "Islândia", "Israel", "Itália",
    "Japão", "Jamaica", "Jordânia", "França", "Brasil", "Canadá", "Alemanha", "Austrália"
];

function filterDestinations() {
    const input = document.getElementById("destinationInput").value.toLowerCase();
    const resultsContainer = document.getElementById("results");

    resultsContainer.innerHTML = "";

    if (input.length === 0) {
        resultsContainer.style.display = "none"; 
        return;
    }

    const filteredDestinations = destinations.filter(destination =>
        destination.toLowerCase().startsWith(input)
    );

    if (filteredDestinations.length > 0) {
        filteredDestinations.forEach(destination => {
            const resultItem = document.createElement("div");
            resultItem.textContent = destination;
            resultItem.onclick = () => {
                document.getElementById("destinationInput").value = destination;
                resultsContainer.style.display = "none";
            };
            resultsContainer.appendChild(resultItem);
        });
        resultsContainer.style.display = "block";
    } else {
        resultsContainer.style.display = "none"; 
    }
}

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}