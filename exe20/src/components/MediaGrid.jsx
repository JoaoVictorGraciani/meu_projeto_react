import MediaCard from "./MediaCard";

export default function MediaGrid({ results }) {
  return (
    <div className="media-grid">
      {results.map((item) => (
        <MediaCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}