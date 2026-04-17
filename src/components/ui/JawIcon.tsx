import React from 'react';

interface JawIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const JawIcon: React.FC<JawIconProps> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Jaw shape */}
      <path d="M4 8v4a8 8 0 0 0 16 0V8" />
      
      {/* Teeth/Brackets */}
      <path d="M7 8v3" />
      <path d="M10 8v3.5" />
      <path d="M14 8v3.5" />
      <path d="M17 8v3" />
      
      {/* Braces Wire */}
      <path d="M4 10c2 1 14 1 16 0" />
    </svg>
  );
};

export default JawIcon;
