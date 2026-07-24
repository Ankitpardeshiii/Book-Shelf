import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TermsOfService.css';

export default function TermsOfService() {
  /* Force light mode on this page */
  useEffect(() => {
    const root = document.documentElement;
    const prev = root.getAttribute('data-theme');
    root.setAttribute('data-theme', 'light');
    window.scrollTo(0, 0);
    return () => {
      if (prev) root.setAttribute('data-theme', prev);
      else root.removeAttribute('data-theme');
    };
  }, []);

  const lastUpdated = 'July 25, 2025';

  return (
    <div className="tos-page">
      {/* ── Custom Navbar ── */}
      <header className="tos-nav">
        <div className="tos-nav__inner">
          <Link to="/" className="tos-nav__brand">
            <span className="tos-nav__icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </span>
            BookShelf
          </Link>
          <div className="tos-nav__links">
            <Link to="/about">About</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/" className="tos-nav__back">← Back to Store</Link>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="tos-hero">
        <div className="tos-hero__inner">
          <div className="tos-hero__badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Legal Document
          </div>
          <h1 className="tos-hero__title">Terms of Service</h1>
          <p className="tos-hero__updated">Last updated: {lastUpdated}</p>
          <p className="tos-hero__intro">
            Please read these terms carefully before using BookShelf. By accessing or using our
            platform, you agree to be bound by these terms.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <article className="tos-content">
        <div className="tos-content__inner">

          {/* Table of Contents */}
          <nav className="tos-toc">
            <h2 className="tos-toc__heading">In this document</h2>
            <ol className="tos-toc__list">
              <li><a href="#acceptance">Acceptance of Terms</a></li>
              <li><a href="#eligibility">Eligibility</a></li>
              <li><a href="#accounts">User Accounts</a></li>
              <li><a href="#purchases">Purchases & Payments</a></li>
              <li><a href="#content">User Content</a></li>
              <li><a href="#ip">Intellectual Property</a></li>
              <li><a href="#prohibited">Prohibited Conduct</a></li>
              <li><a href="#disclaimers">Disclaimers</a></li>
              <li><a href="#liability">Limitation of Liability</a></li>
              <li><a href="#termination">Termination</a></li>
              <li><a href="#governing">Governing Law</a></li>
              <li><a href="#changes-tos">Changes to Terms</a></li>
              <li><a href="#contact-tos">Contact Us</a></li>
            </ol>
          </nav>

          {/* Sections */}
          <div className="tos-sections">

            <section className="tos-section" id="acceptance">
              <div className="tos-section__marker">01</div>
              <h2 className="tos-section__title">Acceptance of Terms</h2>
              <p>By accessing or using BookShelf ("the Platform"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service ("Terms"). If you do not agree with any part of these Terms, you must discontinue use of the Platform immediately.</p>
              <p>These Terms constitute a legally binding agreement between you ("User," "you") and BookShelf ("we," "us," "our"). We reserve the right to update these Terms at any time, and your continued use of the Platform constitutes acceptance of any modifications.</p>
            </section>

            <section className="tos-section" id="eligibility">
              <div className="tos-section__marker">02</div>
              <h2 className="tos-section__title">Eligibility</h2>
              <p>To use BookShelf, you must:</p>
              <ul>
                <li>Be at least 13 years of age (or the minimum age in your jurisdiction).</li>
                <li>Have the legal capacity to enter into a binding agreement.</li>
                <li>Not be prohibited from using the Platform under applicable laws.</li>
              </ul>
              <p>If you are using BookShelf on behalf of an organization, you represent that you have authority to bind that organization to these Terms.</p>
            </section>

            <section className="tos-section" id="accounts">
              <div className="tos-section__marker">03</div>
              <h2 className="tos-section__title">User Accounts</h2>
              <p>When you create an account on BookShelf, you agree to:</p>
              <ul>
                <li>Provide accurate, complete, and current information.</li>
                <li>Maintain the security and confidentiality of your login credentials.</li>
                <li>Notify us immediately of any unauthorized access or security breach.</li>
                <li>Accept responsibility for all activities that occur under your account.</li>
              </ul>
              <p>We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent activity.</p>
            </section>

            <section className="tos-section" id="purchases">
              <div className="tos-section__marker">04</div>
              <h2 className="tos-section__title">Purchases &amp; Payments</h2>
              <p>When purchasing books through BookShelf:</p>
              <ul>
                <li><strong>Pricing:</strong> All prices are displayed in the currency indicated and include applicable taxes unless stated otherwise.</li>
                <li><strong>Payment:</strong> We accept major credit cards, debit cards, and supported digital wallets. Payment is processed securely through third-party providers.</li>
                <li><strong>Confirmation:</strong> A purchase confirmation will be sent to your registered email address.</li>
                <li><strong>Refunds:</strong> Physical books may be returned within 14 days of delivery if in original condition. Digital content purchases are final unless required otherwise by law.</li>
              </ul>
              <div className="tos-callout">
                <div className="tos-callout__icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </div>
                <p>We never store your payment card details. All transactions are processed by PCI-DSS compliant payment processors.</p>
              </div>
            </section>

            <section className="tos-section" id="content">
              <div className="tos-section__marker">05</div>
              <h2 className="tos-section__title">User Content</h2>
              <p>You may submit reviews, ratings, wishlists, and other content ("User Content") on BookShelf. By doing so, you:</p>
              <ul>
                <li>Grant us a non-exclusive, royalty-free, worldwide license to use, display, and distribute your User Content on the Platform.</li>
                <li>Represent that you own or have rights to the content you submit.</li>
                <li>Agree not to post content that is defamatory, obscene, infringing, or otherwise unlawful.</li>
              </ul>
              <p>We reserve the right to remove User Content that violates these Terms without prior notice.</p>
            </section>

            <section className="tos-section" id="ip">
              <div className="tos-section__marker">06</div>
              <h2 className="tos-section__title">Intellectual Property</h2>
              <p>All content on BookShelf — including but not limited to text, graphics, logos, icons, images, audio clips, software, and compilations — is the property of BookShelf or its content suppliers and is protected by copyright and trademark laws.</p>
              <p>You may not:</p>
              <ul>
                <li>Reproduce, distribute, or create derivative works from Platform content without express written permission.</li>
                <li>Use our trademarks, service marks, or logos without prior authorization.</li>
                <li>Scrape, crawl, or use automated means to access Platform content for commercial purposes.</li>
              </ul>
            </section>

            <section className="tos-section" id="prohibited">
              <div className="tos-section__marker">07</div>
              <h2 className="tos-section__title">Prohibited Conduct</h2>
              <p>When using BookShelf, you agree <strong>not</strong> to:</p>
              <ul>
                <li>Violate any applicable laws, regulations, or third-party rights.</li>
                <li>Use the Platform for any fraudulent or deceptive purpose.</li>
                <li>Attempt to gain unauthorized access to any part of the Platform or its systems.</li>
                <li>Introduce malware, viruses, or other harmful code.</li>
                <li>Interfere with the proper functioning of the Platform.</li>
                <li>Impersonate another person or entity.</li>
                <li>Harvest or collect personal information of other users without consent.</li>
              </ul>
            </section>

            <section className="tos-section" id="disclaimers">
              <div className="tos-section__marker">08</div>
              <h2 className="tos-section__title">Disclaimers</h2>
              <p>BookShelf is provided on an <strong>"as is"</strong> and <strong>"as available"</strong> basis. We make no warranties, express or implied, regarding:</p>
              <ul>
                <li>The accuracy, completeness, or reliability of any content on the Platform.</li>
                <li>Uninterrupted or error-free access to the Platform.</li>
                <li>The security of data transmitted to or from the Platform (though we take reasonable precautions).</li>
              </ul>
              <p>We do not warrant that the Platform will meet your specific requirements or expectations.</p>
            </section>

            <section className="tos-section" id="liability">
              <div className="tos-section__marker">09</div>
              <h2 className="tos-section__title">Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, BookShelf and its affiliates, officers, employees, and agents shall not be liable for:</p>
              <ul>
                <li>Any indirect, incidental, special, consequential, or punitive damages.</li>
                <li>Loss of profits, data, or goodwill arising from your use of the Platform.</li>
                <li>Any damages resulting from unauthorized access to your account or personal data.</li>
              </ul>
              <p>Our total aggregate liability shall not exceed the amount you have paid to BookShelf in the 12 months preceding the claim.</p>
            </section>

            <section className="tos-section" id="termination">
              <div className="tos-section__marker">10</div>
              <h2 className="tos-section__title">Termination</h2>
              <p>We may suspend or terminate your access to BookShelf at any time, with or without cause, and with or without notice. Upon termination:</p>
              <ul>
                <li>Your right to use the Platform ceases immediately.</li>
                <li>We may delete your account and associated data, subject to our data retention policies.</li>
                <li>Provisions that by their nature should survive termination (including intellectual property, disclaimers, and limitation of liability) will remain in effect.</li>
              </ul>
              <p>You may also delete your account at any time through your account settings or by contacting us.</p>
            </section>

            <section className="tos-section" id="governing">
              <div className="tos-section__marker">11</div>
              <h2 className="tos-section__title">Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
              <p>Any disputes arising from these Terms or your use of BookShelf shall be resolved exclusively in the courts of Pune, Maharashtra, India.</p>
            </section>

            <section className="tos-section" id="changes-tos">
              <div className="tos-section__marker">12</div>
              <h2 className="tos-section__title">Changes to Terms</h2>
              <p>We may revise these Terms from time to time. When we make changes:</p>
              <ul>
                <li>We will update the "Last updated" date at the top of this page.</li>
                <li>For material changes, we will notify registered users via email.</li>
                <li>Continued use of BookShelf after changes constitutes acceptance of the revised Terms.</li>
              </ul>
            </section>

            <section className="tos-section" id="contact-tos">
              <div className="tos-section__marker">13</div>
              <h2 className="tos-section__title">Contact Us</h2>
              <p>If you have questions about these Terms of Service, please reach out:</p>
              <div className="tos-contact-card">
                <div className="tos-contact-card__row">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href="mailto:legal@bookshelf.com">legal@bookshelf.com</a>
                </div>
                <div className="tos-contact-card__row">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Pune, Maharashtra, India</span>
                </div>
              </div>
            </section>

          </div>
        </div>
      </article>

      {/* ── Custom Footer ── */}
      <footer className="tos-footer">
        <div className="tos-footer__inner">
          <div className="tos-footer__top">
            <Link to="/" className="tos-footer__brand">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              BookShelf
            </Link>
            <div className="tos-footer__links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <span className="tos-footer__links-active">Terms of Service</span>
            </div>
          </div>
          <div className="tos-footer__bottom">
            <p>© {new Date().getFullYear()} BookShelf. All rights reserved.</p>
            <p className="tos-footer__note">This document was last reviewed on {lastUpdated}.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
