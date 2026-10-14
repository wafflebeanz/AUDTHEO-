import { ModuleData } from './types';

export const at10009: ModuleData = {
  id: 'AT-10009',
  code: 'AT-10009',
  title: 'Audit Sampling (PSA 530)',
  standards: 'PSA 530',
  questionCount: 35,
  summary: 'Statistical vs Nonstatistical Sampling, Attribute Sampling (Tests of Controls) vs Variables Sampling (Substantive Tests), Sampling Risk (Alpha/Type I Risk, Beta/Type II Risk), Nonsampling Risk, Tolerable Deviation Rate, Expected Error, Sample Selection Methods (Random, Systematic, Stratification, Haphazard, Block), Classical Variables Techniques (Mean-Per-Unit, Difference, Ratio), Probability-Proportional-to-Size (PPS), and Sample Size Factors.',
  lectureOutline: `### PSA 530: AUDIT SAMPLING
Application of audit procedures to less than 100% of items within an account balance or class of transactions such that all sampling units have a chance of selection.

#### Statistical vs. Nonstatistical Sampling
- **Statistical:** Random selection + use of probability theory to evaluate sample results (including measurement of sampling risk).
- **Nonstatistical:** Does not possess both characteristics. Both require professional judgment.

#### Types of Sampling Plans
1. **Attribute Sampling:** Applicable to tests of controls (estimates rate of deviation/occurrence).
   - *Techniques:* Attribute estimation, Sequential (stop-or-go) sampling, Discovery sampling (used when expected deviation rate is near zero, e.g. fraud).
2. **Variables Sampling:** Applicable to substantive testing (estimates monetary amount or correctness of account balance).
   - *Techniques:* Mean-per-unit, Difference estimation, Ratio estimation, Probability-Proportional-to-Size (PPS / Dollar-unit sampling).

---

### SAMPLING RISK & AUDIT EFFICIENCY VS. EFFECTIVENESS

| Type of Test | Sampling Risk Aspect | Also Called | Impact on Audit |
|---|---|---|---|
| **Test of Controls** | Risk of assessing control risk **too low** | Beta risk / Type II risk / Overreliance | **Effectiveness** (may lead to inappropriate unmodified opinion) |
| **Test of Controls** | Risk of assessing control risk **too high** | Alpha risk / Type I risk / Underreliance | **Efficiency** (leads to unnecessary additional work) |
| **Substantive Test** | Risk of **incorrect acceptance** | Beta risk / Type II risk | **Effectiveness** (material error not detected) |
| **Substantive Test** | Risk of **incorrect rejection** | Alpha risk / Type I risk | **Efficiency** (unnecessary additional audit procedures) |

---

### SAMPLE SELECTION METHODS
- **Random Number Sampling:** Equal chance for all items; uses random number tables or software.
- **Systematic Selection:** Population divided by sample size = interval (e.g., every 50th item from random starting point). Must watch for population cyclical patterns.
- **Stratification:** Subdividing population into homogenous subpopulations/strata (often by monetary value). Reduces variability and allows smaller sample size.
- **Haphazard Selection:** Auditor selects without structured technique; NOT valid for statistical sampling.
- **Block / Cluster Selection:** Selecting contiguous items; rarely appropriate for audit sampling.

---

### FACTORS INFLUENCING SAMPLE SIZE

#### For Tests of Controls:
- Reliance on controls: **Increases** sample size
- Tolerable deviation rate: **Decreases** sample size (inverse relationship)
- Expected deviation rate: **Increases** sample size (direct relationship)
- Required confidence level: **Increases** sample size
- Population size: **Negligible effect** (for large populations)

#### For Substantive Procedures:
- Assessed inherent/control risk: **Increases** sample size
- Use of other substantive procedures: **Decreases** sample size
- Required confidence level: **Increases** sample size
- Tolerable error: **Decreases** sample size
- Expected error: **Increases** sample size
- Stratification: **Decreases** sample size`,
  items: [
    {
      id: 'AT10009_Q1',
      n: 1,
      stem: 'Audit sampling involves the',
      opts: [
        { label: 'A', text: 'Selection of all items over a certain amount.' },
        { label: 'B', text: 'Application of audit procedures to less than 100% of items within a class of transactions or an account balance such that all items have a chance of selection.' },
        { label: 'C', text: 'Application of audit procedures to all items that comprise a class of transactions or an account balance.' },
        { label: 'D', text: 'Application of audit procedures to all items over a certain amount and those that are unusual or have a history of error.' }
      ],
      ans: 'B',
      explanation: 'Under PSA 530, audit sampling involves testing less than 100% of items such that all items have a chance of selection.'
    },
    {
      id: 'AT10009_Q2',
      n: 2,
      stem: 'Population, as defined in PSA 530, means the entire set of data from which a sample is selected and about which the auditor wishes to draw conclusions. It is important for the auditor to ensure that the population is\nI. Appropriate to the objective of the audit procedure.\nII. Complete.',
      opts: [
        { label: 'A', text: 'I only' },
        { label: 'B', text: 'II only' },
        { label: 'C', text: 'Both I and II' },
        { label: 'D', text: 'Neither I nor II' }
      ],
      ans: 'C',
      explanation: 'The population must be both appropriate to the audit objective and complete.'
    },
    {
      id: 'AT10009_Q3',
      n: 3,
      stem: 'An advantage of statistical over nonstatistical sampling methods in tests of controls is that the statistical methods',
      opts: [
        { label: 'A', text: 'Afford greater assurance than a nonstatistical sample of equal size.' },
        { label: 'B', text: 'Provide an objective basis for quantitatively evaluating sampling risks.' },
        { label: 'C', text: 'Can more easily convert the sample into a dual-purpose test useful for substantive testing.' },
        { label: 'D', text: 'Eliminate the need to use judgment in determining appropriate sample sizes.' }
      ],
      ans: 'B',
      explanation: 'Statistical sampling allows quantitative measurement and mathematical evaluation of sampling risk.'
    },
    {
      id: 'AT10009_Q4',
      n: 4,
      stem: 'The risk of incorrect acceptance and the likelihood of assessing control risk too low relate to the',
      opts: [
        { label: 'A', text: 'Effectiveness of the audit.' },
        { label: 'B', text: 'Efficiency of the audit.' },
        { label: 'C', text: 'Preliminary estimates of materiality levels.' },
        { label: 'D', text: 'Tolerable misstatement.' }
      ],
      ans: 'A',
      explanation: 'Both risks (Beta / Type II risks) affect audit effectiveness and may lead to issuing an inappropriate unmodified opinion.'
    },
    {
      id: 'AT10009_Q5',
      n: 5,
      stem: 'The likelihood of assessing control risk too high is the risk that the sample selected to test controls',
      opts: [
        { label: 'A', text: 'Does not support the auditor’s planned assessed level of control risk when the true operating effectiveness of internal control justifies such an assessment.' },
        { label: 'B', text: 'Contains misstatements that could be material to the financial statements when aggregated with misstatements in other account balances of transactions classes.' },
        { label: 'C', text: 'Contains proportionately fewer deviations from prescribed internal controls than exist in the balance or class as a whole.' },
        { label: 'D', text: 'Does not support the tolerable misstatement for some or all of management’s assertions.' }
      ],
      ans: 'A',
      explanation: 'Assessing CR too high (underreliance) occurs when sample deviations are higher than the population rate, leading the auditor to believe controls are worse than they actually are.'
    },
    {
      id: 'AT10009_Q6',
      n: 6,
      stem: 'While performing a test of details during an audit, the auditor determined that the sample results supported the conclusion that the recorded account balance was materially misstated. It was, in fact, not materially misstated. This situation illustrates the risk of',
      opts: [
        { label: 'A', text: 'Incorrect rejection' },
        { label: 'B', text: 'Incorrect acceptance' },
        { label: 'C', text: 'Assessing control risk too low' },
        { label: 'D', text: 'Assessing control risk too high' }
      ],
      ans: 'A',
      explanation: 'Concluding that a balance is materially misstated when it is in fact fairly stated is the risk of incorrect rejection (Alpha risk).'
    },
    {
      id: 'AT10009_Q7',
      n: 7,
      stem: 'Which of the following sample planning factors would influence the sample size for a substantive test of details for a specific account?\nExpected Error | Tolerable Error',
      opts: [
        { label: 'A', text: 'No | No' },
        { label: 'B', text: 'Yes | Yes' },
        { label: 'C', text: 'No | Yes' },
        { label: 'D', text: 'Yes | No' }
      ],
      ans: 'B',
      explanation: 'Both expected error and tolerable error directly determine substantive sample size.'
    },
    {
      id: 'AT10009_Q8',
      n: 8,
      stem: 'An underlying feature of random-based selection of items is that each',
      opts: [
        { label: 'A', text: 'Stratum of the accounting population be given equal representation in the sample.' },
        { label: 'B', text: 'Item in the accounting population be randomly ordered.' },
        { label: 'C', text: 'Item in the accounting population should have an opportunity to be selected.' },
        { label: 'D', text: 'Item must be systematically selected using replacement.' }
      ],
      ans: 'C',
      explanation: 'In random selection, every item in the population has a known and non-zero chance of selection.'
    },
    {
      id: 'AT10009_Q9',
      n: 9,
      stem: 'Which of the following best illustrates the concept of sampling risk?',
      opts: [
        { label: 'A', text: 'A randomly chosen sample may not be representative of the population as a whole on the characteristic of interest.' },
        { label: 'B', text: 'An auditor may select audit procedures that are not appropriate to achieve the specific objective.' },
        { label: 'C', text: 'An auditor may fail to recognize errors in the documents examined for the chosen sample.' },
        { label: 'D', text: 'The documents related to the chosen sample may not be available for inspection.' }
      ],
      ans: 'A',
      explanation: 'Sampling risk arises because a sample may not be representative of the underlying population.'
    },
    {
      id: 'AT10009_Q10',
      n: 10,
      stem: 'Which of the following statistical selection techniques is least desirable for use by an auditor?',
      opts: [
        { label: 'A', text: 'Systematic selection' },
        { label: 'B', text: 'Stratified selection' },
        { label: 'C', text: 'Block selection' },
        { label: 'D', text: 'Sequential selection' }
      ],
      ans: 'C',
      explanation: 'Block selection selects contiguous items which cannot ordinarily yield valid inferences about the entire population.'
    },
    {
      id: 'AT10009_Q11',
      n: 11,
      stem: 'The expected population deviation rate of client billing errors is 3%. The auditor has established a tolerable rate of 5%. In the review of client invoices the auditor should use',
      opts: [
        { label: 'A', text: 'Stratified sampling' },
        { label: 'B', text: 'Variable sampling' },
        { label: 'C', text: 'Discovery sampling' },
        { label: 'D', text: 'Attribute sampling' }
      ],
      ans: 'D',
      explanation: 'Testing for control deviations or billing errors is an attribute sampling application.'
    },
    {
      id: 'AT10009_Q12',
      n: 12,
      stem: 'Which of the following sampling methods would be used to estimate a numerical measurement of a population, such as a peso value?',
      opts: [
        { label: 'A', text: 'Attributes sampling' },
        { label: 'B', text: 'Stop-or-go sampling' },
        { label: 'C', text: 'Variables sampling' },
        { label: 'D', text: 'Random-number sampling' }
      ],
      ans: 'C',
      explanation: 'Variables sampling is used to estimate numerical amounts (such as peso values).'
    },
    {
      id: 'AT10009_Q13',
      n: 13,
      stem: 'Which of the following statements is correct concerning statistical sampling in tests of controls?',
      opts: [
        { label: 'A', text: 'Deviations from control procedures at a given rate usually result in misstatements at a higher rate.' },
        { label: 'B', text: 'As the population size doubles, the sample size should also double.' },
        { label: 'C', text: 'The qualitative aspects of deviations are not considered by the auditor.' },
        { label: 'D', text: 'There is an inverse relationship between the sample size and the tolerable rate.' }
      ],
      ans: 'D',
      explanation: 'As the tolerable deviation rate decreases, the required sample size increases (inverse relationship).'
    },
    {
      id: 'AT10009_Q14',
      n: 14,
      stem: 'Which of the following statistical sampling plans does not use a fixed sample size for tests of controls?',
      opts: [
        { label: 'A', text: 'Attributes sampling' },
        { label: 'B', text: 'Sequential sampling' },
        { label: 'C', text: 'PPS sampling' },
        { label: 'D', text: 'Variables sampling' }
      ],
      ans: 'B',
      explanation: 'Sequential (stop-or-go) sampling evaluates evidence in steps without a predetermined single fixed sample size.'
    },
    {
      id: 'AT10009_Q15',
      n: 15,
      stem: 'If certain forms are not consecutively numbered',
      opts: [
        { label: 'A', text: 'Selection of a random sample probably is not possible.' },
        { label: 'B', text: 'Systematic sampling may be appropriate.' },
        { label: 'C', text: 'Stratified sampling should be used.' },
        { label: 'D', text: 'Random number tables cannot be used.' }
      ],
      ans: 'B',
      explanation: 'Systematic selection (counting every nth physical document) remains practical even when documents are not prenumbered.'
    },
    {
      id: 'AT10009_Q16',
      n: 16,
      stem: 'When performing a test of a control with respect to control over cash receipts, an auditor may use a systematic sampling technique with a start at any randomly selected item. The biggest disadvantage of this type of sampling is that the items in the population',
      opts: [
        { label: 'A', text: 'Must be systematically replaced in the population after sampling.' },
        { label: 'B', text: 'May systematically occur more than once in the sample.' },
        { label: 'C', text: 'Must be recorded in a systematic pattern before the sample can be drawn.' },
        { label: 'D', text: 'May occur in a systematic pattern, thus destroying the sample randomness.' }
      ],
      ans: 'D',
      explanation: 'If population items coincide with a cyclical or systematic pattern that matches the interval, randomness and representativeness are destroyed.'
    },
    {
      id: 'AT10009_Q17',
      n: 17,
      stem: 'In testing accounts receivable, an auditor sends out positive confirmation requests to 100 randomly selected customers. A customer returns the confirmation indicating that the balance is correct when, in fact, the balance is overstated. This is an example of:',
      opts: [
        { label: 'A', text: 'Projected misstatement' },
        { label: 'B', text: 'Sampling error' },
        { label: 'C', text: 'Standard error' },
        { label: 'D', text: 'Nonsampling error' }
      ],
      ans: 'D',
      explanation: 'Erroneous confirmation response by a customer is an audit evidence failure not caused by sample size (nonsampling error).'
    },
    {
      id: 'AT10009_Q18',
      n: 18,
      stem: 'An auditor is testing internal control procedures that are evidenced on an entity’s vouchers by matching random numbers with voucher numbers. If a random number matches the number of a voided voucher, that voucher ordinarily should be replaced by another voucher in the random sample if the voucher',
      opts: [
        { label: 'A', text: 'Constitutes a deviation.' },
        { label: 'B', text: 'Has been properly voided.' },
        { label: 'C', text: 'Cannot be located.' },
        { label: 'D', text: 'Represents an immaterial peso amount.' }
      ],
      ans: 'B',
      explanation: 'If a selected voucher was properly voided, it is not a deviation and should be replaced with another randomly selected voucher.'
    },
    {
      id: 'AT10009_Q19',
      n: 19,
      stem: 'An auditor plans to examine a sample of 20 purchase orders for proper approvals as prescribed by the client’s internal control procedures. One of the purchase orders in the chosen sample cannot be found, and the auditor is unable to use alternative procedures to test whether that purchase was properly approved. The auditor should',
      opts: [
        { label: 'A', text: 'Choose another purchase order to replace the missing purchase order in the sample.' },
        { label: 'B', text: 'Consider this test of control invalid and proceed with substantive tests since internal control cannot be relied upon.' },
        { label: 'C', text: 'Treat the missing purchase order as a deviation for the purpose of evaluating the sample.' },
        { label: 'D', text: 'Select a completely new set of 20 purchase orders.' }
      ],
      ans: 'C',
      explanation: 'If an item cannot be tested or located, it must be treated as a deviation.'
    },
    {
      id: 'AT10009_Q20',
      n: 20,
      stem: 'The tolerable rate of deviations for a test of a control is generally',
      opts: [
        { label: 'A', text: 'Lower than the expected rate of errors in the related accounting records.' },
        { label: 'B', text: 'Higher than the expected rate of errors in the related accounting records.' },
        { label: 'C', text: 'Identical to the expected rate of errors in the related accounting records.' },
        { label: 'D', text: 'Unrelated to the expected rate of errors in the related accounting records.' }
      ],
      ans: 'B',
      explanation: 'Tolerable rate must exceed expected rate; otherwise testing controls is not worthwhile.'
    },
    {
      id: 'AT10009_Q21',
      n: 21,
      stem: 'Which of the following is a sampling risk that is associated with the efficiency of an audit?',
      opts: [
        { label: 'A', text: 'Risk of assessing control risk too high.' },
        { label: 'B', text: 'Risk of incorrect acceptance.' },
        { label: 'C', text: 'Inherent risk.' },
        { label: 'D', text: 'Detection risk.' }
      ],
      ans: 'A',
      explanation: 'Risk of assessing control risk too high (Alpha risk) leads to unnecessary substantive audit work, reducing audit efficiency.'
    },
    {
      id: 'AT10009_Q22',
      n: 22,
      stem: 'If the auditor is concerned that a population may contain exceptions, the determination of a sample size sufficient to include at least one such exception is a characteristic of',
      opts: [
        { label: 'A', text: 'Discovery sampling' },
        { label: 'B', text: 'Variables sampling' },
        { label: 'C', text: 'Random sampling' },
        { label: 'D', text: 'PPS sampling' }
      ],
      ans: 'A',
      explanation: 'Discovery sampling is designed to find at least one exception if the actual rate equals or exceeds the critical rate.'
    },
    {
      id: 'AT10009_Q23',
      n: 23,
      stem: 'An auditor discovers that an account balance believed not to be materially misstated based on an audit sample was materially misstated based on the total population of the account balance. This is an example of which of the following types of sampling risks?',
      opts: [
        { label: 'A', text: 'Incorrect rejection.' },
        { label: 'B', text: 'Incorrect acceptance.' },
        { label: 'C', text: 'Assessing control risk too low.' },
        { label: 'D', text: 'Assessing control risk too high.' }
      ],
      ans: 'B',
      explanation: 'Accepting an account balance as fairly stated when it is in fact materially misstated is incorrect acceptance.'
    },
    {
      id: 'AT10009_Q24',
      n: 24,
      stem: 'Which of the following courses of action would an auditor most likely follow in planning a sample of cash disbursements if the auditor is aware of several unusually large cash disbursements?',
      opts: [
        { label: 'A', text: 'Set the tolerable rate of deviation at a lower level than originally planned.' },
        { label: 'B', text: 'Stratify the cash disbursements population so that the unusually large disbursements are selected.' },
        { label: 'C', text: 'Increase the sample size to reduce the effect of the unusually large disbursements.' },
        { label: 'D', text: 'Continue to draw new samples until all the unusually large disbursements appear in the sample.' }
      ],
      ans: 'B',
      explanation: 'Stratification allows separating large items into an independent stratum examined 100%.'
    },
    {
      id: 'AT10009_Q25',
      n: 25,
      stem: 'While performing a test of details during an audit, an auditor determined that the sample results supported the conclusion that the recorded account balance was materially misstated. It was, in fact, not materially misstated. This situation illustrates the risk of',
      opts: [
        { label: 'A', text: 'Assessing control risk too high' },
        { label: 'B', text: 'Assessing control risk too low' },
        { label: 'C', text: 'Incorrect rejection' },
        { label: 'D', text: 'Incorrect acceptance' }
      ],
      ans: 'C',
      explanation: 'Concurring that a balance is materially misstated when it is in fact true is the risk of incorrect rejection.'
    },
    {
      id: 'AT10009_Q26',
      n: 26,
      stem: 'For which of the following audit tests would an auditor most likely use attribute sampling?',
      opts: [
        { label: 'A', text: 'Making an independent estimate of the amount of FIFO inventory.' },
        { label: 'B', text: 'Examining invoices in support of the valuation of fixed asset additions.' },
        { label: 'C', text: 'Selecting accounts receivable for confirmation of account balances.' },
        { label: 'D', text: 'Inspecting employee time cards for proper approval by supervisors.' }
      ],
      ans: 'D',
      explanation: 'Inspecting time cards for supervisory approval tests a binary control attribute (presence/absence of approval).'
    },
    {
      id: 'AT10009_Q27',
      n: 27,
      stem: 'An auditor desired to test credit approval on 10,000 sales invoices processed during the year. The auditor designed a statistical sample that would provide 1% risk of assessing control risk too low (99% confidence) that not more than 7% of the sales invoices lacked approval. The auditor estimated from previous experience that about 2 ½% of the sales invoices lacked approval. A sample of 200 invoices was examined and seven of them were lacking approval. The auditor then determined the achieved upper precision limit to be 8%.\n\nIn the evaluation of this sample, the auditor decided to increase the level of the preliminary assessment of control risk because the',
      opts: [
        { label: 'A', text: 'Tolerable rate (7%) was less than the achieved upper precision limit (8%).' },
        { label: 'B', text: 'Expected deviation rate (7%) was more than the percentage of errors in the sample (3 ½%).' },
        { label: 'C', text: 'Achieved upper precision limit (8%) was more than the percentage of errors in the sample (3 ½%).' },
        { label: 'D', text: 'Expected deviation rate (2 ½%) was less than the tolerable rate (7%).' }
      ],
      ans: 'A',
      explanation: 'When achieved upper precision limit (8%) exceeds the tolerable rate (7%), the control does not support the planned assessed level of control risk.'
    },
    {
      id: 'AT10009_Q28',
      n: 28,
      stem: 'Referring to the previous item (where sample deviation rate was 7/200 = 3.5% and achieved upper precision limit was 8%), the allowance for sampling risk was',
      opts: [
        { label: 'A', text: '5 ½%' },
        { label: 'B', text: '4 ½%' },
        { label: 'C', text: '3 ½%' },
        { label: 'D', text: '1%.' }
      ],
      ans: 'B',
      explanation: 'Allowance for sampling risk = Achieved upper precision limit (8%) - Sample deviation rate (3.5%) = 4.5%.'
    },
    {
      id: 'AT10009_Q29',
      n: 29,
      stem: 'The diagram below depicts the auditor’s estimated maximum deviation rate compared with the tolerable rate and also depicts the true population deviation rate compared with the tolerable rate.\n\nAuditor\'s Estimate:\n- Max Deviation Rate Is Less than Tolerable Rate: I (True rate <= Tolerable), III (True rate > Tolerable)\n- Max Deviation Rate Exceeds Tolerable Rate: II (True rate <= Tolerable), IV (True rate > Tolerable)\n\nAs a result of tests of controls, the auditor assesses control risk higher than necessary and thereby increases substantive testing. This is illustrated by',
      opts: [
        { label: 'A', text: 'I' },
        { label: 'B', text: 'II' },
        { label: 'C', text: 'III' },
        { label: 'D', text: 'IV' }
      ],
      ans: 'B',
      explanation: 'Quadrant II represents assessing control risk higher than necessary (True rate <= Tolerable, but Auditor estimated rate exceeds Tolerable).'
    },
    {
      id: 'AT10009_Q30',
      n: 30,
      stem: 'In addition to evaluating the frequency of deviations in tests of controls, an auditor should also consider certain qualitative aspects of the deviations. The auditor most likely would give broader consideration to the implications of a deviation if it was',
      opts: [
        { label: 'A', text: 'The only deviation discovered in the sample.' },
        { label: 'B', text: 'Identical to a deviation discovered during the prior year’s audit.' },
        { label: 'C', text: 'Caused by an employee’s misunderstanding of instructions.' },
        { label: 'D', text: 'Initially concealed by a forged document.' }
      ],
      ans: 'D',
      explanation: 'An intentional concealment or forgery indicates potential fraud, which carries much wider qualitative audit implications.'
    },
    {
      id: 'AT10009_Q31',
      n: 31,
      stem: 'When the auditor goes through a population and selects items for the sample without regard to their size, source, or other distinguishing characteristics, it is called',
      opts: [
        { label: 'A', text: 'Block selection' },
        { label: 'B', text: 'Systematic selection' },
        { label: 'C', text: 'Haphazard selection' },
        { label: 'D', text: 'Random selection' }
      ],
      ans: 'C',
      explanation: 'Selecting items without following a structured technique is haphazard selection.'
    },
    {
      id: 'AT10009_Q32',
      n: 32,
      stem: 'When an auditor has chosen a random sample and is using nonstatistical attributes sampling, that auditor',
      opts: [
        { label: 'A', text: 'Need not consider the risk of assessing control risk too low.' },
        { label: 'B', text: 'Has committed a nonsampling error.' },
        { label: 'C', text: 'Will have to use discovery sampling to evaluate the results.' },
        { label: 'D', text: 'Should compare the deviation rate of the sample to the tolerable deviation rate.' }
      ],
      ans: 'D',
      explanation: 'In nonstatistical sampling, the sample deviation rate is compared against the tolerable deviation rate using professional judgment.'
    },
    {
      id: 'AT10009_Q33',
      n: 33,
      stem: 'An error that arises from an isolated event that has not recurred other than on specifically identifiable occasions and is therefore not representative of similar errors in the population is a/an',
      opts: [
        { label: 'A', text: 'Anomalous error' },
        { label: 'B', text: 'Isolated error' },
        { label: 'C', text: 'Individual error' },
        { label: 'D', text: 'Non-recurring error' }
      ],
      ans: 'A',
      explanation: 'Under PSA 530, this is the definition of an "Anomalous error".'
    },
    {
      id: 'AT10009_Q34',
      n: 34,
      stem: 'If all other factors specified in an attributes sampling plan remain constant, decreasing the tolerable rate and decreasing the risk of assessing control risk too low would have what effect on sample size?',
      opts: [
        { label: 'A', text: 'Increase.' },
        { label: 'B', text: 'Remain the same.' },
        { label: 'C', text: 'Decrease.' },
        { label: 'D', text: 'Indeterminate, depends upon exact change being made.' }
      ],
      ans: 'A',
      explanation: 'Both decreasing tolerable rate and decreasing acceptable risk require a larger sample size (both increase sample size).'
    },
    {
      id: 'AT10009_Q35',
      n: 35,
      stem: 'Which of the following statements is correct about the sample size in statistical sampling when testing internal controls?',
      opts: [
        { label: 'A', text: 'The auditor should consider the tolerable rate of deviation from the controls being tested in determining sample size.' },
        { label: 'B', text: 'As the likely rate of deviation decreases, the auditor should increase the planned sample size.' },
        { label: 'C', text: 'The allowable risk of assessing control risk too low has no effect on the planned sample size.' },
        { label: 'D', text: 'Of all the factors to be considered, the population size has the greatest effect on the sample size.' }
      ],
      ans: 'A',
      explanation: 'The tolerable rate of deviation is an essential input in determining sample size.'
    }
  ]
};
