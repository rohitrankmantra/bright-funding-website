import {
  HiCash,
  HiCreditCard,
  HiOfficeBuilding,
  HiTruck,
  HiCurrencyDollar,
  HiChartBar,
  HiShieldCheck,
  HiLightningBolt,
} from "react-icons/hi";

export const servicesData = [
  {
    slug: "merchant-cash-advance",
    name: "Merchant Cash Advance",
    shortName: "MCA",
    icon: HiCash,
    description: "Quick access to capital based on your future sales",
    fullDescription: "A Merchant Cash Advance (MCA) provides your business with a lump sum of capital in exchange for a percentage of future credit card sales. This flexible funding option is perfect for businesses with strong sales but limited traditional credit options.",
    features: [
      "Funding from $5,000 to $500,000",
      "Approval in as little as 24 hours",
      "No fixed monthly payments",
      "Repayment based on sales percentage",
      "No collateral required",
      "Bad credit accepted"
    ],
    benefits: [
      {
        title: "Fast Approval",
        description: "Get approved within 24 hours with minimal documentation"
      },
      {
        title: "Flexible Repayment",
        description: "Pay back as a percentage of daily sales - slower days mean smaller payments"
      },
      {
        title: "No Collateral",
        description: "Your future sales secure the advance, no personal assets required"
      },
      {
        title: "Use Funds Freely",
        description: "No restrictions on how you use the capital for your business"
      }
    ],
    requirements: [
      "Minimum 6 months in business",
      "At least $10,000 in monthly revenue",
      "Active business bank account",
      "Valid government-issued ID"
    ],
    fundingRange: "$5,000 - $500,000",
    approvalTime: "24-48 Hours",
    termLength: "3-18 Months",
    color: "primary"
  },
  {
    slug: "business-line-of-credit",
    name: "Business Line of Credit",
    shortName: "LOC",
    icon: HiCreditCard,
    description: "Revolving credit for ongoing business expenses",
    fullDescription: "A Business Line of Credit gives you access to a predetermined amount of funds that you can draw from as needed. Only pay interest on what you use, and as you repay, your credit line replenishes for future use.",
    features: [
      "Credit lines from $10,000 to $250,000",
      "Draw funds as needed",
      "Only pay interest on amount used",
      "Revolving credit - replenishes as you repay",
      "Quick online access to funds",
      "Competitive interest rates"
    ],
    benefits: [
      {
        title: "Pay Only for What You Use",
        description: "Interest is charged only on the amount you actually draw"
      },
      {
        title: "Revolving Access",
        description: "As you pay down the balance, credit becomes available again"
      },
      {
        title: "Financial Flexibility",
        description: "Perfect for managing cash flow gaps and unexpected expenses"
      },
      {
        title: "Build Business Credit",
        description: "Responsible use helps establish your business credit profile"
      }
    ],
    requirements: [
      "Minimum 1 year in business",
      "At least $100,000 in annual revenue",
      "Personal credit score of 600+",
      "Business bank account with 3+ months history"
    ],
    fundingRange: "$10,000 - $250,000",
    approvalTime: "1-3 Days",
    termLength: "6-24 Months",
    color: "accent"
  },
  {
    slug: "term-loans",
    name: "Business Term Loans",
    shortName: "Term Loans",
    icon: HiOfficeBuilding,
    description: "Traditional loans with fixed payments",
    fullDescription: "Business Term Loans provide a lump sum of capital with a fixed repayment schedule. Ideal for major purchases, expansions, or investments where you need predictable monthly payments over a set period.",
    features: [
      "Loan amounts from $25,000 to $500,000",
      "Fixed monthly payments",
      "Terms from 1 to 5 years",
      "Competitive fixed interest rates",
      "No prepayment penalties",
      "Use for any business purpose"
    ],
    benefits: [
      {
        title: "Predictable Payments",
        description: "Fixed monthly payments make budgeting easy and straightforward"
      },
      {
        title: "Lower Interest Rates",
        description: "Generally lower rates compared to other funding options"
      },
      {
        title: "Larger Amounts",
        description: "Access more capital for major business investments"
      },
      {
        title: "Build Credit History",
        description: "Consistent payments help build your business credit profile"
      }
    ],
    requirements: [
      "Minimum 2 years in business",
      "At least $150,000 in annual revenue",
      "Personal credit score of 650+",
      "Detailed business financials"
    ],
    fundingRange: "$25,000 - $500,000",
    approvalTime: "3-7 Days",
    termLength: "1-5 Years",
    color: "primary"
  },
  {
    slug: "equipment-financing",
    name: "Equipment Financing",
    shortName: "Equipment",
    icon: HiTruck,
    description: "Fund equipment purchases with the equipment as collateral",
    fullDescription: "Equipment Financing allows you to purchase or lease business equipment with the equipment itself serving as collateral. This makes approval easier and keeps your other assets free for additional financing.",
    features: [
      "Finance up to 100% of equipment cost",
      "New or used equipment accepted",
      "Terms from 2 to 7 years",
      "Equipment serves as collateral",
      "Fixed monthly payments",
      "Potential tax benefits (Section 179)"
    ],
    benefits: [
      {
        title: "Preserve Working Capital",
        description: "Keep cash available for operations while acquiring equipment"
      },
      {
        title: "Equipment as Collateral",
        description: "No additional collateral needed - the equipment secures the loan"
      },
      {
        title: "Tax Advantages",
        description: "Potential deductions under Section 179 for equipment purchases"
      },
      {
        title: "Own the Equipment",
        description: "Full ownership at the end of the loan term"
      }
    ],
    requirements: [
      "Minimum 1 year in business",
      "At least $75,000 in annual revenue",
      "Equipment quote or invoice",
      "Personal credit score of 600+"
    ],
    fundingRange: "$10,000 - $1,000,000",
    approvalTime: "2-5 Days",
    termLength: "2-7 Years",
    color: "accent"
  },
  {
    slug: "invoice-factoring",
    name: "Invoice Factoring",
    shortName: "Factoring",
    icon: HiCurrencyDollar,
    description: "Turn unpaid invoices into immediate cash",
    fullDescription: "Invoice Factoring converts your outstanding invoices into immediate working capital. Sell your accounts receivable at a discount and get cash within 24 hours, improving your cash flow without taking on debt.",
    features: [
      "Advance up to 90% of invoice value",
      "Funding within 24 hours",
      "No long-term contracts required",
      "We handle collections",
      "Credit decisions based on your customers",
      "Scalable with your business growth"
    ],
    benefits: [
      {
        title: "Immediate Cash Flow",
        description: "Convert 30, 60, or 90-day invoices into same-day cash"
      },
      {
        title: "Not a Loan",
        description: "Factoring is selling an asset, not taking on debt"
      },
      {
        title: "Outsourced Collections",
        description: "We handle the collection process professionally"
      },
      {
        title: "Grows With You",
        description: "Access more capital as your sales and invoices increase"
      }
    ],
    requirements: [
      "B2B or B2G business model",
      "Creditworthy customers",
      "Invoices free of liens",
      "Minimum $10,000 monthly in invoices"
    ],
    fundingRange: "$10,000 - $5,000,000",
    approvalTime: "24-48 Hours",
    termLength: "Ongoing",
    color: "primary"
  },
  {
    slug: "sba-loans",
    name: "SBA Loans",
    shortName: "SBA",
    icon: HiShieldCheck,
    description: "Government-backed loans with favorable terms",
    fullDescription: "SBA Loans are partially guaranteed by the U.S. Small Business Administration, allowing lenders to offer favorable terms including lower down payments, longer repayment terms, and competitive interest rates.",
    features: [
      "Loan amounts up to $5 million",
      "Terms up to 25 years",
      "Competitive interest rates",
      "Lower down payments",
      "Government guarantee reduces lender risk",
      "Multiple program options (7(a), 504, Microloans)"
    ],
    benefits: [
      {
        title: "Best Rates Available",
        description: "Government backing means lower interest rates for qualified borrowers"
      },
      {
        title: "Longer Terms",
        description: "Extended repayment periods reduce monthly payment amounts"
      },
      {
        title: "Lower Down Payments",
        description: "Preserve more of your capital with reduced upfront costs"
      },
      {
        title: "Flexible Use",
        description: "Use funds for working capital, equipment, real estate, and more"
      }
    ],
    requirements: [
      "Minimum 2 years in business",
      "Good personal credit (680+)",
      "No recent bankruptcies or defaults",
      "Detailed business plan and financials"
    ],
    fundingRange: "$50,000 - $5,000,000",
    approvalTime: "30-90 Days",
    termLength: "5-25 Years",
    color: "accent"
  },
  {
    slug: "working-capital",
    name: "Working Capital Loans",
    shortName: "Working Capital",
    icon: HiChartBar,
    description: "Short-term funding for day-to-day operations",
    fullDescription: "Working Capital Loans provide short-term funding to cover everyday business expenses like payroll, inventory, rent, and utilities. Keep your business running smoothly during slow periods or while waiting for receivables.",
    features: [
      "Funding from $5,000 to $500,000",
      "Fast approval process",
      "Short-term repayment options",
      "Flexible use of funds",
      "Minimal documentation required",
      "Weekly or monthly payment options"
    ],
    benefits: [
      {
        title: "Bridge Cash Flow Gaps",
        description: "Cover expenses while waiting for customer payments"
      },
      {
        title: "Seize Opportunities",
        description: "Take advantage of bulk discounts or time-sensitive deals"
      },
      {
        title: "Manage Seasonality",
        description: "Stay operational during slow seasons or cyclical downturns"
      },
      {
        title: "Quick Access",
        description: "Get funds fast when you need them most"
      }
    ],
    requirements: [
      "Minimum 6 months in business",
      "At least $8,000 in monthly revenue",
      "Active business bank account",
      "Basic business documentation"
    ],
    fundingRange: "$5,000 - $500,000",
    approvalTime: "24-72 Hours",
    termLength: "3-18 Months",
    color: "primary"
  },
  {
    slug: "startup-funding",
    name: "Startup Funding",
    shortName: "Startup",
    icon: HiLightningBolt,
    description: "Capital solutions for new businesses",
    fullDescription: "Startup Funding options are designed for entrepreneurs and new businesses that may not yet qualify for traditional financing. We offer creative solutions to help you launch and grow your vision.",
    features: [
      "Funding for businesses under 1 year old",
      "Revenue-based options available",
      "Personal credit considered",
      "Business credit building programs",
      "Mentorship and guidance included",
      "Flexible qualification criteria"
    ],
    benefits: [
      {
        title: "Launch Your Vision",
        description: "Get the capital needed to turn your business idea into reality"
      },
      {
        title: "Build Business Credit",
        description: "Establish credit history for future financing opportunities"
      },
      {
        title: "Expert Guidance",
        description: "Access to business advisors and resources"
      },
      {
        title: "Growth Path",
        description: "Clear pathway to larger funding as you grow"
      }
    ],
    requirements: [
      "Solid business plan",
      "Personal credit score of 650+",
      "Personal investment/equity",
      "Industry experience preferred"
    ],
    fundingRange: "$5,000 - $150,000",
    approvalTime: "3-7 Days",
    termLength: "6-24 Months",
    color: "accent"
  }
];

export const getServiceBySlug = (slug) => {
  return servicesData.find(service => service.slug === slug);
};

export const getAllServiceSlugs = () => {
  return servicesData.map(service => service.slug);
};
