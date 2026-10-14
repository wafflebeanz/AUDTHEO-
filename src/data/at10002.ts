import { ModuleData } from './types';

export const at10002: ModuleData = {
  id: 'AT-10002',
  code: 'AT-10002',
  title: 'Quality Management (PSQM 1, PSQM 2, PSA 220 Revised)',
  standards: 'PSQM 1, PSQM 2, PSA 220 (Revised)',
  questionCount: 35,
  summary: 'System of Quality Management (SOQM), 8 Components of PSQM 1, Risk Assessment Process, Governance & Leadership, Relevant Ethical Requirements, Acceptance and Continuance, Engagement Performance, Resources (Human, Tech, Intellectual), Info & Comm, Monitoring and Remediation, PSQM 2 Engagement Quality Reviews (EQR), and PSA 220 (Revised) Engagement Partner responsibilities.',
  lectureOutline: `### PHILIPPINE STANDARD ON QUALITY MANAGEMENT 1 (PSQM 1)
*Quality Management for Firms that Perform Audits or Reviews of Financial Statements, or Other Assurance or Related Services Engagements*

#### Objective of the Firm
To design, implement and operate a system of quality management that provides the firm with reasonable assurance that:
1. The firm and its personnel fulfill their responsibilities in accordance with professional standards and applicable legal and regulatory requirements, and conduct engagements in accordance with such standards; and
2. Engagement reports issued by the firm or engagement partners are appropriate in the circumstances.

#### Eight Components of a System of Quality Management
1. **The firm’s risk assessment process:** Establish quality objectives, identify and assess quality risks, and design/implement responses.
2. **Governance and leadership:** Tone at the top, commitment to quality, accountability, resource planning.
3. **Relevant ethical requirements:** Integrity, objectivity, professional competence and due care, confidentiality, professional behavior, independence (annual written confirmation).
4. **Acceptance and continuance of client relationships and specific engagements:** Client integrity, firm's competence, capabilities, time, and resources.
5. **Engagement performance:** Direction, supervision, review, consultation on difficult/contentious matters, resolution of differences of opinion, assembly of final engagement file (ordinarily **not more than 60 days** after engagement report date).
6. **Resources:** Human resources (competence, capabilities), technological resources, intellectual resources, and service providers.
7. **Information and communication:** Effective two-way communication within the firm and with engagement teams and external parties.
8. **Monitoring and remediation process:** Ongoing monitoring activities, periodic inspection of completed engagements, identification of deficiencies, and timely remediation.

#### Evaluating the System of Quality Management
- Undertaken as of a point in time, and performed **at least annually** by the individual(s) assigned ultimate responsibility and accountability.

---

### PHILIPPINE STANDARD ON QUALITY MANAGEMENT 2 (PSQM 2)
*Engagement Quality Reviews*

- **Engagement Quality Review (EQR):** An objective evaluation of significant judgments made by the engagement team and conclusions reached thereon, performed by the engagement quality reviewer and completed **on or before the date of the engagement report**.
- **Mandatory EQR for:**
  1. Audits of financial statements of **listed entities**;
  2. Engagements required by law or regulation to have an EQR;
  3. Engagements identified by the firm as addressing quality risks.
- **Eligibility of EQR Reviewer:** Must NOT be a member of the engagement team; possesses competence, authority, sufficient time, complies with ethics.
- **Report Dating Rule:** The engagement partner shall NOT date the auditor's report until the completion of the engagement quality review.

---

### PSA 220 (REVISED)
*Quality Management for an Audit of Financial Statements*
- The **engagement partner** remains ultimately responsible, and therefore accountable, for compliance with the requirements of this PSA and managing quality on the audit engagement.
- Responsibilities include: leadership, ethical compliance, client acceptance/continuance, assigning competent engagement teams/resources, directing, supervising, reviewing audit documentation, consultation, cooperation with the engagement quality reviewer, and monitoring.`,
  items: [
    {
      id: 'AT10002_Q1',
      n: 1,
      stem: 'A firm should establish and maintain a system of quality management to provide it with reasonable assurance that:\nI. The firm and its personnel comply with professional standards and applicable legal and regulatory requirements.\nII. Reports issued by the firm or engagement partners are appropriate in the circumstances.',
      opts: [
        { label: 'A', text: 'I only' },
        { label: 'B', text: 'II only' },
        { label: 'C', text: 'Both I and II' },
        { label: 'D', text: 'Neither I nor II' }
      ],
      ans: 'C',
      explanation: 'PSQM 1 states that the objective of the firm is to obtain reasonable assurance regarding both compliance with professional standards/laws and appropriateness of reports issued.'
    },
    {
      id: 'AT10002_Q2',
      n: 2,
      stem: 'PSQM 1 applies to all firms that perform:',
      opts: [
        { label: 'A', text: 'Audits of financial statements only.' },
        { label: 'B', text: 'Reviews of financial statements only.' },
        { label: 'C', text: 'Other assurance or related services engagements only.' },
        { label: 'D', text: 'Audits or reviews of financial statements, or other assurance or related services engagements.' }
      ],
      ans: 'D',
      explanation: 'PSQM 1 applies to firms performing audits, reviews, other assurance, or related services engagements.'
    },
    {
      id: 'AT10002_Q3',
      n: 3,
      stem: 'PSQM 1 requires CPA firms to apply a risk-based approach in designing, implementing and operating the components of the system of quality management. This approach is embedded in the requirements of PSQM 1 through:',
      opts: [
        { label: 'A', text: 'Establishing quality objectives.' },
        { label: 'B', text: 'Identifying and assessing risks to the achievement of the quality objectives.' },
        { label: 'C', text: 'Designing and implementing responses to address the quality risks.' },
        { label: 'D', text: 'All of the above.' }
      ],
      ans: 'D',
      explanation: 'The risk-based approach requires establishing objectives, assessing quality risks, and designing responses.'
    },
    {
      id: 'AT10002_Q4',
      n: 4,
      stem: 'The firm’s system of quality management should include policies and procedures that address each of the following components, except',
      opts: [
        { label: 'A', text: 'Monitoring' },
        { label: 'B', text: 'Control environment' },
        { label: 'C', text: 'Relevant ethical requirements' },
        { label: 'D', text: 'Human resources' }
      ],
      ans: 'B',
      explanation: 'Control environment is an internal control component of an entity (PSA 315), not one of the 8 components of PSQM 1 (which uses "Governance and leadership").'
    },
    {
      id: 'AT10002_Q5',
      n: 5,
      stem: 'Which of the following is a component of a CPA firm’s quality management system that should be considered in establishing its quality management policies and procedures?',
      opts: [
        { label: 'A', text: 'Considering audit risk and materiality.' },
        { label: 'B', text: 'Managing resources.' },
        { label: 'C', text: 'Using statistical sampling techniques.' },
        { label: 'D', text: 'Complying with laws and regulations.' }
      ],
      ans: 'B',
      explanation: 'Resources (Human, Technological, Intellectual) is an explicit component of a system of quality management.'
    },
    {
      id: 'AT10002_Q6',
      n: 6,
      stem: 'Which of the following are components of a CPA firm’s system of quality management that should be considered in establishing its quality management policies and procedures?\nEthical Requirements | Resources | Engagement Performance',
      opts: [
        { label: 'A', text: 'No | Yes | No' },
        { label: 'B', text: 'Yes | No | No' },
        { label: 'C', text: 'Yes | Yes | Yes' },
        { label: 'D', text: 'No | No | Yes' }
      ],
      ans: 'C',
      explanation: 'All three (Ethical requirements, Resources, Engagement performance) are components of PSQM 1.'
    },
    {
      id: 'AT10002_Q7',
      n: 7,
      stem: 'Which of the following quality management components is most closely associated with the requirement to promote a culture of quality?',
      opts: [
        { label: 'A', text: 'Monitoring and remediation' },
        { label: 'B', text: 'Governance and leadership' },
        { label: 'C', text: 'Engagement performance' },
        { label: 'D', text: 'Resources' }
      ],
      ans: 'B',
      explanation: 'Governance and leadership establishes the environment and tone supporting a culture of quality.'
    },
    {
      id: 'AT10002_Q8',
      n: 8,
      stem: 'In pursuing a firm’s quality management objectives, a firm should adopt policies and procedures to enable it to identify and evaluate circumstances and relationships that create threats to independence, and to take appropriate action to eliminate those threats or reduce them to an acceptable level by applying safeguards, or, if considered appropriate, to withdraw from the engagement. Which quality management component would this be most likely to satisfy?',
      opts: [
        { label: 'A', text: 'Ethical requirements' },
        { label: 'B', text: 'Monitoring and remediation' },
        { label: 'C', text: 'Resources' },
        { label: 'D', text: 'Governance and leadership' }
      ],
      ans: 'A',
      explanation: 'Identifying and evaluating threats to independence satisfies the Relevant Ethical Requirements component.'
    },
    {
      id: 'AT10002_Q9',
      n: 9,
      stem: 'The statement, “Quality management policies and procedures should be relevant, adequate, effective, and complied with.” is most closely associated with what quality management component?',
      opts: [
        { label: 'A', text: 'Engagement performance' },
        { label: 'B', text: 'Governance and leadership' },
        { label: 'C', text: 'Monitoring and remediation' },
        { label: 'D', text: 'Relevant ethical requirements' }
      ],
      ans: 'C',
      explanation: 'Monitoring and remediation evaluates whether policies are relevant, adequate, and operating effectively.'
    },
    {
      id: 'AT10002_Q10',
      n: 10,
      stem: 'This quality control component requires a firm to establish policies and procedures to provide it with reasonable assurance that engagements are performed in accordance with professional standards and regulatory and legal requirements, and that the firm or the engagement partner issue reports that are appropriate in the circumstances.',
      opts: [
        { label: 'A', text: 'Ethical requirements' },
        { label: 'B', text: 'Engagement performance' },
        { label: 'C', text: 'Monitoring' },
        { label: 'D', text: 'Human resources' }
      ],
      ans: 'B',
      explanation: 'Engagement Performance addresses direction, supervision, review, and issuing appropriate reports.'
    },
    {
      id: 'AT10002_Q11',
      n: 11,
      stem: 'In pursuing a CPA firm’s quality management objectives, a CPA firm may maintain records indicating which partners or staff of the CPA firm were previously employed by the CPA firm’s clients. Which quality management component is this procedure most likely to satisfy?',
      opts: [
        { label: 'A', text: 'Supervision.' },
        { label: 'B', text: 'Professional relationship.' },
        { label: 'C', text: 'Experience requirements.' },
        { label: 'D', text: 'Relevant ethical requirements.' }
      ],
      ans: 'D',
      explanation: 'Tracking former employment of staff at clients guards against familiarity or self-review threats to independence under ethical requirements.'
    },
    {
      id: 'AT10002_Q12',
      n: 12,
      stem: 'The partner or other individual, appointed by the firm, who is responsible for the engagement and its performance, and for the report that is issued on behalf of the firm is the _________.',
      opts: [
        { label: 'A', text: 'Engagement partner.' },
        { label: 'B', text: 'Engagement quality reviewer.' },
        { label: 'C', text: 'Team leader.' },
        { label: 'D', text: 'Managing partner.' }
      ],
      ans: 'A',
      explanation: 'This is the definition of the Engagement Partner.'
    },
    {
      id: 'AT10002_Q13',
      n: 13,
      stem: 'The firm shall establish policies and procedures designed to provide it with reasonable assurance that the firm and its personnel comply with relevant ethical requirements. The Code of Ethics for Professional Accountants in the Philippines establishes the fundamental principles of professional ethics which include the following, except',
      opts: [
        { label: 'A', text: 'Integrity' },
        { label: 'B', text: 'Objectivity' },
        { label: 'C', text: 'Relevance' },
        { label: 'D', text: 'Professional behavior' }
      ],
      ans: 'C',
      explanation: 'The 5 fundamental principles are Integrity, Objectivity, Professional Competence and Due Care, Confidentiality, and Professional Behavior. "Relevance" is a criteria characteristic, not a fundamental principle.'
    },
    {
      id: 'AT10002_Q14',
      n: 14,
      stem: 'A CPA establishes quality management policies and procedures for deciding whether to accept a new client or continue to perform services to a current client. One purpose for establishing such policies and procedures is',
      opts: [
        { label: 'A', text: 'To enable the auditor to attest to the reliability of the client.' },
        { label: 'B', text: 'To satisfy the CPA firm’s duty to the public concerning the acceptance of new clients.' },
        { label: 'C', text: 'To provide reasonable assurance that the integrity of the client is considered.' },
        { label: 'D', text: 'To anticipate before performing any field work whether an unmodified opinion can be expressed.' }
      ],
      ans: 'C',
      explanation: 'Acceptance and continuance policies ensure the firm considers client integrity and firm capabilities before taking on or retaining engagements.'
    },
    {
      id: 'AT10002_Q15',
      n: 15,
      stem: 'The firm’s ______________ sets out the process the firm is required to follow in implementing a risk-based approach across the system of quality management.',
      opts: [
        { label: 'A', text: 'Governance and leadership.' },
        { label: 'B', text: 'Information and communication.' },
        { label: 'C', text: 'Risk assessment process.' },
        { label: 'D', text: 'Monitoring and remediation process.' }
      ],
      ans: 'C',
      explanation: 'The firm\'s risk assessment process sets out how the risk-based approach is applied.'
    },
    {
      id: 'AT10002_Q16',
      n: 16,
      stem: 'A ___________ is a risk that has a reasonable possibility of occurring and individually, or in combination with other risks, adversely affecting the achievement of one or more quality objectives.',
      opts: [
        { label: 'A', text: 'Quality risk.' },
        { label: 'B', text: 'Business risk.' },
        { label: 'C', text: 'Information risk.' },
        { label: 'D', text: 'Deficiency.' }
      ],
      ans: 'A',
      explanation: 'This is the exact definition of a "Quality risk" under PSQM 1.'
    },
    {
      id: 'AT10002_Q17',
      n: 17,
      stem: '____________ are the desired outcomes in relation to the components of the system of quality management to be achieved by the firm.',
      opts: [
        { label: 'A', text: 'Quality risks.' },
        { label: 'B', text: 'Deficiencies.' },
        { label: 'C', text: 'Quality objectives.' },
        { label: 'D', text: 'Quality procedures.' }
      ],
      ans: 'C',
      explanation: 'Quality objectives are the desired outcomes to be achieved by the firm.'
    },
    {
      id: 'AT10002_Q18',
      n: 18,
      stem: 'In connection with the human resources component, a CPA firm’s system of quality management should ordinarily provide that all personnel',
      opts: [
        { label: 'A', text: 'Participate in professional development activities that enable them to fulfill responsibilities assigned.' },
        { label: 'B', text: 'Possess judgment, motivation, and adequate experience.' },
        { label: 'C', text: 'Seek assistance from persons having appropriate levels of knowledge, judgment, and authority.' },
        { label: 'D', text: 'Demonstrate compliance with independence policies.' }
      ],
      ans: 'A',
      explanation: 'Human resources policies provide that personnel participate in continuing professional development.'
    },
    {
      id: 'AT10002_Q19',
      n: 19,
      stem: 'In pursuing its quality management objective with respect to assigning personnel to engagements, a CPA firm may use policies and procedures such as',
      opts: [
        { label: 'A', text: 'Rotating employees from assignment to assignment on a random basis to aid in the staff training effort.' },
        { label: 'B', text: 'Requiring timely identification of the staffing requirements of specific engagements so that enough qualified personnel can be made available.' },
        { label: 'C', text: 'Allowing staff to select the assignments of their choice to promote better client relationships.' },
        { label: 'D', text: 'Assigning a number of employees to each engagement in excess of the number required so as not to overburden the staff and interfere with the quality of the audit work performed.' }
      ],
      ans: 'B',
      explanation: 'Timely identification of staffing needs ensures appropriate competence and capabilities are assigned to engagements.'
    },
    {
      id: 'AT10002_Q20',
      n: 20,
      stem: 'A requirement that working papers be reviewed by the senior auditor, and any deficiencies be discussed with the preparer is an example of a quality management procedure in the area of',
      opts: [
        { label: 'A', text: 'Engagement performance.' },
        { label: 'B', text: 'Monitoring.' },
        { label: 'C', text: 'Human resources.' },
        { label: 'D', text: 'Leadership responsibility for quality within the firm.' }
      ],
      ans: 'A',
      explanation: 'Review of working papers is a core element of Engagement Performance (supervision and review).'
    },
    {
      id: 'AT10002_Q21',
      n: 21,
      stem: 'The engagement partner should take responsibility for the direction, supervision, and performance of the audit engagement in compliance with professional standards and regulatory and legal requirements, and for the auditor’s report that is issued to be appropriate in the circumstances. Supervision includes the following, except',
      opts: [
        { label: 'A', text: 'Tracking the progress of the audit engagement.' },
        { label: 'B', text: 'Addressing significant issues arising during the audit engagement, considering their significance, and modifying the planned approach appropriately.' },
        { label: 'C', text: 'Informing the members of the engagement team of their responsibilities.' },
        { label: 'D', text: 'Identifying matters for consultation or consideration by more experienced engagement team members during the audit engagement.' }
      ],
      ans: 'C',
      explanation: 'Informing team members of their responsibilities is part of "Direction", whereas A, B, and D are aspects of "Supervision".'
    },
    {
      id: 'AT10002_Q22',
      n: 22,
      stem: 'For audits of financial statements of listed entities, the engagement partner should not issue the auditor’s report until the completion of the',
      opts: [
        { label: 'A', text: 'Management Review' },
        { label: 'B', text: 'Engagement Team Review' },
        { label: 'C', text: 'Engagement Partner Review' },
        { label: 'D', text: 'Engagement Quality Review' }
      ],
      ans: 'D',
      explanation: 'Under PSQM 2 and PSA 220, the auditor\'s report cannot be dated or issued until the Engagement Quality Review is completed.'
    },
    {
      id: 'AT10002_Q23',
      n: 23,
      stem: 'A process comprising an ongoing consideration and evaluation of the firm’s system of quality management including a periodic inspection of a selection of completed engagements designed to provide the firm with reasonable assurance that its system of quality management is operating effectively refers to what quality management element?',
      opts: [
        { label: 'A', text: 'Internal control.' },
        { label: 'B', text: 'Acceptance and continuance of client relationships and specific engagements.' },
        { label: 'C', text: 'Monitoring.' },
        { label: 'D', text: 'Human resources.' }
      ],
      ans: 'C',
      explanation: 'Ongoing consideration, evaluation, and periodic inspection of completed engagements constitutes Monitoring.'
    },
    {
      id: 'AT10002_Q24',
      n: 24,
      stem: 'Which component of a system of quality management is addressed by the establishment of policies and procedures designed to provide the firm with reasonable assurance that it has sufficient personnel with the competence, capabilities, and commitment to ethical principles?',
      opts: [
        { label: 'A', text: 'Information and communication' },
        { label: 'B', text: 'Governance and leadership' },
        { label: 'C', text: 'Human resources' },
        { label: 'D', text: 'Engagement performance' }
      ],
      ans: 'C',
      explanation: 'Assuring sufficient personnel with competence and ethical commitment falls under Human Resources.'
    },
    {
      id: 'AT10002_Q25',
      n: 25,
      stem: 'The following are essential components of a system of quality management except',
      opts: [
        { label: 'A', text: 'Policies and procedures that ensure that monitoring activities are effectively applied.' },
        { label: 'B', text: 'Policies and procedures to ensure that firm personnel are actively engaged in marketing strategies.' },
        { label: 'C', text: 'Policies and procedures to ensure that the work performed by firm personnel meet applicable professional standards.' },
        { label: 'D', text: 'Policies to ensure that personnel maintain their independence when performing assurance services.' }
      ],
      ans: 'B',
      explanation: 'Marketing strategies are not a component of quality management; in fact, commercial considerations must not override audit quality.'
    },
    {
      id: 'AT10002_Q26',
      n: 26,
      stem: 'An audit firm should implement quality management policies and procedures designed to ensure that all audits are conducted in accordance with PSAs or relevant national standards or practices. These policies and procedures should be implemented',
      opts: [
        { label: 'A', text: 'At the audit firm level only.' },
        { label: 'B', text: 'On individual audits only.' },
        { label: 'C', text: 'Either at the audit firm level or on individual audits.' },
        { label: 'D', text: 'Both at the audit firm level and on individual audits.' }
      ],
      ans: 'D',
      explanation: 'Quality management operates at both the firm level (PSQM 1) and on individual engagements (PSA 220).'
    },
    {
      id: 'AT10002_Q27',
      n: 27,
      stem: 'Who should take responsibility for the overall quality on each audit engagement?',
      opts: [
        { label: 'A', text: 'Engagement partner' },
        { label: 'B', text: 'Engagement team' },
        { label: 'C', text: 'CPA firm' },
        { label: 'D', text: 'Engagement quality reviewer' }
      ],
      ans: 'A',
      explanation: 'Under PSA 220, the engagement partner takes overall responsibility for quality on each audit engagement.'
    },
    {
      id: 'AT10002_Q28',
      n: 28,
      stem: 'The engagement partner should be satisfied that appropriate procedures regarding the acceptance and continuance of client relationships and specific audit engagements have been followed, and that conclusions reached in this regard are appropriate and have been documented. Acceptance and continuance of client relationships and specific audit engagements include considering:\nI. The integrity of the principal owners, key management, and those charged with governance of the entity.\nII. Whether the engagement team is competent to perform the audit engagement and has the necessary time and resources.\nIII. Whether the firm and the engagement team can comply with ethical requirements.',
      opts: [
        { label: 'A', text: 'I only' },
        { label: 'B', text: 'I and II only' },
        { label: 'C', text: 'II and III only' },
        { label: 'D', text: 'I, II, and III' }
      ],
      ans: 'D',
      explanation: 'Acceptance/continuance requires considering client integrity, team competence/resources, and ethical compliance.'
    },
    {
      id: 'AT10002_Q29',
      n: 29,
      stem: 'For audits of financial statements of listed entities, the engagement partner should\nA. Determine that an engagement quality reviewer has been appointed.\nB. Discuss significant matters arising during the audit engagement, including those identified during the engagement quality review, with the engagement quality reviewer.\nC. Not issue the auditor’s report until the completion of the engagement quality review.\nD. All of the above',
      opts: [
        { label: 'A', text: 'Determine that an engagement quality reviewer has been appointed.' },
        { label: 'B', text: 'Discuss significant matters arising during the audit engagement, including those identified during the engagement quality review, with the engagement quality reviewer.' },
        { label: 'C', text: 'Not issue the auditor’s report until the completion of the engagement quality review.' },
        { label: 'D', text: 'All of the above' }
      ],
      ans: 'D',
      explanation: 'All of the listed duties are required of the engagement partner when an EQR is conducted.'
    },
    {
      id: 'AT10002_Q30',
      n: 30,
      stem: 'Typically, an external auditor first gets supervisory experience at what level of authority?',
      opts: [
        { label: 'A', text: 'Senior.' },
        { label: 'B', text: 'Supervisor.' },
        { label: 'C', text: 'Manager' },
        { label: 'D', text: 'Partner' }
      ],
      ans: 'A',
      explanation: 'External auditors typically first gain supervisory experience as a Senior auditor overseeing assistants.'
    },
    {
      id: 'AT10002_Q31',
      n: 31,
      stem: 'The audit work performed by each assistant should be reviewed by personnel of at least equal competence to determine whether it was adequately performed and to evaluate whether the',
      opts: [
        { label: 'A', text: 'Firm’s system of quality management has been maintained at a high level.' },
        { label: 'B', text: 'Work performed and the results obtained have been adequately documented.' },
        { label: 'C', text: 'Audit procedures performed are approved in the professional standards.' },
        { label: 'D', text: 'Audit procedures performed are in accordance with Philippine Standards on Auditing (PSAs).' }
      ],
      ans: 'D',
      explanation: 'Work is reviewed to evaluate whether procedures performed and evidence obtained are in accordance with PSAs.'
    },
    {
      id: 'AT10002_Q32',
      n: 32,
      stem: 'Which of the following quality objectives addresses the engagement performance component of a system of quality management?',
      opts: [
        { label: 'A', text: 'Consultation on difficult or contentious matters is undertaken and the conclusions agreed are implemented.' },
        { label: 'B', text: 'Personnel are hired, developed and retained and have the competence and capabilities to consistently perform quality engagements.' },
        { label: 'C', text: 'Appropriate technological resources are obtained or developed, implemented, maintained, and used, to enable the operation of the firm’s system of quality management and the performance of engagements.' },
        { label: 'D', text: 'The culture of the firm recognizes and reinforces the responsibility of personnel to exchange information with the firm and with one another.' }
      ],
      ans: 'A',
      explanation: 'Consultation on difficult/contentious matters is an explicit objective under Engagement Performance.'
    },
    {
      id: 'AT10002_Q33',
      n: 33,
      stem: 'A firm’s system of quality management should ordinarily provide for the maintenance of',
      opts: [
        { label: 'A', text: 'A file of minutes of staff meetings.' },
        { label: 'B', text: 'Updated personnel files.' },
        { label: 'C', text: 'Documentation of its system of quality management that is sufficient to support a consistent understanding of the system of quality management by personnel.' },
        { label: 'D', text: 'Documentation to demonstrate compliance with regulatory requirements.' }
      ],
      ans: 'C',
      explanation: 'PSQM 1 requires documentation sufficient to support a consistent understanding and operation of the SOQM by personnel.'
    },
    {
      id: 'AT10002_Q34',
      n: 34,
      stem: 'The firm shall obtain written confirmation of compliance with its policies and procedures on independence from all firm personnel required to be independent by relevant ethical requirements',
      opts: [
        { label: 'A', text: 'At least annually' },
        { label: 'B', text: 'At least monthly' },
        { label: 'C', text: 'At least semi-annually' },
        { label: 'D', text: 'At the completion of each engagement' }
      ],
      ans: 'A',
      explanation: 'Written confirmation of independence compliance must be obtained at least annually.'
    },
    {
      id: 'AT10002_Q35',
      n: 35,
      stem: 'Under PSQM 1, an appropriate time limit within which to complete the assembly of the final engagement file is ordinarily _______________ after the date of the engagement report.',
      opts: [
        { label: 'A', text: 'not more than 60 days' },
        { label: 'B', text: 'not more than 30 days' },
        { label: 'C', text: 'not more than 10 days' },
        { label: 'D', text: 'not more than 5 days.' }
      ],
      ans: 'A',
      explanation: 'Under PSQM 1 and PSA 230, the time limit for final assembly of the audit file is ordinarily not more than 60 days after the report date.'
    }
  ]
};
