import styles from "./Home.module.css";
import WatchCard from "../components/WatchCard";

const sampleWatches = [
  {
    id: 1,
    title: "Rolex Submariner",
    startingPrice: 8500,
    image:
      "https://images.unsplash.com/photo-1600185365483-26a9df3f1c56?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 2,
    title: "Omega Speedmaster",
    startingPrice: 6200,
    image:
      "https://images.unsplash.com/photo-1600185365570-5aabc998da00?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 3,
    title: "Tag Heuer Carrera",
    startingPrice: 4500,
    image:
      "https://images.unsplash.com/photo-1600185365581-c90f5ef58fb4?auto=format&fit=crop&w=600&q=60",
  },
];

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Watch Auction</h1>
      <p className={styles.subtitle}>
        Browse luxury watches, place competitive bids, or list your own
        timepieces for auction.
      </p>

      <div className={styles.grid}>
        {sampleWatches.map((watch) => (
          <WatchCard key={watch.id} watch={watch} />
        ))}
      </div>
    </div>
  );
}

export default Home;
