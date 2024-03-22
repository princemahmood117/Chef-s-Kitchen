const Main = ({ item, handleCart }) => {
  // console.log(handleCart);
  return (
    <div className="card p-2">
      <img className="w-[600px] h-[400px]" src={item.recipe_image} alt="recipe_image" />
      <h3 className="text-2xl">{item.recipe_name}</h3>
      <p className="mb-2">{item.short_description}</p>

      <h2>Ingredients : {item.ingredients.length}</h2>
      <div></div>
      <div className="flex justify-between mt-2 mb-2">
        <p>time: {item.preparing_time}</p>
        <p>calories: {item.calories}</p>
      </div>
      <button
        onClick={() => handleCart(item)}
        className="cook btn btn-primary mb-2 w-48"
      >
        Want to Cook
      </button>
    </div>
  );
};

export default Main;
