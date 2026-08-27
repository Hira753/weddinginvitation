export interface WeddingEvent {
  id: string;
  title: string;
  subtitle: string;
  urduTitle: string;
  date: string;
  displayDate: string;
  time: string;
  venue: string;
  location: string;
  dressCode?: string;
  description: string;
  iconName: string;
}

export interface RSVPFormData {
  fullName: string;
  mobileNumber: string;
  attendance: 'accept' | 'decline';
  guestCount: number;
  selectedEvents: string[];
  dietaryRestrictions?: string;
  message?: string;
}

export interface GuestDua {
  id: string;
  name: string;
  dua: string;
  timestamp: string;
}

export interface HostContact {
  side: "Groom's Family" | "Bride's Family";
  name: string;
  relation: string;
  phone: string;
  whatsapp: string;
}
