import Link from "next/link";

export default function Arrow({ href, white, size }) {
  const color = white ? "#ffffff" : "#000000";
  return (
    <Link href={`${href}`}>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={color}
          height="48"
          width="48"
          alt="Go back to previous page"
        >
          <path d="M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z" />
        </svg>
      </a>
    </Link>
  );
}
