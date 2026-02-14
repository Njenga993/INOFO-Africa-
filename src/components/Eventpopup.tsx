import React, { useEffect, useState, useRef } from "react";
import "../styles/EventPopup.css";
import { FaArrowRight } from "react-icons/fa";
import callImage from "../assets/call_inofo.png";

const EventPopup: React.FC = () => {
  const [show, setShow] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const startY = useRef<number>(0);
  const currentY = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  useEffect(() => {
    setShow(true);

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShow(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    currentY.current = e.touches[0].clientY;

    if (popupRef.current) {
      const deltaY = currentY.current - startY.current;
      if (deltaY > 0) {
        popupRef.current.style.transform = `translateY(${deltaY}px)`;
      }
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const deltaY = currentY.current - startY.current;

    if (deltaY > 100) {
      setShow(false);
    } else {
      if (popupRef.current) {
        popupRef.current.style.transform = "";
      }
    }
  };

  if (!show) return null;

  return (
    <div
      className="event-popup-overlay"
      onClick={() => setShow(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div
        className="event-popup-card"
        ref={popupRef}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          className="event-popup-close"
          onClick={() => setShow(false)}
          aria-label="Close popup"
        >
          ✕
        </button>

        {/* Image */}
        <div className="event-popup-image">
          <img src={callImage} alt="INOFO Africa Call for Contributions" />
        </div>

        {/* Content */}
        <div className="event-popup-content">
          <span className="event-popup-badge">
            INOFO Africa · Call for Contributions
          </span>

          <h2 id="popup-title">
            A Call for Contributions – Share Your Regional Seed Saving Practices
          </h2>

          <p className="event-popup-lead">
            INOFO Africa invites step-by-step modules from Central, Northern,
            Western, Southern, and Eastern Africa on seed saving and seed
            banking practices unique to your region.
          </p>

          <ul className="event-popup-points">
            <li>🗓 Deadline: <strong>20th February</strong></li>
            <li>📍 Regions: Central, Northern, Western, Southern & Eastern Africa</li>
            <li> Maximum 5 pages</li>
            <li> Include quality photos with clear captions</li>
            <li> Focus on seed preservation methods & storage materials</li>
            <li> Best module per region wins <strong>$100 Award</strong></li>
          </ul>

          <div className="event-popup-actions">
            <a
              href="mailto:admin@inofoafrica.org?subject=INOFO Africa Contribution Submission"
              className="event-popup-cta primary"
            >
              Submit Contribution <FaArrowRight />
            </a>

            <a
              href="mailto:info@inofoafrica.org?subject=Inquiry about INOFO Africa Call for Contributions"
              className="event-popup-cta secondary"
            >
              Make an Inquiry <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPopup;