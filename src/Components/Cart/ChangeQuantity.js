const ChangeQuantity = ({quantity, setQuantity}) =>{
    const addQuantity = () =>{
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }
    const removeQuantity = () =>{
        if (quantity <= 1)return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }


    return(
        <div>
            <img onClick={addQuantity} className="dltImg" src={"https://img.icons8.com/ios-glyphs/512/macos-maximize.png"} alt=""/>
            <span>  { quantity } </span>
            <img onClick={removeQuantity} className="dltImg" src={"https://img.icons8.com/ios-glyphs/512/minus.png"} alt=""/>
        </div>
    )
}

export default ChangeQuantity;