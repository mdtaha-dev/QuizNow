const QUESTIONS = [
    {
        id: 1,
        category: "Science",
        question: "Which particle is known as the 'God Particle', discovered at CERN in 2012?",
        options: ["Neutrino", "Quark", "Higgs Boson", "Photon"],
        correct: 2,
        explanation: "The Higgs boson gives other particles their mass through the Higgs field. Its discovery at CERN's Large Hadron Collider confirmed the Standard Model of particle physics."
    },
    {
        id: 2,
        category: "Tech",
        question: "In JavaScript, what does the '===' operator check for compared to '=='?",
        options: ["Only value equality", "Both value and type equality", "Reference equality only", "Deep object equality"],
        correct: 1,
        explanation: "The '===' (strict equality) operator checks both value AND type without type coercion. '==' performs type coercion before comparing, which can lead to unexpected results."
    },
    {
        id: 3,
        category: "History",
        question: "In which year did the Berlin Wall fall, marking a pivotal moment in the Cold War's end?",
        options: ["1987", "1988", "1989", "1991"],
        correct: 2,
        explanation: "The Berlin Wall fell on November 9, 1989. East Germany announced citizens could cross freely, and crowds gathered to tear it down, symbolising the collapse of communist rule in Eastern Europe."
    },
    {
        id: 4,
        category: "Science",
        question: "What is the approximate speed of light in a vacuum?",
        options: ["150,000 km/s", "299,792 km/s", "350,000 km/s", "186,000 km/s"],
        correct: 1,
        explanation: "The speed of light in a vacuum is approximately 299,792 km/s (roughly 3 x 10^8 m/s). This is denoted by 'c' and is a fundamental constant in physics."
    },
    {
        id: 5,
        category: "Tech",
        question: "Which data structure operates on a Last-In, First-Out (LIFO) principle?",
        options: ["Queue", "Linked List", "Stack", "Heap"],
        correct: 2,
        explanation: "A Stack uses LIFO — the last element pushed is the first to be popped. Think of a stack of plates. Queues use FIFO (First-In, First-Out)."
    },
    {
        id: 6,
        category: "General Knowledge",
        question: "Which planet in our solar system has the most known moons?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        correct: 1,
        explanation: "Saturn holds the record with over 140 confirmed moons as of recent discoveries, surpassing Jupiter. Many are small irregular moons captured from the asteroid belt."
    },
    {
        id: 7,
        category: "Movies",
        question: "Which film became the first non-English language movie to win the Academy Award for Best Picture?",
        options: ["Roma", "Life is Beautiful", "Parasite", "Crouching Tiger, Hidden Dragon"],
        correct: 2,
        explanation: "Parasite (2019), directed by Bong Joon-ho, made history as the first non-English language film to win Best Picture at the Oscars, also winning Best Director, Best Original Screenplay, and Best International Feature Film."
    },
    {
        id: 8,
        category: "Tech",
        question: "What does 'DNS' stand for in networking?",
        options: ["Digital Name Server", "Domain Name System", "Dynamic Network Service", "Data Node System"],
        correct: 1,
        explanation: "DNS (Domain Name System) is often called the 'phonebook of the internet'. It translates human-readable domain names like google.com into IP addresses that computers use to communicate."
    },
    {
        id: 9,
        category: "Science",
        question: "What is the process by which plants convert sunlight into chemical energy?",
        options: ["Respiration", "Transpiration", "Photosynthesis", "Osmosis"],
        correct: 2,
        explanation: "Photosynthesis converts light energy (usually sunlight), water, and carbon dioxide into glucose and oxygen. The equation is: 6CO2 + 6H2O + light energy -> C6H12O6 + 6O2."
    },
    {
        id: 10,
        category: "History",
        question: "Who was the first person to walk on the Moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
        correct: 1,
        explanation: "Neil Armstrong became the first human to walk on the Moon on July 20, 1969, during NASA's Apollo 11 mission. His famous words were 'That's one small step for man, one giant leap for mankind.'"
    },
    {
        id: 11,
        category: "General Knowledge",
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3,
        explanation: "The Pacific Ocean is the largest, covering about 165 million square kilometres — more than all land masses combined. It spans from the Arctic in the north to the Antarctic in the south."
    },
    {
        id: 12,
        category: "Movies",
        question: "In the film 'Inception', what is a 'totem' used for?",
        options: ["To enter dreams", "To distinguish reality from dreams", "To communicate with other dreamers", "To stabilise dream architecture"],
        correct: 1,
        explanation: "In Inception, a totem is a small personal object that behaves differently in dreams vs reality, allowing the owner to determine which state they are in. Cobb's totem is a spinning top."
    },
    {
        id: 13,
        category: "Cybersecurity",
        question: "What type of attack involves overwhelming a server with traffic to make it unavailable?",
        options: ["Phishing", "SQL Injection", "DDoS Attack", "Man-in-the-Middle"],
        correct: 2,
        explanation: "A Distributed Denial of Service (DDoS) attack floods a target server with massive traffic from multiple sources, exhausting its resources and making it unavailable to legitimate users."
    },
    {
        id: 14,
        category: "Cybersecurity",
        question: "What does 'HTTPS' use to encrypt communication between browser and server?",
        options: ["SSL/TLS", "RSA only", "AES-256", "SHA-256"],
        correct: 0,
        explanation: "HTTPS uses SSL/TLS (Secure Sockets Layer / Transport Layer Security) protocols to encrypt data in transit, ensuring confidentiality and integrity between the client and server."
    },
    {
        id: 15,
        category: "Cybersecurity",
        question: "What is a 'zero-day' vulnerability?",
        options: ["A bug fixed within 24 hours", "An exploit with no known patch yet", "A virus that activates at midnight", "A firewall misconfiguration"],
        correct: 1,
        explanation: "A zero-day vulnerability is a software flaw unknown to the vendor, meaning there are zero days of protection. Attackers can exploit it before a patch is developed and deployed."
    },
    {
        id: 16,
        category: "Cybersecurity",
        question: "Which of these is an example of social engineering?",
        options: ["Brute force attack", "Phishing email", "Port scanning", "Buffer overflow"],
        correct: 1,
        explanation: "Phishing is a social engineering attack that manipulates people psychologically rather than exploiting technical vulnerabilities. Attackers impersonate trusted entities to steal credentials or data."
    },
    {
        id: 17,
        category: "Cybersecurity",
        question: "What is the purpose of a VPN?",
        options: ["Speed up internet connection", "Block all advertisements", "Encrypt traffic and mask IP address", "Scan for malware"],
        correct: 2,
        explanation: "A VPN (Virtual Private Network) creates an encrypted tunnel for your traffic and masks your real IP address, protecting your privacy especially on public networks."
    },
    {
        id: 18,
        category: "Gaming",
        question: "Which game franchise features the protagonist 'Master Chief'?",
        options: ["Call of Duty", "Destiny", "Halo", "Titanfall"],
        correct: 2,
        explanation: "Master Chief (John-117) is the iconic protagonist of the Halo franchise, developed originally by Bungie and later 343 Industries. The series began in 2001 with Halo: Combat Evolved."
    },
    {
        id: 19,
        category: "Gaming",
        question: "What year was the original PlayStation released in Japan?",
        options: ["1992", "1993", "1994", "1995"],
        correct: 2,
        explanation: "Sony's original PlayStation was released in Japan on December 3, 1994. It launched in North America and Europe in 1995 and went on to sell over 102 million units worldwide."
    },
    {
        id: 20,
        category: "Gaming",
        question: "In Minecraft, what material is required to craft the strongest tools and armour?",
        options: ["Diamond", "Obsidian", "Netherite", "Emerald"],
        correct: 2,
        explanation: "Netherite, introduced in the Nether Update (1.16), is stronger than Diamond. It's crafted by combining Diamond gear with Netherite Ingots, which are made from Ancient Debris found in the Nether."
    },
    {
        id: 21,
        category: "Gaming",
        question: "Which game is credited with popularising the Battle Royale genre on PC?",
        options: ["Fortnite", "PUBG", "Apex Legends", "H1Z1"],
        correct: 1,
        explanation: "PlayerUnknown's Battlegrounds (PUBG), released in 2017, is widely credited with popularising the Battle Royale genre at scale, inspiring Fortnite and dozens of other titles."
    },
    {
        id: 22,
        category: "Gaming",
        question: "What is the best-selling video game of all time?",
        options: ["Tetris", "GTA V", "Minecraft", "Wii Sports"],
        correct: 2,
        explanation: "Minecraft has sold over 300 million copies across all platforms, making it the best-selling video game of all time. It was created by Markus 'Notch' Persson and released in 2011."
    },
    {
        id: 23,
        category: "Tech",
        question: "What does 'API' stand for?",
        options: ["Application Programming Interface", "Automated Process Integration", "Applied Program Index", "Application Process Interpreter"],
        correct: 0,
        explanation: "API stands for Application Programming Interface. It defines how software components interact, allowing developers to use pre-built functionality without knowing the underlying implementation."
    },
    {
        id: 24,
        category: "Science",
        question: "What is the most abundant gas in Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        correct: 2,
        explanation: "Nitrogen makes up approximately 78% of Earth's atmosphere, followed by oxygen at 21%. Despite being essential to life, nitrogen is relatively inert in its atmospheric form (N2)."
    },
    {
        id: 25,
        category: "Science",
        question: "Which scientist is best known for developing the theory of General Relativity?",
        options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Stephen Hawking"],
        correct: 2,
        explanation: "Albert Einstein published the theory of General Relativity in 1915, which describes gravity not as a force, but as a consequence of the curvature of spacetime."
    },
    {
        id: 26,
        category: "Science",
        question: "What is the absolute zero temperature on the Celsius scale?",
        options: ["0°C", "-100°C", "-273.15°C", "-459.67°C"],
        correct: 2,
        explanation: "Absolute zero is the lowest possible temperature where all molecular motion ceases. It is defined as 0 Kelvin or approximately -273.15° Celsius."
    },
    {
        id: 27,
        category: "Science",
        question: "Which organelle is often referred to as the 'powerhouse' of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic Reticulum"],
        correct: 2,
        explanation: "Mitochondria generate most of the cell's supply of adenosine triphosphate (ATP), used as a source of chemical energy."
    },
    {
        id: 28,
        category: "Science",
        question: "Which planet is colloquially known as the 'Red Planet'?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: 1,
        explanation: "Mars is called the Red Planet because of the iron oxide (rust) on its surface, which gives it a reddish appearance."
    },
    {
        id: 29,
        category: "Science",
        question: "What is the most common chemical element in the universe?",
        options: ["Oxygen", "Carbon", "Helium", "Hydrogen"],
        correct: 3,
        explanation: "Hydrogen is the simplest and most abundant element, making up roughly 75% of all baryonic mass in the universe."
    },
    {
        id: 30,
        category: "Science",
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Brain", "Skin", "Small Intestine"],
        correct: 2,
        explanation: "The skin is the body's largest organ, serving as a protective barrier and aiding in temperature regulation and sensation."
    },
    {
        id: 31,
        category: "Science",
        question: "The study of fungi is known as what?",
        options: ["Botany", "Mycology", "Phycology", "Entomology"],
        correct: 1,
        explanation: "Mycology is the branch of biology concerned with the study of fungi, including their genetic and biochemical properties."
    },
    {
        id: 32,
        category: "Science",
        question: "Who formulated the Law of Universal Gravitation and the Laws of Motion?",
        options: ["Galileo Galilei", "Johannes Kepler", "Isaac Newton", "Michael Faraday"],
        correct: 2,
        explanation: "Sir Isaac Newton's 'Philosophiæ Naturalis Principia Mathematica', published in 1687, laid the foundations for classical mechanics."
    },
    {
        id: 33,
        category: "Science",
        question: "What is the approximate speed of sound at sea level and 20°C?",
        options: ["300 m/s", "343 m/s", "400 m/s", "1000 m/s"],
        correct: 1,
        explanation: "The speed of sound in dry air at 20°C (68°F) is approximately 343 metres per second, though it varies with temperature and medium."
    },
    {
        id: 34,
        category: "Science",
        question: "Who is credited with the creation of the first Periodic Table of Elements?",
        options: ["Marie Curie", "Antoine Lavoisier", "Dmitri Mendeleev", "John Dalton"],
        correct: 2,
        explanation: "Dmitri Mendeleev published the first widely recognized periodic table in 1869, arranging elements by atomic mass and predicting properties of undiscovered elements."
    },
    {
        id: 35,
        category: "Movies",
        question: "Who directed the 1994 cult classic film 'Pulp Fiction'?",
        options: ["Martin Scorsese", "Quentin Tarantino", "David Fincher", "Steven Spielberg"],
        correct: 1,
        explanation: "Quentin Tarantino wrote and directed Pulp Fiction, known for its non-linear narrative, stylized dialogue, and ironic mix of humor and violence."
    },
    {
        id: 36,
        category: "Movies",
        question: "Which actor won an Academy Award for his role as Vito Corleone in 'The Godfather'?",
        options: ["Al Pacino", "Robert De Niro", "Marlon Brando", "James Caan"],
        correct: 2,
        explanation: "Marlon Brando won the Best Actor Oscar for his performance in The Godfather (1972), though he famously refused to accept the award in person."
    },
    {
        id: 37,
        category: "Movies",
        question: "What was the first feature-length animated movie ever released?",
        options: ["Pinocchio", "Fantasia", "Snow White and the Seven Dwarfs", "Bambi"],
        correct: 2,
        explanation: "Walt Disney's Snow White and the Seven Dwarfs (1937) was the first full-length cel animated feature film in movie history."
    },
    {
        id: 38,
        category: "Movies",
        question: "In the movie 'The Matrix', what color pill does Neo take to 'see how deep the rabbit hole goes'?",
        options: ["Blue", "Red", "Green", "Yellow"],
        correct: 1,
        explanation: "Morpheus offers Neo a choice: the blue pill (return to simulated reality) or the red pill (escape the Matrix and see the truth). Neo takes the red pill."
    },
    {
        id: 39,
        category: "Movies",
        question: "Which iconic sci-fi movie features the famous line 'I'll be back'?",
        options: ["Predator", "RoboCop", "The Terminator", "Total Recall"],
        correct: 2,
        explanation: "The line was first delivered by Arnold Schwarzenegger in James Cameron's The Terminator (1984) and became a hallmark of his career."
    },
    {
        id: 40,
        category: "Movies",
        question: "Who won the Oscar for Best Actor for his role in the 2019 film 'Joker'?",
        options: ["Heath Ledger", "Joaquin Phoenix", "Christian Bale", "Jack Nicholson"],
        correct: 1,
        explanation: "Joaquin Phoenix won his first Academy Award for his portrayal of Arthur Fleck in Todd Phillips' Joker (2019)."
    },
    {
        id: 41,
        category: "Movies",
        question: "On which desert planet is the majority of the 2021 film 'Dune' set?",
        options: ["Tatooine", "Arrakis", "Pandora", "Mustafar"],
        correct: 1,
        explanation: "Arrakis, also known as Dune, is the only source of the spice melange, making it the most valuable planet in the universe."
    },
    {
        id: 42,
        category: "Movies",
        question: "Which director is responsible for 'Interstellar' and 'The Dark Knight' trilogy?",
        options: ["Christopher Nolan", "Denis Villeneuve", "Ridley Scott", "James Cameron"],
        correct: 0,
        explanation: "Christopher Nolan is known for his complex narratives and grand-scale filmmaking, directing hits like Inception, Interstellar, and the Dark Knight trilogy."
    },
    {
        id: 43,
        category: "Movies",
        question: "What was the very first movie to win the Academy Award for Best Picture?",
        options: ["Sunrise", "The Jazz Singer", "Wings", "Broadway Melody"],
        correct: 2,
        explanation: "Wings (1927), a silent film about World War I pilots, was the first movie to win the 'Outstanding Picture' award at the inaugural Oscars in 1929."
    },
    {
        id: 44,
        category: "Movies",
        question: "What is the name of the fictional Scandinavian kingdom in the movie 'Frozen'?",
        options: ["Arendelle", "Corona", "DunBroch", "Agrabah"],
        correct: 0,
        explanation: "The kingdom of Arendelle is the setting for the Frozen films, inspired by the landscape and culture of Norway."
    },
    {
        id: 45,
        category: "Tech",
        question: "Who is widely considered the primary inventor of the World Wide Web?",
        options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Vint Cerf"],
        correct: 2,
        explanation: "Sir Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN, including the first browser and server."
    },
    {
        id: 46,
        category: "Tech",
        question: "What does 'HTML' stand for in web development?",
        options: ["HyperText Markup Language", "High-level Transfer Main Logic", "Hyperlink Text Management Lib", "Hyper-Responsive Target Meta Language"],
        correct: 0,
        explanation: "HyperText Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser."
    },
    {
        id: 47,
        category: "Tech",
        question: "Which tech giant originally developed the Android operating system before it was acquired by Google?",
        options: ["Samsung", "Android Inc.", "Nokia", "Motorola"],
        correct: 1,
        explanation: "Android Inc. was founded in 2003 and acquired by Google in 2005. The first commercial Android phone was released in 2008."
    },
    {
        id: 48,
        category: "Tech",
        question: "In which year was the first original iPhone released by Apple?",
        options: ["2005", "2006", "2007", "2008"],
        correct: 2,
        explanation: "Steve Jobs introduced the first iPhone on January 9, 2007, often cited as the device that revolutionized the smartphone industry."
    },
    {
        id: 49,
        category: "Tech",
        question: "What does 'GPU' stand for in computing?",
        options: ["General Processing Unit", "Graphics Processing Unit", "Geographic Positional Unit", "Global Power Utility"],
        correct: 1,
        explanation: "A Graphics Processing Unit (GPU) is a specialized electronic circuit designed to rapidly manipulate and alter memory to accelerate image creation."
    },
    {
        id: 50,
        category: "Tech",
        question: "What is the primary purpose of 'Blockchain' technology?",
        options: ["Faster Video Streaming", "Decentralized Ledger of Transactions", "Enhanced CPU Speed", "Cloud Data Storage Only"],
        correct: 1,
        explanation: "Blockchain is a distributed ledger technology that allows data to be stored globally across thousands of servers, ensuring transparency and security."
    },
    {
        id: 51,
        category: "Tech",
        question: "What was the name of the first computer virus, created in the early 1970s?",
        options: ["ILOVEYOU", "Creeper", "Melissa", "Brain"],
        correct: 1,
        explanation: "The Creeper virus was an experimental self-replicating program that moved across the ARPANET, displaying the message: 'I'M THE CREEPER: CATCH ME IF YOU CAN!'"
    },
    {
        id: 52,
        category: "Tech",
        question: "Who co-founded Apple Computer alongside Steve Jobs in 1976?",
        options: ["Steve Ballmer", "Steve Wozniak", "Paul Allen", "Larry Page"],
        correct: 1,
        explanation: "Steve 'Woz' Wozniak designed and hand-built the Apple I, the company's first computer, while Steve Jobs handled the marketing and business side."
    },
    {
        id: 53,
        category: "Tech",
        question: "What does 'RAM' stand for?",
        options: ["Read Access Memory", "Random Access Memory", "Remote Allocation Module", "Rapid Active Matrix"],
        correct: 1,
        explanation: "Random Access Memory (RAM) is a form of computer data storage that allows data items to be read or written in almost the same amount of time irrespective of the physical location of data inside the memory."
    },
    {
        id: 54,
        category: "Tech",
        question: "Who is the creator of the Linux kernel?",
        options: ["Richard Stallman", "Linus Torvalds", "Ken Thompson", "Dennis Ritchie"],
        correct: 1,
        explanation: "Linus Torvalds began developing the Linux kernel in 1991 as a personal project, which evolved into the most widely used open-source operating system kernel."
    },
    {
        id: 55,
        category: "Cybersecurity",
        question: "Which term describes a fraudulent attempt to obtain sensitive information like passwords by disguising as a trustworthy entity in electronic communication?",
        options: ["Sniffing", "Phishing", "Spoofing", "Dumping"],
        correct: 1,
        explanation: "Phishing typically uses email or malicious websites to trick users into revealing login credentials or financial information."
    },
    {
        id: 56,
        category: "Cybersecurity",
        question: "In the context of 'SQL Injection', what does 'SQL' stand for?",
        options: ["Structured Query Language", "Secure Quantum Logic", "Systematic Quality Layer", "Serial Query Link"],
        correct: 0,
        explanation: "SQL (Structured Query Language) is used to manage databases. An injection attack occurs when malicious SQL statements are inserted into entry fields for execution."
    },
    {
        id: 57,
        category: "Cybersecurity",
        question: "What color 'hat' is used to describe ethical hackers who use their skills to find vulnerabilities and help organizations secure their systems?",
        options: ["Black Hat", "Grey Hat", "White Hat", "Red Hat"],
        correct: 2,
        explanation: "White Hat hackers are security experts who use their abilities for legal and ethical purposes, often through bug bounty programs or security audits."
    },
    {
        id: 58,
        category: "Cybersecurity",
        question: "What is the name of the symmetric-key block cipher that is the U.S. government standard and used worldwide to protect sensitive data?",
        options: ["DES", "Blowfish", "AES", "RSA"],
        correct: 2,
        explanation: "AES (Advanced Encryption Standard) was established in 2001. It is extremely secure and is the standard for modern encryption."
    },
    {
        id: 59,
        category: "Cybersecurity",
        question: "What is a 'Honey Pot' in network security?",
        options: ["A secure backup server", "A decoy system to trap intruders", "A firewall configuration tool", "A method of password cracking"],
        correct: 1,
        explanation: "A honeypot is a security mechanism set up to attract and detect attackers, allowing security teams to study their methods without risking the real network."
    },
    {
        id: 60,
        category: "Cybersecurity",
        question: "Which security principle states that a user should be given only the minimum levels of access necessary to perform their job functions?",
        options: ["Need to Know", "Separation of Duties", "Principle of Least Privilege", "Defense in Depth"],
        correct: 2,
        explanation: "Least Privilege reduces the 'attack surface' — if an account is compromised, the attacker only has access to a limited set of resources."
    },
    {
        id: 61,
        category: "Cybersecurity",
        question: "What does 'MFA' stand for in account security?",
        options: ["Main Frame Access", "Multi-Factor Authentication", "Mandatory File Allocation", "Master File Authorization"],
        correct: 1,
        explanation: "MFA requires two or more pieces of evidence (factors) to verify a user's identity, such as a password plus a code from an app or SMS."
    },
    {
        id: 62,
        category: "Cybersecurity",
        question: "Which protocol is the secure version of FTP, used to provide secure file transfer functionalities over a reliable data stream?",
        options: ["SFTP", "HTTP", "SNMP", "TELNET"],
        correct: 0,
        explanation: "SFTP (SSH File Transfer Protocol) provides file access, transfer, and management over an encrypted Secure Shell (SSH) connection."
    },
    {
        id: 63,
        category: "Cybersecurity",
        question: "What type of malware is designed to block access up to a computer system or its data until a sum of money is paid?",
        options: ["Adware", "Ransomware", "Spyware", "Trojan"],
        correct: 1,
        explanation: "Ransomware typically encrypts files. Notable examples include WannaCry and REvil, which have caused billions in damages globally."
    },
    {
        id: 64,
        category: "Cybersecurity",
        question: "What is the primary function of a network Firewall?",
        options: ["To speed up network traffic", "To store website cache", "To monitor and control incoming/outgoing traffic", "To generate IP addresses"],
        correct: 2,
        explanation: "A firewall acts as a barrier between a trusted network and untrusted networks (like the internet), based on predetermined security rules."
    },
    {
        id: 65,
        category: "Gaming",
        question: "In the game 'Portal', which phrase became a famous internet meme?",
        options: ["The end is near", "The cake is a lie", "GLaDOS is watching", "Zero sum game"],
        correct: 1,
        explanation: "Found scribbled on walls by a previous test subject, 'The cake is a lie' warns the player that the promised reward is a deception by the AI GLaDOS."
    },
    {
        id: 66,
        category: "Gaming",
        question: "Who is the legendary Japanese game designer behind 'Super Mario', 'The Legend of Zelda', and 'Donkey Kong'?",
        options: ["Hideo Kojima", "Shigeru Miyamoto", "Satoshi Tajiri", "Hideki Kamiya"],
        correct: 1,
        explanation: "Shigeru Miyamoto is one of the most influential game designers in history, often called the 'father of modern video games' for his work at Nintendo."
    },
    {
        id: 67,
        category: "Gaming",
        question: "What is the name of the Witcher protagonist in Sapkowski's books and CD Projekt Red's games?",
        options: ["Vesemir", "Lambert", "Geralt of Rivia", "Eskel"],
        correct: 2,
        explanation: "Geralt of Rivia, also known as the 'White Wolf' or 'Butcher of Blaviken', is the main character of The Witcher series."
    },
    {
        id: 68,
        category: "Gaming",
        question: "In the original 'Pac-Man', what is the name of the red ghost who chases Pac-Man most directly?",
        options: ["Pinky", "Inky", "Clyde", "Blinky"],
        correct: 3,
        explanation: "Blinky (red) is the leader and follows Pac-Man directly. Pinky (pink) tries to get in front of him, Inky (cyan) is erratic, and Clyde (orange) is cowardly."
    },
    {
        id: 69,
        category: "Gaming",
        question: "Which home console currently holds the record for being the best-selling of all time?",
        options: ["Wii", "Nintendo Switch", "PlayStation 2", "PlayStation 4"],
        correct: 2,
        explanation: "The PlayStation 2 has sold over 155 million units worldwide since its launch in 2000, narrowly beating the Nintendo DS and Switch for the top spot."
    },
    {
        id: 70,
        category: "Gaming",
        question: "In 'Grand Theft Auto V', what is the name of the fictional city inspired by Los Angeles?",
        options: ["Liberty City", "Vice City", "Los Santos", "San Fierro"],
        correct: 2,
        explanation: "Los Santos is the primary setting of GTA V and GTA San Andreas, serving as a satire of modern-day Los Angeles and Southern California."
    },
    {
        id: 71,
        category: "Gaming",
        question: "Which iconic RPG series features the 'Vault Boy' mascot and takes place in a post-nuclear wasteland?",
        options: ["Borderlands", "Fallout", "The Elder Scrolls", "Mass Effect"],
        correct: 1,
        explanation: "The Fallout series, created by Interplay and later taken over by Bethesda, is known for its 1950s 'atompunk' aesthetic and wasteland survival."
    },
    {
        id: 72,
        category: "Gaming",
        question: "In what year did Blizzard Entertainment release the massively successful MMORPG 'World of Warcraft'?",
        options: ["2002", "2004", "2006", "2008"],
        correct: 1,
        explanation: "World of Warcraft (WoW) launched in November 2004, becoming the most popular MMORPG in the world and significantly impacting pop culture."
    },
    {
        id: 73,
        category: "Gaming",
        question: "Who is the main protagonist and treasure hunter in the 'Tomb Raider' series?",
        options: ["Nathan Drake", "Lara Croft", "Elena Fisher", "Chloe Frazer"],
        correct: 1,
        explanation: "Lara Croft first appeared in 1996 and has since become one of the most recognizable female characters in all of gaming."
    },
    {
        id: 74,
        category: "Gaming",
        question: "Which Japanese studio developed the 'Souls' series (Demon's Souls, Dark Souls) and 'Elden Ring'?",
        options: ["Capcom", "FromSoftware", "PlatinumGames", "Square Enix"],
        correct: 1,
        explanation: "FromSoftware, led by Hidetaka Miyazaki, is famous for creating the 'Soulslike' genre, known for high difficulty and environmental storytelling."
    }
];

