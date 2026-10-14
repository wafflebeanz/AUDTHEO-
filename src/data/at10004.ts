import { ModuleData } from './types';

export const at10004: ModuleData = {
  id: 'AT-10004',
  code: 'AT-10004',
  title: 'Audit Planning (PSA 300) & Assessing Risks of Material Misstatement (PSA 315)',
  standards: 'PSA 300, PSA 315 (Revised 2019)',
  questionCount: 60,
  summary: 'Overall Audit Strategy vs Audit Plan, Preliminary Engagement Activities, Direction/Supervision/Review, PSA 315 Risk Assessment Procedures, Understanding the Entity and its Environment, System of Internal Control, 5 Components of Internal Control (Control Environment, Risk Assessment, Information System & Communication, Control Activities, Monitoring), Significant Risks, and Cycles (Revenue, Purchases, Inventory, Payroll).',
  lectureOutline: `### PSA 300: PLANNING AN AUDIT OF FINANCIAL STATEMENTS
Planning an audit involves:
1. **Establishing the overall audit strategy:** Sets the scope, timing, and direction of the audit, guides development of the more detailed audit plan, determines resources necessary.
2. **Developing an audit plan:** More detailed than the strategy. Describes the nature, timing, and extent of:
   - Planned risk assessment procedures (PSA 315)
   - Planned further audit procedures at the assertion level (PSA 330)
   - Other planned audit procedures required by PSAs

#### Direction, Supervision, and Review
The nature, timing, and extent depend on:
- Size and complexity of the entity
- Area of the audit
- Assessed risk of material misstatement (higher RMM requires more extensive/experienced supervision)
- Capabilities and competence of individual team members

---

### PSA 315 (REVISED 2019): IDENTIFYING AND ASSESSING RISKS OF MATERIAL MISSTATEMENT
#### Objective
To identify and assess risks of material misstatement, whether due to fraud or error, at the financial statement and assertion levels, thereby providing a basis for designing and implementing responses (PSA 330).

#### Risk Assessment Procedures (RAP)
1. Inquiries of management and appropriate individuals (including internal audit).
2. Analytical procedures (as risk assessment / preliminary stage).
3. Observation and inspection.
*(Note: RAP does not include substantive testing or tests of controls).*

#### 5 Components of the Entity's System of Internal Control
1. **Control Environment:** Governance and management functions, attitudes, awareness, and actions concerning internal control ("tone at the top").
2. **Entity’s Risk Assessment Process:** Identifying business risks relevant to financial reporting, estimating significance, assessing likelihood, deciding actions.
3. **Information System and Communication:** Classes of significant transactions, procedures within IT and manual systems, accounting records, reporting process, and communication of roles.
4. **Control Activities:** Policies and procedures helping ensure management directives are carried out:
   - Authorization
   - Performance reviews
   - Information processing
   - Physical controls
   - Segregation of duties (custody, authorization, recording, reconciliation)
5. **Monitoring of Controls:** Assessing design and operation of controls on a timely basis and taking corrective actions.

#### Definition of Significant Risk
An identified and assessed risk of material misstatement that, in the auditor's judgment, requires special audit consideration (e.g., fraud risk, complex/unusual transactions, significant related party transactions).`,
  items: [
    {
      id: 'AT10004_Q1',
      n: 1,
      stem: 'Adequate planning of the audit work helps to ensure that:\n• Appropriate attention is devoted to important areas of the audit\n• Potential problems are identified\n• The work is completed expeditiously',
      opts: [
        { label: 'A', text: 'Yes | Yes | No' },
        { label: 'B', text: 'No | Yes | Yes' },
        { label: 'C', text: 'Yes | Yes | Yes' },
        { label: 'D', text: 'No | No | No' }
      ],
      ans: 'C',
      explanation: 'Adequate audit planning ensures important areas receive attention, problems are identified, and work is completed expeditiously.'
    },
    {
      id: 'AT10004_Q2',
      n: 2,
      stem: 'Which of the following matters should be considered by the auditor in developing the overall audit strategy?',
      opts: [
        { label: 'A', text: 'Important characteristics of the entity, its business, its financial performance and its reporting requirements including changes since the date of the prior audit.' },
        { label: 'B', text: 'Conditions requiring special attention, such as the existence of related parties.' },
        { label: 'C', text: 'The setting of materiality levels for audit purposes.' },
        { label: 'D', text: 'All of the above.' }
      ],
      ans: 'D',
      explanation: 'All of these factors are considered when establishing the overall audit strategy.'
    },
    {
      id: 'AT10004_Q3',
      n: 3,
      stem: 'An auditor should design the audit plan so that',
      opts: [
        { label: 'A', text: 'All material transactions will be selected for substantive testing.' },
        { label: 'B', text: 'Substantive tests prior to the balance sheet date will be minimized.' },
        { label: 'C', text: 'The audit procedures selected will achieve specific audit objectives.' },
        { label: 'D', text: 'Each account balance will be tested under either tests of controls or tests of transactions.' }
      ],
      ans: 'C',
      explanation: 'Audit procedures in the plan are designed to achieve specific audit objectives responsive to assessed risks.'
    },
    {
      id: 'AT10004_Q4',
      n: 4,
      stem: 'Audit plans should be designed so that',
      opts: [
        { label: 'A', text: 'Most of the required procedures can be performed as interim work.' },
        { label: 'B', text: 'Inherent risk is assessed at a sufficiently low level.' },
        { label: 'C', text: 'The auditor can make constructive suggestions to management.' },
        { label: 'D', text: 'The audit evidence gathered supports the auditor’s conclusions.' }
      ],
      ans: 'D',
      explanation: 'The audit plan ensures sufficient appropriate audit evidence is gathered to support the audit conclusions.'
    },
    {
      id: 'AT10004_Q5',
      n: 5,
      stem: 'An audit program provides a proof that',
      opts: [
        { label: 'A', text: 'sufficient competent evidential matter is obtained.' },
        { label: 'B', text: 'the work is adequately planned.' },
        { label: 'C', text: 'there is compliance with generally accepted standards of reporting.' },
        { label: 'D', text: 'there is a proper study and evaluation of internal control.' }
      ],
      ans: 'B',
      explanation: 'An audit program (audit plan) serves as written proof of adequate audit planning.'
    },
    {
      id: 'AT10004_Q6',
      n: 6,
      stem: 'An auditor most likely obtains an understanding of a new client to',
      opts: [
        { label: 'A', text: 'Make constructive suggestions concerning improvements to the client’s internal control.' },
        { label: 'B', text: 'Develop an attitude of professional skepticism concerning management’s financial statement assertions.' },
        { label: 'C', text: 'Evaluate whether the aggregation of known misstatements causes the financial statements taken as a whole to be materially misstated.' },
        { label: 'D', text: 'Identify areas of audit emphasis.' }
      ],
      ans: 'D',
      explanation: 'Understanding the client identifies risks and determines areas of audit emphasis.'
    },
    {
      id: 'AT10004_Q7',
      n: 7,
      stem: 'Which of the following procedures is the auditor most likely to perform after accepting an initial audit engagement?',
      opts: [
        { label: 'A', text: 'Prepare a rough draft of the financial statements and of the auditor’s report.' },
        { label: 'B', text: 'Assess control risk for the assertions embodied in the financial statements.' },
        { label: 'C', text: 'Tour the client’s facilities.' },
        { label: 'D', text: 'Consult with and review the work of the predecessor auditor prior to discussing the engagement with the client management.' }
      ],
      ans: 'C',
      explanation: 'Touring client facilities early in the planning stage provides immediate physical insight into business operations and controls.'
    },
    {
      id: 'AT10004_Q8',
      n: 8,
      stem: 'PSA 315 (Identifying and Assessing the Risks of Material Misstatement through Understanding the Entity and its Environment) requires the auditor to perform risk assessment procedures at',
      opts: [
        { label: 'A', text: 'The financial statement level only.' },
        { label: 'B', text: 'The assertion level only.' },
        { label: 'C', text: 'The financial statement level and the assertion level for classes of transactions, account balances and disclosures.' },
        { label: 'D', text: 'Either the financial statement or assertion level.' }
      ],
      ans: 'C',
      explanation: 'Risks must be identified and assessed at both the financial statement level and assertion level.'
    },
    {
      id: 'AT10004_Q9',
      n: 9,
      stem: 'The auditor’s risk assessment procedures should always include the following, except',
      opts: [
        { label: 'A', text: 'Inquiries of management and of others within the entity.' },
        { label: 'B', text: 'Analytical procedures.' },
        { label: 'C', text: 'Observation and inspection.' },
        { label: 'D', text: 'Substantive test procedures and tests of controls.' }
      ],
      ans: 'D',
      explanation: 'Substantive tests and tests of controls are further audit procedures (PSA 330), not risk assessment procedures (PSA 315).'
    },
    {
      id: 'AT10004_Q10',
      n: 10,
      stem: 'The auditor should obtain an understanding of the entity’s objectives and strategies, and those business risks that may result in risks of material misstatement. Which of the following statements concerning the entity’s business risk is incorrect?',
      opts: [
        { label: 'A', text: 'Business risk is broader than the risk of material misstatement of the financial statements, though it includes the latter.' },
        { label: 'B', text: 'An understanding of the business risks facing the entity increases the likelihood of identifying risks of material misstatement.' },
        { label: 'C', text: 'The auditor has a responsibility to identify or assess all business risks.' },
        { label: 'D', text: 'Business risk may arise from the development of new products or services that may fail.' }
      ],
      ans: 'C',
      explanation: 'The auditor does NOT have a responsibility to identify or assess all business risks, only those that may result in risks of material misstatement.'
    },
    {
      id: 'AT10004_Q11',
      n: 11,
      stem: 'The objective of performing analytical procedures as risk assessment procedures in an audit is to identify',
      opts: [
        { label: 'A', text: 'Unusual transactions and events.' },
        { label: 'B', text: 'Noncompliance with laws and regulations that went undetected because of internal control weaknesses.' },
        { label: 'C', text: 'Relate party transactions.' },
        { label: 'D', text: 'Recorded transactions that were properly authorized.' }
      ],
      ans: 'A',
      explanation: 'Preliminary analytical procedures identify unusual transactions, events, amounts, ratios and trends that indicate potential risks.'
    },
    {
      id: 'AT10004_Q12',
      n: 12,
      stem: 'A measure of how willing the auditor is to accept that the financial statements may be materially misstated after the audit is completed and an unmodified opinion has been issued is the',
      opts: [
        { label: 'A', text: 'Inherent risk.' },
        { label: 'B', text: 'Acceptable audit risk.' },
        { label: 'C', text: 'Control risk.' },
        { label: 'D', text: 'Detection risk.' }
      ],
      ans: 'B',
      explanation: 'This is the definition of acceptable audit risk.'
    },
    {
      id: 'AT10004_Q13',
      n: 13,
      stem: 'Which of the following audit risk components may be assessed in quantitative terms?\nInherent Risk | Control Risk | Detection Risk',
      opts: [
        { label: 'A', text: 'Yes | No | Yes' },
        { label: 'B', text: 'Yes | Yes | Yes' },
        { label: 'C', text: 'No | No | No' },
        { label: 'D', text: 'No | No | Yes' }
      ],
      ans: 'B',
      explanation: 'All audit risk model components (IR, CR, DR) may be assessed in quantitative terms (e.g. percentages) or non-quantitative terms (high, medium, low).'
    },
    {
      id: 'AT10004_Q14',
      n: 14,
      stem: 'A measure of the auditor’s assessment of the likelihood that there are material misstatements in an account before considering the effectiveness of the client’s internal control is called',
      opts: [
        { label: 'A', text: 'Audit risk' },
        { label: 'B', text: 'Detection risk' },
        { label: 'C', text: 'Inherent risk' },
        { label: 'D', text: 'Control risk' }
      ],
      ans: 'C',
      explanation: 'Inherent risk is susceptibility to misstatement before considering related controls.'
    },
    {
      id: 'AT10004_Q15',
      n: 15,
      stem: 'Inherent risk and control risk differ from detection risk in that they',
      opts: [
        { label: 'A', text: 'Arise from the misapplication of auditing procedures.' },
        { label: 'B', text: 'May be assessed in either quantitative or nonquantitative terms.' },
        { label: 'C', text: 'Exist independently of the financial statement audit.' },
        { label: 'D', text: 'Can be changed at the auditor’s discretion.' }
      ],
      ans: 'C',
      explanation: 'IR and CR are functions of the entity and its environment, existing independently of the audit.'
    },
    {
      id: 'AT10004_Q16',
      n: 16,
      stem: 'Assessing control risk at a low level most likely would involve',
      opts: [
        { label: 'A', text: 'Performing more extensive substantive tests with larger sample sizes than originally planned.' },
        { label: 'B', text: 'Reducing inherent risk for most of the assertions relevant to significant account balances.' },
        { label: 'C', text: 'Changing the timing of substantive tests by omitting interim-date testing and performing the tests at year-end.' },
        { label: 'D', text: 'Identifying specific controls relevant to specific assertions.' }
      ],
      ans: 'D',
      explanation: 'Assessing CR below maximum requires identifying specific controls relevant to assertions and testing their operating effectiveness.'
    },
    {
      id: 'AT10004_Q17',
      n: 17,
      stem: 'An auditor assesses control risk because it',
      opts: [
        { label: 'A', text: 'Is relevant to the auditor’s understanding of the control environment.' },
        { label: 'B', text: 'Provides assurance that the auditor’s materiality levels are appropriate.' },
        { label: 'C', text: 'Indicates to the auditor where inherent risk may be the greatest.' },
        { label: 'D', text: 'Affects the level of detection risk that the auditor may accept.' }
      ],
      ans: 'D',
      explanation: 'The assessed level of control risk directly affects the acceptable level of detection risk (inverse relationship).'
    },
    {
      id: 'AT10004_Q18',
      n: 18,
      stem: 'Which of the following is not a step in an auditor’s assessment of control risk?',
      opts: [
        { label: 'A', text: 'Evaluate the effectiveness of internal control with tests of controls.' },
        { label: 'B', text: 'Obtain an understanding of the entity’s information system and control environment.' },
        { label: 'C', text: 'Perform tests of details of transactions to detect material misstatements in the financial statements.' },
        { label: 'D', text: 'Consider whether controls can have a pervasive effect on financial statement assertions.' }
      ],
      ans: 'C',
      explanation: 'Tests of details to detect misstatements are substantive procedures, not steps in assessing control risk.'
    },
    {
      id: 'AT10004_Q19',
      n: 19,
      stem: 'The statements below describe the interrelationship of audit risk components. Which is false?',
      opts: [
        { label: 'A', text: 'There is an inverse relationship between detection risk and the combined level of inherent and control risks.' },
        { label: 'B', text: 'When inherent and control risks are high, the acceptable level of detection risk needs to be low to reduce audit risk to an acceptably low level.' },
        { label: 'C', text: 'When inherent and control risks are low, an auditor can accept a higher detection risk and still reduce audit risk to an acceptably low level.' },
        { label: 'D', text: 'The assessed level of inherent and control risks can be sufficiently low to eliminate the need for the auditor to perform any substantive procedures.' }
      ],
      ans: 'D',
      explanation: 'Regardless of how low IR and CR are assessed, the auditor must always perform some substantive procedures for material classes of transactions and balances.'
    },
    {
      id: 'AT10004_Q20',
      n: 20,
      stem: 'It is the process designed and effected by those charged with governance, management, and other personnel to provide reasonable assurance about the achievement of the entity’s objectives.',
      opts: [
        { label: 'A', text: 'Internal auditing' },
        { label: 'B', text: 'Internal control' },
        { label: 'C', text: 'Business strategy' },
        { label: 'D', text: 'Accounting process' }
      ],
      ans: 'B',
      explanation: 'This is the definition of internal control under PSA 315.'
    },
    {
      id: 'AT10004_Q21',
      n: 21,
      stem: 'Which of the following is not one of the three primary objectives of effective internal control?',
      opts: [
        { label: 'A', text: 'Reliability of financial reporting.' },
        { label: 'B', text: 'Efficiency and effectiveness of operations.' },
        { label: 'C', text: 'Compliance with laws and regulations.' },
        { label: 'D', text: 'Assurance of elimination of business risk.' }
      ],
      ans: 'D',
      explanation: 'Internal control cannot eliminate business risk.'
    },
    {
      id: 'AT10004_Q22',
      n: 22,
      stem: 'When considering an entity’s internal control system, an auditor is not required to',
      opts: [
        { label: 'A', text: 'Search for significant deficiencies in the operation of the internal control system.' },
        { label: 'B', text: 'Understand the components of the entity’s internal control system.' },
        { label: 'C', text: 'Determine whether relevant controls have been placed in operation.' },
        { label: 'D', text: 'Perform procedures to understand the design of the internal control system policies.' }
      ],
      ans: 'A',
      explanation: 'An audit of FS is not designed to search for deficiencies, although deficiencies that come to light must be communicated.'
    },
    {
      id: 'AT10004_Q23',
      n: 23,
      stem: 'In an audit of financial statements, an auditor’s primary consideration regarding an internal control is whether the control',
      opts: [
        { label: 'A', text: 'Reflects management’s philosophy and operating style.' },
        { label: 'B', text: 'Affects management’s financial statement assertions.' },
        { label: 'C', text: 'Provides adequate safeguards over access to assets.' },
        { label: 'D', text: 'Relates to operational activities.' }
      ],
      ans: 'B',
      explanation: 'Controls relevant to an audit are those that affect financial statement assertions.'
    },
    {
      id: 'AT10004_Q24',
      n: 24,
      stem: 'Which of the following statements concerning the relevance of various types of controls to a financial statement audit is correct?',
      opts: [
        { label: 'A', text: 'All controls are ordinarily relevant to a financial statement audit.' },
        { label: 'B', text: 'Controls over safeguarding of assets and liabilities are of primary importance, while controls over the reliability of financial reporting may also be relevant.' },
        { label: 'C', text: 'Controls over the reliability of financial reporting are ordinarily most directly relevant to a financial statement audit, but other controls may also be relevant.' },
        { label: 'D', text: 'An auditor may ordinarily ignore a consideration of controls when a substantive audit approach is taken.' }
      ],
      ans: 'C',
      explanation: 'Controls over financial reporting reliability are most directly relevant, though operational/compliance controls affecting FS may also be relevant.'
    },
    {
      id: 'AT10004_Q25',
      n: 25,
      stem: 'The components of internal control include',
      opts: [
        { label: 'A', text: 'Monitoring of controls that sets the tone of the organization.' },
        { label: 'B', text: 'A process of managing risks relevant to preparing financial statements.' },
        { label: 'C', text: 'A control environment consisting of policies and procedures to help ensure that management directives are carried out.' },
        { label: 'D', text: 'Control activities that identify, capture, and exchange information.' }
      ],
      ans: 'B',
      explanation: 'The entity\'s risk assessment process is its process for identifying and managing risks relevant to financial reporting.'
    },
    {
      id: 'AT10004_Q26',
      n: 26,
      stem: 'An auditor should consider two key issues when obtaining an understanding of a client’s internal controls. These issues are',
      opts: [
        { label: 'A', text: 'The effectiveness and efficiency of the controls.' },
        { label: 'B', text: 'The frequency and effectiveness of the controls.' },
        { label: 'C', text: 'The design and implementation of the controls.' },
        { label: 'D', text: 'The implementation and efficiency of the controls.' }
      ],
      ans: 'C',
      explanation: 'Obtaining an understanding involves evaluating the design and determining whether controls have been implemented.'
    },
    {
      id: 'AT10004_Q27',
      n: 27,
      stem: 'Which of the following procedures would an auditor most likely include in the planning phase of a financial statement audit?',
      opts: [
        { label: 'A', text: 'Obtain an understanding of the entity’s risk assessment process.' },
        { label: 'B', text: 'Identify specific internal control activities designed to prevent fraud.' },
        { label: 'C', text: 'Evaluate the reasonableness of the entity’s accounting estimates.' },
        { label: 'D', text: 'Perform cutoff tests of the entity’s sales and purchases.' }
      ],
      ans: 'A',
      explanation: 'Obtaining an understanding of internal control components (including risk assessment process) is performed during planning.'
    },
    {
      id: 'AT10004_Q28',
      n: 28,
      stem: 'When assessing control risk at below the maximum level, an auditor is required to document the auditor’s understanding of the\nI. Entity’s control activities that help ensure management directives are carried out.\nII. Entity’s control environment factors that help the auditor plan the engagement.',
      opts: [
        { label: 'A', text: 'I Only' },
        { label: 'B', text: 'II only' },
        { label: 'C', text: 'Both I and II' },
        { label: 'D', text: 'Neither I nor II' }
      ],
      ans: 'C',
      explanation: 'The auditor must document the understanding of both control activities and control environment components.'
    },
    {
      id: 'AT10004_Q29',
      n: 29,
      stem: 'Which of the following is the best way to compensate for the lack of adequate segregation of duties in a small organization?',
      opts: [
        { label: 'A', text: 'Disclosing lack of segregation of duties to the external auditors during the annual review.' },
        { label: 'B', text: 'Replacing personnel every three of four years.' },
        { label: 'C', text: 'Requiring accountants to pass a yearly background check.' },
        { label: 'D', text: 'Allowing for greater management oversight of incompatible activities.' }
      ],
      ans: 'D',
      explanation: 'Direct owner/manager oversight is the primary compensating control for small business lack of segregation of duties.'
    },
    {
      id: 'AT10004_Q30',
      n: 30,
      stem: 'Which of the following statements is most correct with respect to separation of duties?',
      opts: [
        { label: 'A', text: 'Employees should not have temporary and permanent custody of assets.' },
        { label: 'B', text: 'Employees who authorize transactions should not have custody of related assets.' },
        { label: 'C', text: 'It is permissible to allow an employee to open cash receipts and record those receipts.' },
        { label: 'D', text: 'Employees who authorize transactions should have recording responsibility for these transactions.' }
      ],
      ans: 'B',
      explanation: 'Authorization must be separated from asset custody.'
    },
    {
      id: 'AT10004_Q31',
      n: 31,
      stem: 'Authorizations can be either general or specific. Which of the following is not an example of a general authorization?',
      opts: [
        { label: 'A', text: 'Automatic reorder points for raw materials inventory.' },
        { label: 'B', text: 'A sales manager’s authorization for a sales return.' },
        { label: 'C', text: 'Credit limits for various classes of transactions.' },
        { label: 'D', text: 'A sales price list for merchandise.' }
      ],
      ans: 'B',
      explanation: 'Authorizing a specific transaction (a sales return) is a specific authorization.'
    },
    {
      id: 'AT10004_Q32',
      n: 32,
      stem: 'When obtaining knowledge about an entity’s internal control, it is important for the auditor to consider the competence of its employees, because their competence bears directly and importantly upon the',
      opts: [
        { label: 'A', text: 'Cost-benefit relationship of internal control.' },
        { label: 'B', text: 'Comparison of recorded accountability with assets.' },
        { label: 'C', text: 'Achievement of the objectives of internal control.' },
        { label: 'D', text: 'Timing of substantive tests to be performed.' }
      ],
      ans: 'C',
      explanation: 'Employee competence directly impacts whether internal control objectives are achieved.'
    },
    {
      id: 'AT10004_Q33',
      n: 33,
      stem: 'Control activities are the policies and procedures that help ensure that management directives are carried out. These include activities relating to authorization, performance reviews, information processing, physical controls, and segregation of duties. There is proper segregation of duties when an individual who',
      opts: [
        { label: 'A', text: 'Records a transaction does not compare the accounting record of the asset with the asset itself.' },
        { label: 'B', text: 'Authorizes a transaction records it.' },
        { label: 'C', text: 'Authorizes a transaction maintains custody of the asset that resulted from the transaction.' },
        { label: 'D', text: 'Maintains custody of an asset has access to the accounting records for the asset.' }
      ],
      ans: 'A',
      explanation: 'Independent reconciliation/verification should not be done by the person recording or holding custody.'
    },
    {
      id: 'AT10004_Q34',
      n: 34,
      stem: 'Proper segregation of duties reduces the opportunities to allow persons to be in positions to both',
      opts: [
        { label: 'A', text: 'Journalize entries and prepare financial statements.' },
        { label: 'B', text: 'Record cash receipts and cash disbursements.' },
        { label: 'C', text: 'Establish internal controls and authorize transactions.' },
        { label: 'D', text: 'Perpetrate and conceal errors and irregularities.' }
      ],
      ans: 'D',
      explanation: 'Segregation of duties prevents an individual from being able to both perpetrate and conceal errors or fraud.'
    },
    {
      id: 'AT10004_Q35',
      n: 35,
      stem: 'An auditor should obtain sufficient knowledge of an entity’s information system, including the related business processes relevant to financial reporting, to understand the',
      opts: [
        { label: 'A', text: 'Policies used to detect the concealment of fraud.' },
        { label: 'B', text: 'Process used to prepare significant accounting estimates.' },
        { label: 'C', text: 'Safeguards used to limit access to computer facilities.' },
        { label: 'D', text: 'Procedures used to assure proper authorization of transactions.' }
      ],
      ans: 'B',
      explanation: 'PSA 315 specifies understanding the financial reporting process used to prepare the FS, including accounting estimates.'
    },
    {
      id: 'AT10004_Q36',
      n: 36,
      stem: 'The primary objective of procedures performed to obtain an understanding of internal control is to provide an auditor with',
      opts: [
        { label: 'A', text: 'Knowledge necessary to plan the audit.' },
        { label: 'B', text: 'A basis for modifying tests of controls.' },
        { label: 'C', text: 'Information necessary to prepare flowcharts.' },
        { label: 'D', text: 'Evidence to use in reducing detection risk.' }
      ],
      ans: 'A',
      explanation: 'The primary purpose of understanding internal control is to obtain the knowledge necessary to plan the audit.'
    },
    {
      id: 'AT10004_Q37',
      n: 37,
      stem: 'In obtaining an understanding of internal control relevant to the audit, an auditor is required to obtain knowledge about the',
      opts: [
        { label: 'A', text: 'Effectiveness of controls that have been implemented.' },
        { label: 'B', text: 'Consistency with which controls are currently being applied.' },
        { label: 'C', text: 'Design of the controls pertaining to internal control components.' },
        { label: 'D', text: 'Controls related to each class of transactions and account balance.' }
      ],
      ans: 'C',
      explanation: 'The auditor evaluates design and determines implementation of controls.'
    },
    {
      id: 'AT10004_Q38',
      n: 38,
      stem: 'Obtaining an understanding of an internal control involves evaluating the design of the control and determining whether the control has been',
      opts: [
        { label: 'A', text: 'Authorized.' },
        { label: 'B', text: 'Implemented.' },
        { label: 'C', text: 'Tested.' },
        { label: 'D', text: 'Monitored.' }
      ],
      ans: 'B',
      explanation: 'PSA 315 specifically states: "evaluating the design of the control and determining whether it has been implemented".'
    },
    {
      id: 'AT10004_Q39',
      n: 39,
      stem: 'After considering a client’s internal controls, an auditor has concluded that it is well designed and is functioning as intended. Under these circumstances the auditor would most likely',
      opts: [
        { label: 'A', text: 'Perform tests of controls to the extent outlined in the audit program.' },
        { label: 'B', text: 'Determine the control procedures that should prevent or detect errors and fraud.' },
        { label: 'C', text: 'Not increase the extent of predetermined substantive tests.' },
        { label: 'D', text: 'Determine whether transactions are recorded to permit preparation of financial statements in accordance with PFRS.' }
      ],
      ans: 'C',
      explanation: 'When controls function effectively as tested, the auditor does not need to increase substantive tests.'
    },
    {
      id: 'AT10004_Q40',
      n: 40,
      stem: 'Audit evidence concerning proper segregation of duties normally is best obtained by',
      opts: [
        { label: 'A', text: 'Direct personal observation of the employee who applies control procedures.' },
        { label: 'B', text: 'Making inquiries of co-workers about the employee who applies control procedures.' },
        { label: 'C', text: 'Preparation of a flowchart of duties performed and available personnel.' },
        { label: 'D', text: 'Inspection of third-party documents containing the initials of who applied control procedures.' }
      ],
      ans: 'A',
      explanation: 'Segregation of duties leaves no audit trail; observation of employees performing duties provides the best evidence.'
    },
    {
      id: 'AT10004_Q41',
      n: 41,
      stem: 'In conducting an audit in accordance with PSAs, the auditor is required to identify and assess the risks of material misstatement at the financial statement level, and at the assertion level for classes of transactions, account balances, and disclosures. Some of these risks, in the auditor’s judgment, require special audit consideration, such as those that involve fraud or complex transactions. Such risks are called',
      opts: [
        { label: 'A', text: 'Business risks' },
        { label: 'B', text: 'Audit risks' },
        { label: 'C', text: 'Significant risks' },
        { label: 'D', text: 'Material risks' }
      ],
      ans: 'C',
      explanation: 'Risks that require special audit consideration are defined as "significant risks".'
    },
    {
      id: 'AT10004_Q42',
      n: 42,
      stem: 'As a result of obtaining an understanding of an entity’s internal control system, the auditor may become aware of material weaknesses in the design or implementation of internal control. The auditor is required to communicate this matter to',
      opts: [
        { label: 'A', text: 'Those charged with governance or management' },
        { label: 'B', text: 'Chief executive officer' },
        { label: 'C', text: 'Securities and Exchange Commission' },
        { label: 'D', text: 'Board of Accountancy' }
      ],
      ans: 'A',
      explanation: 'Significant deficiencies/material weaknesses must be communicated in writing to TCWG and management.'
    },
    {
      id: 'AT10004_Q43',
      n: 43,
      stem: 'Which of the following controls most likely would provide reasonable assurance that all credit sales transactions of an entity are recorded?',
      opts: [
        { label: 'A', text: 'The accounting department supervisor controls the mailing of monthly statements to customers and investigates any differences reported by customers.' },
        { label: 'B', text: 'The accounting department supervisor independently reconciles, on a monthly basis, the accounts receivable subsidiary ledger to the accounts receivable control account.' },
        { label: 'C', text: 'The billing department supervisor matches prenumbered shipping documents with entries in the sales journal.' },
        { label: 'D', text: 'The billing department supervisor sends copies of approved sales orders to the credit department for comparison to authorized credit limits and current customer account balances.' }
      ],
      ans: 'C',
      explanation: 'Matching prenumbered shipping documents to entries in the sales journal tests for completeness of recorded sales.'
    },
    {
      id: 'AT10004_Q44',
      n: 44,
      stem: 'An auditor tests an entity’s policy of obtaining credit approval before shipping goods to customers in support of management’s financial statement assertion of',
      opts: [
        { label: 'A', text: 'Valuation.' },
        { label: 'B', text: 'Completeness.' },
        { label: 'C', text: 'Occurrence.' },
        { label: 'D', text: 'Rights and obligations.' }
      ],
      ans: 'A',
      explanation: 'Credit approval verifies collectibility of receivables, supporting the valuation assertion.'
    },
    {
      id: 'AT10004_Q45',
      n: 45,
      stem: 'Macho Dancer Company uses its sales invoices for posting perpetual inventory records. Inadequate internal control over the invoicing function allows goods to be shipped but not invoiced. The inadequate controls could cause what type of misstatement in each of the following accounts?\nRevenues | Receivables | Inventories',
      opts: [
        { label: 'A', text: 'Understatement | Understatement | Understatement' },
        { label: 'B', text: 'Overstatement | Overstatement | Understatement' },
        { label: 'C', text: 'Understatement | Understatement | Overstatement' },
        { label: 'D', text: 'Overstatement | Overstatement | Overstatement' }
      ],
      ans: 'C',
      explanation: 'Uninvoiced shipments result in unrecorded revenues (understated) and receivables (understated), while inventory is not reduced in perpetual records based on invoice (overstated).'
    },
    {
      id: 'AT10004_Q46',
      n: 46,
      stem: 'Which of the following control activities in an entity’s revenue/receipt cycle would provide reasonable assurance that all billed sales are correctly posted to the accounts receivable ledger?',
      opts: [
        { label: 'A', text: 'Each shipment of goods on credit is supported by a prenumbered sales invoice.' },
        { label: 'B', text: 'The accounts receivable subsidiary ledger is reconciled daily to the accounts receivable control account in the general ledger.' },
        { label: 'C', text: 'Daily sales summaries are compared to daily postings to the accounts receivable ledger.' },
        { label: 'D', text: 'Each sales invoice is supported by a prenumbered shipping document.' }
      ],
      ans: 'C',
      explanation: 'Comparing daily sales summaries to daily postings ensures all billed sales are posted to AR.'
    },
    {
      id: 'AT10004_Q47',
      n: 47,
      stem: 'The auditor’s primary objective in obtaining an understanding of the client’s controls over the purchasing function is to',
      opts: [
        { label: 'A', text: 'Investigate the recording of unusual transactions regarding raw materials.' },
        { label: 'B', text: 'Determine the reliability of financial reporting by the purchasing function.' },
        { label: 'C', text: 'Observe the annual physical count.' },
        { label: 'D', text: 'Ascertain that raw materials paid for are on hand.' }
      ],
      ans: 'B',
      explanation: 'Understanding purchasing controls determines the reliability of financial reporting in that cycle.'
    },
    {
      id: 'AT10004_Q48',
      n: 48,
      stem: 'Effective controls relevant to purchasing of raw materials should usually include all of the following, except',
      opts: [
        { label: 'A', text: 'Determining the need for the raw materials prior to preparing the purchase order.' },
        { label: 'B', text: 'Systematic reporting of product changes that will affect raw materials.' },
        { label: 'C', text: 'Obtaining financial approval prior to making a commitment.' },
        { label: 'D', text: 'Obtaining third-party written quality and quantity reports prior to payment for the raw materials.' }
      ],
      ans: 'D',
      explanation: 'Internal receiving reports (not third-party reports) are standard internal control documents for purchasing.'
    },
    {
      id: 'AT10004_Q49',
      n: 49,
      stem: 'Which of the following controls is not usually performed in the accounts payable department?',
      opts: [
        { label: 'A', text: 'Indicating on the voucher the affected asset and expense accounts to be debited.' },
        { label: 'B', text: 'Approving vouchers for payment by having an authorized employee sign the vouchers.' },
        { label: 'C', text: 'Accounting for unused prenumbered purchase orders and receiving reports.' },
        { label: 'D', text: 'Matching the vendor’s invoice with the related purchase requisition, purchase order, and receiving report.' }
      ],
      ans: 'C',
      explanation: 'Unused prenumbered POs and receiving reports are safeguarded by purchasing and receiving departments, not AP.'
    },
    {
      id: 'AT10004_Q50',
      n: 50,
      stem: 'The following are appropriate questions on an internal control questionnaire concerning purchase transactions, except',
      opts: [
        { label: 'A', text: 'Are all goods received in a centralized receiving department and counted, inspected, and compared with purchase orders on receipt?' },
        { label: 'B', text: 'Are intact cash receipts deposited daily in the bank?' },
        { label: 'C', text: 'Are prenumbered purchase orders and receiving reports used and accounted for?' },
        { label: 'D', text: 'Are an approved purchase requisition and a signed purchase order required for each purchase?' }
      ],
      ans: 'B',
      explanation: 'Cash receipts deposited intact relates to the cash receipts/revenue cycle, not purchase transactions.'
    },
    {
      id: 'AT10004_Q51',
      n: 51,
      stem: 'Which of the following is of least concern to an auditor in assessing the risks of material misstatement?',
      opts: [
        { label: 'A', text: 'Signed checks are distributed by the controller to approved payees.' },
        { label: 'B', text: 'Checks are signed by one person.' },
        { label: 'C', text: 'Cash receipts are not deposited intact daily.' },
        { label: 'D', text: 'Treasurer does not verify the names and addresses of check payees.' }
      ],
      ans: 'B',
      explanation: 'Signing by one person is standard in many systems as long as supporting vouchers are properly approved.'
    },
    {
      id: 'AT10004_Q52',
      n: 52,
      stem: 'To provide assurance that each voucher is submitted and paid only once, an auditor most likely would examine a sample of paid vouchers and determine whether each voucher is',
      opts: [
        { label: 'A', text: 'Supported by a vendor’s invoice.' },
        { label: 'B', text: 'Stamped “paid” by the check signer.' },
        { label: 'C', text: 'Prenumbered and accounted for.' },
        { label: 'D', text: 'Approved for authorized purchases.' }
      ],
      ans: 'B',
      explanation: 'Cancelling or stamping vouchers "PAID" prevents double submission and double payment.'
    },
    {
      id: 'AT10004_Q53',
      n: 53,
      stem: 'An auditor generally tests the segregation of duties related to inventory by',
      opts: [
        { label: 'A', text: 'Personal inquiry and observation.' },
        { label: 'B', text: 'Test counts and cutoff procedures.' },
        { label: 'C', text: 'Analytical procedures and invoice recomputation.' },
        { label: 'D', text: 'Document inspection and reconciliation.' }
      ],
      ans: 'A',
      explanation: 'Segregation of duties is tested through inquiry and observation.'
    },
    {
      id: 'AT10004_Q54',
      n: 54,
      stem: 'Your client, a merchandising concern, has annual sales of P30,000,000 and a 40% gross profit rate. Tests reveal that 2% of the peso amount of purchases do not get into inventory because of breakage and inventory pilferage by employees. The company estimates that these losses could be reduced to 0.5% of purchases by designing and implementing certain controls costing approximately P350,000. Should the controls be designed and implemented?',
      opts: [
        { label: 'A', text: 'Yes, regardless of cost-benefit considerations, because the situation involves employee theft.' },
        { label: 'B', text: 'Yes, because the ideal system of internal control is the most extensive one.' },
        { label: 'C', text: 'No, because the cost of designing and implementing the added controls exceeds the projected savings.' },
        { label: 'D', text: 'Yes, because the expected benefits to be derived exceed the cost of the added controls.' }
      ],
      ans: 'C',
      explanation: 'Cost of goods sold is 60% of P30M = P18,000,000 purchases. Reduction in loss is 1.5% of P18M = P270,000. The cost of P350,000 exceeds savings of P270,000.'
    },
    {
      id: 'AT10004_Q55',
      n: 55,
      stem: 'An internal control objective concerning property, plant, and equipment (PPE) acquisitions is that they be recorded at the correct amounts and in the proper period, and properly classified. In which of the following conditions would an auditor most likely assess a high level of risk of material misstatement?',
      opts: [
        { label: 'A', text: 'All material acquisitions of PPE are required to be approved by the board of directors.' },
        { label: 'B', text: 'Most additions are self-constructed by the entity.' },
        { label: 'C', text: 'Recently acquired loans include covenants that preclude further plant acquisitions for 5 years.' },
        { label: 'D', text: 'Gross PPE increased 30% during the current period.' }
      ],
      ans: 'B',
      explanation: 'Self-constructed assets involve complex allocation of overhead, materials, and labor, increasing risk of misstatement.'
    },
    {
      id: 'AT10004_Q56',
      n: 56,
      stem: 'When an entity uses a trust company as custodian of its marketable securities, the possibility of concealing fraud would most likely be reduced if the',
      opts: [
        { label: 'A', text: 'Trust company has no direct contact with the entity employees responsible for maintaining investment accounting records.' },
        { label: 'B', text: 'Securities are registered in the name of the trust company, rather than the entity itself.' },
        { label: 'C', text: 'Interest and dividend checks are mailed directly to an entity employee who is authorized to sell securities.' },
        { label: 'D', text: 'Trust company places the securities in a bank safe-deposit vault under the custodian\'s exclusive control.' }
      ],
      ans: 'A',
      explanation: 'Independent custodian without contact with recordkeepers prevents collusion and concealment.'
    },
    {
      id: 'AT10004_Q57',
      n: 57,
      stem: 'The following controls are designed to protect investment securities, except',
      opts: [
        { label: 'A', text: 'Investment securities should be properly controlled physically in order to prevent unauthorized usage.' },
        { label: 'B', text: 'Custody over investment securities should be limited to personnel having record-keeping responsibility over the securities.' },
        { label: 'C', text: 'Securities should be registered in the entity’s name.' },
        { label: 'D', text: 'Access to securities should be vested in two individuals.' }
      ],
      ans: 'B',
      explanation: 'Custody should be segregated from recordkeeping; combining them destroys internal control.'
    },
    {
      id: 'AT10004_Q58',
      n: 58,
      stem: 'Effective controls over the payroll function may include',
      opts: [
        { label: 'A', text: 'Custody of rate authorization records by the supervisor of the payroll department.' },
        { label: 'B', text: 'Preparation of payroll transaction journal entries by an employee who reports to the supervisor of the personnel department.' },
        { label: 'C', text: 'Verification of agreement of job time tickets with employee clock card hours by a payroll department employee.' },
        { label: 'D', text: 'Reconciliation of totals on job time tickets with job reports by employees responsible for those specific jobs.' }
      ],
      ans: 'C',
      explanation: 'Reconciling job time tickets with clock card hours verifies that payroll is computed only for hours worked.'
    },
    {
      id: 'AT10004_Q59',
      n: 59,
      stem: 'Employees of a manufacturing entity are often required to use time cards and job time tickets. Which of the following statements concerning the use of these documents is incorrect?',
      opts: [
        { label: 'A', text: 'Time reported on job time tickets should be reconciled to time cards.' },
        { label: 'B', text: 'Payroll should be calculated based on job time tickets.' },
        { label: 'C', text: 'Each employee should have only one time card.' },
        { label: 'D', text: 'An employee may have one or many job time tickets in a day.' }
      ],
      ans: 'B',
      explanation: 'Payroll is calculated based on time cards (clock cards), while job time tickets are used for cost accounting allocation.'
    },
    {
      id: 'AT10004_Q60',
      n: 60,
      stem: 'Which of the following personnel department procedures reduces the risk of payroll fraud and represents an appropriate responsibility for the department?',
      opts: [
        { label: 'A', text: 'Authorizing the addition or deletion of employees from the payroll.' },
        { label: 'B', text: 'Authorizing overtime hours.' },
        { label: 'C', text: 'Collection and retention of unclaimed paychecks.' },
        { label: 'D', text: 'Distributing paychecks.' }
      ],
      ans: 'A',
      explanation: 'Human resources/personnel is responsible for hiring and firing (authorizing additions/deletions), preventing ghost employees.'
    }
  ]
};
