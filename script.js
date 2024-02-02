// Lista de palavras com seus significados e substituições sugeridas
const palavras = [{
        palavra: "Saudade",
        significado: "Sentimento de falta por algo ausente; Recordação de momentos passados.",
        substituicao: "Recordação"
    },
    {
        palavra: "Efervescente",
        significado: "Agitado, cheio de vida; Animado e borbulhante.",
        substituicao: "Animado"
    },
    {
        palavra: "Obnubilar",
        significado: "Tornar confuso; Confundir e obscurecer.",
        substituicao: "Confundir"
    },
    {
        palavra: "Inefável",
        significado: "Que não pode ser expresso em palavras; Indescritível e único.",
        substituicao: "Indescritível"
    },
    {
        palavra: "Elocubração",
        significado: "Discurso longo e vago; Divagação e conversa prolixa.",
        substituicao: "Divagação"
    },
    {
        palavra: "Efímero",
        significado: "Que dura por pouco tempo; Passageiro e breve.",
        substituicao: "Passageiro"
    },
    {
        palavra: "Sibilante",
        significado: "Que produz som agudo como assobio; Assobiante e agudo.",
        substituicao: "Assobiante"
    },
    {
        palavra: "Cacofonia",
        significado: "Mistura desarmônica de sons; Som desagradável e desarmonioso.",
        substituicao: "Desarmonia"
    },
    {
        palavra: "Lânguido",
        significado: "Demonstra fraqueza; Fraco e debilitado.",
        substituicao: "Debilitado"
    },
    {
        palavra: "Paradigma",
        significado: "Exemplo a ser seguido; Modelo e referência.",
        substituicao: "Exemplo"
    },
    {
        palavra: "Prolífico",
        significado: "Que produz em abundância; Fecundo e produtivo.",
        substituicao: "Fecundo"
    },
    {
        palavra: "Ardiloso",
        significado: "Astuto e trapaceiro; Age com esperteza.",
        substituicao: "Trapaceiro"
    },
    {
        palavra: "Efêmero",
        significado: "De curta duração; Transitório e fugaz.",
        substituicao: "Transitório"
    },
    {
        palavra: "Ubíquo",
        significado: "Presente em todos os lugares; Onipresente.",
        substituicao: "Ubíquo"
    },
    {
        palavra: "Serendipidade",
        significado: "Ocorrência de eventos felizes por acaso; Descobertas inesperadas.",
        substituicao: "Serendipidade"
    },
    {
        palavra: "Disparate",
        significado: "Diferente e incongruente; Distinto e variado.",
        substituicao: "Diferente"
    },
    {
        palavra: "Cacofonia",
        significado: "Mistura desarmônica de sons; Som discordante.",
        substituicao: "Cacofonia"
    },
    {
        palavra: "Fugaz",
        significado: "Que passa rapidamente; Efêmero e transitório.",
        substituicao: "Fugaz"
    },
    {
        palavra: "Malévolo",
        significado: "Wicked, villainous, or criminal; Malevolente e maligno.",
        substituicao: "Malévolo"
    },
    {
        palavra: "Perspicaz",
        significado: "Atento e observador; Demonstra agudeza mental.",
        substituicao: "Atento"
    },
    {
        palavra: "Inexprimível",
        significado: "Que não pode ser expresso em palavras; Algo tão intenso que transcende a linguagem.",
        substituicao: "Inexprimível"
    },
    {
        palavra: "Persistente",
        significado: "Capaz de superar desafios; Resiliente e duradouro.",
        substituicao: "Persistente"
    },
    {
        palavra: "Selar",
        significado: "Cauterizar feridas emocionais; Fechar e cicatrizar.",
        substituicao: "Selar"
    },
    {
        palavra: "Experiencial",
        significado: "Baseado em experiências; Fundamentado na vivência.",
        substituicao: "Experiencial"
    },
    {
        palavra: "Cortês",
        significado: "Polido e respeitoso; Comportamento educado.",
        substituicao: "Cortês"
    },
    {
        palavra: "Promissor",
        significado: "Que mostra boas perspectivas; Cheio de potencial.",
        substituicao: "Promissor"
    },
    {
        palavra: "Imparcial",
        significado: "Equânime e justo; Não favorece nenhum lado.",
        substituicao: "Imparcial"
    },
    {
        palavra: "Radiante",
        significado: "Brilhante e cheio de luz; Expressa positividade.",
        substituicao: "Radiante"
    },
    {
        palavra: "Prosperar",
        significado: "Crescer e ter sucesso; Alcançar desenvolvimento.",
        substituicao: "Prosperar"
    },
    {
        palavra: "Desaparecer",
        significado: "Sumir e não ser mais perceptível; Deixar de existir.",
        substituicao: "Desaparecer"
    },
    {
        palavra: "Tranquilo",
        significado: "Calmo e sereno; Ambiente pacífico.",
        substituicao: "Tranquilo"
    },
    {
        palavra: "Alegria",
        significado: "Sentimento de felicidade; Celebração de conquistas.",
        substituicao: "Alegria"
    },
    {
        palavra: "Cauteloso",
        significado: "Que age com precaução; Prudente e cuidadoso.",
        substituicao: "Prudente"
    },
    {
        palavra: "Efusivo",
        significado: "Expressivo e demonstrativo; Demonstrativo e expansivo.",
        substituicao: "Expressivo"
    },
    {
        palavra: "Impecável",
        significado: "Sem falhas ou defeitos; Perfeito e irrepreensível.",
        substituicao: "Perfeito"
    },
    {
        palavra: "Magnânimo",
        significado: "Generoso e nobre; Generoso e benevolente.",
        substituicao: "Generoso"
    },
    {
        palavra: "Voraz",
        significado: "Ávido e devorador; Ávido e insaciável.",
        substituicao: "Ávido"
    },
    {
        palavra: "Pristino",
        significado: "Puro e intocado; Puro e imaculado.",
        substituicao: "Puro"
    },
    {
        palavra: "Resiliente",
        significado: "Capaz de se recuperar rapidamente; Resistente e flexível.",
        substituicao: "Flexível"
    },
    {
        palavra: "Plácido",
        significado: "Calmo e tranquilo; Sereno e pacífico.",
        substituicao: "Sereno"
    },
    {
        palavra: "Eficiente",
        significado: "Que produz resultados com facilidade; Produtivo e competente.",
        substituicao: "Produtivo"
    },
    {
        palavra: "Eloquente",
        significado: "Expressivo e persuasivo; Expressivo e convincente.",
        substituicao: "Persuasivo"
    },
    {
        palavra: "Intrépido",
        significado: "Destemido e corajoso; Corajoso e intrépido.",
        substituicao: "Destemido"
    },
    {
        palavra: "Exímio",
        significado: "Altamente habilidoso; Habilidoso e talentoso.",
        substituicao: "Habilidoso"
    },
    {
        palavra: "Integrar",
        significado: "Fazer parte de algo; Fazer parte e participar.",
        substituicao: "Participar"
    },
    {
        palavra: "Sagaz",
        significado: "Astuto e perspicaz; Perspicaz e esperto.",
        substituicao: "Perspicaz"
    },
    {
        palavra: "Eufórico",
        significado: "Extremamente feliz; Feliz e contente.",
        substituicao: "Jubilante"
    },
    {
        palavra: "Harmonioso",
        significado: "Que produz harmonia; Equilibrado e melodioso.",
        substituicao: "Equilibrado"
    },
    {
        palavra: "Empático",
        significado: "Capaz de compreender os sentimentos dos outros; Compreensivo e solidário.",
        substituicao: "Compreensivo"
    },
    {
        palavra: "Exuberante",
        significado: "Cheio de vitalidade; Cheio de vida e vigoroso.",
        substituicao: "Vigoroso"
    },
    {
        palavra: "Sublime",
        significado: "Elevado e grandioso; Elevado e majestoso.",
        substituicao: "Majestoso"
    },
    {
        palavra: "Refinar",
        significado: "Tornar mais puro ou elegante; Aprimorar e aperfeiçoar.",
        substituicao: "Aprimorar"
    },
    {
        palavra: "Empreendedor",
        significado: "Que busca oportunidades e inovação; Inovador e visionário.",
        substituicao: "Inovador"
    },
];

