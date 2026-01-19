document.addEventListener('DOMContentLoaded', () => {
    const streamerNameInput = document.getElementById('streamerName');
    const saveButton = document.getElementById('saveButton');
    const currentStreamerDiv = document.getElementById('currentStreamer');

    // Carrega e exibe o streamer salvo ao abrir o popup
    chrome.storage.sync.get('streamer', (data) => {
        if (data.streamer) {
            currentStreamerDiv.textContent = `Streamer salvo: ${data.streamer}`;
        } else {
            currentStreamerDiv.textContent = 'Nenhum streamer salvo.';
        }
    });

    // Salva o novo streamer ao clicar no botão
    saveButton.addEventListener('click', () => {
        const streamer = streamerNameInput.value;
        if (streamer) {
            chrome.storage.sync.set({ streamer: streamer }, () => {
                currentStreamerDiv.textContent = `Streamer salvo: ${streamer}`;
                streamerNameInput.value = ''; // Limpa o campo
            });
        }
    });
});
