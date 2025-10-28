export default function Logo() {
  return (
    <div className="py-4">
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        stroke="black"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M8,32 
           Q16,8 32,32 
           Q48,56 56,32"
          fill="none"
        />

        <circle cx="8" cy="32" r="4" fill="black" />
        <circle cx="56" cy="32" r="4" fill="black" />
      </svg>
    </div>
  );
}
