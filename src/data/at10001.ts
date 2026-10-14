import { ModuleData } from './types';

export const at10001: ModuleData = {
  id: 'AT-10001',
  code: 'AT-10001',
  title: 'An Introduction to Assurance, Auditing, and Related Services',
  standards: 'Preface, Framework, PSA 120, PSA 200 (Revised and Redrafted)',
  questionCount: 60,
  summary: 'Authority attaching to Philippine Standards (PSAs, PSREs, PSAEs, PSRSs), Philippine Framework for Assurance Engagements, Elements of an Assurance Engagement, Types of Audits (FS, Operational, Compliance), Overall Objectives under PSA 200, Review Engagements, Agreed-Upon Procedures, and Compilations.',
  lectureOutline: `### THE AUTHORITY ATTACHING TO PHILIPPINE STANDARDS ISSUED BY THE AASC

| Standards | Application |
|---|---|
| 1. Philippine Standards on Auditing (PSAs) | Audit of historical financial information |
| 2. Philippine Standards on Review Engagements (PSREs) | Review of historical financial information |
| 3. Philippine Standards on Assurance Engagements (PSAEs) | Assurance engagements dealing with subject matters other than historical financial information |
| 4. Philippine Standards on Related Services (PSRSs) | • Compilation engagements<br>• Engagements to apply agreed-upon procedures to information<br>• Other related services engagements as specified by the AASC |

- **Engagement Standards:** PSAs, PSREs, PSAEs and PSRSs are collectively referred to as the AASC's Engagement Standards.
- **PSQM Application:** Philippine Standards on Quality Management (PSQM) are to be applied for all services falling under the AASC's engagement standards.
- **Public Sector:** Philippine Standards are applicable to engagements in the Public Sector.

#### Practice Statements / Practice Notes
- Issued to provide interpretive guidance and practical assistance in implementing Philippine Standards and promote good practice.
- A practitioner who does not apply relevant Practice Statements/Notes should be prepared to explain how the basic principles and essential procedures have been complied with.

#### AASC Bulletins and Alerts
- Issued to provide guidance to auditors in the application of PSAs.
- Not part of PSAs and do not change the requirements of relevant PSAs.

---

### PHILIPPINE FRAMEWORK FOR ASSURANCE ENGAGEMENTS
- The Framework does not itself establish standards or provide procedural requirements.
- Practitioners performing assurance engagements are governed by:
  1. The Philippine Code of Ethics for Professional Accountants
  2. Philippine Standards on Quality Management (PSQM)

#### Definition of Assurance Engagement
"An engagement in which a practitioner expresses a conclusion designed to enhance the degree of confidence of the intended users other than the responsible party about the outcome of the evaluation or measurement of a subject matter against criteria."

- **Assertion-based Engagements:** Evaluation performed by the responsible party; subject matter information is in the form of an assertion made available to intended users.
- **Direct Reporting Engagements:** Practitioner directly performs evaluation/measurement or obtains representation not available to users, providing the subject matter info in the assurance report.

#### Two Types of Assurance Engagement
1. **Reasonable Assurance Engagement:** Objective is a reduction in assurance engagement risk to an acceptably low level as the basis for a positive form of expression of conclusion.
2. **Limited Assurance Engagement:** Objective is a reduction in assurance engagement risk to a level acceptable in the circumstances (risk greater than reasonable assurance), as the basis for a negative form of expression of conclusion.

#### Five Elements of an Assurance Engagement
1. A three-party relationship: Practitioner, Responsible Party, and Intended Users.
2. An appropriate subject matter.
3. Suitable criteria.
4. Sufficient appropriate evidence.
5. A written assurance report.

---

### COMPARISON OF AUDIT TYPES

| Feature | Financial Statements Audit | Operational Audit | Compliance Audit |
|---|---|---|---|
| **Assertions** | Financial statements are fairly presented | Operations are conducted efficiently and effectively | Activities complied with applicable laws, rules, regulations, contracts or management policy |
| **Suitable Criteria** | GAAP / PFRS / identified reporting framework | Objectives set by management | Applicable contracts, rules, regulations, laws or policy |
| **Report** | Opinion whether FS are fairly presented | Report on efficiency and effectiveness with recommendations | Degree of compliance with applicable rules/laws |
| **Generally Performed By** | External auditors (CPA firms) | Internal auditors | Government auditors |

---

### SUMMARY OF SERVICES

| Nature of Service | Audit | Review | Agreed-upon Procedures | Compilation |
|---|---|---|---|---|
| **Level of Assurance** | High, but not absolute (Reasonable) | Moderate assurance (Limited) | No assurance | No assurance |
| **Report Provided** | Positive assurance on assertions (Audit Report) | Negative assurance on assertions (Review Report) | Factual findings of procedures | Identification of information compiled |
| **Independence** | Required | Required | Not required | Not required |`,
  items: [
    {
      id: 'AT10001_Q1',
      n: 1,
      stem: 'The Auditing and Assurance Standards Council (AASC) was created by the _________ upon the recommendation of the Board of Accountancy to assist the BOA in the establishment and promulgation of auditing standards in the Philippines.',
      opts: [
        { label: 'A', text: 'Professional Regulation Commission (PRC)' },
        { label: 'B', text: 'Commission on Audit (COA)' },
        { label: 'C', text: 'Securities and Exchange Commission (SEC)' },
        { label: 'D', text: 'IFAC' }
      ],
      ans: 'A',
      explanation: 'AASC was created by the PRC upon recommendation of the BOA (Republic Act No. 9298).'
    },
    {
      id: 'AT10001_Q2',
      n: 2,
      stem: 'The main objective of the _____________________ is to adopt the standards and practice statements issued by the ________________ to attain uniformity of the local GAAS with international standards.',
      opts: [
        { label: 'A', text: 'IFAC; IAASB' },
        { label: 'B', text: 'PICPA; IAASB' },
        { label: 'C', text: 'AASC; IFAC' },
        { label: 'D', text: 'AASC; IAASB' }
      ],
      ans: 'D',
      explanation: 'The AASC adopts the standards and practice statements issued by the IAASB (International Auditing and Assurance Standards Board).'
    },
    {
      id: 'AT10001_Q3',
      n: 3,
      stem: 'Assurance services involve all the following except:',
      opts: [
        { label: 'A', text: 'improving the quality of information for decision purposes.' },
        { label: 'B', text: 'improving the quality of the decision model used.' },
        { label: 'C', text: 'improving the relevance of information.' },
        { label: 'D', text: 'implementing a system that improves the processing of information.' }
      ],
      ans: 'D',
      explanation: 'Implementing a system is a management/consulting function, not an assurance service.'
    },
    {
      id: 'AT10001_Q4',
      n: 4,
      stem: 'Which of the following is a correct statement?',
      opts: [
        { label: 'A', text: 'An audit provides limited assurance by attesting to the fairness of the client\'s assertions.' },
        { label: 'B', text: 'A review provides positive assurance by attesting to the reliability of the client\'s assertions.' },
        { label: 'C', text: 'Management consulting services provide attestation in all cases.' },
        { label: 'D', text: 'Accounting services do not provide attestation.' }
      ],
      ans: 'D',
      explanation: 'Accounting services (such as compilation or bookkeeping) are non-assurance and do not provide attestation.'
    },
    {
      id: 'AT10001_Q5',
      n: 5,
      stem: 'Which one of the following is not a part of the attest process?',
      opts: [
        { label: 'A', text: 'gathering evidence about assertions' },
        { label: 'B', text: 'proving the accuracy of the books and records' },
        { label: 'C', text: 'evaluating evidence against objective criteria' },
        { label: 'D', text: 'communicating the conclusions reached' }
      ],
      ans: 'B',
      explanation: 'An auditor does not prove absolute accuracy of books and records, but obtains reasonable assurance.'
    },
    {
      id: 'AT10001_Q6',
      n: 6,
      stem: 'The Philippine Framework for Assurance Engagements',
      opts: [
        { label: 'A', text: 'Identifies engagements to which PSAs, PSREs, and PSAEs apply.' },
        { label: 'B', text: 'Defines and describes the elements and objectives of an assurance engagement.' },
        { label: 'C', text: 'Does not establish standards or provide procedural requirements for the performance of assurance engagements.' },
        { label: 'D', text: 'All of the above.' }
      ],
      ans: 'D',
      explanation: 'The Framework defines elements, identifies applicable standards, and does not itself establish procedural requirements.'
    },
    {
      id: 'AT10001_Q7',
      n: 7,
      stem: 'Which of the following engagements are covered by the Framework for Assurance Engagements?',
      opts: [
        { label: 'A', text: 'Consulting and agreed-upon procedures engagements' },
        { label: 'B', text: 'Agreed-upon procedures engagements and Financial statement audits.' },
        { label: 'C', text: 'Compliance audits and financial statement audits.' },
        { label: 'D', text: 'Preparation of tax returns and consulting engagements.' }
      ],
      ans: 'C',
      explanation: 'Both compliance audits and financial statement audits are assurance engagements covered by the Framework.'
    },
    {
      id: 'AT10001_Q8',
      n: 8,
      stem: 'The Philippine Standards on Assurance Engagements (PSAEs) are to be applied in',
      opts: [
        { label: 'A', text: 'Compilation engagements and agreements to apply agreed-upon procedures to information.' },
        { label: 'B', text: 'The audit or review of historical financial information.' },
        { label: 'C', text: 'Assurance engagements dealing with subject matters other than historical financial information.' },
        { label: 'D', text: 'Assurance engagements dealing with historical financial information.' }
      ],
      ans: 'C',
      explanation: 'PSAEs apply to assurance engagements dealing with subject matters other than historical financial info.'
    },
    {
      id: 'AT10001_Q9',
      n: 9,
      stem: 'Which of the following Standards are to be applied to compilation engagements, engagements to apply agreed-upon procedures to information and other related services engagements as specified by the AASC?',
      opts: [
        { label: 'A', text: 'Philippine Standards on Related Services (PSRSs)' },
        { label: 'B', text: 'Philippine Standards on Auditing (PSAs)' },
        { label: 'C', text: 'Philippine Standards on Review Engagements (PSREs)' },
        { label: 'D', text: 'Philippine Standards on Assurance Engagements (PSAEs)' }
      ],
      ans: 'A',
      explanation: 'PSRSs apply to compilations, agreed-upon procedures, and other related services.'
    },
    {
      id: 'AT10001_Q10',
      n: 10,
      stem: 'The Philippine Standards on Quality Management (PSQMs) are to be applied to',
      opts: [
        { label: 'A', text: 'Assurance engagements only.' },
        { label: 'B', text: 'Review engagements only.' },
        { label: 'C', text: 'Compilation and review engagements only.' },
        { label: 'D', text: 'All services that fall under the AASC’s engagement standards.' }
      ],
      ans: 'D',
      explanation: 'PSQMs apply to all services falling under the AASC\'s engagement standards.'
    },
    {
      id: 'AT10001_Q11',
      n: 11,
      stem: 'CPAs in public practice who perform assurance engagements are governed by the following, except',
      opts: [
        { label: 'A', text: 'Philippine Standards on Related Services' },
        { label: 'B', text: 'Philippine Framework for Assurance Engagements' },
        { label: 'C', text: 'Code of Ethics for Professional Accountants in the Philippines' },
        { label: 'D', text: 'Philippine Standards on Quality Management' }
      ],
      ans: 'A',
      explanation: 'PSRSs govern non-assurance related services (AUP and compilations), not assurance engagements.'
    },
    {
      id: 'AT10001_Q12',
      n: 12,
      stem: 'The ____________ are issued by the AASC to provide interpretive guidance and practical assistance to auditors in the implementation of PSAs and to promote good practice.',
      opts: [
        { label: 'A', text: 'PSRS' },
        { label: 'B', text: 'PAEPS' },
        { label: 'C', text: 'PAPN' },
        { label: 'D', text: 'PREPS' }
      ],
      ans: 'C',
      explanation: 'PAPN stands for Philippine Auditing Practice Notes (or Practice Statements).'
    },
    {
      id: 'AT10001_Q13',
      n: 13,
      stem: 'Practitioners who perform assurance engagements are governed by the',
      opts: [
        { label: 'A', text: 'Code of ethics for Professional Accountants in the Philippines' },
        { label: 'B', text: 'The Framework for Assurance Engagements' },
        { label: 'C', text: 'Philippine Standards on Quality Management' },
        { label: 'D', text: 'All of the above.' }
      ],
      ans: 'D',
      explanation: 'Practitioners are governed by the Code of Ethics, the Framework, and PSQM.'
    },
    {
      id: 'AT10001_Q14',
      n: 14,
      stem: 'A proposed assurance engagement can be accepted when the practitioner’s preliminary knowledge about the engagement circumstances indicates that relevant ethical requirements will be satisfied and:\nI. The subject matter of the engagement is appropriate.\nII. The criteria to be used are suitable and are available to the intended users.\nIII. The practitioner has access to sufficient appropriate evidence to support the conclusion.\nIV. The conclusion is to be contained in a written report.\nV. There is a rational purpose for the engagement.',
      opts: [
        { label: 'A', text: 'I, II, and III only' },
        { label: 'B', text: 'I, II, IV, and V only' },
        { label: 'C', text: 'I, II, III, and IV only' },
        { label: 'D', text: 'I, II, III, IV, and V' }
      ],
      ans: 'D',
      explanation: 'All five conditions must be met for an assurance engagement to be accepted.'
    },
    {
      id: 'AT10001_Q15',
      n: 15,
      stem: 'A practitioner should accept an assurance engagement only if',
      opts: [
        { label: 'A', text: 'The subject matter is in the form of financial information.' },
        { label: 'B', text: 'The criteria to be used are not available to the intended users.' },
        { label: 'C', text: 'The subject matter is the responsibility of either the intended users or the practitioner.' },
        { label: 'D', text: 'The practitioner’s conclusion is to be contained in a written report.' }
      ],
      ans: 'D',
      explanation: 'A written assurance report is an indispensable element for accepting an assurance engagement.'
    },
    {
      id: 'AT10001_Q16',
      n: 16,
      stem: 'Which of the following describes how the objective of a review of financial statements differs from the objective of a compilation engagement?',
      opts: [
        { label: 'A', text: 'The primary objective of a review engagement is to test the completeness of the financial statements prepared, but a compilation tests for reasonableness.' },
        { label: 'B', text: 'The primary objective of a review engagement is to provide positive assurance that the financial statements are fairly presented, but a compilation provides no such assurance.' },
        { label: 'C', text: 'In a review engagement, accountants provide limited assurance, but a compilation expresses no assurance.' },
        { label: 'D', text: 'In a review engagement, accountants provide reasonable or positive assurance that the financial statements are fairly presented, but a compilation provides limited assurance.' }
      ],
      ans: 'C',
      explanation: 'Review provides limited (negative) assurance; compilation expresses no assurance.'
    },
    {
      id: 'AT10001_Q17',
      n: 17,
      stem: 'The following statements relate to the performance of an assurance engagement other than an audit or review of historical financial information covered by PSAs and PSREs. Which is incorrect?',
      opts: [
        { label: 'A', text: 'Those persons who are to perform the engagement should collectively possess the necessary professional competence.' },
        { label: 'B', text: 'The practitioner should consider materiality and assurance engagement risk when planning and performing an assurance engagement.' },
        { label: 'C', text: 'The assurance report should be in writing and should contain a clear expression of the practitioner’s conclusion about the subject matter information.' },
        { label: 'D', text: 'The practitioner is precluded from using the work of persons from other professional disciplines.' }
      ],
      ans: 'D',
      explanation: 'Practitioners are NOT precluded from using the work of experts or other professional disciplines.'
    },
    {
      id: 'AT10001_Q18',
      n: 18,
      stem: 'Unlike consulting services, assurance services:',
      opts: [
        { label: 'A', text: 'Improves the quality of information' },
        { label: 'B', text: 'Report on how to use information' },
        { label: 'C', text: 'Make recommendations to management' },
        { label: 'D', text: 'Are two-party contracts' }
      ],
      ans: 'A',
      explanation: 'Assurance services focus on improving the quality/reliability of information for decision makers.'
    },
    {
      id: 'AT10001_Q19',
      n: 19,
      stem: 'Which of the following statements is correct?\nI. In an assurance engagement, a practitioner expresses a conclusion designed to enhance the degree of confidence of the responsible party on the outcome of the evaluation or measurement of a subject matter against criteria.\nII. In addition to the Framework and relevant Assurance Standards, practitioners are governed by the Code of Ethics for CPAs in the Philippines and the Philippine Standards on Quality Management when performing assurance engagements.',
      opts: [
        { label: 'A', text: 'I only' },
        { label: 'B', text: 'II only' },
        { label: 'C', text: 'Both I and II' },
        { label: 'D', text: 'Neither I nor II' }
      ],
      ans: 'B',
      explanation: 'Statement I is incorrect because it is designed to enhance the confidence of intended users OTHER THAN the responsible party.'
    },
    {
      id: 'AT10001_Q20',
      n: 20,
      stem: 'In an assurance engagement, the responsible party and the intended users',
      opts: [
        { label: 'A', text: 'Should be from different entities.' },
        { label: 'B', text: 'Should be from the same entity.' },
        { label: 'C', text: 'May be from the same entity or different entities.' },
        { label: 'D', text: 'Are both responsible for determining the nature, timing and extent of the procedures to be performed.' }
      ],
      ans: 'C',
      explanation: 'The responsible party and intended users may be from different entities or from the same entity (e.g. board vs supervisory committee).'
    },
    {
      id: 'AT10001_Q21',
      n: 21,
      stem: 'The subject matter of an assurance engagement may include:\nFinancial Information | Internal Controls | Compliance with Regulation',
      opts: [
        { label: 'A', text: 'Yes | Yes | Yes' },
        { label: 'B', text: 'No | No | No' },
        { label: 'C', text: 'Yes | No | Yes' },
        { label: 'D', text: 'No | Yes | No' }
      ],
      ans: 'A',
      explanation: 'Subject matter can be financial performance, non-financial performance, systems and processes (internal control), or behavior (compliance).'
    },
    {
      id: 'AT10001_Q22',
      n: 22,
      stem: 'When performing an assurance service, professional accountants use standards or benchmarks to evaluate or measure the subject matter of an assurance engagement. These are referred to in the Philippine Framework for Assurance Engagements as',
      opts: [
        { label: 'A', text: 'Criteria.' },
        { label: 'B', text: 'Benchmarks.' },
        { label: 'C', text: 'Standards.' },
        { label: 'D', text: 'Yardsticks.' }
      ],
      ans: 'A',
      explanation: 'The benchmarks used to evaluate or measure the subject matter are called "criteria".'
    },
    {
      id: 'AT10001_Q23',
      n: 23,
      stem: 'Which of the following statements is true concerning evidence in an assurance engagement?',
      opts: [
        { label: 'A', text: 'Sufficiency is the measure of the quantity of evidence.' },
        { label: 'B', text: 'Appropriateness is the measure of the quality of evidence, that is, its reliability and persuasiveness.' },
        { label: 'C', text: 'The reliability of evidence is influenced not by its nature but by its source.' },
        { label: 'D', text: 'Obtaining more evidence may compensate for its poor quality.' }
      ],
      ans: 'A',
      explanation: 'Sufficiency is the measure of the quantity of evidence; appropriateness is the measure of the quality (relevance and reliability).'
    },
    {
      id: 'AT10001_Q24',
      n: 24,
      stem: 'Relevant criteria contribute to conclusion that are',
      opts: [
        { label: 'A', text: 'Free from bias.' },
        { label: 'B', text: 'Clear and comprehensive.' },
        { label: 'C', text: 'Subject to different interpretations.' },
        { label: 'D', text: 'Useful for decision making.' }
      ],
      ans: 'D',
      explanation: 'Relevant criteria contribute to conclusions that assist decision-making by intended users.'
    },
    {
      id: 'AT10001_Q25',
      n: 25,
      stem: 'The criteria against which the subject matter of the assurance engagement is to be evaluated or measured should possess which of the following characteristics?\nRelevant | Concise | Neutral',
      opts: [
        { label: 'A', text: 'Yes | No | Yes' },
        { label: 'B', text: 'No | Yes | No' },
        { label: 'C', text: 'Yes | No | No' },
        { label: 'D', text: 'No | Yes | Yes' }
      ],
      ans: 'A',
      explanation: 'The characteristics of suitable criteria are: Relevance, Completeness, Reliability, Neutrality, and Understandability. "Concise" is not one.'
    },
    {
      id: 'AT10001_Q26',
      n: 26,
      stem: 'Criteria that are embodied in laws or regulations, or issued by authorized or recognized bodies of experts that follow a transparent due process are called',
      opts: [
        { label: 'A', text: 'Suitable criteria' },
        { label: 'B', text: 'Established criteria' },
        { label: 'C', text: 'Specifically developed criteria' },
        { label: 'D', text: 'General criteria' }
      ],
      ans: 'B',
      explanation: 'Criteria embodied in laws/regulations or issued by recognized bodies of experts are called established criteria.'
    },
    {
      id: 'AT10001_Q27',
      n: 27,
      stem: 'Assurance engagement risk is the risk',
      opts: [
        { label: 'A', text: 'That the practitioner expresses an inappropriate conclusion when the subject matter information is materially misstated.' },
        { label: 'B', text: 'Of expressing an inappropriate conclusion when the subject matter information is not materially misstated.' },
        { label: 'C', text: 'Through loss from litigation, adverse publicity, or other events arising in connection with a subject matter reported on.' },
        { label: 'D', text: 'Of expressing an inappropriate conclusion when the subject matter information is either materially misstated or not materially misstated.' }
      ],
      ans: 'A',
      explanation: 'Assurance engagement risk is the risk that the practitioner expresses an inappropriate conclusion when the subject matter info is materially misstated.'
    },
    {
      id: 'AT10001_Q28',
      n: 28,
      stem: 'The following are components of assurance engagement risk, except',
      opts: [
        { label: 'A', text: 'Inherent risk' },
        { label: 'B', text: 'Control risk' },
        { label: 'C', text: 'Detection risk' },
        { label: 'D', text: 'Business risk' }
      ],
      ans: 'D',
      explanation: 'Assurance engagement risk consists of inherent risk, control risk, and detection risk. Business risk is not a direct component.'
    },
    {
      id: 'AT10001_Q29',
      n: 29,
      stem: 'Reducing assurance engagement risk to zero is very rarely attainable or cost beneficial as a result of the following factors, except',
      opts: [
        { label: 'A', text: 'The use of selective testing.' },
        { label: 'B', text: 'The fact that much of the evidence available to the practitioner is persuasive rather than conclusive.' },
        { label: 'C', text: 'The practitioner may not have the required assurance knowledge and skills to gather and evaluate evidence.' },
        { label: 'D', text: 'The use of judgment in gathering and evaluating evidence and forming conclusions based on that evidence.' }
      ],
      ans: 'C',
      explanation: 'The practitioner must possess competence; lack of competence is not an inherent limitation of assurance engagements.'
    },
    {
      id: 'AT10001_Q30',
      n: 30,
      stem: 'In some assurance engagements, the evaluation or measurement of the subject matter is performed by the responsible party, and the subject matter information is in the form of an assertion by the responsible party that is made available to intended users. These engagements are called',
      opts: [
        { label: 'A', text: 'Direct reporting engagements' },
        { label: 'B', text: 'Assertion-based engagements' },
        { label: 'C', text: 'Non-assurance engagements' },
        { label: 'D', text: 'Recurring engagements' }
      ],
      ans: 'B',
      explanation: 'These are known as assertion-based (or attestation) engagements.'
    },
    {
      id: 'AT10001_Q31',
      n: 31,
      stem: 'What type of assurance engagement is involved when the practitioner expresses a positive form of conclusion?',
      opts: [
        { label: 'A', text: 'Limited assurance engagement.' },
        { label: 'B', text: 'Positive assurance engagement.' },
        { label: 'C', text: 'Reasonable assurance engagement.' },
        { label: 'D', text: 'Negative assurance engagement.' }
      ],
      ans: 'C',
      explanation: 'A reasonable assurance engagement results in a positive form of expression of conclusion.'
    },
    {
      id: 'AT10001_Q32',
      n: 32,
      stem: 'The objective of a __________ assurance engagement is a reduction in assurance engagement risk to a level that is acceptable in the circumstances of the engagement, but where the risk is greater than for a reasonable assurance engagement, as the basis for a __________ form of expression of the practitioner’s conclusion.',
      opts: [
        { label: 'A', text: 'limited; negative' },
        { label: 'B', text: 'reasonable; positive' },
        { label: 'C', text: 'limited; positive' },
        { label: 'D', text: 'reasonable; negative' }
      ],
      ans: 'A',
      explanation: 'A limited assurance engagement reduces risk to an acceptable level (higher than reasonable) to express a negative form conclusion.'
    },
    {
      id: 'AT10001_Q33',
      n: 33,
      stem: 'A practitioner’s assurance report contains the following conclusion: "Based on our work described in this report, nothing has come to our attention that causes us to believe that internal control is not effective in all material respects, based on ABC criteria." What type of assurance engagement was performed?',
      opts: [
        { label: 'A', text: 'Limited assurance engagement.' },
        { label: 'B', text: 'Reasonable assurance engagement.' },
        { label: 'C', text: 'Negative assurance engagement.' },
        { label: 'D', text: 'Positive assurance engagement.' }
      ],
      ans: 'A',
      explanation: 'Negative assurance ("nothing has come to our attention") is expressed in a limited assurance engagement.'
    },
    {
      id: 'AT10001_Q34',
      n: 34,
      stem: 'Limited assurance is provided for in',
      opts: [
        { label: 'A', text: 'an audit engagement.' },
        { label: 'B', text: 'a compilation engagement' },
        { label: 'C', text: 'a review engagement.' },
        { label: 'D', text: 'an assurance engagement.' }
      ],
      ans: 'C',
      explanation: 'A review engagement provides limited (moderate) assurance.'
    },
    {
      id: 'AT10001_Q35',
      n: 35,
      stem: 'Which of the following describes how the objective of a review of financial statements differs from the objective of a compilation engagement?',
      opts: [
        { label: 'A', text: 'The primary objective of a review engagement is to test the completeness of the financial statements prepared, but a compilation tests for reasonableness.' },
        { label: 'B', text: 'The primary objective of a review engagement is to provide positive assurance that the financial statements are fairly presented, but a compilation provides no such assurance.' },
        { label: 'C', text: 'In a review engagement, accountants provide limited assurance, but a compilation expresses no assurance.' },
        { label: 'D', text: 'In a review engagement, accountants provide reasonable or positive assurance that the financial statements are fairly presented, but a compilation provides limited assurance.' }
      ],
      ans: 'C',
      explanation: 'Review provides limited assurance; compilation expresses no assurance.'
    },
    {
      id: 'AT10001_Q36',
      n: 36,
      stem: 'Which one of the following is not a reason why the users of financial statements desire for an independent assessment of the financial statement presentation?',
      opts: [
        { label: 'A', text: 'complexity of transactions affecting the financial statements' },
        { label: 'B', text: 'lack of criteria on which to base information' },
        { label: 'C', text: 'remoteness of the user from the organization' },
        { label: 'D', text: 'all of them are potential reasons' }
      ],
      ans: 'B',
      explanation: 'Users require criteria (GAAP/PFRS) to exist; lack of criteria is not a reason why users desire an independent audit.'
    },
    {
      id: 'AT10001_Q37',
      n: 37,
      stem: 'Which of the following is not a primary responsibility of an auditor:',
      opts: [
        { label: 'A', text: 'Provide regulators with an opinion on whether the financial statements are presented fairly, in all material respects, in accordance with the applicable financial reporting framework.' },
        { label: 'B', text: 'Provide creditors with an opinion on whether the financial statements are presented fairly, in all material respects, in accordance with the applicable financial reporting framework.' },
        { label: 'C', text: 'Provide management with an opinion on whether the financial statements are presented fairly, in all material respects, in accordance with the applicable financial reporting framework.' },
        { label: 'D', text: 'Provide investors with an opinion by the auditor on whether the financial statements are presented fairly, in all material respects, in accordance with the applicable financial reporting framework.' }
      ],
      ans: 'C',
      explanation: 'Intended users are parties other than management (the responsible party).'
    },
    {
      id: 'AT10001_Q38',
      n: 38,
      stem: 'Which of the following best describes the concept of audit risk?',
      opts: [
        { label: 'A', text: 'The risk of the auditor being sued because of association with an audit client.' },
        { label: 'B', text: 'The risk that the auditor will provide an unmodified opinion on financial statements that are, in fact, materially misstated.' },
        { label: 'C', text: 'The overall risk that a material misstatement exists in the financial statements.' },
        { label: 'D', text: 'The risk that auditors use audit procedures that are inappropriate.' }
      ],
      ans: 'B',
      explanation: 'Audit risk is the risk that the auditor expresses an inappropriate (unmodified) opinion when the financial statements are materially misstated.'
    },
    {
      id: 'AT10001_Q39',
      n: 39,
      stem: 'The overall objectives of the auditor in conducting an audit of financial statements are:\nI. To obtain reasonable assurance about whether the financial statements as a whole are free from material misstatement, whether caused by fraud or error.\nII. To report on the financial statements.\nIII. To obtain conclusive rather than persuasive evidence.\nIV. To detect all misstatements, whether due to fraud or error.',
      opts: [
        { label: 'A', text: 'I and II only' },
        { label: 'B', text: 'II and IV only' },
        { label: 'C', text: 'I, II, and III only' },
        { label: 'D', text: 'I, II, III, and IV' }
      ],
      ans: 'A',
      explanation: 'Objectives under PSA 200 are I and II. Audit evidence is persuasive rather than conclusive, and an audit does not detect all misstatements.'
    },
    {
      id: 'AT10001_Q40',
      n: 40,
      stem: 'The auditor is required to comply with all PSAs relevant to the audit of an entity’s financial statements. A PSA is relevant to the audit when\nI. The PSA is in effect.\nII. The circumstances addressed by the PSA exist.',
      opts: [
        { label: 'A', text: 'I only' },
        { label: 'B', text: 'II only' },
        { label: 'C', text: 'Either I or II' },
        { label: 'D', text: 'Both I and II' }
      ],
      ans: 'D',
      explanation: 'A PSA is relevant when it is in effect and the circumstances addressed by it exist.'
    },
    {
      id: 'AT10001_Q41',
      n: 41,
      stem: 'Independent auditors of financial statements perform audits that reduce and control',
      opts: [
        { label: 'A', text: 'The business risks faced by investors.' },
        { label: 'B', text: 'Quality reviews performed by other CPA firms.' },
        { label: 'C', text: 'The information risk faced by investors.' },
        { label: 'D', text: 'The complexity of financial statements.' }
      ],
      ans: 'C',
      explanation: 'The primary goal of an audit is to reduce information risk faced by users.'
    },
    {
      id: 'AT10001_Q42',
      n: 42,
      stem: 'The auditor is required to maintain professional skepticism throughout the audit. Which of the following statements concerning professional skepticism is false?',
      opts: [
        { label: 'A', text: 'A belief that management and those charged with governance are honest and have integrity relieves the auditor of the need to maintain professional skepticism.' },
        { label: 'B', text: 'Maintaining professional skepticism throughout the audit reduces the risk of using inappropriate assumptions in determining the nature, timing, and extent of the audit procedures and evaluating the results thereof.' },
        { label: 'C', text: 'Professional skepticism is necessary to the critical assessment of audit evidence.' },
        { label: 'D', text: 'Professional skepticism is an attitude that includes questioning contradictory audit evidence obtained.' }
      ],
      ans: 'A',
      explanation: 'A belief that management is honest does NOT relieve the auditor of the need to maintain professional skepticism.'
    },
    {
      id: 'AT10001_Q43',
      n: 43,
      stem: 'An audit which determines whether organizational policies are being followed and whether external mandates are being met is known as',
      opts: [
        { label: 'A', text: 'a financial audit.' },
        { label: 'B', text: 'a compliance audit.' },
        { label: 'C', text: 'an operational audit.' },
        { label: 'D', text: 'none of the above' }
      ],
      ans: 'B',
      explanation: 'A compliance audit determines whether the entity has complied with laws, policies, and regulations.'
    },
    {
      id: 'AT10001_Q44',
      n: 44,
      stem: 'Operational audits generally have been conducted by internal and COA auditors, but may be performed by certified public accountants. A primary purpose of an operational audit is to provide',
      opts: [
        { label: 'A', text: 'A measure of management performance in meeting organizational goals.' },
        { label: 'B', text: 'The results of internal examinations of financial and accounting matters to a company’s top-level management.' },
        { label: 'C', text: 'Aid to the independent auditor, who is conducting the examination of the financial statements.' },
        { label: 'D', text: 'A means of assurance that internal accounting controls are functioning as planned.' }
      ],
      ans: 'A',
      explanation: 'Operational audit assesses the efficiency, effectiveness, and economy of operations and performance in meeting goals.'
    },
    {
      id: 'AT10001_Q45',
      n: 45,
      stem: 'Operational auditing is primarily oriented toward',
      opts: [
        { label: 'A', text: 'Future improvements to accomplish the goals of management.' },
        { label: 'B', text: 'The accuracy of data reflected in management’s financial records.' },
        { label: 'C', text: 'The verification that a company’s financial statements are fairly presented.' },
        { label: 'D', text: 'Past protection provided by existing internal control.' }
      ],
      ans: 'A',
      explanation: 'Operational auditing is future-oriented, aiming to improve operations and management efficiency.'
    },
    {
      id: 'AT10001_Q46',
      n: 46,
      stem: 'An objective of a performance audit is to determine whether an entity’s',
      opts: [
        { label: 'A', text: 'Operational information is in accordance with government auditing standards.' },
        { label: 'B', text: 'Specific operating units are functioning economically and efficiently.' },
        { label: 'C', text: 'Financial statements present fairly the results of operations.' },
        { label: 'D', text: 'Internal control is adequately operating as designed.' }
      ],
      ans: 'B',
      explanation: 'Performance audits determine whether operating units are functioning economically and efficiently.'
    },
    {
      id: 'AT10001_Q47',
      n: 47,
      stem: 'Governmental auditing often extends beyond examinations leading to the expression of opinion on the fairness of financial presentation and includes audits of efficiency, economy, effectiveness, and also',
      opts: [
        { label: 'A', text: 'Accuracy.' },
        { label: 'B', text: 'Evaluation.' },
        { label: 'C', text: 'Compliance.' },
        { label: 'D', text: 'Internal control.' }
      ],
      ans: 'C',
      explanation: 'Comprehensive government auditing encompasses financial, operational (3Es: economy, efficiency, effectiveness), and compliance audits.'
    },
    {
      id: 'AT10001_Q48',
      n: 48,
      stem: 'What is the proper organizational role of internal auditing?',
      opts: [
        { label: 'A', text: 'To serve as an independent, objective assurance and consulting activity that adds value to operations.' },
        { label: 'B', text: 'To assist the external auditor in order to reduce external audit fees.' },
        { label: 'C', text: 'To perform studies to assist in the attainment of more efficient operations.' },
        { label: 'D', text: 'To serve as the investigative arm of the audit committee of the board of directors.' }
      ],
      ans: 'A',
      explanation: 'Internal auditing is an independent, objective assurance and consulting activity designed to add value and improve operations.'
    },
    {
      id: 'AT10001_Q49',
      n: 49,
      stem: 'In general, internal auditors’ independence will be greatest when they report directly to the',
      opts: [
        { label: 'A', text: 'Financial vice-president.' },
        { label: 'B', text: 'Corporate stockholders.' },
        { label: 'C', text: 'Corporate controller.' },
        { label: 'D', text: 'Audit committee of the board of directors.' }
      ],
      ans: 'D',
      explanation: 'Reporting functionally to the audit committee of the board of directors provides the highest independence for internal auditors.'
    },
    {
      id: 'AT10001_Q50',
      n: 50,
      stem: 'Internal auditors review the adequacy of the company’s internal control system primarily to',
      opts: [
        { label: 'A', text: 'Help determine the nature, timing, and extent of tests necessary to achieve audit objectives.' },
        { label: 'B', text: 'Determine whether the internal control system provides reasonable assurance that the company’s objectives and goals are met efficiently and economically.' },
        { label: 'C', text: 'Ensure that material weaknesses in the system of internal control are corrected.' },
        { label: 'D', text: 'Determine whether the internal control system ensures that financial statements are fairly presented.' }
      ],
      ans: 'B',
      explanation: 'Internal auditors evaluate controls to determine whether they provide reasonable assurance that organizational goals are met efficiently and economically.'
    },
    {
      id: 'AT10001_Q51',
      n: 51,
      stem: 'A practitioner is associated with financial information when\nI. The practitioner attaches a report to that financial information.\nII. The practitioner consents to the use of his/her name in a professional connection.',
      opts: [
        { label: 'A', text: 'I only' },
        { label: 'B', text: 'II only' },
        { label: 'C', text: 'Either I or II' },
        { label: 'D', text: 'Neither I nor II' }
      ],
      ans: 'C',
      explanation: 'Under professional standards, association occurs when the practitioner attaches a report or consents to the use of their name.'
    },
    {
      id: 'AT10001_Q52',
      n: 52,
      stem: 'Which of the following attributes is more closely associated with attestation services performed by a CPA firm than with other lines of professional work?',
      opts: [
        { label: 'A', text: 'Competence.' },
        { label: 'B', text: 'Integrity.' },
        { label: 'C', text: 'Keeping informed on current professional developments.' },
        { label: 'D', text: 'Independence.' }
      ],
      ans: 'D',
      explanation: 'Independence is the hallmark attribute unique and essential to attestation/assurance services.'
    },
    {
      id: 'AT10001_Q53',
      n: 53,
      stem: 'Which of the following procedures is not included in a review engagement of an entity?',
      opts: [
        { label: 'A', text: 'Inquiries of management' },
        { label: 'B', text: 'Inquiries regarding significant events subsequent to the balance sheet date' },
        { label: 'C', text: 'Any procedures designed to identify relationships among data that appear to be unusual' },
        { label: 'D', text: 'A study and evaluation of internal control' }
      ],
      ans: 'D',
      explanation: 'A review consists primarily of inquiry and analytical procedures; study/evaluation of internal control is not ordinarily performed.'
    },
    {
      id: 'AT10001_Q54',
      n: 54,
      stem: 'When performing a compilation engagement, the accountant is required to',
      opts: [
        { label: 'A', text: 'Assess internal controls.' },
        { label: 'B', text: 'Make inquiries of management to assess the reliability and completeness of the information provided.' },
        { label: 'C', text: 'Verify matters and explanations.' },
        { label: 'D', text: 'Obtain a general knowledge of the business and operations of the entity.' }
      ],
      ans: 'D',
      explanation: 'In a compilation, the accountant is required to obtain general knowledge of the business and operations to compile the FS.'
    },
    {
      id: 'AT10001_Q55',
      n: 55,
      stem: 'A summary of findings rather than assurance is most likely to be included in a/an',
      opts: [
        { label: 'A', text: 'Agreed-upon procedures report.' },
        { label: 'B', text: 'Compilation report.' },
        { label: 'C', text: 'Examination report.' },
        { label: 'D', text: 'Review report.' }
      ],
      ans: 'A',
      explanation: 'Agreed-upon procedures engagements report on factual findings without expressing assurance.'
    },
    {
      id: 'AT10001_Q56',
      n: 56,
      stem: 'An engagement to perform agreed-upon procedures may involve the auditor in performing certain procedures concerning\nI. Individual items of financial data.\nII. A single financial statement.\nIII. A complete set of financial statements.',
      opts: [
        { label: 'A', text: 'I and II only' },
        { label: 'B', text: 'II and III only' },
        { label: 'C', text: 'I and III only' },
        { label: 'D', text: 'I, II, and III' }
      ],
      ans: 'D',
      explanation: 'AUP may be performed on individual items, single financial statements, or complete sets.'
    },
    {
      id: 'AT10001_Q57',
      n: 57,
      stem: 'Which of the following statements concerning consulting services is false?',
      opts: [
        { label: 'A', text: 'The performance of consulting services for audit clients does not, in and of itself, impair the auditor’s independence.' },
        { label: 'B', text: 'Consulting services differ fundamentally from the CPA’s function of attesting to the assertions of other parties.' },
        { label: 'C', text: 'Consulting services ordinarily involve external reporting.' },
        { label: 'D', text: 'Most CPAs, including those who provide audit and tax services, also provide consulting services to their clients.' }
      ],
      ans: 'C',
      explanation: 'Consulting services ordinarily involve internal reporting for management use, not external reporting.'
    },
    {
      id: 'AT10001_Q58',
      n: 58,
      stem: 'The risk associated with a company\'s survival and profitability is referred to as:',
      opts: [
        { label: 'A', text: 'Business Risk' },
        { label: 'B', text: 'Information Risk' },
        { label: 'C', text: 'Detection Risk' },
        { label: 'D', text: 'Control Risk' }
      ],
      ans: 'A',
      explanation: 'Business risk is the risk associated with a company\'s survival and profitability.'
    },
    {
      id: 'AT10001_Q59',
      n: 59,
      stem: 'Financial statement audits:',
      opts: [
        { label: 'A', text: 'reduce the cost of capital' },
        { label: 'B', text: 'report on compliance with laws and regulations' },
        { label: 'C', text: 'assess management’s efficiency' },
        { label: 'D', text: 'overlook information risk' }
      ],
      ans: 'A',
      explanation: 'By reducing information risk for lenders and investors, financial statement audits reduce the company\'s cost of capital.'
    },
    {
      id: 'AT10001_Q60',
      n: 60,
      stem: 'After an audit, the financial statements are the responsibility of the _______________.',
      opts: [
        { label: 'A', text: 'independent auditor' },
        { label: 'B', text: 'management of the reporting entity' },
        { label: 'C', text: 'engagement partner' },
        { label: 'D', text: 'audit firm' }
      ],
      ans: 'B',
      explanation: 'The financial statements remain the primary responsibility of the management of the reporting entity.'
    }
  ]
};
