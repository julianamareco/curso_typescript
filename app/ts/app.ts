const controller = new NegociacaoController();

//usando JQuery

$(".form").submit(controller.adiciona.bind(controller));

//document.querySelector(".form").addEventListener('submit', controller.adiciona.bind(controller));