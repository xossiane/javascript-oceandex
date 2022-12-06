export default function Like({ liked = false, size }) {
  const color = "#ffffff";
  return (
    <>
      {liked ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill={color}
            width={size}
            height={size}
            d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 22 22"
          fill="none"
          preserveAspectRatio="xMaxYMax meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.8906 2.03906C16.625 0.125 13.1484 0.398438 11 2.625C8.8125 0.398438 5.33594 0.125 3.07031 2.03906C0.140625 4.5 0.570312 8.52344 2.67969 10.6719L9.51562 17.6641C9.90625 18.0547 10.4141 18.2891 11 18.2891C11.5469 18.2891 12.0547 18.0547 12.4453 17.6641L19.3203 10.6719C21.3906 8.52344 21.8203 4.5 18.8906 2.03906ZM17.9531 9.34375L11.1172 16.3359C11.0391 16.4141 10.9609 16.4141 10.8438 16.3359L4.00781 9.34375C2.5625 7.89844 2.28906 5.16406 4.28125 3.48438C5.80469 2.19531 8.14844 2.39062 9.63281 3.875L11 5.28125L12.3672 3.875C13.8125 2.39062 16.1562 2.19531 17.6797 3.44531C19.6719 5.16406 19.3984 7.89844 17.9531 9.34375Z"
            fill={color}
            width={size}
            height={size}
          />
        </svg>
      )}{" "}
    </>
  );
}