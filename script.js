function openImage(imgSrc) {
        window.open(imgSrc, '_blank');
    }

    document.addEventListener('DOMContentLoaded', (event) => {
        const images = document.querySelectorAll('section.coluna img');
        images.forEach((img, index) => {
            // Adiciona um ID dinâmico a cada imagem
            img.setAttribute('id', `img${index + 1}`);
            
            // Adiciona o evento de duplo clique
            img.addEventListener('dblclick', function() {
                openImage(this.src);
            });
        });
    });