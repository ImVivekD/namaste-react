import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
    const {itemCards, title} = props?.data;
    const {showAccordian} = props;
    const {setShowIndex} = props;

    handleClick = () => {
        setShowIndex();
    }
    return (
        <div>
            <div className="flex justify-between mb-2 bg-gray-100 px-2 cursor-pointer" onClick={handleClick}>
                <div className="font-bold text-xl py-2 text-[#02060c]">{title}</div>
                <span  className="font-bold text-xl py-2">{showAccordian? "-": "+"}</span>
            </div>
            {showAccordian && (<div className="item"> 
                <ItemList items={itemCards} />
            </div>)}
        </div>
    )
}

export const NestedRestaurantCategory = (RestaurantCategory) => {
    return(props) => {
        const {title, categories} = props?.data;
        return(
            <>
            <div>{title}</div>
            {categories.map((item, index) => <RestaurantCategory data={item} key={index} /> )}
            
            </>
        )
    }
}

export default RestaurantCategory;