const dictionary = [
    {
        Word: 'adapter',
        LexicalCategory: 'Noun',
        Definition: 'a device that allows one type of hardware or software to be used with another type of hardware or software.',
        Pronunciation: 'ədæptər',
        Synonym: 'converter, connector, plug',
        Antonym: null,
        Sentence: 'You need an adapter to connect the old printer to the new computer.'
    },
    {
        Word: 'algorithm',
        LexicalCategory: 'Noun',
        Definition: 'a step-by-step procedure or formula for solving a specific problem or accomplishing a specific task.',
        Pronunciation: 'ælɡərɪðəm',
        Synonym: 'method, procedure, formula',
        Antonym: null,
        Sentence: 'The algorithm efficiently sorts the data in ascending order.'
    },
    {
        Word: 'analog',
        LexicalCategory: 'Adjective',
        Definition: 'relating to or using signals or information represented by a continuously variable physical quantity such as spatial position, voltage, etc., rather than by discrete values.',
        Pronunciation: 'ænəlɒɡ',
        Synonym: null,
        Antonym: null,
        Sentence: 'Older music players used analog technology.'
    },
    {
        Word: 'antivirus',
        LexicalCategory: 'Noun',
        Definition: 'a software program designed to detect, prevent, and remove malicious software (malware) from a computer system.',
        Pronunciation: 'æntiˌvaɪrəs',
        Synonym: 'security software, malware scanner',
        Antonym: null,
        Sentence: 'Make sure to keep your antivirus software up to date to protect against viruses.'
    },
    {
        Word: 'API',
        LexicalCategory: 'Noun',
        Definition: 'Application Programming Interface; a set of functions and protocols that allow the creation of applications which access the features or data of an operating system, application, or other service.',
        Pronunciation: 'ˌeɪˌpiːaɪ',
        Synonym: null,
        Antonym: null,
        Sentence: 'Developers use APIs to integrate different software systems.'
    },
    {
        Word: 'application',
        LexicalCategory: 'Noun',
        Definition: 'a computer program designed to perform a specific task or set of tasks for the user.',
        Pronunciation: 'ˌæplɪkeɪʃən',
        Synonym: 'app, program, software',
        Antonym: null,
        Sentence: 'The spreadsheet application helps manage financial data.'
    },
    {
        Word: 'array',
        LexicalCategory: 'Noun',
        Definition: 'a data structure consisting of a collection of elements, each identified by an index or key.',
        Pronunciation: 'əreɪ',
        Synonym: '["list", "collection", "sequence"]',
        Antonym: null,
        Sentence: 'The array stored all the elements in a specific order.'
    },
    {
        Word: 'ASCII',
        LexicalCategory: 'Noun',
        Definition: 'American Standard Code for Information Interchange; a character encoding standard for electronic communication.',
        Pronunciation: 'æski',
        Synonym: null,
        Antonym: null,
        Sentence: 'ASCII uses 7-bit binary codes to represent characters.'
    },
    {
        Word: 'backup',
        LexicalCategory: 'Noun',
        Definition: 'a copy of data, files, or software that is stored separately from the original to protect against data loss.',
        Pronunciation: 'bækʌp',
        Synonym: 'copy, duplicate, reserve',
        Antonym: null,
        Sentence: 'Create a regular backup of important files to avoid data loss.'
    },
    {
        Word: 'bandwidth',
        LexicalCategory: 'Noun',
        Definition: 'the maximum amount of data that can be transmitted over a network or internet connection in a given amount of time.',
        Pronunciation: 'bændwɪtθ',
        Synonym: 'data transfer rate, capacity, speed',
        Antonym: null,
        Sentence: 'A high-bandwidth connection is essential for streaming high-definition videos.'
    },
    {
        Word: 'binary',
        LexicalCategory: 'Adjective',
        Definition: 'relating to or using a system of numerical notation that has a base of 2, typically 0 and 1, to represent data and perform operations.',
        Pronunciation: 'baɪnəri',
        Synonym: 'dual, two-fold, base-2',
        Antonym: null,
        Sentence: 'Computers use binary code to process and store data.'
    },
    {
        Word: 'bit',
        LexicalCategory: 'Noun',
        Definition: 'the smallest unit of data in a computer, representing a single binary digit (0 or 1).',
        Pronunciation: 'bɪt',
        Synonym: 'binary digit, unit, fragment',
        Antonym: null,
        Sentence: 'A byte consists of 8 bits of information.'
    },
    {
        Word: 'boolean',
        LexicalCategory: 'Adjective',
        Definition: 'relating to a system of logical thought developed by George Boole, used in computer programming to represent true or false values.',
        Pronunciation: 'buːliən',
        Synonym: null,
        Antonym: null,
        Sentence: 'Boolean logic is fundamental to programming.'
    },
    {
        Word: 'boot',
        LexicalCategory: 'Verb',
        Definition: 'to start up a computer system, loading the operating system and initializing the hardware.',
        Pronunciation: 'buːt',
        Synonym: 'start, launch, initialize',
        Antonym: null,
        Sentence: 'You may need to boot your computer to apply the system updates.'
    },
    {
        Word: 'browser',
        LexicalCategory: 'Noun',
        Definition: 'a software program that allows users to access and view websites and webpages on the internet.',
        Pronunciation: 'braʊzər',
        Synonym: 'web browser, internet browser',
        Antonym: null,
        Sentence: 'Firefox and Chrome are popular web browsers.'
    },
    {
        Word: 'bug',
        LexicalCategory: 'Noun',
        Definition: 'a flaw or defect in software or hardware that causes it to produce an incorrect or unexpected result.',
        Pronunciation: 'bʌɡ',
        Synonym: '["glitch", "defect", "error"]',
        Antonym: null,
        Sentence: 'The programmer fixed the bug in the code.'
    },
    {
        Word: 'byte',
        LexicalCategory: 'Noun',
        Definition: 'a unit of digital information that consists of eight bits, representing a single character in a computer.',
        Pronunciation: 'baɪt',
        Synonym: null,
        Antonym: null,
        Sentence: 'A kilobyte is equal to 1024 bytes.'
    },
    {
        Word: 'cache',
        LexicalCategory: 'Noun',
        Definition: 'a hardware or software component that stores data to serve future requests more quickly.',
        Pronunciation: 'kæʃ',
        Synonym: '["buffer", "memory", "store"]',
        Antonym: null,
        Sentence: 'The web browser stores images in the cache for faster loading.'
    },
    {
        Word: 'central processing unit',
        LexicalCategory: 'Noun',
        Definition: 'the primary component of a computer that performs most of the processing and calculations.',
        Pronunciation: 'sɛntrəl proʊsɛsɪŋ juːnɪt',
        Synonym: 'CPU, processor, mainframe',
        Antonym: null,
        Sentence: 'The CPU is often referred to as the brain of the computer.'
    },
    {
        Word: 'central',
        LexicalCategory: 'Adjective',
        Definition: 'relating to or situated at the center; serving as a main or primary part.',
        Pronunciation: 'sɛntrəl',
        Synonym: '["core", "main", "primary"]',
        Antonym: null,
        Sentence: 'The central processing unit (CPU) is the core component of a computer.'
    },
    {
        Word: 'cloud computing',
        LexicalCategory: 'Noun',
        Definition: 'the practice of using remote servers hosted on the internet to store, manage, and process data, rather than a local server or personal computer.',
        Pronunciation: 'klaʊd kəmˌpjuːtɪŋ',
        Synonym: 'cloud services, remote computing',
        Antonym: null,
        Sentence: 'Cloud computing offers scalable and flexible storage solutions.'
    },
    {
        Word: 'code',
        LexicalCategory: 'Noun',
        Definition: 'a system of symbols or letters used to represent instructions or data in a computer program.',
        Pronunciation: 'koʊd',
        Synonym: '["programming", "script", "source"]',
        Antonym: null,
        Sentence: 'The programmer wrote the code for the new feature.'
    },
    {
        Word: 'command',
        LexicalCategory: 'Noun',
        Definition: 'an instruction given to a computer or software to perform a specific task.',
        Pronunciation: 'kəmænd',
        Synonym: 'instruction, order, directive',
        Antonym: null,
        Sentence: 'Type the command in the terminal to execute the program.'
    },
    {
        Word: 'compiler',
        LexicalCategory: 'Noun',
        Definition: 'a software program that translates high-level programming code into machine code that a computer can execute.',
        Pronunciation: 'kəmpaɪlər',
        Synonym: 'translator, converter, code generator',
        Antonym: null,
        Sentence: 'The compiler optimizes the code for better performance.'
    },
    {
        Word: 'cookie',
        LexicalCategory: 'Noun',
        Definition: "a small piece of data stored on a user's computer by a website to track user activity and remember information.",
        Pronunciation: 'kʊki',
        Synonym: 'web cookie, browser cookie',
        Antonym: null,
        Sentence: 'Clearing cookies can improve privacy while browsing the internet.'
    },
    {
        Word: 'CPU',
        LexicalCategory: 'Noun',
        Definition: 'Central Processing Unit; the primary component of a computer that performs most of the processing.',
        Pronunciation: 'siːpiːjuː',
        Synonym: null,
        Antonym: null,
        Sentence: 'The CPU is responsible for executing instructions in a computer program.'
    },
    {
        Word: 'crash',
        LexicalCategory: 'Verb',
        Definition: 'to suddenly stop working or operating; experience a sudden failure of a computer system or program.',
        Pronunciation: 'kræʃ',
        Synonym: '["fail", "freeze", "shut down"]',
        Antonym: null,
        Sentence: 'The computer crashed due to a hardware failure.'
    },
    {
        Word: 'cursor',
        LexicalCategory: 'Noun',
        Definition: 'a graphical representation on the computer screen that indicates the position where text or commands will be entered.',
        Pronunciation: 'kɜrsər',
        Synonym: 'pointer, marker, indicator',
        Antonym: null,
        Sentence: 'Move the cursor to the desired location and click to begin typing.'
    },
    {
        Word: 'cyber',
        LexicalCategory: 'Adjective',
        Definition: 'relating to the culture of computers, information technology, and virtual reality.',
        Pronunciation: 'saɪbər',
        Synonym: null,
        Antonym: null,
        Sentence: 'The company experienced a cyber attack on its servers.'
    },
    {
        Word: 'cybersecurity',
        LexicalCategory: 'Noun',
        Definition: 'the practice of protecting computer systems, networks, and data from security breaches, attacks, and unauthorized access.',
        Pronunciation: 'saɪbərˌsɛkjʊrəti',
        Synonym: 'computer security, IT security',
        Antonym: null,
        Sentence: 'Strong cybersecurity measures are essential to prevent data breaches.'
    },
    {
        Word: 'data',
        LexicalCategory: 'Noun',
        Definition: 'facts and statistics collected together for reference or analysis.',
        Pronunciation: 'deɪtə',
        Synonym: '["information", "facts", "figures"]',
        Antonym: null,
        Sentence: 'The data provided valuable insights for the research.'
    },
    {
        Word: 'database',
        LexicalCategory: 'Noun',
        Definition: 'a structured set of data held in a computer, especially one that is accessible in various ways.',
        Pronunciation: 'deɪtəbeɪs',
        Synonym: '["data bank", "information repository", "record-keeping system"]',
        Antonym: null,
        Sentence: 'The database stores information about customers and products.'
    },
    {
        Word: 'debug',
        LexicalCategory: 'Verb',
        Definition: 'identify and remove errors or bugs from software or hardware.',
        Pronunciation: 'diːbʌɡ',
        Synonym: 'fix, troubleshoot, correct',
        Antonym: null,
        Sentence: 'The programmer needs to debug the code before deployment.'
    },
    {
        Word: 'default',
        LexicalCategory: 'Adjective',
        Definition: 'representing the pre-set or automatically selected option or setting in computer software or hardware.',
        Pronunciation: 'dɪfɔlt',
        Synonym: 'automatic, preselected, default setting',
        Antonym: null,
        Sentence: 'The device will use the default printer unless you specify another.'
    },
    {
        Word: 'desktop',
        LexicalCategory: 'Noun',
        Definition: 'the primary screen or background of a computer that displays icons, shortcuts, and files.',
        Pronunciation: 'dɛskˌtɒp',
        Synonym: 'home screen, main screen',
        Antonym: null,
        Sentence: 'Click on the icon to open the application on the desktop.'
    },
    {
        Word: 'device',
        LexicalCategory: 'Noun',
        Definition: 'a physical or virtual component or peripheral that is connected to a computer and performs specific functions.',
        Pronunciation: 'dɪvaɪs',
        Synonym: 'tool, instrument, apparatus',
        Antonym: null,
        Sentence: 'The printer is an essential device for printing documents.'
    },

    {
        Word: 'digital',
        LexicalCategory: 'Adjective',
        Definition: 'relating to or using signals or information represented by discrete values (usually 0 and 1) rather than by a continuously variable physical quantity.',
        Pronunciation: 'dɪdʒɪtl',
        Synonym: null,
        Antonym: null,
        Sentence: 'Digital signals are commonly used in modern electronics.'
    },
    {
        Word: 'disk',
        LexicalCategory: 'Noun',
        Definition: 'a flat, thin, and round storage medium used for storing and retrieving data in a computer.',
        Pronunciation: 'dɪsk',
        Synonym: 'storage medium, diskette',
        Antonym: null,
        Sentence: 'Insert the disk into the drive to access the files.'
    },
    {
        Word: 'DNS',
        LexicalCategory: 'Noun',
        Definition: 'Domain Name System; a hierarchical decentralized naming system for computers, services, or other resources connected to the internet.',
        Pronunciation: 'diːɛnɛs',
        Synonym: null,
        Antonym: null,
        Sentence: 'DNS translates domain names into IP addresses.'
    },
    {
        Word: 'domain',
        LexicalCategory: 'Noun',
        Definition: 'an area of territory owned or controlled by a particular ruler or government; in computing, a distinct subset of the internet with addresses sharing a common suffix or under the control of a particular organization.',
        Pronunciation: 'doʊmeɪn',
        Synonym: 'territory, realm, area',
        Antonym: null,
        Sentence: 'The website is registered under the domain "example.com".'
    },
    {
        Word: 'download',
        LexicalCategory: 'Verb',
        Definition: 'copy (data) from one computer system to another, typically over the internet.',
        Pronunciation: 'daʊnloʊd',
        Synonym: 'retrieve, transfer, fetch',
        Antonym: null,
        Sentence: 'I will download the software from the official website.'
    },
    {
        Word: 'driver',
        LexicalCategory: 'Noun',
        Definition: "a software program that allows a computer's operating system to communicate with and control hardware devices.",
        Pronunciation: 'draɪvər',
        Synonym: 'device driver, hardware driver',
        Antonym: null,
        Sentence: 'Install the latest driver for better hardware performance.'
    },
    {
        Word: 'encryption',
        LexicalCategory: 'Noun',
        Definition: 'the process of converting data or information into a code, especially to prevent unauthorized access.',
        Pronunciation: 'ɛnkrɪpʃən',
        Synonym: null,
        Antonym: null,
        Sentence: 'Sensitive data is protected using encryption techniques.'
    },
    {
        Word: 'error',
        LexicalCategory: 'Noun',
        Definition: 'a mistake or failure in the performance of a computer program or system.',
        Pronunciation: 'ɛrər',
        Synonym: 'mistake, fault, glitch',
        Antonym: null,
        Sentence: 'The program encountered an error during execution.'
    },
    {
        Word: 'executable',
        LexicalCategory: 'Noun',
        Definition: 'a file or program that can be run and executed by a computer.',
        Pronunciation: 'ɪɡzɛkjətəbl',
        Synonym: 'program, application, software',
        Antonym: null,
        Sentence: 'Double-click on the executable file to install the software.'
    },
    {
        Word: 'execute',
        LexicalCategory: 'Verb',
        Definition: 'carry out or put into effect (a plan, order, or course of action). In computing, to perform a specific task or command.',
        Pronunciation: 'ɛksɪˌkjut',
        Synonym: 'perform, implement, accomplish',
        Antonym: null,
        Sentence: 'The computer will execute the instructions provided by the user.'
    },
    {
        Word: 'file',
        LexicalCategory: 'Noun',
        Definition: 'a collection of data or information that has a name, stored in a computer storage system.',
        Pronunciation: 'faɪl',
        Synonym: 'document, record, data',
        Antonym: null,
        Sentence: 'I saved the report as a PDF file.'
    },
    {
        Word: 'firewall',
        LexicalCategory: 'Noun',
        Definition: 'a security system that acts as a barrier between a trusted network and an untrusted network, controlling incoming and outgoing network traffic.',
        Pronunciation: 'faɪərˌwɔl',
        Synonym: null,
        Antonym: null,
        Sentence: 'The firewall protects the network from unauthorized access.'
    },
    {
        Word: 'firmware',
        LexicalCategory: 'Noun',
        Definition: 'software that is embedded in hardware devices and provides low-level control for the device.',
        Pronunciation: 'fɜrmˌwɛr',
        Synonym: null,
        Antonym: null,
        Sentence: 'The firmware update improved the performance of the router.'
    },
    {
        Word: 'flash drive',
        LexicalCategory: 'Noun',
        Definition: 'a small, portable storage device that uses flash memory to store and transfer data between computers and other devices.',
        Pronunciation: 'flæʃ draɪv',
        Synonym: 'USB drive, thumb drive',
        Antonym: null,
        Sentence: 'Save the presentation on the flash drive for easy sharing.'
    },
    {
        Word: 'flash',
        LexicalCategory: 'Noun',
        Definition: 'a type of non-volatile computer storage that can be electrically erased and reprogrammed.',
        Pronunciation: 'flæʃ',
        Synonym: 'memory, storage, drive',
        Antonym: null,
        Sentence: 'The USB flash drive stores data for easy transport.'
    },
    {
        Word: 'floppy',
        LexicalCategory: 'Adjective',
        Definition: 'relating to a flexible magnetic disk or disk drive.',
        Pronunciation: 'flɒpi',
        Synonym: null,
        Antonym: null,
        Sentence: 'Floppy disks were commonly used for data storage in the past.'
    },
    {
        Word: 'folder',
        LexicalCategory: 'Noun',
        Definition: 'a virtual directory or container used to organize and store files and other folders.',
        Pronunciation: 'foʊldər',
        Synonym: 'directory, directory folder',
        Antonym: null,
        Sentence: 'Create a new folder to organize your documents.'
    },
    {
        Word: 'font',
        LexicalCategory: 'Noun',
        Definition: 'a set of characters with a specific size, style, and design that is used to display text on a computer screen or in printed documents.',
        Pronunciation: 'fɒnt',
        Synonym: 'typeface, character set',
        Antonym: null,
        Sentence: 'Choose a stylish font for the heading of your document.'
    },
    {
        Word: 'format',
        LexicalCategory: 'Verb',
        Definition: 'to prepare a data storage medium, such as a disk or drive, for reading and writing data in a specific way.',
        Pronunciation: 'fɔrmæt',
        Synonym: 'configure, prepare, initialize',
        Antonym: null,
        Sentence: 'The computer will prompt you to format the USB drive before use.'
    },
    {
        Word: 'framework',
        LexicalCategory: 'Noun',
        Definition: 'a basic structure underlying a system, concept, or text; in computing, a pre-built structure or set of tools used to develop software applications.',
        Pronunciation: 'freɪmˌwɜrk',
        Synonym: 'structure, skeleton, foundation',
        Antonym: null,
        Sentence: 'The framework provides developers with a foundation to build upon.'
    },
    {
        Word: 'function',
        LexicalCategory: 'Noun',
        Definition: 'a self-contained block of code within a program that performs a specific task and can be called and executed as needed.',
        Pronunciation: 'fʌŋkʃən',
        Synonym: 'procedure, method, subroutine',
        Antonym: null,
        Sentence: 'The function calculates the total sum of the given numbers.'
    },
    {
        Word: 'gigabyte',
        LexicalCategory: 'Noun',
        Definition: 'a unit of digital information storage that is approximately equal to one billion bytes.',
        Pronunciation: 'ɡɪɡəˌbaɪt',
        Synonym: 'GB',
        Antonym: null,
        Sentence: 'The video file size is around 2 gigabytes.'
    },
    {
        Word: 'graphics',
        LexicalCategory: 'Noun',
        Definition: 'visual images or designs displayed on a computer screen or produced by computer processing.',
        Pronunciation: 'ɡræfɪks',
        Synonym: 'visuals, images, illustrations',
        Antonym: null,
        Sentence: 'The game has impressive graphics and realistic animations.'
    },
    {
        Word: 'GUI',
        LexicalCategory: 'Noun',
        Definition: 'Graphical User Interface; a type of user interface that allows users to interact with electronic devices through graphical elements such as icons, buttons, and windows.',
        Pronunciation: 'ɡuːi',
        Synonym: null,
        Antonym: null,
        Sentence: 'The GUI makes it easier for users to interact with the computer.'
    },
    {
        Word: 'hacker',
        LexicalCategory: 'Noun',
        Definition: 'a person who uses their computer skills to gain unauthorized access to data in a computer system.',
        Pronunciation: 'hækər',
        Synonym: 'cybercriminal, intruder, cracker',
        Antonym: null,
        Sentence: "The company's website was hacked by an unauthorized individual."
    },
    {
        Word: 'hard drive',
        LexicalCategory: 'Noun',
        Definition: 'the primary storage device in a computer that stores data on a magnetic disk for long-term use.',
        Pronunciation: 'hɑrd draɪv',
        Synonym: 'HDD, disk drive',
        Antonym: null,
        Sentence: 'Upgrade to a larger hard drive for additional storage space.'
    },
    {
        Word: 'hardware',
        LexicalCategory: 'Noun',
        Definition: 'the physical components of a computer system, such as the central processing unit, monitor, keyboard, and motherboard.',
        Pronunciation: 'hɑrdwɛr',
        Synonym: 'devices, equipment, machinery',
        Antonym: null,
        Sentence: 'The hardware components are essential for the computer to function.'
    },
    {
        Word: 'homepage',
        LexicalCategory: 'Noun',
        Definition: 'the main or initial web page of a website that serves as the starting point for navigation.',
        Pronunciation: 'hoʊmˌpeɪdʒ',
        Synonym: 'landing page, start page',
        Antonym: null,
        Sentence: "Set the company's website as your browser's homepage."
    },
    {
        Word: 'HTML',
        LexicalCategory: 'Noun',
        Definition: 'Hypertext Markup Language; the standard markup language used to create and design web pages and applications.',
        Pronunciation: 'eɪtʃˌtiːˌɛmɛl',
        Synonym: null,
        Antonym: null,
        Sentence: 'HTML provides the structure for web pages.'
    },
    {
        Word: 'HTTP',
        LexicalCategory: 'Noun',
        Definition: 'Hypertext Transfer Protocol; an application protocol for distributed, collaborative, and hypermedia information systems.',
        Pronunciation: "eɪtʃˌtiːˌtiːp",
        Synonym: null,
        Antonym: null,
        Sentence: 'HTTP is the foundation of data communication on the internet.'
    },
    {
        Word: 'HTTPS',
        LexicalCategory: 'Noun',
        Definition: 'Hypertext Transfer Protocol Secure; an extension of HTTP used for secure communication over a computer network.',
        Pronunciation: 'eɪtʃˌtiːˌtiːpiːɛs',
        Synonym: null,
        Antonym: null,
        Sentence: 'We use HTTPS to ensure secure communication with our website.'
    },
    {
        Word: 'hyperlink',
        LexicalCategory: 'Noun',
        Definition: 'a highlighted word, phrase, or image in a digital document that, when clicked, links to another location or resource.',
        Pronunciation: 'haɪpərˌlɪŋk',
        Synonym: 'link, URL, web link',
        Antonym: null,
        Sentence: 'Click on the hyperlink to visit the referenced website.'
    },
    {
        Word: 'icon',
        LexicalCategory: 'Noun',
        Definition: 'a small graphical representation or symbol that represents a file, program, function, or action.',
        Pronunciation: 'aɪkɒn',
        Synonym: 'symbol, image, representation',
        Antonym: null,
        Sentence: 'Click on the icon to open the application.'
    },
    {
        Word: 'input',
        LexicalCategory: 'Noun',
        Definition: 'data or information that is entered into a computer or system.',
        Pronunciation: 'ɪnˌpʊt',
        Synonym: 'data, information, input data',
        Antonym: null,
        Sentence: 'The user provided input through the keyboard and mouse.'
    },
    {
        Word: 'integer',
        LexicalCategory: 'Noun',
        Definition: 'a whole number; a number with no fractional or decimal part.',
        Pronunciation: 'ɪntɪdʒər',
        Synonym: null,
        Antonym: null,
        Sentence: 'The variable can store an integer value.'
    },
    {
        Word: 'interface',
        LexicalCategory: 'Noun',
        Definition: 'a point of interaction between hardware or software components, allowing them to communicate and exchange data.',
        Pronunciation: 'ɪntərfeɪs',
        Synonym: 'connection, link, interaction',
        Antonym: null,
        Sentence: 'The software provides a user-friendly interface.'
    },
    {
        Word: 'internet',
        LexicalCategory: 'Noun',
        Definition: 'a global network of interconnected computers and servers that allows for the sharing of information and resources.',
        Pronunciation: 'ɪntərnɛt',
        Synonym: 'web, net, cyberspace',
        Antonym: null,
        Sentence: 'The internet has revolutionized communication and access to knowledge.'
    },
    {
        Word: 'IP address',
        LexicalCategory: 'Noun',
        Definition: 'Internet Protocol address; a numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication.',
        Pronunciation: 'aɪpi ædˌrɛs',
        Synonym: null,
        Antonym: null,
        Sentence: 'The router assigns a unique IP address to each connected device.'
    },
    {
        Word: 'ISP',
        LexicalCategory: 'Noun',
        Definition: 'Internet Service Provider; a company that provides customers with access to the internet.',
        Pronunciation: 'aɪɛspiː',
        Synonym: null,
        Antonym: null,
        Sentence: 'The ISP offers high-speed internet plans.'
    },
    {
        Word: 'Java',
        LexicalCategory: 'Noun',
        Definition: 'a high-level, class-based, object-oriented programming language used for developing applications and platforms.',
        Pronunciation: 'ʤɑːvə',
        Synonym: null,
        Antonym: null,
        Sentence: 'Java is widely used for web and mobile app development.'
    },
    {
        Word: 'JavaScript',
        LexicalCategory: 'Noun',
        Definition: 'a high-level, interpreted programming language used to create interactive effects within web browsers.',
        Pronunciation: 'ʤɑːvəˌskrɪpt',
        Synonym: null,
        Antonym: null,
        Sentence: 'JavaScript is used to add dynamic features to websites.'
    },
    {
        Word: 'kernel',
        LexicalCategory: 'Noun',
        Definition: 'the central part of an operating system that manages core functions and controls the communication between hardware and software components.',
        Pronunciation: 'kɜːrnəl',
        Synonym: null,
        Antonym: null,
        Sentence: 'The kernel is responsible for memory management and process scheduling.'
    },
    {
        Word: 'keyboard',
        LexicalCategory: 'Noun',
        Definition: 'a common input device consisting of a set of keys for typing and entering data into a computer or device.',
        Pronunciation: 'kiˌbɔrd',
        Synonym: 'typing device, input keyboard',
        Antonym: null,
        Sentence: 'The keyboard shortcuts can improve your productivity.'
    },
    {
        Word: 'keylogger',
        LexicalCategory: 'Noun',
        Definition: "a malicious software program designed to record and monitor keystrokes on a computer without the user's knowledge.",
        Pronunciation: 'kiːˌlɒgər',
        Synonym: 'keystroke logger, keyboard capture',
        Antonym: null,
        Sentence: 'Install an anti-keylogger to protect against identity theft.'
    },
    {
        Word: 'keyword',
        LexicalCategory: 'Noun',
        Definition: 'a word or phrase that serves as a key in a code or index or as a reference in a search.',
        Pronunciation: 'kiːwɜrd',
        Synonym: 'key, term, code word',
        Antonym: null,
        Sentence: 'Use relevant keywords to improve your search results.'
    },
    {
        Word: 'LAN',
        LexicalCategory: 'Noun',
        Definition: 'Local Area Network; a network of computers and other devices connected within a limited area, such as a home, office, or campus.',
        Pronunciation: 'læn',
        Synonym: null,
        Antonym: null,
        Sentence: 'The LAN allows devices to communicate with each other locally.'
    },
    {
        Word: 'laptop',
        LexicalCategory: 'Noun',
        Definition: "a portable computer that is small and light enough to be used on one's lap.",
        Pronunciation: 'læptɒp',
        Synonym: 'notebook, portable computer, laptop computer',
        Antonym: null,
        Sentence: 'I carry my laptop with me while traveling.'
    },
    {
        Word: 'library',
        LexicalCategory: 'Noun',
        Definition: 'a collection of pre-written code and routines that can be used by software developers to perform common tasks.',
        Pronunciation: 'laɪbrəri',
        Synonym: 'collection, repository, archive',
        Antonym: null,
        Sentence: 'The software library offers a wide range of functions for developers.'
    },
    {
        Word: 'link',
        LexicalCategory: 'Noun',
        Definition: 'a connection between one document or web page and another, allowing users to navigate between them.',
        Pronunciation: 'lɪŋk',
        Synonym: 'connection, association, relation',
        Antonym: null,
        Sentence: 'The link directs users to a related article.'
    },
    {
        Word: 'Linux',
        LexicalCategory: 'Noun',
        Definition: 'an open-source operating system based on the Linux kernel.',
        Pronunciation: 'lɪnʊks',
        Synonym: null,
        Antonym: null,
        Sentence: 'Linux is widely used in servers and embedded systems.'
    },
    {
        Word: 'malware',
        LexicalCategory: 'Noun',
        Definition: 'malicious software designed to disrupt, damage, or gain unauthorized access to computer systems.',
        Pronunciation: 'mælˌwɛr',
        Synonym: 'virus, trojan, spyware',
        Antonym: null,
        Sentence: 'The antivirus detected and removed the malware from the system.'
    },
    {
        Word: 'memory',
        LexicalCategory: 'Noun',
        Definition: 'the ability of a computer to store and retrieve data.',
        Pronunciation: 'mɛməri',
        Synonym: 'storage, recollection, retention',
        Antonym: null,
        Sentence: "The computer's memory determines its processing capabilities."
    },
    {
        Word: 'menu',
        LexicalCategory: 'Noun',
        Definition: 'a list of options or commands presented to the user in a software application or operating system.',
        Pronunciation: 'mɛnjuː',
        Synonym: 'list, selection, choices',
        Antonym: null,
        Sentence: 'You can find the settings in the "Options" menu.'
    },
    {
        Word: 'microprocessor',
        LexicalCategory: 'Noun',
        Definition: 'a small, integrated circuit that contains the central processing unit of a computer.',
        Pronunciation: 'ˌmaɪkroʊprɑsɛsər',
        Synonym: null,
        Antonym: null,
        Sentence: 'The microprocessor is the brain of the computer.'
    },
    {
        Word: 'middleware',
        LexicalCategory: 'Noun',
        Definition: 'software that acts as a bridge or intermediary between different applications or systems, facilitating communication.',
        Pronunciation: 'mɪdəlˌwɛr',
        Synonym: 'software, interface, mediation',
        Antonym: null,
        Sentence: 'Middleware enables data exchange between two unrelated systems.'
    },
    {
        Word: 'modem',
        LexicalCategory: 'Noun',
        Definition: 'a device that modulates and demodulates signals to allow digital devices to communicate over analog communication channels.',
        Pronunciation: 'moʊdəm',
        Synonym: null,
        Antonym: null,
        Sentence: 'The modem connects the computer to the internet via a telephone line.'
    },
    {
        Word: 'monitor',
        LexicalCategory: 'Noun',
        Definition: 'a visual display unit that presents information, images, and video generated by a computer.',
        Pronunciation: 'mɒnɪtər',
        Synonym: 'screen, display, visual display unit',
        Antonym: null,
        Sentence: 'Connect the monitor to the computer using the appropriate cable.'
    },
    {
        Word: 'motherboard',
        LexicalCategory: 'Noun',
        Definition: 'the main circuit board of a computer, containing the central processing unit, memory, and other components.',
        Pronunciation: 'mʌðərˌbɔrd',
        Synonym: null,
        Antonym: null,
        Sentence: 'The motherboard connects all the components in a computer.'
    },
    {
        Word: 'mouse',
        LexicalCategory: 'Noun',
        Definition: 'a common input device that allows the user to interact with a computer by moving the cursor on the screen.',
        Pronunciation: 'maʊs',
        Synonym: 'pointing device',
        Antonym: null,
        Sentence: 'Use the mouse to click and drag the files to a different folder.'
    },
    {
        Word: 'network',
        LexicalCategory: 'Noun',
        Definition: 'a collection of interconnected computers and devices that can communicate and share resources with each other.',
        Pronunciation: 'nɛtˌwɜrk',
        Synonym: 'computer network, LAN, WAN',
        Antonym: null,
        Sentence: "The company's network allows employees to access shared files."
    },
    {
        Word: 'node',
        LexicalCategory: 'Noun',
        Definition: 'a point of intersection or connection within a network.',
        Pronunciation: 'noʊd',
        Synonym: 'junction, connection point, intersection',
        Antonym: null,
        Sentence: 'Each computer acts as a node in the network.'
    },
    {
        Word: 'offline',
        LexicalCategory: 'Adjective',
        Definition: 'not connected to or directly accessing the internet or a network.',
        Pronunciation: 'ɔːflaɪn',
        Synonym: 'disconnected, unplugged, not online',
        Antonym: null,
        Sentence: 'You can read the downloaded content offline.'
    },
    {
        Word: 'online',
        LexicalCategory: 'Adjective',
        Definition: 'connected to or directly accessing the internet or a network.',
        Pronunciation: 'ɒnlaɪn',
        Synonym: 'connected, online, internet-connected',
        Antonym: null,
        Sentence: 'The website is available online.'
    },
    {
        Word: 'open-source',
        LexicalCategory: 'Adjective',
        Definition: 'denoting software that is distributed with its source code and can be freely used, modified, and shared by anyone.',
        Pronunciation: 'ˌoʊpən sɔrs',
        Synonym: null,
        Antonym: null,
        Sentence: 'Linux is an example of open-source software.'
    },
    {
        Word: 'operating system',
        LexicalCategory: 'Noun',
        Definition: 'software that manages computer hardware and provides services and interfaces for computer programs to run.',
        Pronunciation: 'ɒpəˌreɪtɪŋ sɪstəm',
        Synonym: 'OS, software',
        Antonym: null,
        Sentence: 'Windows and macOS are popular operating systems.'
    },
    {
        Word: 'output',
        LexicalCategory: 'Noun',
        Definition: 'data, information, or results produced or delivered by a computer or software system.',
        Pronunciation: 'aʊtpʊt',
        Synonym: 'result, outcome, product',
        Antonym: null,
        Sentence: 'The program displays the output on the screen.'
    },
    {
        Word: 'password',
        LexicalCategory: 'Noun',
        Definition: 'a secret combination of characters used to verify the identity of a user and grant access to a computer system.',
        Pronunciation: 'pæsˌwɜrd',
        Synonym: 'passcode, security code',
        Antonym: null,
        Sentence: 'Protect your account by creating a strong password.'
    },
    {
        Word: 'path',
        LexicalCategory: 'Noun',
        Definition: 'the route or location of a file or folder in a file system.',
        Pronunciation: 'pæθ',
        Synonym: 'route, directory, way',
        Antonym: null,
        Sentence: 'The file is stored in the specified path.'
    },
    {
        Word: 'PDF',
        LexicalCategory: 'Noun',
        Definition: 'Portable Document Format; a file format used to present documents, including text formatting and images, in a manner independent of software or hardware.',
        Pronunciation: 'piː diː ɛf',
        Synonym: 'document format',
        Antonym: null,
        Sentence: 'The document is saved in PDF for easy sharing and printing.'
    },
    {
        Word: 'peripheral',
        LexicalCategory: 'Noun',
        Definition: 'an auxiliary device or hardware component that connects to a computer to expand its capabilities.',
        Pronunciation: 'pərɪfərəl',
        Synonym: 'device, external component',
        Antonym: null,
        Sentence: 'The printer is a common peripheral used with computers.'
    },
    {
        Word: 'phishing',
        LexicalCategory: 'Noun',
        Definition: 'the fraudulent practice of sending emails or messages that appear to be from reputable sources to deceive individuals into revealing sensitive information, such as passwords and financial details.',
        Pronunciation: 'fɪʃɪŋ',
        Synonym: 'scam, fraud, deception',
        Antonym: null,
        Sentence: 'Be cautious of phishing attempts and do not click on suspicious links.'
    },
    {
        Word: 'pixel',
        LexicalCategory: 'Noun',
        Definition: 'the smallest unit of a digital image or display that can be controlled and manipulated by a computer.',
        Pronunciation: 'pɪksəl',
        Synonym: 'dot, point, picture element',
        Antonym: null,
        Sentence: 'The image is made up of millions of pixels.'
    },
    {
        Word: 'platform',
        LexicalCategory: 'Noun',
        Definition: 'the hardware and software on which applications run; a specific computer system or software environment.',
        Pronunciation: 'plætfɔːrm',
        Synonym: 'system, environment, framework',
        Antonym: null,
        Sentence: 'The game is available on multiple platforms.'
    },
    {
        Word: 'plugin',
        LexicalCategory: 'Noun',
        Definition: 'a software component that adds a specific feature or functionality to an existing computer program or web browser.',
        Pronunciation: 'plʌɡɪn',
        Synonym: 'add-on, extension, module',
        Antonym: null,
        Sentence: 'You can install the plugin to enhance the browser.'
    },
    {
        Word: 'port',
        LexicalCategory: 'Noun',
        Definition: 'a socket or connection point used to connect external devices to a computer.',
        Pronunciation: 'pɔːrt',
        Synonym: 'socket, connector, interface',
        Antonym: null,
        Sentence: 'The laptop has several ports for connecting peripherals.'
    },
    {
        Word: 'portal',
        LexicalCategory: 'Noun',
        Definition: 'a website or web page that provides links and access to various services and resources.',
        Pronunciation: 'pɔːrtl',
        Synonym: 'gateway, entrance, access point',
        Antonym: null,
        Sentence: 'The portal serves as a central hub for information and services.'
    },
    {
        Word: 'privacy',
        LexicalCategory: 'Noun',
        Definition: 'the state of being free from public attention or unauthorized access to personal information.',
        Pronunciation: 'prɪvəsi',
        Synonym: 'confidentiality, secrecy, solitude',
        Antonym: null,
        Sentence: 'Protect your privacy by using strong passwords and secure connections.'
    },
    {
        Word: 'processor',
        LexicalCategory: 'Noun',
        Definition: 'a hardware component that interprets and executes instructions in a computer program.',
        Pronunciation: 'prɒsɛsər',
        Synonym: 'CPU, central processing unit, chip',
        Antonym: null,
        Sentence: 'The processor is responsible for performing calculations and tasks.'
    },
    {
        Word: 'programming',
        LexicalCategory: 'Noun',
        Definition: 'the process of writing and creating computer programs using programming languages.',
        Pronunciation: 'proʊˌɡræmɪŋ',
        Synonym: 'coding, software development, computer programming',
        Antonym: null,
        Sentence: 'She has a strong background in programming and software engineering.'
    },
    {
        Word: 'protocol',
        LexicalCategory: 'Noun',
        Definition: 'a set of rules and conventions for transmitting data between devices in a computer network.',
        Pronunciation: 'proʊtəˌkɒl',
        Synonym: 'rules, guidelines, procedures',
        Antonym: null,
        Sentence: 'TCP/IP is a widely used networking protocol on the internet.'
    },
    {
        Word: 'query',
        LexicalCategory: 'Noun',
        Definition: 'a request for information or data from a database or search engine, typically written in a specific query language.',
        Pronunciation: 'kwɪri',
        Synonym: 'inquiry, search, request',
        Antonym: null,
        Sentence: 'Enter the query in the search box to find relevant results.'
    },
    {
        Word: 'RAM',
        LexicalCategory: 'Noun',
        Definition: 'Random Access Memory; a type of computer memory that allows data to be read and written in almost the same amount of time, regardless of the order of accessing the data.',
        Pronunciation: 'ræm',
        Synonym: null,
        Antonym: null,
        Sentence: 'The more RAM your computer has, the better its performance will be.'
    },
    {
        Word: 'ransomware',
        LexicalCategory: 'Noun',
        Definition: "a type of malware that encrypts a victim's files and demands a ransom, usually in cryptocurrency, to restore access to the files.",
        Pronunciation: 'rænsəmˌwɛr',
        Synonym: 'malicious software, cyber extortion, crypto-ransomware',
        Antonym: null,
        Sentence: 'Protect your data from ransomware attacks by regularly backing it up.'
    },
        {
            Word: 'reboot',
            LexicalCategory: 'Verb',
            Definition: 'to restart a computer system, often to resolve technical issues or apply updates.',
            Pronunciation: 'riːbuːt',
            Synonym: 'restart, reinitialize, refresh',
            Antonym: null,
            Sentence: 'If the system freezes, try to reboot the computer.'
        },
        {
            Word: 'resolution',
            LexicalCategory: 'Noun',
            Definition: 'the clarity or sharpness of an image or display, usually measured in pixels per inch (PPI) or dots per inch (DPI). In computing, it also refers to the number of pixels displayed on a screen.',
            Pronunciation: 'ˌrɛzəluːʃən',
            Synonym: 'clarity, sharpness, detail',
            Antonym: null,
            Sentence: 'The monitor has a high-resolution display.'
        },
        {
            Word: 'router',
            LexicalCategory: 'Noun',
            Definition: 'a networking device that forwards data packets between computer networks, often serving as a central hub for internet connectivity in homes and businesses.',
            Pronunciation: 'ruːtər',
            Synonym: null,
            Antonym: null,
            Sentence: 'The router allows multiple devices to connect to the internet.'
        },
        {
            Word: 'runtime',
            LexicalCategory: 'Noun',
            Definition: 'the period during which a program is executing or running.',
            Pronunciation: 'rʌntaɪm',
            Synonym: null,
            Antonym: null,
            Sentence: 'The runtime of the program depends on various factors.'
        },
        {
            Word: 'sandbox',
            LexicalCategory: 'Noun',
            Definition: 'a testing environment that isolates untested or untrusted code and programs from the rest of the system.',
            Pronunciation: 'sændˌbɒks',
            Synonym: 'secure environment, controlled space, isolated testing area',
            Antonym: null,
            Sentence: 'The software runs in a sandbox to prevent potential harm.'
        },
        {
            Word: 'satellite',
            LexicalCategory: 'Noun',
            Definition: 'a device or object that orbits around a larger object, such as a natural satellite orbiting a planet or a human-made satellite orbiting the Earth.',
            Pronunciation: 'sætəˌlaɪt',
            Synonym: 'orbiter, spacecraft, celestial body',
            Antonym: null,
            Sentence: 'The satellite provides communication and navigation services.'
        },
        {
            Word: 'scan',
            LexicalCategory: 'Verb',
            Definition: 'to use a scanner to convert physical documents or images into digital format for storage or processing on a computer.',
            Pronunciation: 'skæn',
            Synonym: 'digitize, convert, image',
            Antonym: null,
            Sentence: 'Scan the document and save it as a PDF on your computer.'
        },
        {
            Word: 'scanner',
            LexicalCategory: 'Noun',
            Definition: 'a device that captures images or documents and converts them into a digital format that can be stored and processed on a computer.',
            Pronunciation: 'skænər',
            Synonym: null,
            Antonym: null,
            Sentence: 'I scanned the document and saved it as a PDF.'
        },
        {
            Word: 'screen',
            LexicalCategory: 'Noun',
            Definition: 'the flat surface of a computer or electronic device on which images and data are displayed.',
            Pronunciation: 'skriːn',
            Synonym: 'display, monitor, screen monitor',
            Antonym: null,
            Sentence: 'The movie played on the big screen.'
        },
        {
            Word: 'script',
            LexicalCategory: 'Noun',
            Definition: 'a set of instructions or commands written in a programming language, often used to automate tasks or processes.',
            Pronunciation: 'skrɪpt',
            Synonym: 'code, program, sequence of instructions',
            Antonym: null,
            Sentence: 'The script automates the data backup process.'
        },
        {
            Word: 'scroll',
            LexicalCategory: 'Verb',
            Definition: 'to move text or images up, down, or across a computer screen to view different parts of the content.',
            Pronunciation: 'skroʊl',
            Synonym: 'slide, move, browse',
            Antonym: null,
            Sentence: 'You can scroll through the document using the mouse wheel.'
        },
        {
            Word: 'search engine',
            LexicalCategory: 'Noun',
            Definition: 'a web-based tool that allows users to search for information on the internet using keywords or phrases.',
            Pronunciation: 'sɜːrtʃ ɛndʒɪn',
            Synonym: 'web search tool, search portal, information retrieval system',
            Antonym: null,
            Sentence: 'Google is a popular search engine.'
        },
        {
            Word: 'security',
            LexicalCategory: 'Noun',
            Definition: 'measures taken to protect computer systems, networks, and data from unauthorized access, attacks, and damage.',
            Pronunciation: 'sɪkjʊrəti',
            Synonym: 'protection, safety, defense',
            Antonym: null,
            Sentence: 'Investing in cybersecurity is essential to enhance security.'
        },
        {
            Word: 'server',
            LexicalCategory: 'Noun',
            Definition: 'a computer or software system that provides services or resources to other computers, known as clients, over a network.',
            Pronunciation: 'sɜːrvər',
            Synonym: null,
            Antonym: null,
            Sentence: 'The server hosts the website and delivers web pages to users.'
        },
        {
            Word: 'software',
            LexicalCategory: 'Noun',
            Definition: 'the programs and operating information used by a computer, including applications and the operating system.',
            Pronunciation: 'sɒftwɛr',
            Synonym: 'program, application, code',
            Antonym: null,
            Sentence: 'Install the necessary software to run the application.'
        },
        {
            Word: 'spam',
            LexicalCategory: 'Noun',
            Definition: 'unsolicited and irrelevant or inappropriate messages sent over the internet, typically for advertising or phishing purposes.',
            Pronunciation: 'spæm',
            Synonym: 'junk email, unsolicited messages',
            Antonym: null,
            Sentence: 'Mark the email as spam to prevent similar messages in the future.'
        },
        {
            Word: 'spreadsheet',
            LexicalCategory: 'Noun',
            Definition: 'a digital document or file that organizes data into rows and columns for calculation, analysis, and visualization.',
            Pronunciation: 'sprɛdˌʃit',
            Synonym: 'data sheet, worksheet',
            Antonym: null,
            Sentence: 'Use the spreadsheet to track expenses and income.'
        },
        {
            Word: 'spyware',
            LexicalCategory: 'Noun',
            Definition: "malicious software that secretly gathers information about a person or organization and sends it to a third party without the user's consent.",
            Pronunciation: 'spaɪwɛr',
            Synonym: 'tracking software, surveillance software, covert software',
            Antonym: null,
            Sentence: 'Make sure to install an antivirus program to protect against spyware.'
        },
        {
            Word: 'SQL',
            LexicalCategory: 'Noun',
            Definition: 'Structured Query Language; a programming language used to manage and manipulate data in relational databases.',
            Pronunciation: 'ɛskjuːˌɛl',
            Synonym: 'database language, query language',
            Antonym: null,
            Sentence: 'Write SQL queries to retrieve and update data in the database.'
        },
        {
            Word: 'SSD',
            LexicalCategory: 'Noun',
            Definition: 'Solid State Drive; a storage device that uses integrated circuit assemblies to store data persistently, often faster and more reliable than traditional hard disk drives.',
            Pronunciation: 'ɛs ɛs diː',
            Synonym: 'solid-state drive',
            Antonym: null,
            Sentence: 'Upgrading to an SSD can significantly improve system performance.'
        },
        {
            Word: 'storage',
            LexicalCategory: 'Noun',
            Definition: 'the retention of data, programs, and information on a computer or other electronic device for future use.',
            Pronunciation: 'stɔːrɪdʒ',
            Synonym: 'retention, archive, storing',
            Antonym: null,
            Sentence: 'The external hard drive offers additional storage space.'
        },
        {
            Word: 'sync',
            LexicalCategory: 'Verb',
            Definition: 'to synchronize or match the data on one device or software application with another to ensure they have the same version of information.',
            Pronunciation: 'sɪŋk',
            Synonym: 'synchronize, harmonize, coordinate',
            Antonym: null,
            Sentence: 'Make sure to sync your data to the cloud regularly.'
        },
        {
            Word: 'syntax',
            LexicalCategory: 'Noun',
            Definition: 'the set of rules that govern the structure of sentences in a programming language or formal language.',
            Pronunciation: 'sɪntæks',
            Synonym: null,
            Antonym: null,
            Sentence: 'Proper syntax is essential for error-free code.'
        },
        {
            Word: 'system',
            LexicalCategory: 'Noun',
            Definition: 'a group of interconnected components and software that work together to perform specific functions or tasks on a computer.',
            Pronunciation: 'sɪstəm',
            Synonym: 'software system, computer system',
            Antonym: null,
            Sentence: 'The operating system is a critical part of the computer system.'
        },
        {
            Word: 'table',
            LexicalCategory: 'Noun',
            Definition: 'a structured collection of data arranged in rows and columns, typically used in a database.',
            Pronunciation: 'teɪbl',
            Synonym: 'database table, data chart',
            Antonym: null,
            Sentence: 'You can sort and filter data in the table based on specific criteria.'
        },
        {
            Word: 'template',
            LexicalCategory: 'Noun',
            Definition: 'a pre-designed format or layout that serves as a starting point for creating documents or webpages.',
            Pronunciation: 'tɛmpleɪt',
            Synonym: 'format, design, layout',
            Antonym: null,
            Sentence: 'Use the resume template to create a professional CV.'
        },
        {
            Word: 'terabyte',
            LexicalCategory: 'Noun',
            Definition: 'a unit of digital information storage that is approximately equal to one trillion bytes.',
            Pronunciation: 'tɛrəˌbaɪt',
            Synonym: 'TB',
            Antonym: null,
            Sentence: 'The external hard drive has a storage capacity of 2 terabytes.'
        },
        {
            Word: 'text editor',
            LexicalCategory: 'Noun',
            Definition: 'a software application used for creating, editing, and manipulating plain text files.',
            Pronunciation: 'tɛkst ɛdɪtər',
            Synonym: 'word processor, text processor, notepad',
            Antonym: null,
            Sentence: 'I prefer using a simple text editor for coding.'
        },
        {
            Word: 'token',
            LexicalCategory: 'Noun',
            Definition: 'a digital security identifier issued by a computer system or service to authenticate a user.',
            Pronunciation: 'toʊkən',
            Synonym: 'password, access code, security key',
            Antonym: null,
            Sentence: 'You will need to enter the token for two-factor authentication.'
        },
        {
            Word: 'trojan',
            LexicalCategory: 'Noun',
            Definition: 'a type of malicious software that disguises itself as legitimate software to gain unauthorized access to a computer system.',
            Pronunciation: 'troʊdʒən',
            Synonym: 'malware, virus, spyware',
            Antonym: null,
            Sentence: 'Be cautious of downloading files from untrusted sources to avoid trojan infections.'
        },
        {
            Word: 'USB',
            LexicalCategory: 'Noun',
            Definition: 'Universal Serial Bus; a standard interface for connecting devices to a computer, allowing data transfer and power supply.',
            Pronunciation: 'juːɛsbiː',
            Synonym: 'universal serial bus',
            Antonym: null,
            Sentence: 'Insert the USB drive into the port to access the files.'
        },
        {
            Word: 'username',
            LexicalCategory: 'Noun',
            Definition: 'a unique name or identifier used to access and log in to a computer system, website, or online service.',
            Pronunciation: 'juːzərˌneɪm',
            Synonym: 'user ID, login name',
            Antonym: null,
            Sentence: 'Choose a username that is easy to remember and secure.'
        },
        {
            Word: 'validation',
            LexicalCategory: 'Noun',
            Definition: 'the process of checking and verifying data or information to ensure accuracy, integrity, and compliance with certain standards or rules.',
            Pronunciation: 'ˌvælɪdeɪʃən',
            Synonym: 'verification, confirmation',
            Antonym: null,
            Sentence: 'The system performs data validation to prevent errors.'
        },
        {
            Word: 'variable',
            LexicalCategory: 'Noun',
            Definition: 'a symbol or name that represents a value in computer programming and can be changed or assigned a new value.',
            Pronunciation: 'vɛriəbl',
            Synonym: 'symbol, identifier, data holder',
            Antonym: null,
            Sentence: "Assign the user's input to a variable for further processing."
        },
        {
            Word: 'version',
            LexicalCategory: 'Noun',
            Definition: 'a specific edition or iteration of software, typically identified by a version number or name.',
            Pronunciation: 'vɜrʒən',
            Synonym: 'edition, release, variant',
            Antonym: null,
            Sentence: 'Make sure you have the latest version of the software for new features.'
        },
        {
            Word: 'video',
            LexicalCategory: 'Noun',
            Definition: 'moving images, visual content, or a recording displayed on a computer screen or digital device.',
            Pronunciation: 'vɪdioʊ',
            Synonym: 'moving pictures, film',
            Antonym: null,
            Sentence: 'The video provides a visual demonstration of the product.'
        },
        {
            Word: 'virtual reality',
            LexicalCategory: 'Noun',
            Definition: 'a computer-generated simulation of a three-dimensional environment that can be interacted with and experienced by users.',
            Pronunciation: 'vɜrʧuəl riælɪti',
            Synonym: 'VR, simulated reality',
            Antonym: null,
            Sentence: 'Virtual reality technology enhances immersive experiences.'
        },
        {
            Word: 'virus',
            LexicalCategory: 'Noun',
            Definition: 'a type of malicious software that self-replicates and spreads to other computers, often causing harm to the system.',
            Pronunciation: 'vaɪrəs',
            Synonym: 'malware, trojan, worm',
            Antonym: null,
            Sentence: 'Make sure to keep your antivirus software up to date to protect against viruses.'
        },
        {
            Word: 'web browser',
            LexicalCategory: 'Noun',
            Definition: 'a software application used to access and view websites and web pages on the internet.',
            Pronunciation: 'wɛb braʊzər',
            Synonym: 'internet browser, web client',
            Antonym: null,
            Sentence: 'Google Chrome and Mozilla Firefox are popular web browsers.'
        },
        {
            Word: 'webcam',
            LexicalCategory: 'Noun',
            Definition: 'a small camera connected to a computer that captures and streams live video or images over the internet.',
            Pronunciation: 'wɛbˌkæm',
            Synonym: 'web camera, digital camera',
            Antonym: null,
            Sentence: 'The webcam allows video conferencing and live streaming.'
        },
        {
            Word: 'website',
            LexicalCategory: 'Noun',
            Definition: 'a collection of web pages hosted on a specific domain and accessible over the internet.',
            Pronunciation: 'wɛbˌsaɪt',
            Synonym: 'web page, site',
            Antonym: null,
            Sentence: 'The company launched a new website to showcase its products.'
        },
        {
            Word: 'Wi-Fi',
            LexicalCategory: 'Noun',
            Definition: 'Wireless Fidelity; a technology that allows electronic devices to connect to a local area network and the internet wirelessly.',
            Pronunciation: 'waɪfaɪ',
            Synonym: 'wireless network, WLAN',
            Antonym: null,
            Sentence: 'Connect your smartphone to the Wi-Fi network for internet access.'
        },
        {
            Word: 'Windows',
            LexicalCategory: 'Noun',
            Definition: 'a popular operating system developed by Microsoft for personal computers.',
            Pronunciation: 'wɪndoʊz',
            Synonym: null,
            Antonym: null,
            Sentence: 'The latest version of Windows introduces several new features.'
        },
        {
            Word: 'wizard',
            LexicalCategory: 'Noun',
            Definition: 'a step-by-step guide or interactive tool that assists users in performing complex tasks or setups.',
            Pronunciation: 'wɪzərd',
            Synonym: 'guide, assistant, helper',
            Antonym: null,
            Sentence: 'The setup wizard helps configure the software installation.'
        },
        {
            Word: 'worm',
            LexicalCategory: 'Noun',
            Definition: 'a type of self-replicating malicious software that spreads through computer networks.',
            Pronunciation: 'wɜrm',
            Synonym: 'malware, virus, trojan',
            Antonym: null,
            Sentence: 'Be cautious of suspicious email attachments to prevent worm infections.'
        },
        {
            Word: 'XML',
            LexicalCategory: 'Noun',
            Definition: 'Extensible Markup Language; a markup language that defines rules for encoding documents in a format that is both human-readable and machine-readable.',
            Pronunciation: 'ˌɛksmeɪɛl',
            Synonym: 'markup language',
            Antonym: null,
            Sentence: 'XML is commonly used for data exchange and configuration files.'
        },
        {
            Word: 'XSS',
            LexicalCategory: 'Noun',
            Definition: 'Cross-Site Scripting; a type of security vulnerability in web applications that allows attackers to inject malicious scripts into web pages viewed by other users.',
            Pronunciation: 'ɛksɛsɛs',
            Synonym: null,
            Antonym: null,
            Sentence: 'Developers should implement proper input validation to prevent XSS attacks.'
        },
        {
            Word: 'Yahoo',
            LexicalCategory: 'Noun',
            Definition: 'a web services provider known for its search engine, email service, news aggregator, and other online products.',
            Pronunciation: 'jɑhuː',
            Synonym: null,
            Antonym: null,
            Sentence: 'I have a Yahoo email account for personal use.'
        },
        {
            Word: 'YouTube',
            LexicalCategory: 'Noun',
            Definition: 'a popular video-sharing platform where users can upload, view, and share videos.',
            Pronunciation: 'juːtjuːb',
            Synonym: null,
            Antonym: null,
            Sentence: 'Many content creators publish their videos on YouTube.'
        },
        {
            Word: 'zip',
            LexicalCategory: 'Verb',
            Definition: 'to compress files or data into a smaller size for easier storage, transmission, or downloading.',
            Pronunciation: 'zɪp',
            Synonym: 'compress, archive, condense',
            Antonym: null,
            Sentence: 'You can zip the folder to create a smaller file for sharing.'
        },
        {
            Word: 'zombie',
            LexicalCategory: 'Noun',
            Definition: "a computer that has been infected by malware and is controlled remotely by a hacker without the user's knowledge.",
            Pronunciation: 'zɒmbi',
            Synonym: 'infected computer, botnet member',
            Antonym: null,
            Sentence: 'A zombie computer can be used for various cyberattacks.'
        }
 ];


