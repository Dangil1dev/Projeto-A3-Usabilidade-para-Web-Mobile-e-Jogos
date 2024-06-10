document.addEventListener("DOMContentLoaded", function() {
    const thumbs = document.querySelectorAll('.product-gallery--thumbs .thumb');
    const mainImage = document.querySelector('.main-image img');

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            // Remover a classe 'active' de todas as miniaturas
            thumbs.forEach(item => item.classList.remove('active'));
            // Adicionar a classe 'active' à miniatura clicada
            thumb.classList.add('active');
            // Obter o caminho da imagem da miniatura clicada
            const imagePath = thumb.querySelector('img').getAttribute('src');
            // Definir o caminho da imagem clicada como a fonte da imagem principal
            mainImage.setAttribute('src', imagePath);
        });
    });
});
