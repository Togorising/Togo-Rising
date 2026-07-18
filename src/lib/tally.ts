export const tallyUrls = {
  join: process.env.NEXT_PUBLIC_TALLY_JOIN_URL || "#",
  opportunitySubmit: process.env.NEXT_PUBLIC_TALLY_OPPORTUNITY_SUBMIT_URL || "#",
  mentorSignup: process.env.NEXT_PUBLIC_TALLY_MENTOR_SIGNUP_URL || "#",
  newcomerIntake: process.env.NEXT_PUBLIC_TALLY_NEWCOMER_INTAKE_URL || "#",
  volunteer: process.env.NEXT_PUBLIC_TALLY_VOLUNTEER_URL || "#",
  businessListing: process.env.NEXT_PUBLIC_TALLY_BUSINESS_LISTING_URL || "#",
} as const;

export type TallyCtaKey = keyof typeof tallyUrls;
