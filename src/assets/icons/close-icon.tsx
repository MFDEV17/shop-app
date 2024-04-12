import { cn } from "../../service/utils/cn";

const CloseIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      className={cn("stroke-current text-destructive_text_color", className)}
    >
      <path
        d="M7.66667 7.66667L10.9999 10.9999M10.9999 10.9999L14.3332 14.3332M10.9999 10.9999L7.66667 14.3332M10.9999 10.9999L14.3332 7.66667M11 21C5.47716 21 1 16.5229 1 11C1 5.47716 5.47716 1 11 1C16.5229 1 21 5.47716 21 11C21 16.5229 16.5229 21 11 21Z"
        stroke="current"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