const MOCK_LEADERBOARD = [
    { username: "QuantumQueen", score: 12500, accuracy: 94, streak: 12, category: "Science", quizzesDone: 42 },
    { username: "CodeNinja_X", score: 11200, accuracy: 88, streak: 8, category: "Tech", quizzesDone: 38 },
    { username: "CinematicSage", score: 10800, accuracy: 85, streak: 15, category: "Movies", quizzesDone: 35 },
    { username: "HistoryHunter", score: 9500, accuracy: 82, streak: 10, category: "History", quizzesDone: 30 },
    { username: "GeekGodfather", score: 8900, accuracy: 78, streak: 6, category: "Tech", quizzesDone: 27 },
    { username: "AstralBoy", score: 7600, accuracy: 75, streak: 9, category: "Science", quizzesDone: 22 },
    { username: "Neuromancer", score: 6800, accuracy: 71, streak: 4, category: "General Knowledge", quizzesDone: 20 },
    { username: "VoidArcher", score: 5900, accuracy: 68, streak: 3, category: "Movies", quizzesDone: 18 }
];

const ACHIEVEMENTS_DEF = [
    { id: 'first_quiz', name: 'First Step', desc: 'Complete your first quiz', icon: 'rocket_launch' },
    { id: 'perfect_score', name: 'Flawless', desc: 'Score 100% on any quiz', icon: 'workspace_premium' },
    { id: 'streak_3', name: 'On Fire', desc: 'Get a 3-answer streak', icon: 'local_fire_department' },
    { id: 'top_10', name: 'Top 10', desc: 'Reach Global Top 10', icon: 'leaderboard' },
    { id: 'speed_demon', name: 'Speed Demon', desc: 'Answer in under 5 seconds', icon: 'bolt' },
    { id: 'quiz_5', name: 'Dedicated', desc: 'Complete 5 quizzes', icon: 'school' }
];

