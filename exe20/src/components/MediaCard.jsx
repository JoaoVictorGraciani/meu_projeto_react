export default function MediaCard({ item }) {
  return (
    <div className="card">
      <img
        src={item.url}
        alt={item.title}
      />

      <p>{item.title}</p>
    </div>
    
  );

  <div className="card">
  <img src={item.url} alt={item.title} />
  <p>{item.title}</p>
 </div>
}