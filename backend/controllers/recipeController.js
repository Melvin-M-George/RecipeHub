
const Recipes = require('../models/recipeSchema');


const getRecipes = async (req,res)=>{
    const recipes = await Recipes.find();
    return res.json(recipes);
}

const getRecipe =async (req,res)=>{
    const {id} = req.params;
    const recipe = await Recipes.findById(id);
    if(!recipe){
        return res.json({message:"Recipe not found"});
    }
    return res.json(recipe);
}
const addRecipe = async (req,res)=>{
    const {title, ingredients, instructions,time} = req.body;
    if(!title || !ingredients || !instructions || !time){
        res.json({message:"Required fields can not be empty"});
    }
    const newRecipe = await Recipes.create({
        title,
        ingredients,
        instructions,
        time
    });
    return res.json({message:"Recipe added successfully",newRecipe});
}
const editRecipe = async (req, res) => {
    try {
        const { title, ingredients, instructions, time } = req.body;
        const { id } = req.params;
        const recipe = await Recipes.findById(id);
        if (!recipe) {
            return res.json({message: "Recipe not found"});
        }
        const updatedRecipe = await Recipes.findByIdAndUpdate(id,
            {
                title,
                ingredients,
                instructions,
                time
            },
            { new: true }
        );
        return res.status(200).json({message: "Recipe updated successfully",updatedRecipe});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
const deleteRecipe = (req,res)=>{

}

module.exports = { 
    getRecipes,
    getRecipe,
    addRecipe,
    editRecipe,
    deleteRecipe
 };