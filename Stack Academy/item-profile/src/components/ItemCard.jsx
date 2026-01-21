function ItemCard({ item }) {
  return (
    <div className="item-card">
      <h3>{item.type === "person" ? "Student Profile" : "Product Profile"}</h3>

      <p><strong>Name:</strong> {item.name}</p>

      {item.type === "person" ? (
        <>
          <p><strong>Age:</strong> {item.age}</p>
          <p><strong>Major:</strong> {item.major}</p>
        </>
      ) : (
        <>
          <p><strong>Price:</strong> ${item.price}</p>
          <p><strong>Specs:</strong> {item.specs}</p>
        </>
      )}
    </div>
  );
}
export default ItemCard;    
