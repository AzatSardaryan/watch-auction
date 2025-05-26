import styles from "./WatchCard.module.css";
import { Link } from "react-router-dom";

function WatchCard({ watch }) {
  return (
    <div className={styles.card}>
      <img src={watch.image} alt={watch.title} className={styles.image} />
      <h2 className={styles.title}>{watch.title}</h2>
      <p className={styles.price}>Starting at ${watch.startingPrice}</p>
      <Link to={`/watch/${watch.id}`} className={styles.button}>
        View Details
      </Link>
    </div>
  );
}

export default WatchCard;
