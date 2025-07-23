import { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft, FaCheck, FaLeaf, FaUsers, FaHandshake } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/MembershipForm.css';

const MembershipForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    organizationName: '',
    country: '',
    yearFounded: '',
    legalStatus: '',
    website: '',
    address: '',
    contactPerson: '',
    position: '',
    phone: '',
    email: '',
    membershipType: '',
    expertise: [],
    whyJoin: '',
    contribution: '',
    declaration: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'declaration') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else {
        setFormData(prev => ({
          ...prev,
          expertise: checked 
            ? [...prev.expertise, value]
            : prev.expertise.filter(item => item !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateStep = (step) => {
    let valid = true;
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.organizationName.trim()) {
        newErrors.organizationName = 'Organization name is required';
        valid = false;
      }
      if (!formData.country.trim()) {
        newErrors.country = 'Country is required';
        valid = false;
      }
    }
    
    if (step === 2) {
      if (!formData.contactPerson.trim()) {
        newErrors.contactPerson = 'Contact person is required';
        valid = false;
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
        valid = false;
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
        valid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
        valid = false;
      }
      if (!formData.membershipType) {
        newErrors.membershipType = 'Membership type is required';
        valid = false;
      }
    }
    
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep(3)) {
      if (!formData.declaration) {
        setErrors(prev => ({ ...prev, declaration: 'You must accept the declaration' }));
        return;
      }
      
      setIsSubmitting(true);
      
      // Simulate form submission
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setSubmitSuccess(true);
      } catch (error) {
        console.error('Submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Form step animations
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    })
  };

  return (
    <motion.main 
      className="membership-form-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Organic background elements */}
      <div className="form-bg-pattern">
        <div className="organic-shape-1"></div>
        <div className="organic-shape-2"></div>
      </div>

      <header className="form-header">
        <h1>
          <span className="title-gradient">Membership Application</span>
        </h1>
        <p className="lead">
          Please complete all steps of this form to apply for INOFO Africa Membership or Affiliate status.
        </p>
        
        {/* Progress indicator */}
        <div className="progress-tracker">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className={`progress-step ${i === step ? 'active' : ''} ${i < step ? 'completed' : ''}`}
            >
              {i < step ? <FaCheck /> : i}
            </div>
          ))}
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            ></div>
          </div>
        </div>
      </header>

      {submitSuccess ? (
        <motion.div
          className="success-message"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="success-icon">
            <FaCheck />
          </div>
          <h2>Application Submitted Successfully!</h2>
          <p>
            Thank you for your application to INOFO Africa. Our team will review your submission 
            and get back to you within 5-7 business days.
          </p>
          <a href="/" className="btn-primary">Return Home</a>
        </motion.div>
      ) : (
        <form 
          onSubmit={handleSubmit}
          className="membership-form"
        >
          {/* Hidden Settings */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Membership Application - INOFO Africa" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://inofo-africa.org/thank-you" />

          <AnimatePresence custom={step}>
            {/* Step 1 */}
            {step === 1 && (
              <motion.div
                key="step1"
                custom={1}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="form-step"
              >
                <h2>
                  <span className="step-number">1</span>
                  Organization Details
                </h2>
                
                <div className="form-group">
                  <label htmlFor="organizationName">Organization Name *</label>
                  <input
                    type="text"
                    id="organizationName"
                    name="organizationName"
                    placeholder="e.g. Organic Farmers Cooperative"
                    value={formData.organizationName}
                    onChange={handleChange}
                    className={errors.organizationName ? 'error' : ''}
                  />
                  {errors.organizationName && <span className="error-message">{errors.organizationName}</span>}
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="country">Country of Registration *</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      placeholder="e.g. Kenya"
                      value={formData.country}
                      onChange={handleChange}
                      className={errors.country ? 'error' : ''}
                    />
                    {errors.country && <span className="error-message">{errors.country}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="yearFounded">Year Founded</label>
                    <input
                      type="text"
                      id="yearFounded"
                      name="yearFounded"
                      placeholder="e.g. 2010"
                      value={formData.yearFounded}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="legalStatus">Legal Status</label>
                  <input
                    type="text"
                    id="legalStatus"
                    name="legalStatus"
                    placeholder="e.g. Registered NGO"
                    value={formData.legalStatus}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="website">Website / Social Media Handle</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    placeholder="Website or social media link"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="address">Full Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Physical address of organization"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </motion.div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <motion.div
                key="step2"
                custom={2}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="form-step"
              >
                <h2>
                  <span className="step-number">2</span>
                  Contact & Membership Info
                </h2>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contactPerson">Full Name of Primary Contact *</label>
                    <input
                      type="text"
                      id="contactPerson"
                      name="contactPerson"
                      placeholder="e.g. Jane Doe"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      className={errors.contactPerson ? 'error' : ''}
                    />
                    {errors.contactPerson && <span className="error-message">{errors.contactPerson}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="position">Position in Organization</label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      placeholder="e.g. Executive Director"
                      value={formData.position}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="e.g. +254700123456"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. contact@organization.org"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="membershipType">Membership Type *</label>
                  <select
                    id="membershipType"
                    name="membershipType"
                    value={formData.membershipType}
                    onChange={handleChange}
                    className={errors.membershipType ? 'error' : ''}
                  >
                    <option value="">-- Select Membership Type --</option>
                    <option value="Organisational Member">Organisational Member</option>
                    <option value="Affiliate Partner">Affiliate Partner</option>
                  </select>
                  {errors.membershipType && <span className="error-message">{errors.membershipType}</span>}
                </div>
                
                <div className="form-group">
                  <fieldset className="expertise-fieldset">
                    <legend>Areas of Work / Expertise:</legend>
                    <div className="checkbox-grid">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="expertise"
                          value="Organic Production"
                          checked={formData.expertise.includes('Organic Production')}
                          onChange={handleChange}
                        />
                        <span className="checkbox-custom">
                          <FaLeaf className="checkbox-icon" />
                        </span>
                        Organic Production
                      </label>
                      
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="expertise"
                          value="Agroecology"
                          checked={formData.expertise.includes('Agroecology')}
                          onChange={handleChange}
                        />
                        <span className="checkbox-custom">
                          <FaLeaf className="checkbox-icon" />
                        </span>
                        Agroecology
                      </label>
                      
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="expertise"
                          value="Research"
                          checked={formData.expertise.includes('Research')}
                          onChange={handleChange}
                        />
                        <span className="checkbox-custom">
                          <FaUsers className="checkbox-icon" />
                        </span>
                        Research
                      </label>
                      
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="expertise"
                          value="Training & Capacity Building"
                          checked={formData.expertise.includes('Training & Capacity Building')}
                          onChange={handleChange}
                        />
                        <span className="checkbox-custom">
                          <FaUsers className="checkbox-icon" />
                        </span>
                        Training & Capacity Building
                      </label>
                      
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="expertise"
                          value="Advocacy & Policy"
                          checked={formData.expertise.includes('Advocacy & Policy')}
                          onChange={handleChange}
                        />
                        <span className="checkbox-custom">
                          <FaHandshake className="checkbox-icon" />
                        </span>
                        Advocacy & Policy
                      </label>
                      
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="expertise"
                          value="Climate Action"
                          checked={formData.expertise.includes('Climate Action')}
                          onChange={handleChange}
                        />
                        <span className="checkbox-custom">
                          <FaLeaf className="checkbox-icon" />
                        </span>
                        Climate Action
                      </label>
                    </div>
                  </fieldset>
                </div>
              </motion.div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <motion.div
                key="step3"
                custom={3}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="form-step"
              >
                <h2>
                  <span className="step-number">3</span>
                  Justification & Declaration
                </h2>
                
                <div className="form-group">
                  <label htmlFor="whyJoin">Why do you want to join INOFO Africa? *</label>
                  <textarea
                    id="whyJoin"
                    name="whyJoin"
                    placeholder="Please describe your organization's interest in joining INOFO Africa..."
                    rows={4}
                    value={formData.whyJoin}
                    onChange={handleChange}
                    className={errors.whyJoin ? 'error' : ''}
                  />
                  {errors.whyJoin && <span className="error-message">{errors.whyJoin}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="contribution">How will your organization contribute to INOFO Africa?</label>
                  <textarea
                    id="contribution"
                    name="contribution"
                    placeholder="Describe how your organization can contribute to the network..."
                    rows={4}
                    value={formData.contribution}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label className="declaration-label">
                    <input
                      type="checkbox"
                      name="declaration"
                      checked={formData.declaration}
                      onChange={handleChange}
                      className={errors.declaration ? 'error' : ''}
                    />
                    <span className="declaration-checkbox"></span>
                    I confirm that all the information provided is accurate and that my organization agrees to participate in INOFO Africa activities in good faith. *
                  </label>
                  {errors.declaration && <span className="error-message">{errors.declaration}</span>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="form-nav-buttons">
            {step > 1 && (
              <button 
                type="button" 
                onClick={prevStep}
                className="btn-secondary"
              >
                <FaArrowLeft /> Back
              </button>
            )}
            
            {step < 3 ? (
              <button 
                type="button" 
                onClick={nextStep}
                className="btn-primary"
              >
                Next <FaArrowRight />
              </button>
            ) : (
              <button 
                type="submit" 
                className="btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            )}
          </div>
        </form>
      )}
    </motion.main>
  );
};

export default MembershipForm;