window.app = new Vue({
    el: '#app',
    components: {
        VueGallerySlideshow
    },
    data: {
        index: null,
        opened: {},
        skills: [
            "python", "asyncio", "aiohttp", "django", "fastapi", "tornado",
            "twisted", "flask", "sanic", "falcon", "celery",
            "SQLAlchemy", "gino",
            "sql", "mysql", "postgresql", "clickhouse", "mongodb",
            "javascript", "vue", "react", "redux", "redux-saga", "html",
            "css", "d3.js",
            "redis", "memcached", "rabbitmq", "centrifugo",
            "Web Development", "Architecture Development", "Linux",
            "RESTful API", "XML rpc", "JSON rpc", "websockets", "AWS",
            "EC2", "S3", "RDS", "DynamoDB", "Lambda", "SQS", "SNS", "ECS",
        ],
        hiddenCompanies: new Set([8]),
        hideCompanies: new Set([7]),
        allImages: [
            {"id": 0, "url": "static/img/profile/1.png"},
            {"id": 1, "url": "static/img/profile/2.png"},
            {"id": 2, "url": "static/img/profile/3.png"},
            {"id": 3, "url": "static/img/tournaments/1.png"},
            {"id": 4, "url": "static/img/tournaments/2.png"},
            {"id": 5, "url": "static/img/tournaments/3.png"},
            {"id": 6, "url": "static/img/loona/1.png"},
            {"id": 7, "url": "static/img/loona/2.png"},
            {"id": 8, "url": "static/img/loona/3.png"},
            {"id": 9, "url": "static/img/loona/4.png"},
        ],
        companies: [
            {
                id: 8,
                position: 'Senior Software Engineer',
                name: 'Rabbit Games',
                url: 'https://rabbitgames.pl',
                years: 'February 2025 - March 2026',
                logo: 'static/img/rabbit_logo.png',
                responsibilities: [
                    'Senior Backend Engineer at Wargaming.net - Architected and developed high-performance microservices using Python (asyncio) handling millions of concurrent users',
                    'Game Infrastructure Development - Built scalable backend systems for game authentication, player statistics, and real-time data processing',
                    'Cross-Platform Integration at MY.GAMES - Designed and implemented Xbox and PlayStation authentication and payment systems for War Robots: Frontiers',
                    'API Architecture - Developed RESTful and gRPC APIs with comprehensive documentation and performance optimization',
                    'Database Optimization - Implemented efficient database schemas and queries for PostgreSQL and Redis caching strategies',
                ],
            },
            // {
            //     id: 9,
            //     position: 'Software Engineer',
            //     name: 'Freelance',
            //     years: 'February 2025 - Present',
            //     responsibilities: [
            //         'AI Chat API Development - Designed and built RESTful APIs for AI-powered chat applications using Python (FastAPI, asyncio) with integration of LLM providers',
            //         'Call Center Processing - Developed applications for processing and analyzing call center calls, including speech-to-text pipelines and automated call routing',
            //         'Various Small Projects - Delivered multiple short-term projects including backend services, data processing scripts, and API integrations for diverse clients',
            //     ],
            // },
            {
                id: 7,
                position: 'Lead Software Engineer',
                name: 'FreePlay',
                url: 'https://freeplay.io',
                years: 'July 2023 - February 2025',
                logo: 'static/img/freeplay_logo.jpg',
                responsibilities: [
                    'Led the architecture development for scalable and maintainable software solutions',
                    'Spearheaded the creation of a new internal platform from scratch, ensuring robust design and implementation',
                    'Oversaw frontend development, ensuring responsive and user-friendly interfaces',
                    'Managed DevOps processes, including CI/CD pipelines, infrastructure as code, and cloud deployments',
                    'Conducted quality assurance testing to ensure high standards of software quality and performance',
                    'Collaborated with UX/UI designers to create intuitive and visually appealing user experiences',
                    'Mentored junior engineers and facilitated knowledge sharing across the team',
                    'Coordinated cross-functional teams to align project goals and deliverables with business objectives',
                    'Implemented agile methodologies to enhance team productivity and project delivery timelines',
                ],
            },
            {
                id: 6,
                position: 'Senior Software Engineer',
                name: 'Loóna',
                url: 'https://loona.app',
                years: 'December 2022 - July 2023',
                logo: 'static/img/loona_logo.png',
                responsibilities: [
                    'Backend Architecture - Designed and implemented scalable microservices architecture using Python (FastAPI, asyncio) for sleep wellness application',
                    'AI Integration - Developed REST API services for AI-powered image generation from text descriptions, handling high-volume requests',
                    'Performance Optimization - Implemented caching strategies with Redis and database optimization techniques for PostgreSQL',
                    'System Analysis - Conducted technical investigations and problem-solving for complex backend performance issues',
                    'API Development - Built comprehensive RESTful APIs with authentication, rate limiting, and comprehensive error handling',
                    'Cloud Infrastructure - Managed AWS services (EC2, RDS, S3) and implemented monitoring and logging solutions'
                ],
                projects: [
                    {
                        description: "Contractor for the development of a service for generating pictures from a text description of a user\'s sleep.",
                        images: [
                            {"id": 6, "url": "static/img/loona/1.png"},
                            {"id": 7, "url": "static/img/loona/2.png"},
                            {"id": 8, "url": "static/img/loona/3.png"},
                            {"id": 9, "url": "static/img/loona/4.png"},
                        ]
                    }
                ]
            },
            {
                id: 5,
                position: 'Senior Software Engineer',
                name: 'MEAL',
                url: 'https://mindful-eating.app',
                years: 'March 2022 - December 2022',
                logo: 'static/img/meal_logo.png',
                responsibilities: [
                    'Full-Stack Development - Built nutrition tracking applications from scratch using Python (Django, FastAPI) and React.js with TypeScript',
                    'Microservices Architecture - Designed and implemented distributed systems with service-to-service communication using REST and message queues',
                    'Database Design - Architected PostgreSQL schemas and implemented efficient queries for nutrition data processing and user analytics',
                    'API Development - Created comprehensive RESTful APIs with OAuth2 authentication, rate limiting, and comprehensive documentation',
                    'Performance Engineering - Optimized application performance through caching strategies (Redis), database indexing, and query optimization',
                    'Release Management - Led deployment processes, automated testing pipelines, and production monitoring using AWS services'
                ]
            },
            {
                id: 4,
                position: 'Lead Software Engineer',
                name: 'WARGAMING.NET',
                url: 'https://wargaming.net',
                years: 'June 2019 - March 2022',
                logo: 'static/img/wg_logo.png',
                responsibilities: [
                    'Technical Leadership - Managed cross-functional team of 5 developers (3 Backend Python, 2 Frontend React/Vue.js), mentoring junior developers and conducting code reviews',
                    'System Architecture - Designed high-performance backend systems handling millions of concurrent users for World of Tanks Blitz web portal',
                    'Microservices Development - Built scalable microservices using Python (Django, asyncio), PostgreSQL, Redis, and message queues (RabbitMQ)',
                    'Real-time Systems - Implemented real-time player statistics collection and processing using WebSockets and event-driven architecture',
                    'Performance Optimization - Achieved 99.9% uptime through database optimization, caching strategies, and load balancing solutions',
                    'Project Management - Led sprint planning, task decomposition, time estimation, and technical decision-making for complex web applications',
                    'Infrastructure Management - Oversaw AWS infrastructure (EC2, RDS, ElastiCache) and implemented CI/CD pipelines for automated deployments'
                ],
                projects: [
                    {
                        description: "Player profile. It's a part of World Of Tanks Blitz portal. https://wotblitz.ru/en/players/\n" +
                            "This web application collects information about each user in the game, information about user's vehicles. Information updates in realtime.\n" +
                            "Information is collected for the last 30 days, 30 weeks and for all months from the moment the service is launched. It is collcted for players and them vehicles",
                        images: [
                            {"id": 0, "url": "static/img/profile/1.png"},
                            {"id": 1, "url": "static/img/profile/2.png"},
                            {"id": 2, "url": "static/img/profile/3.png"},
                        ]
                    },
                    {
                        description: "Tournaments info page. It's a part of World Of Tanks Blitz portal. https://wotblitz.com/en/tournaments/#/\n" +
                            "On this page users can view all tournaments (past/current/upcoming). View teams, grids, leaderboard tables and etc. \n" +
                            "They can watch streams on this page and get reward for time viewed.",
                        images: [
                            {"id": 3, "url": "static/img/tournaments/1.png"},
                            {"id": 4, "url": "static/img/tournaments/2.png"},
                            {"id": 5, "url": "static/img/tournaments/3.png"},
                        ]
                    }
                ]
            },
            {
                id: 3,
                position: 'Senior Software Engineer',
                name: 'WARGAMING.NET',
                url: 'https://wargaming.net',
                years: 'February 2019 - June 2019',
                logo: 'static/img/wg_logo.png',
                responsibilities: [
                    'Backend Development - Developed gaming web applications from scratch using Python (Django, Flask) with PostgreSQL and Redis',
                    'Cross-team Collaboration - Worked closely with game designers, DevOps engineers, and frontend teams to deliver integrated solutions',
                    'API Integration - Built and maintained APIs for game data synchronization, player statistics, and real-time tournament systems',
                    'Mentorship - Trained and onboarded new team members on Python development practices, code standards, and system architecture',
                    'Database Optimization - Implemented efficient database queries and indexing strategies for handling large-scale gaming data',
                    'Quality Assurance - Established testing frameworks and code review processes to maintain high code quality standards'
                ]
            },
            {
                id: 2,
                position: 'Software Engineer',
                name: 'WARGAMING.NET',
                url: 'https://wargaming.net',
                years: 'January 2016 - February 2019',
                logo: 'static/img/wg_logo.png',
                responsibilities: [
                    'Full-Stack Development - Built gaming web applications using Python (Django, Flask) backend and Vue.js/React.js frontend with modern development practices',
                    'Microservices Architecture - Designed and implemented distributed systems with service discovery, load balancing, and fault tolerance',
                    'API Development - Created RESTful and WebSocket APIs for real-time gaming features, player data, and tournament management systems',
                    'Frontend Engineering - Developed responsive user interfaces using Vue.js and React.js with state management (Vuex, Redux)',
                    'Performance Engineering - Implemented caching strategies, database optimization, and frontend performance improvements',
                    'Quality Assurance - Led performance testing, security testing, and release testing activities ensuring production readiness',
                    'DevOps Integration - Collaborated with DevOps teams on deployment strategies, monitoring, and infrastructure management'
                ]
            },
            {
                id: 1,
                position: 'Web Developer',
                name: 'RT PROJECTS',
                url: 'https://razortheory.com/',
                years: 'August 2014 - January 2016',
                logo: 'static/img/rt_logo.png',
                responsibilities: [
                    'Web Development - Built custom web applications from scratch using Python (Django, Flask) and JavaScript (jQuery, vanilla JS)',
                    'Database Development - Designed and implemented MySQL database schemas and optimized queries for web applications',
                    'Frontend Development - Created responsive user interfaces using HTML5, CSS3, and JavaScript with cross-browser compatibility',
                    'Project Maintenance - Maintained and enhanced existing web applications, implementing new features and bug fixes',
                    'Client Collaboration - Worked directly with clients to gather requirements, provide technical solutions, and deliver projects on time',
                    'Code Quality - Implemented best practices for code organization, version control (Git), and documentation'
                ]
            },
        ],
        education: [
            {
                degree: 'Master\'s degree, Master of Data Science',
                name: 'HIGHER SCHOOL OF ECONOMICS',
                years: 'September 2020 - August 2022',
                logo: 'static/img/hse_logo.png',
            },
            {
                degree: 'Bachelor\'s degree, Mathematics and Computer Science',
                name: 'BELARUSIAN STATE UNIVERSITY, FACULTY OF APPLIED MATHEMATICS AND COMPUTER SCIENCE',
                years: 'September 2011 — July 2016',
                logo: 'static/img/bsu_logo.png',
            }
        ]
    },
    computed: {
        filteredCompanies() {
            return this.companies
        }
    }
})
