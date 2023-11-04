import { useState, useEffect } from 'react';
import Quiz from "./Quiz"
import {QuizMarvel} from "../questions/index"

const Category = () => {

    const [category, setCategory] = useState({})
    const [openCategory, setOpenCategory] = useState(false)

    const handleClick = (e) => {
        const categoryName = e.target.innerHTML.toLowerCase()
        setOpenCategory(true)
        setCategory(categoryName)
    }

    const numberOfCategories = QuizMarvel[0].quizz.category
    let categories = []
    if (numberOfCategories) {
        categories = Object.keys(numberOfCategories).map((category, index) => {
            return (
                <button key={index} onClick={handleClick} style={{width: "150px", backgroundColor: "red", height: "35px", color: "white", marginRight:"5px"}}>{category.toUpperCase()}</button>
            )
        })
    }

    return (
        <div>
            { categories }
            { openCategory && <Quiz >{category}</Quiz> }    
        </div>
    );
};

export default Category;