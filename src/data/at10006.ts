import { ModuleData } from './types';

export const at10006: ModuleData = {
  id: 'AT-10006',
  code: 'AT-10006',
  title: 'Materiality, Misstatements, Analytical Procedures, Related Parties, Internal Audit & Experts',
  standards: 'PSA 320, PSA 450, PSA 520, PSA 550, PSA 610, PSA 620',
  questionCount: 30,
  summary: 'Materiality levels (Overall, Performance, Specific), PSA 450 Accumulation and Evaluation of Misstatements (Trivial threshold, Communication with TCWG), PSA 520 Analytical Procedures (Planning, Substantive, Final Review), PSA 550 Related Parties (Inquiry, Significant Risks, Disclosures), PSA 610 Using the Work of Internal Auditors (Competence, Objectivity, Direct Assistance), and PSA 620 Using the Work of an Auditor\'s Expert.',
  lectureOutline: `### PSA 320: MATERIALITY IN PLANNING AND PERFORMING AN AUDIT
- Materiality is a matter of professional judgment, affected by the perception of the financial information needs of users.
- Applied both in **planning and performing** the audit, and in **evaluating the effect of misstatements**.

#### Three Different Levels of Materiality (AASC Bulletin 001-2010)
1. **Materiality for the Financial Statements as a Whole (Overall Materiality):**
   - Determined by identifying an appropriate benchmark (e.g. profit before tax, total revenue, gross profit, total equity, net asset value) and applying an appropriate percentage.
   - Evaluates whether proposed audit adjustments are significant.
2. **Performance Materiality:**
   - Set below overall materiality to reduce to an appropriately low level the probability that aggregate uncorrected and undetected misstatements exceed overall materiality.
   - Used for scoping financial statement line items.
3. **Specific Materiality:**
   - Amount set for particular classes of transactions, account balances, or disclosures where lesser amounts could reasonably be expected to influence economic decisions.

---

### PSA 450: EVALUATION OF MISSTATEMENTS IDENTIFIED DURING THE AUDIT
- Accumulate all misstatements identified during the audit, other than those that are **clearly trivial**.
- Request management to correct all accumulated misstatements.
- Communicate with TCWG uncorrected misstatements and their effect on the opinion.
- Request written representation from management and TCWG that effects of uncorrected misstatements are immaterial.

---

### PSA 520: ANALYTICAL PROCEDURES
Evaluations of financial information through analysis of plausible relationships among both financial and non-financial data.
- **Timing of Analytical Procedures:**
  1. *Planning Stage:* Mandatory (RAP). Focuses on enhancing understanding and identifying areas of high risk.
  2. *Substantive Testing Stage:* Optional. Used to obtain substantive evidence when more effective/efficient.
  3. *Final Review Stage:* Mandatory. Near the end of the audit to form an overall conclusion whether FS are consistent with the auditor's understanding.

---

### PSA 550: RELATED PARTIES
- Management is responsible for identifying and disclosing related parties.
- Auditor inquires of management, inspects records, and remains alert for undisclosed related parties.
- Significant related party transactions outside the normal course of business are treated as **significant risks**.

---

### PSA 610: USING THE WORK OF INTERNAL AUDITORS
- Evaluate the internal audit function's:
  1. Organizational status and policies supporting **objectivity**;
  2. Level of **competence**; and
  3. Systematic and disciplined approach (quality control).
- External auditor cannot share responsibility for the audit opinion.

---

### PSA 620: USING THE WORK OF AN AUDITOR’S EXPERT
- Expert in a field other than accounting or auditing (actuary, engineer, appraiser, lawyer).
- Evaluate competence, capabilities, and objectivity.
- Obtain agreement in writing on nature, scope, objectives, roles, confidentiality.
- The auditor shall **not refer to the work of an auditor's expert in an unmodified opinion** unless required by law. If referred to in a modified opinion, state that reference does not reduce auditor's responsibility.`,
  items: [
    {
      id: 'AT10006_Q1',
      n: 1,
      stem: 'Which of the following concepts about materiality is incorrect?',
      opts: [
        { label: 'A', text: 'Materiality is directly related to the acceptable level of detection risk.' },
        { label: 'B', text: 'Materiality does not apply if internal control is highly effective.' },
        { label: 'C', text: 'Materiality is a matter of professional audit judgment.' },
        { label: 'D', text: 'None is incorrect.' }
      ],
      ans: 'B',
      explanation: 'Materiality applies in all audits regardless of how effective internal control may be.'
    },
    {
      id: 'AT10006_Q2',
      n: 2,
      stem: 'The auditor is required to determine three different levels of materiality: (1) materiality for the financial statements as a whole, (2) performance materiality, and (3)',
      opts: [
        { label: 'A', text: 'Overall materiality' },
        { label: 'B', text: 'Planning materiality' },
        { label: 'C', text: 'General materiality' },
        { label: 'D', text: 'Specific materiality' }
      ],
      ans: 'D',
      explanation: 'Under AASC Bulletin 001-2010, the three levels are: overall materiality, performance materiality, and specific materiality.'
    },
    {
      id: 'AT10006_Q3',
      n: 3,
      stem: 'What materiality level would be considered by the auditor to determine whether the proposed adjustments are significant or not?',
      opts: [
        { label: 'A', text: 'Overall materiality' },
        { label: 'B', text: 'Scoping materiality' },
        { label: 'C', text: 'Specific materiality' },
        { label: 'D', text: 'Performance materiality' }
      ],
      ans: 'A',
      explanation: 'Overall materiality determines whether proposed audit adjustments are significant.'
    },
    {
      id: 'AT10006_Q4',
      n: 4,
      stem: 'Which of the following factors are normally considered by the auditor in determining the appropriate benchmark for the purpose of calculating overall materiality?\nI. Components of the entity’s financial statements\nII. Laws and regulations\nIII. Nature of the entity',
      opts: [
        { label: 'A', text: 'I and II only' },
        { label: 'B', text: 'I and III only' },
        { label: 'C', text: 'II and III only' },
        { label: 'D', text: 'I, II, and III' }
      ],
      ans: 'D',
      explanation: 'All of these factors influence benchmark selection for overall materiality.'
    },
    {
      id: 'AT10006_Q5',
      n: 5,
      stem: 'Which of the following statements concerning materiality is not correct?',
      opts: [
        { label: 'A', text: 'When establishing the overall audit strategy, the auditor shall determine materiality for the financial statements as a whole.' },
        { label: 'B', text: 'If, in the specific circumstances of the entity, there is one or more particular classes of transactions, account balances or disclosures for which misstatements of lesser amounts than materiality for the financial statements as a whole could reasonably be expected to influence the economic decisions of users taken on the basis of the financial statements, the auditor shall also determine the materiality level or levels to those particular classes of transactions, account balances or disclosures.' },
        { label: 'C', text: 'Determining materiality involves the exercise of professional judgment.' },
        { label: 'D', text: 'The materiality level for the financial statements as a whole determined in the planning stage of the audit should not be affected by changes in the circumstances of the engagement.' }
      ],
      ans: 'D',
      explanation: 'Materiality must be revised as the audit progresses if the auditor becomes aware of information that would have caused determination of a different amount.'
    },
    {
      id: 'AT10006_Q6',
      n: 6,
      stem: 'The concepts of audit risk and materiality are interrelated and must be considered together by the auditor. Which of the following is true?',
      opts: [
        { label: 'A', text: 'Audit risk is the risk that the auditor may unknowingly express a modified opinion when, in fact, the financial statements are fairly stated.' },
        { label: 'B', text: 'The phrase in the auditor’s report “present fairly, in all material respects, in accordance with Philippine Financial Reporting Standards” indicates the auditor’s belief that the financial statements as a whole are not materially misstated.' },
        { label: 'C', text: 'If misstatements are not important individually but are important in the aggregate, the concept of materiality does not apply.' },
        { label: 'D', text: 'Material fraud but not material errors cause financial statements to be materially misstated.' }
      ],
      ans: 'B',
      explanation: 'The phrase "present fairly, in all material respects" explicitly communicates the auditor\'s opinion regarding the absence of material misstatements.'
    },
    {
      id: 'AT10006_Q7',
      n: 7,
      stem: 'In evaluating the fair presentation of the financial statements, the auditor should assess whether the aggregate of uncorrected misstatements that have been identified during the audit is material. The aggregate of uncorrected misstatements comprises\nI. Specific misstatements identified by the auditor including the net effect of uncorrected misstatements identified during the audit of previous period.\nII. The auditor’s best estimate of other misstatements which cannot be specifically identified.',
      opts: [
        { label: 'A', text: 'I only.' },
        { label: 'B', text: 'II only.' },
        { label: 'C', text: 'Both I and II.' },
        { label: 'D', text: 'Neither I nor II.' }
      ],
      ans: 'C',
      explanation: 'Aggregate uncorrected misstatements comprises identified specific misstatements plus projected/estimated unidentifiable misstatements.'
    },
    {
      id: 'AT10006_Q8',
      n: 8,
      stem: 'A client decides not to correct misstatements communicated by the auditor that collectively are not material and wants the auditor to issue the report based on the uncorrected numbers. Which of the following statements is correct regarding the financial statement presentation?',
      opts: [
        { label: 'A', text: 'The financial statements are free from material misstatement, and no disclosure is required in the notes to the financial statements.' },
        { label: 'B', text: 'The financial statements are not in accordance with the applicable financial reporting framework.' },
        { label: 'C', text: 'The financial statements contain uncorrected misstatements that should result in a qualified opinion.' },
        { label: 'D', text: 'The financial statements are free of material misstatement, but the disclosure of the proposed adjustments is required in the notes to the financial statements.' }
      ],
      ans: 'A',
      explanation: 'Because the uncorrected misstatements are immaterial, the financial statements remain free of material misstatement and no note disclosure is required.'
    },
    {
      id: 'AT10006_Q9',
      n: 9,
      stem: 'For audits of financial statements made in accordance with PSAs, the use of analytical procedures is required to some extent:\nIn Planning Stage | As Substantive Test | In Final Review Stage',
      opts: [
        { label: 'A', text: 'No | Yes | Yes' },
        { label: 'B', text: 'Yes | Yes | No' },
        { label: 'C', text: 'Yes | No | Yes' },
        { label: 'D', text: 'No | No | No' }
      ],
      ans: 'C',
      explanation: 'Analytical procedures are mandatory in the Planning stage (PSA 315) and Final Review stage (PSA 520); they are optional as substantive tests.'
    },
    {
      id: 'AT10006_Q10',
      n: 10,
      stem: 'Analytical procedures used in planning an audit should focus on identifying',
      opts: [
        { label: 'A', text: 'Material weaknesses of internal control.' },
        { label: 'B', text: 'The predictability of financial data from individual transactions.' },
        { label: 'C', text: 'The various assertions that are embodied in the financial statements.' },
        { label: 'D', text: 'Areas that may represent specific risks relevant to the audit.' }
      ],
      ans: 'D',
      explanation: 'Planning analytical procedures identify unusual transactions and areas representing specific risks relevant to the audit.'
    },
    {
      id: 'AT10006_Q11',
      n: 11,
      stem: 'Which of the following statements concerning analytical procedures is true?',
      opts: [
        { label: 'A', text: 'Analytical procedures may be omitted entirely for some financial statement audits.' },
        { label: 'B', text: 'Analytical procedures used in planning the audit should not use nonfinancial information.' },
        { label: 'C', text: 'Analytical procedures usually are effective and efficient for tests of controls.' },
        { label: 'D', text: 'Analytical procedures alone may provide the appropriate level of assurance for some assertions.' }
      ],
      ans: 'D',
      explanation: 'Substantive analytical procedures alone can provide sufficient appropriate evidence for predictable accounts.'
    },
    {
      id: 'AT10006_Q12',
      n: 12,
      stem: 'Which of the following would not be considered an analytical procedure?',
      opts: [
        { label: 'A', text: 'Estimating payroll expense by multiplying the number of employees by the average hourly wage rate and the total hours worked.' },
        { label: 'B', text: 'Projecting an error rate by comparing the results of a statistical sample with the actual population characteristics.' },
        { label: 'C', text: 'Computing accounts receivable turnover by dividing credit sales by the average net receivables.' },
        { label: 'D', text: 'Developing the expected sales based on the sales trend of the prior five years.' }
      ],
      ans: 'B',
      explanation: 'Projecting an error rate from a statistical sample is an audit sampling procedure, not an analytical procedure.'
    },
    {
      id: 'AT10006_Q13',
      n: 13,
      stem: 'Which of the following procedures would an auditor most likely perform in planning a financial statement audit?',
      opts: [
        { label: 'A', text: 'Inquiring of the client’s legal counsel concerning pending litigation.' },
        { label: 'B', text: 'Comparing the financial statements with anticipated results.' },
        { label: 'C', text: 'Examining computer-generated exception reports to verify the effectiveness of internal control.' },
        { label: 'D', text: 'Searching for unauthorized transactions that may aid in detecting unrecorded liabilities.' }
      ],
      ans: 'B',
      explanation: 'Comparing financial statements with budgeted/anticipated results is an analytical procedure performed during planning.'
    },
    {
      id: 'AT10006_Q14',
      n: 14,
      stem: 'Analytical procedures may be classified as being primarily',
      opts: [
        { label: 'A', text: 'Tests of controls.' },
        { label: 'B', text: 'Substantive tests.' },
        { label: 'C', text: 'Tests of ratios.' },
        { label: 'D', text: 'Tests of details of balances.' }
      ],
      ans: 'B',
      explanation: 'Analytical procedures are classified primarily as substantive procedures.'
    },
    {
      id: 'AT10006_Q15',
      n: 15,
      stem: 'The primary objective of analytical procedures used in the overall review stage of an audit is to',
      opts: [
        { label: 'A', text: 'Obtain evidence from details testing to corroborate particular assertions.' },
        { label: 'B', text: 'Identify areas that represent specific risks relevant to the audit.' },
        { label: 'C', text: 'Assist the auditor in assessing the validity of the conclusions reached.' },
        { label: 'D', text: 'Satisfy doubts when questions arise about a client’s ability to continue in existence.' }
      ],
      ans: 'C',
      explanation: 'In the overall review stage, analytical procedures assist in assessing the validity of audit conclusions reached.'
    },
    {
      id: 'AT10006_Q16',
      n: 16,
      stem: 'Analytical procedures used in the overall review stage of an audit generally include',
      opts: [
        { label: 'A', text: 'Considering unusual or unexpected account balances that were not previously identified.' },
        { label: 'B', text: 'Performing tests of transactions to corroborate management’s financial statement assertions.' },
        { label: 'C', text: 'Gathering evidence concerning account balances that have not changed from the prior year.' },
        { label: 'D', text: 'Retesting controls that appeared to be ineffective during the assessment of control risk.' }
      ],
      ans: 'A',
      explanation: 'Overall review analytical procedures help identify previously unrecognized risks or unexpected balances.'
    },
    {
      id: 'AT10006_Q17',
      n: 17,
      stem: 'When auditing related party transactions, an auditor places primary emphasis on',
      opts: [
        { label: 'A', text: 'Confirming the existence of the related parties.' },
        { label: 'B', text: 'Verifying the valuation of the related party transactions.' },
        { label: 'C', text: 'Evaluating the disclosure of the related party transactions.' },
        { label: 'D', text: 'Ascertaining the rights and obligations of the related parties.' }
      ],
      ans: 'C',
      explanation: 'Primary emphasis is placed on adequacy of disclosure because related party transactions cannot be presumed to be at arm\'s length.'
    },
    {
      id: 'AT10006_Q18',
      n: 18,
      stem: 'Which of the following auditing procedures most likely would assist an auditor in identifying related party transactions?',
      opts: [
        { label: 'A', text: 'Inspecting correspondence with lawyers for evidence of unreported contingent liabilities.' },
        { label: 'B', text: 'Vouching accounting records for recurring transactions recorded just after the balance sheet date.' },
        { label: 'C', text: 'Reviewing confirmations of loans receivable and payable for indications of guarantees.' },
        { label: 'D', text: 'Performing analytical procedures for indications of possible financial difficulties.' }
      ],
      ans: 'C',
      explanation: 'Guarantees on loans receivable/payable often indicate related party relationships.'
    },
    {
      id: 'AT10006_Q19',
      n: 19,
      stem: 'Which of the following most likely would indicate the existence of related parties?',
      opts: [
        { label: 'A', text: 'Writing down obsolete inventory just before year-end.' },
        { label: 'B', text: 'Failing to correct previously identified internal control deficiencies.' },
        { label: 'C', text: 'Depending on a single product for the success of the entity.' },
        { label: 'D', text: 'Borrowing money at an interest rate significantly below the market rate.' }
      ],
      ans: 'D',
      explanation: 'Borrowing at terms significantly non-market (such as unusually low interest rates) indicates related party transactions.'
    },
    {
      id: 'AT10006_Q20',
      n: 20,
      stem: 'After determining that a related party transaction has, in fact, occurred an auditor should',
      opts: [
        { label: 'A', text: 'Substantiate that related party transactions were consummated on terms equivalent to those that prevail in arm’s-length transactions.' },
        { label: 'B', text: 'Perform analytical procedures to verify whether similar transactions have occurred, but were not recorded.' },
        { label: 'C', text: 'Obtain an understanding of the purpose of the transaction.' },
        { label: 'D', text: 'Determine whether a particular transaction would have occurred if the parties had not been related.' }
      ],
      ans: 'C',
      explanation: 'The auditor must obtain an understanding of the business purpose and rationale of the related party transaction.'
    },
    {
      id: 'AT10006_Q21',
      n: 21,
      stem: 'Which of the following are included in the activities of the internal audit function?\nI. Monitoring of internal control.\nII. Examination of financial and operating information.\nIII. Review of operating activities.',
      opts: [
        { label: 'A', text: 'I and II only' },
        { label: 'B', text: 'I and III only' },
        { label: 'C', text: 'II and III only' },
        { label: 'D', text: 'I, II, and III' }
      ],
      ans: 'D',
      explanation: 'Internal audit activities include monitoring control, examining information, and reviewing operational activities.'
    },
    {
      id: 'AT10006_Q22',
      n: 22,
      stem: 'The external auditor should obtain a sufficient understanding of the internal audit function because',
      opts: [
        { label: 'A', text: 'The understanding of the internal audit function is an important substantive test to be performed by the external auditor.' },
        { label: 'B', text: 'The audit programs, working papers, and reports of internal auditors may often be used as a substitute for the work of the external auditor’s staff.' },
        { label: 'C', text: 'The procedures performed by the internal audit staff may eliminate the external auditor’s need for considering internal control.' },
        { label: 'D', text: 'The work performed by internal auditors may be a factor in determining the nature, timing, and extent of the external auditor’s procedures.' }
      ],
      ans: 'D',
      explanation: 'Internal audit work influences the nature, timing, and extent of external audit procedures.'
    },
    {
      id: 'AT10006_Q23',
      n: 23,
      stem: 'If the external auditor decides that it is efficient to consider how the work performed by the internal auditors may affect the nature, timing, and extent of audit procedures, he/she should assess the internal auditors’',
      opts: [
        { label: 'A', text: 'Efficiency and experience' },
        { label: 'B', text: 'Independence and review skills' },
        { label: 'C', text: 'Training and supervisory skills' },
        { label: 'D', text: 'Competence and objectivity' }
      ],
      ans: 'D',
      explanation: 'Under PSA 610, the primary criteria are competence and objectivity (plus systematic/disciplined approach).'
    },
    {
      id: 'AT10006_Q24',
      n: 24,
      stem: 'Which of the following factors should an external auditor obtain updated information about when assessing an internal auditor’s competence?',
      opts: [
        { label: 'A', text: 'The reporting status of the internal auditor within the organization.' },
        { label: 'B', text: 'The educational level and professional experiences of the internal auditor.' },
        { label: 'C', text: 'Whether policies prohibit the internal auditor from auditing areas where relatives are employed.' },
        { label: 'D', text: 'Whether the board of directors, audit committee, or owner-manager oversees employment decisions related to the internal auditor.' }
      ],
      ans: 'B',
      explanation: 'Educational level, certifications, and professional experience are indicators of competence.'
    },
    {
      id: 'AT10006_Q25',
      n: 25,
      stem: 'Which of the following is an incorrect statement concerning the relationship of the internal auditor and the scope of the external audit of an entity’s financial statements?',
      opts: [
        { label: 'A', text: 'The external auditor is not required to give consideration to the internal audit function beyond obtaining a sufficient understanding to identify and assess the risks of material misstatement of the financial statements and to design and perform further audit procedures.' },
        { label: 'B', text: 'The internal auditors may determine the extent to which audit procedures should be employed by the external auditor.' },
        { label: 'C', text: 'Under certain circumstances, the internal auditors may assist the external auditor in performing substantive tests and tests of controls.' },
        { label: 'D', text: 'The nature, timing, and extent of the external auditor’s substantive tests may be affected by the work of internal auditors.' }
      ],
      ans: 'B',
      explanation: 'Internal auditors NEVER determine the extent of procedures employed by the external auditor.'
    },
    {
      id: 'AT10006_Q26',
      n: 26,
      stem: 'Which of the following is not an auditor’s expert upon whose work an auditor may rely?',
      opts: [
        { label: 'A', text: 'Actuary' },
        { label: 'B', text: 'Engineer' },
        { label: 'C', text: 'Appraiser' },
        { label: 'D', text: 'Internal auditor' }
      ],
      ans: 'D',
      explanation: 'An internal auditor is an employee of the client, not an "auditor\'s expert" under PSA 620.'
    },
    {
      id: 'AT10006_Q27',
      n: 27,
      stem: 'Which of the following statements is correct concerning an auditor’s use of the work of an expert?',
      opts: [
        { label: 'A', text: 'An auditor may not use an expert in the determination of physical characteristics relating to inventories.' },
        { label: 'B', text: 'If there is a material difference between an expert’s findings and the assertions in the financial statements, only an adverse opinion may be issued.' },
        { label: 'C', text: 'If an auditor believes that the determinations made by an expert are unreasonable, only a qualified opinion may be issued.' },
        { label: 'D', text: 'The work of an expert who is related to the client may be acceptable under certain circumstances.' }
      ],
      ans: 'D',
      explanation: 'An expert related to the client may be used if the auditor applies more extensive procedures to verify objectivity.'
    },
    {
      id: 'AT10006_Q28',
      n: 28,
      stem: 'Which of the following statements is correct concerning the auditor’s use of the work of an auditor’s expert?',
      opts: [
        { label: 'A', text: 'The auditor is required to perform substantive test procedures to verify the expert’s assumptions and findings.' },
        { label: 'B', text: 'The auditor should obtain an understanding of the methods and assumptions used by the expert.' },
        { label: 'C', text: 'The entity should not have an understanding of the nature of the work to be performed by the expert.' },
        { label: 'D', text: 'The expert should not have an understanding of the auditor’s corroborative use of the expert’s findings.' }
      ],
      ans: 'B',
      explanation: 'Under PSA 620, the auditor must obtain an understanding of the methods and assumptions used by the expert.'
    },
    {
      id: 'AT10006_Q29',
      n: 29,
      stem: 'If the results of the auditor’s expert’s work do not provide sufficient appropriate audit evidence or are not consistent with other audit evidence, the auditor should',
      opts: [
        { label: 'A', text: 'Report the matter to the appropriate regulatory agency of the government.' },
        { label: 'B', text: 'Resolve the matter.' },
        { label: 'C', text: 'Withdraw from the engagement.' },
        { label: 'D', text: 'Express an unqualified opinion with reference to the work of the expert.' }
      ],
      ans: 'B',
      explanation: 'The auditor must resolve inconsistencies by agreeing on further work with the expert or performing additional procedures.'
    },
    {
      id: 'AT10006_Q30',
      n: 30,
      stem: 'When issuing an unmodified auditor’s report, the auditor',
      opts: [
        { label: 'A', text: 'May refer to the work of an auditor’s expert.' },
        { label: 'B', text: 'Should refer to the work of an auditor’s expert to indicate a division of responsibility.' },
        { label: 'C', text: 'Should include in the auditor’s report the identity of the auditor’s expert and the extent of the expert’s involvement.' },
        { label: 'D', text: 'Should not refer to the expert’s work.' }
      ],
      ans: 'D',
      explanation: 'Under PSA 620, the auditor SHALL NOT refer to the work of an auditor\'s expert in an unmodified report unless required by law.'
    }
  ]
};
