import { ModuleData } from './types';

export const at10010: ModuleData = {
  id: 'AT-10010',
  code: 'AT-10010',
  title: 'Auditing in an IT Environment',
  standards: 'Auditing in an IT Environment / CIS',
  questionCount: 30,
  summary: 'IT Environment Impact on Auditing, System Characteristics (Concentration of data, lack of visible trail, systems-generated transactions), General IT Controls vs Application Controls (Input, Processing, Output), Stand-alone PCs and Online Systems, Networks and Databases, Computer-Assisted Audit Techniques (CAATs), Program Analysis (Code review, flowcharting, snapshot) and Program Testing (Test data, BCSE, ITF, Parallel simulation, Controlled reprocessing), Continuous audit techniques (SCARFs, audit hooks, tagging), and Generalized Audit Software (GAS).',
  lectureOutline: `### AUDITING IN AN IT ENVIRONMENT
- The overall objective and scope of an audit **does not change** in an IT environment.
- The IT environment affects:
  1. Procedures followed in obtaining understanding of accounting and internal controls;
  2. Consideration of inherent and control risk;
  3. Design and performance of tests of controls and substantive procedures.

---

### CHARACTERISTICS OF AN IT ENVIRONMENT
- **Concentration of functions and knowledge:** Fewer persons involved in processing.
- **Concentration of programs and data:** Centralized machine-readable files.
- **Nature of Processing:** Less visible evidence, absence of input documents, lack of visible audit trail (overwritten logs), lack of visible output, ease of access to data and programs from remote locations.
- **Design & Procedural Aspects:** Consistency of performance (programs execute instructions exactly without human fatigue, but errors are repeated systematically), system-generated transactions.

---

### INTERNAL CONTROLS IN AN IT ENVIRONMENT

#### 1. General IT Controls
Framework of overall control over IT activities to ensure overall control objectives are achieved:
- Organization and management controls (segregation of incompatible IT functions: system analysts, programmers, operators, data librarians).
- Development and maintenance controls (systems design, testing, approvals, change management).
- Delivery and support controls (disaster recovery/contingency planning, file backup, hot site vs. cold site, system security, environmental controls).
- Monitoring controls (IT performance indicators, internal IT audits).

#### 2. IT Application Controls
Specific controls over application systems ensuring transactions are authorized, recorded, and processed completely and accurately:
- **Input Controls:** Proper authorization, conversion into machine-readable form, error rejection and correction. (e.g., check digits, hash totals, limit/reasonableness checks, validity checks, field checks).
- **Processing Controls:** Ensuring system-generated transactions and data files are updated properly without addition, duplication or loss.
- **Output Controls:** Accurate processing results, access restricted to authorized personnel, output reconciliation.

---

### AUDIT APPROACHES & CAATS

#### Three Basic Approaches
1. **Auditing Around the Computer:** Auditor examines inputs and outputs without testing internal computer programs (black-box approach; appropriate for simple systems with detailed printed audit trail).
2. **Auditing With the Computer:** Using computer software as an audit tool (e.g. Generalized Audit Software, spreadsheets).
3. **Auditing Through the Computer:** Auditor directly tests computer processing logic and controls (white-box approach).

#### CAATs for Tests of Controls
- **Program Analysis:** Code review, comparison programs, flowcharting software, program tracing and mapping, snapshot.
- **Program Testing (Historical / Point-in-time):**
  - *Test Data:* Auditor-prepared dummy transactions (valid and invalid) processed by client software under auditor control.
  - *Base Case System Evaluation (BCSE):* Comprehensive test data testing every possible program condition.
  - *Integrated Test Facility (ITF):* Dummy unit/entity set up in client's live database where test data and actual live data run simultaneously without operating staff being aware.
  - *Parallel Simulation:* Processing client's live actual data using auditor's generalized audit software and comparing output with client results.
  - *Controlled Reprocessing:* Processing actual client data through a verified copy of the client's application program.
- **Continuous Audit Techniques (Throughout a period):**
  - *Audit Modules:* Programmed audit routines embedded into client application.
  - *SCARFs (Systems Control Audit Review Files):* Embedded logs collecting transaction info meeting audit criteria for subsequent analysis.
  - *Audit Hooks:* Program "exits" allowing auditor to insert custom audit subroutines.
  - *Transaction Tagging:* Flagging a transaction record and tracing it through critical processing points.
  - *Extended Records:* Appending additional audit data to regular transaction records to preserve an extended audit trail.`,
  items: [
    {
      id: 'AT10010_Q1',
      n: 1,
      stem: 'Which of the following characteristics distinguishes computer processing from manual processing?',
      opts: [
        { label: 'A', text: 'Computer processing virtually eliminates the occurrence of computational error normally associated with manual processing.' },
        { label: 'B', text: 'Errors or fraud in computer processing will be detected soon after their occurrences.' },
        { label: 'C', text: 'The potential for systematic error is ordinarily greater in manual processing than in computerized processing.' },
        { label: 'D', text: 'Most computer systems are designed so that transaction trails useful for audit purposes do not exist.' }
      ],
      ans: 'A',
      explanation: 'Computers perform mathematical computations precisely as programmed, virtually eliminating human manual arithmetic errors.'
    },
    {
      id: 'AT10010_Q2',
      n: 2,
      stem: 'Which of the following is correct concerning batch processing of transactions?',
      opts: [
        { label: 'A', text: 'Transactions are processed in the order they occur, regardless of type.' },
        { label: 'B', text: 'It has largely been replaced by on-line real-time processing in all but legacy systems.' },
        { label: 'C', text: 'It is more likely to result in an easy-to-follow audit trail than is on-line transaction processing.' },
        { label: 'D', text: 'It is used only in nondatabase applications.' }
      ],
      ans: 'C',
      explanation: 'Batch processing groups source documents together and creates batch control totals, producing an easier-to-follow audit trail.'
    },
    {
      id: 'AT10010_Q3',
      n: 3,
      stem: 'Which of the following procedures would an entity most likely include in its computer disaster recovery plan?',
      opts: [
        { label: 'A', text: 'Develop an auxiliary power supply to provide uninterrupted electricity.' },
        { label: 'B', text: 'Store duplicate copies of critical files in a location away from the computer center.' },
        { label: 'C', text: 'Maintain a listing of entity passwords with the network manager.' },
        { label: 'D', text: 'Translate data for storage purposes with a cryptographic secret code.' }
      ],
      ans: 'B',
      explanation: 'Off-site storage of duplicate backup files is a vital procedure in disaster recovery planning.'
    },
    {
      id: 'AT10010_Q4',
      n: 4,
      stem: 'What technology is needed in order to convert a paper document into a computer file?',
      opts: [
        { label: 'A', text: 'Optical character recognition' },
        { label: 'B', text: 'Electronic data interchange' },
        { label: 'C', text: 'Bar-coding scanning' },
        { label: 'D', text: 'Joining and merging' }
      ],
      ans: 'A',
      explanation: 'Optical character recognition (OCR) scans and converts printed/written text on paper into machine-encoded text files.'
    },
    {
      id: 'AT10010_Q5',
      n: 5,
      stem: 'A manufacturer of complex electronic equipment such as oscilloscopes and microscopes has been shipping its products with thick paper manuals but wants to reduce the cost of producing and shipping this documentation. Of the following, the best medium for the manufacturer to use to accomplish this is',
      opts: [
        { label: 'A', text: 'Write-once-read-many.' },
        { label: 'B', text: 'Digital audio tape.' },
        { label: 'C', text: 'Compact disc/read-only memory.' },
        { label: 'D', text: 'Computer-output-to-microform.' }
      ],
      ans: 'C',
      explanation: 'CD-ROM (read-only memory) allows cheap mass distribution of large documentation manuals.'
    },
    {
      id: 'AT10010_Q6',
      n: 6,
      stem: 'Misstatements in a batch computer system caused by incorrect programs or data may not be detected immediately because',
      opts: [
        { label: 'A', text: 'Errors in some transactions may cause rejection of other transactions in the batch.' },
        { label: 'B', text: 'The identification of errors in input data typically is not a part of the program.' },
        { label: 'C', text: 'There are time delays in processing transactions in a batch system.' },
        { label: 'D', text: 'The processing of transactions in a batch system is not uniform.' }
      ],
      ans: 'C',
      explanation: 'Batch processing runs at scheduled periodic intervals, introducing time delays before output and error reports are generated.'
    },
    {
      id: 'AT10010_Q7',
      n: 7,
      stem: 'A client is concerned that a power outage or disaster could impair the computer hardware’s ability to function as designed. The client desires off-site back-up hardware facilities that are fully configured and ready to operate within several hours. The client most likely should consider a',
      opts: [
        { label: 'A', text: 'Cold site.' },
        { label: 'B', text: 'Cool site.' },
        { label: 'C', text: 'Warm site.' },
        { label: 'D', text: 'Hot site.' }
      ],
      ans: 'D',
      explanation: 'A hot site is a fully equipped backup facility with pre-installed hardware and network capabilities ready for immediate operation.'
    },
    {
      id: 'AT10010_Q8',
      n: 8,
      stem: 'What type of computer system is characterized by data that are assembled from more than one location and records that are updated immediately?',
      opts: [
        { label: 'A', text: 'Microcomputer system' },
        { label: 'B', text: 'Minicomputer system' },
        { label: 'C', text: 'Batch processing system' },
        { label: 'D', text: 'On-line, real-time system' }
      ],
      ans: 'D',
      explanation: 'In an on-line, real-time system, transactions are entered from remote locations and master files are updated immediately.'
    },
    {
      id: 'AT10010_Q9',
      n: 9,
      stem: 'End-user computing is most likely to occur on which of the following types of computers?',
      opts: [
        { label: 'A', text: 'Mainframe' },
        { label: 'B', text: 'Minicomputers' },
        { label: 'C', text: 'Personal computers' },
        { label: 'D', text: 'Personal reference assistants' }
      ],
      ans: 'C',
      explanation: 'End-user computing (EUC) takes place on standalone personal computers / workstations managed directly by department staff.'
    },
    {
      id: 'AT10010_Q10',
      n: 10,
      stem: 'Which of the following statements most likely represents a disadvantage for an entity that keeps microcomputer-prepared data files rather than manually prepared files?',
      opts: [
        { label: 'A', text: 'Random error associated with processing similar transactions in different ways is usually greater.' },
        { label: 'B', text: 'It is usually more difficult to compare recorded accountability with physical count of assets.' },
        { label: 'C', text: 'Attention is focused on the accuracy of the programming process rather than errors in individual transactions.' },
        { label: 'D', text: 'It is usually easier for unauthorized persons to access and alter the files.' }
      ],
      ans: 'D',
      explanation: 'Personal computer files often lack enterprise-grade physical and logical security, making unauthorized access and alteration easier.'
    },
    {
      id: 'AT10010_Q11',
      n: 11,
      stem: 'To avoid invalid data input, a bank added an extra number at the end of each account number and subjected the new number to an algorithm. This technique is known as',
      opts: [
        { label: 'A', text: 'Optical character recognition' },
        { label: 'B', text: 'A check digit' },
        { label: 'C', text: 'A dependency check' },
        { label: 'D', text: 'A format check' }
      ],
      ans: 'B',
      explanation: 'A check digit is an extra calculated digit appended to an identification number to detect input and transposition errors.'
    },
    {
      id: 'AT10010_Q12',
      n: 12,
      stem: 'Preventing someone with sufficient technical skill from circumventing security procedures and making changes to production programs is best accomplished by',
      opts: [
        { label: 'A', text: 'Reviewing reports of jobs completed.' },
        { label: 'B', text: 'Comparing production programs with independently controlled copies.' },
        { label: 'C', text: 'Running test data periodically.' },
        { label: 'D', text: 'Providing suitable segregation of duties.' }
      ],
      ans: 'D',
      explanation: 'Segregating systems development (programmers) from computer operations and production program libraries provides the strongest preventative control.'
    },
    {
      id: 'AT10010_Q13',
      n: 13,
      stem: 'An entity has the following invoices in a batch:\nInvoice No. 201 (Qty 150, Price 5.00)\nInvoice No. 202 (Qty 200, Price 10.00)\nInvoice No. 203 (Qty 250, Price 25.00)\nInvoice No. 204 (Qty 300, Price 30.00)\nWhich of the following most likely represents a hash total?',
      opts: [
        { label: 'A', text: 'FGHK80' },
        { label: 'B', text: '4' },
        { label: 'C', text: '204' },
        { label: 'D', text: '810' }
      ],
      ans: 'D',
      explanation: 'A hash total is a sum of numbers that has no intrinsic financial meaning (201 + 202 + 203 + 204 = 810) used purely to detect omissions or alterations.'
    },
    {
      id: 'AT10010_Q14',
      n: 14,
      stem: 'Which of the following controls is a processing control designed to ensure the reliability and accuracy of data processing?\nLimit test | Validity check test',
      opts: [
        { label: 'A', text: 'Yes | Yes' },
        { label: 'B', text: 'Yes | No' },
        { label: 'C', text: 'No | Yes' },
        { label: 'D', text: 'No | No' }
      ],
      ans: 'A',
      explanation: 'Both limit tests (reasonableness bounds) and validity checks (matching against master files) serve as automated processing/input controls.'
    },
    {
      id: 'AT10010_Q15',
      n: 15,
      stem: 'Which of the following activities would most likely be performed in the information systems department?',
      opts: [
        { label: 'A', text: 'Initiation of changes to master records.' },
        { label: 'B', text: 'Conversion of information to machine-readable form.' },
        { label: 'C', text: 'Correction of transactional errors.' },
        { label: 'D', text: 'Initiation of changes to existing applications.' }
      ],
      ans: 'B',
      explanation: 'Data entry and conversion to machine-readable form is a standard IT operations activity; initiating changes and corrections must come from user departments.'
    },
    {
      id: 'AT10010_Q16',
      n: 16,
      stem: 'When computer programs or files can be accessed from terminals, users should be required to enter a(n)',
      opts: [
        { label: 'A', text: 'Parity check' },
        { label: 'B', text: 'Personal identification code' },
        { label: 'C', text: 'Self-diagnosis test' },
        { label: 'D', text: 'Echo check' }
      ],
      ans: 'B',
      explanation: 'User authentication via passwords or personal identification codes (PINs) controls access.'
    },
    {
      id: 'AT10010_Q17',
      n: 17,
      stem: 'Which of the following is an example of a validity check?',
      opts: [
        { label: 'A', text: 'The computer ensures that a numerical amount in a record does not exceed some predetermined amount.' },
        { label: 'B', text: 'As a computer corrects errors and data are successfully resubmitted to the system, the causes of the errors are printed out.' },
        { label: 'C', text: 'The computer flags any transmission for which the control field value did not match that of an existing file record.' },
        { label: 'D', text: 'After data for a transaction are entered, the computer sends certain data back to the terminal for comparison with data originally sent.' }
      ],
      ans: 'C',
      explanation: 'A validity check verifies that an entered key or code exists in an authorized master file (e.g. valid customer ID).'
    },
    {
      id: 'AT10010_Q18',
      n: 18,
      stem: 'A control feature in an electronic data processing system requires the central processing unit (CPU) to send signals to the printer to activate the print mechanism for each character. The print mechanism, just prior to printing, sends a signal back to the CPU verifying that the proper print position has been activated. This type of hardware control is referred to as',
      opts: [
        { label: 'A', text: 'Echo control.' },
        { label: 'B', text: 'Validity control.' },
        { label: 'C', text: 'Signal control.' },
        { label: 'D', text: 'Check digit control.' }
      ],
      ans: 'A',
      explanation: 'Echo control (or echo check) involves hardware transmitting received signals back to the source to verify accuracy of transmission.'
    },
    {
      id: 'AT10010_Q19',
      n: 19,
      stem: 'Which of the following most likely represents a significant deficiency in internal control?',
      opts: [
        { label: 'A', text: 'The systems analyst reviews applications of data processing and maintains systems documentation.' },
        { label: 'B', text: 'The systems programmer designs systems for computerized applications and maintains output controls.' },
        { label: 'C', text: 'The control clerk establishes control over data received by the information systems department and reconciles control totals after processing.' },
        { label: 'D', text: 'The accounts payable clerk prepares data for computer processing and enters the data into the computer.' }
      ],
      ans: 'B',
      explanation: 'Programmers should never have responsibility for operational controls such as output distribution; this represents an incompatible combination of duties.'
    },
    {
      id: 'AT10010_Q20',
      n: 20,
      stem: 'Internal control is ineffective when computer department personnel',
      opts: [
        { label: 'A', text: 'Participate in computer software acquisition decisions.' },
        { label: 'B', text: 'Design documentation for computerized systems.' },
        { label: 'C', text: 'Originate changes in master files.' },
        { label: 'D', text: 'Provide physical security for program files.' }
      ],
      ans: 'C',
      explanation: 'Changes in master file data (such as prices, credit limits, pay rates) must originate from user departments, never IT personnel.'
    },
    {
      id: 'AT10010_Q21',
      n: 21,
      stem: 'An auditor would most likely be concerned with which of the following controls in a distributed data processing system?',
      opts: [
        { label: 'A', text: 'Hardware controls' },
        { label: 'B', text: 'Systems documentation controls' },
        { label: 'C', text: 'Access controls' },
        { label: 'D', text: 'Disaster recovery controls' }
      ],
      ans: 'C',
      explanation: 'In distributed data processing with many network nodes, access controls are the critical defense against unauthorized transactions and data alteration.'
    },
    {
      id: 'AT10010_Q22',
      n: 22,
      stem: 'An auditor anticipates assessing control risk at a low level in a computerized environment. Under these circumstances, on which of the following activities would the auditor initially focus?',
      opts: [
        { label: 'A', text: 'Programmed control activities' },
        { label: 'B', text: 'Application control activities' },
        { label: 'C', text: 'Output control activities' },
        { label: 'D', text: 'General control activities' }
      ],
      ans: 'D',
      explanation: 'General IT controls provide the foundation for application controls; ineffective general controls undermine all application controls.'
    },
    {
      id: 'AT10010_Q23',
      n: 23,
      stem: 'Auditing by testing the input and output of a computer system instead of the computer program itself will',
      opts: [
        { label: 'A', text: 'Not detect program errors which do not show up in the output sampled.' },
        { label: 'B', text: 'Detect all program errors, regardless of the nature of the output.' },
        { label: 'C', text: 'Provide the auditor with the same type of evidence.' },
        { label: 'D', text: 'Not provide the auditor with confidence in the results of the auditing procedures.' }
      ],
      ans: 'A',
      explanation: 'Auditing around the computer cannot detect unauthorized program code or exceptions that do not appear in the specific sample examined.'
    },
    {
      id: 'AT10010_Q24',
      n: 24,
      stem: 'Which of the following client electronic data processing (EDP) systems generally can be audited without examining or directly testing the EDP computer programs of the system?',
      opts: [
        { label: 'A', text: 'A system that performs relatively uncomplicated processes and produces detailed output.' },
        { label: 'B', text: 'A system that affects a number of essential master files and produces a limited output.' },
        { label: 'C', text: 'A system that updates a few essential master files and produces no printed output other than final balances.' },
        { label: 'D', text: 'A system that performs relatively complicated processing and produces very little detailed output.' }
      ],
      ans: 'A',
      explanation: 'When processing is uncomplicated and comprehensive printouts/audit trails exist, auditing around the computer is feasible.'
    },
    {
      id: 'AT10010_Q25',
      n: 25,
      stem: 'To obtain evidence that on-line access controls are properly functioning, an auditor most likely would',
      opts: [
        { label: 'A', text: 'Create checkpoints at periodic intervals after live data processing to test for unauthorized use of the system.' },
        { label: 'B', text: 'Examine the transaction log to discover whether any transactions were lost or entered twice due to a system malfunction.' },
        { label: 'C', text: 'Enter invalid identification numbers or passwords to ascertain whether the system rejects them.' },
        { label: 'D', text: 'Vouch a random sample of processed transactions to assure proper authorization.' }
      ],
      ans: 'C',
      explanation: 'Testing invalid passwords/IDs directly verifies that access security properly denies unauthorized entry.'
    },
    {
      id: 'AT10010_Q26',
      n: 26,
      stem: 'An auditor most likely would introduce test data into a computerized payroll system to test controls related to the',
      opts: [
        { label: 'A', text: 'Existence of unclaimed payroll checks held by supervisors.' },
        { label: 'B', text: 'Early cashing of payroll checks by employees.' },
        { label: 'C', text: 'Discovery of invalid employee I.D. numbers.' },
        { label: 'D', text: 'Proper approval of overtime by supervisors.' }
      ],
      ans: 'C',
      explanation: 'Test data with invalid employee ID numbers checks whether the program\'s validity controls properly reject unauthorized numbers.'
    },
    {
      id: 'AT10010_Q27',
      n: 27,
      stem: 'When an auditor tests a computerized accounting system, which of the following is true of the test data approach?',
      opts: [
        { label: 'A', text: 'Several transactions of each type must be tested.' },
        { label: 'B', text: 'Test data are processed by the client’s computer programs under the auditor’s control.' },
        { label: 'C', text: 'Test data must consist of all possible valid and invalid conditions.' },
        { label: 'D', text: 'The program tested is different from the program used throughout the year by the client.' }
      ],
      ans: 'B',
      explanation: 'In the test data approach, auditor-created dummy data is processed through client software under auditor supervision.'
    },
    {
      id: 'AT10010_Q28',
      n: 28,
      stem: 'Which of the following computer-assisted auditing techniques allows fictitious and real transactions to be processed together without client operating personnel being aware of the testing process?',
      opts: [
        { label: 'A', text: 'Integrated test facility' },
        { label: 'B', text: 'Input controls matrix' },
        { label: 'C', text: 'Parallel simulation' },
        { label: 'D', text: 'Data entry monitor' }
      ],
      ans: 'A',
      explanation: 'An Integrated Test Facility (ITF) embeds dummy audit entities in client files, allowing simulated and live transactions to run concurrently.'
    },
    {
      id: 'AT10010_Q29',
      n: 29,
      stem: 'Which of the following methods of testing application controls utilizes a generalized audit software package prepared by the auditors?',
      opts: [
        { label: 'A', text: 'Parallel simulation' },
        { label: 'B', text: 'Integrated testing facility approach' },
        { label: 'C', text: 'Test data approach' },
        { label: 'D', text: 'Exception report tests' }
      ],
      ans: 'A',
      explanation: 'Parallel simulation reprocesses client transactions using auditor-controlled generalized audit software.'
    },
    {
      id: 'AT10010_Q30',
      n: 30,
      stem: 'In creating lead schedules for an audit engagement, a CPA often uses automated work paper software. What client information is needed to begin this process?',
      opts: [
        { label: 'A', text: 'Interim financial information such as third quarter sales, net income, and inventory and receivable balances.' },
        { label: 'B', text: 'Specialized journal information such as the invoice and purchase order numbers of the last few sales and purchases of the year.' },
        { label: 'C', text: 'General ledger information such as account numbers, prior year account balances, and current year unadjusted information.' },
        { label: 'D', text: 'Adjusting entry information such as deferrals and accruals, and reclassification journal entries.' }
      ],
      ans: 'C',
      explanation: 'General ledger chart of accounts, unadjusted trial balance, and prior year balances are the initial inputs for automated lead schedules.'
    }
  ]
};
