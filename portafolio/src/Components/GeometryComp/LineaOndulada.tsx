function LineaOndulada({ color = "var(--action-primary)" }) {
  return (
    <div className="w-full max-w-64 p-2">
      <svg
        viewBox="0 0 260 40"
        className="w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 5 20 C 25 5, 45 32, 68 19 S 106 7, 128 19 S 165 32, 190 18 S 225 5, 250 19"
          fill="none"
          stroke={color}
          strokeWidth="4.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default LineaOndulada;
