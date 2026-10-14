import { ModuleData } from './types';

export const at10008: ModuleData = {
  id: 'AT-10008',
  code: 'AT-10008',
  title: 'Fraud, Consideration of Laws and Regulations, TCWG Communications',
  standards: 'PSA 240, PSA 250, PSA 260',
  questionCount: 20,
  summary: 'Fraud definition, Fraud Triangle (Incentive/Pressure, Opportunity, Rationalization), 2 Types of Fraud (Fraudulent Financial Reporting, Misappropriation of Assets), Responsibilities of Management, TCWG and Auditor, Audit Responses to Fraud Risk, PSA 250 Noncompliance with Laws and Regulations (Direct Effect vs Indirect Effect), and PSA 260 Communication with Those Charged with Governance.',
  lectureOutline: `### PSA 240: THE AUDITOR’S RESPONSIBILITIES RELATING TO FRAUD
- **Fraud:** An intentional act involving deception to obtain unjust or illegal advantage.
- **Fraud Triangle:**
  1. Incentive or pressure
  2. Perceived opportunity
  3. Rationalization
- **Two Types of Fraud Relevant to the Auditor:**
  1. *Fraudulent Financial Reporting:* Intentional misstatements/omissions to deceive users (often involves management override of controls, manipulation of records, misapplication of accounting principles).
  2. *Misappropriation of Assets:* Theft of entity assets (often perpetrated by employees, concealed with false records).

#### Responsibilities
- **Management & TCWG:** Primary responsibility for prevention and detection of fraud.
- **Auditor:** Obtain reasonable assurance that FS as a whole are free from material misstatement, maintaining professional skepticism throughout.
- **Risk of Management Fraud:** Higher than employee fraud because management can manipulate accounting records and override controls.

#### Auditor Responses to Fraud Risk
- Assign experienced staff / experts.
- Evaluate accounting policies for earnings management.
- Incorporate unpredictability into audit procedures.
- Address management override: test journal entries, review estimates for bias, evaluate business rationale of significant unusual transactions.

---

### PSA 250: CONSIDERATION OF LAWS AND REGULATIONS IN AN AUDIT OF FINANCIAL STATEMENTS
- **Noncompliance:** Acts of omission or commission contrary to prevailing laws or regulations (excludes personal misconduct unrelated to business).
- **Categories:**
  1. *Direct Effect on FS amounts/disclosures* (tax laws, pension regulations): Obtain sufficient appropriate audit evidence regarding compliance.
  2. *Other Laws Fundamental to Operating Aspects* (environmental, labor, operating licenses): Inquire of management and inspect correspondence with licensing/regulatory authorities.
- **Reporting:** Report noncompliance to TCWG as soon as practicable. If material effect is uncorrected, issue a **qualified or adverse opinion**. If precluded from obtaining evidence, issue a **qualified or disclaimer of opinion**.

---

### PSA 260: COMMUNICATION WITH THOSE CHARGED WITH GOVERNANCE (TCWG)
- **Those Charged with Governance:** Person(s) or organization(s) with responsibility for overseeing strategic direction and accountability (e.g., Board of Directors, Audit Committee).
- **Matters Communicated:**
  - Auditor's responsibilities in relation to the audit.
  - Planned scope and timing of the audit.
  - Significant findings from the audit (qualitative aspects of accounting practices, significant difficulties, uncorrected misstatements).
  - Auditor independence (for listed entities).
- **Form:** In writing regarding significant findings when oral communication is inadequate.`,
  items: [
    {
      id: 'AT10008_Q1',
      n: 1,
      stem: 'Which of the following best defines fraud in a financial statement auditing context?',
      opts: [
        { label: 'A', text: 'Fraud is an unintentional misstatement of the financial statements.' },
        { label: 'B', text: 'Fraud is an intentional misstatement of the financial statements.' },
        { label: 'C', text: 'Fraud is either an intentional or unintentional misstatement of the financial statements, depending on materiality.' },
        { label: 'D', text: 'Fraud is either an intentional or unintentional misstatement of the financial statements, depending on consistency.' }
      ],
      ans: 'B',
      explanation: 'Under PSA 240, fraud is distinguished from error by being an intentional misstatement.'
    },
    {
      id: 'AT10008_Q2',
      n: 2,
      stem: 'Fraud involving one or more members of management or those charged with governance is referred to as',
      opts: [
        { label: 'A', text: 'Management fraud.' },
        { label: 'B', text: 'Employee fraud.' },
        { label: 'C', text: 'Fraudulent financial reporting.' },
        { label: 'D', text: 'Misappropriation of assets.' }
      ],
      ans: 'A',
      explanation: 'Fraud involving management or TCWG is termed management fraud.'
    },
    {
      id: 'AT10008_Q3',
      n: 3,
      stem: 'Fraudulent financial reporting involves intentional misstatements including omissions of amounts or disclosures in financial statements to deceive financial statement users. It may be accomplished in a number of ways, including',
      opts: [
        { label: 'A', text: 'Embezzling receipts.' },
        { label: 'B', text: 'Stealing physical assets or intellectual property.' },
        { label: 'C', text: 'Using an entity’s assets for personal use.' },
        { label: 'D', text: 'Manipulation, falsification, or alteration of accounting records or supporting documentation from which the financial statements are prepared.' }
      ],
      ans: 'D',
      explanation: 'Manipulating or altering accounting records is a primary method of fraudulent financial reporting.'
    },
    {
      id: 'AT10008_Q4',
      n: 4,
      stem: 'Which of the following conditions are generally present when misstatements due to fraud occur?\nI. Incentive or pressure.\nII. Perceived opportunity.\nIII. Rationalization.',
      opts: [
        { label: 'A', text: 'I and II only.' },
        { label: 'B', text: 'II and III only.' },
        { label: 'C', text: 'I and III only.' },
        { label: 'D', text: 'I, II, and III.' }
      ],
      ans: 'D',
      explanation: 'These three conditions form the classic Fraud Triangle under PSA 240.'
    },
    {
      id: 'AT10008_Q5',
      n: 5,
      stem: 'Who is most likely to perpetrate fraudulent financial reporting?',
      opts: [
        { label: 'A', text: 'Members of the board of directors.' },
        { label: 'B', text: 'Production employees.' },
        { label: 'C', text: 'Management of the company.' },
        { label: 'D', text: 'The internal auditors.' }
      ],
      ans: 'C',
      explanation: 'Management has the authority, incentive, and ability to override controls and manipulate financial reports.'
    },
    {
      id: 'AT10008_Q6',
      n: 6,
      stem: 'The following are examples of fraud risk factors relating to misstatements arising from misappropriation of assets, except',
      opts: [
        { label: 'A', text: 'Recurring negative cash flows from operating activities while reporting earnings and earnings growth.' },
        { label: 'B', text: 'Inadequate physical safeguards over cash, investments, inventory, or fixed assets.' },
        { label: 'C', text: 'Inadequate segregation of duties or independent checks.' },
        { label: 'D', text: 'Adverse relationship between the entity and employees with access to cash or other assets susceptible to theft created by recent changes made to employee compensation or benefit plans.' }
      ],
      ans: 'A',
      explanation: 'Recurring negative cash flows while reporting earnings growth is a risk factor for fraudulent financial reporting, not misappropriation of assets.'
    },
    {
      id: 'AT10008_Q7',
      n: 7,
      stem: 'Opportunities to misappropriate assets increase when there are',
      opts: [
        { label: 'A', text: 'Known or anticipated future employee layoffs.' },
        { label: 'B', text: 'Promotions, compensation, or other rewards inconsistent with expectations.' },
        { label: 'C', text: 'Recent or anticipated changes to employee compensation or benefit plans.' },
        { label: 'D', text: 'Inventory items that are small in size, of high value, or in high demand.' }
      ],
      ans: 'D',
      explanation: 'Small, high-value, easily convertible inventory items provide high perceived opportunity for asset misappropriation.'
    },
    {
      id: 'AT10008_Q8',
      n: 8,
      stem: 'Which of the following conditions or events may create incentives/pressures to commit fraud?',
      opts: [
        { label: 'A', text: 'Inadequate system of authorization and approval of transactions.' },
        { label: 'B', text: 'Lack of mandatory vacations for employees performing key control functions.' },
        { label: 'C', text: 'Excessive pressure on management or operating personnel to meet financial targets established by those charged with governance, including sales or profitability incentive goals.' },
        { label: 'D', text: 'Inadequate access controls over automated records.' }
      ],
      ans: 'C',
      explanation: 'Excessive pressure to meet aggressive financial targets creates incentives/pressures to commit fraudulent financial reporting.'
    },
    {
      id: 'AT10008_Q9',
      n: 9,
      stem: 'Which of the following statements is correct about an auditor’s responsibility regarding consideration of fraud in a financial statement audit?',
      opts: [
        { label: 'A', text: 'The auditor should consider the client’s internal control and plan and perform the audit to provide absolute assurance of detecting all material misstatements.' },
        { label: 'B', text: 'The auditor should assess the risk that errors may cause the financial statements to contain any misstatements and determine whether the necessary controls are prescribed and are being followed satisfactorily.' },
        { label: 'C', text: 'The auditor should consider the types of misstatements that could occur and perform tests on 100% of the information subject to misstatement.' },
        { label: 'D', text: 'The auditor should assess the risks of material misstatement due to fraud.' }
      ],
      ans: 'D',
      explanation: 'The auditor is required under PSA 240 to assess the risks of material misstatement due to fraud.'
    },
    {
      id: 'AT10008_Q10',
      n: 10,
      stem: 'Which action regarding fraud is an activity related to performance of risk assessment procedures?',
      opts: [
        { label: 'A', text: 'Consider whether estimates prepared and recorded by management could indicate a bias in reporting.' },
        { label: 'B', text: 'Consider the characteristics of journal entries, particularly those made near year end.' },
        { label: 'C', text: 'Document the results of procedures used to address the risk of fraud.' },
        { label: 'D', text: 'Discussions among the engagement team members regarding the risks of material misstatement due to fraud.' }
      ],
      ans: 'D',
      explanation: 'Engagement team discussion (brainstorming) regarding fraud susceptibility is part of risk assessment procedures (PSA 315/240).'
    },
    {
      id: 'AT10008_Q11',
      n: 11,
      stem: 'When the auditor identifies a misstatement in the financial statements, the auditor should consider whether such a misstatement may be indicative of fraud and if there is such an indication, the auditor should',
      opts: [
        { label: 'A', text: 'Consider the implications of the misstatement in relation to other aspects of the audit.' },
        { label: 'B', text: 'Withdraw from the engagement.' },
        { label: 'C', text: 'Communicate the information to regulatory and enforcement authorities.' },
        { label: 'D', text: 'Report the matter to the person or persons who made the audit appointment.' }
      ],
      ans: 'A',
      explanation: 'When misstatement is indicative of fraud, the auditor evaluates implications for management integrity and other audit aspects.'
    },
    {
      id: 'AT10008_Q12',
      n: 12,
      stem: 'As used in PSA 250 (Consideration of Laws and Regulations in an Audit of Financial Statements), this term refers to acts of omission or commission by the entity being audited, either intentional or unintentional, which are contrary to prevailing laws or regulations.',
      opts: [
        { label: 'A', text: 'Noncompliance' },
        { label: 'B', text: 'Illegal acts' },
        { label: 'C', text: 'Erotic acts' },
        { label: 'D', text: 'Unforgivable acts' }
      ],
      ans: 'A',
      explanation: 'The standard term in PSA 250 is "Noncompliance".'
    },
    {
      id: 'AT10008_Q13',
      n: 13,
      stem: 'In order to plan the audit, the auditor should obtain a general understanding of the legal and regulatory framework applicable to the entity and the industry and how the entity is complying with that framework. To obtain this understanding, the following procedures would ordinarily be considered by the auditor, except',
      opts: [
        { label: 'A', text: 'Use the existing understanding of the entity’s industry, regulatory, and other external factors.' },
        { label: 'B', text: 'Inquire of management concerning the entity’s policies and procedures regarding compliance with laws and regulations.' },
        { label: 'C', text: 'Inquire of management as to the laws and regulations that may be expected to have a fundamental effect on the operations of the entity.' },
        { label: 'D', text: 'Inspect correspondence with relevant licensing or regulatory authorities.' }
      ],
      ans: 'D',
      explanation: 'Inspecting correspondence with regulatory authorities is performed during the audit to identify noncompliance, not just during preliminary planning understanding.'
    },
    {
      id: 'AT10008_Q14',
      n: 14,
      stem: 'If the auditor concludes that the noncompliance has a material effect on the financial statements, and has not been properly reflected in the financial statements, the auditor should express',
      opts: [
        { label: 'A', text: 'A qualified or an adverse opinion.' },
        { label: 'B', text: 'A qualified opinion or a disclaimer of opinion.' },
        { label: 'C', text: 'A disclaimer of opinion.' },
        { label: 'D', text: 'A qualified opinion.' }
      ],
      ans: 'A',
      explanation: 'Material uncorrected misstatements due to noncompliance warrant a qualified or adverse opinion (PSA 705).'
    },
    {
      id: 'AT10008_Q15',
      n: 15,
      stem: 'If the auditor is precluded by the entity from obtaining sufficient appropriate audit evidence to evaluate whether noncompliance that may be material to the financial statements, has, or is likely to have, occurred, the auditor should express',
      opts: [
        { label: 'A', text: 'A qualified opinion or an adverse opinion.' },
        { label: 'B', text: 'A qualified opinion or a disclaimer of opinion.' },
        { label: 'C', text: 'An adverse opinion.' },
        { label: 'D', text: 'An adverse opinion or a disclaimer of opinion.' }
      ],
      ans: 'B',
      explanation: 'A scope limitation (inability to obtain evidence) warrants a qualified opinion or a disclaimer of opinion.'
    },
    {
      id: 'AT10008_Q16',
      n: 16,
      stem: 'Under PSA 260, this term is used to describe the role of persons entrusted with the supervision, control, and direction of an entity.',
      opts: [
        { label: 'A', text: 'Oversight.' },
        { label: 'B', text: 'Governance.' },
        { label: 'C', text: 'Direction.' },
        { label: 'D', text: 'Control.' }
      ],
      ans: 'B',
      explanation: 'PSA 260 defines "Governance" as describing the role of persons entrusted with supervision, control and direction.'
    },
    {
      id: 'AT10008_Q17',
      n: 17,
      stem: 'According to PSA 260, those matters that arise from the audit of financial statements and, in the opinion of the auditor, are both important and relevant to those charged with governance in overseeing the financial reporting and disclosure process are called',
      opts: [
        { label: 'A', text: 'Audit matters of governance interest.' },
        { label: 'B', text: 'Significant audit matters.' },
        { label: 'C', text: 'Auditor’s findings.' },
        { label: 'D', text: 'Material misstatements in the financial statements.' }
      ],
      ans: 'A',
      explanation: 'These matters are designated as "Audit matters of governance interest".'
    },
    {
      id: 'AT10008_Q18',
      n: 18,
      stem: 'Which of the following statements relating to communication of audit matters of governance interest is incorrect?',
      opts: [
        { label: 'A', text: 'Audit matters of governance interest include only those matters that have come to the attention of the auditor as a result of the performance of the audit.' },
        { label: 'B', text: 'In an audit in accordance with PSAs, the auditor should design audit procedures for the specific purpose of identifying matters of governance interest.' },
        { label: 'C', text: 'The auditor should identify relevant persons who are charged with governance and with whom audit matters of governance interest are to be communicated.' },
        { label: 'D', text: 'The auditor’s communications with those charged with governance may be made orally or in writing.' }
      ],
      ans: 'B',
      explanation: 'Audits in accordance with PSAs are NOT designed specifically to identify all matters of governance interest; they communicate matters coming to attention during the audit.'
    },
    {
      id: 'AT10008_Q19',
      n: 19,
      stem: 'Audit matters of governance interest to be communicated to those charged with governance ordinarily include',
      opts: [
        { label: 'A', text: 'Audit adjustments, whether or not recorded by the entity that have, or could have, a material effect on its financial statements.' },
        { label: 'B', text: 'Expected modifications to the auditor’s report.' },
        { label: 'C', text: 'Material uncertainties related to events and conditions that may cast significant doubt on the entity’s ability to continue as a going concern.' },
        { label: 'D', text: 'All of the above.' }
      ],
      ans: 'D',
      explanation: 'All of these items are required communications with TCWG under PSA 260.'
    },
    {
      id: 'AT10008_Q20',
      n: 20,
      stem: 'PSA 260 requires the auditor to determine the relevant persons who are charged with governance and with whom audit matters of governance interest are communicated. For corporations covered by the SEC Code of Corporate Governance, which of the following is primarily responsible for corporate governance?',
      opts: [
        { label: 'A', text: 'President.' },
        { label: 'B', text: 'Controller.' },
        { label: 'C', text: 'Board of Directors.' },
        { label: 'D', text: 'Management.' }
      ],
      ans: 'C',
      explanation: 'The Board of Directors is primarily responsible for corporate governance.'
    }
  ]
};
