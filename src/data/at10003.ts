import { ModuleData } from './types';

export const at10003: ModuleData = {
  id: 'AT-10003',
  code: 'AT-10003',
  title: 'Agreeing the Terms of Audit Engagements (PSA 210)',
  standards: 'PSA 210',
  questionCount: 15,
  summary: 'Preconditions for an Audit, Engagement Letters (Scope, Responsibilities, Framework, Report Form), Recurring Audits, Communications with Predecessor Auditor, and Acceptance of a Change in Engagement.',
  lectureOutline: `### AGREEING THE TERMS OF AUDIT ENGAGEMENTS (PSA 210)

#### Objective of the Auditor
To accept or continue an audit engagement only when the basis upon which it is to be performed has been agreed, through:
a) Establishing whether the preconditions for an audit are present; and
b) Confirming that there is a common understanding between the auditor and management (and where appropriate, TCWG) of the terms.

#### Preconditions for an Audit
a) The use by management of an acceptable financial reporting framework in the preparation of the financial statements; and
b) The agreement of management and, where appropriate, TCWG to the premise on which an audit is conducted (acknowledging responsibilities for FS preparation, internal control, and providing unrestricted access and information).

---

### AUDIT ENGAGEMENT LETTERS
The agreed terms shall be recorded in an audit engagement letter or other suitable form of written agreement and shall include:
1. The objective and scope of the audit of the financial statements;
2. The responsibilities of the auditor;
3. The responsibilities of management;
4. Identification of the applicable financial reporting framework; and
5. Reference to the expected form and content of any reports to be issued and a statement that there may be circumstances in which a report may differ from its expected form and content.

---

### ACCEPTANCE OF A CHANGE IN ENGAGEMENT
1. An auditor requested to change the engagement to one providing a lower level of assurance should consider the appropriateness of doing so.
2. A request may result from:
   - A change in circumstances affecting the need for the service (reasonable);
   - A misunderstanding as to the nature of an audit originally requested (reasonable); or
   - A restriction on the scope of the engagement (not reasonable if related to incorrect/incomplete information).
3. The auditor should NOT agree to a change where there is NO reasonable justification.
4. If changed, the report would NOT include reference to the original engagement or any procedures performed in it (except for agreed-upon procedures).
5. If unable to agree to a change and not permitted to continue the original engagement, the auditor should **withdraw** and consider reporting obligations.`,
  items: [
    {
      id: 'AT10003_Q1',
      n: 1,
      stem: 'The auditor may accept or continue an audit engagement only when the basis upon which it is to be performed has been agreed, through\nI. Establishing whether the preconditions for an audit are present.\nII. Confirming that there is a common understanding between the auditor and management and, where appropriate, those charged with governance of the terms of the audit engagement.',
      opts: [
        { label: 'A', text: 'I only' },
        { label: 'B', text: 'II only' },
        { label: 'C', text: 'Both I and II' },
        { label: 'D', text: 'Neither I nor II' }
      ],
      ans: 'C',
      explanation: 'Under PSA 210, both preconditions and common understanding of terms are required.'
    },
    {
      id: 'AT10003_Q2',
      n: 2,
      stem: 'Before accepting an engagement to audit a new client, a CPA is required to obtain:',
      opts: [
        { label: 'A', text: 'An understanding of the prospective client\'s industry and business.' },
        { label: 'B', text: 'The prospective client\'s signature to the representation letter.' },
        { label: 'C', text: 'A preliminary understanding of the prospective client\'s control environment.' },
        { label: 'D', text: 'The prospective client\'s consent to make inquiries of the predecessor auditor, if any.' }
      ],
      ans: 'D',
      explanation: 'Code of Ethics and auditing standards require obtaining client consent prior to communicating with the predecessor auditor.'
    },
    {
      id: 'AT10003_Q3',
      n: 3,
      stem: 'Which of the following is not correct regarding the communications between successor and predecessor auditors?',
      opts: [
        { label: 'A', text: 'The burden of initiating the communication rests with the predecessor auditor.' },
        { label: 'B', text: 'The burden of initiating the communication rests with the successor auditor.' },
        { label: 'C', text: 'The predecessor auditor must receive their former client’s permission prior to divulging information to the successor auditor.' },
        { label: 'D', text: 'The predecessor auditor may choose to provide a limited response to a successor auditor.' }
      ],
      ans: 'A',
      explanation: 'The initiative rests with the successor auditor, not the predecessor.'
    },
    {
      id: 'AT10003_Q4',
      n: 4,
      stem: 'Before accepting an audit engagement, a successor auditor should make specific inquiries of the predecessor auditor regarding:',
      opts: [
        { label: 'A', text: 'The predecessor’s evaluation of matters of continuing accounting significance' },
        { label: 'B', text: 'Disagreement which the predecessor had with the client concerning auditing procedures and accounting principles' },
        { label: 'C', text: 'The degree of cooperation the predecessor received concerning the inquiry of the client’s legal counsel' },
        { label: 'D', text: 'The predecessor’s assessment of inherent risk and judgments about materiality' }
      ],
      ans: 'B',
      explanation: 'Specific inquiries include disagreements regarding principles/procedures, management integrity, reasons for change, and related party/fraud matters.'
    },
    {
      id: 'AT10003_Q5',
      n: 5,
      stem: 'Which of the following auditor concerns most likely could be so serious that the auditor concludes that a financial statement audit cannot be performed?',
      opts: [
        { label: 'A', text: 'Management fails to modify prescribed internal controls for changes in information technology.' },
        { label: 'B', text: 'Internal control activities requiring segregation of duties are rarely monitored by management.' },
        { label: 'C', text: 'Management is dominated by one person who is also the majority stockholder.' },
        { label: 'D', text: 'There is a substantial risk of intentional misapplication of accounting principles.' }
      ],
      ans: 'D',
      explanation: 'Substantial risk of intentional misapplication of principles reflects severe management dishonesty such that an audit cannot be performed.'
    },
    {
      id: 'AT10003_Q6',
      n: 6,
      stem: 'The scope and nature of an auditor’s contractual obligation to a client is ordinarily set forth in the',
      opts: [
        { label: 'A', text: 'Management representation letter.' },
        { label: 'B', text: 'Opinion section of the auditor’s report.' },
        { label: 'C', text: 'Engagement letter.' },
        { label: 'D', text: 'Basis for Opinion section of the auditor’s report.' }
      ],
      ans: 'C',
      explanation: 'The engagement letter documents the contract between the auditor and the client.'
    },
    {
      id: 'AT10003_Q7',
      n: 7,
      stem: 'An auditor is required to establish an understanding in writing with a client regarding the services to be performed for each engagement. This understanding generally includes',
      opts: [
        { label: 'A', text: 'Management’s responsibility for errors and the illegal activities of employees that may cause material misstatement.' },
        { label: 'B', text: 'The auditor’s responsibility for ensuring that those charged with governance are aware of any significant deficiencies or material weaknesses in internal control that come to the auditor’s attention.' },
        { label: 'C', text: 'Management’s responsibility for providing the auditor with an assessment of the risk of material misstatement due to fraud.' },
        { label: 'D', text: 'The auditor’s responsibility for determining preliminary judgments about materiality and audit risk factors.' }
      ],
      ans: 'B',
      explanation: 'The auditor ensures TCWG are communicated significant deficiencies in internal control coming to the auditor\'s attention.'
    },
    {
      id: 'AT10003_Q8',
      n: 8,
      stem: 'The engagement letter documents and confirms the:\nAuditor’s acceptance of appointment | Objective and scope of audit | Extent of auditor’s responsibilities | Form of any reports',
      opts: [
        { label: 'A', text: 'Yes | Yes | No | Yes' },
        { label: 'B', text: 'Yes | No | Yes | No' },
        { label: 'C', text: 'Yes | Yes | No | No' },
        { label: 'D', text: 'Yes | Yes | Yes | Yes' }
      ],
      ans: 'D',
      explanation: 'The engagement letter covers appointment acceptance, scope/objectives, responsibilities, and expected form of reports.'
    },
    {
      id: 'AT10003_Q9',
      n: 9,
      stem: 'An engagement letter should ordinarily include information on the objectives of the engagement and:\nAuditor’s Responsibilities | Management’s Responsibilities | Limitation of Engagement',
      opts: [
        { label: 'A', text: 'Yes | Yes | No' },
        { label: 'B', text: 'No | No | No' },
        { label: 'C', text: 'Yes | No | Yes' },
        { label: 'D', text: 'Yes | Yes | Yes' }
      ],
      ans: 'D',
      explanation: 'An engagement letter includes auditor responsibilities, management responsibilities, and inherent limitations of the audit.'
    },
    {
      id: 'AT10003_Q10',
      n: 10,
      stem: 'Which of the following statements would least likely appear in an auditor’s engagement letter?',
      opts: [
        { label: 'A', text: 'Fees for our services are based on our regular per diem rates, plus travel and other out-of-pocket expenses.' },
        { label: 'B', text: 'Management is responsible for making all financial records and related information available to us.' },
        { label: 'C', text: 'Our engagement is subject to the risk that material errors or fraud, if they exist, will not be detected.' },
        { label: 'D', text: 'After performing our preliminary analytical procedures, we will discuss with you the other procedures we consider necessary to complete the engagement.' }
      ],
      ans: 'D',
      explanation: 'Auditing procedures must retain an element of unpredictability; an auditor does not discuss specific further audit procedures in advance.'
    },
    {
      id: 'AT10003_Q11',
      n: 11,
      stem: 'The following are usually included in an auditor’s engagement letter, except',
      opts: [
        { label: 'A', text: 'List of audit procedures to be used in inventory observation.' },
        { label: 'B', text: 'The financial statements are the responsibility of the company’s management.' },
        { label: 'C', text: 'A reference to PFRS.' },
        { label: 'D', text: 'A reference to PSAs.' }
      ],
      ans: 'A',
      explanation: 'Detailed audit procedures (like specific inventory observation procedures) are in the audit plan, never disclosed in the engagement letter.'
    },
    {
      id: 'AT10003_Q12',
      n: 12,
      stem: 'An auditor’s engagement letter most likely will include',
      opts: [
        { label: 'A', text: 'A request for permission to contact the client’s lawyer for assistance in identifying litigation, claims, and assessments.' },
        { label: 'B', text: 'A reminder that management is responsible for illegal acts committed by employees.' },
        { label: 'C', text: 'The auditor’s preliminary assessment of the risk factors relating to misstatements arising from fraudulent financial reporting.' },
        { label: 'D', text: 'Management’s acknowledgment of its responsibility for such internal control as it determines is necessary to enable the preparation of financial statements that are free from material misstatement.' }
      ],
      ans: 'D',
      explanation: 'Under PSA 210, management\'s written agreement acknowledges responsibility for internal control.'
    },
    {
      id: 'AT10003_Q13',
      n: 13,
      stem: 'An auditor who, before the completion of the engagement, is requested to change the engagement to one which provides a lower level of assurance, should',
      opts: [
        { label: 'A', text: 'Withdraw and consider whether there is any obligation to report to other parties the circumstances necessitating the withdrawal.' },
        { label: 'B', text: 'Issue a report that includes reference to the original engagement and any procedures that may have been performed in the original engagement.' },
        { label: 'C', text: 'Not agree to a change of engagement where there is no reasonable justification for doing so.' },
        { label: 'D', text: 'Consider the change reasonable if it relates to information that is incorrect, incomplete or otherwise unsatisfactory.' }
      ],
      ans: 'C',
      explanation: 'Under PSA 210, the auditor should not agree to a change if there is no reasonable justification.'
    },
    {
      id: 'AT10003_Q14',
      n: 14,
      stem: 'Before the completion of the audit engagement, an auditor is requested to change the engagement to one that provides a lower level of assurance. If the auditor concludes that there is a reasonable justification for the change in engagement, the report to be issued would',
      opts: [
        { label: 'A', text: 'Be that appropriate for the revised terms of engagement.' },
        { label: 'B', text: 'Include reference to the original engagement.' },
        { label: 'C', text: 'Include reference to any procedures that may have been performed in the original engagement.' },
        { label: 'D', text: 'Not include reference to any procedures that may have been performed, particularly when the new engagement is to undertake agreed-upon procedures.' }
      ],
      ans: 'A',
      explanation: 'The report issued is that appropriate for the revised engagement without referring to the original audit.'
    },
    {
      id: 'AT10003_Q15',
      n: 15,
      stem: 'If the auditor is unable to agree to a change of the engagement and is not permitted to continue the original engagement, the auditor should',
      opts: [
        { label: 'A', text: 'Insist on continuing the original engagement.' },
        { label: 'B', text: 'Express a qualified opinion.' },
        { label: 'C', text: 'Express an adverse opinion.' },
        { label: 'D', text: 'Withdraw from the engagement.' }
      ],
      ans: 'D',
      explanation: 'The auditor should withdraw from the engagement and consider reporting obligations to TCWG or regulators.'
    }
  ]
};
