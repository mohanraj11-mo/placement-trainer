/* ============================================================
   PLACEMENT TRAINER AI — Software Question Bank (seed data)
   Format: { q, o:[4 options], c: correctIndex(0-3) }
   ============================================================ */
window.PTA = window.PTA || {};
PTA.questions = PTA.questions || {};

PTA.questions['c-programming'] = [
  { q:'Which of the following is the correct entry point of a C program?', o:['start()','main()','begin()','init()'], c:1 },
  { q:'What is the size of an int data type in most 32-bit compilers?', o:['1 byte','2 bytes','4 bytes','8 bytes'], c:2 },
  { q:'Which header file is required for printf()?', o:['stdlib.h','stdio.h','string.h','conio.h'], c:1 },
  { q:'What does the "static" keyword do to a local variable?', o:['Deletes it after function ends','Preserves its value between function calls','Makes it global','Makes it constant'], c:1 },
  { q:'Which operator is used to access the value at an address stored in a pointer?', o:['&','*','->','%'], c:1 },
  { q:'What is the output of printf("%d", 5/2); in C?', o:['2.5','2','3','2.0'], c:1 },
  { q:'Which of these is NOT a valid storage class in C?', o:['auto','extern','register','global'], c:3 },
  { q:'What does malloc() return if memory allocation fails?', o:['0','NULL','-1','Garbage value'], c:1 },
  { q:'Which loop is guaranteed to execute at least once?', o:['for','while','do-while','none'], c:2 },
  { q:'What is the correct way to declare a pointer to an integer?', o:['int ptr;','int *ptr;','ptr int;','*int ptr;'], c:1 },
  { q:'Which function is used to compare two strings in C?', o:['strcmp()','strcpy()','strcat()','strlen()'], c:0 },
  { q:'The scope of a variable declared inside a function is:', o:['Global','Local to that function','Local to the file','Local to the block'], c:1 },
  { q:'What is a recursive function?', o:['A function with no return type','A function that calls itself','A function with multiple arguments','A function used only for math'], c:1 },
  { q:'Which of the following correctly declares an array of 10 integers?', o:['int arr[10];','int arr(10);','array int arr[10];','int arr{10};'], c:0 },
  { q:'What does the "break" statement do inside a loop?', o:['Skips the current iteration','Terminates the loop immediately','Restarts the loop','Pauses the loop'], c:1 },
  { q:'In C, structures are used to:', o:['Group variables of different types','Store only integers','Perform arithmetic operations','Define functions'], c:0 },
  { q:'Which operator has the highest precedence in C?', o:['+','*','()','='], c:2 },
  { q:'What is the purpose of the "typedef" keyword?', o:['Deletes a type','Creates an alias for an existing type','Declares a global variable','Defines a macro'], c:1 },
  { q:'What is the output of sizeof(char) in C?', o:['1','2','4','Depends on compiler'], c:0 },
  { q:'Which of the following is used for dynamic memory allocation?', o:['malloc()','printf()','scanf()','sizeof()'], c:0 }
];

