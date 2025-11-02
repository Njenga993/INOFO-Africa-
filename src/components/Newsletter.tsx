import React, { useEffect } from "react";
import "../styles/newsletter.css"; // optional for your own custom styles

const Newsletter: React.FC = () => {
  useEffect(() => {
    // Dynamically inject Mailchimp CSS
    const link = document.createElement("link");
    link.href = "//cdn-images.mailchimp.com/embedcode/classic-061523.css";
    link.rel = "stylesheet";
    link.type = "text/css";
    document.head.appendChild(link);

    // Dynamically inject Mailchimp validation script
    const script = document.createElement("script");
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="mc_embed_signup">
      <form
        action="https://gmail.us19.list-manage.com/subscribe/post?u=a4f1abdf13821decfae58d9cd&amp;id=cc4a7c3035&amp;f_id=004835e0f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <h2>Subscribe To Our Newsletter</h2>
          <div className="indicates-required">
            <span className="asterisk">*</span> indicates required
          </div>

          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">
              Email Address <span className="asterisk">*</span>
            </label>
            <input
              type="email"
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              required
            />
          </div>

          <div id="mce-responses" className="clear foot">
            <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
            <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
          </div>

          <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
            <input
              type="text"
              name="b_a4f1abdf13821decfae58d9cd_cc4a7c3035"
              tabIndex={-1}
              defaultValue=""
            />
          </div>

          <div className="optionalParent">
            <div className="clear foot">
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
                value="Subscribe"
              />
              <p >
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
