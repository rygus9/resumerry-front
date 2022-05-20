export default function DislikeIcon({ isTrue = false }: { isTrue?: boolean }) {
  return (
    <svg
      className="w-10 h-10"
      viewBox="0 0 37 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={isTrue ? 2 : 1}
    >
      <path d="M8.25 9.5L14 15.25" stroke="#FF0000" strokeLinecap="round" />
      <path
        d="M28.25 9.75L22.25 15.75"
        stroke="#FF0000"
        strokeLinecap="round"
      />
      <path
        d="M10.25 21L26 17.25L24 21"
        stroke="#FF0000"
        strokeLinecap="round"
      />
    </svg>
  );
}
