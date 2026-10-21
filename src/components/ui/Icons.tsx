import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

const baseProps = (size: number | string = 24, className = '') => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className,
});

export const Sun = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

export const Moon = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

export const Cpu = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <rect width="16" height="16" x="4" y="4" rx="2" />
    <rect width="6" height="6" x="9" y="9" rx="1" />
    <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" />
  </svg>
);

export const ChevronDown = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const Menu = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

export const X = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const ArrowRight = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export const ArrowLeft = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="m12 19-7-7 7-7M19 12H5" />
  </svg>
);

export const ArrowUpRight = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="M7 7h10v10M7 17 17 7" />
  </svg>
);

export const Briefcase = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <rect width="20" height="14" x="2" y="6" rx="2" />
  </svg>
);

export const GraduationCap = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
    <path d="M22 10v6" />
    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
  </svg>
);

export const Sparkles = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4M22 5h-4M4 17v2M5 18H3" />
  </svg>
);

export const Bot = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="M12 8V4H8M16 4h-4" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2M20 14h2M15 13v2M9 13v2" />
  </svg>
);

export const Globe = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
  </svg>
);

export const Search = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export const Code2 = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16" />
  </svg>
);

export const TrendingUp = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

export const Boxes = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42z" />
    <path d="m7 16.5-4.74-2.85M7 16.5l5-3M7 16.5v5.17M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3z" />
    <path d="m17 16.5-5-3M17 16.5l4.74-2.85M17 16.5v5.17M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8z" />
    <path d="M12 8 7.26 5.15M12 8l4.74-2.85M12 8v5.5" />
  </svg>
);

export const Mail = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const MapPin = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const ShieldCheck = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const AlertCircle = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="8" y2="12" />
    <line x1="12" x2="12.01" y1="16" y2="16" />
  </svg>
);

export const Send = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

export const CheckCircle2 = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const CheckCircle = CheckCircle2;

export const Check = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Loader2 = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

export const Lock = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const Workflow = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <rect width="8" height="8" x="3" y="3" rx="2" />
    <path d="M7 11v4a2 2 0 0 0 2 2h4" />
    <rect width="8" height="8" x="13" y="13" rx="2" />
  </svg>
);

export const Terminal = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" x2="20" y1="19" y2="19" />
  </svg>
);

export const Server = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
    <line x1="6" x2="6.01" y1="6" y2="6" />
    <line x1="6" x2="6.01" y1="18" y2="18" />
  </svg>
);

export const Zap = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const Calendar = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="M8 2v4M16 2v4" />
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M3 10h18" />
  </svg>
);

export const Layers = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
  </svg>
);

export const Compass = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

export const TestTube2 = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3" />
    <path d="m16 2 6 6M12 16H4" />
  </svg>
);

export const Rocket = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

export const ShieldAlert = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="M12 8v4M12 16h.01" />
  </svg>
);

export const FileCode2 = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
    <polyline points="14 2 14 8 20 8" />
    <path d="m9 18 3-3-3-3M5 12l-3 3 3 3" />
  </svg>
);

export const FileCode = FileCode2;

export const HelpCircle = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" />
  </svg>
);

export const Clock = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const MessageSquare = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const Database = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <path d="M3 12A9 3 0 0 0 21 12" />
  </svg>
);

export const FolderGit2 = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5" />
    <circle cx="13" cy="12" r="2" />
    <path d="M18 19c-2.8 0-5-2.2-5-5v8" />
    <circle cx="18" cy="19" r="2" />
  </svg>
);

export const Building = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
    <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
  </svg>
);

export const Target = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export const Users = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const FileText = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4M10 9H8M16 13H8M16 17H8" />
  </svg>
);

export const Eye = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const Share2 = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
  </svg>
);

export const User = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export const Home = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export const BookOpen = ({ size = 24, className = '', ...props }: IconProps) => (
  <svg {...baseProps(size, className)} {...props}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);
