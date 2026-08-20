/* ==========================================================================
   Touchbase — Moteur bilingue FR / EN
   --------------------------------------------------------------------------
   Usage dans le HTML :
     <p data-i18n="hero.title">…</p>            → remplace le texte
     <img data-i18n-alt="hero.imageAlt">        → remplace l'attribut alt
     <a data-i18n-aria-label="nav.home">        → remplace aria-label
   La langue est mémorisée dans localStorage et appliquée au chargement.
   ========================================================================== */

const TRANSLATIONS = {
  en: {
    /* --- Navigation --- */
    'nav.profile': 'Your profile',
    'nav.innovations': 'Our innovations',
    'nav.sloganLine1': 'Proudly',
    'nav.sloganLine2': 'Canadian',
    'nav.login': 'Login',
    'nav.logoAlt': 'Touchbase',
    'nav.openMenu': 'Open the menu',
    'nav.closeMenu': 'Close the menu',
    'nav.langSwitch': 'Switch to French',
    'nav.langSwitchWord': 'French',
    'nav.about': 'About us',

    /* --- Sous-menu « Your Profile » --- */
    'submenu.brokers': 'Real estate brokers',
    'submenu.agencies': 'Real estate agencies',
    'submenu.boards': 'Real estate boards',
    'submenu.buyers': 'Buyers and sellers',

    /* --- Héro : une solution pour chaque acteur --- */
    'hero.title': 'More time, more connections, more opportunities.',
    'hero.lead':
      'Proudly Canadian, Touchbase brings together the technology and tools that help real estate professionals, brokerages and boards work smarter, collaborate better and build stronger client connections.',
    'hero.note': 'Select your profile to explore Touchbase.',

    'hero.agent.title': 'Brokers',
    'hero.agent.text': 'Streamline your work and build stronger client relationships.',
    'hero.brokerage.title': 'Brokerages',
    'hero.brokerage.text': 'Simplify operations and support your teams with a single platform.',
    'hero.associations.title': 'Boards',
    'hero.associations.text': 'Connect your members with the technology they need to succeed.',
    'hero.customers.title': 'Buyers and sellers',
    'hero.customers.text': 'See how AI boosts listing visibility and reaches more buyers.',
    'hero.cardCta': 'Learn more',

    /* --- Application mobile --- */
    'app.title': 'Work from anywhere with the TouchBase app',
    'app.lead':
      "Whether you're at the office, in the car, or between showings, TouchBase is always within reach. Manage messages, book showings, and update clients instantly.",
    'app.feature1': 'Real-time notification push for showing requests',
    'app.feature2': 'Direct broker-to-broker feedback tools',
    'app.feature3': 'Offline access to listing worksheets',
    'app.appStore': 'Download on the App Store',
    'app.googlePlay': 'Get it on Google Play',
    'app.videoCta': 'Play the Touchbase presentation video',

    /* --- Chiffres clés --- */
    'stats.title': 'Powering Canadian real estate since 2008',
    'stats.transactions': 'Transactions / Month',
    'stats.boards': 'Real Estate Boards',
    'stats.offices': 'Real Estate Offices',

    /* --- Bandeau « Touchbase handles the rest » --- */
    'band.titleLine1': 'You focus on your clients,',
    'band.titleLine2': 'TouchBase handles the rest',
    'band.lead':
      'For almost 20 years, Touchbase has helped real estate professionals across Canada simplify showings, streamline communication and stay one step ahead of the competition through one powerful platform.',
    'band.ctaPrimary': 'Free trial for brokerages',
    'band.ctaSecondary': 'Explore Touchbase innovations',
    'band.imageAlt': 'The Touchbase platform on desktop and mobile',

    /* --- Grille de fonctionnalités --- */
    'features.title': 'Technology that helps you do more',
    'features.lead':
      'From AI-powered tools to smarter workflows, Touchbase helps real estate professionals across Canada simplify their day-to-day, reduce administrative tasks and spend more time on what matters: better serving clients and closing more deals.',
    'features.showing.title': 'Showing management',
    'features.showing.text': 'Automated showing requests, approvals, and dynamic tour mapping in real-time.',
    'features.mls.title': 'MLS integration',
    'features.mls.text': 'Real-time synchronisation with major listing databases across Canada.',
    'features.ai.title': 'AI-powered solutions',
    'features.ai.text':
      'Smart tools and innovations to automate tasks, work faster from anywhere and improve interactions.',
    'features.team.title': 'Dedicated team',
    'features.team.text': 'In-house support, software and AI development teams to assist you and build new features.',
    'features.workflow.title': 'Workflow automation',
    'features.workflow.text': 'Calendar integration and automated showing workflows, saving time and effort.',
    'features.admin.title': 'Admin interface',
    'features.admin.text': 'Dedicated interface designed to allow assistants to easily manage their teams.',

    /* --- Logos clients --- */
    'clients.title': 'The choice of Realtors® across Canada since 2001',

    /* --- Témoignage --- */
    'testimonial.quote':
      '"When I hear of other real estate boards and associations that don\'t have Touchbase, I just shudder to think what life would be like without it! The ease with which we organise showings is just awesome."',
    'testimonial.role': 'Broker of Record, Keller Williams Lifestyles Realty',

    /* --- Manifeste --- */
    'statement.titleA': "Innovation isn't a feature.",
    'statement.titleB': "It's our mindset.",
    'statement.lead':
      'Real estate moves fast, and so do we. Every tool, every workflow automation, and every update is designed to help you work smarter and faster.',

    /* --- Bouton d'appel à l'action partagé (héros courtiers, avantages associations) --- */
    'cta.getStarted': 'Get started',

    /* --- Encart d'aide --- */
    'help.title': 'Any question or need help?',
    'help.lead': 'To log in to Touchbase or get support:',
    'help.cta': 'Contact us',

    /* --- Pied de page --- */
    'footer.copyright': '© 2026, Tootelo Innovation Inc. All rights reserved.',
    'footer.helpCenter': 'Help Center',
    'footer.contact': 'Contact us',
    'footer.privacy': 'Privacy policy',
    'footer.terms': 'Terms of use',

    /* --- Pages intérieures --- */
    'for-brokers.eyebrow': 'For brokers',
    'for-brokers.title': 'Touchbase for real estate brokers',
    'for-brokers.lead': 'Set up your listings once, approve showings from anywhere, and let Touchbase handle the notifications, confirmations and feedback requests.',
    'for-brokerages.eyebrow': 'For brokerages',
    'for-brokerages.title': 'Benefits of Touchbase for brokerages',
    'for-brokerages.lead': 'A high-performance front office system: unlimited group messaging, automated confirmations, a call centre interface included, and deep MLS integration.',
    'for-associations.eyebrow': 'For associations',
    'for-associations.title': 'Touchbase for real estate associations',
    'for-associations.lead': 'Board-wide messaging, auditable reports admissible in court, and your members’ data protected in Canada — never shared with third parties.',
    'for-customers.eyebrow': 'For buyers and sellers',
    'for-customers.title': 'A new way to discover real estate online',
    'for-customers.lead': 'Search habits are changing. Touchbase helps properties surface where buyers actually look, while keeping the connection with a real estate professional.',
    'innovations.eyebrow': 'New features',
    'innovations.titleA': 'Innovation isn’t a feature.',
    'innovations.titleB': 'It’s our mindset.',
    'innovations.lead': 'RCS messaging, the Automaton, the AI Assistant and the AI Receptionist — the tools that redefine how brokers communicate, manage showings and close sales.',
    'about.titleA': 'About Touchbase',
    'about.titleB': 'Built for Canadian real estate. Built to evolve.',
    'about.heroAlt': 'Toronto, Ontario, Canada skyline at dusk',
    'about.intro1':
      'Touchbase Real Estate is a proudly Canadian technology company built specifically for the real estate industry. Since 2008, we’ve helped real estate brokers, brokerages and boards across the country simplify communication, streamline their work and reduce administrative burden, so they can spend more time on what matters most: their clients and their business.',
    'about.intro2':
      'Touchbase was founded in Canada by Benoit Brunel, who set out to find a better way to help his mother manage her real estate appointments. After countless phone calls, rescheduling and telephone tag, he knew there had to be a more efficient way. That simple idea became the foundation for a platform now trusted by real estate professionals across Canada.',
    'about.intro3':
      'Today, Touchbase goes far beyond scheduling and showing management. Our team continually develops innovative solutions that bring cutting-edge technology and AI-powered tools to the real estate industry. From intelligent assistants and automated workflows to advanced communication and productivity features, Touchbase helps professionals work smarter, save time and deliver better results.',
    'about.intro4':
      'Our proven platform continues to make everyday work more efficient, with powerful tools for showing management, calendar synchronisation, reporting, group messaging and more. Users can also stay connected on the go with the Touchbase mobile app, with flexible communication preferences and easy access to essential tools wherever they work.',
    'about.intro5':
      'Behind every great idea and every new innovation is a team that genuinely cares about the people we serve. Our Canadian-based support and development teams work closely with real estate professionals and organisations from coast to coast, listening to their needs, understanding the realities of their markets and turning their ideas into better solutions.',
    'about.cta.title': 'Have questions about Touchbase? Let’s talk.',
    'about.cta.button': 'Contact us',
    'about.mission.title': 'Our mission',
    'about.mission.text':
      'To help our clients to be more effective in their line of work by giving them access to solutions allowing for optimized communication.',
    'about.facts.title': 'Interesting Touchbase facts',
    'about.facts.item1': 'Touchbase was the first showing management system',
    'about.facts.item2': 'We are proudly rooted, owned and operated in Canada',
    'about.facts.item3': 'We will never sell your data to a third party',
    'about.facts.item4': 'We are a green company with over 50 green policies',
    'about.facts.item5': '99.98% uptime for more than 15 years',
    'about.facts.item6': 'Touchbase reports are legally admissible in court',
    'about.facts.item7': 'Comes with a free call centre interface',
    'about.facts.item8': 'All of our reps speak at least two languages',
    'about.testimonial.quote':
      '"The Touchbase solution provides our REALTORS®, company, and clients with an all-encompassing communication platform. Its features, integration, web-based platform, ease of use, and support leave it unparalleled in the industry."',
    'about.testimonial.role': 'Broker / Manager',
    'guides.eyebrow': 'Practical guides',
    'guides.title': 'Learning opportunities',
    'guides.lead': 'Short videos, downloadable guides and step-by-step articles to help you get the most out of Touchbase.',
    'wip.badge': 'In progress',
    'wip.title': 'This section is being integrated',
    'wip.text': 'The layout and design system are in place. The detailed content of this page is being brought over from Figma.',
    'contact.eyebrow': 'Contact us',
    'contact.title': 'We’d love to hear from you',
    'contact.lead': 'Tell us about your brokerage or board and a Touchbase representative will get back to you within one business day.',
    'contact.required': 'Fields marked * are required.',
    'contact.firstName': 'First name',
    'contact.lastName': 'Last name',
    'contact.email': 'Work email',
    'contact.phone': 'Phone',
    'contact.org': 'Brokerage or real estate board',
    'contact.profile': 'I am a…',
    'contact.profilePick': 'Select your profile',
    'contact.profileBroker': 'A real estate broker',
    'contact.profileBrokerage': 'A brokerage',
    'contact.profileBoard': 'A real estate board',
    'contact.profileBuyer': 'A buyer or seller',
    'contact.message': 'How can we help?',
    'contact.messagePh': 'Tell us about your team size and what you need…',
    'contact.consent': 'I agree to be contacted by Touchbase about my request.',
    'contact.send': 'Send message',
    'contact.supportLabel': 'Customer support',
    'contact.hoursLabel': 'Opening hours',
    'contact.hoursDays': 'Monday – Friday',
    'contact.hoursTime': '9 AM – 6 PM EST',
    'contact.selfLabel': 'Prefer self-serve?',
    'contact.selfValue': 'Touchbase Help Center',
    'contact.selfText': 'Guides, tutorials and answers to the most common questions, available 24/7.',
    'info.eyebrow': 'Important info',
    'info.title': 'Important information',
    'info.lead': 'Our policies, terms and support resources, all in one place.',
    'info.privacyDesc': 'How we collect, use and protect your personal information.',
    'info.termsDesc': 'The terms that govern your use of Touchbase services.',
    'info.helpDesc': 'Guides and tutorials to use Touchbase like a pro.',
    'info.contactDesc': 'Reach a Touchbase representative directly.',

    /* --- Page « Nos innovations » --- */
    'innov.title': 'Touchbase: Driving innovation across Canadian real estate',
    'innov.lead1': 'From smarter workflows to AI-powered tools, every Touchbase innovation is designed and created by our in-house teams to save time, simplify everyday work and help real estate professionals get more done.',
    'innov.lead2': 'Real estate never stands still, and neither do we. We are constantly developing new tools and features to help you stay ahead and work more efficiently.',
    'innov.videoCta': 'Play the Touchbase innovation video',
    'innov.eyebrow': 'NEW FEATURES',
    'innov.sectionTitle': 'Discover the latest Touchbase innovations designed to simplify your work and drive better results.',
    'innov.more': 'Get more info',
    'innov.rcs.title': 'RCS (Rich SMS) - Smarter messaging',
    'innov.rcs.text': 'Turn everyday texts into richer, more interactive conversations that make communication faster and more effective.',
    'innov.rcs.p1': 'Option of sharing images, documents and links',
    'innov.rcs.p2': 'Conversations grouped under one contact',
    'innov.rcs.p3': 'Quick-action buttons for instant responses',
    'innov.rcs.alt': 'A broker reading a Touchbase showing request on a smartphone',
    'innov.live.title': 'Touchbase Live - Voice controlled AI',
    'innov.live.text': 'Use your voice to ask the AI-powered assistant to complete tasks, book showings and more, even when you\'re on the go.',
    'innov.live.p1': 'Hands-free commands, ideal when you\'re behind the wheel',
    'innov.live.p2': 'Intelligent conversation summaries',
    'innov.live.p3': 'Advanced property search',
    'innov.live.alt': 'A broker using voice commands while driving',
    'innov.automaton.title': 'Touchbase Automaton - Centralised communications',
    'innov.automaton.text': 'Automatically centralise your communications and keep every conversation, request and follow-up within easy reach.',
    'innov.automaton.p1': 'Centralised messages, no matter where they come from',
    'innov.automaton.p2': 'Simplified showing and follow-up management',
    'innov.automaton.p3': 'Faster client and broker responses',
    'innov.automaton.alt': 'Touchbase messages centralised on a phone and a laptop',
    'innov.reception.title': 'AI Receptionist - Around-the-clock response',
    'innov.reception.text': 'Never miss an opportunity with the new AI receptionist available 24/7, even when your team is unavailable.',
    'innov.reception.p1': 'Instant call answering',
    'innov.reception.p2': 'Intelligent message taking and dispatching',
    'innov.reception.p3': 'More than 120 languages supported',
    'innov.reception.alt': 'A receptionist taking a call in a bright office',
    'innov.proof.title': 'Innovation backed by experience',
    'innov.proof.lead': 'These new innovations complement the proven Touchbase features Canadian real estate professionals, agencies and boards have trusted and relied on since 2008. They include:',
    'innov.proof.1': 'Next-generation technologies to improve communication',
    'innov.proof.2': 'Smart showing availability and automated confirmations',
    'innov.proof.3': 'Listing updates and group communications',
    'innov.proof.4': 'Calendar integration for seamless scheduling',
    'innov.proof.5': 'Detailed reporting for every listing',
    'innov.proof.6': 'Buyer\'s Tour to optimise planning and scheduling of showings',
    'innov.proof.7': 'Custom automated feedback requests',
    'innov.proof.8': 'Automated daily, weekly or monthly reports',
    'innov.proof.9': 'Simplified holiday and replacement planning',
    'innov.proof.10': 'Dedicated admin tools',
    'innov.proof.11': 'And so much more',
    'innov.helpLead': 'Technology is evolving, and so is the way people are finding properties.',

    /* --- Page « Courtiers immobiliers » --- */
    'brokers.kicker': 'Touchbase for real estate brokers',
    'brokers.title': 'More time for what moves your business forward',
    'brokers.lead1': 'Real estate brokers juggle clients, showings, communications and countless day-to-day details. Touchbase brings the tools you need together to simplify the work behind every transaction, so you can spend more time with your clients and focus on your business.',
    'brokers.lead2': 'From proven showing management and communication tools to AI-powered innovations, Touchbase continues to evolve to help you save time, stay organised and get more done throughout your day.',
    'brokers.heroAlt': 'Touchbase, built for Canadian real estate',
    'brokers.step1.title': 'Simplified listing management',
    'brokers.step1.text': 'Automatically import your MLS listings and manage availability, showing instructions and access details all in one place.',
    'brokers.step2.title': 'Simplified showing coordination',
    'brokers.step2.text': 'Manage showing requests, approvals and confirmations easily, through the app, text and email, quickly set up buyers’ tours and more.',
    'brokers.step3.title': 'A complete front-office solution',
    'brokers.step3.text': 'Book showings, send group notifications, monitor activity, check your calendar, send feedback requests and generate reports directly from your Touchbase app.',
    'brokers.innovTitle': 'Touchbase’s most recent innovations designed for you',
    'brokers.learnMore': 'Learn more',
    'brokers.live.title': 'Touchbase Live',
    'brokers.live.subtitle': 'Hands-free assistance when you need it',
    'brokers.live.text': 'Use only your voice to ask the AI-powered assistant to complete tasks, even when you’re on the go.',
    'brokers.live.p1': 'Complete tasks using simple voice commands',
    'brokers.live.p2': 'Book showings, search properties and more without touching your phone',
    'brokers.live.p3': 'Stay productive while on the move',
    'brokers.live.alt': 'A broker using voice commands while driving',
    'brokers.rcs.title': 'RCS messaging (rich SMS)',
    'brokers.rcs.subtitle': 'Richer, more effective communications',
    'brokers.rcs.text': 'Bring messaging to life with interactive features that make communication more engaging, convenient and efficient than traditional SMS.',
    'brokers.rcs.p1': 'All conversations kept in one easy-to-follow thread',
    'brokers.rcs.p2': 'Share documents, links and pictures instantly',
    'brokers.rcs.p3': 'Quick responses with built-in action buttons',
    'brokers.rcs.alt': 'A broker reading a Touchbase message on a smartphone',
    'brokers.automaton.title': 'Touchbase Automaton',
    'brokers.automaton.subtitle': 'One place for every conversation',
    'brokers.automaton.text': 'Keep communications, requests and follow-ups organised in one centralised platform for easier access and management.',
    'brokers.automaton.p1': 'Centralised communications across your teams',
    'brokers.automaton.p2': 'Conversations and requests kept within easy reach',
    'brokers.automaton.p3': 'Simplified follow-ups and communication management',
    'brokers.automaton.alt': 'Touchbase conversations centralised on a smartphone',
    'brokers.features.title': 'FEATURES YOU CAN RELY ON',
    'brokers.features.lead': 'EVERY INNOVATION IS BUILT TO SIMPLIFY YOUR COMMUNICATIONS, OPTIMIZE YOUR FOLLOW-UPS AND HELP YOU SAVE TIME.',
    'brokers.features.1': 'Calendar synchronisation for simplified scheduling',
    'brokers.features.2': 'Automated listing and showing process to save you time',
    'brokers.features.3': 'Option of including your sellers in certain communications for optimal service',
    'brokers.features.4': 'Secure cloud technology that keeps your listings and profile information automatically synchronised upon login',
    'brokers.features.5': 'Appointment calendars and maps automatically updated with each new showing entered',
    'brokers.features.alt': 'The Touchbase app on three smartphones',

    /* --- Page « Agences immobilières » --- */
    'brkg.kicker': 'Touchbase for real estate brokerages',
    'brkg.title': 'Technology built around your team',
    'brkg.lead1': 'Your brokerage is made up of people with different roles, responsibilities and ways of working. Touchbase brings them together on one powerful platform, making it easier to communicate, coordinate and manage the day-to-day.',
    'brkg.lead2': 'Built for Canadian real estate, Touchbase combines proven technology with continuous innovation and AI-powered solutions, helping your teams save time, simplify operations and keep your business moving.',
    'brkg.cta': 'Free trial for brokerages',
    'brkg.heroAlt': 'Touchbase on a laptop, a tablet and a smartphone',
    'brkg.msg.eyebrow': 'Centralised workflows',
    'brkg.msg.title': 'Powerful messaging system',
    'brkg.msg.1': 'Centralise communications across SMS, email, and app notifications',
    'brkg.msg.2': 'Create an unlimited number of messaging groups for targeted communication',
    'brkg.msg.3': 'Customize office settings, duty schedules and more',
    'brkg.msg.cta': 'Contact our team',
    'brkg.msg.alt': 'The Touchbase messaging system on three smartphones',
    'brkg.grid.eyebrow': 'Efficiency beyond compare',
    'brkg.grid.title': 'Awesome features',
    'brkg.f1.t': 'User profile',
    'brkg.f1.d': 'Each broker sets up their profile with preferred communication methods, from push notifications to direct text messages.',
    'brkg.f2.t': 'Admin profile',
    'brkg.f2.d': 'Admins can manage broker profiles, create custom groups within the office, send group notifications and more.',
    'brkg.f3.t': 'Notices of changes',
    'brkg.f3.d': 'Instantly notify brokers and others who showed interest in a listing when prices or conditions shift.',
    'brkg.f4.t': 'Assistant interface',
    'brkg.f4.d': 'Dedicated interface for assistants and support teams.',
    'brkg.f5.t': 'Reporting statistics',
    'brkg.f5.d': 'Generate interactive dashboards to monitor showing frequencies, feedback response rates, and staff workloads.',
    'brkg.f6.t': 'Custom design',
    'brkg.f6.d': 'Co-brand the Touchbase portal with your brokerage’s colours, logos and specific system preferences.',
    'brkg.f7.t': 'Listing details',
    'brkg.f7.d': 'Synchronise property worksheets, lockbox locations, showing instructions, and broker notes in real-time.',
    'brkg.f8.t': 'Office preferences',
    'brkg.f8.d': 'Adjust administrative defaults globally, including showing hours, holidays, and automatic escalations.',
    'brkg.f9.t': 'Call center',
    'brkg.f9.d': 'Choose your preferred call centre provider and connect through the Touchbase interface.',
    'brkg.f10.t': 'Options for sellers',
    'brkg.f10.d': 'Allow clients to confirm or decline showing requests directly via text message or email.',
    'brkg.f11.t': 'Multichannel',
    'brkg.f11.d': 'Reach members and/or teams through the Touchbase app, SMS/RCS or email - you choose.',
    'brkg.f12.t': 'Duty schedule',
    'brkg.f12.d': 'Manage rotative desk schedules, broker replacements, office presence and more.',
    'brkg.innovTitle': 'Touchbase’s most recent innovations designed for your teams',
    'brkg.recep.title': 'AI Receptionist',
    'brkg.recep.subtitle': 'Your front office, always available',
    'brkg.recep.text': 'Keep your brokerage responsive around the clock with an AI-powered receptionist that handles incoming calls when your team is unavailable.',
    'brkg.recep.p1': 'Answers calls and handles requests instantly',
    'brkg.recep.p2': 'Directs callers to the right person or resource',
    'brkg.recep.p3': 'Communicates with clients in 120+ languages',
    'brkg.rcs.title': 'RCS messaging (rich SMS)',
    'brkg.rcs.subtitle': 'Richer communication for your team',
    'brkg.rcs.text': 'Give brokers and staff a more engaging way to communicate with clients and colleagues through interactive, feature-rich messaging.',
    'brkg.rcs.p1': 'Conversations organised by contact',
    'brkg.rcs.p2': 'Easy sharing of images, documents and links',
    'brkg.rcs.p3': 'Built-in action buttons for faster responses',
    'brkg.live.title': 'Touchbase Live',
    'brkg.live.subtitle': 'AI-powered assistance your teams can rely on',
    'brkg.live.text': 'With our new AI assistant, brokers can use their voice to manage tasks and access information, even when they’re away from the office, behind the wheel, etc.',
    'brkg.live.p1': 'Voice-powered access to everyday tasks',
    'brkg.live.p2': 'Book showings, search properties and more hands-free',
    'brkg.live.p3': 'Optimal productivity while on the go',
    'brkg.auto.title': 'Touchbase automaton',
    'brkg.auto.subtitle': 'One place for all communications',
    'brkg.auto.text': 'Have all communications centralised in Touchbase, no matter where it’s coming from, so no important information is ever lost.',
    'brkg.auto.p1': 'Communications consolidated across channels',
    'brkg.auto.p2': 'Centralised access to conversations and requests',
    'brkg.auto.p3': 'Easier coordination for all your teams',
    'brkg.web.eyebrow': 'Your Touchbase, your way',
    'brkg.web.title': 'Built for flexibility',
    'brkg.web.1': 'Web and mobile access',
    'brkg.web.2': 'No maintenance fees',
    'brkg.web.3': 'Free updates and continuous development',
    'brkg.web.4': 'No implementation or training fees',
    'brkg.web.5': 'No long-term commitment or contract',
    'brkg.web.6': '30-day free trial',
    'brkg.web.7': 'Cloud technology keeps listing and profile information up to date across devices',
    'brkg.web.8': 'Appointment calendars automatically update as new showings are added',
    'brkg.web.cta': 'Start free trial',
    'brkg.web.alt': 'The Touchbase front office on a tablet',

    /* --- Page « Chambres immobilières » --- */
    'assoc.kicker': 'Touchbase for real estate boards',
    'assoc.title': 'Innovation built around your members',
    'assoc.lead1': 'Real estate boards and associations are at the heart of the communities they serve, supporting their members and helping strengthen the profession across Canada.',
    'assoc.lead2': 'Touchbase works alongside boards to provide the technology and tools their members need to communicate more effectively, simplify their work and stay focused on what matters most.',
    'assoc.lead3': 'With solutions built specifically for Canadian real estate, Touchbase helps you deliver more value to your members today while continuing to evolve with your needs.',
    'assoc.heroAlt': 'Touchbase for real estate associations, on a laptop',
    'assoc.b1': 'Secure data hosted in Canada with no third-party sharing',
    'assoc.b2': 'Standardised messaging across every communication platform',
    'assoc.b3': 'Seamless communication between brokers, teams, assistants and call centers',
    'assoc.b4': 'Automated showing process for greater efficiency',
    'assoc.b5': 'Auditable logs and court-admissible reporting',
    'assoc.b6': 'Simple, intuitive and easy-to-use platform',
    'assoc.b7': 'Exceptional value for real estate communication',
    'assoc.b8': 'Flexible integration with your preferred suppliers',
    'assoc.b9': 'Smart default settings for accuracy and efficiency',
    'assoc.innovTitle': 'Touchbase’s most recent innovations designed for your members',
    'assoc.live.title': 'Touchbase Live',
    'assoc.live.subtitle': 'Hands-free AI assistance for your members',
    'assoc.live.text': 'Touchbase gives your members access to an AI-powered assistant they can use by voice to complete tasks and access information, even when they’re on the road.',
    'assoc.live.p1': 'Voice-powered access to everyday tasks',
    'assoc.live.p2': 'Book showings, search properties and more hands-free',
    'assoc.live.p3': 'Stay productive wherever business takes them',
    'assoc.rcs.title': 'RCS messaging (rich SMS)',
    'assoc.rcs.subtitle': 'Richer, more effective member communications',
    'assoc.rcs.text': 'Touchbase gives your members a more engaging way to communicate with richer, interactive messaging that goes beyond traditional SMS.',
    'assoc.rcs.p1': 'Conversations organised in a single thread',
    'assoc.rcs.p2': 'Easy sharing of documents, links and pictures',
    'assoc.rcs.p3': 'Quick responses with built-in action buttons',
    'assoc.auto.title': 'Touchbase Automaton',
    'assoc.auto.subtitle': 'Centralised communication for your members',
    'assoc.auto.text': 'Touchbase gives your members one centralised place to manage communications, requests and follow-ups, helping them keep everything organised and within easy reach.',
    'assoc.auto.p1': 'Centralised communications, no matter where they come from',
    'assoc.auto.p2': 'Easy access to conversations and requests',
    'assoc.auto.p3': 'Simplified communication and follow-up management',
    'assoc.msg.title': 'Simplified communication',
    'assoc.msg.subtitle': 'Board-wide messaging',
    'assoc.msg.p1': 'As a real estate board, you have access to your own Touchbase interface. This allows you to send out messages to your entire board, or send group messages by region.',
    'assoc.msg.p2': 'Communicate instantly with your members and reach them quickly when it matters most. Board-wide messaging can also support emergency initiatives such as Amber Alerts, or Realty Watch, a community crime-prevention program that connects Realtors with police to help locate missing or vulnerable people.',
    'assoc.msg.p3': 'Members receive notifications on the device of their choice, helping ensure important messages are seen when they need to be.',
    'assoc.msg.alt': 'Board-wide messaging on three smartphones',
    'assoc.rep.title': 'Reports and statistics',
    'assoc.rep.subtitle': 'Conflict Resolution & tracking',
    'assoc.rep.p1': 'Generate reports to monitor member usage, quantity of members, messages sent, and more, so you can make informed decisions.',
    'assoc.rep.p2': 'Legally admissible in a court of law, these reports can be used for conflict resolution on all levels to defend your members.',
    'assoc.rep.p3': 'Reports go back up to two years, for easy comparison.',
    'assoc.rep.cta': 'Contact us for your free trial',

    /* --- Page « Acheteurs et vendeurs » --- */
    'cust.kicker': 'Touchbase for buyers and sellers',
    'cust.title': 'A new way to find real estate online',
    'cust.lead1': 'The way people search for real estate is changing. More buyers are turning to AI-powered tools such as ChatGPT, Google AI and other generative AI platforms to ask questions, explore properties and narrow down their options.',
    'cust.lead2': 'Touchbase helps make Canadian real estate listings more discoverable in these new search environments, helping buyers find properties that match their needs while giving sellers greater visibility where people are increasingly looking for information.',
    'cust.heroAlt': 'A buyer asking an AI assistant to find a home',
    'cust.heroBubble': 'Please search for a house in a quiet neighbourhood with a guest suite and a large backyard.',
    'cust.buyers.eyebrow': 'For buyers',
    'cust.buyers.title': 'It all starts with a question',
    'cust.buyers.p1': 'For most potential buyers, it all starts with a question like: “Find a three-bedroom home in Mississauga with a finished basement and a large backyard.”',
    'cust.buyers.p2': 'AI-powered search makes it easier to explore properties based on specific needs and preferences.',
    'cust.buyers.p3': 'Touchbase helps relevant listings surface in response to these searches, making it easier to discover properties that fit what buyers are looking for.',
    'cust.buyers.alt': 'A family arriving at their new home',
    'cust.sellers.eyebrow': 'For sellers',
    'cust.sellers.title': 'More visibility where buyers are searching',
    'cust.sellers.p1': 'A great listing needs to be found. As more people turn to AI-powered tools to research and discover properties, Touchbase helps listings appear in these emerging search environments.',
    'cust.sellers.p2': 'By increasing the visibility and reach of listings beyond traditional real estate platforms, Touchbase helps put properties in front of potential buyers when they are actively searching for what they have to offer.',
    'cust.sellers.alt': 'A broker presenting a property to a couple',
  },

  fr: {
    /* --- Navigation --- */
    'nav.profile': 'Votre profil',
    'nav.innovations': 'Nos innovations',
    'nav.sloganLine1': 'Fièrement',
    'nav.sloganLine2': 'canadienne',
    'nav.login': 'Connexion',
    'nav.logoAlt': 'Touchbase',
    'nav.openMenu': 'Ouvrir le menu',
    'nav.closeMenu': 'Fermer le menu',
    'nav.langSwitch': 'Passer en anglais',
    'nav.langSwitchWord': 'Anglais',
    'nav.about': 'À propos',

    /* --- Sous-menu « Votre profil » --- */
    'submenu.brokers': 'Courtiers immobiliers',
    'submenu.agencies': 'Agences immobilières',
    'submenu.boards': 'Chambres immobilières',
    'submenu.buyers': 'Acheteurs et vendeurs',

    /* --- Héro : une solution pour chaque acteur --- */
    'hero.title': 'Plus de temps, plus de liens, plus d’occasions.',
    'hero.lead':
      'Fièrement canadienne, Touchbase réunit la technologie et les outils qui aident les professionnels de l’immobilier, les agences et les chambres immobilières à travailler plus intelligemment, à mieux collaborer et à bâtir des relations clients plus solides.',
    'hero.note': 'Sélectionnez votre profil pour découvrir Touchbase.',

    'hero.agent.title': 'Courtiers',
    'hero.agent.text': 'Simplifiez votre travail et bâtissez des relations clients plus solides.',
    'hero.brokerage.title': 'Agences',
    'hero.brokerage.text': 'Simplifiez vos opérations et soutenez vos équipes grâce à une seule plateforme.',
    'hero.associations.title': 'Chambres immobilières',
    'hero.associations.text': 'Connectez vos membres à la technologie dont ils ont besoin pour réussir.',
    'hero.customers.title': 'Acheteurs et vendeurs',
    'hero.customers.text': 'Découvrez comment l’IA augmente la visibilité des inscriptions et attire plus d’acheteurs.',
    'hero.cardCta': 'En savoir plus',

    /* --- Application mobile --- */
    'app.title': 'Travaillez de n’importe où avec l’application Touchbase',
    'app.lead':
      'Au bureau, en voiture ou entre deux visites, Touchbase reste à portée de main. Gérez vos messages, planifiez vos visites et tenez vos clients informés en un instant.',
    'app.feature1': 'Notifications en temps réel pour les demandes de visite',
    'app.feature2': 'Outils de rétroaction directe entre courtiers',
    'app.feature3': 'Accès hors ligne aux fiches descriptives',
    'app.appStore': 'Télécharger dans l’App Store',
    'app.googlePlay': 'Disponible sur Google Play',
    'app.videoCta': 'Lancer la vidéo de présentation Touchbase',

    /* --- Chiffres clés --- */
    'stats.title': 'Au service de l’immobilier canadien depuis 2008',
    'stats.transactions': 'Transactions / mois',
    'stats.boards': 'Chambres immobilières',
    'stats.offices': 'Agences immobilières',

    /* --- Bandeau « Touchbase s'occupe du reste » --- */
    'band.titleLine1': 'Concentrez-vous sur vos clients,',
    'band.titleLine2': 'Touchbase s’occupe du reste',
    'band.lead':
      'Depuis presque 20 ans, Touchbase aide les professionnels de l’immobilier partout au Canada à simplifier les visites, fluidifier la communication et garder une longueur d’avance grâce à une seule plateforme puissante.',
    'band.ctaPrimary': 'Essai gratuit pour les agences',
    'band.ctaSecondary': 'Découvrir les innovations Touchbase',
    'band.imageAlt': 'La plateforme Touchbase sur ordinateur et sur mobile',

    /* --- Grille de fonctionnalités --- */
    'features.title': 'La technologie qui vous fait aller plus loin',
    'features.lead':
      'Des outils propulsés par l’IA à des flux de travail plus intelligents, Touchbase aide les professionnels de l’immobilier partout au Canada à simplifier leur quotidien, à réduire les tâches administratives et à consacrer plus de temps à ce qui compte : mieux servir leurs clients et conclure plus de transactions.',
    'features.showing.title': 'Gestion des visites',
    'features.showing.text':
      'Demandes de visite, approbations et cartographie dynamique des tours automatisées, en temps réel.',
    'features.mls.title': 'Intégration MLS',
    'features.mls.text':
      'Synchronisation en temps réel avec les principales bases d’inscriptions au Canada.',
    'features.ai.title': 'Solutions propulsées par l’IA',
    'features.ai.text':
      'Des outils intelligents pour automatiser les tâches, travailler plus vite de partout et améliorer les échanges.',
    'features.team.title': 'Équipe dédiée',
    'features.team.text':
      'Des équipes de soutien, de développement logiciel et d’IA à l’interne pour vous accompagner et créer de nouvelles fonctionnalités.',
    'features.workflow.title': 'Automatisation des processus',
    'features.workflow.text':
      'Intégration d’agenda et flux de visites automatisés, pour gagner temps et efforts.',
    'features.admin.title': 'Interface d’administration',
    'features.admin.text':
      'Une interface dédiée permettant aux adjoints de gérer facilement leurs équipes.',

    /* --- Logos clients --- */
    'clients.title': 'Le choix des courtiers immobiliers partout au Canada depuis 2001',

    /* --- Témoignage --- */
    'testimonial.quote':
      '« Quand j’entends parler d’autres chambres et associations immobilières qui n’ont pas Touchbase, je frémis en imaginant ce que serait la vie sans cet outil. La facilité avec laquelle nous organisons les visites est tout simplement formidable. »',
    'testimonial.role': 'Courtier responsable, Keller Williams Lifestyles Realty',

    /* --- Manifeste --- */
    'statement.titleA': 'L’innovation n’est pas une fonctionnalité.',
    'statement.titleB': 'C’est notre état d’esprit.',
    'statement.lead':
      'L’immobilier avance vite, nous aussi. Chaque outil, chaque automatisation et chaque mise à jour est conçu pour vous aider à travailler plus intelligemment et plus vite.',

    /* --- Bouton d'appel à l'action partagé (héros courtiers, avantages associations) --- */
    'cta.getStarted': 'Commencer',

    /* --- Encart d'aide --- */
    'help.title': 'Une question ou besoin d’aide ?',
    'help.lead': 'Pour vous connecter à Touchbase ou obtenir du soutien :',
    'help.cta': 'Nous joindre',

    /* --- Pied de page --- */
    'footer.copyright': '© 2026, Tootelo Innovation Inc. Tous droits réservés.',
    'footer.helpCenter': 'Centre d’aide',
    'footer.contact': 'Nous joindre',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions d’utilisation',

    /* --- Pages intérieures --- */
    'for-brokers.eyebrow': 'Pour les courtiers',
    'for-brokers.title': 'Touchbase pour les courtiers immobiliers',
    'for-brokers.lead': 'Configurez vos inscriptions une seule fois, approuvez les visites de partout, et laissez Touchbase s’occuper des notifications, des confirmations et des demandes de commentaires.',
    'for-brokerages.eyebrow': 'Pour les agences',
    'for-brokerages.title': 'Les avantages de Touchbase pour les agences',
    'for-brokerages.lead': 'Un système de réception haute performance : messagerie de groupe illimitée, confirmations automatisées, interface de centre d’appels incluse et intégration MLS complète.',
    'for-associations.eyebrow': 'Pour les associations',
    'for-associations.title': 'Touchbase pour les chambres immobilières',
    'for-associations.lead': 'Messagerie à l’échelle de la chambre, rapports vérifiables et admissibles en cour, et données de vos membres protégées au Canada — jamais partagées avec des tiers.',
    'for-customers.eyebrow': 'Pour les acheteurs et vendeurs',
    'for-customers.title': 'Une nouvelle façon de découvrir l’immobilier en ligne',
    'for-customers.lead': 'Les habitudes de recherche changent. Touchbase rend les propriétés visibles là où les acheteurs cherchent vraiment, sans rompre le lien avec un professionnel de l’immobilier.',
    'innovations.eyebrow': 'Nouveautés',
    'innovations.titleA': 'L’innovation n’est pas une fonctionnalité.',
    'innovations.titleB': 'C’est notre état d’esprit.',
    'innovations.lead': 'Messagerie RCS, Automaton, Assistant IA et Réceptionniste IA — les outils qui redéfinissent la façon dont les courtiers communiquent, gèrent leurs visites et concluent leurs ventes.',
    'about.titleA': 'À propos de Touchbase',
    'about.titleB': 'Conçue pour l’immobilier canadien. Conçue pour évoluer.',
    'about.heroAlt': 'Le centre-ville de Toronto, en Ontario, au crépuscule',
    'about.intro1':
      'Touchbase Real Estate est une entreprise technologique fièrement canadienne, conçue spécifiquement pour l’industrie immobilière. Depuis 2008, nous aidons les courtiers, agences et chambres immobilières partout au pays à simplifier leurs communications, à fluidifier leur travail et à réduire la charge administrative, afin qu’ils puissent consacrer plus de temps à ce qui compte le plus : leurs clients et leur entreprise.',
    'about.intro2':
      'Touchbase a été fondée au Canada par Benoit Brunel, qui cherchait une meilleure façon d’aider sa mère à gérer ses rendez-vous immobiliers. Après d’innombrables appels, reports et jeux de téléphone, il a compris qu’il devait exister une méthode plus efficace. Cette idée simple est devenue le fondement d’une plateforme aujourd’hui adoptée par les professionnels de l’immobilier partout au Canada.',
    'about.intro3':
      'Aujourd’hui, Touchbase va bien au-delà de la planification et de la gestion des visites. Notre équipe développe continuellement des solutions novatrices qui apportent des technologies de pointe et des outils propulsés par l’IA à l’industrie immobilière. Des assistants intelligents aux flux de travail automatisés, en passant par des fonctions avancées de communication et de productivité, Touchbase aide les professionnels à travailler plus intelligemment, à gagner du temps et à offrir de meilleurs résultats.',
    'about.intro4':
      'Notre plateforme éprouvée continue de rendre le travail quotidien plus efficace, avec des outils puissants pour la gestion des visites, la synchronisation de calendriers, les rapports, la messagerie de groupe et plus encore. Les utilisateurs peuvent aussi rester connectés en déplacement grâce à l’application mobile Touchbase, avec des préférences de communication flexibles et un accès facile aux outils essentiels, où qu’ils travaillent.',
    'about.intro5':
      'Derrière chaque grande idée et chaque nouvelle innovation se trouve une équipe qui se soucie sincèrement des gens qu’elle sert. Nos équipes de soutien et de développement, basées au Canada, travaillent étroitement avec les professionnels et organisations de l’immobilier d’un bout à l’autre du pays, en écoutant leurs besoins, en comprenant la réalité de leurs marchés et en transformant leurs idées en meilleures solutions.',
    'about.cta.title': 'Des questions sur Touchbase? Parlons-en.',
    'about.cta.button': 'Nous joindre',
    'about.mission.title': 'Notre mission',
    'about.mission.text':
      'Aider nos clients à être plus efficaces dans leur travail en leur donnant accès à des solutions qui optimisent la communication.',
    'about.facts.title': 'Faits intéressants sur Touchbase',
    'about.facts.item1': 'Touchbase a été le premier système de gestion des visites',
    'about.facts.item2': 'Nous sommes fièrement enracinés, détenus et exploités au Canada',
    'about.facts.item3': 'Nous ne vendrons jamais vos données à un tiers',
    'about.facts.item4': 'Nous sommes une entreprise verte avec plus de 50 politiques écoresponsables',
    'about.facts.item5': 'Un taux de disponibilité de 99,98 % depuis plus de 15 ans',
    'about.facts.item6': 'Les rapports Touchbase sont légalement admissibles devant les tribunaux',
    'about.facts.item7': 'Comprend une interface de centre d’appels gratuite',
    'about.facts.item8': 'Tous nos représentants parlent au moins deux langues',
    'about.testimonial.quote':
      '« La solution Touchbase offre à nos COURTIERS®, à l’entreprise et à nos clients une plateforme de communication tout-en-un. Ses fonctionnalités, son intégration, sa plateforme web, sa facilité d’utilisation et son soutien la rendent inégalée dans l’industrie. »',
    'about.testimonial.role': 'Courtier / Gestionnaire',
    'guides.eyebrow': 'Guides pratiques',
    'guides.title': 'Ressources d’apprentissage',
    'guides.lead': 'Vidéos courtes, guides téléchargeables et articles pas à pas pour tirer le meilleur de Touchbase.',
    'wip.badge': 'En cours',
    'wip.title': 'Section en cours d’intégration',
    'wip.text': 'La structure et le système de design sont en place. Le contenu détaillé de cette page est en cours de reprise depuis Figma.',
    'contact.eyebrow': 'Nous joindre',
    'contact.title': 'Nous serons ravis de vous lire',
    'contact.lead': 'Parlez-nous de votre agence ou de votre chambre immobilière : un représentant Touchbase vous répond en un jour ouvrable.',
    'contact.required': 'Les champs marqués d’un * sont obligatoires.',
    'contact.firstName': 'Prénom',
    'contact.lastName': 'Nom',
    'contact.email': 'Courriel professionnel',
    'contact.phone': 'Téléphone',
    'contact.org': 'Agence ou chambre immobilière',
    'contact.profile': 'Je suis…',
    'contact.profilePick': 'Sélectionnez votre profil',
    'contact.profileBroker': 'Un courtier immobilier',
    'contact.profileBrokerage': 'Une agence',
    'contact.profileBoard': 'Une chambre immobilière',
    'contact.profileBuyer': 'Un acheteur ou un vendeur',
    'contact.message': 'Comment pouvons-nous aider ?',
    'contact.messagePh': 'Parlez-nous de la taille de votre équipe et de vos besoins…',
    'contact.consent': 'J’accepte d’être contacté par Touchbase au sujet de ma demande.',
    'contact.send': 'Envoyer le message',
    'contact.supportLabel': 'Service à la clientèle',
    'contact.hoursLabel': 'Heures d’ouverture',
    'contact.hoursDays': 'Du lundi au vendredi',
    'contact.hoursTime': '9 h – 18 h HNE',
    'contact.selfLabel': 'Vous préférez chercher vous-même ?',
    'contact.selfValue': 'Centre d’aide Touchbase',
    'contact.selfText': 'Guides, tutoriels et réponses aux questions les plus fréquentes, accessibles en tout temps.',
    'info.eyebrow': 'Infos importantes',
    'info.title': 'Informations importantes',
    'info.lead': 'Nos politiques, conditions et ressources de soutien, réunies au même endroit.',
    'info.privacyDesc': 'Comment nous recueillons, utilisons et protégeons vos renseignements personnels.',
    'info.termsDesc': 'Les conditions qui encadrent votre utilisation des services Touchbase.',
    'info.helpDesc': 'Guides et tutoriels pour utiliser Touchbase comme un pro.',
    'info.contactDesc': 'Joindre directement un représentant Touchbase.',

    /* --- Page « Nos innovations » --- */
    'innov.title': 'Touchbase : l’innovation au service de l’immobilier canadien',
    'innov.lead1': 'Des processus plus intelligents aux outils propulsés par l’IA, chaque innovation Touchbase est conçue et développée par nos équipes internes pour faire gagner du temps, simplifier le quotidien et permettre aux professionnels de l’immobilier d’en accomplir davantage.',
    'innov.lead2': 'L’immobilier n’attend pas, nous non plus. Nous développons continuellement de nouveaux outils et fonctions pour vous garder en avance et vous faire travailler plus efficacement.',
    'innov.videoCta': 'Lancer la vidéo des innovations Touchbase',
    'innov.eyebrow': 'NOUVEAUTÉS',
    'innov.sectionTitle': 'Découvrez les dernières innovations Touchbase, pensées pour simplifier votre travail et améliorer vos résultats.',
    'innov.more': 'En savoir plus',
    'innov.rcs.title': 'RCS (SMS enrichi) – Une messagerie plus intelligente',
    'innov.rcs.text': 'Transformez vos textos du quotidien en conversations plus riches et plus interactives, pour communiquer plus vite et plus efficacement.',
    'innov.rcs.p1': 'Partage d’images, de documents et de liens',
    'innov.rcs.p2': 'Conversations regroupées sous un même contact',
    'innov.rcs.p3': 'Boutons d’action rapide pour répondre instantanément',
    'innov.rcs.alt': 'Un courtier consulte une demande de visite Touchbase sur son téléphone',
    'innov.live.title': 'Touchbase Live – L’IA à la voix',
    'innov.live.text': 'Demandez à l’assistant propulsé par l’IA d’exécuter des tâches, de planifier des visites et plus encore, simplement à la voix, même en déplacement.',
    'innov.live.p1': 'Commandes mains libres, idéales au volant',
    'innov.live.p2': 'Résumés intelligents de conversations',
    'innov.live.p3': 'Recherche de propriétés avancée',
    'innov.live.alt': 'Un courtier utilise les commandes vocales en conduisant',
    'innov.automaton.title': 'Touchbase Automaton – Communications centralisées',
    'innov.automaton.text': 'Centralisez automatiquement vos communications et gardez chaque conversation, demande et suivi à portée de main.',
    'innov.automaton.p1': 'Messages centralisés, quelle qu’en soit la provenance',
    'innov.automaton.p2': 'Gestion simplifiée des visites et des suivis',
    'innov.automaton.p3': 'Réponses plus rapides aux clients et aux courtiers',
    'innov.automaton.alt': 'Messages Touchbase centralisés sur un téléphone et un ordinateur portable',
    'innov.reception.title': 'Réceptionniste IA – Une réponse en tout temps',
    'innov.reception.text': 'Ne manquez plus une occasion grâce au nouveau réceptionniste IA disponible 24 h sur 24, même quand votre équipe ne l’est pas.',
    'innov.reception.p1': 'Réponse instantanée aux appels',
    'innov.reception.p2': 'Prise et acheminement intelligents des messages',
    'innov.reception.p3': 'Plus de 120 langues prises en charge',
    'innov.reception.alt': 'Une réceptionniste prend un appel dans un bureau lumineux',
    'innov.proof.title': 'Une innovation adossée à l’expérience',
    'innov.proof.lead': 'Ces nouveautés complètent les fonctions Touchbase éprouvées, sur lesquelles les professionnels, agences et chambres immobilières du Canada s’appuient depuis 2008. Elles comprennent :',
    'innov.proof.1': 'Des technologies de nouvelle génération pour mieux communiquer',
    'innov.proof.2': 'Disponibilités de visite intelligentes et confirmations automatisées',
    'innov.proof.3': 'Mises à jour d’inscriptions et communications de groupe',
    'innov.proof.4': 'Intégration de l’agenda pour une planification fluide',
    'innov.proof.5': 'Rapports détaillés pour chaque inscription',
    'innov.proof.6': 'Le Tour de visites pour optimiser la planification des visites',
    'innov.proof.7': 'Demandes de commentaires automatisées et personnalisables',
    'innov.proof.8': 'Rapports automatisés quotidiens, hebdomadaires ou mensuels',
    'innov.proof.9': 'Planification simplifiée des congés et des remplacements',
    'innov.proof.10': 'Des outils d’administration dédiés',
    'innov.proof.11': 'Et bien plus encore',
    'innov.helpLead': 'La technologie évolue, et la façon de chercher une propriété aussi.',

    /* --- Page « Courtiers immobiliers » --- */
    'brokers.kicker': 'Touchbase pour les courtiers immobiliers',
    'brokers.title': 'Plus de temps pour ce qui fait avancer vos affaires',
    'brokers.lead1': 'Les courtiers immobiliers jonglent avec leurs clients, leurs visites, leurs communications et une multitude de détails quotidiens. Touchbase réunit les outils dont vous avez besoin pour simplifier le travail derrière chaque transaction, afin que vous passiez plus de temps avec vos clients et vous concentriez sur vos affaires.',
    'brokers.lead2': 'Des outils éprouvés de gestion des visites et de communication jusqu’aux innovations propulsées par l’IA, Touchbase continue d’évoluer pour vous faire gagner du temps, rester organisé et accomplir davantage chaque jour.',
    'brokers.heroAlt': 'Touchbase, conçu pour l’immobilier canadien',
    'brokers.step1.title': 'Gestion des inscriptions simplifiée',
    'brokers.step1.text': 'Importez automatiquement vos inscriptions MLS et gérez les disponibilités, les instructions de visite et les accès au même endroit.',
    'brokers.step2.title': 'Coordination des visites simplifiée',
    'brokers.step2.text': 'Gérez facilement les demandes, approbations et confirmations de visite par l’application, par texto et par courriel, montez un tour de visites en quelques instants, et plus encore.',
    'brokers.step3.title': 'Une solution de réception complète',
    'brokers.step3.text': 'Planifiez des visites, envoyez des notifications de groupe, suivez l’activité, consultez votre agenda, demandez des commentaires et générez des rapports directement depuis votre application Touchbase.',
    'brokers.innovTitle': 'Les dernières innovations Touchbase pensées pour vous',
    'brokers.learnMore': 'En savoir plus',
    'brokers.live.title': 'Touchbase Live',
    'brokers.live.subtitle': 'Une assistance mains libres quand vous en avez besoin',
    'brokers.live.text': 'Demandez à la voix à l’assistant propulsé par l’IA d’exécuter vos tâches, même en déplacement.',
    'brokers.live.p1': 'Exécutez des tâches par simples commandes vocales',
    'brokers.live.p2': 'Planifiez des visites, cherchez des propriétés et plus encore sans toucher votre téléphone',
    'brokers.live.p3': 'Restez productif en déplacement',
    'brokers.live.alt': 'Un courtier utilise les commandes vocales en conduisant',
    'brokers.rcs.title': 'Messagerie RCS (SMS enrichi)',
    'brokers.rcs.subtitle': 'Des communications plus riches et plus efficaces',
    'brokers.rcs.text': 'Donnez vie à vos échanges grâce à des fonctions interactives qui rendent la communication plus engageante, plus pratique et plus efficace que le SMS classique.',
    'brokers.rcs.p1': 'Toutes les conversations réunies dans un fil facile à suivre',
    'brokers.rcs.p2': 'Partagez documents, liens et photos instantanément',
    'brokers.rcs.p3': 'Réponses rapides grâce aux boutons d’action intégrés',
    'brokers.rcs.alt': 'Un courtier consulte un message Touchbase sur son téléphone',
    'brokers.automaton.title': 'Touchbase Automaton',
    'brokers.automaton.subtitle': 'Un seul endroit pour toutes vos conversations',
    'brokers.automaton.text': 'Gardez vos communications, demandes et suivis organisés sur une plateforme centralisée, plus simple à consulter et à gérer.',
    'brokers.automaton.p1': 'Des communications centralisées pour toutes vos équipes',
    'brokers.automaton.p2': 'Conversations et demandes toujours à portée de main',
    'brokers.automaton.p3': 'Suivis et gestion des communications simplifiés',
    'brokers.automaton.alt': 'Conversations Touchbase centralisées sur un téléphone',
    'brokers.features.title': 'DES FONCTIONS SUR LESQUELLES COMPTER',
    'brokers.features.lead': 'CHAQUE INNOVATION EST CONÇUE POUR SIMPLIFIER VOS COMMUNICATIONS, OPTIMISER VOS SUIVIS ET VOUS FAIRE GAGNER DU TEMPS.',
    'brokers.features.1': 'Synchronisation de l’agenda pour une planification simplifiée',
    'brokers.features.2': 'Processus d’inscription et de visite automatisé pour gagner du temps',
    'brokers.features.3': 'Possibilité d’inclure vos vendeurs dans certaines communications, pour un service optimal',
    'brokers.features.4': 'Technologie infonuagique sécurisée qui synchronise automatiquement vos inscriptions et votre profil à la connexion',
    'brokers.features.5': 'Agendas de rendez-vous et cartes mis à jour automatiquement à chaque nouvelle visite',
    'brokers.features.alt': 'L’application Touchbase sur trois téléphones',

    /* --- Page « Agences immobilières » --- */
    'brkg.kicker': 'Touchbase pour les agences immobilières',
    'brkg.title': 'Une technologie pensée autour de votre équipe',
    'brkg.lead1': 'Votre agence réunit des personnes aux rôles, aux responsabilités et aux façons de travailler différentes. Touchbase les rassemble sur une seule plateforme puissante, pour communiquer, coordonner et gérer le quotidien plus simplement.',
    'brkg.lead2': 'Conçu pour l’immobilier canadien, Touchbase allie une technologie éprouvée à une innovation continue et à des solutions propulsées par l’IA, pour faire gagner du temps à vos équipes, simplifier vos opérations et garder vos affaires en mouvement.',
    'brkg.cta': 'Essai gratuit pour les agences',
    'brkg.heroAlt': 'Touchbase sur un ordinateur portable, une tablette et un téléphone',
    'brkg.msg.eyebrow': 'Flux de travail centralisés',
    'brkg.msg.title': 'Un système de messagerie puissant',
    'brkg.msg.1': 'Centralisez vos communications par texto, courriel et notifications d’application',
    'brkg.msg.2': 'Créez un nombre illimité de groupes de diffusion pour cibler vos messages',
    'brkg.msg.3': 'Personnalisez les réglages du bureau, les horaires de garde et plus encore',
    'brkg.msg.cta': 'Contacter notre équipe',
    'brkg.msg.alt': 'Le système de messagerie Touchbase sur trois téléphones',
    'brkg.grid.eyebrow': 'Une efficacité sans comparaison',
    'brkg.grid.title': 'Des fonctions remarquables',
    'brkg.f1.t': 'Profil utilisateur',
    'brkg.f1.d': 'Chaque courtier configure son profil avec ses modes de communication préférés, des notifications poussées aux textos directs.',
    'brkg.f2.t': 'Profil administrateur',
    'brkg.f2.d': 'Les administrateurs gèrent les profils des courtiers, créent des groupes personnalisés dans le bureau, envoient des notifications de groupe et plus encore.',
    'brkg.f3.t': 'Avis de changement',
    'brkg.f3.d': 'Prévenez instantanément les courtiers et toute personne ayant montré de l’intérêt pour une inscription lorsque le prix ou les conditions changent.',
    'brkg.f4.t': 'Interface d’assistant',
    'brkg.f4.d': 'Une interface dédiée aux adjoints et aux équipes de soutien.',
    'brkg.f5.t': 'Statistiques et rapports',
    'brkg.f5.d': 'Générez des tableaux de bord interactifs pour suivre la fréquence des visites, les taux de réponse aux commentaires et la charge de travail.',
    'brkg.f6.t': 'Personnalisation',
    'brkg.f6.d': 'Adaptez le portail Touchbase aux couleurs, aux logos et aux préférences de votre agence.',
    'brkg.f7.t': 'Détails des inscriptions',
    'brkg.f7.d': 'Synchronisez en temps réel les fiches, l’emplacement des boîtes à clés, les instructions de visite et les notes des courtiers.',
    'brkg.f8.t': 'Préférences du bureau',
    'brkg.f8.d': 'Ajustez globalement les réglages administratifs : heures de visite, jours fériés et remontées automatiques.',
    'brkg.f9.t': 'Centre d’appels',
    'brkg.f9.d': 'Choisissez le fournisseur de centre d’appels de votre choix et connectez-le à l’interface Touchbase.',
    'brkg.f10.t': 'Options pour les vendeurs',
    'brkg.f10.d': 'Laissez vos clients confirmer ou refuser une demande de visite directement par texto ou par courriel.',
    'brkg.f11.t': 'Multicanal',
    'brkg.f11.d': 'Joignez vos membres ou vos équipes par l’application Touchbase, par SMS/RCS ou par courriel — à vous de choisir.',
    'brkg.f12.t': 'Horaire de garde',
    'brkg.f12.d': 'Gérez les horaires de garde rotatifs, les remplacements de courtiers, la présence au bureau et plus encore.',
    'brkg.innovTitle': 'Les dernières innovations Touchbase pensées pour vos équipes',
    'brkg.recep.title': 'Réceptionniste IA',
    'brkg.recep.subtitle': 'Votre réception, toujours disponible',
    'brkg.recep.text': 'Gardez votre agence joignable en tout temps grâce à un réceptionniste propulsé par l’IA qui prend les appels quand votre équipe n’est pas disponible.',
    'brkg.recep.p1': 'Répond aux appels et traite les demandes instantanément',
    'brkg.recep.p2': 'Oriente les appelants vers la bonne personne ou la bonne ressource',
    'brkg.recep.p3': 'Communique avec vos clients dans plus de 120 langues',
    'brkg.rcs.title': 'Messagerie RCS (SMS enrichi)',
    'brkg.rcs.subtitle': 'Des échanges plus riches pour votre équipe',
    'brkg.rcs.text': 'Offrez à vos courtiers et à votre personnel une façon plus engageante de communiquer avec les clients et les collègues, grâce à une messagerie interactive et complète.',
    'brkg.rcs.p1': 'Conversations organisées par contact',
    'brkg.rcs.p2': 'Partage facile d’images, de documents et de liens',
    'brkg.rcs.p3': 'Boutons d’action intégrés pour répondre plus vite',
    'brkg.live.title': 'Touchbase Live',
    'brkg.live.subtitle': 'Une assistance IA sur laquelle vos équipes peuvent compter',
    'brkg.live.text': 'Grâce à notre nouvel assistant IA, vos courtiers gèrent leurs tâches et accèdent à l’information à la voix, même hors du bureau ou au volant.',
    'brkg.live.p1': 'Accès vocal aux tâches du quotidien',
    'brkg.live.p2': 'Planifiez des visites, cherchez des propriétés et plus encore, mains libres',
    'brkg.live.p3': 'Une productivité optimale en déplacement',
    'brkg.auto.title': 'Touchbase Automaton',
    'brkg.auto.subtitle': 'Un seul endroit pour toutes les communications',
    'brkg.auto.text': 'Centralisez toutes vos communications dans Touchbase, quelle qu’en soit la provenance, pour qu’aucune information importante ne se perde.',
    'brkg.auto.p1': 'Communications regroupées sur tous les canaux',
    'brkg.auto.p2': 'Accès centralisé aux conversations et aux demandes',
    'brkg.auto.p3': 'Une coordination plus simple pour toutes vos équipes',
    'brkg.web.eyebrow': 'Votre Touchbase, à votre façon',
    'brkg.web.title': 'Conçu pour s’adapter',
    'brkg.web.1': 'Accès web et mobile',
    'brkg.web.2': 'Aucuns frais d’entretien',
    'brkg.web.3': 'Mises à jour gratuites et développement continu',
    'brkg.web.4': 'Aucuns frais d’implantation ni de formation',
    'brkg.web.5': 'Aucun engagement à long terme ni contrat',
    'brkg.web.6': 'Essai gratuit de 30 jours',
    'brkg.web.7': 'La technologie infonuagique garde vos inscriptions et vos profils à jour sur tous vos appareils',
    'brkg.web.8': 'Les agendas de rendez-vous se mettent à jour automatiquement à chaque nouvelle visite',
    'brkg.web.cta': 'Commencer l’essai gratuit',
    'brkg.web.alt': 'La réception Touchbase sur une tablette',

    /* --- Page « Chambres immobilières » --- */
    'assoc.kicker': 'Touchbase pour les chambres immobilières',
    'assoc.title': 'Une innovation pensée pour vos membres',
    'assoc.lead1': 'Les chambres et associations immobilières sont au cœur des communautés qu’elles servent : elles soutiennent leurs membres et contribuent à renforcer la profession partout au Canada.',
    'assoc.lead2': 'Touchbase travaille aux côtés des chambres pour offrir à leurs membres la technologie et les outils dont ils ont besoin pour communiquer plus efficacement, simplifier leur travail et rester concentrés sur l’essentiel.',
    'assoc.lead3': 'Avec des solutions conçues spécifiquement pour l’immobilier canadien, Touchbase vous aide à offrir plus de valeur à vos membres aujourd’hui, tout en continuant d’évoluer avec vos besoins.',
    'assoc.heroAlt': 'Touchbase pour les associations immobilières, sur un ordinateur portable',
    'assoc.b1': 'Données hébergées au Canada, sans partage avec des tiers',
    'assoc.b2': 'Messages uniformisés sur toutes les plateformes de communication',
    'assoc.b3': 'Communication fluide entre courtiers, équipes, adjoints et centres d’appels',
    'assoc.b4': 'Processus de visite automatisé pour plus d’efficacité',
    'assoc.b5': 'Journaux vérifiables et rapports admissibles en cour',
    'assoc.b6': 'Une plateforme simple, intuitive et facile à utiliser',
    'assoc.b7': 'Un rapport qualité-prix exceptionnel pour la communication immobilière',
    'assoc.b8': 'Intégration souple avec les fournisseurs de votre choix',
    'assoc.b9': 'Réglages par défaut intelligents, pour la justesse et l’efficacité',
    'assoc.innovTitle': 'Les dernières innovations Touchbase pensées pour vos membres',
    'assoc.live.title': 'Touchbase Live',
    'assoc.live.subtitle': 'Une assistance IA mains libres pour vos membres',
    'assoc.live.text': 'Touchbase donne à vos membres un assistant propulsé par l’IA qu’ils pilotent à la voix pour exécuter des tâches et accéder à l’information, même sur la route.',
    'assoc.live.p1': 'Accès vocal aux tâches du quotidien',
    'assoc.live.p2': 'Planifiez des visites, cherchez des propriétés et plus encore, mains libres',
    'assoc.live.p3': 'Restez productif où que vous mènent vos affaires',
    'assoc.rcs.title': 'Messagerie RCS (SMS enrichi)',
    'assoc.rcs.subtitle': 'Des communications plus riches et plus efficaces pour vos membres',
    'assoc.rcs.text': 'Touchbase offre à vos membres une façon plus engageante de communiquer, avec une messagerie interactive qui va bien au-delà du SMS classique.',
    'assoc.rcs.p1': 'Conversations regroupées dans un seul fil',
    'assoc.rcs.p2': 'Partage facile de documents, de liens et de photos',
    'assoc.rcs.p3': 'Réponses rapides grâce aux boutons d’action intégrés',
    'assoc.auto.title': 'Touchbase Automaton',
    'assoc.auto.subtitle': 'Une communication centralisée pour vos membres',
    'assoc.auto.text': 'Touchbase offre à vos membres un seul endroit pour gérer leurs communications, leurs demandes et leurs suivis, et tout garder organisé et à portée de main.',
    'assoc.auto.p1': 'Communications centralisées, quelle qu’en soit la provenance',
    'assoc.auto.p2': 'Accès simple aux conversations et aux demandes',
    'assoc.auto.p3': 'Gestion simplifiée des communications et des suivis',
    'assoc.msg.title': 'Une communication simplifiée',
    'assoc.msg.subtitle': 'Messagerie à l’échelle de la chambre',
    'assoc.msg.p1': 'En tant que chambre immobilière, vous disposez de votre propre interface Touchbase. Elle vous permet de diffuser des messages à l’ensemble de vos membres, ou d’envoyer des messages de groupe par région.',
    'assoc.msg.p2': 'Communiquez instantanément avec vos membres et joignez-les rapidement quand cela compte le plus. La messagerie à l’échelle de la chambre peut aussi appuyer des initiatives d’urgence comme les alertes AMBER ou Realty Watch, un programme communautaire de prévention du crime qui relie les courtiers aux services de police pour aider à retrouver des personnes disparues ou vulnérables.',
    'assoc.msg.p3': 'Vos membres reçoivent les notifications sur l’appareil de leur choix, ce qui garantit que les messages importants sont bien vus.',
    'assoc.msg.alt': 'La messagerie à l’échelle de la chambre sur trois téléphones',
    'assoc.rep.title': 'Rapports et statistiques',
    'assoc.rep.subtitle': 'Résolution de conflits et traçabilité',
    'assoc.rep.p1': 'Générez des rapports pour suivre l’utilisation, le nombre de membres, les messages envoyés et plus encore, afin de prendre des décisions éclairées.',
    'assoc.rep.p2': 'Admissibles devant un tribunal, ces rapports servent à la résolution de conflits à tous les niveaux, pour défendre vos membres.',
    'assoc.rep.p3': 'Les rapports remontent jusqu’à deux ans, pour faciliter les comparaisons.',
    'assoc.rep.cta': 'Nous joindre pour votre essai gratuit',

    /* --- Page « Acheteurs et vendeurs » --- */
    'cust.kicker': 'Touchbase pour les acheteurs et les vendeurs',
    'cust.title': 'Une nouvelle façon de trouver une propriété en ligne',
    'cust.lead1': 'La façon de chercher une propriété change. De plus en plus d’acheteurs se tournent vers des outils propulsés par l’IA — ChatGPT, Google AI et autres plateformes d’IA générative — pour poser leurs questions, explorer des propriétés et affiner leurs choix.',
    'cust.lead2': 'Touchbase rend les inscriptions immobilières canadiennes plus faciles à découvrir dans ces nouveaux environnements de recherche : les acheteurs trouvent des propriétés qui correspondent à leurs besoins, et les vendeurs gagnent en visibilité là où l’on cherche de plus en plus d’information.',
    'cust.heroAlt': 'Un acheteur demande à un assistant IA de trouver une maison',
    'cust.heroBubble': 'Cherche une maison dans un quartier calme avec un studio pour invités et une grande cour arrière.',
    'cust.buyers.eyebrow': 'Pour les acheteurs',
    'cust.buyers.title': 'Tout commence par une question',
    'cust.buyers.p1': 'Pour la plupart des acheteurs, tout commence par une question du genre : « Trouve une maison de trois chambres à Mississauga avec un sous-sol fini et une grande cour arrière. »',
    'cust.buyers.p2': 'La recherche propulsée par l’IA facilite l’exploration des propriétés selon des besoins et des préférences précis.',
    'cust.buyers.p3': 'Touchbase aide les inscriptions pertinentes à ressortir en réponse à ces recherches, ce qui rend plus faciles à découvrir les propriétés qui correspondent vraiment à ce que cherchent les acheteurs.',
    'cust.buyers.alt': 'Une famille arrive dans sa nouvelle maison',
    'cust.sellers.eyebrow': 'Pour les vendeurs',
    'cust.sellers.title': 'Plus de visibilité là où les acheteurs cherchent',
    'cust.sellers.p1': 'Une belle inscription doit encore être trouvée. Comme de plus en plus de gens se tournent vers des outils propulsés par l’IA pour chercher et découvrir des propriétés, Touchbase aide vos inscriptions à apparaître dans ces nouveaux environnements de recherche.',
    'cust.sellers.p2': 'En élargissant la visibilité et la portée des inscriptions au-delà des plateformes immobilières traditionnelles, Touchbase place les propriétés devant les acheteurs potentiels au moment précis où ils cherchent ce qu’elles ont à offrir.',
    'cust.sellers.alt': 'Un courtier présente une propriété à un couple',
  },
};