// Função para gerar uma nova palavra do dia aleatória
function gerarNovaPalavra() {
    // Gera um índice aleatório com base no comprimento da lista de palavras
    const indice = Math.floor(Math.random() * palavras.length);

    // Obtém a palavra correspondente ao índice gerado
    const palavraDoDia = palavras[indice];

    // Atualiza os elementos HTML com as informações da palavra do dia
    document.getElementById("wordOfDay").innerText = `Palavra Gerada: ${palavraDoDia.palavra}`;
    document.getElementById("significado").innerText = `Significado: ${palavraDoDia.significado}`;
    document.getElementById("substituicao").innerText = `Substituição sugerida: ${palavraDoDia.substituicao}`;
}

document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const header = document.querySelector("header");
    const themeToggle = document.getElementById("themeToggle");

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-theme");
        header.classList.toggle("dark-theme");
        themeToggle.classList.toggle("rotate-icon", body.classList.contains("dark-theme"));
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.querySelector('textarea');
    const charCount = document.getElementById('charCount');

    textarea.addEventListener('input', function () {
        const remainingChars = 5000 - textarea.value.length;
        charCount.textContent = `Caracteres restantes: ${remainingChars}`;
    });
});

function validarFormulario() {
    var nome = document.forms["meuForm"]["nome"].value;
    var email = document.forms["meuForm"]["email"].value;
    var assunto = document.forms["meuForm"]["assunto"].value;

    if (nome == "" || email == "" || assunto == "") {
        alert("Todos os campos devem ser preenchidos");
        return false;
    }
}
