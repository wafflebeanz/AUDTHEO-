import { ModuleData } from './types';

export const at10005: ModuleData = {
  id: 'AT-10005',
  code: 'AT-10005',
  title: "The Auditor's Responses to Assessed Risks (PSA 330)",
  standards: 'PSA 330',
  questionCount: 40,
  summary: 'Overall Responses at Financial Statement Level, Audit Procedures Responsive to Risks at Assertion Level (Nature, Timing, Extent), Tests of Controls (Operating Effectiveness, Dual-Purpose Tests, Rotation of Testing), Substantive Procedures (Tests of Details, Substantive Analytical Procedures), Financial Statement Closing Process, and Documentation.',
  lectureOutline: `### PSA 330: THE AUDITOR’S RESPONSES TO ASSESSED RISKS

#### Overall Responses at the Financial Statement Level
The auditor shall design and implement overall responses to address assessed RMM at the financial statement level:
- Emphasizing to the audit team the need to maintain professional skepticism.
- Assigning more experienced staff or those with special skills or using experts.
- Providing more supervision.
- Incorporating additional elements of unpredictability in the selection of further audit procedures.
- Making general changes to the nature, timing, or extent of audit procedures.

---

### Audit Procedures Responsive to Risks at the Assertion Level
In designing further audit procedures, the auditor shall:
1. Consider the reasons for the assessment given to the risk of material misstatement at the assertion level (inherent risk and control risk).
2. Obtain more persuasive evidence the higher the auditor’s assessment of risk.

#### Nature, Timing, and Extent
- **Nature:** Purpose (tests of controls or substantive procedures) and Type (inspection, observation, inquiry, confirmation, recalculation, reperformance, analytical procedures).
- **Timing:** When procedures are performed (interim vs. period-end) or period to which evidence applies.
- **Extent:** Quantity of a specific procedure (sample size).

---

### TESTS OF CONTROLS
The auditor is **required** to perform tests of controls when:
1. The auditor’s risk assessment includes an expectation of the operating effectiveness of controls; or
2. Substantive procedures alone cannot provide sufficient appropriate audit evidence at the assertion level (e.g. highly automated systems).

- **Dual-Purpose Tests:** Tests designed to evaluate operating effectiveness of controls and detect monetary misstatements at the same time (e.g. inspecting an invoice for approval while testing its pricing and mathematical accuracy).
- **Rotation Testing of Controls:** If controls have not changed and do not address significant risks, the auditor shall test operating effectiveness at least once in every **three audits**, and shall test some controls each audit.

---

### SUBSTANTIVE PROCEDURES
Irrespective of the assessed risks of material misstatement, the auditor shall design and perform substantive procedures for each material class of transactions, account balance, and disclosure.
- **Tests of details** (of transactions, balances, disclosures).
- **Substantive analytical procedures**.

#### Financial Statement Closing Process
Substantive procedures must always include:
- Agreeing or reconciling the financial statements with the underlying accounting records.
- Examining material journal entries and other adjustments made during the course of preparing the financial statements.`,
  items: [
    {
      id: 'AT10005_Q1',
      n: 1,
      stem: 'Auditors can use several types of audit procedures to test controls. Which of the following types of audit procedures is least likely to be used during tests of controls?',
      opts: [
        { label: 'A', text: 'Physical examination of assets' },
        { label: 'B', text: 'Inquiries of client personnel' },
        { label: 'C', text: 'Examination of documents, records, and reports' },
        { label: 'D', text: 'Observation of control-related activities.' }
      ],
      ans: 'A',
      explanation: 'Physical examination of assets tests existence and condition (substantive test of detail), not control effectiveness.'
    },
    {
      id: 'AT10005_Q2',
      n: 2,
      stem: 'Which of the following types of evidence will be gathered in order to test internal controls?',
      opts: [
        { label: 'A', text: 'Confirmations of accounts receivable with customers.' },
        { label: 'B', text: 'Observation of client personnel receiving inventory shipments.' },
        { label: 'C', text: 'Observation of inventory counts.' },
        { label: 'D', text: 'Inquiry of management regarding significant litigation.' }
      ],
      ans: 'B',
      explanation: 'Observing client personnel perform receiving and inspection controls directly tests the operation of controls.'
    },
    {
      id: 'AT10005_Q3',
      n: 3,
      stem: 'Control risk should be assessed in terms of',
      opts: [
        { label: 'A', text: 'Specific control procedures.' },
        { label: 'B', text: 'Types of potential fraud.' },
        { label: 'C', text: 'Financial statement assertions.' },
        { label: 'D', text: 'Control environment factors.' }
      ],
      ans: 'C',
      explanation: 'Control risk is assessed at the financial statement assertion level.'
    },
    {
      id: 'AT10005_Q4',
      n: 4,
      stem: 'Tests of controls are used to test whether controls are:',
      opts: [
        { label: 'A', text: 'Operating effectively' },
        { label: 'B', text: 'Properly documented by the client' },
        { label: 'C', text: 'Placed in operation or implemented' },
        { label: 'D', text: 'Properly incorporated in the financial statements' }
      ],
      ans: 'A',
      explanation: 'Tests of controls evaluate operating effectiveness in preventing or detecting material misstatements.'
    },
    {
      id: 'AT10005_Q5',
      n: 5,
      stem: 'Which of the following is ordinarily considered a test of internal control procedures?',
      opts: [
        { label: 'A', text: 'Send confirmation letters to banks.' },
        { label: 'B', text: 'Count and list cash on hand.' },
        { label: 'C', text: 'Examine signatures on checks.' },
        { label: 'D', text: 'Obtain or prepare reconciliation of bank accounts as of the balance sheet date.' }
      ],
      ans: 'C',
      explanation: 'Examining signatures on checks tests compliance with check signing and authorization control policies.'
    },
    {
      id: 'AT10005_Q6',
      n: 6,
      stem: 'Auditors can use several types of audit procedures to test controls. Which of the following types of audit procedures is least likely to be used during tests of controls?',
      opts: [
        { label: 'A', text: 'Physical examination of assets' },
        { label: 'B', text: 'Inquiries of client personnel' },
        { label: 'C', text: 'Examination of documents, records, and reports' },
        { label: 'D', text: 'Observation of control-related activities.' }
      ],
      ans: 'A',
      explanation: 'Physical examination of assets is primarily substantive, not a test of control.'
    },
    {
      id: 'AT10005_Q7',
      n: 7,
      stem: 'Which of the following statements is true?',
      opts: [
        { label: 'A', text: 'Tests of controls are necessary if the auditor plans to use the primarily substantive approach.' },
        { label: 'B', text: 'Tests of controls are necessary if the auditor plans to assess the level of control risk at maximum.' },
        { label: 'C', text: 'The auditor can simultaneously obtain an understanding of internal control and perform tests of controls.' },
        { label: 'D', text: 'After performing tests of controls, the auditor will always assess control risk at maximum.' }
      ],
      ans: 'C',
      explanation: 'An auditor can perform concurrent tests of controls while obtaining an understanding of internal control.'
    },
    {
      id: 'AT10005_Q8',
      n: 8,
      stem: 'As a result of control testing, a CPA has decided to reduce control risk. What is the impact on substantive testing sample size if all other factors remain constant?',
      opts: [
        { label: 'A', text: 'The sample size would be irrelevant.' },
        { label: 'B', text: 'The sample size would be higher.' },
        { label: 'C', text: 'The sample size would be lower.' },
        { label: 'D', text: 'The sample size would be unaffected.' }
      ],
      ans: 'C',
      explanation: 'Lower control risk allows higher acceptable detection risk, resulting in smaller substantive test sample sizes.'
    },
    {
      id: 'AT10005_Q9',
      n: 9,
      stem: 'The audit risk against which the auditor and those who rely on his or her opinion require reasonable protection is a combination of two separate risks at the assertion level. The first risk is that balances, classes of transactions, or disclosures contain material misstatements. The second is that',
      opts: [
        { label: 'A', text: 'The auditor will reject a correct account balance as incorrect.' },
        { label: 'B', text: 'Material misstatements that occur will not be detected by the audit.' },
        { label: 'C', text: 'The auditor will apply an inappropriate audit procedure.' },
        { label: 'D', text: 'The auditor will apply an inappropriate measure of audit materiality.' }
      ],
      ans: 'B',
      explanation: 'The two components are: risk of material misstatement occurring (IR x CR), and risk of failing to detect it (Detection Risk).'
    },
    {
      id: 'AT10005_Q10',
      n: 10,
      stem: 'The acceptable level of detection risk is inversely related to the',
      opts: [
        { label: 'A', text: 'Assurance provided by substantive tests.' },
        { label: 'B', text: 'Risk of misplaying auditing procedures.' },
        { label: 'C', text: 'Preliminary judgment about materiality levels.' },
        { label: 'D', text: 'Risk of failing to discover material misstatements.' }
      ],
      ans: 'A',
      explanation: 'As acceptable detection risk decreases, the required assurance provided by substantive tests increases.'
    },
    {
      id: 'AT10005_Q11',
      n: 11,
      stem: 'Which of the following statements about the auditor’s response to assessed risks of material misstatement in a financial statement audit is true?',
      opts: [
        { label: 'A', text: 'When the risks of material misstatement are high, an auditor should reduce the amount of substantive testing.' },
        { label: 'B', text: 'Reliance on internal control may be sufficient to allow the auditor to eliminate substantive testing for significant transaction classes.' },
        { label: 'C', text: 'When assessing the risks of material misstatement, an auditor should not consider evidence obtained in prior audits about the operation of controls.' },
        { label: 'D', text: 'Risk assessment procedures performed to obtain an understanding of an entity’s internal control also may serve as tests of controls.' }
      ],
      ans: 'D',
      explanation: 'Procedures performed to obtain an understanding of internal control may provide evidence of operating effectiveness (dual-purpose).'
    },
    {
      id: 'AT10005_Q12',
      n: 12,
      stem: 'In a financial statement audit, the auditor is required to perform tests of controls when\nI. The auditor’s risk assessment includes an expectation of the operating effectiveness of controls.\nII. When substantive procedures alone do not provide sufficient appropriate audit evidence at the assertion level.',
      opts: [
        { label: 'A', text: 'I only' },
        { label: 'B', text: 'II only' },
        { label: 'C', text: 'Either I or II' },
        { label: 'D', text: 'Neither I nor II' }
      ],
      ans: 'C',
      explanation: 'Under PSA 330, TOC is required either when relying on controls or when substantive procedures alone are insufficient.'
    },
    {
      id: 'AT10005_Q13',
      n: 13,
      stem: 'After gaining an understanding of internal control and assessing the risks of material misstatement, an auditor decided to perform tests of controls. The auditor most likely decided that',
      opts: [
        { label: 'A', text: 'Additional evidence to support a further reduction in control risk is not available.' },
        { label: 'B', text: 'It is not possible or practicable to reduce the risks of material misstatement at the assertion level to an acceptably low level with audit evidence obtained only from substantive test procedures.' },
        { label: 'C', text: 'There were many internal control weaknesses that could allow misstatements to enter the accounting system.' },
        { label: 'D', text: 'An increase in the assessed level of control risk is justified for certain financial statement assertions.' }
      ],
      ans: 'B',
      explanation: 'When substantive tests alone cannot provide sufficient evidence, tests of controls must be performed.'
    },
    {
      id: 'AT10005_Q14',
      n: 14,
      stem: 'Tests of controls are concerned primarily with each of the following questions, except',
      opts: [
        { label: 'A', text: 'By whom were the controls applied?' },
        { label: 'B', text: 'Were the necessary controls consistently performed?' },
        { label: 'C', text: 'How were the controls applied?' },
        { label: 'D', text: 'Why were the controls applied?' }
      ],
      ans: 'D',
      explanation: 'Tests of controls address How, When/Consistency, and By Whom controls were applied, not Why they were applied.'
    },
    {
      id: 'AT10005_Q15',
      n: 15,
      stem: 'How frequently must an auditor test operating effectiveness of controls that appear to function as they have in past years and on which the auditor wishes to rely in the current year?',
      opts: [
        { label: 'A', text: 'Monthly.' },
        { label: 'B', text: 'Annually.' },
        { label: 'C', text: 'At least every second audit.' },
        { label: 'D', text: 'At least every third audit.' }
      ],
      ans: 'D',
      explanation: 'Under PSA 330, controls not changing must be tested at least once in every three audits.'
    },
    {
      id: 'AT10005_Q16',
      n: 16,
      stem: 'An auditor intends to perform tests of control on a client’s cash disbursements procedures. If the control procedures leave no audit trail of documentary evidence, the auditor most likely will test the procedures by',
      opts: [
        { label: 'A', text: 'Inquiry and analytical procedures.' },
        { label: 'B', text: 'Inquiry and observation.' },
        { label: 'C', text: 'Analytical procedures and confirmation.' },
        { label: 'D', text: 'Confirmation and observation.' }
      ],
      ans: 'B',
      explanation: 'Where controls leave no documentary trail, inquiry and direct observation are the primary test procedures.'
    },
    {
      id: 'AT10005_Q17',
      n: 17,
      stem: 'Before assessing control risk at a level lower than the maximum, the auditor obtains reasonable assurance that controls are in use and operating effectively. This assurance is most likely obtained in part by',
      opts: [
        { label: 'A', text: 'Preparing flowcharts and narratives of the entity’s internal control system.' },
        { label: 'B', text: 'Performing substantive test of details of transactions and balances.' },
        { label: 'C', text: 'Analyzing tests of trends and ratios.' },
        { label: 'D', text: 'Inspection of documents.' }
      ],
      ans: 'D',
      explanation: 'Inspection of documents containing initials, approvals, or stamps provides evidence of control operation.'
    },
    {
      id: 'AT10005_Q18',
      n: 18,
      stem: 'The following statements relate to the use of audit evidence when testing the operating effectiveness of relevant controls. Which is false?',
      opts: [
        { label: 'A', text: 'An auditor who obtains sufficient appropriate audit evidence about the operating effectiveness of controls during the interim period should no longer obtain additional evidence of operating effectiveness for the remaining period.' },
        { label: 'B', text: 'An auditor may plan to use audit evidence about the operating effectiveness of controls obtained in prior audits.' },
        { label: 'C', text: 'If an auditor plans to rely on controls that have changed since they were last tested, the auditor should test the operating effectiveness of such controls in the current audit.' },
        { label: 'D', text: 'Audit evidence pertaining only to a point in time may be sufficient for the auditor’s purpose, for example, when testing controls over an entity’s physical count of inventories at year-end.' }
      ],
      ans: 'A',
      explanation: 'Testing controls at interim requires obtaining evidence for the remaining period (roll-forward).'
    },
    {
      id: 'AT10005_Q19',
      n: 19,
      stem: 'The objective of dual-purpose tests is to:',
      opts: [
        { label: 'A', text: 'Evaluate whether internal controls are operating effectively.' },
        { label: 'B', text: 'Detect material misstatements in the financial statements.' },
        { label: 'C', text: 'Identify unusual trends or patterns in comparative financial statements.' },
        { label: 'D', text: 'Test internal controls as well as transactions and balances using the same test procedures.' }
      ],
      ans: 'D',
      explanation: 'A dual-purpose test tests a control and detects monetary misstatements simultaneously.'
    },
    {
      id: 'AT10005_Q20',
      n: 20,
      stem: 'Which of the following types of evidence will be gathered in order to test internal controls?',
      opts: [
        { label: 'A', text: 'Confirmations of accounts receivable with customers.' },
        { label: 'B', text: 'Observation of client personnel receiving inventory shipments.' },
        { label: 'C', text: 'Observation of inventory counts.' },
        { label: 'D', text: 'Inquiry of management regarding significant litigation.' }
      ],
      ans: 'B',
      explanation: 'Observation of personnel receiving shipments tests compliance with receiving control procedures.'
    },
    {
      id: 'AT10005_Q21',
      n: 21,
      stem: 'An auditor may decide to assess control risk at the maximum level for certain assertions because the auditor believes',
      opts: [
        { label: 'A', text: 'Controls are unlikely to pertain to the assertions.' },
        { label: 'B', text: 'The entity’s control components are interrelated.' },
        { label: 'C', text: 'Sufficient appropriate audit evidence to support the assertions is likely to be available.' },
        { label: 'D', text: 'More emphasis on tests of controls than substantive tests is warranted.' }
      ],
      ans: 'A',
      explanation: 'If controls do not pertain to the assertion or are ineffective, control risk is assessed at maximum.'
    },
    {
      id: 'AT10005_Q22',
      n: 22,
      stem: 'Which of the following procedures most likely would be included as part of an auditor\'s tests of control procedures?',
      opts: [
        { label: 'A', text: 'Inspection' },
        { label: 'B', text: 'Reconciliation' },
        { label: 'C', text: 'Confirmation' },
        { label: 'D', text: 'Analytical procedures' }
      ],
      ans: 'A',
      explanation: 'Inspection of documents for evidence of authorization/approval is a classic test of control.'
    },
    {
      id: 'AT10005_Q23',
      n: 23,
      stem: 'The primary purpose of performing further control tests is to provide',
      opts: [
        { label: 'A', text: 'a basis for reducing the assessed level of control risk below the maximum level.' },
        { label: 'B', text: 'a basis for understanding the flow of transactions through the accounting system.' },
        { label: 'C', text: 'assurance that transactions are properly recorded.' },
        { label: 'D', text: 'all accounting control procedures leave visible evidence.' }
      ],
      ans: 'A',
      explanation: 'Tests of controls support an assessment of control risk below the maximum level.'
    },
    {
      id: 'AT10005_Q24',
      n: 24,
      stem: 'Which of the following statements is correct concerning an auditor’s assessment of control risk?',
      opts: [
        { label: 'A', text: 'Assessing control risk may be performed concurrently during an audit with obtaining an understanding of the entity’s internal control.' },
        { label: 'B', text: 'Evidence about the operation of controls in prior audits may not be considered during the current year’s assessment of control risk.' },
        { label: 'C', text: 'The basis for an auditor’s conclusions about the assessed level of control risk need not be documented unless control risk is assessed at the maximum level.' },
        { label: 'D', text: 'The lower the assessed level of control risk, the less assurance the evidence must provide that the controls are operating effectively.' }
      ],
      ans: 'A',
      explanation: 'Control risk assessment and obtaining an understanding of internal control may be performed concurrently.'
    },
    {
      id: 'AT10005_Q25',
      n: 25,
      stem: 'On the basis of audit evidence gathered and evaluated, an auditor decides to increase the assessed level of control risk from that originally planned. To achieve an overall audit risk level that is substantially the same as the planned audit risk level, the auditor would',
      opts: [
        { label: 'A', text: 'Increase inherent risk.' },
        { label: 'B', text: 'Increase materiality level.' },
        { label: 'C', text: 'Decrease inherent risk.' },
        { label: 'D', text: 'Decrease detection risk.' }
      ],
      ans: 'D',
      explanation: 'When control risk increases, acceptable detection risk must decrease to keep overall audit risk constant.'
    },
    {
      id: 'AT10005_Q26',
      n: 26,
      stem: 'When an auditor increases the planned assessed level of control risk because certain controls were determined to be ineffective, the auditor would most likely increase the',
      opts: [
        { label: 'A', text: 'Extent of tests of details.' },
        { label: 'B', text: 'Level of inherent risk.' },
        { label: 'C', text: 'Extent of tests of controls.' },
        { label: 'D', text: 'Level of detection risk.' }
      ],
      ans: 'A',
      explanation: 'Higher control risk requires more extensive substantive tests of details.'
    },
    {
      id: 'AT10005_Q27',
      n: 27,
      stem: 'Regardless of the assessed level of control risk, an auditor would perform some',
      opts: [
        { label: 'A', text: 'Tests of controls to determine the effectiveness of internal control policies.' },
        { label: 'B', text: 'Analytical procedures to verify the design of internal control procedures.' },
        { label: 'C', text: 'Substantive tests to restrict detection risk for significant transaction classes.' },
        { label: 'D', text: 'Dual-purpose tests to evaluate both the risk of monetary misstatement and preliminary control risk.' }
      ],
      ans: 'C',
      explanation: 'The auditor must perform some substantive procedures for all significant transaction classes and balances regardless of assessed control risk.'
    },
    {
      id: 'AT10005_Q28',
      n: 28,
      stem: 'The objective of tests of details of transactions that are being performed as tests of controls procedures is to',
      opts: [
        { label: 'A', text: 'monitor the design and use of entity documents such as pre-numbered shipping form.' },
        { label: 'B', text: 'determine whether controls have been placed in operation.' },
        { label: 'C', text: 'detect material misstatements in the account balances in the financial statements.' },
        { label: 'D', text: 'evaluate whether controls operate effectively.' }
      ],
      ans: 'D',
      explanation: 'When performed as test of control procedures, the objective is to evaluate operating effectiveness of controls.'
    },
    {
      id: 'AT10005_Q29',
      n: 29,
      stem: 'For a particular assertion, control risk is the risk that',
      opts: [
        { label: 'A', text: 'controls will not detect a material misstatement that occurs.' },
        { label: 'B', text: 'audit procedures will fail to detect a weak control system.' },
        { label: 'C', text: 'the prescribed control procedures will not be applied uniformly.' },
        { label: 'D', text: 'a material misstatement will occur in the accounting process.' }
      ],
      ans: 'A',
      explanation: 'Control risk is the risk that internal controls will not prevent or detect and correct a material misstatement.'
    },
    {
      id: 'AT10005_Q30',
      n: 30,
      stem: 'If the results of the auditor\'s tests of controls induce the auditor to change the assessed level of control risk for inventory from 0.2 to 0.4 and audit risk and inherent risk remain constant, what is the effect on the acceptable level of detection risk?',
      opts: [
        { label: 'A', text: 'A change in detection risk cannot be calculated because audit risk and inherent risk values are not given.' },
        { label: 'B', text: 'Detection risk would increase from 0.3 to 0.6.' },
        { label: 'C', text: 'Detection risk would decrease from 0.4 to 0.2.' },
        { label: 'D', text: 'Detection risk would not change since audit risk and inherent risk do not change.' }
      ],
      ans: 'C',
      explanation: 'Since AR = IR x CR x DR, doubling CR from 0.2 to 0.4 halves acceptable DR (e.g. from 0.4 to 0.2).'
    },
    {
      id: 'AT10005_Q31',
      n: 31,
      stem: 'During the consideration of a small business client’s internal control, the auditor discovered that the accounts receivable clerk approves credit memos and has access to cash. Which of the following controls would be most effective in offsetting this weakness?',
      opts: [
        { label: 'A', text: 'The controller reconciles the total of the detail accounts receivable accounts to the amount shown in the ledger.' },
        { label: 'B', text: 'The controller receives the monthly bank statement directly and reconciles the checking accounts.' },
        { label: 'C', text: 'The owner reviews errors in billings to customers and postings to the subsidiary ledger.' },
        { label: 'D', text: 'The owner reviews credit memos after they are recorded.' }
      ],
      ans: 'D',
      explanation: 'Owner review of credit memos compensates for the incompatible duties of approving credit memos and handling cash.'
    },
    {
      id: 'AT10005_Q32',
      n: 32,
      stem: 'Which of the following is ordinarily considered a test of internal control procedures?',
      opts: [
        { label: 'A', text: 'Send confirmation letters to banks.' },
        { label: 'B', text: 'Count and list cash on hand.' },
        { label: 'C', text: 'Examine signatures on checks.' },
        { label: 'D', text: 'Obtain or prepare reconciliation of bank accounts as of the balance sheet date.' }
      ],
      ans: 'C',
      explanation: 'Examine signatures on checks verifies proper authorization (test of control).'
    },
    {
      id: 'AT10005_Q33',
      n: 33,
      stem: 'Which of the following procedures would an auditor most likely perform to test controls relating to management’s assertion concerning the completeness of sales transactions?',
      opts: [
        { label: 'A', text: 'Verify that extensions and footings on the entity’s sales invoices and monthly customer statements have been recomputed.' },
        { label: 'B', text: 'Compare the invoiced prices on prenumbered sales invoices to the entity’s authorized price list.' },
        { label: 'C', text: 'Inquire about the entity’s credit granting policies and the consistent application of credit checks.' },
        { label: 'D', text: 'Inspect the entity’s reports of prenumbered shipping documents that have not been recorded in the sales journal.' }
      ],
      ans: 'D',
      explanation: 'Inspecting unrecorded shipping documents detects unbilled/unrecorded sales, testing completeness.'
    },
    {
      id: 'AT10005_Q34',
      n: 34,
      stem: 'Which of the following tests of controls most likely would help assure an auditor that goods shipped are properly billed?',
      opts: [
        { label: 'A', text: 'Scan the sales journal for sequential and unusual entries.' },
        { label: 'B', text: 'Examine shipping documents for matching sales invoices.' },
        { label: 'C', text: 'Compare the accounts receivable ledger to daily sales summaries.' },
        { label: 'D', text: 'Inspect unused sales invoices for consecutive prenumbering.' }
      ],
      ans: 'B',
      explanation: 'Tracing shipping documents forward to matching sales invoices ensures shipped items were billed.'
    },
    {
      id: 'AT10005_Q35',
      n: 35,
      stem: 'An auditor is least likely to test controls that provide for',
      opts: [
        { label: 'A', text: 'Approval of the purchase and sale of trading securities.' },
        { label: 'B', text: 'Classification of revenue and expense transactions by product line.' },
        { label: 'C', text: 'Segregation of the functions of recording disbursements and reconciling the bank account.' },
        { label: 'D', text: 'Comparison of receiving reports and vendors’ invoices with purchase orders.' }
      ],
      ans: 'B',
      explanation: 'Detailed classification by product line is largely management/operational reporting, less critical to basic FS assertions.'
    },
    {
      id: 'AT10005_Q36',
      n: 36,
      stem: 'Which of the following procedures concerning accounts receivable would an auditor most likely perform to obtain evidential matter in support of an assessed level of controls risk below the maximum level?',
      opts: [
        { label: 'A', text: 'Observing an entity’s employee prepare the schedule of past due accounts receivable.' },
        { label: 'B', text: 'Sending confirmation requests to an entity’s principal customers to verify the existence of accounts receivable.' },
        { label: 'C', text: 'Inspecting an entity’s analysis of accounts receivable for unusual balances.' },
        { label: 'D', text: 'Comparing an entity’s uncollectible accounts expense to actual uncollectible accounts receivable.' }
      ],
      ans: 'A',
      explanation: 'Observing employee performance of control activities provides evidence of control operation below maximum.'
    },
    {
      id: 'AT10005_Q37',
      n: 37,
      stem: 'An internal control questionnaire indicates that an approved receiving report is required to accompany every check request for payment of merchandise. Which of the following procedures provides the greatest assurance that this control is operating effectively?',
      opts: [
        { label: 'A', text: 'Select and examine receiving reports and ascertain that the related canceled checks are dated no earlier than the receiving reports.' },
        { label: 'B', text: 'Select and examine receiving reports and ascertain that the related canceled checks are dated no later than the receiving reports.' },
        { label: 'C', text: 'Select and examine canceled checks and ascertain that the related receiving reports are dated no earlier than the checks.' },
        { label: 'D', text: 'Select and examine canceled checks and ascertain that the related receiving reports are dated no later than the checks.' }
      ],
      ans: 'D',
      explanation: 'Sampling cancelled checks and verifying receiving reports exist and are dated prior to/no later than the checks.'
    },
    {
      id: 'AT10005_Q38',
      n: 38,
      stem: 'An auditor uses the knowledge provided by the understanding of internal control and the final assessed level of control risk primarily to determine the nature, timing, and extent of the',
      opts: [
        { label: 'A', text: 'Attribute tests' },
        { label: 'B', text: 'Compliance tests' },
        { label: 'C', text: 'Tests of controls' },
        { label: 'D', text: 'Substantive tests' }
      ],
      ans: 'D',
      explanation: 'The final assessed level of control risk dictates the nature, timing, and extent of substantive tests.'
    },
    {
      id: 'AT10005_Q39',
      n: 39,
      stem: 'When there are numerous property and equipment transactions during the year, an auditor who plans to assess control risk at a low level usually performs',
      opts: [
        { label: 'A', text: 'Tests of controls and extensive tests of property and equipment balances at the end of the year.' },
        { label: 'B', text: 'Analytical procedures for current year property and equipment transactions.' },
        { label: 'C', text: 'Tests of controls and limited tests of current year property and equipment transactions.' },
        { label: 'D', text: 'Analytical procedures for property and equipment balances at the end of the year.' }
      ],
      ans: 'C',
      explanation: 'Assessing CR low allows performing tests of controls and limited tests of current year transactions.'
    },
    {
      id: 'AT10005_Q40',
      n: 40,
      stem: 'Tests of controls are least likely to be omitted with regard to',
      opts: [
        { label: 'A', text: 'Accounts believed to be subject to ineffective controls.' },
        { label: 'B', text: 'Accounts representing few transactions.' },
        { label: 'C', text: 'Accounts representing many transactions.' },
        { label: 'D', text: 'Subsequent events.' }
      ],
      ans: 'C',
      explanation: 'High transaction volume accounts benefit most from reliance on controls to achieve audit efficiency.'
    }
  ]
};
