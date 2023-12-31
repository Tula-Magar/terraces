const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "To be or not to be, that is the question. - William Shakespeare",
  "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
  "That which does not kill us makes us stronger. - Friedrich Nietzsche",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
  "If life were predictable, it would cease to be life and be without flavor. - Eleanor Roosevelt",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Man is free at the moment he wishes to be. - Voltaire",
  "Imagination is more important than knowledge. - Albert Einstein",
  "The journey of a thousand miles begins with one step. - Lao Tzu",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Not everything that is faced can be changed, but nothing can be changed until it is faced. - James Baldwin",
  "To love and be loved is to feel the sun from both sides. - David Viscott",
  "It's not what happens to you, but how you react to it that matters. - Epictetus",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "If you don't stand for something, you will fall for anything. - Malcolm X",
  "The unexamined life is not worth living. - Socrates",
  "Our lives begin to end the day we become silent about things that matter. - Martin Luther King Jr.",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "Happiness can exist only in acceptance. - George Orwell",
  "To succeed in life, you need two things: ignorance and confidence. - Mark Twain",
  "Life is really simple, but we insist on making it complicated. - Confucius",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "Turn your wounds into wisdom. - Oprah Winfrey",
  "The purpose of our lives is to be happy. - Dalai Lama",
  "The only true wisdom is in knowing you know nothing. - Socrates",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
  "Life is made of ever so many partings welded together. - Charles Dickens",
  "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
  "In order to write about life first, you must live it. - Ernest Hemingway",
  "The world breaks everyone, and afterward, some are strong at the broken places. - Ernest Hemingway",
  "Don't count the days, make the days count. - Muhammad Ali",
  "Life is what we make it, always has been, always will be. - Grandma Moses",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "The future depends on what you do today. - Mahatma Gandhi",
  "Life is a long lesson in humility. - James M. Barrie",
  "The roots of education are bitter, but the fruit is sweet. - Aristotle",
  "Life is either a daring adventure or nothing at all. - Helen Keller",
  "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
  "It's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
  "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
  "Life is a succession of lessons which must be lived to be understood. - Ralph Waldo Emerson",
  "You cannot find peace by avoiding life. - Virginia Woolf",
  "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor. - Sholom Aleichem",
  "Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like. - Lao Tzu",
  "Life is a song - sing it. Life is a game - play it. Life is a challenge - meet it. Life is a dream - realize it. Life is a sacrifice - offer it. Life is love - enjoy it. - Sai Baba",
  "Life is a series of baby steps. - Hoda Kotb",
  "Life is a succession of lessons which must be lived to be understood. - Ralph Waldo Emerson",
  "Life is a long lesson in humility. - James M. Barrie",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
  "Don't count the days, make the days count. - Muhammad Ali",
  "Knowledge is power. - Francis Bacon",
  "Difficult roads often lead to beautiful destinations. - Unknown",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "You miss 100% of the shots you don’t take. - Wayne Gretzky",
  "Kindness is a language which the deaf can hear and the blind can see. - Mark Twain",
  "Change your thoughts and you change your world. - Norman Vincent Peale",
  "Every moment is a fresh beginning. - T.S. Eliot",
  "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
  "Life is short, and it is up to you to make it sweet. - Sarah Louise Delany",
  "Art is the only way to run away without leaving home. - Twyla Tharp",
  "If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein",
  "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
  "Opportunities don't happen. You create them. - Chris Grosser",
  "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
  "To see what is right and not do it is the want of courage. - Confucius",
  "The successful warrior is the average man, with laser-like focus. - Bruce Lee",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "The future belongs to the competent. Get good, get better, be the best! - Brian Tracy",
  "Success is not in what you have, but who you are. - Bo Bennett",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "The best revenge is massive success. - Frank Sinatra",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "The best way to succeed in this world is to act on the advice you give to others. - Unknown",
  "The ladder of success is best climbed by stepping on the rungs of opportunity. - Ayn Rand",
  "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
  "To succeed in life, you need two things: ignorance and confidence. - Mark Twain",
  "Action is the foundational key to all success. - Pablo Picasso",
  "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it. - Steve Jobs",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "Success is simple. Do what’s right, the right way, at the right time. - Arnold H. Glasow",
  "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
  "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
  "Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don't quit. - Conrad Hilton",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
  "The best way to predict the future is to create it. - Abraham Lincoln",
  "To succeed in life, you need two things: ignorance and confidence. - Mark Twain",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "Happiness is not something you postpone for the future; it is something you design for the present. - Jim Rohn",
  "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
  "Life is really simple, but we insist on making it complicated. - Confucius",
  "In order to be irreplaceable one must always be different. - Coco Chanel",
  "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
  "Our greatest glory is not in never falling, but in rising every time we fall. - Confucius",

  // quotesData doesn't have these below quotes
  "Don't let yesterday take up too much of today. - Will Rogers",
  "You learn more from failure than from success. Don't let it stop you. Failure builds character. - Unknown",
  "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
  "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you. - Steve Jobs",
  "People who are crazy enough to think they can change the world, are the ones who do. - Rob Siltanen",
  "Failure will never overtake me if my determination to succeed is strong enough. - Og Mandino",
  "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That's the classic entrepreneur. - Mohnish Pabrai",
  "We may encounter many defeats but we must not be defeated. - Maya Angelou",
  "Knowing is not enough; we must apply. Wishing is not enough; we must do. - Johann Wolfgang Von Goethe",
  "Imagine your life is perfect in every respect; what would it look like? - Brian Tracy",
  "We generate fears while we sit. We overcome them by action. - Dr. Henry Link",
  "Whether you think you can or think you can't, you're right. - Henry Ford",
  "Security is mostly a superstition. Life is either a daring adventure or nothing. - Helen Keller",
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "Creativity is intelligence having fun. - Albert Einstein",
  "What you lack in talent can be made up with desire, hustle and giving 110% all the time. - Don Zimmer",
  "Do what you can with all you have, wherever you are. - Theodore Roosevelt",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "Today's accomplishments were yesterday's impossibilities. - Robert H. Schuller",
  "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
  "The secret of getting ahead is getting started. - Mark Twain",
  "The road to success is dotted with many tempting parking spaces. - Will Rogers",
  "Act as if what you do makes a difference. It does. - William James",
  "Success is not just about making money. It's about making a difference. - Kathy Ireland",
  "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
  "Success is the sum of small efforts, repeated day in and day out. - Robert Collier",
  "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
  "Don't wait. The time will never be just right. - Napoleon Hill",
  "To see what is right and not do it is the lack of courage. - Confucius",
  "The future depends on what you do today. - Mahatma Gandhi",
  "Dream big and dare to fail. - Norman Vaughan",
  "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
  "Great things are done by a series of small things brought together. - Vincent Van Gogh",
  "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
  "Dream it. Believe it. Build it. - Unknown",
  "Don't stop when you're tired. Stop when you're done. - Unknown",
  "It's going to be hard, but hard does not mean impossible. - Unknown",
  "The past cannot be changed. The future is yet in your power. - Unknown",
  "The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. - Steve Jobs",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "If you can dream it, you can achieve it. - Zig Ziglar",
  "If you want to achieve greatness stop asking for permission. - Unknown",
  "Things work out best for those who make the best of how things work out. - John Wooden",
  "To live a creative life, we must lose our fear of being wrong. - Unknown",
  "If you are not willing to risk the usual you will have to settle for the ordinary. - Jim Rohn",
  "Trust because you are willing to accept the risk, not because it's safe or certain. - Unknown",
  "Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success. - Swami Vivekananda",
  "All our dreams can come true if we have the courage to pursue them. - Walt Disney",
  "Good things come to people who wait, but better things come to those who go out and get them. - Unknown",
  "If you do what you always did, you will get what you always got. - Unknown",
  "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "Just when the caterpillar thought the world was ending, he turned into a butterfly. - Proverb",
  "Successful entrepreneurs are givers and not takers of positive energy. - Unknown",
  "Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them. - Vaibhav Shah",
  "Opportunities don't happen, you create them. - Chris Grosser",
  "Try not to become a person of success, but rather try to become a person of value. - Albert Einstein",
  "Great minds discuss ideas; average minds discuss events; small minds discuss people. - Eleanor Roosevelt",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
  "Opportunity does not knock, it presents itself when you beat down the door. - Kyle Chandler",
  "Success seems to be largely a matter of hanging on after others have let go. - William Feather",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "The harder the conflict, the more glorious the triumph. - Thomas Paine",
  "I find that when you have a real interest in life and a curious life, that sleep is not the most important thing. - Martha Stewart",
  "It is not the mountain we conquer, but ourselves. - Sir Edmund Hillary",
  "Success is not just about making money. It's about making a difference. - Kathy Ireland",
  "I never dreamed about success. I worked for it. - Estée Lauder",
  "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, vision cleared, ambition inspired, and success achieved. - Helen Keller",
  "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. - Winston Churchill",
  "Don't be distracted by criticism. Remember--the only taste of success some people get is to take a bite out of you. - Zig Ziglar",
  "The secret of success is to do the common thing uncommonly well. - John D. Rockefeller Jr.",
  "Success is the result of perfection, hard work, learning from failure, loyalty, and persistence. - Colin Powell",
  "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "In order to succeed, we must first believe that we can. - Nikos Kazantzakis",
  "Your work is discover your world and then with all your heart give yourself to it. - Buddha",
  "There are no shortcuts to any place worth going. - Beverly Sills",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
  "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
  "Try not to become a person of success, but rather try to become a person of value. - Albert Einstein",
  "Big jobs usually go to the men who prove their ability to outgrow small ones. - Ralph Emerson",
  "If you really look closely, most overnight successes took a long time. - Steve Jobs",
  "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere. - Barack Obama",
  "The only place success comes before work is in the dictionary. - Vince Lombardi",
  "Don’t be afraid to give up the good to go for the great. - John D. Rockefeller",
  "I failed my way to success. - Thomas Edison",
  "The successful man is the one who finds out what is the matter with his business before his competitors do. - Roy L. Smith",
  "Success is not in what you have, but who you are. - Bo Bennett",
  "Success is not just about making money. It's about making a difference. - Kathy Ireland",
  "The road to success is always under construction. - Lily Tomlin",
  "The difference between who you are and who you want to be is what you do. - Unknown",
  "Success is achieved and maintained by those who try and keep trying. - W. Clement Stone",
  "Opportunities don't happen. You create them. - Chris Grosser",
  "Success doesn't come to you, you've got to go to it. - Marva Collins",
  "Success is the sum of small efforts, repeated day-in and day-out. - Robert Collier",
  "If you really want to do something, you'll find a way. If you don't, you'll find an excuse. - Jim Rohn",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "Success is not the absence of failure; it's the persistence through failure. - Aisha Tyler",
];
