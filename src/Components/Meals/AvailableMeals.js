import { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function AvaialbleMeals() {
	const [meals, setMeals] = useState([]);
	const {isLoading, error, sendRequest: fetchMeals} = useHttp();

	useEffect(() => {
		const transformMeals = (mealsObj) => {
			const loadedMeals = [];

			for (const mealsKey in mealsObj) {
				loadedMeals.push({id: mealsKey, name: mealsObj[mealsKey].name, description: mealsObj[mealsKey].description, price: mealsObj[mealsKey].price})
			}

			setMeals(loadedMeals);
		};
		fetchMeals({
			url: "https://react-http-25a0f-default-rtdb.firebaseio.com/meals.json"
		})
	})

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem object={meal} />
          ))}
        </ul>
      </Card>
    </section>
  );
}

export default AvaialbleMeals;
