import { cn } from "../../service/utils/cn"

export const ChevronIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
      className={cn("stroke-current text-hint_color", className)}
    >
      <path
        d="M13 1.5L7 7.5L1 1.5"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
