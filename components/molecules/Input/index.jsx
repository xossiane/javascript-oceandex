import styles from "./Input.module.scss";

export default function Input() {
  return (
    <div className={styles.inputContainer}>
      
      <svg
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.inputContainer__icon}
      >
        <path
          d="M17.7539 15.8242L14.2383 12.3086C14.0625 12.168 13.8516 12.0625 13.6406 12.0625H13.0781C14.0273 10.832 14.625 9.28516 14.625 7.5625C14.625 3.55469 11.3203 0.25 7.3125 0.25C3.26953 0.25 0 3.55469 0 7.5625C0 11.6055 3.26953 14.875 7.3125 14.875C9 14.875 10.5469 14.3125 11.8125 13.3281V13.9258C11.8125 14.1367 11.8828 14.3477 12.0586 14.5234L15.5391 18.0039C15.8906 18.3555 16.418 18.3555 16.7344 18.0039L17.7188 17.0195C18.0703 16.7031 18.0703 16.1758 17.7539 15.8242ZM7.3125 12.0625C4.81641 12.0625 2.8125 10.0586 2.8125 7.5625C2.8125 5.10156 4.81641 3.0625 7.3125 3.0625C9.77344 3.0625 11.8125 5.10156 11.8125 7.5625C11.8125 10.0586 9.77344 12.0625 7.3125 12.0625Z"
          fill="#303943"
        />
      </svg>

      <input
        className={styles.inputContainer__box}
        type="text"
        aria-label="Search animal, locations, diet..."
        placeholder="Search animal, locations, diet..."
      />
    </div>
  );
}