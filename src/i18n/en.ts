import { defaultTargetDate } from './constants';
import { participantsFor } from './organizations';
import type { Translations } from './es';

export const en: Translations = {
    'page.title': 'Home',
    nav: {
        title: 'VEREDA CLARA FOUNDATION',
        about: 'ABOUT',
        agenda: 'AGENDA',
        countdown: 'COUNTDOWN',
        organizations: 'PARTICIPATING ORGANIZATIONS',
        faq: 'FAQ',
    },
    hero: {
        title: 'VEREDA CLARA \n FOUNDATION',
        subtitle: 'Crossing paths. \n Learning, creating and caring together',
    },
    about: {
        title: 'ABOUT...',
        encounter: {
            title: '<strong>Vereda Gathering</strong> of Latin America and the Caribbean 2027',
            paragraphs: [
                'The Vereda Gathering is a biennial meeting that brings together the organizations that walk alongside the foundation. In 2027 it comes to Oaxaca with a simple motto: crossing paths.',
                'Three days designed as an open workshop: each organization brings a project, a question and a tool to share, and leaves with new ideas and allies for the year ahead.',
                'There will be hands-on labs, visits to community projects in the region, time to rest and cultural moments, because we believe social work is also sustained by joy and community.',
                'The methodology is led by Colectivo Telar, a team that designs participatory gatherings with visual activities, small-group work and clear care agreements.',
            ],
        },
        foundation: {
            title: 'Vereda Clara Foundation',
            description: 'Founded in Oaxaca in 2012, the <strong>Vereda Clara Foundation</strong> supports education, community health and local economy projects led by women. Beyond grants, it offers mentoring, management training and exchange spaces so organizations from different countries can learn from one another.',
        },
    },
    countdown: {
        title: 'THE JOURNEY BEGINS IN...',
        address: ['Oaxaca de Juárez', 'Posada Vereda Clara'],
        link: '#',
        labels: { days: 'days', hours: 'hours', minutes: 'minutes' },
        targetDate: defaultTargetDate,
    },
    agenda: {
        title: 'AGENDA',
        labels: {
            activity: 'Focus',
        },
        activities: [
            {
                day: 'WEDNESDAY 6',
                title: 'Roots',
                image: 'src/assets/img/A-Day1.svg',
                objective: 'Present each organization’s projects and discover common ground through visual activities.',
                events: [
                    { time: '8:30 – 9:15', title: 'Arrival coffee and welcome kits' },
                    { time: '9:15 – 10:00', title: 'Opening circle with Colectivo Telar' },
                    { time: '10:00 – 12:30', title: 'Project fair: each organization in three minutes' },
                    { time: '12:30 – 13:00', title: 'Break with seasonal fruit' },
                    { time: '13:00 – 14:30', title: 'Knowledge map: what we do well and what we want to learn' },
                    { time: '14:30 – 16:00', title: 'Shared lunch in the garden' },
                    { time: '18:30 – 21:00', title: 'Open-air documentary night' },
                ],
            },
            {
                day: 'THURSDAY 7',
                title: 'Paths',
                image: 'src/assets/img/A-Day2.svg',
                objective: 'Learning by doing: hands-on labs and visits to community projects in the Central Valleys.',
                events: [
                    { time: '8:00 – 9:00', title: 'Coffee and plan for the day' },
                    { time: '9:00 – 11:30', title: 'Parallel labs: communications, finance and data' },
                    { time: '11:30 – 12:00', title: 'Break' },
                    { time: '12:00 – 15:00', title: 'Visits to weaving cooperatives and community gardens' },
                    { time: '15:00 – 16:30', title: 'Lunch at a traditional kitchen' },
                    { time: '17:00 – 18:30', title: 'Optional: Oaxacan cooking class' },
                    { time: '20:00 – 22:00', title: 'Party with a local brass band' },
                ],
            },
            {
                day: 'FRIDAY 8',
                title: 'Horizons',
                image: 'src/assets/img/A-Day3.svg',
                objective: 'Turn what we learned into concrete collaboration agreements for the next two years.',
                events: [
                    { time: '8:30 – 9:30', title: 'Coffee and morning walk' },
                    { time: '9:30 – 11:30', title: 'Alliance tables by country and topic' },
                    { time: '11:30 – 12:00', title: 'Break' },
                    { time: '12:00 – 13:30', title: 'Plenary: commitments and next steps' },
                    { time: '13:30 – 15:00', title: 'Closing lunch' },
                    { time: '15:00 – 16:00', title: 'Group photo and certificates' },
                ],
            },
        ],
    },
    organizations: {
        title: 'PARTICIPATING ORGANIZATIONS',
        participants: participantsFor('en'),
    },
    faq: {
        title: 'FREQUENTLY ASKED QUESTIONS',
        faqs: [
            {
                title: 'Where will the gathering take place?',
                content: '<p>At Posada Vereda Clara, an old house with courtyards and a garden in downtown Oaxaca de Juárez. Lodging, meeting rooms and the dining hall are all on site.</p>',
            },
            {
                title: 'Which dates should I save?',
                content: `<ul>
                    <li><strong>Tuesday, October 5:</strong> afternoon arrivals.</li>
                    <li><strong>Wednesday 6 to Friday 8 October:</strong> gathering program.</li>
                    <li><strong>Saturday, October 9:</strong> departures.</li>
                </ul>`,
            },
            {
                title: 'How many people can attend per organization?',
                content: 'Each organization can register up to two people. If someone else needs to attend for accessibility or interpretation reasons, let us know when you register.',
            },
            {
                title: 'In which languages will the sessions be held?',
                content: 'Sessions will be in Spanish, with simultaneous interpretation into English and Portuguese. Printed materials will also be available in all three languages.',
            },
            {
                title: 'Do I need to prepare anything?',
                content: 'Just a short presentation of your project (three minutes, no slides) and, if you like, an object or publication for the exchange table.',
            },
            {
                title: 'Does the foundation cover travel?',
                content: 'Yes. The foundation covers transport, lodging and meals for registered participants. You will receive your itinerary by email a few weeks before the gathering.',
            },
            {
                title: 'Will childcare be available?',
                content: 'Yes. If you travel with young children, there will be a childcare space during the sessions. Mention it in your registration so we can plan age-appropriate activities.',
            },
            {
                title: 'Is the venue accessible?',
                content: 'Meeting rooms, the dining hall and several bedrooms are on the ground floor and have ramps. Tell us about any specific need and we will have it ready.',
            },
            {
                title: 'What food options will there be?',
                content: 'Local cuisine menus with vegetarian, vegan and gluten-free options. If you have any allergies, please note them in your registration.',
            },
            {
                title: 'What clothes should I bring?',
                content: 'In October the days are mild and the nights are cool. Bring comfortable shoes for Thursday’s visits and a light jacket.',
            },
            {
                title: 'Will photos be taken during the gathering?',
                content: 'Photos will only be taken of group activities. You can choose on your name badge if you prefer not to appear in pictures.',
            },
            {
                title: 'Who do I contact with questions?',
                content: 'The gathering team: <strong>+52 000 000 0000</strong> / <a href="#">logistica@encuentrovereda.example</a>',
            },
        ],
    },
    notFound: {
        title: 'Page not found',
        message: 'The page you are looking for does not exist or has been moved.',
        button: 'Back to home',
    },
    og: {
        title: 'Vereda Gathering 2027 — Vereda Clara Foundation',
        description: 'Crossing paths: learning, creating and caring together. Oaxaca, Mexico, October 2027.',
        imageAlt: 'Illustration of the Vereda Gathering 2027 by the Vereda Clara Foundation',
        siteName: 'Vereda Gathering',
        locale: 'en_US',
    },
    postEvent: {
        title: 'After the gathering',
        description: 'Once the gathering is over, we will share some memories here. We invite you to come back soon.',
        eventList: ['Photo gallery', 'Video', 'Social media', 'Graphic record', 'Testimonials'],
    },
    a11y: {
        skipToContent: 'Skip to content',
        metaDescription: 'Vereda Gathering 2027 — Latin American gathering of the Vereda Clara Foundation for the rights of women and girls.',
        navMain: 'Main navigation',
        navMobile: 'Mobile menu',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
        switchToEs: 'Cambiar a español',
        switchToEn: 'Switch to English',
        switchToPt: 'Mudar para português',
        heroImageAlt: 'Illustration of a landscape with hills, a river and birds for the Vereda Gathering 2027',
        logoFoundationAlt: 'Vereda Clara Foundation logo',
        logoEventAlt: 'Vereda Gathering 2027 logo',
        logoFacilitatorAlt: 'Colectivo Telar logo',
        aboutIllustrationAlt: 'Illustration of plants and sun over hills',
        countdownLabel: 'Countdown to the event',
        prevDay: 'Previous day',
        nextDay: 'Next day',
        faqBirdsAlt: 'Decorative illustration of birds',
        faqIllustrationAlt: 'Decorative illustration of mountains and plants',
        closeDialog: 'Close information',
        postEventLandscapeAlt: 'Landscape illustration',
    },
    footer: {
        foundation: {
            title: 'VEREDA CLARA\nFOUNDATION',
            description: `<p>The information you share when registering will only be used to prepare your travel, lodging and Vereda Gathering activities. You can ask us to delete it at any time by writing to the gathering team.</p>
<p>This site is a demo: the Vereda Clara Foundation and the Vereda Gathering are fictional.</p>`,
        },
        social: {
            facebook: '#',
            instagram: '#',
        },
        copyright: '© 2027 Vereda Clara Foundation. All rights reserved.',
    },
};
