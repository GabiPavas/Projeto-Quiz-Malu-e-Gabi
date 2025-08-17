const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
{
enunciado: "Durante uma entrevista para TV, uma profissional fala sobre como ajuda pacientes a entenderem seus sentimentos e superarem traumas. Ela menciona que não receita remédios, mas utiliza técnicas de escuta e aconselhamento. Quem é ela?",
alternativas: [
{
texto: "Psicóloga",
afirmacao: "Você reconheceu que a psicóloga trabalha com apoio emocional e compreensão do comportamento humano."
},
{
texto: "Psiquiatra",
afirmacao: "Você se confundiu — o psiquiatra é médico e pode prescrever medicamentos, diferente da psicóloga."
}
]
},
{
enunciado: "Em um documentário, um profissional aparece mergulhando no fundo do mar, coletando amostras e analisando o impacto da poluição na vida marinha. Mais tarde, ele apresenta gráficos sobre correntes oceânicas. Quem é esse profissional?",
alternativas: [
{
texto: "Oceanógrafo",
afirmacao: "Correto! O oceanógrafo estuda os oceanos, a vida marinha e a interação humana com eles."
},
{
texto: "Biólogo Marinho",
afirmacao: "Errou por pouco — o biólogo marinho foca mais nos organismos, enquanto o oceanógrafo também estuda clima e correntes."
}
]
},
{
enunciado: "Você está em uma startup e vê uma pessoa digitando linhas de código sem parar. Ela comenta que está criando um aplicativo que ajudará idosos a lembrar de tomar remédios. Quem é essa pessoa?",
alternativas: [
{
texto: "Programador",
afirmacao: "Acertou! O programador desenvolve softwares e soluções digitais."
},
{
texto: "Administrador de Redes",
afirmacao: "Não. O administrador de redes gerencia a infraestrutura de internet e servidores, mas não necessariamente cria programas."
}
]
},
{
enunciado: "No museu de geografia, um especialista mostra um enorme mapa em 3D feito com dados de satélite. Ele explica que passou meses medindo e ajustando escalas para representar o relevo com perfeição. Quem é?",
alternativas: [
{
texto: "Cartógrafo",
afirmacao: "Correto! O cartógrafo transforma informações geográficas em mapas detalhados."
},
{
texto: "Geólogo",
afirmacao: "Errou. O geólogo estuda rochas e formações terrestres, mas não cria mapas como o cartógrafo."
}
]
},
{
enunciado: "Você entra em um restaurante chique e vê uma pessoa coordenando a cozinha, dando instruções, provando molhos e ajustando a apresentação dos pratos antes que cheguem à mesa. Quem é?",
alternativas: [
{
texto: "Chef de Cozinha",
afirmacao: "Acertou! O chef lidera a cozinha e cuida do sabor e da estética dos pratos."
},
{
texto: "Nutricionista",
afirmacao: "Errado. O nutricionista trabalha com planejamento alimentar e saúde, mas não lidera a cozinha."
}
]
},
{
enunciado: "Em um estúdio silencioso, alguém passa horas ouvindo um áudio em inglês e digitando em português o que foi dito, mantendo o sentido original. Quem é?",
alternativas: [
{
texto: "Tradutor",
afirmacao: "Correto! O tradutor adapta textos e falas para outro idioma preservando o significado."
},
{
texto: "Professor de Idiomas",
afirmacao: "Não. O professor ensina línguas, mas não necessariamente traduz textos."
}
]
},
{
enunciado: "No set de gravação de um filme, uma pessoa observa cada cena, ajusta luzes, decide a posição da câmera e conversa com os atores sobre a entonação das falas. Quem é?",
alternativas: [
{
texto: "Diretor de Cinema",
afirmacao: "Certo! O diretor coordena a produção artística e técnica do filme."
},
{
texto: "Produtor",
afirmacao: "Errado. O produtor cuida mais da parte financeira e logística."
}
]
},
{
enunciado: "Um caminhão vermelho chega rápido a um prédio em chamas. Um profissional desce, organiza a equipe, entra no local com equipamentos de proteção e salva duas pessoas. Quem é?",
alternativas: [
{
texto: "Bombeiro",
afirmacao: "Correto! O bombeiro é treinado para agir em emergências e salvar vidas."
},
{
texto: "Inspetor de Segurança",
afirmacao: "Não. O inspetor inspeciona prédios para prevenir riscos, mas não combate incêndios."
}
]
},
{
enunciado: "No escritório de marketing, um profissional analisa dados de vendas, planeja uma campanha e apresenta ideias para aumentar a visibilidade de um produto nas redes sociais. Quem é?",
alternativas: [
{
texto: "Publicitário",
afirmacao: "Acertou! O publicitário cria estratégias e campanhas para atrair clientes."
},
{
texto: "Vendedor",
afirmacao: "Errado. O vendedor atua mais na negociação direta com o cliente."
}
]
},
{
enunciado: "No observatório, uma pessoa ajusta um telescópio gigante e anota informações sobre um planeta distante. Ela fala com entusiasmo sobre novas descobertas no espaço. Quem é?",
alternativas: [
{
texto: "Astrônomo",
afirmacao: "Certo! O astrônomo estuda os astros e o universo."
},
{
texto: "Espeleólogo",
afirmacao: "Errado. O espeleólogo explora cavernas na Terra."
}
]
}
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();