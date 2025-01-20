export interface Mentor {
    name: string;
    expertise: string;
    image: string;
    linkedin?: string;
    designation?: string;
    bio?: string;
  }
  
  export interface TeamMember {
    name: string;
    role: string;
    image: string;
  }
  
  export interface AgendaItem {
    time: string;
    date: string;
    miniTitle: string;
    event: string;
    description: string;
  }

  export interface NavItems {
    href: string;
    title: string;
  }