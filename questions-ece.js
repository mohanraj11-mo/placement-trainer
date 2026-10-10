/* ============================================================
   PLACEMENT TRAINER AI — ECE Question Bank (seed data)
   Format: { q, o:[4 options], c: correctIndex(0-3) }
   ============================================================ */
window.PTA = window.PTA || {};
PTA.questions = PTA.questions || {};

PTA.questions['electronic-devices'] = [
  { q:'Which of the following is a majority carrier device?', o:['BJT','JFET','Both BJT and JFET','Neither'], c:1 },
  { q:'The depletion region of a PN junction diode acts as an insulator because it is:', o:['Free of charge carriers','Full of electrons','Full of holes','Highly conductive'], c:0 },
  { q:'The knee voltage of a silicon diode is approximately:', o:['0.2 V','0.3 V','0.7 V','1.2 V'], c:2 },
  { q:'A Zener diode is normally operated in which region?', o:['Forward bias','Reverse breakdown','Cut-off','Saturation'], c:1 },
  { q:'In a BJT, the base region is:', o:['Heavily doped and thick','Lightly doped and thin','Lightly doped and thick','Heavily doped and thin'], c:1 },
  { q:'For an NPN transistor in active region, the base-emitter junction is:', o:['Reverse biased','Forward biased','Unbiased','Short circuited'], c:1 },
  { q:'The current gain (alpha) of a BJT in common base configuration is:', o:['Always greater than 1','Always less than 1','Always equal to 1','Negative'], c:1 },
  { q:'A JFET is a _______ controlled device.', o:['Current','Voltage','Power','Charge'], c:1 },
  { q:'The pinch-off voltage in a JFET refers to the gate voltage at which:', o:['Drain current becomes maximum','Drain current becomes zero','Gate current is maximum','Channel resistance is minimum'], c:1 },
  { q:'MOSFET stands for:', o:['Metal Oxide Semiconductor Field Effect Transistor','Metal Organic Semiconductor Field Effect Transistor','Metal Oxide Silicon Field Emission Transistor','Multi Oxide Semiconductor Field Effect Transistor'], c:0 },
  { q:'Enhancement mode MOSFETs conduct when:', o:['Gate voltage is zero','Gate voltage exceeds threshold voltage','Drain voltage is zero','Source voltage exceeds gate voltage'], c:1 },
  { q:'Which rectifier circuit gives the highest ripple factor?', o:['Half wave rectifier','Full wave rectifier','Bridge rectifier','None of these'], c:0 },
  { q:'The PIV (Peak Inverse Voltage) of a diode in a bridge rectifier is approximately:', o:['Vm','2Vm','Vm/2','4Vm'], c:0 },
  { q:'Avalanche breakdown in a diode occurs due to:', o:['Direct rupture of covalent bonds','Impact ionization by minority carriers','Heavy forward current','Excess doping'], c:1 },
  { q:'A tunnel diode exhibits which characteristic?', o:['Positive resistance region only','Negative resistance region','Zero resistance','Infinite resistance'], c:1 },
  { q:'Which device is commonly used as a voltage regulator?', o:['Zener diode','Varactor diode','Schottky diode','Tunnel diode'], c:0 },
  { q:'The early effect in a BJT refers to:', o:['Variation of base width with collector voltage','Variation of emitter doping','Reduction of collector current','Increase in base current'], c:0 },
  { q:'A varactor diode is primarily used for:', o:['Rectification','Voltage-controlled capacitance','Amplification','Oscillation only'], c:1 },
  { q:'The forbidden energy gap of silicon at room temperature is approximately:', o:['0.7 eV','1.1 eV','1.5 eV','3.2 eV'], c:1 },
  { q:'In a photodiode, the reverse current increases with:', o:['Increasing reverse voltage only','Increasing light intensity','Decreasing temperature','Decreasing junction area'], c:1 }
];

