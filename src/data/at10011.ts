import { ModuleData } from './types';

export const at10011: ModuleData = {
  id: 'AT-10011',
  code: 'AT-10011',
  title: 'Completing the Audit (PSA 560, 570, 580)',
  standards: 'PSA 560, PSA 570 (Revised), PSA 580',
  questionCount: 35,
  summary: 'Procedures to wrap-up an audit engagement, Related Party Transactions, PSA 560 Subsequent Events (3 periods: up to report date, between report date and issue date, after issue date), Inquiries of Client Legal Counsel (Litigation/Claims, scope limitation), PSA 580 Management Representation Letter (dating, signatories, refusal), PSA 570 Going Concern evaluation, mitigating factors, and Management Letter.',
  lectureOutline: `### PROCEDURES TO WRAP-UP AN AUDIT ENGAGEMENT
1. Review for related party transactions
2. Review for subsequent events (PSA 560)
3. Inquiries of client’s legal counsel
4. Obtain a management representation letter (PSA 580)
5. Search for unrecorded liabilities
6. Perform final review stage analytical procedures (PSA 520)
7. Review adequacy of disclosures using a disclosure checklist
8. Review of working papers
9. Form an opinion

---

### PSA 560: SUBSEQUENT EVENTS
Events occurring between the balance sheet date and the date when the financial statements are authorized for issue, and facts that become known to the auditor after the report date.

#### Three Periods
1. **Events between Balance Sheet Date and Date of Auditor’s Report:**
   - Active duty to perform procedures to identify events requiring adjustment or disclosure.
   - Type 1 (Adjusting): Conditions existing at or before BS date.
   - Type 2 (Non-adjusting): Conditions arising after BS date (disclose).
2. **Facts Discovered After Report Date but Before Financial Statements are Issued:**
   - No active duty to perform procedures, but if facts become known: discuss with management, determine if FS need amendment.
   - If amended, issue new report dated not earlier than approval date or dual-date report.
   - If management refuses to amend, modify opinion or notify TCWG and take steps to prevent reliance.
3. **Facts Discovered After Financial Statements Have Been Issued:**
   - No obligation to make inquiries. If facts existed at report date that would have caused modification: discuss with management, review steps taken by management to inform users, issue new amended report with Emphasis of Matter.

---

### INQUIRIES OF CLIENT’S LEGAL COUNSEL
- List of legal issues prepared by management and sent by the auditor to attorney.
- Attorney’s refusal to reply is a **scope limitation** leading to a qualified opinion or disclaimer.

---

### PSA 580: MANAGEMENT REPRESENTATION LETTER
- Confirms oral representations and reduces misunderstandings.
- Addressed to the auditor; **dated as of the audit report date**.
- Signed by the CEO and CFO.
- **Refusal to Provide Representations:** Constitutes a scope limitation; auditor shall express a **qualified opinion or disclaim an opinion**.
- Representations are NOT a substitute for other necessary auditing procedures.

---

### PSA 570: GOING CONCERN
- Management is responsible for assessing going concern.
- Auditor evaluates management's assessment and considers mitigating plans (e.g., postponing R&D, disposing non-core assets, restructuring debt).
- If material uncertainty exists and is adequately disclosed: issue an **unmodified opinion with a separate "Material Uncertainty Related to Going Concern" section**. If disclosure is inadequate, express a **qualified or adverse opinion**.

---

### MANAGEMENT LETTER
- Optional letter containing constructive recommendations for improving client operations and internal controls. No standard format.`,
  items: [
    {
      id: 'AT10011_Q1',
      n: 1,
      stem: 'The primary source of information to be reported about litigation, claims, and assessments is the',
      opts: [
        { label: 'A', text: 'Independent auditor' },
        { label: 'B', text: 'Client’s management' },
        { label: 'C', text: 'Court records' },
        { label: 'D', text: 'Client’s lawyer' }
      ],
      ans: 'B',
      explanation: 'Management is the primary source of information regarding litigation and claims; the lawyer provides corroboration.'
    },
    {
      id: 'AT10011_Q2',
      n: 2,
      stem: 'The primary reason an auditor requests that letters of inquiry be sent to a client’s attorneys is to provide the auditor with',
      opts: [
        { label: 'A', text: 'A description and evaluation of litigation, claims, and assessments that existed at the balance sheet date.' },
        { label: 'B', text: 'The attorneys’ opinions of the client’s historical experiences in recent similar litigation.' },
        { label: 'C', text: 'Corroboration of the information furnished by management about litigation, claims, and assessments.' },
        { label: 'D', text: 'The probable outcome of asserted claims and pending or threatened litigation.' }
      ],
      ans: 'C',
      explanation: 'Legal letters corroborate information furnished by management regarding claims and litigation.'
    },
    {
      id: 'AT10011_Q3',
      n: 3,
      stem: 'The letter of audit inquiry should be',
      opts: [
        { label: 'A', text: 'Prepared and sent by the auditor.' },
        { label: 'B', text: 'Prepared by management and sent by the auditor.' },
        { label: 'C', text: 'Prepared and sent by management.' },
        { label: 'D', text: 'Prepared by the auditor and sent by management.' }
      ],
      ans: 'B',
      explanation: 'The letter is prepared by management (authorizing disclosure) and mailed directly by the auditor.'
    },
    {
      id: 'AT10011_Q4',
      n: 4,
      stem: 'The refusal of a client’s lawyer to provide a representation on the legality of a particular act committed by the client is ordinarily',
      opts: [
        { label: 'A', text: 'Proper grounds to withdraw from the engagement.' },
        { label: 'B', text: 'Insufficient reason to modify the auditor’s report because of the lawyer’s obligation of confidentiality.' },
        { label: 'C', text: 'Considered to be a scope limitation.' },
        { label: 'D', text: 'Sufficient reason to issue a “subject to” opinion.' }
      ],
      ans: 'C',
      explanation: 'A refusal by client legal counsel to respond to an inquiry is a scope limitation.'
    },
    {
      id: 'AT10011_Q5',
      n: 5,
      stem: 'Management’s refusal to give the auditor permission to communicate with the entity’s legal counsel is most likely to lead to',
      opts: [
        { label: 'A', text: 'An adverse opinion.' },
        { label: 'B', text: 'A qualified opinion or an adverse opinion.' },
        { label: 'C', text: 'An unmodified opinion.' },
        { label: 'D', text: 'A qualified opinion or a disclaimer of opinion.' }
      ],
      ans: 'D',
      explanation: 'Precluding communication with lawyers is a management-imposed scope limitation (qualified or disclaimer).'
    },
    {
      id: 'AT10011_Q6',
      n: 6,
      stem: 'In which of the following circumstances would an auditor most likely meet with the client’s legal counsel to discuss the likely outcome of the litigation and claims?\nI. The auditor determines that the matter is a significant risk.\nII. There is a disagreement between management and the entity’s legal counsel.\nIII. The subject matter of the litigation is complex.',
      opts: [
        { label: 'A', text: 'I and II only.' },
        { label: 'B', text: 'II and III only.' },
        { label: 'C', text: 'I and III only.' },
        { label: 'D', text: 'I, II, and III.' }
      ],
      ans: 'D',
      explanation: 'A meeting with legal counsel is appropriate when risks are significant, disagreements exist, or litigation is highly complex.'
    },
    {
      id: 'AT10011_Q7',
      n: 7,
      stem: 'Which of the following statements extracted from a client’s lawyer’s letter concerning litigation, claims, and assessments most likely would cause the auditor to request clarification?',
      opts: [
        { label: 'A', text: '“I believe that the action can be settled for less than the damages claimed.”' },
        { label: 'B', text: '“I believe that the company will be able to defend this action successfully.”' },
        { label: 'C', text: '“I believe that the plaintiff’s case against the company is without merit.”' },
        { label: 'D', text: '“I believe that the possible liability to the company is nominal in amount.”' }
      ],
      ans: 'A',
      explanation: 'Stating that an action can be settled for less than claimed is ambiguous regarding the estimated range of loss, requiring clarification.'
    },
    {
      id: 'AT10011_Q8',
      n: 8,
      stem: 'The auditor should consider the status of legal matters up to the',
      opts: [
        { label: 'A', text: 'Balance sheet date.' },
        { label: 'B', text: 'Date of the auditor’s report.' },
        { label: 'C', text: 'Date of approval of the financial statements.' },
        { label: 'D', text: 'Date of issuance of the financial statements.' }
      ],
      ans: 'B',
      explanation: 'Legal matters and subsequent events are evaluated up to the date of the auditor\'s report.'
    },
    {
      id: 'AT10011_Q9',
      n: 9,
      stem: 'Analytical procedures used in the overall review stage of the audit generally include',
      opts: [
        { label: 'A', text: 'Retesting controls that appeared to be ineffective during the assessment of control risk.' },
        { label: 'B', text: 'Considering unusual or unexpected account balances that were not previously identified.' },
        { label: 'C', text: 'Gathering evidence concerning account balances that have not changed from the prior year.' },
        { label: 'D', text: 'Performing tests of transactions to corroborate management’s financial statement assertions.' }
      ],
      ans: 'B',
      explanation: 'Final review analytical procedures consider unusual or unexpected relationships not previously identified.'
    },
    {
      id: 'AT10011_Q10',
      n: 10,
      stem: 'Analytical procedures performed in the overall review stage of an audit suggest that several accounts have unexpected relationships. The results of these procedures most likely indicate that',
      opts: [
        { label: 'A', text: 'The communication with the audit committee should be revised.' },
        { label: 'B', text: 'Irregularities exist among the relevant account balances.' },
        { label: 'C', text: 'Additional substantive tests of details are required.' },
        { label: 'D', text: 'Internal control activities are not operating effectively.' }
      ],
      ans: 'C',
      explanation: 'Unexpected relationships identified during final analytical review necessitate performing additional substantive tests.'
    },
    {
      id: 'AT10011_Q11',
      n: 11,
      stem: 'The responsibility for the identification and disclosure of related parties and transactions with such parties rests with the',
      opts: [
        { label: 'A', text: 'Auditor.' },
        { label: 'B', text: 'Entity’s management.' },
        { label: 'C', text: 'Financial Reporting Standards Council (FRSC).' },
        { label: 'D', text: 'Securities and Exchange Commission (SEC).' }
      ],
      ans: 'B',
      explanation: 'Identification and disclosure of related parties is primarily management\'s responsibility.'
    },
    {
      id: 'AT10011_Q12',
      n: 12,
      stem: 'The auditor should review information provided by those charged with governance and management identifying\nI. The names of all known related parties.\nII. Related party transactions.',
      opts: [
        { label: 'A', text: 'I only.' },
        { label: 'B', text: 'II only.' },
        { label: 'C', text: 'Both I and II.' },
        { label: 'D', text: 'Neither I nor II.' }
      ],
      ans: 'C',
      explanation: 'The auditor must review information identifying both related party names and specific transactions.'
    },
    {
      id: 'AT10011_Q13',
      n: 13,
      stem: 'Which of the following events most likely indicates the existence of related parties?',
      opts: [
        { label: 'A', text: 'Making a loan without scheduled terms for repayment of the funds.' },
        { label: 'B', text: 'Discussing merger terms with a company that is a major competitor.' },
        { label: 'C', text: 'Selling real estate at a price that differs significantly from its book value.' },
        { label: 'D', text: 'Borrowing a large sum of money at a variable rate of interest.' }
      ],
      ans: 'A',
      explanation: 'Unscheduled, non-interest, or uncollateralized loans strongly indicate non-arm\'s-length related party transactions.'
    },
    {
      id: 'AT10011_Q14',
      n: 14,
      stem: 'An auditor searching for related party transactions should obtain an understanding of each subsidiary’s relationship to the total entity because',
      opts: [
        { label: 'A', text: 'This may permit the audit of intercompany account balances to be performed as of concurrent dates.' },
        { label: 'B', text: 'This may reveal whether particular transactions would have taken place if the parties had not been related.' },
        { label: 'C', text: 'The business structure may be deliberately designed to obscure related party transactions.' },
        { label: 'D', text: 'Intercompany transactions may have been consummated on terms equivalent to arm’s-length transactions.' }
      ],
      ans: 'C',
      explanation: 'Complex subsidiary or entity business structures may be deliberately used to obscure related party dealings.'
    },
    {
      id: 'AT10011_Q15',
      n: 15,
      stem: 'After determining that a related party transaction has, in fact, occurred, an auditor should',
      opts: [
        { label: 'A', text: 'Obtain an understanding of the business purpose of the transaction.' },
        { label: 'B', text: 'Substantiate that the transaction was consummated on terms equivalent to an arm’s-length transaction.' },
        { label: 'C', text: 'Add a separate paragraph to the auditor’s report to explain the transaction.' },
        { label: 'D', text: 'Perform analytical procedures to verify whether similar transactions occurred, but were not recorded.' }
      ],
      ans: 'A',
      explanation: 'The auditor must ascertain the underlying business purpose and economic rationale of the transaction.'
    },
    {
      id: 'AT10011_Q16',
      n: 16,
      stem: 'PSA 570 (Going Concern) states that a fundamental principle in the preparation of financial statements is the going concern assumption. Under this assumption, an entity is ordinarily viewed as continuing in business for the foreseeable future with neither the intention nor the necessity of liquidation, ceasing trading or seeking protection from creditors pursuant to laws and regulations. The responsibility to make an assessment of an entity’s ability to continue as a going concern rests with the',
      opts: [
        { label: 'A', text: 'Auditor' },
        { label: 'B', text: 'Entity’s management' },
        { label: 'C', text: 'SEC' },
        { label: 'D', text: 'Entity’s creditors' }
      ],
      ans: 'B',
      explanation: 'Management has the direct responsibility to assess the entity\'s going concern status.'
    },
    {
      id: 'AT10011_Q17',
      n: 17,
      stem: 'Which of the following statements best describes the auditor’s responsibility concerning the appropriateness of the going concern assumption in the preparation of the financial statements?',
      opts: [
        { label: 'A', text: 'The auditor’s responsibility is to make a specific assessment of the entity’s ability to continue as a going concern.' },
        { label: 'B', text: 'The auditor’s responsibility is to predict future events or conditions that may cause the entity to cease to continue as a going concern.' },
        { label: 'C', text: 'The auditor’s responsibility is to consider the appropriateness of management’s use of the going concern assumption and consider whether there are material uncertainties about the entity’s ability to continue as a going concern that need to be disclosed in the financial statements.' },
        { label: 'D', text: 'The auditor’s responsibility is to give a guarantee in the audit report that the entity has the ability to continue as a going concern.' }
      ],
      ans: 'C',
      explanation: 'Under PSA 570, the auditor evaluates management\'s use of the assumption and whether material uncertainties exist requiring disclosure.'
    },
    {
      id: 'AT10011_Q18',
      n: 18,
      stem: 'Which of the following conditions or events most likely would cause an auditor to have substantial doubt about an entity’s ability to continue as a going concern?',
      opts: [
        { label: 'A', text: 'Cash flows from operating activities are negative.' },
        { label: 'B', text: 'Stock dividends replace annual cash dividends.' },
        { label: 'C', text: 'Significant related party transactions are pervasive.' },
        { label: 'D', text: 'Research and development projects are postponed.' }
      ],
      ans: 'A',
      explanation: 'Negative cash flows from operations are a major financial indicator of going concern doubt.'
    },
    {
      id: 'AT10011_Q19',
      n: 19,
      stem: 'Which of the following conditions or events most likely would cause an auditor to have substantial doubt about an entity’s ability to continue as a going concern?',
      opts: [
        { label: 'A', text: 'Restrictions on the disposal of principal assets are present.' },
        { label: 'B', text: 'Usual trade credit from suppliers is denied.' },
        { label: 'C', text: 'Significant related party transactions are pervasive.' },
        { label: 'D', text: 'Arrearages in principal stock dividends are paid.' }
      ],
      ans: 'B',
      explanation: 'Denial of usual supplier trade credit (forced cash-on-delivery) signals severe working capital distress.'
    },
    {
      id: 'AT10011_Q20',
      n: 20,
      stem: 'Which of the following audit procedures would most likely assist an auditor in identifying conditions and events that may indicate there could be substantial doubt about an entity’s ability to continue as a going concern?',
      opts: [
        { label: 'A', text: 'Confirmation of bank balances.' },
        { label: 'B', text: 'Confirmation of accounts receivable from major customers.' },
        { label: 'C', text: 'Reconciliation of interest expense with debt outstanding.' },
        { label: 'D', text: 'Review of compliance with terms of debt agreements.' }
      ],
      ans: 'D',
      explanation: 'Reviewing debt covenant compliance detects defaults or violations that could trigger immediate loan acceleration.'
    },
    {
      id: 'AT10011_Q21',
      n: 21,
      stem: 'Harold, CPA, believes there is substantial doubt about the ability of Jersamtan Co. to continue as a going concern for a reasonable period of time. In evaluating Jersamtan’s plans for dealing with the adverse effects of future conditions and events, Harold most likely would consider, as a mitigating factor, Jersamtan’s plans to',
      opts: [
        { label: 'A', text: 'Postpone expenditures for research and development projects.' },
        { label: 'B', text: 'Purchase production facilities currently being leased from a related party.' },
        { label: 'C', text: 'Strengthen internal controls over cash disbursements.' },
        { label: 'D', text: 'Discuss with lenders the terms of all debt and loan agreements.' }
      ],
      ans: 'A',
      explanation: 'Postponing capital expenditures or R&D immediately reduces cash outflows, acting as a realistic mitigating plan.'
    },
    {
      id: 'AT10011_Q22',
      n: 22,
      stem: 'When an auditor concludes that there is substantial doubt about a continuing audit client’s ability to continue as a going concern for a reasonable period of time, the auditor’s responsibility is to',
      opts: [
        { label: 'A', text: 'Consider the adequacy of disclosure about the client’s possible inability to continue as a going concern.' },
        { label: 'B', text: 'Issue a qualified or adverse opinion, depending upon materiality, due to the possible effects on the financial statements.' },
        { label: 'C', text: 'Report to the client’s audit committee that management’s accounting estimates may need to be adjusted.' },
        { label: 'D', text: 'Reissue the prior year’s auditor’s report and add an emphasis of matter paragraph that specifically refers to “substantial doubt” and “going concern.”' }
      ],
      ans: 'A',
      explanation: 'The auditor must evaluate whether the disclosures concerning the going concern uncertainty are adequate in the notes.'
    },
    {
      id: 'AT10011_Q23',
      n: 23,
      stem: 'As used in PSA 560 (Subsequent Events), the term “subsequent events” refers to\nI. Events occurring between the date of the financial statements and the date of the auditor’s report.\nII. Facts discovered after the date of the auditor’s report.',
      opts: [
        { label: 'A', text: 'I only.' },
        { label: 'B', text: 'II only.' },
        { label: 'C', text: 'Both I and II.' },
        { label: 'D', text: 'Neither I nor II.' }
      ],
      ans: 'C',
      explanation: 'PSA 560 explicitly defines subsequent events as both events up to the report date and facts discovered after the report date.'
    },
    {
      id: 'AT10011_Q24',
      n: 24,
      stem: 'Which of the following statements best describes the “date of the financial statements?”',
      opts: [
        { label: 'A', text: 'The date on which those with the recognized authority assert that they have prepared the entity’s complete set of financial statements, including the related notes, and that they have taken responsibility for them.' },
        { label: 'B', text: 'The date that the auditor’s report and audited financial statements are made available to third parties.' },
        { label: 'C', text: 'The date of the end of the latest period covered by the financial statements, which is normally the date of the most recent balance sheet in the financial statements subject to audit.' },
        { label: 'D', text: 'The date on which the auditor has obtained sufficient appropriate audit evidence on which to base the opinion on the financial statements.' }
      ],
      ans: 'C',
      explanation: 'This is the exact definition of "Date of the financial statements" under PSA 560.'
    },
    {
      id: 'AT10011_Q25',
      n: 25,
      stem: 'Which of the following procedures would an auditor most likely perform to obtain evidence about the occurrence of subsequent events?',
      opts: [
        { label: 'A', text: 'Inquiring as to whether any unusual adjustments were made after the date of the financial statements.' },
        { label: 'B', text: 'Confirming a sample of material accounts receivable established after the date of the financial statements.' },
        { label: 'C', text: 'Comparing the financial statements being reported on with those of the prior period.' },
        { label: 'D', text: 'Investigating personnel changes in the accounting department occurring after the date of the financial statements.' }
      ],
      ans: 'A',
      explanation: 'Inquiring whether unusual adjustments were made after the balance sheet date is a specific subsequent events procedure.'
    },
    {
      id: 'AT10011_Q26',
      n: 26,
      stem: 'Which of the following statements best expresses the auditor’s responsibility with respect to facts discovered after the date of the auditor’s report but before the date the financial statements are issued?',
      opts: [
        { label: 'A', text: 'The auditor should amend the financial statements.' },
        { label: 'B', text: 'If the facts discovered will materially affect the financial statements, the auditor should issue a new report which contains either a qualified opinion or an adverse opinion.' },
        { label: 'C', text: 'The auditor should consider whether the financial statements need amendment, discuss the matter with management, and consider taking actions appropriate in the circumstances.' },
        { label: 'D', text: 'The auditor should withdraw from the engagement.' }
      ],
      ans: 'C',
      explanation: 'The auditor discusses with management whether amendment is needed and determines appropriate audit action.'
    },
    {
      id: 'AT10011_Q27',
      n: 27,
      stem: 'After issuing a report, an auditor has no obligation to make continuing inquiries or perform other procedures concerning the audited financial statements, unless',
      opts: [
        { label: 'A', text: 'Final determinations or resolutions are made of contingencies that had been disclosed in the financial statements.' },
        { label: 'B', text: 'Information about an event that occurred after the date of the auditor’s report comes to the auditor’s attention.' },
        { label: 'C', text: 'The control environment changes after issuance of the report.' },
        { label: 'D', text: 'Information, which existed at the report date and may affect the report, comes to the auditor’s attention.' }
      ],
      ans: 'D',
      explanation: 'The auditor has no ongoing obligation unless information which existed at report date comes to attention.'
    },
    {
      id: 'AT10011_Q28',
      n: 28,
      stem: 'Which of the following events occurring after the issuance of an auditor’s report most likely would cause the auditor to make further inquiries about the previously issued financial statements?',
      opts: [
        { label: 'A', text: 'A technological development that could affect the entity’s future ability to continue as a going concern.' },
        { label: 'B', text: 'The entity’s sale of a subsidiary that accounts for 30% of the entity’s consolidated sales.' },
        { label: 'C', text: 'The discovery of information regarding a contingency that existed before the financial statements were issued.' },
        { label: 'D', text: 'The final resolution of a lawsuit disclosed in the notes to the financial statements.' }
      ],
      ans: 'C',
      explanation: 'Discovery of information about a contingency that existed before the statements were issued requires investigation.'
    },
    {
      id: 'AT10011_Q29',
      n: 29,
      stem: 'The auditor is required to obtain audit evidence that management\nI. Acknowledges its responsibility for the fair presentation of the financial statements in accordance with applicable financial reporting framework.\nII. Has approved the financial statements.',
      opts: [
        { label: 'A', text: 'I only.' },
        { label: 'B', text: 'II only.' },
        { label: 'C', text: 'Both I and II.' },
        { label: 'D', text: 'Neither I nor II.' }
      ],
      ans: 'C',
      explanation: 'Under PSA 580, evidence must be obtained that management acknowledges responsibility and has approved the FS.'
    },
    {
      id: 'AT10011_Q30',
      n: 30,
      stem: 'When an audit is made in accordance with generally accepted auditing standards, the auditor should always',
      opts: [
        { label: 'A', text: 'Observe the taking of physical inventory on the balance sheet date.' },
        { label: 'B', text: 'Obtain certain written representations from management.' },
        { label: 'C', text: 'Employ analytical procedures as substantive tests to obtain evidence about specific assertions related to account balances.' },
        { label: 'D', text: 'Document the understanding of the client’s internal control and the basis for all conclusions about the assessed level of control risk for financial statement assertions.' }
      ],
      ans: 'B',
      explanation: 'Obtaining written representations from management (PSA 580) is mandatory in all financial statement audits.'
    },
    {
      id: 'AT10011_Q31',
      n: 31,
      stem: 'When considering the use of management’s written representations as audit evidence about the completeness assertion, an auditor should understand that such representations',
      opts: [
        { label: 'A', text: 'Constitute sufficient appropriate audit evidence to support the assertion when considered in combination with a sufficiently low assessed level of control risk.' },
        { label: 'B', text: 'Are not part of the audit evidence considered to support the assertion.' },
        { label: 'C', text: 'Replace a low assessed level of control risk as audit evidence to support the assertion.' },
        { label: 'D', text: 'Complement, but do not replace, substantive tests designed to support the assertion.' }
      ],
      ans: 'D',
      explanation: 'Management representations complement, but cannot substitute for or replace, substantive audit procedures.'
    },
    {
      id: 'AT10011_Q32',
      n: 32,
      stem: 'A written representation from a client’s management that, among other matters, acknowledges responsibility for the fair presentation of financial statements, should normally be signed by the',
      opts: [
        { label: 'A', text: 'Chief financial officer and the chair of the board of directors.' },
        { label: 'B', text: 'Chief executive officer and the chief financial officer.' },
        { label: 'C', text: 'Chief executive officer, the chair of the board of directors, and the client’s lawyer.' },
        { label: 'D', text: 'Chair of the audit committee of the board of directors.' }
      ],
      ans: 'B',
      explanation: 'Under PSA 580, the letter is normally signed by the CEO and CFO.'
    },
    {
      id: 'AT10011_Q33',
      n: 33,
      stem: 'The date of the management representation letter should coincide with the date of the',
      opts: [
        { label: 'A', text: 'Balance sheet' },
        { label: 'B', text: 'Latest related party transaction' },
        { label: 'C', text: 'Auditor’s report' },
        { label: 'D', text: 'Latest interim financial information' }
      ],
      ans: 'C',
      explanation: 'The representation letter must be dated as of the date of the auditor\'s report.'
    },
    {
      id: 'AT10011_Q34',
      n: 34,
      stem: 'Which of the following statements concerning management representations is incorrect?',
      opts: [
        { label: 'A', text: 'Representations by management can be a substitute for other audit evidence that the auditor could reasonably expect to be available.' },
        { label: 'B', text: 'If the auditor is unable to obtain sufficient appropriate audit evidence regarding a matter, which has, or may have, a material effect on the financial statements and such audit evidence is expected to be available, this will constitute a limitation in the scope of the audit, even if a representation from management has been received on the matter.' },
        { label: 'C', text: 'If a representation by management is contradicted by other audit evidence, the auditor should investigate the circumstances and, when necessary, reconsider the reliability of other representations by management.' },
        { label: 'D', text: 'The auditor’s working papers would ordinarily include a summary of oral discussions with management or written representations from management.' }
      ],
      ans: 'A',
      explanation: 'Representations by management CANNOT be a substitute for other audit evidence.'
    },
    {
      id: 'AT10011_Q35',
      n: 35,
      stem: 'What type of opinion should be expressed if the client’s management refuses to provide a representation that the auditor considers necessary?',
      opts: [
        { label: 'A', text: 'Qualified opinion or a disclaimer of opinion.' },
        { label: 'B', text: 'Qualified opinion or an adverse opinion.' },
        { label: 'C', text: 'Adverse opinion or a disclaimer of opinion' },
        { label: 'D', text: 'Unmodified opinion.' }
      ],
      ans: 'A',
      explanation: 'Management refusal to provide written representations is a scope limitation (qualified or disclaimer of opinion).'
    }
  ]
};
