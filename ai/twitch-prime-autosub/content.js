// Este script será injetado na página da Twitch
console.log('Auto Twitch Sub: Content script carregado na página da Twitch.');

/**
 * Tenta encontrar e clicar no botão de inscrição com Prime.
 * @returns {boolean} True se o botão foi encontrado e clicado, false caso contrário.
 */
function tryClickPrimeSubButton() {
    console.log('Content Script: Tentando encontrar o botão "Inscrever-se com Prime"...');

    // Seletor para o botão de inscrição com Prime.
    // Este seletor pode mudar, é um ponto de fragilidade!
    const primeSubButton = document.querySelector(
        'button[data-a-target="prime-subscribe-button"], ' +
        'button[data-test-selector="prime-subscribe-button"], ' +
        'button[aria-label="Inscrever-se com Prime"]'
        // Adicionar outros seletores se necessário
    );

    if (primeSubButton) {
        console.log('Content Script: Botão "Inscrever-se com Prime" encontrado!');
        primeSubButton.click();
        console.log('Content Script: Botão clicado. Verifique o pop-up de confirmação.');
        return true;
    } else {
        console.log('Content Script: Botão "Inscrever-se com Prime" NÃO encontrado.');
        // Pode ser útil para depuração:
        // console.log(document.body.innerHTML);
        return false;
    }
}

// Executa a função após a página carregar completamente
window.addEventListener('load', () => {
    // Dá um pequeno tempo para elementos dinâmicos carregarem
    setTimeout(() => {
        tryClickPrimeSubButton();
    }, 3000); // Tenta clicar após 3 segundos
});

// Também pode tentar executar em intervalos se a página for SPA e elementos carregarem dinamicamente
/*
let attempts = 0;
const maxAttempts = 5;
const intervalId = setInterval(() => {
    if (tryClickPrimeSubButton() || attempts >= maxAttempts) {
        clearInterval(intervalId);
    }
    attempts++;
}, 2000); // Tenta a cada 2 segundos, 5 vezes
*/
