document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.Pimg');
    const paragraph = document.querySelector('p');
    const nameCharacter = document.querySelector('h2');
    const principal = document.querySelector('.principal');
    let currentOpacity = 1;

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
                    // atualiza a imagem de fundo
                    clearInterval(interval); // 
                    principal.style.backgroundImage = `url(${imgSrc})`; 
                    fadeIn();
                }
            }, 10); //
        });
    });

    function fadeIn() {
        let newOpacity = 0;

        // Intervalo para aumentar gradualmente a opacidade da nova imagem
        const interval = setInterval(() => {
            newOpacity += 0.05; 
            principal.style.opacity = newOpacity;

            if (newOpacity >= 1) {
                // Quando atingir uma opacidade máxima, limpa o intervalo
                clearInterval(interval); // Interrompe o intervalo
            }
        }, 10); 
    }
});
