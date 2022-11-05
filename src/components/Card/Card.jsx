import React from "react";
import styles from "./Card.module.scss";

const Card = ({ art }) => {
	const isRegular = () => {
		if (art.type === "Regular") {
			return true;
		}
	};

	const isAuthor = () => {
		if (art.type === "Author") {
			return true;
		}
	};

	return (
		<article className={styles.article}>
			{isRegular() ? (
				<div className={styles.img}>
					<img
						src={art.img}
						alt=""
						width="100%"
					/>
				</div>
			) : (
				<></>
			)}
			<div
				className={`${styles.cardBody} ${
					isAuthor() ? styles.bodyAuthor : ""
				}`}>
				<h3 className={styles.title}>
					{art.lead ? (
						<span className={styles.lead}>{art.lead}. </span>
					) : (
						<></>
					)}
					{art.title}
				</h3>
				<span className={styles.subhead}>{art.subHead}</span>
				{isAuthor() ? (
					<div className={styles.authorImg}>
						<img
							src={art.authorImg}
							alt=""
							width="100%"
						/>
					</div>
				) : (
					<></>
				)}

				{art.author ? (
					<span className={styles.author}>Por {art.author}</span>
				) : (
					<></>
				)}
			</div>
		</article>
	);
};

export default Card;
