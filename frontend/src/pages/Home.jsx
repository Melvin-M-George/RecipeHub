import React from 'react'
import foodRecipe from "../assets/foodRecipe.png"

export default function Home() {
    return (
        <>
            <section className='home'>
                <div className='left'>
                    <h1>RecipeHub</h1>
                    <h5>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</h5>
                    <button>Share your recipe</button>
                </div>
                <div className='right'>
                    <img src={foodRecipe} width="320px" height="300px" alt="Food Recipe" />
                </div>
            </section>
            <div className='bg'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9E7676" fillOpacity="1" d="M0,32L30,48C60,64,120,96,180,112C240,128,300,128,360,112C420,96,480,64,540,69.3C600,75,660,117,720,160C780,203,840,245,900,224C960,203,1020,117,1080,90.7C1140,64,1200,96,1260,117.3C1320,139,1380,149,1410,154.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
            </div>

        </>
    )
}
