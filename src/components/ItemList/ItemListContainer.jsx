import Item from "./Item"

function ItemListContainer() {
    return (
        <div>
            <h1>Productos en Stock</h1>
            {/* Prefiero llamar a la prop title y no greeting, para que ya quede armada con el nombre del producto */}
            <Item imgurl="/imgs/m2_1000gb.jpg" title="M2 1TB" price={120}> </Item>
            <Item imgurl="/imgs/sata_960gb.jpg" title="SSD Sata 960gb" price={100}> </Item>
        </div>
    )
}

export default ItemListContainer