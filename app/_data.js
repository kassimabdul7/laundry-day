export const COLORS = {
  orange: "#F58220",
  green: "#6CC04A",
  blue: "#1FA7E1",
  dark: "#0E6BA8",
  ink: "#333333",
  line: "#E8E8E8",
  bg: "#FFFFFF"
};

export const BRAND = {
  phoneTel: "+15104022637",
  phoneDisplay: "(510) 402-2637"
};

export const LOCATIONS = [
  {
    slug: "union-city",
    city: "Union City",
    store: "El Mercado Laundry",
    addressLine1: "34300 Alvarado-Niles Rd",
    cityStateZip: "Union City, CA 94587",
    hours: "Mon–Sun: 6am – 10pm",
    wdf: true
  },
  {
    slug: "pleasanton",
    city: "Pleasanton",
    store: "Plaza Speed Wash",
    addressLine1: "4241 First St",
    cityStateZip: "Pleasanton, CA 94566",
    hours: "Mon–Sun: 7am – 10pm"
  },
  {
    slug: "newark",
    city: "Newark",
    store: "Super Wash & Dry",
    addressLine1: "35118 Newark Blvd",
    cityStateZip: "Newark, CA 94560",
    hours: "Mon–Sun: 6am – 10pm"
  },
  {
    slug: "fremont",
    city: "Fremont",
    store: "Walnut Plaza Launderland",
    addressLine1: "3185 Walnut Ave",
    cityStateZip: "Fremont, CA 94538",
    hours: "Temporarily Closed (Due to Fire)",
    note: "Wash, Dry & Fold moved to Union City."
  }
];

export const WDF = {
  price: "$2 / lb",
  minimum: "11 lb minimum",
  note: "Union City only. Weekly hours may change—call to confirm same-day drop-off.",
  schedule: [
    { day: "Monday", hours: "8:00am – 2:30pm" },
    { day: "Tuesday", hours: "8:00am – 7:00pm" },
    { day: "Wednesday", hours: "11:00am – 5:00pm" },
    { day: "Thursday", hours: "8:00am – 6:00pm" },
    { day: "Friday", hours: "10:00am – 5:00pm" },
    { day: "Saturday", hours: "10:00am – 5:00pm" },
    { day: "Sunday", hours: "10:00am – 5:00pm" }
  ]
};
