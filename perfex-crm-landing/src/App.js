import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <DiscountBanner />
      <PlansSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>Perfex CRM Automation</h1>
        <p>Streamline your business processes with intelligent automation</p>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <h2>Transform Your Customer Relationship Management</h2>
        <p>Automate repetitive tasks, enhance security, and boost productivity with our cutting-edge Perfex CRM automation solutions.</p>
      </div>
    </section>
  );
}

function DiscountBanner() {
  return (
    <section className="discount-banner">
      <div className="container">
        <h3>🎉 LIMITED TIME OFFER: 80% DISCOUNT ON ALL PLANS! 🎉</h3>
        <p>Take advantage of this exclusive offer for a limited time only. All our maintenance and automation plans are now available at 80% off the regular price.</p>
        <div className="savings">
          <p>Original prices slashed for incredible savings:</p>
          <ul>
            <li>Basic Plan: <span className="original-price">$99</span> <span className="discounted-price">$20/month</span></li>
            <li>Professional Plan: <span className="original-price">$249</span> <span className="discounted-price">$50/month</span></li>
            <li>Enterprise Plan: <span className="original-price">$499</span> <span className="discounted-price">$100/month</span></li>
          </ul>
        </div>
        <p className="cta-text">This is a rare opportunity to get premium Perfex CRM automation services at a fraction of the cost. Don't miss out!</p>
      </div>
    </section>
  );
}

function PlansSection() {
  const plans = [
    {
      name: "Basic Plan",
      price: "$20",
      originalPrice: "$99",
      period: "/month",
      features: [
        "Weekly automated backups",
        "Monthly security updates",
        "Basic performance monitoring",
        "Email support (24-48 hour response)",
        "Access to knowledge base",
        "Up to 2 support tickets per month"
      ],
      automationFeatures: [
        "Automated backup scheduling",
        "Basic system health checks",
        "Email notifications for critical issues"
      ],
      razorpayLink: "YOUR_BASIC_PLAN_RAZORPAY_LINK_HERE",
      planId: "basic"
    },
    {
      name: "Professional Plan",
      price: "$50",
      originalPrice: "$249",
      period: "/month",
      features: [
        "Daily automated backups",
        "Bi-weekly security updates",
        "Advanced performance monitoring",
        "Priority email support (12-24 hour response)",
        "Phone support (business hours)",
        "Access to premium knowledge base",
        "Up to 10 support tickets per month",
        "Custom report generation (monthly)"
      ],
      automationFeatures: [
        "Enhanced backup scheduling with retention policies",
        "Automated security scanning",
        "Performance optimization scripts",
        "Scheduled report generation",
        "System alert notifications"
      ],
      razorpayLink: "YOUR_PROFESSIONAL_PLAN_RAZORPAY_LINK_HERE",
      planId: "professional"
    },
    {
      name: "Enterprise Plan",
      price: "$100",
      originalPrice: "$499",
      period: "/month",
      features: [
        "Real-time automated backups",
        "Weekly security updates",
        "Premium performance monitoring",
        "24/7 priority support (4-hour response)",
        "Dedicated account manager",
        "Unlimited support tickets",
        "Custom report generation (weekly)",
        "API access for integration",
        "SLA guarantee (99.9% uptime)"
      ],
      automationFeatures: [
        "Real-time backup with incremental sync",
        "Automated security patch deployment",
        "Intelligent performance tuning",
        "Advanced analytics and reporting",
        "Automated failover systems",
        "Custom workflow automation",
        "Integration with third-party tools"
      ],
      razorpayLink: "YOUR_ENTERPRISE_PLAN_RAZORPAY_LINK_HERE",
      planId: "enterprise"
    }
  ];

  return (
    <section className="plans-section">
      <div className="container">
        <h2 className="section-title">Choose Your Plan</h2>
        <div className="plans-container">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }) {
  return (
    <div className={`plan-card ${plan.planId}-plan`}>
      <h3 className="plan-name">{plan.name}</h3>
      <div className="plan-pricing">
        <div className="original-price">{plan.originalPrice}/month</div>
        <div className="discounted-price">{plan.price}{plan.period}</div>
      </div>
      <div className="plan-features">
        <h4>Features:</h4>
        <ul>
          {plan.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="automation-features">
        <h4>Automation Features:</h4>
        <ul>
          {plan.automationFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <a href={plan.razorpayLink} className="subscribe-btn">Subscribe Now</a>
    </div>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: "🔒",
      title: "AI-Powered Security",
      description: "Advanced threat detection and automated security updates to keep your data safe."
    },
    {
      icon: "🤖",
      title: "Intelligent Agents",
      description: "AI agents that handle customer support, sales assistance, and data entry automatically."
    },
    {
      icon: "📊",
      title: "Smart Analytics",
      description: "Real-time reporting and predictive analytics to drive business decisions."
    },
    {
      icon: "🔄",
      title: "Workflow Automation",
      description: "Automate repetitive tasks and streamline business processes with custom workflows."
    },
    {
      icon: "☁️",
      title: "Cloud Integration",
      description: "Seamless integration with popular cloud services and third-party applications."
    },
    {
      icon: "📈",
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization to ensure peak system performance."
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">Powerful Automation Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{feature.icon}</div>
      <h3 className="feature-title">{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2025 Perfex CRM Automation. All rights reserved.</p>
        <p>Secure payments processed by Razorpay</p>
      </div>
    </footer>
  );
}

export default App;