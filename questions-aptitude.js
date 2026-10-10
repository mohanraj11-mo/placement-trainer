/* ============================================================
   PLACEMENT TRAINER AI — Aptitude Question Bank (seed data)
   Format: { q, o:[4 options], c: correctIndex(0-3) }
   ============================================================ */
window.PTA = window.PTA || {};
PTA.questions = PTA.questions || {};

PTA.questions['quantitative-aptitude'] = [
  { q:'What is the value of 15% of 200?', o:['20','30','40','50'], c:1 },
  { q:'If the ratio of two numbers is 3:5 and their sum is 64, find the smaller number.', o:['20','24','28','32'], c:1 },
  { q:'A train 150 m long is running at 60 km/hr. How long will it take to cross a pole?', o:['6 sec','9 sec','12 sec','15 sec'], c:1 },
  { q:'The average of 5 numbers is 20. If one number is excluded, the average becomes 15. Find the excluded number.', o:['30','35','40','45'], c:2 },
  { q:'Find the compound interest on Rs. 1000 at 10% per annum for 2 years.', o:['Rs. 100','Rs. 200','Rs. 210','Rs. 220'], c:2 },
  { q:'What is the LCM of 12 and 18?', o:['24','36','48','72'], c:1 },
  { q:'What is the HCF of 24 and 36?', o:['6','8','12','18'], c:2 },
  { q:'If a car covers 240 km in 4 hours, what is its speed?', o:['50 km/hr','60 km/hr','70 km/hr','80 km/hr'], c:1 },
  { q:'A sum of money doubles itself in 8 years at simple interest. Find the rate of interest.', o:['10%','12.5%','15%','20%'], c:1 },
  { q:'The simple interest on Rs. 500 for 3 years at 5% per annum is:', o:['Rs. 50','Rs. 65','Rs. 75','Rs. 85'], c:2 },
  { q:'If 5 workers can complete a task in 10 days, how many days will 10 workers take?', o:['5 days','10 days','15 days','20 days'], c:0 },
  { q:'What is 20% of 150?', o:['20','25','30','35'], c:2 },
  { q:'The sum of first 10 natural numbers is:', o:['45','50','55','60'], c:2 },
  { q:'If x + y = 10 and x - y = 4, find x.', o:['5','6','7','8'], c:2 },
  { q:'A person buys an item for Rs. 400 and sells it for Rs. 460. Find profit percentage.', o:['10%','12%','15%','18%'], c:2 },
  { q:'What is the square root of 144?', o:['10','11','12','13'], c:2 },
  { q:'A number increased by 25% becomes 100. Find the original number.', o:['75','80','85','90'], c:1 },
  { q:'If the perimeter of a square is 40 cm, find its area.', o:['80 sq cm','100 sq cm','120 sq cm','160 sq cm'], c:1 },
  { q:'What is 3/4 expressed as a percentage?', o:['65%','70%','75%','80%'], c:2 },
  { q:'The average of first 5 even numbers is:', o:['4','5','6','7'], c:2 }
];

PTA.questions['logical-reasoning'] = [
  { q:'Find the odd one out: Apple, Banana, Carrot, Mango', o:['Apple','Banana','Carrot','Mango'], c:2 },
  { q:'Complete the series: 2, 4, 8, 16, ?', o:['24','28','32','36'], c:2 },
  { q:'If CAT is coded as DBU, how is DOG coded?', o:['EPH','EPI','FPH','EQH'], c:0 },
  { q:'Find the next number: 1, 4, 9, 16, 25, ?', o:['30','36','32','49'], c:1 },
  { q:'Which word does not belong: Circle, Square, Triangle, Sphere', o:['Circle','Square','Triangle','Sphere'], c:3 },
  { q:'Complete the series: A, C, E, G, ?', o:['H','I','J','K'], c:1 },
  { q:'If all Roses are Flowers and all Flowers need water, then Roses need:', o:['Sunlight','Water','Soil only','Nothing'], c:1 },
  { q:'Find the missing number: 5, 10, 20, 40, ?', o:['60','70','80','90'], c:2 },
  { q:'Which number is different from others: 4, 9, 16, 20, 25', o:['4','9','16','20'], c:3 },
  { q:'If TAP is coded as 20-1-16, how is CAT coded?', o:['3-1-20','3-1-19','2-1-20','3-2-20'], c:0 },
  { q:'Find the next letter: B, D, F, H, ?', o:['I','J','K','L'], c:1 },
  { q:'A is taller than B, B is taller than C. Who is the shortest?', o:['A','B','C','Cannot determine'], c:2 },
  { q:'Complete the analogy: Doctor is to Hospital as Teacher is to:', o:['Book','School','Student','Class'], c:1 },
  { q:'Find the odd one out: 121, 144, 169, 200', o:['121','144','169','200'], c:3 },
  { q:'If 1=5, 2=10, 3=15, then 5=?', o:['20','25','30','35'], c:1 },
  { q:'Complete the series: 3, 6, 12, 24, ?', o:['36','40','48','52'], c:2 },
  { q:'Find the missing term: JAN, MAR, MAY, ?', o:['JUN','JUL','AUG','SEP'], c:1 },
  { q:'Pointing to a man, a woman said "His mother is the only daughter of my mother." How is the woman related to the man?', o:['Mother','Sister','Aunt','Daughter'], c:0 },
  { q:'Find the odd one: Triangle, Pentagon, Hexagon, Circle', o:['Triangle','Pentagon','Hexagon','Circle'], c:3 },
  { q:'Complete the series: Z, X, V, T, ?', o:['R','Q','S','P'], c:0 }
];

