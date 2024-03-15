document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.Pimg');
    const paragraph = document.querySelector('p');
    const nameCharacter = document.querySelector('h2');
    const principal = document.querySelector('.principal');
    let currentOpacity = 1; // Opacidade atual da imagem principal

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const imgSrc = this.getAttribute('data-img');
            const text = this.getAttribute('data-text');
            const name = this.getAttribute('data-name')


            //altera o texto da tag h2

            nameCharacter.textContent = name; 

            // Altera o texto da tag p
            paragraph.textContent = text;

            // Inicia o intervalo para transição suave de opacidade
            const interval = setInterval(() => {
                currentOpacity -= 0.05; // Diminui a opacidade atual
                principal.style.opacity = currentOpacity; // Aplica a nova opacidade à imagem principal

                if (currentOpacity <= 0) {
                    // Ao atingir uma opacidade mínima, atualiza a imagem de fundo
                    clearInterval(interval); // Interrompe o intervalo
                    principal.style.backgroundImage = `url(${imgSrc})`; // Aplica a nova imagem de fundo
                    fadeIn(); // Chama a função para aumentar a opacidade da nova imagem
                }
            }, 10); // Intervalo de 50ms para uma transição suave
        });
    });

    function fadeIn() {
        let newOpacity = 0; // Opacidade inicial da nova imagem

        // Intervalo para aumentar gradualmente a opacidade da nova imagem
        const interval = setInterval(() => {
            newOpacity += 0.05; // Aumenta a opacidade gradualmente
            principal.style.opacity = newOpacity; // Aplica a nova opacidade à imagem principal

            if (newOpacity >= 1) {
                // Quando atingir uma opacidade máxima, limpa o intervalo
                clearInterval(interval); // Interrompe o intervalo
            }
        }, 10); // Intervalo de 50ms para uma transição suave
    }
});
