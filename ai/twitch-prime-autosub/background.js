// Ouve o evento de instalação para criar o alarme
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extensão instalada. Criando alarme.');
  chrome.alarms.create('checkSubStatus', {
    // delayInMinutes: 1, // Desativado para não disparar imediatamente durante o desenvolvimento
    periodInMinutes: 1440 // Repete a cada 24 horas (um dia)
  });
});

// Ouve o disparo do alarme
chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === 'checkSubStatus') {
    console.log('Alarme disparado: Verificando status do sub...');

    // 1. Buscar o streamer salvo
    const data = await chrome.storage.sync.get('streamer');
    const streamerName = data.streamer;

    if (!streamerName) {
      console.log('Nenhum streamer configurado para auto-sub. Ignorando.');
      return;
    }

    console.log(`Tentando auto-sub para o streamer: ${streamerName}`);

    // TODO: Lógica para verificar se o Prime Sub está disponível.
    // Por enquanto, vamos simular que está disponível.
    const isPrimeSubAvailable = true; // Simular disponibilidade

    if (isPrimeSubAvailable) {
      console.log('Prime Sub aparentemente disponível. Iniciando processo de subscrição...');
      // 2. Abrir nova aba para o canal da Twitch
      const twitchChannelUrl = `https://www.twitch.tv/${streamerName}`;
      let tab = await chrome.tabs.create({ url: twitchChannelUrl, active: true });

      // TODO: Injetar content script e interagir com a página
      // Esta parte será desenvolvida mais profundamente no content.js
      console.log(`Aba aberta para ${twitchChannelUrl}.`);
      // Simulação: Após um tempo, fechar a aba
      setTimeout(() => {
        chrome.tabs.remove(tab.id);
        console.log(`Aba para ${streamerName} fechada após simular sub.`);
      }, 10000); // Fechar após 10 segundos
    } else {
      console.log('Prime Sub não disponível no momento ou já utilizado. Verificarei novamente mais tarde.');
    }
  }
});