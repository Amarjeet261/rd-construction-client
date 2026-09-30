import { Mail, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import { contact } from "@/utils/data/content";

type ContactItem = { label: string; value: string; icon: LucideIcon };

export const data: {
  heading: string;
  subheading: string;
  description: string;
  contacts: ContactItem[];
  service: string[];
} = {
  heading: "Let's Build Your",
  subheading: "Dream Project",
  description:
    "Tell us about your construction, renovation or design needs and our team will get back to you with a plan and a quote.",
  contacts: [
    { label: "Call Us", value: contact.phone, icon: Phone },
    { label: "WhatsApp", value: contact.phone, icon: MessageCircle },
    { label: "Email", value: contact.email, icon: Mail },
  ],
  service: ["Architecture", "Renovation", "Isolation", "Maintenance", "Interior", "Other"],
};
