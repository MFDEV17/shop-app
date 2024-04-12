import { cn } from "../../service/utils/cn";

const PlusIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      className={cn("stroke-current text-button_text_color", className)}
    >
      <path
        d="M3 18H33M18 3V33"
        stroke="current"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlusIcon;
