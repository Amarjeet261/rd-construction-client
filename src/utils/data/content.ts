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

export const marbleShort =
  "Premium Italian and Indian marble, hand-selected and installed with precision for a flawless finish.";
export const marbleLong =
  "From Makrana white to Statuario veining, choosing the right marble transforms a plain room into a timeless statement of luxury.";

export const features = [
  { title: "Flawless Finish", text: "Mirror-polished marble surfaces with seamless joints and consistent veining.", image: "/img7.jpeg" },
  { title: "Skilled Artisans", text: "Experienced craftsmen who cut, fit and polish every slab by hand.", image: "/img8.jpeg" },
  { title: "Premium Stone", text: "Hand-picked Makrana, Statuario and Onyx slabs from trusted quarries.", image: "/img9.jpeg" },
  { title: "Precision Fitting", text: "Accurate measurement and installation so every edge lines up perfectly.", image: "/img10.jpeg" },
];

export const services = [
  { title: "Marble Flooring", text: "Elegant polished marble floors for homes, offices and showrooms." },
  { title: "Wall Cladding", text: "Book-matched marble panels that give feature walls a luxurious look." },
  { title: "Kitchen Countertops", text: "Durable, stain-resistant marble and granite tops cut to your layout." },
  { title: "Staircase & Steps", text: "Slip-safe marble treads and risers finished with clean, sharp edges." },
  { title: "Polishing & Restoration", text: "Diamond polishing that brings dull, scratched marble back to a mirror shine." },
  { title: "Custom Inlay Work", text: "Intricate marble inlay, borders and medallions designed to your taste." },
];

export const projectCategories = [
  "All",
  "School",
  "Architecture",
  "House",
  "Mall",
  "Flat",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projects: { id: number; title: string; category: ProjectCategory; image: string }[] = [
  { id: 1, title: "Blueprint Planning", category: "Architecture", image: "/img1.jpeg" },
  { id: 2, title: "Site Engineer", category: "Architecture", image: "/img2.jpeg" },
  { id: 3, title: "City Tower", category: "Mall", image: "/img3.jpeg" },
  { id: 4, title: "Brick Work", category: "House", image: "/img4.jpeg" },
  { id: 5, title: "Interior Finish", category: "Flat", image: "/img5.jpeg" },
  { id: 6, title: "Client Meeting", category: "School", image: "/img6.jpeg" },
];


export const posts = [
  { title: "How to Choose the Right Marble", date: "21 Feb, 2025", text: marbleLong, image: "/img11.jpeg" },
  { title: "Marble Care & Maintenance Tips", date: "14 Mar, 2025", text: "Simple daily habits and the right cleaners keep marble glossy and stain-free for years.", image: "/img12.jpeg" },
  { title: "Italian vs Indian Marble", date: "02 Apr, 2025", text: "A practical comparison of cost, durability and look to help you pick the best stone.", image: "/img13.jpeg" },
];

export const testimonials = [
  {
    text: "RD Construction laid beautiful white marble across our entire home. The finish is flawless, the team was punctual, and the quality of the stone exceeded our expectations.",
    author: "Rohit Sharma",
    role: "Homeowner, Delhi",
  },
  {
    text: "Our showroom floor looks stunning. The marble polishing and fitting were handled with great precision and finished well ahead of schedule.",
    author: "Neha Verma",
    role: "Showroom Owner",
  },
];

export const clientLogos = [
  "Creative Build",
  "ARCHITECTURE",
  "inkling",
  "Cool Runnings",
  "HOMETASTICA",
];

export const footerTags = ["House", "School", "Mall", "Flat", "Architecture", "Interior"];

export const tweets = [
  "New arrival: Statuario white marble slabs now in stock.",
  "Tip: reseal your marble every 6-12 months to keep it stain-free.",
  "Another mirror-finish marble floor completed. See our gallery!",
];

export const heroImage = "/img3.jpeg";
export const servicesImage = "/img1.jpeg";
export const galleryImages = [9, 10, 14, 15, 16, 2].map((n) => `/img${n}.jpeg`);
