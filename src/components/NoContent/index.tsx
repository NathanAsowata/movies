import styles from "./style.module.scss";

const NoContent = ({ message }: { message: string }) => {
	return <div className={styles.messageBox}>{message}</div>;
};

export default NoContent;
