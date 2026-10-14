import { ModuleData } from './types';

export const at10013: ModuleData = {
  id: 'AT-10013',
  code: 'AT-10013',
  title: 'Reports – Other Assurance and Related Services',
  standards: 'PSRE 2400 (Revised), PSRS 4400, PSRS 4410 (Revised), PSAE 3400',
  questionCount: 20,
  summary: 'Review of Financial Statements (Inquiry & Analytical, Negative Assurance), Agreed-Upon Procedures (Factual Findings, Restricted Distribution), Compilation Engagements (No assurance, Management Responsibility), and Prospective Financial Information (Forecasts vs Projections).',
  lectureOutline: `### PSRE 2400 (REVISED): ENGAGEMENTS TO REVIEW FINANCIAL STATEMENTS
- Objective: State whether anything has come to attention that causes the auditor to believe that FS are not prepared in all material respects in accordance with PFRS (**negative assurance**).
- Evidence obtained primarily through **inquiry and analytical procedures**.
- Level of assurance: **Moderate / Limited assurance**.
- Procedures do NOT include assessing internal controls or substantive tests of details.

---

### PSRS 4400: AGREED-UPON PROCEDURES
- Auditor carries out procedures of an audit nature to which the auditor, entity, and appropriate third parties have agreed.
- Reports on **factual findings**; **no assurance** is expressed.
- Report is **strictly restricted** to parties that agreed to the procedures.
- **Independence is not a requirement** (must disclose if not independent).

---

### PSRS 4410 (REVISED): COMPILATION ENGAGEMENTS
- Apply accounting and financial reporting expertise to assist management in preparing financial information.
- Expresses **no audit opinion or review conclusion** (no assurance).
- If management refuses to provide necessary information, the practitioner shall **withdraw**.

---

### PSAE 3400: PROSPECTIVE FINANCIAL INFORMATION
- **Forecast:** Prepared on the basis of assumptions as to future events management expects to take place (**best-estimate assumptions**). Suitable for general use.
- **Projection:** Prepared on the basis of **hypothetical assumptions** (or a mixture). Not suitable for general use.
- Auditor provides only a **moderate level of assurance** regarding the reasonableness of assumptions; expresses NO opinion as to whether results will be achieved.`,
  items: [
    {
      id: 'AT10013_Q1',
      n: 1,
      stem: 'Which of the following is an objective of a review engagement?',
      opts: [
        { label: 'A', text: 'Expressing a positive opinion that the financial information is presented in conformity with generally accepted accounting principles.' },
        { label: 'B', text: 'Expressing a limited assurance to users who have agreed as to procedures that will be performed by the CPA.' },
        { label: 'C', text: 'Reporting whether material modifications should be made to such financial statements to make them conform with generally accepted accounting principles.' },
        { label: 'D', text: 'Reporting that the financial statements, in all materials respects, fairly present the financial position and operating results of the client.' }
      ],
      ans: 'C',
      explanation: 'A review states whether anything has come to attention indicating material modifications are needed for compliance with GAAP/PFRS.'
    },
    {
      id: 'AT10013_Q2',
      n: 2,
      stem: 'Financial statements of an entity that have been reviewed by a practitioner should be accompanied by a report stating that',
      opts: [
        { label: 'A', text: 'A review provides only negative assurance that the financial statements are fairly presented.' },
        { label: 'B', text: 'A review includes examining, on a test basis, information that is the representation of management.' },
        { label: 'C', text: 'Does not contemplate obtaining corroborating evidential matter or applying certain other procedures ordinarily performed during an audit.' },
        { label: 'D', text: 'The procedures performed in a review are substantially less than those performed in an audit conducted in accordance with PSAs.' }
      ],
      ans: 'D',
      explanation: 'The review report explicitly highlights that review procedures are substantially less than an audit in accordance with PSAs.'
    },
    {
      id: 'AT10013_Q3',
      n: 3,
      stem: 'A practitioner’s report on a review of the financial statements of an entity should state that the practitioner',
      opts: [
        { label: 'A', text: 'Does not express an opinion or any form of limited assurance on the financial statements.' },
        { label: 'B', text: 'Obtained reasonable assurance about whether the financial statements are free of material misstatements.' },
        { label: 'C', text: 'Examined evidence, on a test basis, supporting the amounts and disclosures in the financial statements.' },
        { label: 'D', text: 'Conducted the review in accordance with the Philippine Standard on Review Engagements.' }
      ],
      ans: 'D',
      explanation: 'The report states that the review was conducted in accordance with PSRE.'
    },
    {
      id: 'AT10013_Q4',
      n: 4,
      stem: 'Financial statements of an entity that have been reviewed by a practitioner should be accompanied by a report stating that',
      opts: [
        { label: 'A', text: 'The scope of the inquiry and analytical procedures performed by the practitioner has not been restricted.' },
        { label: 'B', text: 'Management is responsible for the preparation and fair presentation of the entity’s financial statements.' },
        { label: 'C', text: 'A review includes examining, on a test basis, evidence supporting the amounts and disclosures in the financial statements.' },
        { label: 'D', text: 'A review is greater in scope than a compilation, the objective of which is to present financial statements that are free of material misstatements.' }
      ],
      ans: 'B',
      explanation: 'The review report explicitly contains a section stating management\'s responsibility for the financial statements.'
    },
    {
      id: 'AT10013_Q5',
      n: 5,
      stem: 'A practitioner who reviews the financial statements of an entity should issue a report stating that a review',
      opts: [
        { label: 'A', text: 'Provides negative assurance that internal control is functioning as designed.' },
        { label: 'B', text: 'Provides only limited assurance that the financial statements are fairly presented.' },
        { label: 'C', text: 'Is substantially more in scope than a compilation.' },
        { label: 'D', text: 'Is a limited assurance engagement.' }
      ],
      ans: 'D',
      explanation: 'Under PSRE 2400 (Revised), the report states that a review of financial statements is a limited assurance engagement.'
    },
    {
      id: 'AT10013_Q6',
      n: 6,
      stem: 'If the practitioner determines that the financial statements are materially misstated, he/she shall express a/an',
      opts: [
        { label: 'A', text: 'Unmodified conclusion.' },
        { label: 'B', text: 'Qualified conclusion when the practitioner concludes that the effects of the matter(s) giving rise to the modification are material, but not pervasive to the financial statements.' },
        { label: 'C', text: 'Adverse conclusion if the practitioner concludes that the possible effects on the financial statements could be both material and pervasive.' },
        { label: 'D', text: 'Disclaimer of conclusion when the effects of the matter giving rise to the modification are both material and pervasive to the financial statements.' }
      ],
      ans: 'B',
      explanation: 'A qualified conclusion is expressed when the effects of the misstatement are material but not pervasive.'
    },
    {
      id: 'AT10013_Q7',
      n: 7,
      stem: 'What conclusion is appropriate when the practitioner has obtained limited assurance to be able to conclude that nothing has come to the practitioner’s attention that causes the practitioner to believe that the financial statements are not prepared, in all material respects, in accordance with the applicable financial reporting framework?',
      opts: [
        { label: 'A', text: 'Unmodified conclusion.' },
        { label: 'B', text: 'Disclaimer of conclusion.' },
        { label: 'C', text: 'Modified conclusion.' },
        { label: 'D', text: 'Qualified conclusion.' }
      ],
      ans: 'A',
      explanation: 'An unmodified conclusion expresses the negative assurance without qualification.'
    },
    {
      id: 'AT10013_Q8',
      n: 8,
      stem: 'Charlie, CPA, is performing a compilation service for Clean and Green Corporation. In the course of performing compilation procedures, Charlie became aware that some of the information provided by Clean and Green’s management are incomplete. Client management refuses to comply with Charlie’s requests for additional information. In this case, Charlie should:',
      opts: [
        { label: 'A', text: 'Issue a qualified opinion on the financial statements compiled.' },
        { label: 'B', text: 'Issue an adverse opinion on the financial statements compiled.' },
        { label: 'C', text: 'Issue a disclaimer of opinion on the financial statements complied.' },
        { label: 'D', text: 'Withdraw from the engagement.' }
      ],
      ans: 'D',
      explanation: 'Under PSRS 4410, if management fails to provide records or explanations requested, the accountant shall withdraw.'
    },
    {
      id: 'AT10013_Q9',
      n: 9,
      stem: 'The procedures employed in doing compilation are:',
      opts: [
        { label: 'A', text: 'Designed to enable the accountant to express a limited assurance.' },
        { label: 'B', text: 'Designed to enable the accountant to express a negative assurance.' },
        { label: 'C', text: 'Not designed to enable the accountant to express any form of assurance.' },
        { label: 'D', text: 'Less extensive than review procedures but more extensive than agreed-upon procedures.' }
      ],
      ans: 'C',
      explanation: 'Compilation procedures are not designed to enable the expression of any assurance.'
    },
    {
      id: 'AT10013_Q10',
      n: 10,
      stem: 'When performing a compilation engagement, the accountant is required to',
      opts: [
        { label: 'A', text: 'Assess internal controls.' },
        { label: 'B', text: 'Verify matters and explanations.' },
        { label: 'C', text: 'Obtain a general knowledge of the business and operations of the entity.' },
        { label: 'D', text: 'Make inquiries of management to assess the reliability and completeness of the information provided.' }
      ],
      ans: 'C',
      explanation: 'The accountant must obtain general knowledge of the business and operations.'
    },
    {
      id: 'AT10013_Q11',
      n: 11,
      stem: 'When compiling the financial statements of an entity, an accountant should',
      opts: [
        { label: 'A', text: 'Review agreements with financial institutions for restrictions on cash balances.' },
        { label: 'B', text: 'Understand the accounting principles and practices of the entity’s industry.' },
        { label: 'C', text: 'Inquire of key personnel concerning related parties and subsequent events.' },
        { label: 'D', text: 'Perform ratio analyses of the financial data of comparable prior periods.' }
      ],
      ans: 'B',
      explanation: 'The accountant must understand the accounting principles and practices of the industry.'
    },
    {
      id: 'AT10013_Q12',
      n: 12,
      stem: 'When compiling an entity’s financial statements, an accountant would be least likely to',
      opts: [
        { label: 'A', text: 'Perform analytical procedures designed to identify relationships that appear to be unusual.' },
        { label: 'B', text: 'Read the compiled financial statements and consider whether they appear to include adequate disclosure.' },
        { label: 'C', text: 'Obtain an acknowledgment from management of its responsibility for the financial statements.' },
        { label: 'D', text: 'Plan the work so that an effective engagement will be performed.' }
      ],
      ans: 'A',
      explanation: 'Analytical procedures to identify unusual relationships are characteristic of a review, not a compilation.'
    },
    {
      id: 'AT10013_Q13',
      n: 13,
      stem: 'Which of the following should not be included in an accountant’s report based upon the compilation of an entity’s financial statements?',
      opts: [
        { label: 'A', text: 'A statement that a compilation of the company’s financial statements was made in accordance with the Philippine Standard on Related Services 4410 (Revised), Compilation Engagements.' },
        { label: 'B', text: 'A statement that the financial statements and the accuracy and completeness of the information used to compile them are management’s responsibility.' },
        { label: 'C', text: 'A statement that a compilation engagement is an assurance engagement.' },
        { label: 'D', text: 'A statement that the accountant does not express an audit opinion or a review conclusion.' }
      ],
      ans: 'C',
      explanation: 'A compilation is expressly NOT an assurance engagement.'
    },
    {
      id: 'AT10013_Q14',
      n: 14,
      stem: 'Negative assurance may be expressed when an accountant is requested to report agreed-upon procedures to specified:\nElement of a Financial Statement | Accounts of a Financial Statement',
      opts: [
        { label: 'A', text: 'Yes | Yes' },
        { label: 'B', text: 'Yes | No' },
        { label: 'C', text: 'No | No' },
        { label: 'D', text: 'No | Yes' }
      ],
      ans: 'C',
      explanation: 'In agreed-upon procedures, NO assurance (positive or negative) is ever expressed; only factual findings are reported.'
    },
    {
      id: 'AT10013_Q15',
      n: 15,
      stem: 'An accountant may accept an engagement to apply agreed-upon procedures that are not sufficient to express an opinion on one or more specified accounts or items of a financial statement provided that',
      opts: [
        { label: 'A', text: 'The accountant’s report does not enumerate the procedures performed.' },
        { label: 'B', text: 'The financial statements are prepared in accordance with a comprehensive basis of accounting other than generally accepted accounting principles.' },
        { label: 'C', text: 'Distribution of the accountant’s report is restricted.' },
        { label: 'D', text: 'The accountant is also the entity’s continuing auditor.' }
      ],
      ans: 'C',
      explanation: 'AUP reports are strictly restricted to the specified parties who agreed to the procedures.'
    },
    {
      id: 'AT10013_Q16',
      n: 16,
      stem: 'Given one or more hypothetical assumptions, a responsible party may prepare, to the best of its knowledge and belief, an entity’s expected financial position, results of operations, and cash flows. Such prospective financial statements are known as',
      opts: [
        { label: 'A', text: 'Pro forma financial statements.' },
        { label: 'B', text: 'Financial projections.' },
        { label: 'C', text: 'Partial presentations.' },
        { label: 'D', text: 'Financial forecasts.' }
      ],
      ans: 'B',
      explanation: 'Prospective statements based on hypothetical assumptions are called financial projections.'
    },
    {
      id: 'AT10013_Q17',
      n: 17,
      stem: 'A financial forecast consists of prospective financial statements that present an entity’s expected financial position, results of operations, and cash flows. A forecast',
      opts: [
        { label: 'A', text: 'Is based on the most conservative estimates.' },
        { label: 'B', text: 'Present estimates given one or more hypothetical assumptions.' },
        { label: 'C', text: 'Unlike a projection, may contain a range.' },
        { label: 'D', text: 'Is based on assumptions reflecting conditions expected to exist and courses of action expected to be taken.' }
      ],
      ans: 'D',
      explanation: 'A forecast reflects management\'s best-estimate assumptions of expected future conditions.'
    },
    {
      id: 'AT10013_Q18',
      n: 18,
      stem: 'When an accountant examines prospective financial statements, the accountant’s report should include a separate paragraph that',
      opts: [
        { label: 'A', text: 'Contains an opinion as to whether the prospective financial statements are properly prepared on the basis of the assumptions and are presented in accordance with generally accepted accounting principles in the Philippines.' },
        { label: 'B', text: 'Provides an explanation of the differences between an examination and an audit.' },
        { label: 'C', text: 'States that the accountant is responsible for events and circumstances up to 1 year after the report’s date.' },
        { label: 'D', text: 'Disclaims an opinion on whether the assumptions provide a reasonable basis for the prospective financial statements.' }
      ],
      ans: 'A',
      explanation: 'The report gives an opinion on whether the statements are properly prepared on the basis of assumptions and presented in accordance with PFRS.'
    },
    {
      id: 'AT10013_Q19',
      n: 19,
      stem: 'The following statements relate to the examination of prospective financial information. Which is false?',
      opts: [
        { label: 'A', text: 'The auditor should express an opinion as to whether the results shown in the prospective financial information will be achieved.' },
        { label: 'B', text: 'Before accepting an engagement to examine prospective financial information, the auditor should consider the intended use of the information.' },
        { label: 'C', text: 'The auditor should not accept, or should withdraw from, an engagement to examine prospective financial information when the assumptions are clearly unrealistic.' },
        { label: 'D', text: 'When in the auditor’s judgment an appropriate level of satisfaction has been obtained, the auditor is not precluded from expressing positive assurance regarding the assumptions.' }
      ],
      ans: 'A',
      explanation: 'The auditor does NOT express any opinion on whether prospective results will be achieved.'
    },
    {
      id: 'AT10013_Q20',
      n: 20,
      stem: 'Which of the following is a prospective financial information for general use upon which an accountant may appropriately report?',
      opts: [
        { label: 'A', text: 'Financial projection' },
        { label: 'B', text: 'Partial presentation' },
        { label: 'C', text: 'Pro forma financial statement' },
        { label: 'D', text: 'Financial forecast' }
      ],
      ans: 'D',
      explanation: 'A financial forecast (based on best estimates) is appropriate for general use, unlike a projection (based on hypothetical assumptions).'
    }
  ]
};
