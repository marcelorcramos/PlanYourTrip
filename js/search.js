const destinations = [
    "Afeganistão", "África do Sul", "Albânia", "Alemanha", "Andorra", "Angola", "Antígua e Barbuda", 
    "Arábia Saudita", "Argélia", "Argentina", "Armênia", "Austrália", "Áustria", "Azerbaijão", 
    "Bahamas", "Bangladesh", "Barbados", "Bélgica", "Belize", "Benim", "Bielorrússia", "Bolívia", 
    "Bósnia e Herzegovina", "Botsuana", "Brasil", "Brunei", "Bulgária", "Burkina Faso", "Burundi", 
    "Butão", "Cabo Verde", "Camarões", "Camboja", "Canadá", "Catar", "Cazaquistão", "Chade", "Chile", 
    "China", "Chipre", "Colômbia", "Comores", "Coreia do Norte", "Coreia do Sul", "Costa do Marfim", 
    "Costa Rica", "Croácia", "Cuba", "Dinamarca", "Djibouti", "Dominica", "Egito", "El Salvador", 
    "Emirados Árabes Unidos", "Equador", "Eritreia", "Escólia", "Eslováquia", "Eslovênia", "Espanha", 
    "Estados Unidos", "Estônia", "Eswatini", "Etiópia", "Fiji", "Filipinas", "Finlândia", "França", 
    "Gabão", "Gâmbia", "Gana", "Geórgia", "Granada", "Grécia", "Guatemala", "Guiana", "Guiné", 
    "Guiné Equatorial", "Guiné-Bissau", "Haiti", "Honduras", "Hungria", "Iêmen", "Ilhas Marshall", 
    "Ilhas Salomão", "Índia", "Indonésia", "Irã", "Iraque", "Irlanda", "Islândia", "Israel", "Itália", 
    "Jamaica", "Japão", "Jordânia", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letônia", "Líbano", 
    "Libéria", "Líbia", "Liechtenstein", "Lituânia", "Luxemburgo", "Macedônia do Norte", "Madagáscar", 
    "Malásia", "Malawi", "Maldivas", "Mali", "Malta", "Marrocos", "Maurícia", "Mauritânia", "México", 
    "Micronésia", "Moçambique", "Moldávia", "Mônaco", "Mongólia", "Montenegro", "Myanmar", "Namíbia", 
    "Nauru", "Nepal", "Nicarágua", "Níger", "Nigéria", "Noruega", "Nova Zelândia", "Omã", "Países Baixos", 
    "Palau", "Panamá", "Papua-Nova Guiné", "Paquistão", "Paraguai", "Peru", "Polônia", "Portugal", 
    "Quênia", "Quirguistão", "Reino Unido", "República Centro-Africana", "República Democrática do Congo", 
    "República Dominicana", "República Tcheca", "Romênia", "Ruanda", "Rússia", "Samoa", "San Marino", 
    "Santa Lúcia", "São Cristóvão e Névis", "São Tomé e Príncipe", "São Vicente e Granadinas", "Seicheles", 
    "Senegal", "Serra Leoa", "Sérvia", "Singapura", "Síria", "Somália", "Sri Lanka", "Suazilândia", 
    "Sudão", "Sudão do Sul", "Suécia", "Suíça", "Suriname", "Tailândia", "Taiwan", "Tajiquistão", 
    "Tanzânia", "Timor-Leste", "Togo", "Tonga", "Trinidad e Tobago", "Tunísia", "Turcomenistão", 
    "Turquia", "Tuvalu", "Ucrânia", "Uganda", "Uruguai", "Uzbequistão", "Vanuatu", "Vaticano", 
    "Venezuela", "Vietnã", "Zâmbia", "Zimbábue"
];

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
}

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

function confirmSearch() {
    const inputValue = document.getElementById("destinationInput").value;

    const date = document.getElementById("datePicker").value;
    const adults = document.getElementById("adults").value;
    const children = document.getElementById("children").value;
    const rooms = document.getElementById("rooms").value;
    const includeType = document.getElementById("includeType").value;

    if (inputValue) {
        showPopup(inputValue, date, adults, children, rooms, includeType);
    } else {
        alert("Por favor, insira um destino.");
    }
}

function showPopup(country, date, adults, children, rooms, includeType) {
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupInfo = document.getElementById("popup-info");
    const popupFilters = document.getElementById("popup-filters");

    popupTitle.textContent = country;
    popupInfo.textContent = `Informações sobre ${country}. Aqui você pode adicionar detalhes específicos sobre o país.`;

    popupFilters.innerHTML = `
        <strong>Data da Viagem:</strong> ${date || "Não informado"}<br>
        <strong>Adultos:</strong> ${adults}<br>
        <strong>Crianças:</strong> ${children}<br>
        <strong>Quartos:</strong> ${rooms}<br>
        <strong>Incluir:</strong> ${includeType}<br>
    `;

    popup.style.display = "flex";
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}