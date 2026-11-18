// Organizaciones ficticias del Encuentro Vereda 2027 (contenido de demostración).
type Lang = 'es' | 'en' | 'pt';
type Localized = Record<Lang, string>;
export type Region = 'mx' | 'ca' | 'sa' | 'rg';

interface Social {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
}

interface OrganizationSource {
    logo: string;
    name: string;
    url?: string;
    country: Localized;
    description: Localized;
    social?: Social;
    region: Region;
}


const organizations: OrganizationSource[] = [
    {
        logo: 'src/assets/logos/org-tejedoras.svg',
        name: 'Red Tejedoras del Sur',
        region: 'sa',
        url: '#',
        country: { es: 'Argentina, Uruguay', en: 'Argentina, Uruguay', pt: 'Argentina, Uruguai' },
        description: {
            es: 'Red de colectivas textiles que convierte los saberes del tejido en oportunidades económicas y espacios de cuidado para mujeres en zonas rurales y periurbanas.',
            en: 'A network of textile collectives that turns weaving knowledge into economic opportunities and spaces of care for women in rural and peri-urban areas.',
            pt: 'Rede de coletivos têxteis que transforma os saberes da tecelagem em oportunidades econômicas e espaços de cuidado para mulheres em áreas rurais e periurbanas.',
        },
        social: { instagram: '#', facebook: '#' },
    },
    {
        logo: 'src/assets/logos/org-agua-viva.svg',
        name: 'Colectiva Agua Viva',
        region: 'sa',
        url: '#',
        country: { es: 'Bolivia', en: 'Bolivia', pt: 'Bolívia' },
        description: {
            es: 'Acompañamos a comunidades andinas en la defensa del agua y en la creación de comités comunitarios liderados por mujeres para su gestión.',
            en: 'We support Andean communities in defending water and in creating women-led community committees to manage it.',
            pt: 'Acompanhamos comunidades andinas na defesa da água e na criação de comitês comunitários liderados por mulheres para sua gestão.',
        },
        social: { facebook: '#' },
    },
    {
        logo: 'src/assets/logos/org-raiz-comun.svg',
        name: 'Instituto Raíz Común',
        region: 'sa',
        url: '#',
        country: { es: 'Brasil', en: 'Brazil', pt: 'Brasil' },
        description: {
            es: 'Centro de formación en agroecología y economía solidaria que impulsa proyectos productivos encabezados por mujeres y juventudes.',
            en: 'A training center in agroecology and solidarity economy that drives productive projects led by women and young people.',
            pt: 'Centro de formação em agroecologia e economia solidária que impulsiona projetos produtivos liderados por mulheres e juventudes.',
        },
        social: { instagram: '#', linkedin: '#' },
    },
    {
        logo: 'src/assets/logos/org-brisa-andina.svg',
        name: 'Fondo Brisa Andina',
        region: 'sa',
        url: '#',
        country: { es: 'Chile, Perú', en: 'Chile, Peru', pt: 'Chile, Peru' },
        description: {
            es: 'Fondo comunitario que moviliza recursos flexibles para organizaciones de base que trabajan por los derechos de niñas y adolescentes.',
            en: 'A community fund that mobilizes flexible resources for grassroots organizations working for the rights of girls and adolescents.',
            pt: 'Fundo comunitário que mobiliza recursos flexíveis para organizações de base que trabalham pelos direitos de meninas e adolescentes.',
        },
        social: { instagram: '#' },
    },
    {
        logo: 'src/assets/logos/org-manglar.svg',
        name: 'Mujeres del Manglar',
        region: 'sa',
        url: '#',
        country: { es: 'Colombia', en: 'Colombia', pt: 'Colômbia' },
        description: {
            es: 'Asociación de pescadoras y recolectoras del Pacífico que protege los manglares y fortalece la autonomía económica de sus integrantes.',
            en: 'An association of Pacific coast fisherwomen and gatherers that protects mangroves and strengthens the economic autonomy of its members.',
            pt: 'Associação de pescadoras e coletoras do Pacífico que protege os manguezais e fortalece a autonomia econômica de suas integrantes.',
        },
        social: { facebook: '#', instagram: '#' },
    },
    {
        logo: 'src/assets/logos/org-casa-lumbre.svg',
        name: 'Casa Lumbre',
        region: 'mx',
        url: '#',
        country: { es: 'México', en: 'Mexico', pt: 'México' },
        description: {
            es: 'Espacio de acogida y acompañamiento psicosocial para mujeres que salen de contextos de violencia, con talleres de autonomía y redes de apoyo.',
            en: 'A shelter and psychosocial support space for women leaving violent contexts, with autonomy workshops and support networks.',
            pt: 'Espaço de acolhimento e acompanhamento psicossocial para mulheres que saem de contextos de violência, com oficinas de autonomia e redes de apoio.',
        },
        social: { facebook: '#', instagram: '#' },
    },
    {
        logo: 'src/assets/logos/org-cuidar-datos.svg',
        name: 'Observatorio Cuidar Datos',
        region: 'mx',
        url: '#',
        country: { es: 'México', en: 'Mexico', pt: 'México' },
        description: {
            es: 'Equipo de análisis de datos abiertos que produce investigaciones y herramientas digitales para visibilizar desigualdades de género.',
            en: 'An open data team that produces research and digital tools to make gender inequalities visible.',
            pt: 'Equipe de análise de dados abertos que produz pesquisas e ferramentas digitais para dar visibilidade às desigualdades de gênero.',
        },
        social: { linkedin: '#' },
    },
    {
        logo: 'src/assets/logos/org-semillero.svg',
        name: 'Semillero Caribe',
        region: 'ca',
        url: '#',
        country: { es: 'República Dominicana, Haití', en: 'Dominican Republic, Haiti', pt: 'República Dominicana, Haiti' },
        description: {
            es: 'Programa binacional de bancos de semillas y huertos escolares que impulsa la soberanía alimentaria desde las comunidades.',
            en: 'A binational program of seed banks and school gardens that promotes food sovereignty from the community level.',
            pt: 'Programa binacional de bancos de sementes e hortas escolares que impulsiona a soberania alimentar a partir das comunidades.',
        },
        social: { instagram: '#' },
    },
    {
        logo: 'src/assets/logos/org-horizonte.svg',
        name: 'Alianza Horizonte Verde',
        region: 'rg',
        url: '#',
        country: { es: 'Regional', en: 'Regional', pt: 'Regional' },
        description: {
            es: 'Alianza de organizaciones ambientales y feministas que articula agendas de justicia climática en América Latina y el Caribe.',
            en: 'An alliance of environmental and feminist organizations that brings together climate justice agendas across Latin America and the Caribbean.',
            pt: 'Aliança de organizações ambientais e feministas que articula agendas de justiça climática na América Latina e no Caribe.',
        },
        social: { linkedin: '#', youtube: '#' },
    },
    {
        logo: 'src/assets/logos/org-faro.svg',
        name: 'Laboratorio de Narrativas Faro',
        region: 'rg',
        url: '#',
        country: { es: 'Regional', en: 'Regional', pt: 'Regional' },
        description: {
            es: 'Laboratorio de comunicación que acompaña a movimientos sociales a contar sus historias con estrategias creativas y seguras.',
            en: 'A communications lab that helps social movements tell their stories with creative and safe strategies.',
            pt: 'Laboratório de comunicação que acompanha movimentos sociais a contar suas histórias com estratégias criativas e seguras.',
        },
        social: { instagram: '#', linkedin: '#' },
    },
    {
        logo: 'src/assets/logos/org-territorios.svg',
        name: 'Fondo Territorios Libres',
        region: 'ca',
        url: '#',
        country: { es: 'Centroamérica', en: 'Central America', pt: 'América Central' },
        description: {
            es: 'Fondo regional que apoya a defensoras de la tierra y el territorio con financiamiento directo, protección y acompañamiento cercano.',
            en: 'A regional fund that supports land and territory defenders with direct funding, protection and close accompaniment.',
            pt: 'Fundo regional que apoia defensoras da terra e do território com financiamento direto, proteção e acompanhamento próximo.',
        },
        social: { facebook: '#' },
    },
    {
        logo: 'src/assets/logos/org-maizal.svg',
        name: 'Escuela Popular Maizal',
        region: 'ca',
        url: '#',
        country: { es: 'Guatemala', en: 'Guatemala', pt: 'Guatemala' },
        description: {
            es: 'Escuela de educación popular que forma liderazgos comunitarios indígenas a partir de la memoria, la lengua y la milpa.',
            en: 'A popular education school that trains Indigenous community leaders through memory, language and traditional farming.',
            pt: 'Escola de educação popular que forma lideranças comunitárias indígenas a partir da memória, da língua e da roça tradicional.',
        },
        social: { facebook: '#', youtube: '#' },
    },
    {
        logo: 'src/assets/logos/org-infancias.svg',
        name: 'Red Infancias Seguras',
        region: 'rg',
        url: '#',
        country: { es: 'Global', en: 'Global', pt: 'Global' },
        description: {
            es: 'Red internacional que impulsa políticas de protección de la infancia y fortalece a organizaciones locales que trabajan con niñas y niños.',
            en: 'An international network that advances child protection policies and strengthens local organizations working with children.',
            pt: 'Rede internacional que impulsiona políticas de proteção da infância e fortalece organizações locais que trabalham com crianças.',
        },
        social: { instagram: '#', linkedin: '#' },
    },
    {
        logo: 'src/assets/logos/org-lucerna.svg',
        name: 'Cine Itinerante Lucerna',
        region: 'mx',
        url: '#',
        country: { es: 'México', en: 'Mexico', pt: 'México' },
        description: {
            es: 'Proyecto de cine comunitario que lleva proyecciones y talleres de documental a plazas, escuelas y centros culturales.',
            en: 'A community cinema project that brings screenings and documentary workshops to town squares, schools and cultural centers.',
            pt: 'Projeto de cinema comunitário que leva exibições e oficinas de documentário a praças, escolas e centros culturais.',
        },
        social: { instagram: '#', youtube: '#' },
    },
];

export const participantsFor = (lang: Lang) =>
    organizations.map((org) => ({
        logo: org.logo,
        name: org.name,
        url: org.url,
        country: org.country[lang],
        description: org.description[lang],
        social: org.social,
        region: org.region,
    }));
