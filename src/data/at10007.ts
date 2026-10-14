import { ModuleData } from './types';

export const at10007: ModuleData = {
  id: 'AT-10007',
  code: 'AT-10007',
  title: 'Audit Evidence, Specific Considerations, Confirmations, Estimates, Documentation',
  standards: 'PSA 500, PSA 501, PSA 505, PSA 540, PSA 230',
  questionCount: 50,
  summary: 'Sufficient Appropriate Audit Evidence, Reliability Generalizations, Management Assertions (Transactions, Balances), Audit Procedures (Inspection, Observation, Inquiry, Confirmation, Recalculation, Reperformance, Analytical), PSA 501 Inventory attendance & litigation, PSA 505 Positive vs Negative Confirmations, PSA 540 Accounting Estimates, and PSA 230 Audit Documentation (Experienced auditor concept, 60-day assembly, permanent vs current files, ownership of working papers).',
  lectureOutline: `### PSA 500: AUDIT EVIDENCE
Information used by the auditor in arriving at conclusions on which the opinion is based:
- **Sufficiency:** Quantity of evidence.
- **Appropriateness:** Quality of evidence (Relevance and Reliability).

#### Generalizations on Reliability of Audit Evidence
1. Evidence obtained from independent sources outside the entity is more reliable.
2. Evidence generated internally is more reliable when related controls are effective.
3. Evidence obtained directly by the auditor (e.g. observation) is more reliable than indirect evidence (e.g. inquiry).
4. Evidence in documentary form (paper or electronic) is more reliable than oral representation.
5. Original documents are more reliable than photocopies or facsimiles.

#### Financial Statement Assertions
- **Classes of Transactions & Events:** Occurrence, Completeness, Accuracy, Cutoff, Classification, Presentation.
- **Account Balances at Period End:** Existence, Rights and Obligations, Completeness, Accuracy/Valuation and Allocation, Classification, Presentation.

---

### PSA 501: SPECIFIC CONSIDERATIONS FOR SELECTED ITEMS
- **Inventory:** Attendance at physical inventory counting is required unless impracticable. If unforeseen circumstances prevent attendance on planned date, observe counts on an alternative date and test intervening transactions.
- **Litigation and Claims:** Letter of general inquiry prepared by management and sent by the auditor directly to external legal counsel. Management refusal is a scope limitation (qualified/disclaimer).

---

### PSA 505: EXTERNAL CONFIRMATIONS
- **Positive Confirmation:** Respondent replies directly indicating agreement or disagreement, or providing information.
- **Negative Confirmation:** Respondent replies only if in disagreement. Provides less persuasive evidence; used only when risk is low, large number of small balances, low exception rate expected, and no reason to believe requests will be disregarded.
- **Control of Confirmations:** Auditor must maintain direct control over preparing, addressing, and sending requests and receiving replies.

---

### PSA 540: AUDITING ACCOUNTING ESTIMATES
Approaches to auditing estimates:
1. Review and test the process used by management.
2. Develop an independent point estimate or range for comparison.
3. Review subsequent events confirming the estimate.

---

### PSA 230: AUDIT DOCUMENTATION (WORKING PAPERS)
- Must enable an **experienced auditor** having no previous connection with the audit to understand nature, timing, extent, results, and significant matters.
- **Assembly of Final Audit File:** Ordinarily completed within **not more than 60 days** after the date of the auditor's report.
- **Ownership:** Working papers are the property of the auditor (cannot substitute for the entity's accounting records).
- **Files:**
  - *Permanent File:* Continuing interest (articles of incorporation, contracts, loan indentures, internal control flowcharts, engagement letter).
  - *Current File:* Pertinent to the current year (lead schedules, working trial balance, audit program, confirmations, rep letter).`,
  items: [
    {
      id: 'AT10007_Q1',
      n: 1,
      stem: 'Which of the following is correct?',
      opts: [
        { label: 'A', text: 'The evidence that the auditor accumulates remains the same from audit to audit, but the general objectives vary, depending on the circumstances.' },
        { label: 'B', text: 'The general audit objectives remain the same from audit to audit, but the evidence varies, depending on the circumstances.' },
        { label: 'C', text: 'The circumstances may vary from audit to audit, but the evidence accumulated remains the same.' },
        { label: 'D', text: 'The general audit objectives may vary from audit to audit, but the circumstances remain the same.' }
      ],
      ans: 'B',
      explanation: 'General audit objectives remain constant across audits, while evidence gathered varies based on risk and circumstances.'
    },
    {
      id: 'AT10007_Q2',
      n: 2,
      stem: 'Auditing standards require the auditor to accumulate sufficient competent evidence to support the opinion issued. Because of the nature of audit evidence, it is',
      opts: [
        { label: 'A', text: 'unlikely that the auditor will be completely convinced that the opinion is correct.' },
        { label: 'B', text: 'likely that the auditor will be completely convinced that the opinion is correct.' },
        { label: 'C', text: 'unlikely that the auditor will arrive at a conclusion.' },
        { label: 'D', text: 'likely that the auditor would change his/her mind about the opinion if he/she takes the time to gather additional evidence.' }
      ],
      ans: 'A',
      explanation: 'Audit evidence is persuasive rather than conclusive; absolute conviction is unattainable.'
    },
    {
      id: 'AT10007_Q3',
      n: 3,
      stem: 'An audit evidence is generally considered relevant when it is',
      opts: [
        { label: 'A', text: 'derived through valid statistical sampling.' },
        { label: 'B', text: 'objective and unbiased.' },
        { label: 'C', text: 'factual, adequate, and convincing.' },
        { label: 'D', text: 'consistent with the audit objectives.' }
      ],
      ans: 'D',
      explanation: 'Relevance refers to the logical connection with the specific audit objective or assertion being tested.'
    },
    {
      id: 'AT10007_Q4',
      n: 4,
      stem: 'Which of the following statements concerning evidential matter is true?',
      opts: [
        { label: 'A', text: 'Appropriate evidence supporting management’s assertions should be convincing rather than merely persuasive.' },
        { label: 'B', text: 'Effective internal control contributes little to the reliability of the evidence created within the entity.' },
        { label: 'C', text: 'The cost of obtaining evidence is not an important consideration to an auditor in deciding what evidence should be obtained.' },
        { label: 'D', text: 'A client’s accounting records cannot be considered sufficient evidence to support the financial statements.' }
      ],
      ans: 'D',
      explanation: 'Accounting records alone are not sufficient; they must be corroborated with other audit evidence.'
    },
    {
      id: 'AT10007_Q5',
      n: 5,
      stem: 'Evidential matter supporting the financial statements consists of the underlying accounting data and all corroborating information available to the auditor. Which of the following is an example of corroborating information?',
      opts: [
        { label: 'A', text: 'Minutes of meetings of the board of directors' },
        { label: 'B', text: 'General and subsidiary ledgers' },
        { label: 'C', text: 'Accounting manuals' },
        { label: 'D', text: 'Worksheets supporting cost allocations' }
      ],
      ans: 'A',
      explanation: 'Minutes of board meetings constitute corroborating information outside the underlying accounting records.'
    },
    {
      id: 'AT10007_Q6',
      n: 6,
      stem: 'Which of the following types of audit evidence provides the least assurance of reliability?',
      opts: [
        { label: 'A', text: 'Receivable confirmations received from the client\'s customers.' },
        { label: 'B', text: 'Prenumbered receiving reports completed by the client\'s employees.' },
        { label: 'C', text: 'Prior months\' bank statements obtained from the client.' },
        { label: 'D', text: 'Municipal property tax bills prepared in the client\'s name.' }
      ],
      ans: 'B',
      explanation: 'Internally generated receiving reports prepared by client employees provide less reliability than external third-party documents.'
    },
    {
      id: 'AT10007_Q7',
      n: 7,
      stem: 'Which of the following procedures would provide the most reliable audit evidence?',
      opts: [
        { label: 'A', text: 'Inquiries of the client’s internal audit staff held in private' },
        { label: 'B', text: 'Inspection of prenumbered client purchase orders filed in the vouchers payable department' },
        { label: 'C', text: 'Analytical procedures performed by the auditor on the entity’s trial balance' },
        { label: 'D', text: 'Inspection of bank statements obtained directly from the client’s financial institution' }
      ],
      ans: 'D',
      explanation: 'Bank statements obtained directly by the auditor from external financial institutions have the highest reliability.'
    },
    {
      id: 'AT10007_Q8',
      n: 8,
      stem: 'Which of the following is not a basic procedure used in an audit?',
      opts: [
        { label: 'A', text: 'Risk assessment procedures.' },
        { label: 'B', text: 'Substantive test procedures.' },
        { label: 'C', text: 'Tests of controls.' },
        { label: 'D', text: 'Tests of direct evidence.' }
      ],
      ans: 'D',
      explanation: 'The three basic procedure categories are: RAP, TOC, and Substantive Procedures.'
    },
    {
      id: 'AT10007_Q9',
      n: 9,
      stem: 'Audit procedures may be classified as risk assessment procedures and further audit procedures. Which of the following does not describes further audit procedures?',
      opts: [
        { label: 'A', text: 'These procedures test the operating effectiveness of controls in preventing, or detecting and correcting, material misstatements at the assertion level.' },
        { label: 'B', text: 'These procedures are used to detect material misstatements at the assertion level.' },
        { label: 'C', text: 'These are procedures for obtaining an understanding of the entity and its environment, including its internal control, to assess the risks of material misstatement at the financial statement and assertion levels.' },
        { label: 'D', text: 'These procedures include tests of details of classes of transactions, account balances, and disclosures and analytical procedures.' }
      ],
      ans: 'C',
      explanation: 'Obtaining an understanding to assess RMM describes risk assessment procedures, not further audit procedures.'
    },
    {
      id: 'AT10007_Q10',
      n: 10,
      stem: 'Which of the following is not a distinguishing feature of risk-based auditing?',
      opts: [
        { label: 'A', text: 'Identifying areas posing the highest risk of financial statement errors' },
        { label: 'B', text: 'Analysis of internal control' },
        { label: 'C', text: 'Collecting and evaluating evidence' },
        { label: 'D', text: 'Concentrating audit resources in those areas presenting the highest risk of financial statement errors' }
      ],
      ans: 'C',
      explanation: 'Collecting and evaluating evidence is common to all audit methodologies, not a distinguishing feature of risk-based auditing.'
    },
    {
      id: 'AT10007_Q11',
      n: 11,
      stem: 'Observation is considered a reliable audit procedure but one that is limited in usefulness. However, it is used in a number of different situations. Which of the following statements is true regarding observation as an audit technique?',
      opts: [
        { label: 'A', text: 'It is the most effective audit methodology to use in filling out internal control questionnaires.' },
        { label: 'B', text: 'It is the most persuasive methodology to learn how transactions are really processed during the period under audit.' },
        { label: 'C', text: 'It is the most persuasive audit technique for determining if fraud has occurred.' },
        { label: 'D', text: 'It is most persuasive about the performance of a process but is limited to the moment in time at which the observation takes place.' }
      ],
      ans: 'D',
      explanation: 'Observation is limited to the point in time at which the observation takes place, and the act of observing may affect behavior.'
    },
    {
      id: 'AT10007_Q12',
      n: 12,
      stem: 'Which of the following is a false statement about audit objectives?',
      opts: [
        { label: 'A', text: 'There should be a one-to-one relationship between audit objectives and procedures.' },
        { label: 'B', text: 'Audit objectives should be developed in light of management assertions about the financial statement components.' },
        { label: 'C', text: 'Selection of tests of financial statement assertions should depend upon the understanding of internal control.' },
        { label: 'D', text: 'The auditor should resolve any substantial doubt about any of management’s relevant financial statement assertions.' }
      ],
      ans: 'A',
      explanation: 'There is not a one-to-one relationship; a single procedure can satisfy multiple objectives, and multiple procedures may be needed for one objective.'
    },
    {
      id: 'AT10007_Q13',
      n: 13,
      stem: 'Which of the following is not an assertion relating to classes of transactions?',
      opts: [
        { label: 'A', text: 'Accuracy.' },
        { label: 'B', text: 'Occurrence.' },
        { label: 'C', text: 'Cutoff.' },
        { label: 'D', text: 'Consistency.' }
      ],
      ans: 'D',
      explanation: '"Consistency" is not one of the standard assertions under PSA 500 (which are occurrence, completeness, accuracy, cutoff, classification, presentation).'
    },
    {
      id: 'AT10007_Q14',
      n: 14,
      stem: 'Which of the following is a management assertion regarding account balances at the period end?',
      opts: [
        { label: 'A', text: 'Transactions and events that have been recorded have occurred and pertain to the entity.' },
        { label: 'B', text: 'Transactions and events have been recorded in the proper accounts.' },
        { label: 'C', text: 'The entity holds or controls the rights to assets, and liabilities are obligations of the entity.' },
        { label: 'D', text: 'Amounts and other data related to transactions and events have been recorded appropriately.' }
      ],
      ans: 'C',
      explanation: 'Rights and obligations is an assertion regarding account balances at period end.'
    },
    {
      id: 'AT10007_Q15',
      n: 15,
      stem: 'Which of the following might be detected by an auditor’s review of the client’s sales cut-off?',
      opts: [
        { label: 'A', text: 'Excessive goods returned for credit.' },
        { label: 'B', text: 'Unrecorded sales discounts.' },
        { label: 'C', text: 'Lapping of year-end accounts receivable.' },
        { label: 'D', text: 'Inflated sales for the year.' }
      ],
      ans: 'D',
      explanation: 'Recording subsequent period sales in the current period inflates current year sales; sales cut-off tests detect this.'
    },
    {
      id: 'AT10007_Q16',
      n: 16,
      stem: 'Which of the following should be considered by the auditor in deciding which means (or combination of means) to use in selecting items for testing?\nI. The risk of material misstatement related to the assertion being tested.\nII. Audit efficiency.',
      opts: [
        { label: 'A', text: 'I only' },
        { label: 'B', text: 'II only' },
        { label: 'C', text: 'Both I and II' },
        { label: 'D', text: 'Neither I nor II' }
      ],
      ans: 'C',
      explanation: 'Both RMM and audit efficiency guide whether to use 100% examination, specific item selection, or audit sampling.'
    },
    {
      id: 'AT10007_Q17',
      n: 17,
      stem: 'Which of the following statements about specific item testing is false?',
      opts: [
        { label: 'A', text: 'It is selective.' },
        { label: 'B', text: 'It does not constitute sampling.' },
        { label: 'C', text: 'It can be an efficient means of gathering audit evidence.' },
        { label: 'D', text: 'The results of audit procedures applied to items selected in this way can be projected to the entire population.' }
      ],
      ans: 'D',
      explanation: 'Results from selecting specific items (e.g. high-value items) CANNOT be projected to the remainder of the population.'
    },
    {
      id: 'AT10007_Q18',
      n: 18,
      stem: 'According to PSA 530, selecting specific items may include selecting the following, except:',
      opts: [
        { label: 'A', text: 'All items over a certain amount' },
        { label: 'B', text: 'Low value or non-key items' },
        { label: 'C', text: 'Items to obtain information' },
        { label: 'D', text: 'Items to test control' }
      ],
      ans: 'B',
      explanation: 'Specific item selection focuses on high-value, key, or risk items, not low-value non-key items.'
    },
    {
      id: 'AT10007_Q19',
      n: 19,
      stem: 'It will be appropriate to audit all the items that make up a class of transactions or account balance (100% examination), except',
      opts: [
        { label: 'A', text: 'When the class of transactions or account balance consists of a large number of small value items.' },
        { label: 'B', text: 'When the class of transactions or account balance consists of a small number of large value items.' },
        { label: 'C', text: 'When there is a significant risk of misstatement and other selection methods do not provide sufficient appropriate audit evidence.' },
        { label: 'D', text: 'When the repetitive nature of a calculation or other process performed automatically by the client’s computer information system (CIS) makes a 100% examination cost effective.' }
      ],
      ans: 'A',
      explanation: 'Large numbers of small-value items are suited for audit sampling, not 100% examination.'
    },
    {
      id: 'AT10007_Q20',
      n: 20,
      stem: 'Audit sampling involves the',
      opts: [
        { label: 'A', text: 'Selection of all items over a certain amount' },
        { label: 'B', text: 'Application of audit procedures to all items that comprise a class of transactions or an account balance' },
        { label: 'C', text: 'Application of audit procedures to all items over a certain amount and those that are unusual or have a history of error' },
        { label: 'D', text: 'Application of audit procedures to less than 100% of items within a class of transactions or an account balance such that all items have a chance of selection' }
      ],
      ans: 'D',
      explanation: 'This is the definition of audit sampling under PSA 530.'
    },
    {
      id: 'AT10007_Q21',
      n: 21,
      stem: 'Confirmation is “the process of obtaining and evaluating a direct communication from a third party in response to a request for information about a particular item affecting financial statement assertions.” Two assertions for which confirmation of accounts receivable balances provides primary evidence are',
      opts: [
        { label: 'A', text: 'Completeness and valuation' },
        { label: 'B', text: 'Existence and completeness' },
        { label: 'C', text: 'Valuation and rights and obligations' },
        { label: 'D', text: 'Rights and obligations and existence' }
      ],
      ans: 'D',
      explanation: 'Accounts receivable confirmation primarily tests existence and rights and obligations (it does not prove collectibility/valuation or completeness).'
    },
    {
      id: 'AT10007_Q22',
      n: 22,
      stem: 'Who signs the confirmation requests?',
      opts: [
        { label: 'A', text: 'The audit partner' },
        { label: 'B', text: 'The CEO/CFO of the client' },
        { label: 'C', text: 'The appropriate level of management' },
        { label: 'D', text: 'Both management and the auditor' }
      ],
      ans: 'C',
      explanation: 'The request must be signed by the appropriate level of management to authorize the third party to release information to the auditor.'
    },
    {
      id: 'AT10007_Q23',
      n: 23,
      stem: 'When the recipient has accomplished the confirmation request, replies should be:',
      opts: [
        { label: 'A', text: 'Sent directly to the auditor' },
        { label: 'B', text: 'Sent directly to the client, after which the client gives the replies to the auditor' },
        { label: 'C', text: 'Sent directly to the auditor, with another copy of the reply going to the client' },
        { label: 'D', text: 'Not sent back since a confirmation request does not necessitate replies' }
      ],
      ans: 'A',
      explanation: 'To maintain audit evidence integrity, confirmation replies must be sent directly to the auditor.'
    },
    {
      id: 'AT10007_Q24',
      n: 24,
      stem: 'Which of the following sets of information does an auditor confirm on one form?',
      opts: [
        { label: 'A', text: 'Accounts payable and purchase commitments.' },
        { label: 'B', text: 'Cash in bank and collateral for loans.' },
        { label: 'C', text: 'Inventory on consignment and contingent liabilities.' },
        { label: 'D', text: 'Accounts receivable and accrued interest receivable.' }
      ],
      ans: 'B',
      explanation: 'The standard bank confirmation request form confirms cash deposit balances and loan collateral simultaneously.'
    },
    {
      id: 'AT10007_Q25',
      n: 25,
      stem: 'In which of the following circumstances would the use of the negative form of accounts receivable confirmation most likely be justified?',
      opts: [
        { label: 'A', text: 'A substantial number of accounts may be in dispute and the accounts receivable balance arises from sales to a few major customers.' },
        { label: 'B', text: 'A substantial number of accounts may be in dispute and the accounts receivable balance arises from sales to many customers with small balances.' },
        { label: 'C', text: 'A small number of accounts may be in dispute and the accounts receivable balance arises from sales to a few major customers.' },
        { label: 'D', text: 'A small number of accounts may be in dispute and the accounts receivable balance arises from sales to many customers with small balances.' }
      ],
      ans: 'D',
      explanation: 'Negative confirmation is justified when RMM is low, many small balances are involved, and low exception rate is expected.'
    },
    {
      id: 'AT10007_Q26',
      n: 26,
      stem: 'Positive confirmation request is not used when:',
      opts: [
        { label: 'A', text: 'A large number of small balances are involved.' },
        { label: 'B', text: 'The entity’s information systems and internal controls are unreliable or ineffective' },
        { label: 'C', text: 'The information available to corroborate management’s assertion(s) is only available outside the entity' },
        { label: 'D', text: 'Specific fraud risk factors, such as risk of management override of internal controls, prevent the auditor from relying on evidence from the entity.' }
      ],
      ans: 'A',
      explanation: 'When a large number of small balances are involved and risk is low, negative confirmation is used instead.'
    },
    {
      id: 'AT10007_Q27',
      n: 27,
      stem: 'The return of positive accounts receivable confirmation without an exception attests to the',
      opts: [
        { label: 'A', text: 'Collectibility of the accounts receivable.' },
        { label: 'B', text: 'Accuracy of the aging of accounts receivable.' },
        { label: 'C', text: 'Accuracy of the receivables balance.' },
        { label: 'D', text: 'Accuracy of the allowance for bad debts.' }
      ],
      ans: 'C',
      explanation: 'Confirmation attests that the balance recorded exists and is acknowledged by the debtor (accuracy of balance).'
    },
    {
      id: 'AT10007_Q28',
      n: 28,
      stem: 'Which of the following statements is correct concerning the use of negative confirmation requests?',
      opts: [
        { label: 'A', text: 'Unreturned negative confirmation requests rarely provide significant explicit evidence.' },
        { label: 'B', text: 'Negative confirmation requests are effective when detection risk is low.' },
        { label: 'C', text: 'Unreturned negative confirmation requests indicate that alternative procedures are necessary.' },
        { label: 'D', text: 'Negative confirmation requests are effective when understatements of account balances are suspected.' }
      ],
      ans: 'A',
      explanation: 'An unreturned negative confirmation provides implicit, not explicit, evidence because the debtor may simply have discarded it.'
    },
    {
      id: 'AT10007_Q29',
      n: 29,
      stem: 'The blank form of accounts receivable confirmations may be less efficient than the positive form because',
      opts: [
        { label: 'A', text: 'Shipping documents need to be inspected.' },
        { label: 'B', text: 'Recipients may sign the forms without proper investigation.' },
        { label: 'C', text: 'More nonresponses to the requests are likely to occur.' },
        { label: 'D', text: 'Subsequent cash receipts need to be verified.' }
      ],
      ans: 'C',
      explanation: 'Blank forms require the recipient to fill in the balance, which leads to lower response rates and greater follow-up work.'
    },
    {
      id: 'AT10007_Q30',
      n: 30,
      stem: 'Which of the following procedures would an auditor most likely perform for year-end accounts receivable confirmations when the auditor did not receive replies to second requests?',
      opts: [
        { label: 'A', text: 'Review the cash receipts journal for the month prior to year-end.' },
        { label: 'B', text: 'Intensify the study of internal control concerning the revenue cycle.' },
        { label: 'C', text: 'Increase the assessed level of detection risk for the existence assertion.' },
        { label: 'D', text: 'Inspect the shipping records documenting the merchandise sold to the debtors.' }
      ],
      ans: 'D',
      explanation: 'Alternative procedures for non-responding accounts receivable include inspecting subsequent cash collections and shipping documents/invoices.'
    },
    {
      id: 'AT10007_Q31',
      n: 31,
      stem: 'Which of the following audit procedures is best for identifying unrecorded trade accounts payable?',
      opts: [
        { label: 'A', text: 'Reviewing cash disbursements recorded subsequent to the reporting date to determine whether the related payables apply to the prior period.' },
        { label: 'B', text: 'Investigating payables recorded just prior to and just subsequent to the reporting date to determine whether they are supported by receiving reports.' },
        { label: 'C', text: 'Examining unusual relationships between monthly accounts payable balances and recorded cash payments.' },
        { label: 'D', text: 'Reconciling vendors’ statements to the file of receiving reports to identify items received just prior to the reporting date.' }
      ],
      ans: 'A',
      explanation: 'The search for unrecorded liabilities examines subsequent cash disbursements and matching receiving reports.'
    },
    {
      id: 'AT10007_Q32',
      n: 32,
      stem: 'S1: The primary source of information to be reported about litigation, claims, and assessments is the client’s management.\nS2: The primary source for evidence to corroborate the existence of pending litigation is attorney confirmations.',
      opts: [
        { label: 'A', text: 'True, true' },
        { label: 'B', text: 'False, false' },
        { label: 'C', text: 'True, false' },
        { label: 'D', text: 'False, true' }
      ],
      ans: 'A',
      explanation: 'Management is the primary source of information, and the attorney letter of inquiry provides primary corroboration.'
    },
    {
      id: 'AT10007_Q33',
      n: 33,
      stem: 'The auditor considers the status of legal matters up to',
      opts: [
        { label: 'A', text: 'The date of the audit report.' },
        { label: 'B', text: 'The reporting date.' },
        { label: 'C', text: 'The issuance of financial statements.' },
        { label: 'D', text: 'The date of receipt of letter from lawyers.' }
      ],
      ans: 'A',
      explanation: 'Legal inquiry responses and status of litigation are evaluated up to the date of the auditor\'s report.'
    },
    {
      id: 'AT10007_Q34',
      n: 34,
      stem: 'Which of the following procedures might be useful in discovering a contingent liability for a lawsuit that management is intentionally neglecting to disclose?',
      opts: [
        { label: 'A', text: 'Inquiries (orally and in writing) of management.' },
        { label: 'B', text: 'Analyzing legal expense and review invoices and statements from outside legal counsel.' },
        { label: 'C', text: 'Reviewing current and previous years’ internal revenue agent reports.' },
        { label: 'D', text: 'Obtaining a letter of representation from management that it is aware of no undisclosed contingent liabilities.' }
      ],
      ans: 'B',
      explanation: 'Analyzing legal expense accounts and invoices identifies law firms hired and matters being litigated.'
    },
    {
      id: 'AT10007_Q35',
      n: 35,
      stem: 'Which of the following is an audit procedure that an auditor most likely would perform concerning litigation, claims, and assessments?',
      opts: [
        { label: 'A', text: 'Request the client’s lawyer to evaluate whether the client’s pending litigation, claims, and assessments indicate a going concern problem.' },
        { label: 'B', text: 'Examine the legal documents in the client’s lawyer’s possession concerning litigation, claims, and assessments to which the lawyer has devoted substantive attention.' },
        { label: 'C', text: 'Discuss with management its policies and procedures adopted for evaluating and accounting for litigation, claims, and assessments.' },
        { label: 'D', text: 'Confirm directly with the client’s lawyer that all litigation, claims, and assessments have been recorded or disclosed in the financial statements.' }
      ],
      ans: 'D',
      explanation: 'Inquiring directly with legal counsel confirms completeness and reasonableness of litigation disclosures.'
    },
    {
      id: 'AT10007_Q36',
      n: 36,
      stem: 'A lawyer’s refusal to respond to a letter of audit inquiry normally requires the auditor to:',
      opts: [
        { label: 'A', text: 'Issue a qualified opinion or a disclaimer of opinion.' },
        { label: 'B', text: 'Issue an unqualified opinion with an explanatory paragraph.' },
        { label: 'C', text: 'Issue a qualified or adverse opinion.' },
        { label: 'D', text: 'Issue an unqualified opinion.' }
      ],
      ans: 'A',
      explanation: 'A lawyer\'s refusal to respond is a scope limitation leading to a qualified opinion or disclaimer of opinion.'
    },
    {
      id: 'AT10007_Q37',
      n: 37,
      stem: 'Which of the following statements is incorrect about accounting estimates?',
      opts: [
        { label: 'A', text: 'Management is responsible for making accounting estimates included in the financial statements.' },
        { label: 'B', text: 'When evaluating accounting estimates, the auditor should pay particular attention to assumptions that are objective and are consistent with industry patterns.' },
        { label: 'C', text: 'The risk of material misstatement is greater when accounting estimates are involved.' },
        { label: 'D', text: 'The evidence available to support an accounting estimate will often be more difficult to obtain and less conclusive than evidence available to support other items in the financial statements.' }
      ],
      ans: 'B',
      explanation: 'The auditor should pay particular attention to assumptions that are subjective or susceptible to bias, not those that are objective.'
    },
    {
      id: 'AT10007_Q38',
      n: 38,
      stem: 'In evaluating the assumptions on which the estimate is based, the auditor would need to pay particular attention to assumptions which are',
      opts: [
        { label: 'A', text: 'reasonable in light of actual results in prior periods.' },
        { label: 'B', text: 'consistent with those used for other accounting estimates.' },
        { label: 'C', text: 'consistent with management’s plans which appear appropriate.' },
        { label: 'D', text: 'subjective or susceptible to material misstatement.' }
      ],
      ans: 'D',
      explanation: 'Under PSA 540, particular attention is paid to subjective assumptions susceptible to management bias or misstatement.'
    },
    {
      id: 'AT10007_Q39',
      n: 39,
      stem: 'Which of the following is least likely to be an approach followed when auditing the fair values of assets and liabilities?',
      opts: [
        { label: 'A', text: 'Review and test management’s process of valuation.' },
        { label: 'B', text: 'Confirm valuation with audit committee members.' },
        { label: 'C', text: 'Independently develop an estimate of the value of the account.' },
        { label: 'D', text: 'Review subsequent events relating to the account.' }
      ],
      ans: 'B',
      explanation: 'Audit committee members are part of governance, not independent valuation experts or confirming parties.'
    },
    {
      id: 'AT10007_Q40',
      n: 40,
      stem: 'Which of the following procedures would an auditor ordinarily perform first in evaluating management’s accounting estimates for reasonableness?',
      opts: [
        { label: 'A', text: 'Obtain an understanding of how management developed its estimates.' },
        { label: 'B', text: 'Develop independent expectations of management’s estimates.' },
        { label: 'C', text: 'Consider the appropriateness of the key factors in developing the estimates.' },
        { label: 'D', text: 'Test the calculations used by management in developing the estimates.' }
      ],
      ans: 'A',
      explanation: 'The auditor first obtains an understanding of the process, data, and assumptions management used.'
    },
    {
      id: 'AT10007_Q41',
      n: 41,
      stem: 'Which of the following would an auditor generally perform to obtain assurance that accounting estimates are properly accounted for and disclosed?',
      opts: [
        { label: 'A', text: 'Inquiry of management' },
        { label: 'B', text: 'Make an independent estimate for comparison with client’s estimate' },
        { label: 'C', text: 'Review subsequent events' },
        { label: 'D', text: 'Obtain knowledge about the applicable financial reporting standards related to the accounting estimate' }
      ],
      ans: 'A',
      explanation: 'Inquiry of management regarding estimation bases and disclosure provides initial assurance on proper accounting.'
    },
    {
      id: 'AT10007_Q42',
      n: 42,
      stem: 'An auditor’s working papers serve mainly to',
      opts: [
        { label: 'A', text: 'Provide the principal support for the auditor’s report.' },
        { label: 'B', text: 'Satisfy the auditor’s responsibilities concerning the Code of Ethics.' },
        { label: 'C', text: 'Monitor the effectiveness of the CPA firm’s quality control procedures.' },
        { label: 'D', text: 'Document the level of independence maintained by the auditor.' }
      ],
      ans: 'A',
      explanation: 'Working papers provide the principal record of work performed and support for the auditor\'s report.'
    },
    {
      id: 'AT10007_Q43',
      n: 43,
      stem: 'Under the requirements of PSA 230, audit documentation must contain sufficient information to allow what type of auditor to understand the nature, timing, extent, and results of procedures performed?',
      opts: [
        { label: 'A', text: 'An experienced audit team member.' },
        { label: 'B', text: 'An experienced auditor having no previous connection with the engagement.' },
        { label: 'C', text: 'Any certified public accountant.' },
        { label: 'D', text: 'An auditor qualified as a peer review specialist.' }
      ],
      ans: 'B',
      explanation: 'Under PSA 230, documentation must be understood by an experienced auditor having no previous connection with the audit.'
    },
    {
      id: 'AT10007_Q44',
      n: 44,
      stem: 'Audit documentation may be recorded on paper or on electronic or other media. The following are examples of audit documentation, except',
      opts: [
        { label: 'A', text: 'Audit programs' },
        { label: 'B', text: 'Letters of confirmation and representation' },
        { label: 'C', text: 'Correspondence (including e-mail) concerning significant matters' },
        { label: 'D', text: 'The entity’s accounting records' }
      ],
      ans: 'D',
      explanation: 'The entity\'s accounting records belong to the client and do not constitute auditor working papers.'
    },
    {
      id: 'AT10007_Q45',
      n: 45,
      stem: 'The current file of the auditor’s working papers generally should include',
      opts: [
        { label: 'A', text: 'A flowchart of the internal controls' },
        { label: 'B', text: 'A copy of the financial statements' },
        { label: 'C', text: 'Organization charts' },
        { label: 'D', text: 'Copies of bond and note indentures' }
      ],
      ans: 'B',
      explanation: 'Financial statements of the current year are in the current file. Continuing documents (flowcharts, contracts, indentures) are in the permanent file.'
    },
    {
      id: 'AT10007_Q46',
      n: 46,
      stem: 'The permanent file portion of the auditor’s working papers generally should include',
      opts: [
        { label: 'A', text: 'A copy of the engagement letter.' },
        { label: 'B', text: 'A copy of key customer confirmation.' },
        { label: 'C', text: 'Names and addresses of audit staff personnel on the engagements.' },
        { label: 'D', text: 'Time and expense reports.' }
      ],
      ans: 'A',
      explanation: 'Continuing contractual agreements such as the ongoing engagement letter belong in the permanent file.'
    },
    {
      id: 'AT10007_Q47',
      n: 47,
      stem: 'The following are ordinarily excluded from audit documentation:\nSuperseded drafts | Preliminary notes | Corrected copies | Duplicates',
      opts: [
        { label: 'A', text: 'Yes | Yes | Yes | Yes' },
        { label: 'B', text: 'No | Yes | Yes | No' },
        { label: 'C', text: 'No | No | Yes | Yes' },
        { label: 'D', text: 'Yes | No | Yes | No' }
      ],
      ans: 'A',
      explanation: 'Under PSA 230, superseded drafts, preliminary notes, typographical error copies, and duplicates are excluded from final audit documentation.'
    },
    {
      id: 'AT10007_Q48',
      n: 48,
      stem: 'The completion of the assembly of the final audit file after the date of the auditor’s report does not ordinarily involve',
      opts: [
        { label: 'A', text: 'The performance of new audit procedures or the drawing of new conclusions.' },
        { label: 'B', text: 'Sorting, collating and cross-referencing working papers.' },
        { label: 'C', text: 'Deleting or discarding superseded documentation.' },
        { label: 'D', text: 'Signing off on completion checklists relating to the file assembly process.' }
      ],
      ans: 'A',
      explanation: 'File assembly is an administrative process that does NOT involve new audit procedures or new conclusions.'
    },
    {
      id: 'AT10007_Q49',
      n: 49,
      stem: 'The primary reason auditors cross-index their working papers is to',
      opts: [
        { label: 'A', text: 'Give the working papers a professional appearance.' },
        { label: 'B', text: 'Explain the use of tick marks.' },
        { label: 'C', text: 'Provide an explanation of the audit steps performed.' },
        { label: 'D', text: 'Provide a trail for the auditor and the reviewer.' }
      ],
      ans: 'D',
      explanation: 'Cross-indexing creates an orderly audit trail linking lead schedules, test workpapers, and financial statements.'
    },
    {
      id: 'AT10007_Q50',
      n: 50,
      stem: 'S1: Working papers are the property of the auditor.\nS2: Although portions of or extracts from the working papers may be made available to the entity at the discretion of the auditor, they may be substitute for the entity’s accounting records.',
      opts: [
        { label: 'A', text: 'Only statement one is correct' },
        { label: 'B', text: 'Only statement two is correct' },
        { label: 'C', text: 'Both statements are correct' },
        { label: 'D', text: 'Both statements are incorrect' }
      ],
      ans: 'A',
      explanation: 'S1 is true. S2 is false because working papers CANNOT be a substitute for the entity\'s accounting records.'
    }
  ]
};
