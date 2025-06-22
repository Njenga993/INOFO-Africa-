import { useState } from 'react';
import '../styles/MembershipForm.css';

const MembershipForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <main className="membership-form-page">
      <header className="form-header">
        <h1>Membership Application</h1>
        <p>
          Please complete all steps of this form to apply for INOFO Africa Membership or Affiliate status.
        </p>
      </header>

      <form
        action="https://formsubmit.co/your@email.com"
        method="POST"
        className="membership-form"
      >
        {/* Hidden Settings */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New Membership Application - INOFO Africa" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="https://inofo-africa.org/thank-you" />

        {/* Step 1 */}
        {step === 1 && (
          <>
            <h2>1. Organization Details</h2>
            <input type="text" name="Organization Name" placeholder="Organization Name" required />
            <input type="text" name="Country" placeholder="Country of Registration" required />
            <input type="text" name="Year Founded" placeholder="Year Founded" />
            <input type="text" name="Legal Status" placeholder="Legal Status (e.g. NGO, CBO)" />
            <input type="text" name="Website or Social Media" placeholder="Website / Social Media Handle" />
            <input type="text" name="Address" placeholder="Full Address" />
          </>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <>
            <h2>2. Contact & Membership Info</h2>
            <input type="text" name="Contact Person" placeholder="Full Name of Primary Contact" required />
            <input type="text" name="Position" placeholder="Position in Organization" />
            <input type="tel" name="Phone" placeholder="Phone Number" required />
            <input type="email" name="Email" placeholder="Email Address" required />
            <select name="Membership Type" required>
              <option value="">-- Select Membership Type --</option>
              <option value="Organisational Member">Organisational Member</option>
              <option value="Affiliate Partner">Affiliate Partner</option>
            </select>

            <fieldset>
              <legend>Areas of Work / Expertise:</legend>
              <label><input type="checkbox" name="Expertise" value="Organic Production" /> Organic Production</label>
              <label><input type="checkbox" name="Expertise" value="Agroecology" /> Agroecology</label>
              <label><input type="checkbox" name="Expertise" value="Research" /> Research</label>
              <label><input type="checkbox" name="Expertise" value="Training & Capacity Building" /> Training & Capacity Building</label>
              <label><input type="checkbox" name="Expertise" value="Advocacy & Policy" /> Advocacy & Policy</label>
              <label><input type="checkbox" name="Expertise" value="Climate Action" /> Climate Action</label>
            </fieldset>
          </>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <>
            <h2>3. Justification & Declaration</h2>
            <textarea name="Why Join" placeholder="Why do you want to join INOFO Africa?" rows={4} required />
            <textarea name="Contribution" placeholder="How will your organization contribute to INOFO Africa?" rows={4} />
            <label className="declaration">
              <input type="checkbox" name="Declaration" required />
              I confirm that all the information provided is accurate and that my organization agrees to participate in INOFO Africa activities in good faith.
            </label>
          </>
        )}

        {/* Navigation Buttons */}
        <div className="form-nav-buttons">
          {step > 1 && <button type="button" onClick={prevStep}>Back</button>}
          {step < 3 ? (
            <button type="button" onClick={nextStep}>Next</button>
          ) : (
            <button type="submit" className="btn-primary">Submit Application</button>
          )}
        </div>
      </form>
    </main>
  );
};

export default MembershipForm;