// ==========================================
// STATE
// ==========================================

const state = {
    currentView: 'home',
    currentUser: null,
    selectedCategory: 'all',

    // Quiz session
    questions: [],
    currentQ: 0,
    score: 0,
    timer: 30,
    timerInterval: null,
    isAnswered: false,
    quizStartTime: null,
    fastestAnswer: 999,
    answerRecord: [],
    currentStreak: 0,
    bestStreak: 0,

    // Leaderboard
    lbPage: 8
};

// ==========================================
// UTILS
// ==========================================

function getInitials(name) {
    if (!name) return '?';
    return name.trim().split(/\s+/).map(n => n[0]).join('').toUpperCase().substring(0, 2);
}

function formatTime(seconds) {
    if (seconds < 60) return `${seconds}s`;
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s.toString().padStart(2, '0')}s`;
}

function showToast(msg, type = 'success') {
    const toast = document.getElementById('toast');
    const icon = document.getElementById('toast-icon');
    const msgEl = document.getElementById('toast-msg');
    icon.textContent = type === 'success' ? 'check_circle' : type === 'error' ? 'error' : 'info';
    icon.style.color = type === 'success' ? 'var(--tertiary)' : type === 'error' ? 'var(--error)' : 'var(--primary)';
    msgEl.textContent = msg;
    toast.classList.remove('hidden');
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.classList.add('hidden'), 300);
    }, 2800);
}

function saveSession(session) {
    localStorage.setItem('quiznow_session', JSON.stringify(session));
}

function loadSession() {
    try {
        const raw = localStorage.getItem('quiznow_session');
        return raw ? JSON.parse(raw) : null;
    } catch { return null; }
}

function getLeaderboard() {
    try {
        const raw = localStorage.getItem('quiznow_leaderboard');
        return raw ? JSON.parse(raw) : [...MOCK_LEADERBOARD];
    } catch { return [...MOCK_LEADERBOARD]; }
}

function saveLeaderboard(lb) {
    localStorage.setItem('quiznow_leaderboard', JSON.stringify(lb));
}

// ==========================================
// ROUTER
// ==========================================

function showView(viewId) {
    if (viewId === 'quiz' && state.currentView !== 'quiz') {
        startQuiz();
        return;
    }

    if (viewId === 'profile' && !state.currentUser) {
        showView('auth');
        switchAuthTab('login');
        return;
    }

    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));

    const target = document.getElementById(`${viewId}-view`);
    if (!target) return;
    target.classList.remove('hidden');
    state.currentView = viewId;

    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.view === viewId);
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.view === viewId);
    });

    if (viewId !== 'quiz') clearInterval(state.timerInterval);

    const authView = viewId === 'auth';
    const quizViews = ['quiz'];
    document.getElementById('desktop-nav').classList.toggle('hidden', authView);
    document.getElementById('side-nav').style.display = (authView || quizViews.includes(viewId)) ? 'none' : '';
    document.getElementById('bottom-nav').style.display = authView ? 'none' : '';

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (viewId === 'leaderboard') renderLeaderboard();
    if (viewId === 'profile') renderProfile();
    if (viewId === 'home') renderHomeStats();
}

// ==========================================
// SESSION / AUTH
// ==========================================

function initSession() {
    const session = loadSession();
    if (session && session.isLoggedIn) {
        state.currentUser = session;
        updateHeaderAuth(true);
    } else {
        updateHeaderAuth(false);
    }
}

function updateHeaderAuth(loggedIn) {
    const authBtns = document.getElementById('auth-buttons');
    const userInfo = document.getElementById('user-info');
    const desktopNav = document.getElementById('desktop-nav');

    if (loggedIn && state.currentUser) {
        authBtns.classList.add('hidden');
        userInfo.classList.remove('hidden');
        desktopNav.classList.remove('hidden');
        document.getElementById('header-pts').textContent = `LVL ${state.currentUser.lvl} \u2022 ${state.currentUser.pts.toLocaleString()} PTS`;
        document.getElementById('header-avatar').textContent = getInitials(state.currentUser.user);
    } else {
        authBtns.classList.remove('hidden');
        userInfo.classList.add('hidden');
        desktopNav.classList.add('hidden');
    }
}

function switchAuthTab(tab) {
    const indicator = document.getElementById('tabIndicator');
    const container = document.getElementById('authFormsContainer');
    const btns = document.querySelectorAll('.tab-btn');

    if (tab === 'login') {
        indicator.style.transform = 'translateX(0)';
        container.style.transform = 'translateX(0)';
        btns[0].classList.add('active');
        btns[1].classList.remove('active');
    } else {
        indicator.style.transform = 'translateX(100%)';
        container.style.transform = 'translateX(-50%)';
        btns[1].classList.add('active');
        btns[0].classList.remove('active');
    }
}

function togglePassword(icon) {
    const input = icon.previousElementSibling;
    if (!input || input.tagName !== 'INPUT') return;
    if (input.type === 'password') {
        input.type = 'text';
        icon.textContent = 'visibility';
    } else {
        input.type = 'password';
        icon.textContent = 'visibility_off';
    }
}

function handleAuth(event, type) {
    event.preventDefault();
    const form = event.target;
    const btn = form.querySelector('button[type="submit"]');
    let valid = true;

    form.querySelectorAll('.input-group').forEach(g => g.classList.remove('has-error', 'has-success'));
    form.querySelectorAll('.auth-error-banner').forEach(b => b.classList.add('hidden'));

    if (type === 'signup') {
        const username = document.getElementById('signup-user').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const pass = document.getElementById('signup-pass').value;
        const confirm = document.getElementById('signup-confirm').value;

        if (username.length < 3) { setFieldError('signup-user-group', 'signup-user-err', 'Username must be at least 3 characters.'); valid = false; }
        else setFieldSuccess('signup-user-group');

        if (!isValidEmail(email)) { setFieldError('signup-email-group', 'signup-email-err', 'Please enter a valid email address.'); valid = false; }
        else setFieldSuccess('signup-email-group');

        if (pass.length < 6) { setFieldError('signup-pass-group', 'signup-pass-err', 'Password must be at least 6 characters.'); valid = false; }
        else setFieldSuccess('signup-pass-group');

        if (pass !== confirm) { setFieldError('signup-confirm-group', 'signup-confirm-err', 'Passwords do not match.'); valid = false; }
        else if (pass.length >= 6) setFieldSuccess('signup-confirm-group');

        if (!valid) return;

        const existing = loadSession();
        if (existing && existing.isLoggedIn && existing.email === email) {
            showBanner('signup-banner', 'An account with this email already exists.');
            return;
        }

        btn.classList.add('btn-loading');
        btn.disabled = true;

        setTimeout(() => {
            const session = createNewSession(username, email);
            saveSession(session);
            state.currentUser = session;
            updateHeaderAuth(true);
            updateLeaderboardWithUser();
            showView('home');
            showToast(`Welcome to QuizNow, ${username}!`);
            btn.classList.remove('btn-loading');
            btn.disabled = false;
        }, 1200);

    } else {
        const email = document.getElementById('login-email').value.trim();
        const pass = document.getElementById('login-pass').value;

        if (!isValidEmail(email)) { setFieldError('login-email-group', 'login-email-err', 'Please enter a valid email address.'); valid = false; }
        if (!pass) { setFieldError('login-pass-group', 'login-pass-err', 'Password is required.'); valid = false; }
        if (!valid) return;

        btn.classList.add('btn-loading');
        btn.disabled = true;

        setTimeout(() => {
            const saved = loadSession();
            if (saved && saved.email === email) {
                state.currentUser = saved;
                state.currentUser.isLoggedIn = true;
                saveSession(state.currentUser);
                updateHeaderAuth(true);
                showView('home');
                showToast(`Welcome back, ${state.currentUser.user}!`);
            } else {
                showBanner('login-banner', 'No account found with that email. Please sign up first.');
            }
            btn.classList.remove('btn-loading');
            btn.disabled = false;
        }, 1000);
    }
}

function handleGoogleAuth() {
    const name = 'Google User';
    const email = 'google.user@gmail.com';
    const session = createNewSession(name, email);
    saveSession(session);
    state.currentUser = session;
    updateHeaderAuth(true);
    updateLeaderboardWithUser();
    showView('home');
    showToast('Signed in with Google!');
}

function createNewSession(username, email) {
    return {
        isLoggedIn: true,
        user: username,
        email: email,
        lvl: 1,
        pts: 0,
        bestStreak: 0,
        quizzesDone: 0,
        accuracy: 0,
        totalCorrect: 0,
        totalAnswered: 0,
        joinDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        history: [],
        achievements: []
    };
}

function handleLogout() {
    localStorage.removeItem('quiznow_session');
    state.currentUser = null;
    updateHeaderAuth(false);
    toggleLogoutModal(false);
    showView('home');
    showToast('You have been logged out.', 'info');
}

function setFieldError(groupId, errId, msg) {
    const group = document.getElementById(groupId);
    const err = document.getElementById(errId);
    if (group) group.classList.add('has-error');
    if (err) err.textContent = msg;
}

function setFieldSuccess(groupId) {
    const group = document.getElementById(groupId);
    if (group) { group.classList.remove('has-error'); group.classList.add('has-success'); }
}

function showBanner(bannerId, msg) {
    const banner = document.getElementById(bannerId);
    const msgEl = banner.querySelector('span:last-child');
    if (msgEl) msgEl.textContent = msg;
    banner.classList.remove('hidden');
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ==========================================
// HOME
// ==========================================

function startQuizFromHome() {
    if (!state.currentUser) {
        showView('auth');
        switchAuthTab('login');
        showToast('Please log in to start a quiz.', 'info');
        return;
    }
    startQuiz();
}

function renderHomeStats() {
    if (!state.currentUser) {
        document.getElementById('home-streak').textContent = '0 Days';
        document.getElementById('home-streak-bar').style.width = '0%';
        document.getElementById('home-rank-label').textContent = 'Log in to track rank';
        return;
    }
    const user = state.currentUser;
    document.getElementById('home-streak').textContent = `${user.bestStreak || 0} Best`;
    const streakPct = Math.min(((user.bestStreak || 0) / 20) * 100, 100);
    document.getElementById('home-streak-bar').style.width = `${streakPct}%`;
    const lb = getLeaderboard();
    const rank = lb.findIndex(u => u.username === user.user) + 1;
    document.getElementById('home-rank-label').textContent = rank > 0 ? `Rank #${rank} Global` : 'Start playing';
}

