
const Card = ({ item }) => {
    return (
    <figure className="card">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>{item.releaseYear}</p>
    </figure>
    );
};
export default Card