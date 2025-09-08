document.addEventListener('DOMContentLoaded', function() {

    /**
     * Handler para o formulário de agendamento.
     * Captura o envio, previne o recarregamento da página e exibe um alerta de confirmação.
     * Este código só é executado se o formulário existir na página atual.
     */
    const formAgendimento = document.getElementById('form-agendamento');
    if (formAgendimento) {
        formAgendimento.addEventListener('submit', function(event) {
            event.preventDefault();
            const data = document.getElementById('dataAgendamento').value;
            const hora = document.getElementById('horaAgendamento').value;
            alert(`Agendamento confirmado para o dia ${data} às ${hora}. Obrigado!`);
            formAgendimento.reset();
        });
    }

    /**
     * Configuração padrão e reutilizável para os carrosséis de produtos (Swiper.js).
     * Define o comportamento de loop, navegação e responsividade (breakpoints).
     */
    const swiperConfig = {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    };

    /**
     * Inicializa todas as instâncias de carrossel da página utilizando a configuração padrão.
     * Cada carrossel é identificado por sua classe CSS única.
     */
    new Swiper('.carrossel-hortifruti', swiperConfig);
    new Swiper('.carrossel-padaria', swiperConfig);
    new Swiper('.carrossel-mercearia', swiperConfig);

});