PTA.questions['data-structures'] = [
  { q:'Which data structure uses FIFO (First In First Out) order?', o:['Stack','Queue','Tree','Graph'], c:1 },
  { q:'Which data structure uses LIFO (Last In First Out) order?', o:['Queue','Stack','Linked List','Array'], c:1 },
  { q:'The time complexity of binary search on a sorted array is:', o:['O(n)','O(log n)','O(n^2)','O(1)'], c:1 },
  { q:'Which traversal visits the root node first in a binary tree?', o:['Inorder','Preorder','Postorder','Level order'], c:1 },
  { q:'A complete binary tree with n nodes has a height of:', o:['n','n/2','log2(n)','n-1'], c:2 },
  { q:'Which data structure is best suited for implementing recursion?', o:['Queue','Stack','Array','Linked List'], c:1 },
  { q:'The worst-case time complexity of quicksort is:', o:['O(n log n)','O(n)','O(n^2)','O(log n)'], c:2 },
  { q:'In a singly linked list, each node contains:', o:['Data and pointer to next node','Data and pointer to previous node','Only data','Two pointers'], c:0 },
  { q:'Which sorting algorithm has the best average case time complexity?', o:['Bubble sort','Merge sort','Selection sort','Insertion sort'], c:1 },
  { q:'A graph with no cycles is called:', o:['Directed graph','Acyclic graph','Complete graph','Weighted graph'], c:1 },
  { q:'Which data structure is used in BFS traversal of a graph?', o:['Stack','Queue','Tree','Heap'], c:1 },
  { q:'Which data structure is used in DFS traversal of a graph?', o:['Queue','Stack','Priority queue','Array'], c:1 },
  { q:'A hash table provides average time complexity for search operation of:', o:['O(n)','O(log n)','O(1)','O(n^2)'], c:2 },
  { q:'In a max-heap, the parent node is always:', o:['Smaller than child nodes','Greater than or equal to child nodes','Equal to child nodes','Unrelated to child nodes'], c:1 },
  { q:'The process of inserting an element into a stack is called:', o:['Pop','Push','Insert','Add'], c:1 },
  { q:'A circular queue overcomes the limitation of:', o:['Stack overflow','Unused space in a linear queue','Sorting issues','Recursion depth'], c:1 },
  { q:'Which data structure is ideal for implementing an undo feature in software?', o:['Queue','Stack','Array','Graph'], c:1 },
  { q:'The space complexity of an algorithm depends on:', o:['Input size and auxiliary space','Only CPU speed','Only network speed','Programming language only'], c:0 },
  { q:'A binary search tree ensures which property?', o:['Left child > parent > right child','Left child < parent < right child','All nodes are equal','No specific order'], c:1 },
  { q:'The time complexity to insert an element at the beginning of a linked list is:', o:['O(1)','O(n)','O(log n)','O(n^2)'], c:0 }
];

PTA.questions['dbms'] = [
  { q:'DBMS stands for:', o:['Database Management System','Data Backup Management System','Database Modeling System','Data Management Business System'], c:0 },
  { q:'Which of the following is a DDL command?', o:['SELECT','CREATE','INSERT','UPDATE'], c:1 },
  { q:'Which normal form removes partial dependency?', o:['1NF','2NF','3NF','BCNF'], c:1 },
  { q:'A primary key can contain:', o:['NULL values','Duplicate values','Unique non-null values','Any value'], c:2 },
  { q:'Which SQL clause is used to filter groups after GROUP BY?', o:['WHERE','HAVING','FILTER','ORDER BY'], c:1 },
  { q:'A foreign key is used to:', o:['Uniquely identify a row','Establish relationship between tables','Sort data','Delete rows'], c:1 },
  { q:'Which of these is not a type of SQL join?', o:['INNER JOIN','OUTER JOIN','CROSS JOIN','LOOP JOIN'], c:3 },
  { q:'ACID properties in DBMS ensure:', o:['Fast query execution','Reliable transaction processing','Data compression','Data encryption'], c:1 },
  { q:'Which of the following is used to remove a table completely from database?', o:['DELETE','DROP','TRUNCATE','REMOVE'], c:1 },
  { q:'The process of organizing data to minimize redundancy is called:', o:['Indexing','Normalization','Denormalization','Partitioning'], c:1 },
  { q:'A view in SQL is:', o:['A physical table','A virtual table based on a query','An index','A stored procedure'], c:1 },
  { q:'Which key uniquely identifies a row and is chosen among candidate keys?', o:['Foreign key','Primary key','Super key','Alternate key'], c:1 },
  { q:'Which command is used to add a new row into a table?', o:['UPDATE','INSERT','ALTER','ADD'], c:1 },
  { q:'A transaction that has not yet committed or aborted is in which state?', o:['Committed','Active','Failed','Terminated'], c:1 },
  { q:'Which isolation level allows dirty reads?', o:['Serializable','Repeatable Read','Read Committed','Read Uncommitted'], c:3 },
  { q:'The E-R model represents data using:', o:['Tables only','Entities and relationships','Only attributes','Binary code'], c:1 },
  { q:'Which SQL function is used to count rows?', o:['SUM()','COUNT()','AVG()','TOTAL()'], c:1 },
  { q:'Indexing in a database is primarily used to:', o:['Increase storage size','Speed up data retrieval','Encrypt data','Normalize tables'], c:1 },
  { q:'A deadlock in DBMS occurs when:', o:['Two transactions wait for each other\'s locks indefinitely','A transaction completes quickly','Data is duplicated','A query has syntax error'], c:0 },
  { q:'Which of the following is a multi-valued attribute example?', o:['Employee ID','Phone numbers of a person','Date of birth','Salary'], c:1 }
];