PTA.questions['verbal-ability'] = [
  { q:'Choose the synonym of "Happy":', o:['Sad','Joyful','Angry','Tired'], c:1 },
  { q:'Choose the antonym of "Brave":', o:['Bold','Courageous','Cowardly','Strong'], c:2 },
  { q:'Fill in the blank: She ___ to the market every day.', o:['go','goes','going','gone'], c:1 },
  { q:'Choose the correctly spelled word:', o:['Recieve','Receive','Receeve','Receve'], c:1 },
  { q:'Identify the noun in the sentence: "The dog barked loudly."', o:['The','Dog','Barked','Loudly'], c:1 },
  { q:'Choose the synonym of "Difficult":', o:['Easy','Simple','Hard','Plain'], c:2 },
  { q:'Choose the correct passive voice: "She writes a letter."', o:['A letter was written by her','A letter is written by her','A letter is writing by her','A letter written by her'], c:1 },
  { q:'Choose the antonym of "Ancient":', o:['Old','Modern','Historic','Aged'], c:1 },
  { q:'Fill in the blank: He is ___ honest man.', o:['a','an','the','no article needed'], c:1 },
  { q:'Choose the correct plural form of "Child":', o:['Childs','Childes','Children','Childrens'], c:2 },
  { q:'Identify the verb: "They quickly finished the project."', o:['They','Quickly','Finished','Project'], c:2 },
  { q:'Choose the correct meaning of the idiom "Break the ice":', o:['To start a conversation','To break something','To end a relationship','To feel cold'], c:0 },
  { q:'Choose the correct sentence:', o:['He don\'t like tea','He doesn\'t likes tea','He doesn\'t like tea','He not like tea'], c:2 },
  { q:'Choose the synonym of "Rapid":', o:['Slow','Quick','Steady','Late'], c:1 },
  { q:'Choose the correct article: I saw ___ elephant at the zoo.', o:['a','an','the','no article'], c:1 },
  { q:'Choose the antonym of "Generous":', o:['Kind','Selfish','Giving','Helpful'], c:1 },
  { q:'Identify the adjective: "She wore a beautiful dress."', o:['She','Wore','Beautiful','Dress'], c:2 },
  { q:'Choose the correct sentence structure:', o:['Neither he nor his friends is coming','Neither he nor his friends are coming','Neither he or his friends are coming','Neither he nor his friend is come'], c:1 },
  { q:'Choose the meaning of the idiom "Once in a blue moon":', o:['Very often','Rarely','Every night','Never'], c:1 },
  { q:'Choose the correctly punctuated sentence:', o:['Its a nice day','It\'s a nice day','Its\' a nice day','It is a nice day\'s'], c:1 }
];

