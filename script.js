    let tamanhoFonte = 8;

    function alterarFonte(valor) {
      tamanhoFonte += valor;
      const elementos = document.querySelectorAll('*');
      elementos.forEach((el) => {
        if (
          !el.closest('header') &&
          !el.closest('footer') &&
          !el.classList.contains('container-zoom') &&
          !el.classList.contains('btn-diminuir') &&
          !el.classList.contains('btn-aumentar') &&
          !el.classList.contains('btn-resetar')  &&
          !el.id.includes('btn-darkmode') &&
          !el.id.includes('btn-fullscreen')
        ) {
          el.style.fontSize = tamanhoFonte + 'vmin';
        }
      });
    }

    function resetarFonte() {
      tamanhoFonte = 8;
      const elementos = document.querySelectorAll('*');
      elementos.forEach((el) => {
        if (
          !el.closest('header') &&
          !el.closest('footer') &&
          !el.classList.contains('container-zoom') &&
          !el.classList.contains('btn-diminuir') &&
          !el.classList.contains('btn-aumentar') &&
          !el.classList.contains('btn-resetar')  &&
          !el.id.includes('btn-darkmode') &&
          !el.id.includes('btn-fullscreen')
        ) {
          el.style.fontSize = tamanhoFonte + 'vmin';
        }
      });
    }

    function entrarFullscreen() {
      const btn = document.getElementById("btn-fullscreen");
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }

    function atualizarTextoFullscreen() {
      const btn = document.getElementById("btn-fullscreen");
      if (document.fullscreenElement) {
        btn.textContent = "Tela Normal";
      } else {
        btn.textContent = "Tela Cheia";
      }
    }

    document.addEventListener("fullscreenchange", atualizarTextoFullscreen);

    function toggleDarkMode() {
      const body = document.body;
      const btn = document.getElementById("btn-darkmode");
      body.classList.toggle("dark-mode");
      if (body.classList.contains("dark-mode")) {
        btn.textContent = "Desativar Modo Escuro";
      } else {
        btn.textContent = "Ativar Modo Escuro";
      }
    }