

function Card(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
        <h1>PRODUCTS DEATAILS
        </h1>
        <img src={props.image} alt={props.title} />
        <h2>title: {props.title}</h2>
        <p>Price: ${props.price}</p>
    </div>
  )
}

export default Card