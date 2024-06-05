import './Bottle.css'
const Bottle = ({bottle}) => {
    const {name, price, img} = bottle;
    return (
        <div className="bottle">
            <h2>Bottle: {name}</h2>
            <p>Price: {price}</p>
            <img src={img} alt="" />
        </div>
    );
};

export default Bottle;