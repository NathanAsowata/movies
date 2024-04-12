import styles from "./styles.module.scss";

const LoadingSkeleton = () => {
	return (
		<div className={styles.container}>
			<div className={styles.spinner}></div>
		</div>
	);
};

export default LoadingSkeleton;
