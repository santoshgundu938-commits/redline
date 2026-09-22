import type { Signal } from "./SafetyLabel";

export type FlagSignal = Exclude<Signal, "notice">;

export type Flag = {
  id: string;
  signal: FlagSignal;
  rank: number;
  hazard: string;
  consequence: string;
  ask: string;
};

export type Segment = string | { flag: string; text: string };

export type Clause = {
  heading: string;
  segments: Segment[];
};

export const FLAGS: Flag[] = [
  {
    id: "indemnity",
    signal: "danger",
    rank: 1,
    hazard: "You cover the client's losses and legal costs.",
    consequence: "There's no cap, and it reaches claims you didn't cause.",
    ask: "indemnity limited to claims caused by your own work, capped at the fees paid.",
  },
  {
    id: "pay-if-paid",
    signal: "warning",
    rank: 2,
    hazard: "You get paid only if the client's customer pays them.",
    consequence: "You could lose the whole fee over a payment you have no say in.",
    ask: "payment within 45 days of each invoice, whatever the client's customer does.",
  },
  {
    id: "renewal",
    signal: "caution",
    rank: 3,
    hazard: "The contract renews itself every 12 months.",
    consequence: "Miss the 60-day notice window and you're in for another year on the same terms.",
    ask: "renewal only by written agreement.",
  },
];

export const CONTRACT: Clause[] = [
  {
    heading: "4. Payment",
    segments: [
      "Client will pay the fees set out in Schedule A within 45 days of each invoice. ",
      {
        flag: "pay-if-paid",
        text: "Client’s receipt of payment from its customer is an absolute condition precedent to Client’s obligation to pay Contractor.",
      },
    ],
  },
  {
    heading: "7. Term",
    segments: [
      {
        flag: "renewal",
        text: "This Agreement shall automatically renew for successive 12-month terms unless either party gives 60 days’ written notice.",
      },
      " Either party may end this Agreement for material breach on 30 days’ written notice.",
    ],
  },
  {
    heading: "9. Indemnification",
    segments: [
      {
        flag: "indemnity",
        text: "Contractor shall indemnify, defend and hold harmless Client from any and all claims, losses and expenses, including attorneys’ fees, arising out of or relating to the Services.",
      },
    ],
  },
];
