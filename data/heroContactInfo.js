import { Mail, MapPin, Phone } from "lucide-react";

export const heroContactInfo = [
    {
        id: 1,
        icon: <Mail strokeWidth={1.5} size={30} />,
        label: "Email",
        value: "contact@plumbing.com",
        href: "mailto:contact@plumbing.com",
    },
    {
        id: 2,
        icon: <MapPin strokeWidth={1.5} size={30} />,
        label: "Visit Our Office",
        value: "149W 70th St, 9000 Los Angeles, CA",
        href: "https://www.google.com/maps/search/?api=1&query=149W+70th+St+Los+Angeles+CA",
    },
    {
        id: 3,
        icon: <Phone strokeWidth={1.5} size={30} />,
        label: "Phone",
        value: "(234) 231 - 2123",
        href: "tel:+12342312123",
    },
];