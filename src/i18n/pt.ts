import { defaultTargetDate } from './constants';
import { participantsFor } from './organizations';
import type { Translations } from './es';

export const pt: Translations = {
    'page.title': 'Início',
    nav: {
        title: 'Encontro Vereda 2027',
        agenda: 'Agenda',
        countdown: 'Local',
        about: 'Sobre o encontro',
        organizations: 'Organizações',
        faq: 'Perguntas',
        languages: 'Idioma',
    },
    hero: {
        title: 'Encontro Vereda 2027',
        lead: 'Três dias para aprender, criar e cuidar em rede com organizações da América Latina e do Caribe. Caminhos que se cruzam.',
        dates: '6 a 8 de outubro',
        place: 'Oaxaca de Juárez',
        ctaPrimary: 'Ver a agenda',
        ctaSecondary: 'Perguntas frequentes',
        host: 'Uma convocação da Fundação Vereda Clara',
    },
    agenda: {
        title: 'Agenda',
        intro: 'Cada jornada tem um foco. Escolha um dia para ver as atividades.',
        labels: {
            focus: 'Foco do dia',
            days: 'Dias do encontro',
        },
        activities: [
            {
                weekday: 'Quarta',
                date: '6 out',
                title: 'Raízes',
                icon: 'roots',
                objective: 'Apresentar os projetos de cada organização e descobrir pontos em comum por meio de dinâmicas visuais.',
                events: [
                    { time: '8:30 – 9:15', title: 'Café de chegada e entrega de materiais' },
                    { time: '9:15 – 10:00', title: 'Roda de abertura com o Colectivo Telar' },
                    { time: '10:00 – 12:30', title: 'Feira de projetos: cada organização em três minutos' },
                    { time: '12:30 – 13:00', title: 'Intervalo com frutas da estação' },
                    { time: '13:00 – 14:30', title: 'Mapa de saberes: o que sabemos fazer e o que queremos aprender' },
                    { time: '14:30 – 16:00', title: 'Almoço compartilhado no jardim' },
                    { time: '18:30 – 21:00', title: 'Noite de cinema documental ao ar livre' },
                ],
            },
            {
                weekday: 'Quinta',
                date: '7 out',
                title: 'Caminhos',
                icon: 'paths',
                objective: 'Aprender fazendo: laboratórios práticos e visitas a projetos comunitários dos Vales Centrais.',
                events: [
                    { time: '8:00 – 9:00', title: 'Café e plano do dia' },
                    { time: '9:00 – 11:30', title: 'Laboratórios simultâneos: comunicação, finanças e dados' },
                    { time: '11:30 – 12:00', title: 'Intervalo' },
                    { time: '12:00 – 15:00', title: 'Visitas a cooperativas de tecelagem e hortas comunitárias' },
                    { time: '15:00 – 16:30', title: 'Almoço em uma cozinha tradicional' },
                    { time: '17:00 – 18:30', title: 'Opcional: aula de culinária oaxaquenha' },
                    { time: '20:00 – 22:00', title: 'Festa com banda de música local' },
                ],
            },
            {
                weekday: 'Sexta',
                date: '8 out',
                title: 'Horizontes',
                icon: 'horizon',
                objective: 'Transformar o aprendizado em acordos concretos de colaboração para os próximos dois anos.',
                events: [
                    { time: '8:30 – 9:30', title: 'Café e caminhada matinal' },
                    { time: '9:30 – 11:30', title: 'Mesas de alianças por país e por tema' },
                    { time: '11:30 – 12:00', title: 'Intervalo' },
                    { time: '12:00 – 13:30', title: 'Plenária: compromissos e próximos passos' },
                    { time: '13:30 – 15:00', title: 'Almoço de encerramento' },
                    { time: '15:00 – 16:00', title: 'Foto do grupo e entrega de certificados' },
                ],
            },
        ],
    },
    countdown: {
        title: 'Faltam',
        subtitle: 'para o início do encontro',
        venueLabel: 'Local',
        address: ['Posada Vereda Clara', 'Centro de Oaxaca de Juárez, México'],
        linkText: 'Como chegar',
        link: '#',
        labels: { days: 'dias', hours: 'horas', minutes: 'minutos' },
        finished: 'O encontro já começou',
        targetDate: defaultTargetDate,
    },
    about: {
        title: 'Sobre o encontro',
        encounter: {
            title: 'Encontro Vereda da América Latina e do Caribe',
            paragraphs: [
                'O Encontro Vereda é um encontro bienal que reúne as organizações que caminham com a fundação. Em 2027 ele chega a Oaxaca com um lema simples: caminhos que se cruzam.',
                'Serão três jornadas pensadas como uma oficina aberta: cada organização traz um projeto, uma pergunta e uma ferramenta para compartilhar, e leva novas ideias e aliadas para o próximo ano.',
                'Haverá laboratórios práticos, visitas a projetos comunitários da região, momentos de descanso e atividades culturais, porque acreditamos que o trabalho social também se sustenta com alegria e comunidade.',
                'A metodologia fica a cargo do Colectivo Telar, uma equipe que desenha encontros participativos com dinâmicas visuais, trabalho em pequenos grupos e acordos claros de cuidado.',
            ],
        },
        facts: [
            { value: '3', label: 'dias de trabalho' },
            { value: '14', label: 'organizações' },
            { value: '3', label: 'idiomas com interpretação' },
        ],
        foundation: {
            title: 'Quem convoca',
            description: 'Fundada em Oaxaca em 2012, a <strong>Fundação Vereda Clara</strong> impulsiona projetos de educação, saúde comunitária e economia local liderados por mulheres. Além de doações, oferece mentorias, formação em gestão e espaços de intercâmbio para que organizações de diferentes países aprendam umas com as outras.',
        },
    },
    organizations: {
        title: 'Organizações participantes',
        intro: 'Catorze organizações da região compartilham projeto, pergunta e ferramenta.',
        filtersLabel: 'Filtrar por região',
        regions: {
            all: 'Todas',
            mx: 'México',
            ca: 'América Central e Caribe',
            sa: 'América do Sul',
            rg: 'Redes regionais e globais',
        },
        visitSite: 'Site de',
        results: 'Mostrando {n} de {total} organizações',
        participants: participantsFor('pt'),
    },
    faq: {
        title: 'Perguntas frequentes',
        faqs: [
            {
                title: 'Onde será o encontro?',
                content: '<p>Na Posada Vereda Clara, um casarão com pátios e jardim no centro de Oaxaca de Juárez. A hospedagem, as salas de trabalho e o refeitório ficam no mesmo lugar.</p>',
            },
            {
                title: 'Quais datas devo reservar?',
                content: `<ul>
                    <li><strong>Terça-feira, 5 de outubro:</strong> chegadas à tarde.</li>
                    <li><strong>Quarta 6 a sexta 8 de outubro:</strong> programação do encontro.</li>
                    <li><strong>Sábado, 9 de outubro:</strong> retornos.</li>
                </ul>`,
            },
            {
                title: 'Quantas pessoas podem participar por organização?',
                content: 'Cada organização pode inscrever até duas pessoas. Se alguém mais precisar participar por motivos de acessibilidade ou interpretação, avise-nos na inscrição.',
            },
            {
                title: 'Em quais idiomas serão as sessões?',
                content: 'As sessões serão em espanhol, com interpretação simultânea para inglês e português. Também haverá materiais impressos nos três idiomas.',
            },
            {
                title: 'Preciso preparar algo antes de chegar?',
                content: 'Apenas uma apresentação breve do seu projeto (três minutos, sem slides) e, se quiser, algum objeto ou publicação para a mesa de troca.',
            },
            {
                title: 'A fundação cobre a viagem?',
                content: 'Sim. A fundação cobre transporte, hospedagem e refeições das pessoas inscritas. Você receberá seu itinerário por e-mail algumas semanas antes do encontro.',
            },
            {
                title: 'Haverá espaço para crianças?',
                content: 'Sim. Se você viajar com crianças pequenas, haverá um espaço de cuidado infantil durante as sessões. Indique na inscrição para prepararmos atividades por idade.',
            },
            {
                title: 'O local é acessível?',
                content: 'As salas, o refeitório e vários quartos ficam no térreo e têm rampas. Conte-nos qualquer necessidade específica e deixaremos tudo pronto.',
            },
            {
                title: 'Quais opções de comida haverá?',
                content: 'Cardápios de culinária local com opções vegetarianas, veganas e sem glúten. Se você tiver alguma alergia, informe na inscrição.',
            },
            {
                title: 'Que roupas devo levar?',
                content: 'Em outubro os dias são amenos e as noites frescas. Leve calçados confortáveis para as visitas de quinta-feira e um casaco leve.',
            },
            {
                title: 'Serão tiradas fotos durante o encontro?',
                content: 'Haverá registro fotográfico apenas das atividades em grupo. Você poderá indicar no crachá se prefere não aparecer nas fotos.',
            },
        ],
        contact: {
            title: 'Sua pergunta não está aqui?',
            text: 'Escreva ou ligue para a equipe do encontro. Respondemos de segunda a sexta.',
            phone: '+52 000 000 0000',
            email: 'logistica@encuentrovereda.example',
        },
    },
    postEvent: {
        title: 'Depois do encontro',
        description: 'Ao final, compartilharemos aqui o que o caminho deixou:',
        eventList: ['Galeria de imagens', 'Vídeo', 'Redes sociais', 'Registro gráfico', 'Depoimentos'],
    },
    notFound: {
        title: 'Página não encontrada',
        message: 'A página que você procura não existe ou foi movida.',
        button: 'Voltar ao início',
    },
    og: {
        title: 'Encontro Vereda 2027 — Fundação Vereda Clara',
        description: 'Caminhos que se cruzam: aprender, criar e cuidar em rede. Oaxaca, México, 6 a 8 de outubro de 2027.',
        imageAlt: 'Encontro Vereda 2027, de 6 a 8 de outubro em Oaxaca de Juárez',
        siteName: 'Encontro Vereda',
        locale: 'pt_BR',
    },
    a11y: {
        skipToContent: 'Pular para o conteúdo',
        metaDescription: 'Encontro Vereda 2027 — Encontro latino-americano da Fundação Vereda Clara pelos direitos das mulheres e das meninas.',
        navMain: 'Navegação principal',
        navMobile: 'Menu móvel',
        openMenu: 'Abrir menu',
        closeMenu: 'Fechar menu',
        switchToEs: 'Cambiar a español',
        switchToEn: 'Switch to English',
        switchToPt: 'Mudar para português',
        homeLink: 'Encontro Vereda 2027, ir ao início',
        heroImageAlt: 'Ilustração de uma vereda que sobe entre colinas em direção a um sol de cempasúchil',
        logoFoundationAlt: 'Logotipo da Fundação Vereda Clara',
        logoEventAlt: 'Logotipo do Encontro Vereda 2027',
        logoFacilitatorAlt: 'Logotipo do Colectivo Telar',
        aboutIllustrationAlt: 'Ilustração de três caminhos coloridos que se cruzam',
        countdownLabel: 'Contagem regressiva para o encontro',
    },
    footer: {
        foundation: {
            title: 'Fundação Vereda Clara',
            description: `<p>As informações que você compartilhar na inscrição serão usadas apenas para preparar sua viagem, sua hospedagem e as atividades do Encontro Vereda. Você pode pedir que as excluamos a qualquer momento escrevendo para a equipe do encontro.</p>
<p>Este site é uma demonstração: a Fundação Vereda Clara e o Encontro Vereda são fictícios.</p>`,
        },
        privacyTitle: 'Seus dados',
        followTitle: 'Siga-nos',
        facilitatorLabel: 'Metodologia',
        social: {
            facebook: '#',
            instagram: '#',
        },
        copyright: '© 2027 Fundação Vereda Clara. Todos os direitos reservados.',
    },
};
