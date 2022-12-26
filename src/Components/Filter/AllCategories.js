import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div>
            <h1>What kind of dinner do you prefer?</h1>
            {['ALL', 'MEAT', 'SOUPS', 'SALADS', 'FISH'].map((category, index) => (
            <Filter key={index} category={category}/>
            ))}
            
        </div>
    );
};
export default AllCategories;