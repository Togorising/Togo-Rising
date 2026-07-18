export const mission =
  "Togo Rising connects the Togolese diaspora — students, professionals, entrepreneurs, and newcomers — so no one has to figure it out alone. We share opportunities, mentorship, and pathways to succeed wherever you are.";

export const orgEmail = "info@togorising.org";

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Networking", href: "/networking" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Newcomer Hub", href: "/newcomers" },
  { label: "Rising Professionals", href: "/professionals" },
  { label: "Shop Togo", href: "/shop-togo" },
  { label: "Contact", href: "/contact" },
];

export type Pillar = {
  title: string;
  description: string;
  href: string;
};

export const pillars: Pillar[] = [
  {
    title: "Networking",
    description:
      "A member directory, events, and warm introductions to Togolese diaspora wherever you're based.",
    href: "/networking",
  },
  {
    title: "Opportunities",
    description:
      "Jobs, scholarships, contracts, and grants shared inside the community first.",
    href: "/opportunities",
  },
  {
    title: "Newcomer Hub",
    description:
      "Mentor matching, language learning, school navigation, and career paths for those just arriving.",
    href: "/newcomers",
  },
  {
    title: "Rising Professionals",
    description:
      "Career mentorship, business start-up support, home buying, and FAFSA help as you build.",
    href: "/professionals",
  },
  {
    title: "Shop Togo",
    description:
      "Discover and support Togolese-owned businesses across the diaspora.",
    href: "/shop-togo",
  },
];

export type Section = {
  title: string;
  description: string;
};

export const networkingSections: Section[] = [
  {
    title: "Member Directory",
    description:
      "Find and connect with Togolese diaspora by city, industry, and interest. Search for people building in your field or living near you.",
  },
  {
    title: "Events",
    description:
      "Virtual meetups and in-person gatherings — mixers, cultural celebrations, and city meetups organized by the community.",
  },
  {
    title: "Introductions",
    description:
      "Ask for a warm introduction to someone in your field, your city, or your situation. No cold outreach required.",
  },
];

export const opportunitiesSections: Section[] = [
  {
    title: "Jobs",
    description:
      "Openings shared by community members and partner employers — inside referrals, not just job board listings.",
  },
  {
    title: "Scholarships",
    description:
      "Funding opportunities for Togolese students and professionals pursuing further education.",
  },
  {
    title: "Contracts",
    description:
      "Freelance, consulting, and project work shared within the network.",
  },
  {
    title: "Grants",
    description:
      "Funding for entrepreneurs, nonprofits, and community initiatives led by Togolese diaspora.",
  },
];

export const newcomerSections: Section[] = [
  {
    title: "Mentor Matching",
    description:
      "Get paired with someone who has already navigated what you're facing — new city, new job market, new systems.",
  },
  {
    title: "Language Learning",
    description:
      "Resources and conversation partners to build confidence in English, French, or both.",
  },
  {
    title: "School Navigation",
    description:
      "Help understanding enrollment, financial aid, and the school system for you or your kids.",
  },
  {
    title: "Career Paths",
    description:
      "Guidance on credential recognition, licensing, and translating your experience into your new market.",
  },
];

export const usaPathwaysSections: Section[] = [
  {
    title: "Military",
    description:
      "Information and connections for those considering military service as a pathway in the United States.",
  },
  {
    title: "Citizenship",
    description:
      "Guidance through the naturalization process, from eligibility to interview preparation.",
  },
  {
    title: "Career Pipelines",
    description:
      "Structured routes into in-demand fields, built with people who've gone through the process themselves.",
  },
];

export const professionalsSections: Section[] = [
  {
    title: "Career Mentorship",
    description:
      "One-on-one guidance from professionals further along in your field — for promotions, transitions, or starting over.",
  },
  {
    title: "Start a Business",
    description:
      "Support for Togolese entrepreneurs, from first idea to formation, funding, and first customers.",
  },
  {
    title: "Home Buying",
    description:
      "Understanding the process, the financing, and the pitfalls before you make the biggest purchase of your life.",
  },
  {
    title: "FAFSA Help",
    description:
      "Hands-on help completing financial aid forms for you or your children heading to college.",
  },
];

export const businessCategories: string[] = [
  "Food & Catering",
  "Fashion & Textiles",
  "Beauty & Wellness",
  "Professional Services",
  "Import / Export",
  "Arts & Media",
  "Real Estate",
  "Other",
];
