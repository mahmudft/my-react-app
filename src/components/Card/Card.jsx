
import "./index.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Card({el, active}) {
    return (
        <div className="card">
            <div>
                <img style={{objectFit: "fit", width: "100%"}}  src={el.gallery[0]} alt=""/>
            </div>
            <div>
                <h5>{el.name}</h5>
                <span>{el.prices[0].currency.symbol} {el.prices[0].amount}</span>
                <div style={{display: "flex",flexDirection: "column", gap: "10px"}}>
                    {el.attributes.map(prop => {
                        if(prop.id == "Color"){
                            return (
                                <div style={{display: "flex", gap: "10px"}}>
                                    {prop.items.map(color => {
                                return <div className="colorCubic" style={{backgroundColor: color.value, width: "30px", height: "30px"}}></div>
                           })}
                                </div>
                            )
                        }else {
                            return (
                                <div style={{display: "flex", gap: "10px"}}>
                                    {prop.items.map(size => {
                                return <div className="valueCubic" style={{border: "1px solid gray",width: "50px", height: "30px"}}>{size.value}</div>
                           })}
                                </div>
                            )
                        }
                    })}
                </div>
                <div className="green_shop">
                    <ShoppingCartIcon style={{color: "greenyellow"}}/>
                </div>
            </div>
            {/* {(el.prices[0].amount > 1000) && <div style={{position: "absolute"}} className="availibility">Product is Elite</div>} */}
            {!el.inStock && <div style={{position: "absolute"}} className="availibility">Product is not available</div>}
        </div>
    )
}