PTA.questions['digital-electronics'] = [
  { q:'The output of an AND gate is HIGH when:', o:['Any one input is HIGH','All inputs are HIGH','All inputs are LOW','Any one input is LOW'], c:1 },
  { q:'Which gate is known as a universal gate?', o:['AND','OR','NAND','NOT'], c:2 },
  { q:'The Boolean expression A + A\'B is equivalent to:', o:['A','B','A + B','AB'], c:2 },
  { q:'How many flip-flops are required to design a mod-16 counter?', o:['2','3','4','5'], c:2 },
  { q:'A D flip-flop is primarily used to:', o:['Toggle output','Store one bit of data','Divide frequency by 3','Generate clock pulses'], c:1 },
  { q:'The number of unique outputs of a 3-input truth table is:', o:['4','6','8','16'], c:2 },
  { q:'Which code is also called reflected binary code?', o:['BCD','Gray code','Excess-3','ASCII'], c:1 },
  { q:'A multiplexer is also known as:', o:['Data selector','Data distributor','Encoder','Decoder'], c:0 },
  { q:'The 2\'s complement of binary number 1010 is:', o:['0101','0110','1001','0111'], c:1 },
  { q:'A JK flip-flop in the J=1, K=1 state will:', o:['Reset','Set','Toggle','Hold'], c:2 },
  { q:'How many select lines are required for an 8:1 multiplexer?', o:['2','3','4','8'], c:1 },
  { q:'The full form of CMOS is:', o:['Complementary Metal Oxide Semiconductor','Common Metal Oxide Semiconductor','Complementary Metal Organic Semiconductor','Combined Metal Oxide Silicon'], c:0 },
  { q:'A ripple counter is also known as:', o:['Synchronous counter','Asynchronous counter','Ring counter','Johnson counter'], c:1 },
  { q:'The minimum number of NAND gates required to implement an OR gate is:', o:['1','2','3','4'], c:2 },
  { q:'Which of these represents a Race condition risk?', o:['SR latch with S=R=1','D flip-flop','JK flip-flop with edge trigger','T flip-flop'], c:0 },
  { q:'An SOP (Sum of Products) expression is implemented using:', o:['OR gates followed by AND gate','AND gates followed by OR gate','NOR gates only','NAND gates only'], c:1 },
  { q:'A decoder with n inputs has how many maximum outputs?', o:['n','2n','2^n','n^2'], c:2 },
  { q:'The excess-3 code of decimal 5 is:', o:['1000','0101','1100','1001'], c:0 },
  { q:'Which memory is volatile?', o:['ROM','RAM','EPROM','Flash'], c:1 },
  { q:'A shift register that shifts data in both directions is called:', o:['SISO','Bidirectional shift register','PIPO','Ring counter'], c:1 }
];

PTA.questions['network-theory'] = [
  { q:'Ohm\'s Law states that voltage is directly proportional to:', o:['Resistance only','Current only','Current, at constant resistance','Power'], c:2 },
  { q:'Kirchhoff\'s Current Law is based on the conservation of:', o:['Energy','Charge','Momentum','Voltage'], c:1 },
  { q:'Kirchhoff\'s Voltage Law is based on the conservation of:', o:['Charge','Current','Energy','Mass'], c:2 },
  { q:'Thevenin\'s theorem replaces a network with:', o:['A current source in parallel with resistance','A voltage source in series with resistance','Only a resistance','Only a capacitance'], c:1 },
  { q:'Norton\'s equivalent circuit consists of:', o:['Voltage source in series with resistance','Current source in parallel with resistance','Only inductance','Only capacitance'], c:1 },
  { q:'Maximum power transfer theorem states maximum power is delivered when load resistance equals:', o:['Zero','Infinite','Source resistance','Twice the source resistance'], c:2 },
  { q:'The unit of electrical conductance is:', o:['Ohm','Siemens','Farad','Henry'], c:1 },
  { q:'In a purely resistive AC circuit, the phase difference between voltage and current is:', o:['90 degrees','180 degrees','0 degrees','45 degrees'], c:2 },
  { q:'The power factor of a purely inductive circuit is:', o:['1','0','0.5','-1'], c:1 },
  { q:'Resonance in an RLC series circuit occurs when:', o:['XL = XC','XL = 0','XC = 0','R = 0'], c:0 },
  { q:'Superposition theorem is applicable only to:', o:['Non-linear circuits','Linear bilateral circuits','Circuits with diodes','AC circuits only'], c:1 },
  { q:'The Q-factor of a series resonant circuit indicates:', o:['Power dissipated','Sharpness of resonance','Total impedance','Bandwidth only'], c:1 },
  { q:'Two resistors in parallel have a combined resistance that is:', o:['Sum of both','Greater than either resistor','Less than the smallest resistor','Equal to average'], c:2 },
  { q:'The time constant of an RC circuit is given by:', o:['R/C','RC','1/RC','R+C'], c:1 },
  { q:'In a purely capacitive circuit, current:', o:['Lags voltage by 90 degrees','Leads voltage by 90 degrees','Is in phase with voltage','Lags voltage by 180 degrees'], c:1 },
  { q:'The unit of self-inductance is:', o:['Farad','Ohm','Henry','Weber'], c:2 },
  { q:'Millman\'s theorem is used to find:', o:['Equivalent voltage across parallel branches','Power dissipation','Resonant frequency','Time constant'], c:0 },
  { q:'A two-port network parameter that relates input and output using Z parameters is called:', o:['Impedance parameters','Admittance parameters','Hybrid parameters','Transmission parameters'], c:0 },
  { q:'The bandwidth of a resonant circuit is defined between:', o:['Two half power points','Peak and zero','Resonant frequency points only','Maximum current points'], c:0 },
  { q:'Reciprocity theorem applies to networks that are:', o:['Non-linear only','Linear, passive, bilateral','Active only','Time varying only'], c:1 }
];

