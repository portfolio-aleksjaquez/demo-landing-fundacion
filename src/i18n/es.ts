import { defaultTargetDate } from './constants';
import { participantsFor } from './organizations';

export const es = {
    'page.title': 'Inicio',
    nav: {
        title: 'FUNDACIÓN VEREDA CLARA',
        about: 'SOBRE',
        agenda: 'AGENDA',
        countdown: 'CONTADOR',
        organizations: 'ORGANIZACIONES PARTICIPANTES',
        faq: 'FAQ',
    },
    hero: {
        title: 'FUNDACIÓN \n VEREDA CLARA',
        subtitle: 'Caminos que se cruzan. \n Aprender, crear y cuidar en red',
    },
    about: {
        title: 'SOBRE...',
        encounter: {
            title: '<strong>Encuentro Vereda</strong> de Latinoamérica y el Caribe 2027',
            paragraphs: [
                'El Encuentro Vereda es una cita bienal que reúne a las organizaciones que caminan con la fundación. En 2027 llega a Oaxaca con un lema sencillo: caminos que se cruzan.',
                'Serán tres jornadas pensadas como un taller abierto: cada organización trae un proyecto, una pregunta y una herramienta para compartir, y se va con nuevas ideas y aliadas para el año que viene.',
                'Habrá laboratorios prácticos, recorridos por proyectos comunitarios de la región, espacios de descanso y momentos culturales, porque creemos que el trabajo social también se sostiene con alegría y comunidad.',
                'La metodología está a cargo del Colectivo Telar, un equipo que diseña encuentros participativos con dinámicas visuales, trabajo en pequeños grupos y acuerdos claros de cuidado.',
            ],
        },
        foundation: {
            title: 'Fundación Vereda Clara',
            description: 'Fundada en Oaxaca en 2012, la <strong>Fundación Vereda Clara</strong> impulsa proyectos de educación, salud comunitaria y economía local encabezados por mujeres. Además de otorgar donativos, ofrece mentorías, formación en gestión y espacios de intercambio para que organizaciones de distintos países aprendan unas de otras.',
        },
    },
    countdown: {
        title: 'EL VIAJE COMIENZA EN...',
        address: ['Oaxaca de Juárez', 'Posada Vereda Clara'],
        link: '#',
        labels: { days: 'días', hours: 'horas', minutes: 'minutos' },
        targetDate: defaultTargetDate,
    },
    agenda: {
        title: 'AGENDA',
        labels: {
            activity: 'Enfoque',
        },
        activities: [
            {
                day: 'MIÉRCOLES 6',
                title: 'Raíces',
                image: 'src/assets/img/A-Day1.svg',
                objective: 'Presentar los proyectos de cada organización y descubrir puntos en común a través de dinámicas visuales.',
                events: [
                    { time: '8:30 – 9:15', title: 'Café de llegada y entrega de materiales' },
                    { time: '9:15 – 10:00', title: 'Círculo de apertura con el Colectivo Telar' },
                    { time: '10:00 – 12:30', title: 'Feria de proyectos: cada organización en tres minutos' },
                    { time: '12:30 – 13:00', title: 'Receso con fruta de temporada' },
                    { time: '13:00 – 14:30', title: 'Mapa de saberes: lo que sabemos hacer y lo que queremos aprender' },
                    { time: '14:30 – 16:00', title: 'Comida compartida en el jardín' },
                    { time: '18:30 – 21:00', title: 'Noche de cine documental al aire libre' },
                ],
            },
            {
                day: 'JUEVES 7',
                title: 'Caminos',
                image: 'src/assets/img/A-Day2.svg',
                objective: 'Aprender haciendo: laboratorios prácticos y visitas a proyectos comunitarios de los Valles Centrales.',
                events: [
                    { time: '8:00 – 9:00', title: 'Café y repaso del día' },
                    { time: '9:00 – 11:30', title: 'Laboratorios simultáneos: comunicación, finanzas y datos' },
                    { time: '11:30 – 12:00', title: 'Receso' },
                    { time: '12:00 – 15:00', title: 'Visitas a cooperativas de tejido y huertos comunitarios' },
                    { time: '15:00 – 16:30', title: 'Comida en una cocina tradicional' },
                    { time: '17:00 – 18:30', title: 'Opcional: clase de cocina oaxaqueña' },
                    { time: '20:00 – 22:00', title: 'Fiesta con música de banda local' },
                ],
            },
            {
                day: 'VIERNES 8',
                title: 'Horizontes',
                image: 'src/assets/img/A-Day3.svg',
                objective: 'Convertir lo aprendido en acuerdos concretos de colaboración para los próximos dos años.',
                events: [
                    { time: '8:30 – 9:30', title: 'Café y caminata matutina' },
                    { time: '9:30 – 11:30', title: 'Mesas de alianzas por país y por tema' },
                    { time: '11:30 – 12:00', title: 'Receso' },
                    { time: '12:00 – 13:30', title: 'Plenaria: compromisos y próximos pasos' },
                    { time: '13:30 – 15:00', title: 'Comida de clausura' },
                    { time: '15:00 – 16:00', title: 'Foto grupal y entrega de constancias' },
                ],
            },
        ],
    },
    organizations: {
        title: 'ORGANIZACIONES PARTICIPANTES',
        participants: participantsFor('es'),
    },
    faq: {
        title: 'PREGUNTAS FRECUENTES',
        faqs: [
            {
                title: '¿Dónde será el encuentro?',
                content: '<p>En la Posada Vereda Clara, una casona con patios y jardín en el centro de Oaxaca de Juárez. Ahí mismo estarán el hospedaje, las salas de trabajo y el comedor.</p>',
            },
            {
                title: '¿Qué fechas debo reservar?',
                content: `<ul>
                    <li><strong>Martes 5 de octubre:</strong> llegadas durante la tarde.</li>
                    <li><strong>Miércoles 6 a viernes 8 de octubre:</strong> programa del encuentro.</li>
                    <li><strong>Sábado 9 de octubre:</strong> regresos.</li>
                </ul>`,
            },
            {
                title: '¿Cuántas personas pueden asistir por organización?',
                content: 'Cada organización puede inscribir hasta dos personas. Si necesitas que asista alguien más por motivos de accesibilidad o interpretación, avísanos al registrarte.',
            },
            {
                title: '¿En qué idiomas serán las sesiones?',
                content: 'Las sesiones serán en español, con interpretación simultánea al inglés y al portugués. También contaremos con materiales impresos en los tres idiomas.',
            },
            {
                title: '¿Necesito preparar algo antes de llegar?',
                content: 'Solo una presentación breve de tu proyecto (tres minutos, sin diapositivas) y, si quieres, algún objeto o publicación para la mesa de intercambio.',
            },
            {
                title: '¿La fundación cubre el viaje?',
                content: 'Sí. La fundación cubre transporte, hospedaje y comidas de las personas inscritas. Recibirás tu itinerario por correo unas semanas antes del encuentro.',
            },
            {
                title: '¿Habrá cuidado infantil?',
                content: 'Sí. Si viajas con niñas o niños pequeños, habrá un espacio de cuidado infantil durante las sesiones. Indícalo en tu registro para preparar actividades por edad.',
            },
            {
                title: '¿El lugar es accesible?',
                content: 'Las salas, el comedor y varias habitaciones están en planta baja y cuentan con rampas. Cuéntanos cualquier necesidad específica y la tendremos lista.',
            },
            {
                title: '¿Qué opciones de comida habrá?',
                content: 'Menús de cocina local con opciones vegetarianas, veganas y sin gluten. Si tienes alguna alergia, anótala en el registro.',
            },
            {
                title: '¿Qué ropa conviene llevar?',
                content: 'En octubre los días son templados y las noches frescas. Lleva calzado cómodo para las visitas del jueves y una chamarra ligera.',
            },
            {
                title: '¿Se tomarán fotos durante el encuentro?',
                content: 'Habrá registro fotográfico solo de las actividades grupales. Podrás elegir en tu gafete si prefieres no aparecer en fotos.',
            },
            {
                title: '¿A quién contacto si tengo dudas?',
                content: 'Al equipo del encuentro: <strong>+52 000 000 0000</strong> / <a href="#">logistica@encuentrovereda.example</a>',
            },
        ],
    },
    notFound: {
        title: 'Página no encontrada',
        message: 'La página que buscas no existe o ha sido movida.',
        button: 'Volver al inicio',
    },
    og: {
        title: 'Encuentro Vereda 2027 — Fundación Vereda Clara',
        description: 'Caminos que se cruzan: aprender, crear y cuidar en red. Oaxaca, México, octubre de 2027.',
        imageAlt: 'Ilustración del Encuentro Vereda 2027 de la Fundación Vereda Clara',
        siteName: 'Encuentro Vereda',
        locale: 'es_MX',
    },
    postEvent: {
        title: 'Después del encuentro',
        description: 'Al terminar el encuentro compartiremos aquí algunos recuerdos. Te invitamos a volver pronto.',
        eventList: ['Galería de imágenes', 'Video', 'Redes sociales', 'Relatoría gráfica', 'Testimonios'],
    },
    a11y: {
        skipToContent: 'Saltar al contenido',
        metaDescription: 'Encuentro Vereda 2027 — Encuentro latinoamericano de la Fundación Vereda Clara por los derechos de las mujeres y las niñas.',
        navMain: 'Navegación principal',
        navMobile: 'Menú móvil',
        openMenu: 'Abrir menú',
        closeMenu: 'Cerrar menú',
        switchToEs: 'Cambiar a español',
        switchToEn: 'Switch to English',
        switchToPt: 'Mudar para português',
        heroImageAlt: 'Ilustración de un paisaje con colinas, un río y aves del Encuentro Vereda 2027',
        logoFoundationAlt: 'Logotipo de la Fundación Vereda Clara',
        logoEventAlt: 'Logotipo del Encuentro Vereda 2027',
        logoFacilitatorAlt: 'Logotipo del Colectivo Telar',
        aboutIllustrationAlt: 'Ilustración de plantas y sol sobre colinas',
        countdownLabel: 'Cuenta regresiva para el evento',
        prevDay: 'Día anterior',
        nextDay: 'Día siguiente',
        faqBirdsAlt: 'Ilustración decorativa de aves',
        faqIllustrationAlt: 'Ilustración decorativa de montañas y plantas',
        closeDialog: 'Cerrar información',
        postEventLandscapeAlt: 'Ilustración de paisaje',
    },
    footer: {
        foundation: {
            title: 'FUNDACIÓN\nVEREDA CLARA',
            description: `<p>La información que compartas en el registro solo se usará para preparar tu viaje, tu hospedaje y las actividades del Encuentro Vereda. Puedes pedir que la eliminemos en cualquier momento escribiendo al equipo del encuentro.</p>
<p>Este sitio es una demostración: la Fundación Vereda Clara y el Encuentro Vereda son ficticios.</p>`,
        },
        social: {
            facebook: '#',
            instagram: '#',
        },
        copyright: '© 2027 Fundación Vereda Clara. Todos los derechos reservados.',
    },
};
export type Translations = typeof es;
