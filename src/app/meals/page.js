import React from 'react'

export default async function mealspage() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
    const { meals } = await response.json()
    console.log(meals);

    return (
        <>
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                {meals.map((meal) => <div key={meal.idMeal} class="h-32 rounded-lg bg-gray-100">
                    <h2>{meal.strMeal}</h2>
                    <img className='h-80' src={meal.strMealThumb} alt="" />
                </div>
                )}

            </div>
        </>
    )
}