PTA.questions['oop'] = [
  { q:'Which of the following is a core principle of OOP?', o:['Compilation','Encapsulation','Interpretation','Tokenization'], c:1 },
  { q:'Encapsulation refers to:', o:['Binding data and methods together','Hiding implementation only','Creating multiple objects','Inheriting properties'], c:0 },
  { q:'Which OOP concept allows a subclass to use properties of a parent class?', o:['Polymorphism','Inheritance','Abstraction','Encapsulation'], c:1 },
  { q:'Polymorphism allows:', o:['One interface with multiple implementations','Only one function per class','Data hiding','Only single inheritance'], c:0 },
  { q:'Abstraction in OOP means:', o:['Hiding complex implementation details','Combining data and methods','Creating multiple objects','Overloading functions'], c:0 },
  { q:'Method overloading is an example of:', o:['Runtime polymorphism','Compile-time polymorphism','Inheritance','Encapsulation'], c:1 },
  { q:'Method overriding is an example of:', o:['Compile-time polymorphism','Runtime polymorphism','Data hiding','Abstraction'], c:1 },
  { q:'A class that cannot be instantiated directly is called:', o:['Final class','Abstract class','Static class','Public class'], c:1 },
  { q:'Which access modifier makes a member accessible only within the same class?', o:['public','protected','private','default'], c:2 },
  { q:'A constructor in OOP is used to:', o:['Destroy an object','Initialize an object','Copy a class','Delete a class'], c:1 },
  { q:'Multiple inheritance means a class can inherit from:', o:['Only one class','Multiple classes','No class','Only interfaces in Java'], c:1 },
  { q:'An interface in OOP typically defines:', o:['A blueprint of methods without implementation','Only variables','Only constructors','Data storage'], c:0 },
  { q:'Which OOP feature helps in code reusability the most?', o:['Encapsulation','Inheritance','Polymorphism','Abstraction'], c:1 },
  { q:'A destructor is called when:', o:['An object is created','An object goes out of scope or is deleted','A class is declared','A method is overloaded'], c:1 },
  { q:'Which of these is not an OOP language feature?', o:['Class','Object','GOTO statement','Inheritance'], c:2 },
  { q:'A static member of a class belongs to:', o:['Each individual object','The class itself, shared by all objects','Only the constructor','Only private methods'], c:1 },
  { q:'What is "this" pointer used for in OOP languages?', o:['Refers to the current object','Refers to the parent class','Refers to a static variable','Refers to global scope'], c:0 },
  { q:'Operator overloading allows:', o:['Operators to work with user-defined types','Changing operator precedence','Removing operators','Only mathematical operations'], c:0 },
  { q:'Which relationship represents "has-a" between classes?', o:['Inheritance','Composition','Polymorphism','Abstraction'], c:1 },
  { q:'In OOP, an object is:', o:['A blueprint of a class','An instance of a class','A function','A data type'], c:1 }
];

PTA.questions['computer-networks'] = [
  { q:'How many layers are there in the OSI model?', o:['5','6','7','8'], c:2 },
  { q:'Which layer of the OSI model is responsible for routing?', o:['Data Link Layer','Network Layer','Transport Layer','Session Layer'], c:1 },
  { q:'TCP is a _______ protocol.', o:['Connectionless','Connection-oriented','Unreliable','Broadcast only'], c:1 },
  { q:'Which protocol is used to resolve domain names to IP addresses?', o:['DHCP','DNS','FTP','SMTP'], c:1 },
  { q:'What is the default port number for HTTP?', o:['21','25','80','443'], c:2 },
  { q:'Which layer is responsible for error detection and framing?', o:['Physical Layer','Data Link Layer','Network Layer','Application Layer'], c:1 },
  { q:'IPv4 addresses are how many bits long?', o:['16 bits','32 bits','64 bits','128 bits'], c:1 },
  { q:'Which device operates at the Network Layer of OSI model?', o:['Hub','Switch','Router','Repeater'], c:2 },
  { q:'UDP differs from TCP mainly because UDP is:', o:['Connection-oriented and reliable','Connectionless and unreliable','Slower than TCP','Used only for email'], c:1 },
  { q:'What does DHCP stand for?', o:['Dynamic Host Configuration Protocol','Direct Host Control Protocol','Data Host Configuration Process','Dynamic Hyper Control Protocol'], c:0 },
  { q:'Which topology connects all devices to a single central hub?', o:['Bus topology','Ring topology','Star topology','Mesh topology'], c:2 },
  { q:'What is the purpose of a subnet mask?', o:['To encrypt data','To divide an IP address into network and host portions','To assign MAC addresses','To route emails'], c:1 },
  { q:'Which protocol is used for secure web communication?', o:['HTTP','HTTPS','FTP','SMTP'], c:1 },
  { q:'A MAC address is associated with which OSI layer?', o:['Physical Layer','Data Link Layer','Network Layer','Transport Layer'], c:1 },
  { q:'Which of the following is a private IP address range?', o:['8.8.8.8','192.168.0.0 - 192.168.255.255','172.32.0.0','11.0.0.0'], c:1 },
  { q:'What is the main function of a firewall?', o:['Speed up network traffic','Filter and monitor network traffic for security','Assign IP addresses','Convert domain names to IPs'], c:1 },
  { q:'Which protocol is used to send emails?', o:['SMTP','FTP','SNMP','HTTP'], c:0 },
  { q:'The process of breaking data into smaller units for transmission is called:', o:['Multiplexing','Packet switching / segmentation','Routing','Encryption'], c:1 },
  { q:'Which of the following is a Class C IP address?', o:['10.0.0.1','172.16.0.1','192.168.1.1','225.0.0.1'], c:2 },
  { q:'What is the function of ARP (Address Resolution Protocol)?', o:['Resolve domain name to IP','Resolve IP address to MAC address','Assign dynamic IPs','Encrypt network traffic'], c:1 }
];

