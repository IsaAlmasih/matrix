import styles from "./FileDownloadButton.module.scss";
export const FileDownloadButton = ({ fileName, fileSrc }) => (
  <div>
    <button className={styles.button}>
      <a href={fileSrc} download={fileName} target="_blank" rel="noreferrer">
        {fileName}
      </a>
    </button>
  </div>
);
