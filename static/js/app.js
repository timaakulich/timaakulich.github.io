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
            "EC2", "S3", "RDS", "DynamoDB", "Lambda", "SQS", "SNS",
        ],
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
                id: 6,
                position: 'Senior Software Engineer',
                name: 'Loóna',
                url: 'https://loona.app',
                years: 'December 2022 - July 2023',
                logo: 'static/img/loona_logo.png',
                responsibilities: [
                    'Developing information systems by designing',
                    'Problem areas investigations',
                    'Backend development (server\'s side, API)'
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
                    'Creating new apps from scratch and maintaining existing projects.',
                    'Microservices development',
                    'Backend development (server\'s side, API)',
                    'Participation in release'
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
                    'Team management (3 Backend developers, 2 Frontend developers)',
                    'Architecture development',
                    'Planning',
                    'Task decomposition',
                    'Time estimation',
                    'Distribution of tasks between team members',
                    'Code review'
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
                    'Creating new apps from scratch and maintaining existing projects.',
                    'Collaborated with the project team, designers, DevOps team and other teams of dependent projects',
                    'Training new employees'
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
                    'Creating new apps from scratch and maintaining existing projects.',
                    'Collaborated with the project team, designers, DevOps team and other teams of dependent projects',
                    'Microservices development',
                    'Back-end development (server\'s side, API)',
                    'Front-end development (Vue.js, React.js)',
                    'Provided release\'s activities (setting tasks for performance testing, security testing; release testing)',
                    'Participation in release'
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
                    'Creating new apps from scratch and maintaining existing projects.',
                    'Maintaining existing projects'
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
    }
})