PTA.questions['microprocessors'] = [
  { q:'The 8085 microprocessor is a _______ bit processor.', o:['4','8','16','32'], c:1 },
  { q:'The 8085 has how many address lines?', o:['8','12','16','20'], c:2 },
  { q:'The maximum memory addressable by 8085 is:', o:['4 KB','16 KB','64 KB','1 MB'], c:2 },
  { q:'Which register in 8085 is also called the flag register companion?', o:['Accumulator','Stack pointer','Program counter','Instruction register'], c:0 },
  { q:'The 8085 microprocessor operates on a clock frequency of up to:', o:['1 MHz','3 MHz','5 MHz','10 MHz'], c:1 },
  { q:'Which of these is a 16-bit register in 8085?', o:['Accumulator','Flag register','Stack pointer','Instruction register'], c:2 },
  { q:'The instruction MOV A,B in 8085 copies data from:', o:['A to B','B to A','Memory to A','A to memory'], c:1 },
  { q:'In 8086, the memory is organized as:', o:['Single 64KB segment','Two banks of 64KB each','Four 1MB segments','Multiple 1MB segments'], c:1 },
  { q:'The 8086 microprocessor has how many general purpose registers?', o:['2','4','6','8'], c:1 },
  { q:'Which unit in 8086 performs instruction fetching?', o:['EU','BIU','ALU','CU'], c:1 },
  { q:'The addressing mode where operand is part of the instruction itself is called:', o:['Direct addressing','Immediate addressing','Register addressing','Indirect addressing'], c:1 },
  { q:'Interrupts in 8085 that are non-maskable is:', o:['RST 7.5','TRAP','INTR','RST 6.5'], c:1 },
  { q:'The HALT instruction in 8085 is used to:', o:['Stop the program permanently','Suspend CPU operation till reset/interrupt','Reset the accumulator','Jump to next instruction'], c:1 },
  { q:'DMA stands for:', o:['Direct Memory Access','Data Memory Allocation','Dynamic Memory Access','Direct Module Access'], c:0 },
  { q:'The 8255 is a:', o:['Timer IC','Programmable Peripheral Interface','Serial communication IC','Memory IC'], c:1 },
  { q:'In 8086, segment registers are of size:', o:['8 bits','16 bits','20 bits','32 bits'], c:1 },
  { q:'The stack in 8085 grows in which direction?', o:['Upward (increasing address)','Downward (decreasing address)','Random','Fixed'], c:1 },
  { q:'Which flag is set when the result of an operation is zero in 8085?', o:['Carry flag','Zero flag','Sign flag','Parity flag'], c:1 },
  { q:'ALE in 8085 stands for:', o:['Address Latch Enable','Arithmetic Logic Enable','Address Line Extension','Automatic Latch Enable'], c:0 },
  { q:'The instruction cycle consists of:', o:['Fetch and execute only','Fetch, decode and execute','Decode only','Execute only'], c:1 }
];

