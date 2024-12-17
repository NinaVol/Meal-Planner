const MyMealsAndIngredients = ({selectedDay, updatedDay}) => {

    const editMyMeal = (myInput,value) => {
        updatedDay({
            ...selectedDay,
            [myInput]: value
        })
    }


    if (!selectedDay) return <p></p>
    
    return(
        <div className="whole-plan">           
          
            <input 
            type="text" 
            className="myInput"
            placeholder="Today is..."
            id='title'
            value={selectedDay.title}
            onChange={(e) => editMyMeal('title', e.target.value)}
            />

            <textarea 
            placeholder="Write your meal plan here"
            id='mealForADay'
            value={selectedDay.mealForADay}
            onChange={(e) => editMyMeal('mealForADay',e.target.value)}
            />

            <textarea 
            placeholder="Lest of ingredients"
            id="ingredients"
            value={selectedDay.ingredients}
            onChange={(e) => editMyMeal('ingredients',e.target.value)}
            />
        
        </div>
    )
}

export default MyMealsAndIngredients;