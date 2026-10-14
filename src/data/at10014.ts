import { ModuleData } from './types';

export const at10014: ModuleData = {
  id: 'AT-10014',
  code: 'AT-10014',
  title: 'Philippine Accountancy Act of 2004 / IRR (RA 9298)',
  standards: 'RA 9298 and its Implementing Rules and Regulations (IRR)',
  questionCount: 26,
  summary: 'Scope of Accountancy Practice (Public Practice, Commerce & Industry, Academe, Government), Composition and Qualifications of Board of Accountancy (BOA), Term of Office, Licensure Examination, CPA Seal, Ownership of Working Papers, Penal Provisions, and Renewal of Registration.',
  lectureOutline: `### REPUBLIC ACT NO. 9298: PHILIPPINE ACCOUNTANCY ACT OF 2004
An act regulating the practice of accountancy in the Philippines, repealing PD 692.

#### Scope of Practice (4 Sectors)
1. **Practice of Public Accountancy:** Offering skilled accounting/audit services to more than one client on a fee basis.
2. **Practice in Commerce and Industry:** Involved in decision-making requiring professional knowledge in the science of accounting, or where position requires supervising financial records in companies with paid-up capital of at least **P5,000,000** and/or annual revenue of at least **P10,000,000**.
3. **Practice in Education / Academe:** Teaching accounting, auditing, management services, taxation, business law. Dean/chair must be a registered CPA.
4. **Practice in the Government:** Appointed to an accounting professional group in government where decision-making requires CPA knowledge.

---

### PROFESSIONAL REGULATORY BOARD OF ACCOUNTANCY (BOA)
- **Composition:** 1 Chairman and 6 Members (Total = 7), appointed by the President of the Philippines from a list of 3 rank-and-file nominees for each position submitted by the PRC from 5 nominees submitted by the Accredited National Professional Organization of CPAs (APO / PICPA).
- **Qualifications:** Natural-born citizen, resident of the Philippines, duly registered CPA with at least 10 years of work experience in any scope of practice of accountancy, good moral character, not convicted of crimes of moral turpitude, no direct/indirect pecuniary interest in review schools/universities, not an officer/director of APO at appointment.
- **Term of Office:** 3 years. No member shall serve more than 2 consecutive complete terms (must lapse 2 years before eligible for reappointment).
- **Ratings Submission:** BOA submits ratings to PRC within **10 calendar days** after examination.

---

### OWNERSHIP OF WORKING PAPERS & SEAL
- **Ownership:** All working papers prepared by a CPA remain the property of the CPA, unless a written agreement to the contrary exists. They are confidential and privileged.
- **CPA Seal:** Circular in form with smaller circle within. Engraved in the middle of the smaller circle are the letters **"CPA"**.`,
  items: [
    {
      id: 'AT10014_Q1',
      n: 1,
      stem: 'Republic Act 9298 is known as the',
      opts: [
        { label: 'A', text: 'Revised Accountancy Law.' },
        { label: 'B', text: 'Code of Ethics for Professional Accountants.' },
        { label: 'C', text: 'Philippine Accountancy Act of 2004.' },
        { label: 'D', text: 'Philippine Accountancy Law of 2004.' }
      ],
      ans: 'C',
      explanation: 'RA 9298 is titled the "Philippine Accountancy Act of 2004".'
    },
    {
      id: 'AT10014_Q2',
      n: 2,
      stem: 'Which of the following is not an objective of the Philippine Accountancy Act of 2004?',
      opts: [
        { label: 'A', text: 'The standardization and regulation of accounting education.' },
        { label: 'B', text: 'The examination for registration of certified public accountants.' },
        { label: 'C', text: 'The supervision, control, and regulation of the practice of accountancy in the Philippines.' },
        { label: 'D', text: 'The development and improvement of accounting standards that will be generally accepted in the Philippines.' }
      ],
      ans: 'D',
      explanation: 'Development of accounting standards is handled by the FRSC, not a direct statutory objective of RA 9298.'
    },
    {
      id: 'AT10014_Q3',
      n: 3,
      stem: 'The practice of Accountancy includes:\nI. Practice of Public Accountancy\nII. Practice in Commerce and Industry\nIII. Practice in Education/Academe\nIV. Practice in the Government',
      opts: [
        { label: 'A', text: 'I, II, and IV only' },
        { label: 'B', text: 'II, III, and IV only' },
        { label: 'C', text: 'I, II, and III only' },
        { label: 'D', text: 'I, II, III, and IV' }
      ],
      ans: 'D',
      explanation: 'Section 4 covers all four sectors of accountancy practice.'
    },
    {
      id: 'AT10014_Q4',
      n: 4,
      stem: 'A CPA is in public accounting practice when he/she',
      opts: [
        { label: 'A', text: 'Represents his/her employer before government agencies on tax and other matters related to accounting.' },
        { label: 'B', text: 'Represents his/her clients before government agencies on tax and other matters related to accounting.' },
        { label: 'C', text: 'Teaches accounting, auditing, management advisory services, accounting aspect of finance, business law, taxation, and other technically related subjects.' },
        { label: 'D', text: 'Holds, or is appointed to a position, in an accounting professional group in government or in a government-owned and/or controlled corporation where decision making requires professional knowledge in the science of accounting.' }
      ],
      ans: 'B',
      explanation: 'Serving "clients" on a fee basis distinguishes public practice from private employment.'
    },
    {
      id: 'AT10014_Q5',
      n: 5,
      stem: 'Section 4 of the Rules and Regulations Implementing RA 9298 (IRR) provides that any position in any business or company in the private sector which requires supervising the recording of financial transactions, preparation of financial statements, coordinating with the external auditors for the audit of such financial statements, and other related functions should be occupied by a duly registered CPA. It provides further that',
      opts: [
        { label: 'A', text: 'The business or company where such position exists has a paid-up capital of at least P5,000,000 and/or annual revenue of at least P10,000,000.' },
        { label: 'B', text: 'The business or company where such position exists has a paid-up capital of at least P10,000,000 and/or annual revenue of at least P5,000,000.' },
        { label: 'C', text: 'The section applies to all incumbents to the position.' },
        { label: 'D', text: 'The section applies only to persons to be employed after the effectivity of the Code of Ethics for Professional Accountants in the Philippines.' }
      ],
      ans: 'A',
      explanation: 'Paid-up capital must be at least P5,000,000 and/or annual revenue of at least P10,000,000.'
    },
    {
      id: 'AT10014_Q6',
      n: 6,
      stem: 'Section 5 of the Accountancy Act of 2004 states that the Board of Accountancy shall be composed of a Chairman and',
      opts: [
        { label: 'A', text: '2 members' },
        { label: 'B', text: '6 members' },
        { label: 'C', text: '7 members' },
        { label: 'D', text: '8 members' }
      ],
      ans: 'B',
      explanation: 'BOA is composed of 1 Chairman and 6 members (total of 7).'
    },
    {
      id: 'AT10014_Q7',
      n: 7,
      stem: 'The members of the Professional Regulatory Board of Accountancy shall be appointed by the',
      opts: [
        { label: 'A', text: 'Philippine Institute of CPAs (PICPA).' },
        { label: 'B', text: 'Professional Regulation Commission (PRC).' },
        { label: 'C', text: 'President of the Philippines.' },
        { label: 'D', text: 'Association of CPAs in Public Practice (ACPAPP).' }
      ],
      ans: 'C',
      explanation: 'Members are appointed by the President of the Philippines.'
    },
    {
      id: 'AT10014_Q8',
      n: 8,
      stem: 'Who has the power to suspend or remove any member of the Board of Accountancy?',
      opts: [
        { label: 'A', text: 'The Chairman of the FRSC' },
        { label: 'B', text: 'The Chairman of the PRC' },
        { label: 'C', text: 'The Chairman of the AASC' },
        { label: 'D', text: 'The President of the Philippines' }
      ],
      ans: 'D',
      explanation: 'The President of the Philippines upon recommendation of PRC has power of removal.'
    },
    {
      id: 'AT10014_Q9',
      n: 9,
      stem: 'The following statements relate to the submission of nominations to the Board of Accountancy. Which is correct?',
      opts: [
        { label: 'A', text: 'The Accredited National Professional Organization of CPAs (APO) shall submit its nominations to the president of the Philippines not later than sixty (60) days prior to the expiry of the term of an incumbent chairman or member.' },
        { label: 'B', text: 'The APO shall submit its nominations to the PRC not later than thirty (30) days prior to the expiry of the term of an incumbent chairman or member.' },
        { label: 'C', text: 'If the APO fails to submit its own nominee(s) to the PRC within the required period, the PRC in consultation with the Board of Accountancy shall submit to the president of the Philippines a list of five (5) nominees for each position.' },
        { label: 'D', text: 'There should be adequate documentation to show the qualifications and primary field of professional activity of each nominee.' }
      ],
      ans: 'D',
      explanation: 'Documentation showing qualifications and primary field of activity must accompany each nomination.'
    },
    {
      id: 'AT10014_Q10',
      n: 10,
      stem: 'The following statements relate to the qualifications of a member of the Board of Accountancy. Which is incorrect?',
      opts: [
        { label: 'A', text: 'He/she must be of good moral character and must not have been convicted of crimes involving moral turpitude.' },
        { label: 'B', text: 'He/she must be a duly registered CPA with at least ten (10) years of work experience in the practice of public accounting.' },
        { label: 'C', text: 'He/she must be a natural-born citizen and a resident of the Philippines.' },
        { label: 'D', text: 'He/she must not be a director or officer of the APO at the time of his/her appointment.' }
      ],
      ans: 'B',
      explanation: 'Experience must be in ANY field of accountancy, not restricted solely to public accounting.'
    },
    {
      id: 'AT10014_Q11',
      n: 11,
      stem: 'The following statements relate to the term of office of the chairman and members of the Board of Accountancy (BOA). Which is false?',
      opts: [
        { label: 'A', text: 'The Chairman and members of the BOA shall hold office for a term of three (3) years.' },
        { label: 'B', text: 'Any vacancy occurring within the term of a member shall be filled up for the unexpired portion of the term only.' },
        { label: 'C', text: 'No person who has served two successive complete terms as Chairman or member shall be eligible for reappointment until the lapse of two (2) years.' },
        { label: 'D', text: 'Appointment to fill up an unexpired term is not to be considered as a complete term.' }
      ],
      ans: 'C',
      explanation: 'Under RA 9298, no person who has served two successive complete terms shall be eligible for reappointment until the lapse of ONE (1) year (not 2 years).'
    },
    {
      id: 'AT10014_Q12',
      n: 12,
      stem: 'Which of the following is a function of the Board of Accountancy?\nI. To prescribe and adopt the rules and regulations necessary for carrying out the provisions of the Philippine Accountancy Act of 2004.\nII. To supervise the regulation, licensure, and practice of accountancy in the Philippines.\nIII. To issue, suspend, revoke, or reinstate the certificate of registration for the practice of the accountancy profession.',
      opts: [
        { label: 'A', text: 'I and II only' },
        { label: 'B', text: 'II and III only' },
        { label: 'C', text: 'I and III only' },
        { label: 'D', text: 'I, II, and III' }
      ],
      ans: 'D',
      explanation: 'All listed duties are core functions of the Board of Accountancy under RA 9298.'
    },
    {
      id: 'AT10014_Q13',
      n: 13,
      stem: 'The Board of Accountancy has the power to conduct an oversight into the quality of audits of financial statements through a review of the quality control measures instituted by auditors in order to ensure compliance with the accounting and auditing standards and practices. This power of the BOA is called',
      opts: [
        { label: 'A', text: 'Quality assurance review' },
        { label: 'B', text: 'Peer review' },
        { label: 'C', text: 'Appraisal' },
        { label: 'D', text: 'Quality control' }
      ],
      ans: 'A',
      explanation: 'This oversight function is officially known as Quality Assurance Review (QAR).'
    },
    {
      id: 'AT10014_Q14',
      n: 14,
      stem: 'The Board of Accountancy shall submit to the PRC the ratings obtained by each candidate within _____ days after the examination, unless extended for just cause.',
      opts: [
        { label: 'A', text: '10' },
        { label: 'B', text: '5' },
        { label: 'C', text: '3' },
        { label: 'D', text: '2' }
      ],
      ans: 'A',
      explanation: 'Section 19 specifies that ratings must be submitted within 10 calendar days.'
    },
    {
      id: 'AT10014_Q15',
      n: 15,
      stem: 'Which of the following shall be issued to examinees who pass the CPA licensure examination?',
      opts: [
        { label: 'A', text: 'Certificate of registration only.' },
        { label: 'B', text: 'Professional identification card only.' },
        { label: 'C', text: 'Certificate of registration and professional identification card.' },
        { label: 'D', text: 'Certificate of participation and professional identification card.' }
      ],
      ans: 'C',
      explanation: 'Successful examinees receive both a Certificate of Registration and a Professional Identification Card.'
    },
    {
      id: 'AT10014_Q16',
      n: 16,
      stem: 'Which of the following statements concerning the issuance of Certificates of Registration and Professional Identification Cards to successful examinees is correct?',
      opts: [
        { label: 'A', text: 'The Certificate of Registration issued to successful examinees is renewable every three (3) years.' },
        { label: 'B', text: 'The Professional Identification Card issued to successful examinees shall remain in full force and effect until withdrawn, suspended or revoked in accordance with RA 9298.' },
        { label: 'C', text: 'The BOA shall not register and issue a Certificate of Registration and Professional Identification Card to any successful examinee of unsound mind.' },
        { label: 'D', text: 'The BOA may, after the expiration of three (3) years from the date of revocation of a Certificate of Registration, reinstate the validity of a revoked Certificate of Registration.' }
      ],
      ans: 'C',
      explanation: 'The BOA shall not register any examinee convicted of moral turpitude or of unsound mind.'
    },
    {
      id: 'AT10014_Q17',
      n: 17,
      stem: 'Which of the following statements concerning ownership of working papers is incorrect?',
      opts: [
        { label: 'A', text: 'All working papers made by a CPA and his/her staff in the course of an examination remain the property of such CPA in the absence of a written agreement between the CPA and the client to the contrary.' },
        { label: 'B', text: 'Working papers include schedules and memoranda prepared and submitted by the client of the CPA.' },
        { label: 'C', text: 'Working papers include reports submitted by a CPA to his/her client.' },
        { label: 'D', text: 'Working papers shall be treated confidential and privileged unless such documents are required to be produced through subpoena issued by any court, tribunal, or government regulatory or administrative body.' }
      ],
      ans: 'C',
      explanation: 'Final audit reports delivered to the client are the property of the client, not part of working papers retained by CPA.'
    },
    {
      id: 'AT10014_Q18',
      n: 18,
      stem: 'Any person who shall violate any of the provisions of the Accountancy Act or any of its implementing rules and regulations promulgated by the Board of Accountancy subject to the approval of the PRC, shall, upon conviction, be punished by',
      opts: [
        { label: 'A', text: 'A fine of not more than P50,000.' },
        { label: 'B', text: 'Imprisonment for a period not exceeding two years.' },
        { label: 'C', text: 'A fine of not less than P50,000 or by imprisonment for a period not exceeding two years or both.' },
        { label: 'D', text: 'Lethal injection.' }
      ],
      ans: 'C',
      explanation: 'Penal sanctions under Sec. 36 are fine of not less than P50,000 or imprisonment not exceeding 2 years, or both.'
    },
    {
      id: 'AT10014_Q19',
      n: 19,
      stem: 'The Board of Accountancy may reinstate the validity of a revoked Certificate of Registration after the expiration of how many years from the date of revocation?',
      opts: [
        { label: 'A', text: '5' },
        { label: 'B', text: '3' },
        { label: 'C', text: '2' },
        { label: 'D', text: '1' }
      ],
      ans: 'C',
      explanation: 'Under Sec. 25, the Board may reinstate a revoked certificate after 2 years.'
    },
    {
      id: 'AT10014_Q20',
      n: 20,
      stem: 'All registered CPAs shall obtain and use a seal which shall be circular in form with a smaller circle within bearing the registrant’s name, registration number and title. Which of the following is correct?',
      opts: [
        { label: 'A', text: 'Engraved in the lower portion of the space between the circles is the CPA’s name.' },
        { label: 'B', text: 'Engraved in the middle of the smaller circle are the letters “CPA”.' },
        { label: 'C', text: 'Engraved in the middle of the smaller circle are the CPA’s name and registration number.' },
        { label: 'D', text: 'Engraved in the middle of the smaller circle is the CPA’s name.' }
      ],
      ans: 'B',
      explanation: 'The letters "CPA" are engraved in the middle of the smaller circle.'
    },
    {
      id: 'AT10014_Q21',
      n: 21,
      stem: 'Which of the following statements concerning the use of firm or partnership name is incorrect?',
      opts: [
        { label: 'A', text: 'In the case of an individual CPA, he/she shall do business under his/her registered name with the BOA and the PRC and as printed in his/her CPA certificate (for example, Juan Puruntong, CPA).' },
        { label: 'B', text: 'In the case of a firm, it shall do business under its duly registered and authorized firm name appearing in the registration documents issued by the Department of Trade and Industry (DTI) and other government offices and such firm name shall include the real name of the sole proprietor as printed in his/her CPA certificate (for example, Arnulfo Gumamela and Associates).' },
        { label: 'C', text: 'In the case of a registered partnership, it shall do business under its name as indicated in its current Articles of Partnership and Certificate of Registration issued by the Securities and Exchange Commission (SEC) (for example, Tanya, Sam, and Jervi, CPAs).' },
        { label: 'D', text: 'A CPA shall practice only under an individual, firm, or partnership name in accordance with Philippine laws and shall not include any fictitious name but may indicate specialization.' }
      ],
      ans: 'D',
      explanation: 'A CPA name cannot include fictitious names NOR indicate specialization.'
    },
    {
      id: 'AT10014_Q22',
      n: 22,
      stem: 'A partner surviving the death or withdrawal of all the other partners in a partnership may continue to practice under the partnership name for a period of not more than _____ years after becoming a sole proprietor.',
      opts: [
        { label: 'A', text: '4' },
        { label: 'B', text: '3' },
        { label: 'C', text: '2' },
        { label: 'D', text: '1' }
      ],
      ans: 'C',
      explanation: 'The surviving partner may continue under the partnership name for not more than 2 years.'
    },
    {
      id: 'AT10014_Q23',
      n: 23,
      stem: 'The death or disability of an individual CPA and/or the dissolution and liquidation of a firm or partnership of CPAs shall be reported to the BOA not later than _____ days from the date of such death, dissolution or liquidation.',
      opts: [
        { label: 'A', text: '90' },
        { label: 'B', text: '60' },
        { label: 'C', text: '30' },
        { label: 'D', text: '15' }
      ],
      ans: 'C',
      explanation: 'Must be reported to the BOA within 30 days.'
    },
    {
      id: 'AT10014_Q24',
      n: 24,
      stem: 'Which of the following statements concerning a CPA’s disclosure of confidential client information is ordinarily correct?',
      opts: [
        { label: 'A', text: 'Disclosure may be made to any party on consent of the client.' },
        { label: 'B', text: 'Disclosure should not be made even if such disclosure will protect the CPA’s professional interests in legal proceedings.' },
        { label: 'C', text: 'Disclosure should be made only if there is a legal or professional duty to make the disclosure.' },
        { label: 'D', text: 'Disclosure may be made to any government agency without subpoena.' }
      ],
      ans: 'A',
      explanation: 'Confidential client information may be disclosed with the specific consent of the client.'
    },
    {
      id: 'AT10014_Q25',
      n: 25,
      stem: 'Listed below are names of four CPA firms and pertinent facts relative to each firm. Unless otherwise indicated, the individuals named are CPAs and partners, and there are no other partners. Which is a violation of the Implementing Rules and Regulations of RA 9298?',
      opts: [
        { label: 'A', text: 'Tin, Ton and Tan, CPAs (Tin died about five years ago; Ton and Tan are continuing the firm.)' },
        { label: 'B', text: 'Pol and Bon, CPAs (The name of Cua, a third partner, is omitted from the partnership name.)' },
        { label: 'C', text: 'Joni and Jona, CPAs (Joni died about three years ago; Jona is continuing the firm as a sole proprietor.)' },
        { label: 'D', text: 'Elias and Co., CPAs (The firm has ten other partners who are all CPAs).' }
      ],
      ans: 'C',
      explanation: 'A surviving sole proprietor may continue using the partnership name for not more than 2 years. Joni died 3 years ago, which is a violation.'
    },
    {
      id: 'AT10014_Q26',
      n: 26,
      stem: 'The following statements relate to some of the provisions of RA 9298. Which is correct?',
      opts: [
        { label: 'A', text: 'Audit working papers are generally the property of the company whose financial statements were audited.' },
        { label: 'B', text: 'After three (3) years, subject to certain conditions, the Board of Accountancy may order the reinstatement of a CPA whose certificate of registration has been revoked.' },
        { label: 'C', text: 'The penal provision (Sec. 36) of RA 9298 applies only to the violation of any of the provisions of RA 9298 because its Implementing Rules and Regulations are unenforceable.' },
        { label: 'D', text: 'It shall be the primary duty of the PRC and the BOA to effectively enforce the provisions of RA 9298.' }
      ],
      ans: 'D',
      explanation: 'Enforcement of RA 9298 is the primary statutory duty of the PRC and the BOA.'
    }
  ]
};