PTA.questions['communication-systems'] = [
  { q:'Modulation is the process of:', o:['Removing noise from signal','Superimposing message signal on carrier','Amplifying baseband signal','Filtering the signal'], c:1 },
  { q:'In Amplitude Modulation, the bandwidth required is:', o:['Equal to message bandwidth','Twice the message bandwidth','Half the message bandwidth','Independent of message bandwidth'], c:1 },
  { q:'The main advantage of FM over AM is:', o:['Lower bandwidth','Better noise immunity','Simpler circuitry','Lower power requirement'], c:1 },
  { q:'Sampling theorem states sampling frequency must be:', o:['Equal to signal bandwidth','At least twice the maximum frequency','Half the maximum frequency','Independent of signal frequency'], c:1 },
  { q:'The Nyquist rate is defined as:', o:['Minimum sampling rate to avoid aliasing','Maximum bandwidth of channel','Carrier frequency','Bit rate of the channel'], c:0 },
  { q:'PCM stands for:', o:['Pulse Code Modulation','Phase Code Modulation','Pulse Carrier Modulation','Pulse Coded Multiplexing'], c:0 },
  { q:'Which noise is most dominant in communication systems?', o:['Shot noise','Thermal noise','Flicker noise','Partition noise'], c:1 },
  { q:'The process of combining multiple signals for transmission over a single channel is called:', o:['Modulation','Multiplexing','Demodulation','Filtering'], c:1 },
  { q:'TDM stands for:', o:['Time Division Multiplexing','Total Division Multiplexing','Time Domain Modulation','Transmission Division Method'], c:0 },
  { q:'In FDM, different signals are separated by:', o:['Time slots','Frequency bands','Code sequences','Amplitude levels'], c:1 },
  { q:'The signal-to-noise ratio is usually expressed in:', o:['Volts','Watts','Decibels','Hertz'], c:2 },
  { q:'Companding in PCM is used to:', o:['Increase bandwidth','Reduce quantization noise for low amplitude signals','Increase sampling rate','Remove DC component'], c:1 },
  { q:'The bandwidth of an FM signal is estimated using:', o:['Nyquist criterion','Carson\'s rule','Shannon\'s theorem','Sampling theorem'], c:1 },
  { q:'A superheterodyne receiver converts incoming signal to:', o:['Baseband frequency directly','A fixed intermediate frequency','Carrier frequency','Zero frequency always'], c:1 },
  { q:'Which modulation technique is most bandwidth efficient among analog schemes?', o:['SSB','DSB-FC','FM','PM'], c:0 },
  { q:'Aliasing occurs when:', o:['Sampling rate is higher than Nyquist rate','Sampling rate is lower than Nyquist rate','Signal has zero bandwidth','Carrier frequency is high'], c:1 },
  { q:'The quantization error in PCM is reduced by:', o:['Reducing number of bits','Increasing number of quantization levels','Reducing sampling rate','Increasing noise'], c:1 },
  { q:'Which of the following is a digital modulation technique?', o:['AM','FM','QPSK','PM'], c:2 },
  { q:'The channel capacity as per Shannon\'s theorem depends on:', o:['Bandwidth and SNR','Only bandwidth','Only SNR','Carrier frequency'], c:0 },
  { q:'Demodulation is the process of:', o:['Adding carrier to signal','Recovering the original message from modulated signal','Amplifying the carrier','Filtering noise only'], c:1 }
];

PTA.questions['engineering-mathematics'] = [
  { q:'The rank of a zero matrix is:', o:['1','0','Equal to its order','Undefined'], c:1 },
  { q:'Eigenvalues of a symmetric matrix are always:', o:['Complex','Real','Zero','Negative'], c:1 },
  { q:'The Laplace transform of a unit step function u(t) is:', o:['1/s','1/s^2','s','e^-s'], c:0 },
  { q:'The derivative of sin(x) with respect to x is:', o:['cos(x)','-cos(x)','-sin(x)','tan(x)'], c:0 },
  { q:'The value of the integral of e^x dx is:', o:['e^x + C','x*e^x + C','e^x/x + C','ln(x) + C'], c:0 },
  { q:'A matrix is said to be singular if its determinant is:', o:['1','Non-zero','0','Negative'], c:2 },
  { q:'The Fourier series is used to represent:', o:['Only aperiodic signals','Periodic signals as sum of sinusoids','Only random signals','Only exponential signals'], c:1 },
  { q:'The mean of a set of numbers is also called:', o:['Median','Mode','Average','Range'], c:2 },
  { q:'Probability value always lies between:', o:['-1 and 1','0 and 1','0 and infinity','-infinity and infinity'], c:1 },
  { q:'The standard deviation is the square root of:', o:['Mean','Variance','Median','Mode'], c:1 },
  { q:'A differential equation of order 2 contains derivatives up to:', o:['First derivative','Second derivative','Third derivative','No derivative'], c:1 },
  { q:'The Z-transform is primarily used for analyzing:', o:['Continuous time signals','Discrete time signals','Only analog filters','Only power signals'], c:1 },
  { q:'Which of these is a solution technique for linear equations?', o:['Gaussian elimination','Newton-Raphson only','Simpson\'s rule','Trapezoidal rule'], c:0 },
  { q:'The value of i^2 (iota squared) is:', o:['1','-1','0','i'], c:1 },
  { q:'If A is an n x n identity matrix, its determinant is:', o:['0','n','1','n^2'], c:2 },
  { q:'The Taylor series expansion is used to approximate a function around:', o:['A random point','A specific point','Infinity only','Zero only'], c:1 },
  { q:'The rate of change of a function is given by its:', o:['Integral','Derivative','Limit','Sum'], c:1 },
  { q:'Which method is used to solve simultaneous linear equations numerically?', o:['Gauss-Seidel method','Fourier method','Laplace method','None'], c:0 },
  { q:'A matrix that equals its own transpose is called:', o:['Skew-symmetric','Symmetric','Orthogonal','Singular'], c:1 },
  { q:'The area under a probability density curve equals:', o:['0','1','Infinity','Depends on variable'], c:1 }
];
