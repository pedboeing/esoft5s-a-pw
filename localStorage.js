function armazenaLocalStorage() {
    localStorage.getItem('visitas')
    var visitas = JSON.parse(localStorage.getItem('visitas'));
    visitas.count++;

    const date = new Date();
    options = {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
    };
    var dataAcesso = new Intl.DateTimeFormat("pt-BR", options).format(date);
    
    visitas.lastVisit = dataAcesso;
    localStorage.setItem('visitas', JSON.stringify(visitas));

    document.getElementById('contadorFooter').innerHTML = "Esta página foi visitada " + visitas.count + " vezes. A última visita foi: " + visitas.lastVisit;
}

armazenaLocalStorage();
