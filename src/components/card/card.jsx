function CardProduct({name, img, price}) {
    return (
        <div className="border-violet-500 border-2 border-solid">
            <img src={img} alt="" width={200} />
            <h2>{name}</h2>
            <p>{price}</p>
        </div>
    )
}

export default CardProduct