const STORAGE_KEY = 'touchbase-lang';
const DEFAULT_LANG = 'en';

/** Langue affichée sur le bouton : celle vers laquelle on bascule. */
const OTHER_LANG = { en: 'fr', fr: 'en' };

function translate(key, lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
  return dict[key] ?? TRANSLATIONS[DEFAULT_LANG][key] ?? key;
}

/** Applique la langue à tout le document. */
function applyLang(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = translate(el.dataset.i18n, lang);
  });

  // Attributs traduisibles : data-i18n-alt, data-i18n-aria-label, data-i18n-placeholder, data-i18n-title
  const attrMap = {
    i18nAlt: 'alt',
    i18nAriaLabel: 'aria-label',
    i18nPlaceholder: 'placeholder',
    i18nTitle: 'title',
  };
  Object.entries(attrMap).forEach(([dataKey, attr]) => {
    document.querySelectorAll(`[data-${attr === 'aria-label' ? 'i18n-aria-label' : 'i18n-' + attr}]`).forEach((el) => {
      el.setAttribute(attr, translate(el.dataset[dataKey], lang));
    });
  });

  // Le bouton affiche le code de la langue vers laquelle on bascule.
  document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
    btn.textContent = OTHER_LANG[lang].toUpperCase();
    btn.setAttribute('aria-label', translate('nav.langSwitch', lang));
  });

  // Variante « menu mobile » : le nom complet de la langue plutôt que son code.
  document.querySelectorAll('[data-lang-toggle-word]').forEach((btn) => {
    btn.textContent = translate('nav.langSwitchWord', lang);
    btn.setAttribute('aria-label', translate('nav.langSwitch', lang));
  });

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    /* mode privé : on ignore */
  }
}

function currentLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && TRANSLATIONS[stored]) return stored;
  } catch (e) {
    /* mode privé : on ignore */
  }
  return DEFAULT_LANG;
}

function initI18n() {
  applyLang(currentLang());

  document.querySelectorAll('[data-lang-toggle], [data-lang-toggle-word]').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLang(OTHER_LANG[currentLang()]);
    });
  });
}

document.addEventListener('DOMContentLoaded', initI18n);
