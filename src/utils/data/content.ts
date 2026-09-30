export const contact = {
  email: "Designrdconstruction@gmail.com",
  phone: "+91 9953125174",
  whatsapp: "919953125174",
};

export const socialLinks = [
  { label: "Facebook", short: "f", href: "#" },
  { label: "Twitter", short: "t", href: "#" },
  { label: "LinkedIn", short: "in", href: "#" },
  { label: "Google Plus", short: "g+", href: "#" },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Project", href: "#project" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

export const loremShort =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
export const loremLong =
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.";

export const features = [
  { title: "Quality Work", text: loremShort },
  { title: "Trusted Worker", text: loremShort },
  { title: "Heavy Materials", text: loremShort },
  { title: "Expert Engineer", text: loremShort },
];

export const services = [
  { title: "Architecture", text: loremShort },
  { title: "Isolation", text: loremShort },
  { title: "Renovation", text: loremShort },
  { title: "Maintenance", text: loremShort },
  { title: "Architecture", text: loremShort },
  { title: "Isolation", text: loremShort },
];

export const projectCategories = [
  "All",
  "School",
  "Bridge",
  "Architecture",
  "House",
  "Mall",
  "Flat",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projects: { id: number; title: string; category: ProjectCategory }[] = [
  { id: 1, title: "Blueprint Planning", category: "Architecture" },
  { id: 2, title: "Site Engineer", category: "Bridge" },
  { id: 3, title: "City Tower", category: "Mall" },
  { id: 4, title: "Brick Work", category: "House" },
  { id: 5, title: "Interior Finish", category: "Flat" },
  { id: 6, title: "Client Meeting", category: "School" },
];

export const team = [
  { name: "Muhibbur Rashid", role: "CEO" },
  { name: "Rashed Kabir", role: "Architect" },
  { name: "Masum Rana", role: "Site Engineer" },
  { name: "Sakib al Hasan", role: "Quality Manager" },
];

export const posts = [
  { title: "Blog Headline", date: "21 Feb, 2015", text: loremLong },
  { title: "Blog Headline", date: "21 Feb, 2015", text: loremLong },
  { title: "Blog Headline", date: "21 Feb, 2015", text: loremLong },
];

const testimonialText =
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.";

export const testimonials = [
  { text: testimonialText, author: "Grey White", role: "CEO/Google Inc" },
  { text: testimonialText, author: "Grey White", role: "CEO/Google Inc" },
];

export const clientLogos = [
  "Creative Build",
  "ARCHITECTURE",
  "inkling",
  "Cool Runnings",
  "HOMETASTICA",
];

export const footerTags = ["House", "School", "Mall", "Flat", "Architecture", "Bridge", "Interior"];

export const tweets = [
  "Very lovely design seen: http://themeforest.net/",
  "Very lovely design seen: http://themeforest.net/",
  "Very lovely design seen: http://themeforest.net/",
];
