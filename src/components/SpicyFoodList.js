import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filter, setFilter] = useState("All")

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);

    setFoods([...foods, newFood])
  }

  function handleLiClick(id) {
    // setFoods(foods.filter((food)=>food.id!==id))

    let newFoods = [...foods]
    newFoods[id-1]["heatLevel"] = newFoods[id-1]["heatLevel"]+1

    setFoods(newFoods)
  }

  const filteredFoodList = filter==="All"? foods:foods.filter((food)=>food.cuisine===filter)

  const foodList = filteredFoodList.map((food) => (
    <li key={food.id} onClick={()=>handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <select onChange={(event)=>setFilter(event.target.value)} name="filter">
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