function startLiveCountdown() {
    const el = document.getElementById('live-countdown');
    if (!el) return;
    let total = 4 * 3600 + 22 * 60 + 15;
    setInterval(() => {
        if (total <= 0) { el.textContent = '00:00:00'; return; }
        total--;
        const h = Math.floor(total / 3600).toString().padStart(2, '0');
        const m = Math.floor((total % 3600) / 60).toString().padStart(2, '0');
        const s = (total % 60).toString().padStart(2, '0');
        el.textContent = `${h}:${m}:${s}`;
    }, 1000);
}

// ==========================================
// CATEGORY FILTER
// ==========================================

function setCategory(cat) {
    state.selectedCategory = cat;

    // Update chip active state
    const catChips = document.getElementById('category-chips');
    if (catChips) {
        catChips.querySelectorAll('.chip').forEach(c => {
            c.classList.toggle('active', c.dataset.cat === cat);
        });
    }

    // Show/hide bento cards based on category
    document.querySelectorAll('.bento-card').forEach(card => {
        const cardCat = card.dataset.cat;
        if (cat === 'all' || cardCat === cat || cardCat === 'all') {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// ==========================================
// QUIZ LOGIC
// ==========================================

function startQuiz() {
    const pool = state.selectedCategory === 'all'
        ? QUESTIONS
        : QUESTIONS.filter(q => q.category.toLowerCase() === state.selectedCategory.toLowerCase());

    if (pool.length === 0) {
        showToast('No questions available for this category yet.', 'info');
        return;
    }

    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(10, pool.length));

    state.questions = shuffled;
    state.currentQ = 0;
    state.score = 0;
    state.fastestAnswer = 999;
    state.answerRecord = [];
    state.currentStreak = 0;
    state.bestStreak = 0;
    state.quizStartTime = Date.now();

    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById('quiz-view').classList.remove('hidden');
    state.currentView = 'quiz';
    document.getElementById('side-nav').style.display = 'none';
    window.scrollTo({ top: 0 });

    renderQuestion();
}

function renderQuestion() {
    if (state.currentQ >= state.questions.length) {
        endQuiz();
        return;
    }

    const q = state.questions[state.currentQ];
    state.isAnswered = false;
    state.timer = 30;

    const pct = Math.round(((state.currentQ + 1) / state.questions.length) * 100);
    document.getElementById('progress-text').textContent = `Question ${state.currentQ + 1} of ${state.questions.length}`;
    document.getElementById('progress-pct').textContent = `${pct}%`;
    document.getElementById('progress-bar').style.width = `${pct}%`;

    document.getElementById('question-cat-tag').textContent = q.category;
    document.getElementById('question-display').textContent = q.question;
    document.getElementById('live-score').textContent = `${state.score} pts`;
    document.getElementById('live-streak').textContent = `${state.currentStreak} streak`;

    const grid = document.getElementById('options-grid');
    grid.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, idx) => {
        const card = document.createElement('div');
        card.className = 'option-card';
        card.innerHTML = `
            <div class="option-badge">${letters[idx]}</div>
            <div class="option-text">${opt}</div>
            <span class="material-symbols-outlined option-status">check_circle</span>
        `;
        card.addEventListener('click', () => selectAnswer(idx, card));
        grid.appendChild(card);
    });

    document.getElementById('explanation-panel').classList.remove('show');
    document.getElementById('explanation-text').textContent = '';
    document.getElementById('next-btn').disabled = true;

    startTimer();
}

function startTimer() {
    clearInterval(state.timerInterval);
    const timerText = document.getElementById('timer-text');
    const timerPill = document.getElementById('timer-pill');

    timerPill.classList.remove('warning');
    timerText.textContent = `${state.timer}s`;

    state.timerInterval = setInterval(() => {
        state.timer--;
        timerText.textContent = `${state.timer}s`;
        if (state.timer <= 10) timerPill.classList.add('warning');
        if (state.timer <= 0) {
            clearInterval(state.timerInterval);
            if (!state.isAnswered) autoExpire();
        }
    }, 1000);
}

function selectAnswer(index, element) {
    if (state.isAnswered) return;
    state.isAnswered = true;
    clearInterval(state.timerInterval);

    const q = state.questions[state.currentQ];
    const isCorrect = index === q.correct;
    const timeTaken = 30 - state.timer;

    if (isCorrect && timeTaken < state.fastestAnswer) state.fastestAnswer = timeTaken;

    let pointsEarned = 0;
    if (isCorrect) {
        pointsEarned = 100;
        if (timeTaken < 15) pointsEarned += 50;
        state.score += pointsEarned;
        state.currentStreak++;
        if (state.currentStreak > state.bestStreak) state.bestStreak = state.currentStreak;
        element.classList.add('correct');
        element.querySelector('.option-status').textContent = 'check_circle';
    } else {
        state.currentStreak = 0;
        element.classList.add('wrong');
        element.querySelector('.option-status').textContent = 'cancel';
        const allCards = document.querySelectorAll('.option-card');
        allCards[q.correct].classList.add('correct');
        allCards[q.correct].querySelector('.option-status').textContent = 'check_circle';
    }

    document.querySelectorAll('.option-card').forEach((card, idx) => {
        card.classList.add('locked');
        if (idx !== index && idx !== q.correct) card.classList.add('dimmed');
    });

    state.answerRecord.push({
        questionId: q.id,
        questionText: q.question,
        category: q.category,
        userAnswerIdx: index,
        userAnswerText: index >= 0 ? q.options[index] : 'No answer (time expired)',
        correctAnswerIdx: q.correct,
        correctAnswerText: q.options[q.correct],
        isCorrect,
        timeTaken,
        explanation: q.explanation,
        pointsEarned
    });

    document.getElementById('live-score').textContent = `${state.score} pts`;
    document.getElementById('live-streak').textContent = `${state.currentStreak} streak`;
    document.getElementById('explanation-text').textContent = q.explanation;
    document.getElementById('explanation-panel').classList.add('show');
    document.getElementById('next-btn').disabled = false;
}

function autoExpire() {
    if (state.isAnswered) return;
    state.isAnswered = true;
    state.currentStreak = 0;

    const q = state.questions[state.currentQ];
    document.querySelectorAll('.option-card').forEach((card, idx) => {
        card.classList.add('locked');
        if (idx === q.correct) {
            card.classList.add('correct');
            card.querySelector('.option-status').textContent = 'check_circle';
        } else {
            card.classList.add('dimmed');
        }
    });

    state.answerRecord.push({
        questionId: q.id,
        questionText: q.question,
        category: q.category,
        userAnswerIdx: -1,
        userAnswerText: 'Time expired',
        correctAnswerIdx: q.correct,
        correctAnswerText: q.options[q.correct],
        isCorrect: false,
        timeTaken: 30,
        explanation: q.explanation,
        pointsEarned: 0
    });

    document.getElementById('live-streak').textContent = '0 streak';
    document.getElementById('explanation-text').textContent = q.explanation;
    document.getElementById('explanation-panel').classList.add('show');
    document.getElementById('next-btn').disabled = false;
    showToast('Time expired!', 'error');
}

function nextQuestion() {
    state.currentQ++;
    renderQuestion();
}

function endQuiz() {
    clearInterval(state.timerInterval);

    const totalTime = Math.round((Date.now() - state.quizStartTime) / 1000);
    const correctCount = state.answerRecord.filter(r => r.isCorrect).length;
    const total = state.answerRecord.length;
    const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;

    if (state.currentUser) {
        const user = state.currentUser;

        user.history = user.history || [];
        user.history.push({
            date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
            category: state.questions[0]?.category || 'Mixed',
            scorePercent: accuracy,
            correct: correctCount,
            total,
            time: formatTime(totalTime),
            pts: state.score
        });

        user.achievements = user.achievements || [];
        if (user.quizzesDone === 0 && !user.achievements.includes('first_quiz')) {
            user.achievements.push('first_quiz');
            showToast('Achievement unlocked: First Step!');
        }
        if (accuracy === 100 && !user.achievements.includes('perfect_score')) {
            user.achievements.push('perfect_score');
            showToast('Achievement unlocked: Flawless!');
        }
        if (state.bestStreak >= 3 && !user.achievements.includes('streak_3')) {
            user.achievements.push('streak_3');
            showToast('Achievement unlocked: On Fire!');
        }
        if (state.fastestAnswer < 5 && !user.achievements.includes('speed_demon')) {
            user.achievements.push('speed_demon');
            showToast('Achievement unlocked: Speed Demon!');
        }

        user.pts += state.score;
        user.quizzesDone++;
        user.totalCorrect = (user.totalCorrect || 0) + correctCount;
        user.totalAnswered = (user.totalAnswered || 0) + total;
        user.accuracy = user.totalAnswered > 0 ? Math.round((user.totalCorrect / user.totalAnswered) * 100) : 0;
        if (state.bestStreak > (user.bestStreak || 0)) user.bestStreak = state.bestStreak;
        user.lvl = Math.floor(user.pts / 5000) + 1;

        if (user.quizzesDone >= 5 && !user.achievements.includes('quiz_5')) {
            user.achievements.push('quiz_5');
            showToast('Achievement unlocked: Dedicated!');
        }

        saveSession(user);
        updateHeaderAuth(true);
        updateLeaderboardWithUser();

        const lb = getLeaderboard();
        const rank = lb.findIndex(u => u.username === user.user) + 1;
        if (rank > 0 && rank <= 10 && !user.achievements.includes('top_10')) {
            user.achievements.push('top_10');
            saveSession(user);
            showToast('Achievement unlocked: Top 10!');
        }
    }

    renderResults(correctCount, total, accuracy, totalTime);

    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById('results-view').classList.remove('hidden');
    state.currentView = 'results';
    document.getElementById('side-nav').style.display = '';
    window.scrollTo({ top: 0 });
}

function restartQuiz() {
    startQuiz();
}

function exitQuiz() {
    clearInterval(state.timerInterval);
    toggleExitModal(false);
    showView('home');
}

// ==========================================
// RESULTS
// ==========================================

function renderResults(correctCount, total, accuracy, totalTime) {
    const donutRing = document.getElementById('donut-ring');
    setTimeout(() => {
        donutRing.style.background = `conic-gradient(var(--tertiary) 0% ${accuracy}%, var(--surface-highest) ${accuracy}% 100%)`;
    }, 100);
    document.getElementById('donut-pct').textContent = `${accuracy}%`;

    let title, subtitle;
    if (accuracy >= 90) { title = 'Elite Performance'; subtitle = "You're in the top tier. Exceptional precision and speed."; }
    else if (accuracy >= 70) { title = 'Strong Showing'; subtitle = "Solid performance. A few more reps and you'll be flawless."; }
    else if (accuracy >= 50) { title = 'Good Effort'; subtitle = "You're getting there. Keep studying and try again!"; }
    else { title = 'Keep Practising'; subtitle = "Every expert was once a beginner. Review and come back stronger."; }

    document.getElementById('results-title').textContent = title;
    document.getElementById('results-subtitle').textContent = subtitle;
    document.getElementById('res-time').textContent = formatTime(totalTime);
    document.getElementById('res-correct').textContent = `${correctCount}/${total}`;
    document.getElementById('res-streak').textContent = state.bestStreak;
    document.getElementById('res-pts').textContent = `+${state.score}`;

    const list = document.getElementById('review-list');
    list.innerHTML = '';
    state.answerRecord.forEach((rec, idx) => {
        const card = document.createElement('div');
        card.className = `glass-high review-card ${rec.isCorrect ? 'review-correct' : 'review-wrong'}`;
        card.innerHTML = `
            <div class="review-card-top">
                <span class="review-q-num">Question ${String(idx + 1).padStart(2, '0')} &bull; ${rec.category}</span>
                <span class="material-symbols-outlined" style="color:${rec.isCorrect ? 'var(--tertiary)' : 'var(--error)'}; font-variation-settings:'FILL' 1">${rec.isCorrect ? 'check_circle' : 'cancel'}</span>
            </div>
            <div class="review-q-text">${rec.questionText}</div>
            <div class="review-answers">
                <div class="review-answer-box user-ans">
                    <span class="ans-label">Your Answer</span>
                    <span class="ans-val">${rec.userAnswerText}</span>
                </div>
                <div class="review-answer-box correct-ans">
                    <span class="ans-label">Correct Answer</span>
                    <span class="ans-val">${rec.correctAnswerText}</span>
                </div>
            </div>
            <div class="review-insight">
                <p class="review-insight-text"><strong style="color:var(--text)">Insight: </strong>${rec.explanation}</p>
            </div>
        `;
        list.appendChild(card);
    });

    renderMiniLeaderboard();
}

function renderMiniLeaderboard() {
    const lb = getLeaderboard();
    const listEl = document.getElementById('results-leaderboard-list');
    listEl.innerHTML = '';
    lb.slice(0, 5).forEach((entry, idx) => {
        const isMe = state.currentUser && entry.username === state.currentUser.user;
        const row = document.createElement('div');
        row.className = `mini-lb-row ${isMe ? 'is-me' : ''}`;
        row.innerHTML = `
            <div class="mini-avatar">${getInitials(entry.username)}</div>
            <div class="mini-lb-info">
                <div class="mini-lb-name">${entry.username}${isMe ? '<span class="you-tag">YOU</span>' : ''}</div>
                <div class="mini-lb-rank">Rank #${idx + 1}</div>
            </div>
            <div class="mini-lb-score">${entry.score.toLocaleString()}</div>
        `;
        listEl.appendChild(row);
    });
}

// ==========================================
// LEADERBOARD
// ==========================================

function updateLeaderboardWithUser() {
    if (!state.currentUser) return;
    let lb = getLeaderboard();
    const userIdx = lb.findIndex(u => u.username === state.currentUser.user);
    const userData = {
        username: state.currentUser.user,
        score: state.currentUser.pts,
        accuracy: state.currentUser.accuracy || 0,
        streak: state.currentUser.bestStreak || 0,
        category: state.currentUser.history?.length > 0
            ? state.currentUser.history[state.currentUser.history.length - 1].category
            : 'General',
        quizzesDone: state.currentUser.quizzesDone || 0
    };
    if (userIdx > -1) lb[userIdx] = userData;
    else lb.push(userData);
    lb.sort((a, b) => b.score - a.score);
    saveLeaderboard(lb);
}

function renderLeaderboard() {
    updateLeaderboardWithUser();
    const lb = getLeaderboard();

    const podiumEl = document.getElementById('podium-container');
    podiumEl.innerHTML = '';
    lb.slice(0, 3).forEach((entry, i) => {
        const rank = i + 1;
        const slot = document.createElement('div');
        slot.className = `podium-slot rank-${rank}`;
        slot.innerHTML = `
            ${rank === 1 ? '<span class="material-symbols-outlined podium-crown">workspace_premium</span><div class="podium-halo"></div>' : ''}
            <div class="podium-avatar-wrap">
                <div class="podium-avatar">${getInitials(entry.username)}</div>
                <div class="podium-medal">${rank}</div>
            </div>
            <div class="podium-name">${entry.username}</div>
            <div class="podium-score">${entry.score.toLocaleString()} PTS</div>
        `;
        podiumEl.appendChild(slot);
    });

    renderLbTable(lb);

    if (state.currentUser) {
        const rank = lb.findIndex(u => u.username === state.currentUser.user) + 1;
        document.getElementById('ps-rank').textContent = rank > 0 ? `#${rank}` : '#--';
        document.getElementById('ps-score').textContent = state.currentUser.pts.toLocaleString();
        document.getElementById('ps-streak').textContent = state.currentUser.bestStreak || 0;
        document.getElementById('ps-count').textContent = state.currentUser.quizzesDone || 0;
        const pct = Math.min(((state.currentUser.pts || 0) / 20000) * 100, 100);
        document.getElementById('ps-milestone-bar').style.width = `${pct}%`;
    }
}

function renderLbTable(lb) {
    const tbody = document.getElementById('lb-table-body');
    tbody.innerHTML = '';
    lb.slice(0, state.lbPage).forEach((entry, i) => {
        const rank = i + 1;
        const isMe = state.currentUser && entry.username === state.currentUser.user;
        const tr = document.createElement('tr');
        if (rank === 1) tr.className = 'tr-gold';
        else if (rank === 2) tr.className = 'tr-silver';
        else if (rank === 3) tr.className = 'tr-bronze';
        if (isMe) tr.classList.add('tr-me');
        tr.innerHTML = `
            <td><span class="rank-num">#${rank}</span></td>
            <td>
                <div class="player-cell">
                    <div class="player-avatar-sm">${getInitials(entry.username)}</div>
                    <span class="player-name">${entry.username}${isMe ? '<span class="you-tag">YOU</span>' : ''}</span>
                </div>
            </td>
            <td><span class="score-col">${entry.score.toLocaleString()}</span></td>
            <td>${entry.accuracy}%</td>
            <td>${entry.streak}</td>
            <td><span class="badge badge-primary">${entry.category}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

function loadMoreLeaderboard() {
    state.lbPage += 5;
    renderLbTable(getLeaderboard());
}

// ==========================================
// PROFILE
// ==========================================

function renderProfile() {
    if (!state.currentUser) {
        showView('auth');
        return;
    }
    const user = state.currentUser;
    const lb = getLeaderboard();
    const rank = lb.findIndex(u => u.username === user.user) + 1;

    document.getElementById('profile-avatar-lg').textContent = getInitials(user.user);
    document.getElementById('profile-name').textContent = user.user;
    document.getElementById('profile-lvl-badge').textContent = `LVL ${user.lvl}`;
    document.getElementById('profile-join').textContent = `Joined ${user.joinDate || 'March 2026'}`;
    document.getElementById('profile-quiz-count').textContent = `${user.quizzesDone || 0} Quizzes`;

    const xpInLevel = user.pts % 5000;
    document.getElementById('xp-cur').textContent = `${xpInLevel} XP`;
    document.getElementById('xp-max').textContent = `5000 XP`;
    document.getElementById('xp-bar').style.width = `${(xpInLevel / 5000) * 100}%`;

    document.getElementById('p-total-score').textContent = user.pts.toLocaleString();
    document.getElementById('p-accuracy').textContent = `${user.accuracy || 0}%`;
    document.getElementById('p-streak').textContent = user.bestStreak || 0;
    document.getElementById('p-rank').textContent = rank > 0 ? `#${rank}` : '#--';

    const achList = document.getElementById('achievements-list');
    achList.innerHTML = '';
    ACHIEVEMENTS_DEF.forEach(def => {
        const unlocked = (user.achievements || []).includes(def.id);
        const card = document.createElement('div');
        card.className = `glass achievement-card ${unlocked ? '' : 'locked'}`;
        card.innerHTML = `
            <div class="ach-icon-wrap">
                <span class="material-symbols-outlined" style="font-variation-settings:'FILL' ${unlocked ? '1' : '0'}">${def.icon}</span>
            </div>
            <div class="ach-name">${def.name}</div>
            <div class="ach-desc">${def.desc}</div>
        `;
        achList.appendChild(card);
    });

    const histList = document.getElementById('history-list');
    histList.innerHTML = '';
    if (!user.history || user.history.length === 0) {
        histList.innerHTML = '<div class="history-empty">No quizzes played yet. Start your first quiz!</div>';
    } else {
        [...user.history].reverse().forEach(item => {
            const scoreClass = item.scorePercent >= 80 ? 'score-hi' : item.scorePercent >= 50 ? 'score-mid' : 'score-lo';
            const row = document.createElement('div');
            row.className = 'history-item';
            row.innerHTML = `
                <div class="history-icon-wrap"><span class="material-symbols-outlined">science</span></div>
                <span class="history-name">${item.category || 'Mixed'}</span>
                <span class="history-date">${item.date}</span>
                <span class="history-score ${scoreClass}">${item.scorePercent}%</span>
                <span class="history-detail">${item.correct}/${item.total}</span>
            `;
            histList.appendChild(row);
        });
    }
}

// ==========================================
// MODALS
// ==========================================

function toggleExitModal(show) {
    document.getElementById('exit-modal').classList.toggle('hidden', !show);
}

function toggleLogoutModal(show) {
    document.getElementById('logout-modal').classList.toggle('hidden', !show);
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.add('hidden');
    }
});

// ==========================================
// INIT
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    // Category chips
    const catChips = document.getElementById('category-chips');
    if (catChips) {
        catChips.querySelectorAll('.chip').forEach(chip => {
            chip.addEventListener('click', () => {
                setCategory(chip.dataset.cat);
            });
        });
    }

    // Leaderboard time filter
    const lbToggle = document.getElementById('lb-time-toggle');
    if (lbToggle) {
        lbToggle.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                lbToggle.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderLeaderboard();
            });
        });
    }

    initSession();
    showView('home');
    startLiveCountdown();

    if (window.innerWidth <= 1024) {
        const sn = document.getElementById('side-nav');
        if (sn) sn.style.display = 'none';
    }
});