PTA.questions['operating-systems'] = [
  { q:'An operating system primarily acts as:', o:['A compiler','An interface between user and hardware','A programming language','A database'], c:1 },
  { q:'Which scheduling algorithm can cause starvation?', o:['Round Robin','Priority Scheduling','FCFS','None of these'], c:1 },
  { q:'A deadlock occurs when processes are:', o:['Executing normally','Waiting indefinitely for resources held by each other','Sharing memory','Terminated'], c:1 },
  { q:'Which of the following is a necessary condition for deadlock?', o:['Mutual exclusion','Preemption always allowed','Unlimited resources','No waiting'], c:0 },
  { q:'Virtual memory allows:', o:['Execution of programs larger than physical memory','Faster CPU execution','Direct disk access','Removal of the need for RAM'], c:0 },
  { q:'Which of these is a non-preemptive scheduling algorithm?', o:['Round Robin','FCFS','Preemptive Priority','SRTF'], c:1 },
  { q:'Thrashing in an OS occurs due to:', o:['Excessive paging activity','Too much CPU idle time','High disk space','Low process count'], c:0 },
  { q:'A process in the "waiting" state is:', o:['Currently executing','Waiting for an event or resource','Terminated','Ready to execute'], c:1 },
  { q:'Which memory management technique divides memory into fixed-size blocks?', o:['Segmentation','Paging','Swapping','Caching'], c:1 },
  { q:'A semaphore is used for:', o:['Process synchronization','Memory allocation','File compression','CPU scheduling only'], c:0 },
  { q:'Which of the following is an example of a multi-threading benefit?', o:['Increased memory usage','Improved responsiveness of applications','Slower context switching','More deadlocks'], c:1 },
  { q:'The main function of a kernel is to:', o:['Manage hardware resources and system calls','Provide user interface only','Compile programs','Store files permanently'], c:0 },
  { q:'Which page replacement algorithm suffers from Belady\'s anomaly?', o:['LRU','FIFO','Optimal','None'], c:1 },
  { q:'A context switch involves:', o:['Saving and loading process states','Deleting a process','Creating a new file','Formatting disk'], c:0 },
  { q:'Which of the following is NOT an operating system?', o:['Linux','Windows','Oracle','macOS'], c:2 },
  { q:'Fragmentation in memory management refers to:', o:['Loss of usable memory due to allocation patterns','Increase in CPU speed','Faster process execution','Reduced disk space'], c:0 },
  { q:'Which system call is used to create a new process in Unix/Linux?', o:['exec()','fork()','wait()','exit()'], c:1 },
  { q:'The banker\'s algorithm is used for:', o:['Deadlock avoidance','CPU scheduling','Memory compaction','File allocation'], c:0 },
  { q:'Which of the following is a real-time operating system requirement?', o:['High throughput only','Predictable and timely response','Maximum memory usage','Unlimited processes'], c:1 },
  { q:'A spooling technique is commonly used for:', o:['Printer management','CPU scheduling','Memory paging','Network routing'], c:0 }
];
