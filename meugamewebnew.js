const levelButtons = document.querySelectorAll(".nextLevel");
const commandInput = document.getElementById("commandInput");
const executeCommandButton = document.getElementById("executeCommand");
const babyState = document.getElementById("babyState");
const babyActions = document.getElementById("babyActions");
const peeBabyButton = document.getElementById("peeBaby");
const poopBabyButton = document.getElementById("poopBaby");
const changeDiaperButton = document.getElementById("changeDiaper");
const backButton = document.getElementById("backButton");

let babyClean = true;
let babyExist = false;  // Variável para controlar a existência do bebê

// Função para exibir o estado do bebê
const updateBabyState = () => {
    if (babyClean) {
        babyState.textContent = "O bebê está limpo.";
    } else {
        babyState.textContent = "O bebê precisa de cuidados.";
    }
};

// Ações do bebê
peeBabyButton.addEventListener("click", function() {
    if (babyExist && babyClean) {
        babyState.textContent = "file:// O bebê fez xixi 💧😭";
        babyClean = false;
    }
});

poopBabyButton.addEventListener("click", function() {
    if (babyExist && babyClean) {
        babyState.textContent = "file:// O bebê fez cocô 💩 😡";
        babyClean = false;
    }
});

changeDiaperButton.addEventListener("click", function() {
    if (!babyClean) {
        babyState.textContent = "file:// A fralda foi trocada, o bebê está limpo.";
        babyClean = true;
    }
});

// Exibir e gerenciar a tela de comandos
executeCommandButton.addEventListener("click", function() {
    const command = commandInput.value.trim().toLowerCase();
    const errorMessage = document.getElementById("errorMessage");

    if (command === "/baby") {
        if (!babyExist) {
            alert("Bebê adicionado ao jogo!");
            babyState.textContent = "O bebê está limpo.";
            babyExist = true;  // Adiciona o bebê
            babyActions.style.display = "block"; // Exibir ações do bebê
            errorMessage.textContent = ""; // Limpar mensagens de erro
        } else {
            errorMessage.textContent = "Já existe um bebê no jogo!";
        }
    } else if (command === "/delete") {
        if (babyExist) {
            alert("Bebê removido do jogo!");
            babyState.textContent = "";
            babyExist = false; // Remove o bebê
            babyClean = true;  // Resetando o estado do bebê
            babyActions.style.display = "none"; // Oculta ações do bebê
            errorMessage.textContent = ""; // Limpar mensagens de erro
        } else {
            errorMessage.textContent = "Não há bebê no jogo para remover!";
        }
    } else if (command === "/help") {
        alert("Comandos disponíveis:\n/baby - Adiciona um bebê ao jogo\n/delete - Remove o bebê\n/help - Exibe os comandos disponíveis");
        errorMessage.textContent = ""; // Limpar mensagens de erro
    } else {
        errorMessage.textContent = "Comando desconhecido. Digite '/help' para ver os comandos.";
    }

    commandInput.value = ""; // Limpar o campo de entrada após o comando
});

// Voltar à tela inicial
backButton.addEventListener("click", function() {
    document.getElementById("commandsScreen").style.display = "none";
    document.getElementById("startScreen").style.display = "block";
});

// Navegação entre as telas
document.getElementById("commandsButton").addEventListener("click", function() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("commandsScreen").style.display = "block";
});

// Navegar para os níveis (simplesmente exibe alertas por enquanto)
levelButtons.forEach(button => {
    button.addEventListener("click", function() {
        const level = button.getAttribute("data-level");
        alert(`Você entrou no Nível ${level}`);
    });
});
