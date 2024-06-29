const books = [
    
    // Programming
    {
        category: 'programming',
        title: 'HTML & CSS',
        description: 'Design and Build websites',
        author: 'Jon Duckett',
        language: 'English',
        downloadLink: './programming/syn-book-programming (0).pdf'
    },
    {
        category: 'programming',
        title: 'FastAPI',
        description: 'Modern Python Web Development',
        author: 'Bill Lubanovic',
        language: 'English',
        downloadLink: './programming/syn-book-programming (1).pdf'
    },

    {
        category: 'programming',
        title: 'JavaScript The Definitive Guide',
        description: "Master the World's Most-Used Programming Language",
        author: 'David Flanagan',
        language: 'English',
        downloadLink: './programming/syn-book-programming (2).pdf'
    },
    {
        category: 'programming',
        title: 'Python Crash Course',
        description: "A Hands-On Project Based Introduction to Programming.",
        author: 'Eric Matthes',
        language: 'English',
        downloadLink: './programming/syn-book-programming (3).pdf'
    },
    {
        category: 'programming',
        title: 'Learning Typescript',
        description: "Enhance your Web Development Skills Using Type-Safe Javascript.",
        author: 'Josh Goldberg',
        language: 'English',
        downloadLink: './programming/syn-book-programming (4).pdf'
    },
    {
        category: 'programming',
        title: 'Arrays in Javascript',
        description: "Learn Arrays in Depth",
        author: '@CodeBustler & @Coder_aishya',
        language: 'English',
        downloadLink: './programming/syn-book-programming (5).pdf'
    },

    // Design
    {
        category: 'Design',
        title: 'Designing and Prototyping Interfaces with Figma',
        description: "Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop",
        author: '@CodeBustler & @Coder_aishya',
        language: 'English',
        downloadLink: './design/syn-book-programming (1).pdf'
    },



    // Personal Development

    {
        title: "The 48 Laws of Power",
        description: " This book provides 48 laws based on historical examples of power dynamics, strategies, and manipulations to gain and maintain power in various social and professional settings.",
        author: "Robert Greene",
        category: 'Personal Development',
        language: 'English',
        downloadLink: './personal-development/syn-book-pd (1).pdf'
    },


    {
        title: " The Laws of Human Nature",
        description: "It Examines recurring patterns in human behavior, offering strategies to understand yourself and others for success in various aspects of life. ",
        author: "Robert Greene ",
        category: 'Personal Development',
        author: '@CodeBustler & @Coder_aishya',
        language: 'English',
        downloadLink: './personal-development/syn-book-pd (2).pdf'
    },

    {
        title: "The Power of Now",
        description: "It Guides readers towards inner peace by emphasizing the importance of present-moment awareness and letting go of the mental chatter about the past and future. ",
        author: "Eckhart Tolle ",
        category: 'Personal Development',
        author: '@CodeBustler & @Coder_aishya',
        language: 'English',
        downloadLink: './personal-development/syn-book-pd (3).pdf'
    },


    {
        title: "The 80/20 Principle",
        description: "The 80/20 principle, also known as the Pareto principle, states that roughly 80% of the effects come from 20% of the causes. It applies to various aspects of life, suggesting that most of the results come from a minority of the efforts. ",
        author: "Richard Koch ",
        category: 'Personal Development',
        author: '@CodeBustler & @Coder_aishya',
        language: 'English',
        downloadLink: './personal-development/syn-book-pd (4).pdf'
    },

    {
        title: "The Compound Effect ",
        description: "It argues that small, consistent choices and actions over time can dramatically impact your success in any area of life. It emphasizes the power of daily habits and avoiding negative choices.",
        author: "Darren Hardy ",
        category: 'Personal Development',
        author: '@CodeBustler & @Coder_aishya',
        language: 'English',
        downloadLink: './personal-development/syn-book-pd (5).pdf'
    },

    {
        title: "The POWER of Your Subconscious Mind ",
        description: "xplores the potential of your subconscious to influence your life. It offers techniques for harnessing its power for personal growth, achievement, and overcoming limitations. ",
        author: "Joseph Murphy ",
        category: 'Personal Development',
        author: '@CodeBustler & @Coder_aishya',
        language: 'English',
        downloadLink: './personal-development/syn-book-pd (6).pdf'
    },

    {
        title: "Think & Grow Rich ",
        description: "A philosophy for achieving wealth through positive mental attitude, goal setting, visualization, and persistence. It's a self-help classic that emphasizes the power of mindset for success.",
        author: "Napoleon Hill ",
        category: 'Personal Development',
        author: '@CodeBustler & @Coder_aishya',
        language: 'English',
        downloadLink: './personal-development/syn-book-pd (8).pdf'
    },

    {
        title: "Make Your Bed ",
        description: "highlights the importance of starting small and completing small tasks with discipline, which can lead to accomplishing bigger goals. ",
        author: "Admiral William H. McRaven ",
        category: 'Personal Development',
        author: '@CodeBustler & @Coder_aishya',
        language: 'English',
        downloadLink: './personal-development/syn-book-pd (9).pdf'
    },

    {
        title: "How To Get More From Life ",
        description: "Getting more from life, to me, isn’t a specific action or a 12-step plan. It’s a philosophy that is always geared towards improvement. It’s about never being satisfied with the status quo, and having an insatiable hunger to improve the quality of your life and the quality of the things you achieve in it. ",
        author: "Scott H Young ",
        category: 'Personal Development',
        author: '@CodeBustler & @Coder_aishya',
        language: 'English',
        downloadLink: './personal-development/syn-book-pd (10).pdf'
    },

    {
        title: "How to Stop Procastination ",
        description: "Stop Procastination, Symptoms and Caueses ",
        author: "Celestine Chua ",
        category: 'Personal Development',
        author: '@CodeBustler & @Coder_aishya',
        language: 'English',
        downloadLink: './personal-development/syn-book-pd (11).pdf'
    },

    {
        title: "Atomic Habits ",
        description: "The book focuses on the idea that habits, good or bad, are the compound interest of self-improvement. By focusing on small changes in our routines, we can create a system that will help us achieve our goals. ",
        author: "James Clear ",
        category: 'Personal Development',
        author: '@CodeBustler & @Coder_aishya',
        language: 'English',
        downloadLink: './personal-development/syn-book-pd (12).pdf'
    },

    {
        title: "Eat That Frog ",
        description: "Eat That Frog! 21 Great Ways to Stop Procrastinating and Get More Done in Less Time by Brian Tracy is a productivity guide.  The title refers to tackling your most important task (the frog) first thing to avoid procrastination and boost your efficiency. ",
        author: "Brain Tracy ",
        category: 'Personal Development',
        author: '@CodeBustler & @Coder_aishya',
        language: 'English',
        downloadLink: './personal-development/syn-book-pd (14).pdf'
    },

    {
        title: "THE SEVEN HABITS OF HIGHLY EFFECTIVE PEOPLE ",
        description: "It details seven habits that, when internalized, can lead to a fulfilling life and successful career. The book emphasizes independence (habits 1-3) for self-mastery and then interdependence (habits 4-6) for effective collaboration, all grounded in continuous self-renewal (habit 7). ",
        author: "Stephen R. Covey ",
        category: 'Personal Development',
        author: '@CodeBustler & @Coder_aishya',
        language: 'English',
        downloadLink: './personal-development/syn-book-pd (16).pdf'
    },
    {
        title: "How to Win Friends & Influence People ",
        description: "The book offers practical advice on building relationships, improving communication skills, and becoming more influential. Carnegie emphasizes the importance of sincerity, empathy, and positive reinforcement in building strong relationships. ",
        author: "Dale Carnegie ",
        category: 'Personal Development',
        author: '@CodeBustler & @Coder_aishya',
        language: 'English',
        downloadLink: './personal-development/syn-book-pd (17).pdf'
    },
    {
        title: "The Magic Of Thinking Big ",
        description: " ",
        author: "The Magic of Thinking Big set audacious goals and believe in yourself to achieve them. ",
        category: 'Personal Development',
        author: '@CodeBustler & @Coder_aishya',
        language: 'English',
        downloadLink: './personal-development/syn-book-pd (18).pdf'
    },
    {
        title: "The Secret ",
        description: "The Secret by Rhonda Byrne is a self-help book based on the Law of Attraction. It claims positive thoughts can attract positive experiences into your life. You 'ask, believe, receiv' to manifest your desires. ",
        author: "Rhonda Byrne ",
        category: 'Personal Development',
        author: '@CodeBustler & @Coder_aishya',
        language: 'English',
        downloadLink: './personal-development/syn-book-pd (19).pdf'
    },
    {
        title: "Rich Dad Poor Dad ",
        description: "Rich Dad Poor Dad is a starting point for anyone looking to gain control of their financial future. ",
        author: "Robert T.Kiyosaki ",
        category: 'Personal Development',
        author: '@CodeBustler & @Coder_aishya',
        language: 'English',
        downloadLink: './personal-development/syn-book-pd (20).pdf'
    },

    {
        title: "The 5 Seconds Rule ",
        description: " It promotes a method of overcoming hesitation and fear by counting down from 5 to take action on your goals. The idea is to interrupt self-doubt and build courage to pursue what you want. ",
        author: "Mel Robbins. ",
        category: 'Personal Development',
        author: '@CodeBustler & @Coder_aishya',
        language: 'English',
        downloadLink: './personal-development/syn-book-pd (21).pdf'
    },

];