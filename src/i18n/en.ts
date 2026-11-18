import { defaultTargetDate } from './constants';
import { participantsFor } from './organizations';
import type { Translations } from './es';

export const en: Translations = {
    'page.title': 'Home',
    nav: {
        title: 'Vereda Gathering 2027',
        agenda: 'Agenda',
        countdown: 'Venue',
        about: 'About',
        organizations: 'Organizations',
        faq: 'Questions',
        languages: 'Language',
    },
    hero: {
        title: 'Vereda Gathering 2027',
        lead: 'Three days to learn, create and care together with organizations from Latin America and the Caribbean. Where paths cross.',
        dates: 'October 6 to 8',
        place: 'Oaxaca de Juárez',
        ctaPrimary: 'See the agenda',
        ctaSecondary: 'Common questions',
        host: 'Hosted by the Vereda Clara Foundation',
    },
    agenda: {
        title: 'Agenda',
        intro: 'Each day has its own focus. Pick a day to see its activities.',
        labels: {
            focus: 'Focus of the day',
            days: 'Gathering days',
        },
        activities: [
            {
                weekday: 'Wednesday',
                date: 'Oct 6',
                title: 'Roots',
                icon: 'roots',
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
                weekday: 'Thursday',
                date: 'Oct 7',
                title: 'Paths',
                icon: 'paths',
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
                weekday: 'Friday',
                date: 'Oct 8',
                title: 'Horizons',
                icon: 'horizon',
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
    countdown: {
        title: 'Only',
        subtitle: 'until the gathering begins',
        venueLabel: 'Venue',
        address: ['Posada Vereda Clara', 'Downtown Oaxaca de Juárez, Mexico'],
        linkText: 'How to get there',
        link: '#',
        labels: { days: 'days', hours: 'hours', minutes: 'minutes' },
        finished: 'The gathering has started',
        targetDate: defaultTargetDate,
    },
    about: {
        title: 'About the gathering',
        encounter: {
            title: 'Vereda Gathering of Latin America and the Caribbean',
            paragraphs: [
                'The Vereda Gathering is a biennial meeting that brings together the organizations that walk alongside the foundation. In 2027 it comes to Oaxaca with a simple motto: where paths cross.',
                'Three days designed as an open workshop: each organization brings a project, a question and a tool to share, and leaves with new ideas and allies for the year ahead.',
                'There will be hands-on labs, visits to community projects in the region, time to rest and cultural moments, because we believe social work is also sustained by joy and community.',
                'The methodology is led by Colectivo Telar, a team that designs participatory gatherings with visual activities, small-group work and clear care agreements.',
            ],
        },
        facts: [
            { value: '3', label: 'working days' },
            { value: '14', label: 'organizations' },
            { value: '3', label: 'interpreted languages' },
        ],
        foundation: {
            title: 'Who is hosting',
            description: 'Founded in Oaxaca in 2012, the <strong>Vereda Clara Foundation</strong> supports education, community health and local economy projects led by women. Beyond grants, it offers mentoring, management training and exchange spaces so organizations from different countries can learn from one another.',
        },
    },
    organizations: {
        title: 'Participating organizations',
        intro: 'Fourteen organizations from across the region each bring a project, a question and a tool.',
        filtersLabel: 'Filter by region',
        regions: {
            all: 'All',
            mx: 'Mexico',
            ca: 'Central America and Caribbean',
            sa: 'South America',
            rg: 'Regional and global networks',
        },
        visitSite: 'Website of',
        results: 'Showing {n} of {total} organizations',
        participants: participantsFor('en'),
    },
    faq: {
        title: 'Common questions',
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
        ],
        contact: {
            title: 'Question not listed?',
            text: 'Write or call the gathering team. We reply Monday to Friday.',
            phone: '+52 000 000 0000',
            email: 'logistica@encuentrovereda.example',
        },
    },
    postEvent: {
        title: 'After the gathering',
        description: 'Once it is over, we will share what the path left behind:',
        eventList: ['Photo gallery', 'Video', 'Social media', 'Graphic record', 'Testimonials'],
    },
    notFound: {
        title: 'Page not found',
        message: 'The page you are looking for does not exist or has been moved.',
        button: 'Back to home',
    },
    og: {
        title: 'Vereda Gathering 2027 — Vereda Clara Foundation',
        description: 'Where paths cross: learning, creating and caring together. Oaxaca, Mexico, October 6 to 8, 2027.',
        imageAlt: 'Vereda Gathering 2027, October 6 to 8 in Oaxaca de Juárez',
        siteName: 'Vereda Gathering',
        locale: 'en_US',
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
        homeLink: 'Vereda Gathering 2027, go to top',
        heroImageAlt: 'Illustration of a footpath climbing between hills toward a marigold sun',
        logoFoundationAlt: 'Vereda Clara Foundation logo',
        logoEventAlt: 'Vereda Gathering 2027 logo',
        logoFacilitatorAlt: 'Colectivo Telar logo',
        aboutIllustrationAlt: 'Illustration of three colored paths crossing each other',
        countdownLabel: 'Countdown to the gathering',
    },
    footer: {
        foundation: {
            title: 'Vereda Clara Foundation',
            description: `<p>The information you share when registering will only be used to prepare your travel, lodging and Vereda Gathering activities. You can ask us to delete it at any time by writing to the gathering team.</p>
<p>This site is a demo: the Vereda Clara Foundation and the Vereda Gathering are fictional.</p>`,
        },
        privacyTitle: 'Your data',
        followTitle: 'Follow us',
        facilitatorLabel: 'Methodology',
        social: {
            facebook: '#',
            instagram: '#',
        },
        copyright: '© 2027 Vereda Clara Foundation. All rights reserved.',
    },
};