PTA.questions['time-work'] = [
  { q:'A can do a work in 10 days and B can do it in 20 days. Working together, how many days will they take?', o:['5 days','6.67 days','7.5 days','8 days'], c:1 },
  { q:'If 6 men can complete a work in 12 days, how many days will 8 men take?', o:['8 days','9 days','10 days','12 days'], c:1 },
  { q:'A does a work in 15 days and B in 10 days. If they work on alternate days starting with A, how many days will the work take approximately?', o:['11 days','12 days','13 days','14 days'], c:2 },
  { q:'If A is twice as efficient as B, and B can do a work in 24 days, how many days will A take?', o:['8 days','10 days','12 days','16 days'], c:2 },
  { q:'A, B and C can do a piece of work in 6, 8 and 12 days respectively. How long will they take working together?', o:['2 days','2.67 days','3 days','3.5 days'], c:1 },
  { q:'A pipe can fill a tank in 6 hours. Another pipe can empty it in 10 hours. If both are opened together, how long to fill the tank?', o:['12 hours','15 hours','18 hours','20 hours'], c:1 },
  { q:'If 12 men can build a wall in 15 days, how many men are needed to build it in 9 days?', o:['15','18','20','24'], c:2 },
  { q:'A can complete a work in 20 days. He works for 5 days and leaves. What fraction of work is left?', o:['1/4','1/2','3/4','1/5'], c:2 },
  { q:'Two pipes A and B can fill a tank in 12 and 15 minutes respectively. How long will both take together?', o:['6.67 min','7 min','8 min','9 min'], c:0 },
  { q:'A and B together can finish a work in 12 days. A alone can finish it in 20 days. How many days will B alone take?', o:['24 days','28 days','30 days','32 days'], c:2 },
  { q:'If a work is done by 15 men in 20 days, in how many days will 25 men complete it?', o:['10 days','12 days','14 days','16 days'], c:1 },
  { q:'A can do 1/4 of a work in 5 days. How many days will A take to complete the full work?', o:['15 days','18 days','20 days','25 days'], c:2 },
  { q:'B is thrice as efficient as A. If A takes 30 days to do a work, how many days will A and B together take?', o:['6.5 days','7.5 days','8 days','9 days'], c:1 },
  { q:'A tank can be filled by pipe A in 8 hours and emptied by pipe B in 12 hours. If both operate together, find the time to fill the tank.', o:['20 hours','22 hours','24 hours','26 hours'], c:2 },
  { q:'If 5 women can do a piece of work in 6 days, how many days will 10 women take?', o:['2 days','3 days','4 days','5 days'], c:1 },
  { q:'A can finish a work in 18 days and B in 9 days. B worked for 3 days and left. How many days will A take to finish the remaining work?', o:['10 days','11 days','12 days','13 days'], c:2 },
  { q:'Three taps A, B, C can fill a tank in 10, 15, 30 hours respectively. Find the time taken by all three together.', o:['4 hours','5 hours','6 hours','7 hours'], c:1 },
  { q:'A does half as much work as B in 3/4 of the time. If together they take 18 days, how long would B alone take?', o:['30 days','32 days','35 days','40 days'], c:0 },
  { q:'If 8 men or 12 women can complete a job in 10 days, how many days will 4 men and 6 women take?', o:['5 days','10 days','15 days','20 days'], c:1 },
  { q:'A can do a piece of work in 25 days and B in 20 days. They work together for 5 days, then A leaves. In how many more days will B finish the remaining work?', o:['9 days','11 days','13 days','15 days'], c:1 }
];

PTA.questions['percentage'] = [
  { q:'What is 25% of 400?', o:['80','90','100','110'], c:2 },
  { q:'If 40% of a number is 80, find the number.', o:['180','190','200','210'], c:2 },
  { q:'A number is increased by 20% and then decreased by 20%. What is the net change?', o:['No change','4% decrease','4% increase','8% decrease'], c:1 },
  { q:'Express 3/5 as a percentage.', o:['50%','55%','60%','65%'], c:2 },
  { q:'If the price of an item increases from Rs. 200 to Rs. 250, find the percentage increase.', o:['20%','25%','30%','35%'], c:1 },
  { q:'A student scored 450 out of 600 marks. What is the percentage scored?', o:['70%','72.5%','75%','78%'], c:2 },
  { q:'If 15% of a number is 45, what is the number?', o:['250','280','300','320'], c:2 },
  { q:'The population of a town increased from 50000 to 55000. Find the percentage increase.', o:['8%','9%','10%','12%'], c:2 },
  { q:'A man spends 75% of his income. What percentage does he save?', o:['20%','25%','30%','35%'], c:1 },
  { q:'If a number is decreased by 10% it becomes 90. Find the original number.', o:['95','98','100','105'], c:2 },
  { q:'What percentage of 250 is 50?', o:['15%','18%','20%','25%'], c:2 },
  { q:'In an exam, 30% of students failed. If 210 students passed, find total students.', o:['280','290','300','310'], c:2 },
  { q:'A shopkeeper marks up goods by 40% and gives a discount of 10%. Find the net percentage profit.', o:['24%','26%','28%','30%'], c:2 },
  { q:'If x is 20% more than y, then y is what percent less than x?', o:['16.67%','18%','20%','22%'], c:0 },
  { q:'A number when increased by 25% gives 125. Find the original number.', o:['95','100','105','110'], c:1 },
  { q:'60% of a class are boys, and there are 24 girls. Find the total number of students.', o:['50','55','60','65'], c:2 },
  { q:'If the price of sugar increases by 25%, by what percentage should consumption be reduced to keep expenditure same?', o:['15%','18%','20%','25%'], c:2 },
  { q:'What is 12.5% expressed as a fraction?', o:['1/6','1/7','1/8','1/9'], c:2 },
  { q:'A company\'s profit increased from Rs. 50,000 to Rs. 65,000. Find the percentage increase.', o:['25%','28%','30%','32%'], c:2 },
  { q:'If 35% of a number equals 105, find 50% of the same number.', o:['140','145','150','155'], c:2 }
];
