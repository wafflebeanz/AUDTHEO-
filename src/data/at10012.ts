import { ModuleData } from './types';

export const at10012: ModuleData = {
  id: 'AT-10012',
  code: 'AT-10012',
  title: 'Forming an Opinion and Reporting on Financial Statements',
  standards: 'PSA 700 (Revised), PSA 701, PSA 705 (Revised), PSA 706 (Revised), PSA 710, PSA 720 (Revised), PSA 800, PSA 805, PSA 810',
  questionCount: 40,
  summary: 'Standard Auditor’s Report Structure (Title, Addressee, Opinion, Basis for Opinion, Material Uncertainty to Going Concern, Key Audit Matters, Responsibilities of Management & TCWG, Auditor’s Responsibilities, Signature, Date, Address), Modified Opinions (Qualified, Adverse, Disclaimer - Pervasiveness matrix), Key Audit Matters (PSA 701), Emphasis of Matter and Other Matter paragraphs (PSA 706), Comparative Information (Corresponding figures vs Comparative FS - PSA 710), Other Information (PSA 720), and Special Purpose Frameworks (PSA 800, 805, 810).',
  lectureOutline: `### PSA 700 (REVISED): FORMING AN OPINION AND REPORTING ON FINANCIAL STATEMENTS

#### Order of Sections in the Independent Auditor's Report
1. **Title:** Must indicate "Independent Auditor's Report" to distinguish from reports of others.
2. **Addressee:** To shareholders, board of directors, or both (not to management).
3. **Opinion Section (FIRST):** Identifies entity, states FS audited, titles of each statement, notes, date/period, and opinion phrasing ("present fairly, in all material respects, in accordance with PFRS").
4. **Basis for Opinion (Immediately follows Opinion):** States audit conducted in accordance with PSAs, refers to responsibilities section, statement of independence under Code of Ethics, states evidence obtained is sufficient and appropriate.
5. **Going Concern Section (if applicable):** Heading "Material Uncertainty Related to Going Concern".
6. **Key Audit Matters (PSA 701):** Mandatory for listed entities.
7. **Responsibilities of Management and TCWG:** Fair presentation under PFRS, internal control, going concern assessment, oversight.
8. **Auditor’s Responsibilities for the Audit of the FS:** Reasonable assurance definition, fraud vs. error, professional skepticism, exercising judgment. May be in body, appendix, or reference to official authority website.
9. **Other Reporting Responsibilities (if applicable)**
10. **Name of Engagement Partner:** Required for listed entities (unless significant personal security threat).
11. **Signature of the Auditor:** Name of audit firm, personal name, or both.
12. **Auditor’s Address:** Location in jurisdiction where auditor practices.
13. **Date of Auditor’s Report:** Dated **no earlier than the date** on which the auditor has obtained sufficient appropriate audit evidence, including management assertion and approval of FS.

---

### PSA 705 (REVISED): MODIFICATIONS TO THE OPINION

| Nature of Matter Giving Rise to Modification | Material but NOT Pervasive | Material AND Pervasive |
|---|---|---|
| **Financial statements are materially misstated** (Departure from PFRS) | **Qualified Opinion** ("Except for...") | **Adverse Opinion** ("Do not present fairly...") |
| **Inability to obtain sufficient appropriate audit evidence** (Scope Limitation) | **Qualified Opinion** ("Except for...") | **Disclaimer of Opinion** ("We do not express an opinion...") |

*Prohibition:* When a disclaimer of opinion is issued, the auditor is **prohibited** from communicating Key Audit Matters (KAM).

---

### PSA 701: COMMUNICATING KEY AUDIT MATTERS (KAM)
- Matters of **most significance** in the audit of current period FS, selected from matters communicated with TCWG.
- Not a substitute for disclosures, expressing a modified opinion, or going concern reporting under PSA 570.
- Does NOT provide a separate opinion on individual matters.

---

### PSA 706 (REVISED): EMPHASIS OF MATTER & OTHER MATTER
- **Emphasis of Matter (EOM):** Refers to a matter *appropriately presented or disclosed* in the FS that is fundamental to users' understanding (e.g., litigation uncertainty, early adoption of new standard, catastrophe, major subsequent event). The opinion is NOT modified.
- **Other Matter (OM):** Refers to a matter *other than those presented or disclosed* in the FS that is relevant to users' understanding of the audit, auditor's responsibilities, or report.

---

### PSA 710: COMPARATIVES
- **Corresponding Figures:** Current opinion covers current period FS as a whole including corresponding figures; does not specifically refer to corresponding figures.
- **Comparative Financial Statements:** Auditor's opinion refers to each period presented and audited.`,
  items: [
    {
      id: 'AT10012_Q1',
      n: 1,
      stem: 'A major purpose of the auditor’s report on financial statements is to',
      opts: [
        { label: 'A', text: 'Assure investors of the complete accuracy of the financial statements.' },
        { label: 'B', text: 'Enhance the degree of confidence of intended users in the financial statements.' },
        { label: 'C', text: 'Deter creditors from extending loans in high-risk situations.' },
        { label: 'D', text: 'Describe the specific auditing procedures undertaken to gather evidence for the opinion.' }
      ],
      ans: 'B',
      explanation: 'The primary purpose of the auditor\'s report is to enhance the degree of confidence of intended users in the FS.'
    },
    {
      id: 'AT10012_Q2',
      n: 2,
      stem: 'To distinguish it from report that might be issued by others, such as by officers of the entity, the board of directors, or from the reports of other auditors who may not have to abide by the same ethical requirements as the independent auditor, the auditor’s report should have an appropriate',
      opts: [
        { label: 'A', text: 'Addresses' },
        { label: 'B', text: 'Title' },
        { label: 'C', text: 'Signature' },
        { label: 'D', text: 'Opinion' }
      ],
      ans: 'B',
      explanation: 'The title "Independent Auditor\'s Report" distinguishes it from reports issued by others.'
    },
    {
      id: 'AT10012_Q3',
      n: 3,
      stem: 'The auditor’s report should be addressed',
      opts: [
        { label: 'A', text: 'Only to the shareholders of the entity whose financial statements are being audited' },
        { label: 'B', text: 'Only to the board of directors of the entity whose financial statements are being audited' },
        { label: 'C', text: 'Either to the shareholders or the board of directors of the entity whose financial statement are being audited' },
        { label: 'D', text: 'Either to the shareholders or the board of directors, or both, of the entity whose statements are being audited' }
      ],
      ans: 'D',
      explanation: 'The report is addressed to the shareholders, board of directors, or both.'
    },
    {
      id: 'AT10012_Q4',
      n: 4,
      stem: 'The first section of the auditor’s report shall have the heading',
      opts: [
        { label: 'A', text: 'Responsibilities for the Financial Statements.' },
        { label: 'B', text: 'Opinion.' },
        { label: 'C', text: 'Auditor’s Responsibilities for the Audit of the Financial Statements.' },
        { label: 'D', text: 'Basis for Opinion.' }
      ],
      ans: 'B',
      explanation: 'Under revised PSA 700, the first section of the report is the "Opinion" section.'
    },
    {
      id: 'AT10012_Q5',
      n: 5,
      stem: 'Which of the following sections in the auditor’s report shall be placed immediately after the Opinion section?',
      opts: [
        { label: 'A', text: 'Management’s Responsibilities for the Financial Statements.' },
        { label: 'B', text: 'Auditor’s Responsibilities for the Audit of the Financial Statements.' },
        { label: 'C', text: 'Basis for Opinion.' },
        { label: 'D', text: 'Other Reporting Responsibilities.' }
      ],
      ans: 'C',
      explanation: 'The "Basis for Opinion" section immediately follows the Opinion section.'
    },
    {
      id: 'AT10012_Q6',
      n: 6,
      stem: 'The Basis for Opinion section of the auditor’s report shall',
      opts: [
        { label: 'A', text: 'State that the financial statements have been audited.' },
        { label: 'B', text: 'State that the objective of the auditor is to issue an auditor’s report that includes the auditor’s opinion.' },
        { label: 'C', text: 'Describe management’s responsibility for preparing the financial statements in accordance with the applicable financial reporting framework.' },
        { label: 'D', text: 'State that the audit was conducted in accordance with Philippine Standards on Auditing (PSAs).' }
      ],
      ans: 'D',
      explanation: 'The Basis for Opinion section expressly states that the audit was conducted in accordance with PSAs.'
    },
    {
      id: 'AT10012_Q7',
      n: 7,
      stem: 'Which of the following management’s responsibilities shall be described in the Responsibilities for the Financial Statements section the auditor’s report?',
      opts: [
        { label: 'A', text: 'Responsibility for preparing the financial statements in accordance with the applicable financial reporting framework.' },
        { label: 'B', text: 'Responsibility for obtaining reasonable assurance about whether the financial statements as a whole are free from material misstatement.' },
        { label: 'C', text: 'Responsibility to exercise professional judgment and maintain professional skepticism throughout the audit.' },
        { label: 'D', text: 'Responsibility to identify and assess the risks of material misstatement of the financial statements.' }
      ],
      ans: 'A',
      explanation: 'Management is responsible for the preparation and fair presentation of the FS in accordance with the framework.'
    },
    {
      id: 'AT10012_Q8',
      n: 8,
      stem: 'The description of the auditor’s responsibilities for the audit of the financial statements shall be included\nI. Within the body of the auditor’s report.\nII. Within an appendix to the auditor’s report.\nIII. By a specific reference within the auditor’s report to the location of such a description on a website of an appropriate authority.',
      opts: [
        { label: 'A', text: 'I only.' },
        { label: 'B', text: 'II only.' },
        { label: 'C', text: 'I or II only.' },
        { label: 'D', text: 'I, II, or III.' }
      ],
      ans: 'D',
      explanation: 'Under paragraph 40 of PSA 700 (Revised), the auditor\'s responsibilities can be in the body, an appendix, or a website reference.'
    },
    {
      id: 'AT10012_Q9',
      n: 9,
      stem: 'An auditor should disclose the substantive reasons for expressing an adverse opinion in the Basis for Adverse Opinion section',
      opts: [
        { label: 'A', text: 'Following the opinion section.' },
        { label: 'B', text: 'Preceding the opinion section.' },
        { label: 'C', text: 'Following the Auditor’s Responsibility section.' },
        { label: 'D', text: 'Within the notes to the financial statements.' }
      ],
      ans: 'A',
      explanation: 'The Basis for Adverse Opinion section is placed immediately following the Opinion section.'
    },
    {
      id: 'AT10012_Q10',
      n: 10,
      stem: 'What is the appropriate opinion to express when the auditor concludes that the financial statements are prepared, in all material respects, in accordance with the applicable financial reporting framework?',
      opts: [
        { label: 'A', text: 'Unmodified opinion.' },
        { label: 'B', text: 'Qualified opinion.' },
        { label: 'C', text: 'Adverse opinion.' },
        { label: 'D', text: 'Disclaimer of opinion.' }
      ],
      ans: 'A',
      explanation: 'An unmodified opinion is expressed when financial statements are prepared, in all material respects, in accordance with the applicable framework.'
    },
    {
      id: 'AT10012_Q11',
      n: 11,
      stem: 'PSA 705 (Revised), Modification to the Opinion in the Independent Auditor’s Report, prohibits the auditor from communicating key audit matters when the auditor expresses a/an',
      opts: [
        { label: 'A', text: 'Unmodified opinion.' },
        { label: 'B', text: 'Qualified opinion.' },
        { label: 'C', text: 'Adverse opinion.' },
        { label: 'D', text: 'Disclaimer of opinion.' }
      ],
      ans: 'D',
      explanation: 'PSA 705 prohibits communicating Key Audit Matters when the auditor disclaims an opinion.'
    },
    {
      id: 'AT10012_Q12',
      n: 12,
      stem: 'The following statements relate to the date of the auditor’s report. Which is false?',
      opts: [
        { label: 'A', text: 'The auditor should date the report as of the completion date of the audit.' },
        { label: 'B', text: 'The date of the auditor’s report should not be earlier than the date on which the financial statements are signed or approved by management.' },
        { label: 'C', text: 'The date of the auditor’s report should not be later than the date on which the financial statements are signed or approved by management.' },
        { label: 'D', text: 'The date of the auditor’s report should always be later than the date of the financial statements (i.e., the balance sheet date).' }
      ],
      ans: 'C',
      explanation: 'The auditor\'s report date is dated on or after (NOT earlier than) the date the FS are approved by management. Thus C is false.'
    },
    {
      id: 'AT10012_Q13',
      n: 13,
      stem: 'An independent auditor discovers that a payroll supervisor of the company being audited has misappropriated P50,000. The company’s total assets and income before tax are P70 million and P15 million, respectively. Assuming no other issues affect the report, the auditor’s report will most likely contain a/an',
      opts: [
        { label: 'A', text: 'Unmodified opinion' },
        { label: 'B', text: 'Disclaimer of opinion' },
        { label: 'C', text: 'Adverse opinion' },
        { label: 'D', text: 'Scope qualification' }
      ],
      ans: 'A',
      explanation: 'P50,000 is clearly immaterial in relation to P70 million assets and P15 million income; hence an unmodified opinion is appropriate.'
    },
    {
      id: 'AT10012_Q14',
      n: 14,
      stem: 'A note to the financial statements of the Prudent Bank indicates that all of the records relating to the bank’s business operations are stored on magnetic disks, and that no emergency backup systems or duplicate disks are stored because the bank and its auditors consider the occurrence of a catastrophe to be remote. Based upon this note, the auditor’s report should express',
      opts: [
        { label: 'A', text: 'A qualified opinion' },
        { label: 'B', text: 'An unmodified opinion' },
        { label: 'C', text: 'An adverse opinion' },
        { label: 'D', text: 'A “subject to” opinion' }
      ],
      ans: 'B',
      explanation: 'The absence of backup is an operational/internal control vulnerability properly disclosed in notes; it is not a material misstatement of FS numbers, so unmodified opinion applies.'
    },
    {
      id: 'AT10012_Q15',
      n: 15,
      stem: 'Which of the following terms is used in the standard to describe the effects on the financial statements of misstatements or the possible effects on the financial statements, if any, that are undetected due to an inability to obtain sufficient appropriate audit evidence?',
      opts: [
        { label: 'A', text: 'Persuasive' },
        { label: 'B', text: 'Pervasive' },
        { label: 'C', text: 'Material' },
        { label: 'D', text: 'Extensive' }
      ],
      ans: 'B',
      explanation: 'Under PSA 705, "Pervasive" describes misstatements that are not confined to specific elements, represent a substantial proportion, or are fundamental to user understanding.'
    },
    {
      id: 'AT10012_Q16',
      n: 16,
      stem: 'A limitation on the scope of the audit may arise from\nI. Circumstances beyond the control of the entity.\nII. Circumstances relating to the nature and timing of the auditor’s work.\nIII. Limitations imposed by management.',
      opts: [
        { label: 'A', text: 'I and II only' },
        { label: 'B', text: 'II and III only' },
        { label: 'C', text: 'I and III only' },
        { label: 'D', text: 'I, II, and III' }
      ],
      ans: 'D',
      explanation: 'Scope limitations arise from external circumstances, timing of appointment, or management restrictions.'
    },
    {
      id: 'AT10012_Q17',
      n: 17,
      stem: 'An auditor may express a qualified opinion under which of the following circumstances?\nLack of sufficient appropriate evidence | Restriction on the scope of the audit',
      opts: [
        { label: 'A', text: 'No | No' },
        { label: 'B', text: 'No | Yes' },
        { label: 'C', text: 'Yes | No' },
        { label: 'D', text: 'Yes | Yes' }
      ],
      ans: 'D',
      explanation: 'A qualified opinion can result from either lack of sufficient evidence or scope restrictions (material but not pervasive).'
    },
    {
      id: 'AT10012_Q18',
      n: 18,
      stem: 'Which of the following should be included in the Qualified Opinion section when an auditor expresses a qualified opinion?\nWhen read in conjunction with Note X | With the foregoing explanation',
      opts: [
        { label: 'A', text: 'Yes | No' },
        { label: 'B', text: 'No | Yes' },
        { label: 'C', text: 'No | No' },
        { label: 'D', text: 'Yes | Yes' }
      ],
      ans: 'C',
      explanation: 'Phrases like "when read in conjunction with Note X" or "with the foregoing explanation" are vague and prohibited; the required phrase is "except for the effects of the matter(s)...".'
    },
    {
      id: 'AT10012_Q19',
      n: 19,
      stem: 'In which of the following situations would an auditor ordinarily choose between expressing a qualified opinion or an adverse opinion?',
      opts: [
        { label: 'A', text: 'The auditor wishes to emphasize an unusually important subsequent event.' },
        { label: 'B', text: 'The financial statements fail to disclose information that is required by Philippine Financial Reporting Standards.' },
        { label: 'C', text: 'Events disclosed in the financial statements cause the auditor to have substantial doubt about the entity’s ability to continue as a going concern.' },
        { label: 'D', text: 'The auditor did not observe the entity’s physical inventory and is unable to become satisfied as to its balance by other auditing procedures.' }
      ],
      ans: 'B',
      explanation: 'Inadequate disclosure is a departure from PFRS, leading to a choice between qualified (material not pervasive) or adverse (material and pervasive).'
    },
    {
      id: 'AT10012_Q20',
      n: 20,
      stem: 'Which of the following phrases would an auditor most likely include in the auditor’s report when expressing a qualified opinion because of inadequate disclosure?',
      opts: [
        { label: 'A', text: 'Do not present fairly in all material respects.' },
        { label: 'B', text: 'Except for the omission of the information included in the Basis for Qualified Opinion paragraph.' },
        { label: 'C', text: 'With the foregoing explanation of these omitted procedures.' },
        { label: 'D', text: 'Subject to the departure from generally accepted accounting principles, as described above.' }
      ],
      ans: 'B',
      explanation: 'The standard wording is "except for the omission of the information..." described in the Basis for Qualified Opinion section.'
    },
    {
      id: 'AT10012_Q21',
      n: 21,
      stem: 'Which of the following best describes key audit matters (KAM):\nI. Those matters that, in the auditor’s professional judgment, were of most significance in the audit of the financial statements of the current period.\nII. Selected from matters communicated with those charged with governance.\nIII. A substitute for disclosure, expressing a modified opinion, material uncertainty reporting requirements (PSA 570) and includes a separate opinion for the KAM',
      opts: [
        { label: 'A', text: 'I only' },
        { label: 'B', text: 'II only' },
        { label: 'C', text: 'Both I and II' },
        { label: 'D', text: 'I, II, and III' }
      ],
      ans: 'C',
      explanation: 'Statements I and II are true. III is false because KAM is NEVER a substitute for disclosure, modified opinion, or going concern.'
    },
    {
      id: 'AT10012_Q22',
      n: 22,
      stem: 'Which of the following statements concerning communication of key audit matters in the auditor’s report is incorrect?',
      opts: [
        { label: 'A', text: 'Communicating key audit matters in the auditor’s report enhances the communicative value of the auditor’s report by providing greater transparency about the audit that was performed.' },
        { label: 'B', text: 'Communicating key audit matters provides additional information to intended users of the financial statements to assist them in understanding those matters that, in the auditor’s professional judgment, were of most significance in the audit of the financial statements of the current and prior period/s.' },
        { label: 'C', text: 'Communicating key audit matters may assist intended users in understanding the entity and areas of significant management judgment in the audited financial statements.' },
        { label: 'D', text: 'The auditor’s determination of key audit matters is limited to those matters of most significance in the audit of the financial statements of the current period, even when comparative financial statements are presented.' }
      ],
      ans: 'B',
      explanation: 'KAM is determined for the CURRENT period only, not for prior periods.'
    },
    {
      id: 'AT10012_Q23',
      n: 23,
      stem: 'Communicating key audit matters in the auditor’s report is:\n• A substitute for disclosures in the financial statements.\n• A substitute for the auditor’s expression of a modified opinion.\n• A substitute for reporting in accordance with PSA 570 (Revised) when a material uncertainty exists.\n• A separate opinion on individual matters.',
      opts: [
        { label: 'A', text: 'Yes | Yes | No | Yes' },
        { label: 'B', text: 'Yes | No | Yes | Yes' },
        { label: 'C', text: 'No | No | Yes | No' },
        { label: 'D', text: 'No | No | No | No' }
      ],
      ans: 'D',
      explanation: 'KAM is never a substitute for disclosures, modified opinions, going concern uncertainty reporting, or separate opinions on matters.'
    },
    {
      id: 'AT10012_Q24',
      n: 24,
      stem: 'When audited financial statements are presented in a document (e.g., annual report) containing other information, the auditor',
      opts: [
        { label: 'A', text: 'Should read the other information to consider whether it is inconsistent with the audited financial statements.' },
        { label: 'B', text: 'Has no responsibility for the other information because it is not part of the basic financial statements.' },
        { label: 'C', text: 'Has an obligation to perform auditing procedures to corroborate the other information.' },
        { label: 'D', text: 'Is required to express a qualified opinion if the other information has a material misstatement of fact.' }
      ],
      ans: 'A',
      explanation: 'Under PSA 720, the auditor reads other information to identify material inconsistencies with the FS or auditor\'s knowledge.'
    },
    {
      id: 'AT10012_Q25',
      n: 25,
      stem: 'PSA 720 states, “If, on reading the other information, the auditor identifies a material inconsistency, the auditor should determine whether the audited financial statement or the other information needs to be amended”. What type of opinion should be expressed if the client refuses to make the necessary amendment in the financial statements?',
      opts: [
        { label: 'A', text: 'Disclaimer of opinion' },
        { label: 'B', text: 'Qualified opinion or disclaimer of opinion' },
        { label: 'C', text: 'Unqualified opinion with an emphasis of matter paragraph describing the material inconsistency' },
        { label: 'D', text: 'Qualified or adverse opinion' }
      ],
      ans: 'D',
      explanation: 'If the FS are materially misstated and management refuses to amend, the auditor expresses a qualified or adverse opinion.'
    },
    {
      id: 'AT10012_Q26',
      n: 26,
      stem: 'There are two broad financial reporting frameworks for comparatives: the corresponding figures and the comparative financial statements. Which of the following statements is correct concerning these reporting frameworks?',
      opts: [
        { label: 'A', text: 'Under the corresponding figures framework, the corresponding figures for the prior period(s) are integral part of the current period financial statements.' },
        { label: 'B', text: 'Under the corresponding figures framework, the corresponding figures for the prior period(s) are considered separate financial statements.' },
        { label: 'C', text: 'Under the comparative financial statements framework, the comparative financial statements for the prior period(s) are intended to be read in conjunction with the amounts and other disclosures relating to the current period.' },
        { label: 'D', text: 'Under the comparative financial statements framework, the amounts and other disclosures for the prior period(s) form part of the current period financial statements.' }
      ],
      ans: 'A',
      explanation: 'In the corresponding figures framework (standard under PFRS/PSA 710), prior period figures are an integral part of current period FS.'
    },
    {
      id: 'AT10012_Q27',
      n: 27,
      stem: 'The following statements relate to the auditor’s reporting responsibilities regarding comparatives. Which is incorrect?\nI. For corresponding figures, the auditor’s report only refers to the financial statements of the current period.\nII. For comparative financial statements, the auditor’s report refers to each period that financial statements are presented.',
      opts: [
        { label: 'A', text: 'I only' },
        { label: 'B', text: 'II only' },
        { label: 'C', text: 'Both I and II' },
        { label: 'D', text: 'Neither I nor II' }
      ],
      ans: 'D',
      explanation: 'Both statements I and II are correct; neither is incorrect.'
    },
    {
      id: 'AT10012_Q28',
      n: 28,
      stem: 'According to PSA 710, the incoming auditor may refer to the predecessor auditor’s report on the corresponding figures in the incoming auditor’s report for the current period. The incoming auditor’s report should indicate\nI. That the financial statements of the prior period were audited by another auditor.\nII. The type of report issued by the predecessor auditor.\nIII. The date of the predecessor auditor’s report.',
      opts: [
        { label: 'A', text: 'I and II only.' },
        { label: 'B', text: 'II and III only.' },
        { label: 'C', text: 'I and III only.' },
        { label: 'D', text: 'I, II, and III.' }
      ],
      ans: 'D',
      explanation: 'An Other Matter paragraph states that prior FS were audited by predecessor, the type of report, and date.'
    },
    {
      id: 'AT10012_Q29',
      n: 29,
      stem: 'J, CPA, audited JST Company’s prior-year financial statements. These statements are presented with those of the current year for comparative purposes without J’s auditor’s report, which expressed a qualified opinion. In drafting the current year’s auditor’s report, S, CPA, the incoming auditor, should\nI. Not name J as the predecessor auditor.\nII. Indicate the type of report issued by J.\nIII. Indicate the substantive reasons for J’s qualification.\nIV. Indicate the date of J’s auditor’s report.',
      opts: [
        { label: 'A', text: 'I, II, and IV only.' },
        { label: 'B', text: 'II, III, and IV only.' },
        { label: 'C', text: 'I, II, and III only.' },
        { label: 'D', text: 'I, II, III, and IV.' }
      ],
      ans: 'D',
      explanation: 'All four statements are correct under PSA 710 when referring to a predecessor auditor\'s report.'
    },
    {
      id: 'AT10012_Q30',
      n: 30,
      stem: 'The predecessor auditor, who is satisfied after properly communicating with the incoming auditor, has reissued his/her auditor’s report on prior year financial statements. The predecessor auditor’s report should',
      opts: [
        { label: 'A', text: 'Refer to the work of the incoming auditor in the scope and opinion paragraphs' },
        { label: 'B', text: 'Refers to the report of the incoming auditor only in the scope paragraphs' },
        { label: 'C', text: 'Refer to both the work and the report of the incoming auditor only in the opinion paragraph' },
        { label: 'D', text: 'Not refer to the report or the work of the incoming auditor' }
      ],
      ans: 'D',
      explanation: 'A reissued predecessor report on prior statements does not refer to the incoming auditor.'
    },
    {
      id: 'AT10012_Q31',
      n: 31,
      stem: 'Financial statements prepared in accordance with a financial reporting framework designed to meet the financial information needs of specific users are referred to as',
      opts: [
        { label: 'A', text: 'Special purpose financial statements' },
        { label: 'B', text: 'Special purpose framework' },
        { label: 'C', text: 'General purpose financial statements' },
        { label: 'D', text: 'Specific purpose financial statements' }
      ],
      ans: 'A',
      explanation: 'These are special purpose financial statements (PSA 800).'
    },
    {
      id: 'AT10012_Q32',
      n: 32,
      stem: 'An auditor’s report on financial statements prepared in accordance with the financial reporting provisions of a contract (that is, a special purpose framework) to comply with the provisions of that contract should include all of the following, except',
      opts: [
        { label: 'A', text: 'An opinion as to whether the financial statements are presented fairly, in all material respects, in accordance with the financial reporting provisions of the contract.' },
        { label: 'B', text: 'A statement that indicates the basis of accounting used.' },
        { label: 'C', text: 'An opinion as to whether the basis of accounting used is appropriate under the circumstances.' },
        { label: 'D', text: 'Reference to the note to the financial statements that describes the basis of presentation.' }
      ],
      ans: 'C',
      explanation: 'The auditor expresses an opinion on whether the statements comply with the contract, not on whether the basis of accounting is appropriate for the contracting parties.'
    },
    {
      id: 'AT10012_Q33',
      n: 33,
      stem: 'A CPA is permitted to accept a separate engagement (not in conjunction with an audit of financial statements) to audit an entity’s:\nSchedule of Accounts Receivable | Schedule of Profit Participation',
      opts: [
        { label: 'A', text: 'Yes | No' },
        { label: 'B', text: 'No | Yes' },
        { label: 'C', text: 'Yes | Yes' },
        { label: 'D', text: 'Yes | No' }
      ],
      ans: 'C',
      explanation: 'Under PSA 805, an auditor may accept an audit of a single financial statement or specific element/account.'
    },
    {
      id: 'AT10012_Q34',
      n: 34,
      stem: 'An auditor may express an opinion on an entity’s accounts receivable balance even if the auditor has disclaimed an opinion on the financial statements taken as a whole provided the',
      opts: [
        { label: 'A', text: 'Report on the accounts receivable is presented separately from the disclaimer of opinion on the financial statements.' },
        { label: 'B', text: 'Auditor also reports on the current asset portion of the entity’s statement of financial position.' },
        { label: 'C', text: 'Use of the report on the accounts receivable is restricted.' },
        { label: 'D', text: 'Report on the accounts receivable discloses the reason for the disclaimer of opinion on the financial statements.' }
      ],
      ans: 'A',
      explanation: 'Under PSA 805, an unmodified opinion on a specific element can only be expressed if published separately from the disclaimer/adverse report.'
    },
    {
      id: 'AT10012_Q35',
      n: 35,
      stem: 'In the auditor’s report on summary financial statements that are derived from an entity’s audited financial statements, a CPA should indicate that the',
      opts: [
        { label: 'A', text: 'CPA has audited and expressed an opinion on the complete financial statements.' },
        { label: 'B', text: 'CPA expresses limited assurance that the financial statements are presented in accordance with PFRS.' },
        { label: 'C', text: 'Summary financial statements are not fairly presented in all material respects.' },
        { label: 'D', text: 'Summary financial statements are prepared in accordance with special purpose financial reporting framework.' }
      ],
      ans: 'A',
      explanation: 'Under PSA 810, the report states that the auditor has audited and expressed an opinion on the complete FS.'
    },
    {
      id: 'AT10012_Q36',
      n: 36,
      stem: 'The following are special purpose audit engagements, except:',
      opts: [
        { label: 'A', text: 'Compilation of financial statements.' },
        { label: 'B', text: 'Audits involving statements prepared in accordance with a comprehensive basis of accounting other than generally accepted accounting principles in the Philippines.' },
        { label: 'C', text: 'Audits of specified accounts, elements of accounts, or items in a financial statement.' },
        { label: 'D', text: 'Audits of compliance with contractual agreements.' }
      ],
      ans: 'A',
      explanation: 'Compilation is a non-assurance related service (PSRS 4410), not an audit engagement.'
    },
    {
      id: 'AT10012_Q37',
      n: 37,
      stem: 'Other comprehensive financial reporting frameworks may include the following, except:',
      opts: [
        { label: 'A', text: 'The Philippine Financial Reporting Framework' },
        { label: 'B', text: 'That used by an entity to prepare its income tax return' },
        { label: 'C', text: 'The cash receipts and disbursements basis of accounting' },
        { label: 'D', text: 'The financial reporting provisions of a government regulatory agency' }
      ],
      ans: 'A',
      explanation: 'PFRS is the general-purpose framework, not a special purpose or other comprehensive basis.'
    },
    {
      id: 'AT10012_Q38',
      n: 38,
      stem: 'RIEL Company prepared its financial statements on an accounting basis prescribed by a government agency solely for filing with that agency. The practitioner believes that the financial statements are not presented fairly in conformity with the prescribed basis. The practitioner should issue a(n)',
      opts: [
        { label: 'A', text: 'Unqualified report' },
        { label: 'B', text: 'Standard audit report' },
        { label: 'C', text: 'Disclaimer of opinion' },
        { label: 'D', text: 'Adverse opinion' }
      ],
      ans: 'D',
      explanation: 'If financial statements are not presented fairly in conformity with the applicable reporting basis, an adverse opinion is expressed.'
    },
    {
      id: 'AT10012_Q39',
      n: 39,
      stem: 'Audits of components of financial statements:',
      opts: [
        { label: 'A', text: 'Must be undertaken as a separate, stand-alone engagement.' },
        { label: 'B', text: 'Must be performed in conjunction with an audit of the entity’s financial statements.' },
        { label: 'C', text: 'May be undertaken as a separate engagement or in conjunction with an audit of the entity’s financial statements.' },
        { label: 'D', text: 'Are not allowed since it is tantamount to expressing a piecemeal opinion on the accounts subjected to the audit.' }
      ],
      ans: 'C',
      explanation: 'Audits of single FS or specific elements may be performed separately or in conjunction with the full audit.'
    },
    {
      id: 'AT10012_Q40',
      n: 40,
      stem: 'The following statements relates to audit of specific components of financial statements. Which is incorrect?',
      opts: [
        { label: 'A', text: 'This type of engagement may be undertaken as a separate engagement or in conjunction with an audit of the entity’s financial statements.' },
        { label: 'B', text: 'The auditor needs to consider financial statement items that are interrelated and which could materially affect the information on which the audit opinion is to be expressed.' },
        { label: 'C', text: 'The auditor’s examination will ordinarily be less extensive than if the same component were to be audited in connection with a report on the entire financial statements.' },
        { label: 'D', text: 'When an adverse opinion or disclaimer of opinion on the entire financial statements has been expressed, the auditor may report on components of the financial statements only if those components are not so extensive as to constitute a major portion of the financial statements.' }
      ],
      ans: 'C',
      explanation: 'Auditing a single component in isolation requires a MORE extensive examination than when audited as part of the whole financial statements.'
    }
  ]
};
