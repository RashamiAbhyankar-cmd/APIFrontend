import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
//import recipeimage from 'https://www.yummytummyaarthi.com/wp-content/uploads/2021/10/IMG_5049.jpeg';

import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [strMeal, setstrMeal] = useState('');
  const [strMealAlternate, setstrMealAlternate] = useState('');
  const [strArea, setstrArea] = useState('');
  const [strMealThumb, setstrMealThumb] = useState('');
  const [strTags, setstrTags] = useState('');
  const [strYoutube, setstrYoutube] = useState('');
  const [strSource, setstrSource] = useState('');
  const [strImageSource, setstrImageSource] = useState('');
  const [strCreativeCommonsConfirmed, setstrCreativeCommonsConfirmed] = useState('');
  const [dateModified, setdateModified] = useState('');
  const [strMeasure1, setstrMeasure1] = useState('');
  const [strMeasure2, setstrMeasure2] = useState('');
  const [strMeasure3, setstrMeasure3] = useState('');
  const [strMeasure4, setstrMeasure4] = useState('');
  const [strMeasure5, setstrMeasure5] = useState('');
  const [strMeasure6, setstrMeasure6] = useState('');
  const [strMeasure7, setstrMeasure7] = useState('');
  const [strMeasure8, setstrMeasure8] = useState('');
  const [strMeasure9, setstrMeasure9] = useState('');
  const [strMeasure10, setstrMeasure10] = useState('');
  const [strMeasure11, setstrMeasure11] = useState('');
  const [strMeasure12, setstrMeasure12] = useState('');
  const [strMeasure13, setstrMeasure13] = useState('');
  const [strMeasure14, setstrMeasure14] = useState('');
  const [strMeasure15, setstrMeasure15] = useState('');
  const [strMeasure16, setstrMeasure16] = useState('');
  const [strMeasure17, setstrMeasure17] = useState('');
  const [strMeasure18, setstrMeasure18] = useState('');
  const [strMeasure19, setstrMeasure19] = useState('');
  const [strMeasure20, setstrMeasure20] = useState('');
  const [strIngredient1, setstrIngredient1] = useState('');
  const [strIngredient2, setstrIngredient2] = useState('');
  const [strIngredient3, setstrIngredient3] = useState('');
  const [strIngredient4, setstrIngredient4] = useState('');
  const [strIngredient5, setstrIngredient5] = useState('');
  const [strIngredient6, setstrIngredient6] = useState('');
  const [strIngredient7, setstrIngredient7] = useState('');
  const [strIngredient8, setstrIngredient8] = useState('');
  const [strIngredient9, setstrIngredient9] = useState('');
  const [strIngredient10, setstrIngredient10] = useState('');
  const [strIngredient11, setstrIngredient11] = useState('');
  const [strIngredient12, setstrIngredient12] = useState('');
  const [strIngredient13, setstrIngredient13] = useState('');
  const [strIngredient14, setstrIngredient14] = useState('');
  const [strIngredient15, setstrIngredient15] = useState('');
  const [strIngredient16, setstrIngredient16] = useState('');
  const [strIngredient17, setstrIngredient17] = useState('');
  const [strIngredient18, setstrIngredient18] = useState('');
  const [strIngredient19, setstrIngredient19] = useState('');
  const [strIngredient20, setstrIngredient20] = useState('');
  const [strInstructions, setstrInstructions] = useState('');
  //const [idCategory, setidCategory] = useState('');
  const [strCategory, setstrCategory] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  //const [searchMeal, setSearchMeal] = useState('');
  const [searchstrMeal, setSearchstrMeal] = useState('');
  const [searchbyCategory, setSearchbyCategory] = useState('');
  const [searchbyid, setSearchbyid] = useState('9001');
  
  const [editdata, setEditdata] = useState({strMeal:'', strMealAlternate:'', 
            strCategory:'', strArea:'', 
            strInstructions:'', strMealThumb:'', 
            strTags:'', strYoutube:'', 
            strSource:'', strImageSource:'',
            strCreativeCommonsConfirmed:'', dateModified:'', 
            strIngredient1:'', strMeasure1:'', 
            strIngredient2:'', strMeasure2:'', 
            strIngredient3:'', strMeasure3:'', 
            strIngredient4:'', strMeasure4:'', 
            strIngredient5:'', strMeasure5:'', 
            strIngredient6:'', strMeasure6:'', 
            strIngredient7:'', strMeasure7:'', 
            strIngredient8:'', strMeasure8:'', 
            strIngredient9:'', strMeasure9:'', 
            strIngredient10:'', strMeasure10:'', 
            strIngredient11:'', strMeasure11:'', 
            strIngredient12:'', strMeasure12:'', 
            strIngredient13:'', strMeasure13:'', 
            strIngredient14:'', strMeasure14:'', 
            strIngredient15:'', strMeasure15:'', 
            strIngredient16:'', strMeasure16:'', 
            strIngredient17:'', strMeasure17:'', 
            strIngredient18:'', strMeasure18:'', 
            strIngredient19:'', strMeasure19:'', 
            strIngredient20:'', strMeasure20:'',
            idMeal:''});
            
  //const [editdata, setEditdata] = useState([]);
  // const [editdata, setEditdata] = useState({});
          

  useEffect(() => {
    fetchRecipes();
    fetchstrCategory();
    //fetchSearchRecipebyid();
    //fetchSearchRecipesbyCategory();
    //fetchSearchRecipebystrMeal();
  }, []);


  const fetchRecipes = async () => {
    //const response = await axios.get('http://localhost:5000/api/recipes');
    const response = await axios.get('https://myapibe.onrender.com/api/recipes');
    setRecipes(response.data);
    //console.log(response.data);
  };

  const fetchstrCategory = async () => {
    //const response = await axios.get('http://localhost:5000/api/categories');
    const response = await axios.get('https://myapibe.onrender.com/api/categories');
    setCategories(response.data);
    //console.log(response.data);
  };

  const fetchSearchRecipesbyCategory = async (query="Salad") => {
    //const response = await axios.get(`http://localhost:5000/api/recipes/search?q=${query}`);
    const response = await axios.get(`https://myapibe.onrender.com/api/recipes/search?q=${query}`);
    setRecipes(response.data);
    //console.log(query);
    //console.log(response.data);
    setSearchbyCategory('');
  };

  const fetchSearchRecipebystrMeal = async (query="Modak") => {
      //const response = await axios.get(`http://localhost:5000/api/recipes/searchbyMeal?q1=${query}`);
      const response = await axios.get(`https://myapibe.onrender.com/api/recipes/searchbyMeal?q1=${query}`);
    setRecipes(response.data);
    //console.log(query);
    //console.log(response.data);
    setSearchstrMeal('');
  };

  const handleDelete = async (id = '') => {
    if (!window.confirm('Are you sure you want to delete this recipe?')) {
    return;
  }
  try {
    //console.log('id is= ', id);
    //const response = await axios.delete(`http://localhost:5000/api/recipes/${id}`);
    const response = await axios.delete(`https://myapibe.onrender.com/api/recipes/${id}`);
    //await axios.delete('http://localhost:5000/api/recipes/${id}');
    //await axios.delete('http://localhost:5000/api/recipes/${id}');
    alert(`Recipe with id=${id} is deleted`);
  } catch (error) {
    console.error('Delete failed:', error);
    alert('Failed to delete recipe');
  }
  fetchRecipes();
};

/*
  const fetchSearchRecipebyid = async(query="11000") => {
    console.log('id should be=', query);
    const response = await axios.get(`http://localhost:5000/api/recipes/searchbyid?q2=${query}`);
    const data = response.data;
    console.log( 'search results=' , response.data[0]);
    //setRecipes(data);
    console.log(data[0]);
    //setEditdata(data); last change
    setEditdata(data[0]);
    //setSearchbyid(response.data[0].idMeal);
    setSearchbyid(query);
    //setEditdata(recipes[0]);
    //console.log(q3);
    console.log(editdata);
    //console.log(editdata?.idMeal);
    console.log(searchbyid);
    //setSearchbyid('');
  };
  */
// Newly added....
  const fetchSearchRecipebyid = async (query = "11000") => {
    //console.log('at start editdata is= ',editdata)
    try {
        //console.log('Fetching ID:', query);

        //const response = await axios.get(
        //    `http://localhost:5000/api/recipes/searchbyid?q2=${query}`

        //);

        const response = await axios.get(
            `https://myapibe.onrender.com/api/recipes/searchbyid?q2=${query}`
            
        );

        //const data = response.data;
        setEditdata(response.data[0]);
        //console.log('data before if', response.data[0]);
        if (Array.isArray(response.data) && response.data.length > 0) {
            //console.log("Fetched Item:", data[0]);
            //setEditdata(response.data[0]);         
            setSearchbyid(query);
            //console.log(editdata);
        } else {
            console.warn("No recipes found for this ID.");
        }

    } catch (error) {
        console.error("Error fetching recipe:", error);
    }
};


// newly added ^


  const displaystrCategory = () => {
    fetchstrCategory();
    //alert(categories.map(c => c.strCategory).join(', '));
    alert(categories.categories.map(c => c.strCategory).join(', '));
    //fetchstrCategory();
    setIsVisible(!isVisible); 
  };

  

  const addRecipe = async (e) => {
    e.preventDefault();
   // await axios.post('http://localhost:5000/api/recipes', { 
      await axios.post('https://myapibe.onrender.com/api/recipes', { 
            strMeal, strMealAlternate, 
            strCategory, strArea, 
            strInstructions, strMealThumb, 
            strTags, strYoutube, 
            strSource, strImageSource, 
            strCreativeCommonsConfirmed, dateModified, 
            strIngredient1, strMeasure1, 
            strIngredient2, strMeasure2, 
            strIngredient3, strMeasure3, 
            strIngredient4, strMeasure4, 
            strIngredient5, strMeasure5, 
            strIngredient6, strMeasure6, 
            strIngredient7, strMeasure7, 
            strIngredient8, strMeasure8, 
            strIngredient9, strMeasure9, 
            strIngredient10, strMeasure10, 
            strIngredient11, strMeasure11, 
            strIngredient12, strMeasure12, 
            strIngredient13, strMeasure13, 
            strIngredient14, strMeasure14, 
            strIngredient15, strMeasure15, 
            strIngredient16, strMeasure16, 
            strIngredient17, strMeasure17, 
            strIngredient18, strMeasure18, 
            strIngredient19, strMeasure19, 
            strIngredient20, strMeasure20 });
    setstrMeal(''); setstrMealAlternate(''); setstrCategory(''); setstrArea(''); setstrInstructions(''); setstrMealThumb(''); setstrTags(''); setstrYoutube(''); setstrSource(''); setstrImageSource(''); setstrCreativeCommonsConfirmed(''); setdateModified('');
    setstrIngredient1(''); setstrMeasure1(''); setstrIngredient2(''); setstrMeasure2(''); setstrIngredient3(''); setstrMeasure3(''); setstrIngredient4(''); setstrMeasure4('');
    setstrIngredient5(''); setstrMeasure5(''); setstrIngredient6(''); setstrMeasure6(''); setstrIngredient7(''); setstrMeasure7(''); setstrIngredient8(''); setstrMeasure8('');
    setstrIngredient9(''); setstrMeasure9(''); setstrIngredient10(''); setstrMeasure10(''); setstrIngredient11(''); setstrMeasure11(''); setstrIngredient12('');
    setstrMeasure12(''); setstrIngredient13(''); setstrMeasure13(''); setstrIngredient14(''); setstrMeasure14(''); setstrIngredient15(''); setstrMeasure15(''); setstrIngredient16(''); setstrMeasure16('');
    setstrIngredient17(''); setstrMeasure17(''); setstrIngredient18(''); setstrMeasure18(''); setstrIngredient19(''); setstrMeasure19(''); setstrIngredient20('');
    setstrMeasure20('');
    fetchRecipes();
    alert('Recipe added successfully!');
  };

  const updateRecipe = async (e) => {
    e.preventDefault();
    //console.log(e);
    //console.log(searchbyid);

    setstrMeal(editdata.strMeal);
    //console.log(strMeal);
    //console.log('editdata: ', editdata.strmeal);
    
    fetchSearchRecipebyid(searchbyid);
    //console.log(recipes[0].strMeal);
    //await axios.put(`http://localhost:5000/api/recipes/update/${searchbyid}`, [{ 
      await axios.put(`https://myapibe.onrender.com/api/recipes/update/${searchbyid}`, [{ 
            strMeal:editdata.strMeal, strMealAlternate:editdata.strMealAlternate, 
            strCategory:editdata.strCategory, strArea:editdata.strArea, 
            strInstructions:editdata.strInstructions, strMealThumb:editdata.strMealThumb, 
            strTags:editdata.strTags, strYoutube:editdata.strYoutube, 
            strSource:editdata.strSource, strImageSource:editdata.strImageSource,
            strCreativeCommonsConfirmed:editdata.strCreativeCommonsConfirmed, dateModified:editdata.dateModified, 
            strIngredient1:editdata.strIngredient1, strMeasure1:editdata.strMeasure1, 
            strIngredient2:editdata.strIngredient2, strMeasure2:editdata.strMeasure2,
            strIngredient3:editdata.strIngredient3, strMeasure3:editdata.strMeasure3,
            strIngredient4:editdata.strIngredient4, strMeasure4:editdata.strMeasure4,
            strIngredient5:editdata.strIngredient5, strMeasure5:editdata.strMeasure5,
            strIngredient6:editdata.strIngredient6, strMeasure6:editdata.strMeasure6,
            strIngredient7:editdata.strIngredient7, strMeasure7:editdata.strMeasure7,
            strIngredient8:editdata.strIngredient8, strMeasure8:editdata.strMeasure8,
            strIngredient9:editdata.strIngredient9, strMeasure9:editdata.strMeasure9,
            strIngredient10:editdata.strIngredient10, strMeasure10:editdata.strMeasure10,
            strIngredient11:editdata.strIngredient11, strMeasure11:editdata.strMeasure11,
            strIngredient12:editdata.strIngredient12, strMeasure12:editdata.strMeasure12,
            strIngredient13:editdata.strIngredient13, strMeasure13:editdata.strMeasure13,
            strIngredient14:editdata.strIngredient14, strMeasure14:editdata.strMeasure14,
            strIngredient15:editdata.strIngredient15, strMeasure15:editdata.strMeasure15,
            strIngredient16:editdata.strIngredient16, strMeasure16:editdata.strMeasure16,
            strIngredient17:editdata.strIngredient17, strMeasure17:editdata.strMeasure17,
            strIngredient18:editdata.strIngredient18, strMeasure18:editdata.strMeasure18,
            strIngredient19:editdata.strIngredient19, strMeasure19:editdata.strMeasure19,
            strIngredient20:editdata.strIngredient20, strMeasure20:editdata.strMeasure20
            
            }]);
            //setEditdata(null);
            setstrMeal(''); setstrMealAlternate(''); 
            setstrCategory(''); setstrArea(''); 
            setstrInstructions(''); setstrMealThumb(''); 
            setstrTags(''); setstrYoutube(''); 
            setstrSource(''); setstrImageSource(''); 
            setstrCreativeCommonsConfirmed('');setdateModified('');
            setstrIngredient1('');setstrMeasure1(''); 
            setstrIngredient2(''); setstrMeasure2(''); 
            setstrIngredient3(''); setstrMeasure3(''); 
            setstrIngredient4(''); setstrMeasure4(''); 
            setstrIngredient5(''); setstrMeasure5(''); 
            setstrIngredient6(''); setstrMeasure6(''); 
            setstrIngredient7(''); setstrMeasure7(''); 
            setstrIngredient8(''); setstrMeasure8('');
            setstrIngredient9(''); setstrMeasure9(''); 
            setstrIngredient10(''); setstrMeasure10('');
            setstrIngredient11(''); setstrMeasure11(''); 
            setstrIngredient12(''); setstrMeasure12(''); 
            setstrIngredient13(''); setstrMeasure13(''); 
            setstrIngredient14(''); setstrMeasure14(''); 
            setstrIngredient15(''); setstrMeasure15(''); 
            setstrIngredient16(''); setstrMeasure16('');
            setstrIngredient17(''); setstrMeasure17(''); 
            setstrIngredient18(''); setstrMeasure18(''); 
            setstrIngredient19(''); setstrMeasure19(''); 
            setstrIngredient20(''); setstrMeasure20('');
            setEditdata({});

            //console.log('reset data should be:', editdata);
            fetchRecipes();
            fetchSearchRecipebyid(searchbyid);
            alert('Recipe updated successfully!');
                        
  };

    const imgurlsweets = 'https://www.cookwithkushi.com/wp-content/uploads/2018/10/Best_Indian_Diwali_Sweets_Desserts_food.jpg';
    const imgurlRice = 'https://www.simplyrecipes.com/thmb/R7-fdXOqomat3FV2qfuQQvhkFIU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Garlic-Fried-Rice-LEAD-3-7869fdcded86485ebc13ceacd93d7796.jpg';
    const imgurlsubji = 'https://moonandspoonandyum.com/wp-content/uploads/2023/03/high-protein-vegetarian-recipes-1-1.jpg';
    const imgurlsalad = 'https://i0.wp.com/delishbite.in/wp-content/uploads/2022/08/blog_1-1.jpg?resize=1000%2C800&ssl=1';
    const imgurlroti ='https://www.yummytummyaarthi.com/wp-content/uploads/2011/07/1-1.jpg';
    const imgurlstarter = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp9BNWo6QMW-M5DFglSW6iOcSMuJnVT_Tppw&shttps://i0.wp.com/delishbite.in/wp-content/uploads/2022/08/blog_1-1.jpg?resize=1000%2C800&ssl=1';

  return (
    <div className="App" >
      <h1 style={{color:'blue'}}>My Recipes</h1>
      <div style={{alignItems:'center', justifyItems:'center', justifyContent:'center',marginLeft:'20%', backgroundColor:'bisque', width:'50%', height:'50%'}}>
      <Carousel autoPlay infiniteLoop swipeable thumbWidth={'15%'} height={'50%'}         
      >
      <div style={{alignItems:'center', justifyContent:'center', width:'100%', height:'100%' }}>
        <img src={imgurlsweets} alt="Sweets" />
        <p className="legend" style={{width:'40%',backgroundColor:'lightblue', color:'red', fontWeight:'bold'}} >Sweets</p>
      </div>
      
      <div style={{alignItems:'center', justifyContent:'center', width:'100%', height:'100%' }}>
        <img src={imgurlsubji} alt="Subji" />
        <p className="legend" style={{width:'40%',backgroundColor:'lightblue', color:'red', fontWeight:'bold'}} >Subji</p>
      </div>
      
      <div style={{alignItems:'center', justifyContent:'center', width:'100%', height:'150%'}}>
        <img src={imgurlroti} alt="Roti" />
        <p className="legend" style={{width:'40%',backgroundColor:'lightblue', color:'red', fontWeight:'bold'}}>Roti</p>
      </div>
      <div style={{alignItems:'center', justifyContent:'center', width:'100%', height:'auto' }}>
        <img src={imgurlstarter} alt="Starter" />
        <p className="legend" style={{width:'40%',backgroundColor:'lightblue', color:'red', fontWeight:'bold'}} >Starter</p>
      </div>
      <div style={{alignItems:'center', justifyContent:'center', width:'100%', height:'auto' }}>
        <img src={imgurlsalad} alt="Salad" />
        <p className="legend" style={{width:'40%',backgroundColor:'lightblue', color:'red', fontWeight:'bold'}} >Salad</p>
      </div>
      {/* Add more slides as needed */}
    </Carousel>
    </div>

    <div style={{ display:'flex',flexDirection:'row', alignItems:'center', justifyContent: 'space-between',  marginLeft:'10%', marginRight:'10%', color:'#0d0df0' }}>
        <h2> Add New Recipes </h2>
        <h2> Edit / Modify Recipes </h2>
    </div>
   
    < div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft:'10px', marginRight:'10px',marginBottom: '10px', gap:'10px', background:'bisque', paddingLeft:'10px', paddingRight:'10px'

    }}
  
    >  
        
     {/* 
     <form onSubmit={addRecipe} style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginBottom: '20px' }}> 
     */}

      <form onSubmit={addRecipe} style={{ width: '50%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', paddingTop:'5px',gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', }}
      className="grid-container"> 
        
        <input className='form-input' placeholder="strMeal" value={strMeal} onChange={e => setstrMeal(e.target.value)} required />
        <input className='form-input' placeholder="Category" value={strCategory} onChange={e => setstrCategory(e.target.value)} required />
        <textarea className='form-input' placeholder="strInstructions" value={strInstructions} onChange={e => setstrInstructions(e.target.value)} required  style={{width:'100%'}}/>
        <input className='form-input' placeholder="strMealAlternate" value={strMealAlternate} onChange={e => setstrMealAlternate(e.target.value)} style={{width:'100%', justifySelf:'end'}} />
        <input className='form-input' placeholder="strArea" value={strArea} onChange={e => setstrArea(e.target.value)} />
        <input className='form-input' placeholder="strMealThumb" value={strMealThumb} onChange={e => setstrMealThumb(e.target.value)} />
        <input className='form-input' placeholder="strTags" value={strTags} onChange={e => setstrTags(e.target.value)} />
        <input className='form-input' placeholder="strYoutube" value={strYoutube} onChange={e => setstrYoutube(e.target.value)} />
        <input className='form-input' placeholder="strSource" value={strSource} onChange={e => setstrSource(e.target.value)} />
        <input className='form-input' placeholder="strImageSource" value={strImageSource} onChange={e => setstrImageSource(e.target.value)} />
        <input className='form-input' placeholder="strCreativeCommonsConfirmed" value={strCreativeCommonsConfirmed} onChange={e => setstrCreativeCommonsConfirmed(e.target.value)} />
        <input className='form-input' placeholder="dateModified" value={dateModified} onChange={e => setdateModified(e.target.value)} />
        <input className='form-input' placeholder="strIngredient1" value={strIngredient1} onChange={e => setstrIngredient1(e.target.value)} />
        <input className='form-input' placeholder="strMeasure1" value={strMeasure1} onChange={e => setstrMeasure1(e.target.value)} />
        <input className='form-input' placeholder="strIngredient2" value={strIngredient2} onChange={e => setstrIngredient2(e.target.value)} />
        <input className='form-input' placeholder="strMeasure2" value={strMeasure2} onChange={e => setstrMeasure2(e.target.value)} />
        <input className='form-input' placeholder="strIngredient3" value={strIngredient3} onChange={e => setstrIngredient3(e.target.value)} />
        <input className='form-input' placeholder="strMeasure3" value={strMeasure3} onChange={e => setstrMeasure3(e.target.value)} />
        <input className='form-input' placeholder="strIngredient4" value={strIngredient4} onChange={e => setstrIngredient4(e.target.value)} />
        <input className='form-input' placeholder="strMeasure4" value={strMeasure4} onChange={e => setstrMeasure4(e.target.value)} />
        <input className='form-input' placeholder="strIngredient5" value={strIngredient5} onChange={e => setstrIngredient5(e.target.value)} />
        <input className='form-input' placeholder="strMeasure5" value={strMeasure5} onChange={e => setstrMeasure5(e.target.value)} />
        <input className='form-input' placeholder="strIngredient6" value={strIngredient6} onChange={e => setstrIngredient6(e.target.value)} />
        <input className='form-input' placeholder="strMeasure6" value={strMeasure6} onChange={e => setstrMeasure6(e.target.value)} />
        <input className='form-input' placeholder="strIngredient7" value={strIngredient7} onChange={e => setstrIngredient7(e.target.value)} />
        <input className='form-input' placeholder="strMeasure7" value={strMeasure7} onChange={e => setstrMeasure7(e.target.value)} />
        <input className='form-input' placeholder="strIngredient8" value={strIngredient8} onChange={e => setstrIngredient8(e.target.value)} />
        <input className='form-input' placeholder="strMeasure8" value={strMeasure8} onChange={e => setstrMeasure8(e.target.value)} />
        <input className='form-input' placeholder="strIngredient9" value={strIngredient9} onChange={e => setstrIngredient9(e.target.value)} />
        <input className='form-input' placeholder="strMeasure9" value={strMeasure9} onChange={e => setstrMeasure9(e.target.value)} />
        <input className='form-input' placeholder="strIngredient10" value={strIngredient10} onChange={e => setstrIngredient10(e.target.value)} /> 
        <input className='form-input' placeholder="strMeasure10" value={strMeasure10} onChange={e => setstrMeasure10(e.target.value)} />
        <input className='form-input' placeholder="strIngredient11" value={strIngredient11} onChange={e => setstrIngredient11(e.target.value)} />  
        <input className='form-input' placeholder="strMeasure11" value={strMeasure11} onChange={e => setstrMeasure11(e.target.value)} />
        <input className='form-input' placeholder="strIngredient12" value={strIngredient12} onChange={e => setstrIngredient12(e.target.value)} />
        <input className='form-input' placeholder="strMeasure12" value={strMeasure12} onChange={e => setstrMeasure12(e.target.value)} />
        <input className='form-input' placeholder="strIngredient13" value={strIngredient13} onChange={e => setstrIngredient13(e.target.value)} />
        <input className='form-input' placeholder="strMeasure13" value={strMeasure13} onChange={e => setstrMeasure13(e.target.value)} />
        <input className='form-input' placeholder="strIngredient14" value={strIngredient14} onChange={e => setstrIngredient14(e.target.value)} />
        <input className='form-input' placeholder="strMeasure14" value={strMeasure14} onChange={e => setstrMeasure14(e.target.value)} />
        <input className='form-input' placeholder="strIngredient15" value={strIngredient15} onChange={e => setstrIngredient15(e.target.value)} />
        <input className='form-input' placeholder="strMeasure15" value={strMeasure15} onChange={e => setstrMeasure15(e.target.value)} />
        <input className='form-input' placeholder="strIngredient16" value={strIngredient16} onChange={e => setstrIngredient16(e.target.value)} />
        <input className='form-input' placeholder="strMeasure16" value={strMeasure16} onChange={e => setstrMeasure16(e.target.value)} />
        <input className='form-input' placeholder="strIngredient17" value={strIngredient17} onChange={e => setstrIngredient17(e.target.value)} />
        <input className='form-input' placeholder="strMeasure17" value={strMeasure17} onChange={e => setstrMeasure17(e.target.value)} />
        <input className='form-input' placeholder="strIngredient18" value={strIngredient18} onChange={e => setstrIngredient18(e.target.value)} />
        <input className='form-input' placeholder="strMeasure18" value={strMeasure18} onChange={e => setstrMeasure18(e.target.value)} />
        <input className='form-input' placeholder="strIngredient19" value={strIngredient19} onChange={e => setstrIngredient19(e.target.value)} />
        <input className='form-input' placeholder="strMeasure19" value={strMeasure19} onChange={e => setstrMeasure19(e.target.value)} />
        <input className='form-input' placeholder="strIngredient20" value={strIngredient20} onChange={e => setstrIngredient20(e.target.value)} />
        <input className='form-input' placeholder="strMeasure20" value={strMeasure20} onChange={e => setstrMeasure20(e.target.value)} /> 

        <div style={{ justifyContent:'center', alignItems:'center'}}>
          <button style={{backgroundColor:'rgb(154, 229, 233)', paddingBottom:'10px', marginBottom:'10px',fontWeight:'800', width:'150px', color:'rgb(18, 11, 240)'}} type="submit">Add Recipe</button>
        </div>
        
      </form>
      
        <form onSubmit={updateRecipe} style={{ width: "50%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px",  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',}}
        className="grid-container"
        > 
       {/*
        <input type="text" name="strMeal" placeholder={editdata?.strMeal} value={editdata?.strMeal}
        onChange={e => setEditdata(prev => ({ ...prev, strMeal: e.target.value }))}/>
        */}
        
        <input className='form-input2' type="text" name="strMeal" placeholder={strMeal} value={editdata?.strMeal}
        onChange={e => setEditdata(prev => ({ ...prev, strMeal: e.target.value }))}/>
        
      {/*<input placeholder={recipes[0]?.strCategory} value={recipes[0]?.strCategory || strCategory} onChange={e => setstrCategory(e.target.value)} />*/}

        <input className='form-input2' name="strCategory" placeholder={editdata?.strCategory} value={editdata?.strCategory} onChange={e => setEditdata(prev => ({...prev, strCategory:e.target.value}))} />

        <textarea style={{width:'100%'}} className='form-input2' placeholder={editdata?.strInstructions} value={editdata?.strInstructions} onChange={e => setEditdata(prev => ({...prev, strInstructions:e.target.value}))}/>

        <input style={{width:'100%', justifySelf:'end'}}className='form-input2' placeholder={editdata?.strMealAlternate} value={editdata?.strMealAlternate} onChange={e => setEditdata(prev => ({...prev, strMealAlternate:e.target.value}))} />

        <input className='form-input2' placeholder={editdata?.strArea} value={editdata?.strArea} onChange={e => setEditdata(prev => ({...prev, strArea:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strMealThumb} value={editdata?.strMealThumb} onChange={e => setEditdata(prev => ({...prev, strMealThumb:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strTags} value={editdata?.strTags} onChange={e => setEditdata(prev => ({...prev, strTags:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strYoutube} value={editdata?.strYoutube} onChange={e => setEditdata(prev => ({...prev, strYoutube:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strSource} value={editdata?.strSource} onChange={e => setEditdata(prev => ({...prev, strSource:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strImageSource} value={editdata?.strImageSource} onChange={e => setEditdata(prev => ({...prev, strImageSource:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strCreativeCommonsConfirmed} value={editdata?.strCreativeCommonsConfirmed} onChange={e => setEditdata(prev => ({...prev, strCreativeCommonsConfirmed:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.dateModified} value={editdata?.dateModified} onChange={e => setEditdata(prev => ({...prev, dateModified:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strIngredient1} value={editdata?.strIngredient1} onChange={e => setEditdata(prev => ({...prev, strIngredient1:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strMeasure1} value={editdata?.strMeasure1} onChange={e => setEditdata(prev => ({...prev, strMeasure1:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strIngredient2} value={editdata?.strIngredient2} onChange={e => setEditdata(prev => ({...prev, strIngredient2:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strMeasure2} value={editdata?.strMeasure2} onChange={e => setEditdata(prev => ({...prev, strMeasure2:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strIngredient3} value={editdata?.strIngredient3} onChange={e => setEditdata(prev => ({...prev, strIngredient3:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strMeasure3} value={editdata?.strMeasure3} onChange={e => setEditdata(prev => ({...prev, strMeasure3:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strIngredient4} value={editdata?.strIngredient4} onChange={e => setEditdata(prev => ({...prev, strIngredient4:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strMeasure4} value={editdata?.strMeasure4} onChange={e => setEditdata(prev => ({...prev, strMeasure4:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strIngredient5} value={editdata?.strIngredient5} onChange={e => setEditdata(prev => ({...prev, strIngredient5:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strMeasure5} value={editdata?.strMeasure5} onChange={e => setEditdata(prev => ({...prev, strMeasure5:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strIngredient6} value={editdata?.strIngredient6} onChange={e => setEditdata(prev => ({...prev, strIngredient6:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strMeasure6} value={editdata?.strMeasure6} onChange={e => setEditdata(prev => ({...prev, strMeasure6:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strIngredient7} value={editdata?.strIngredient7} onChange={e => setEditdata(prev => ({...prev, strIngredient7:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strMeasure7} value={editdata?.strMeasure7} onChange={e => setEditdata(prev => ({...prev, strMeasure7:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strIngredient8} value={editdata?.strIngredient8} onChange={e => setEditdata(prev => ({...prev, strIngredient8:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strMeasure8} value={editdata?.strMeasure8} onChange={e => setEditdata(prev => ({...prev, strMeasure8:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strIngredient9} value={editdata?.strIngredient9} onChange={e => setEditdata(prev => ({...prev, strIngredient9:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strMeasure9} value={editdata?.strMeasure9} onChange={e => setEditdata(prev => ({...prev, strMeasure9:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strIngredient10} value={editdata?.strIngredient10} onChange={e => setEditdata(prev => ({...prev, strIngredient10:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strMeasure10} value={editdata?.strMeasure10} onChange={e => setEditdata(prev => ({...prev, strMeasure10:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strIngredient11} value={editdata?.strIngredient11} onChange={e => setEditdata(prev => ({...prev, strIngredient11:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strMeasure11} value={editdata?.strMeasure11} onChange={e => setEditdata(prev => ({...prev, strMeasure11:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strIngredient12} value={editdata?.strIngredient12} onChange={e => setEditdata(prev => ({...prev, strIngredient12:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strMeasure12} value={editdata?.strMeasure12} onChange={e => setEditdata(prev => ({...prev, strMeasure12:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strIngredient13} value={editdata?.strIngredient13} onChange={e => setEditdata(prev => ({...prev, strIngredient13:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strMeasure13} value={editdata?.strMeasure13} onChange={e => setEditdata(prev => ({...prev, strMeasure13:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strIngredient14} value={editdata?.strIngredient14} onChange={e => setEditdata(prev => ({...prev, strIngredient14:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strMeasure14} value={editdata?.strMeasure14} onChange={e => setEditdata(prev => ({...prev, strMeasure14:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strIngredient15} value={editdata?.strIngredient15} onChange={e => setEditdata(prev => ({...prev, strIngredient15:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strMeasure15} value={editdata?.strMeasure15} onChange={e => setEditdata(prev => ({...prev, strMeasure15:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strIngredient16} value={editdata?.strIngredient16} onChange={e => setEditdata(prev => ({...prev, strIngredient16:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strMeasure16} value={editdata?.strMeasure16} onChange={e => setEditdata(prev => ({...prev, strMeasure16:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strIngredient17} value={editdata?.strIngredient17} onChange={e => setEditdata(prev => ({...prev, strIngredient17:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strMeasure17} value={editdata?.strMeasure17} onChange={e => setEditdata(prev => ({...prev, strMeasure17:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strIngredient18} value={editdata?.strIngredient18} onChange={e => setEditdata(prev => ({...prev, strIngredient18:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strMeasure18} value={editdata?.strMeasure18} onChange={e => setEditdata(prev => ({...prev, strMeasure18:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strIngredient19} value={editdata?.strIngredient19} onChange={e => setEditdata(prev => ({...prev, strIngredient19:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strMeasure19} value={editdata?.strMeasure19} onChange={e => setEditdata(prev => ({...prev, strMeasure19:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strIngredient20} value={editdata?.strIngredient20} onChange={e => setEditdata(prev => ({...prev, strIngredient20:e.target.value}))} />
        <input className='form-input2' placeholder={editdata?.strMeasure20} value={editdata?.strMeasure20} onChange={e => setEditdata(prev => ({...prev, strMeasure20:e.target.value}))} />
        
        {/*<div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginBottom: '20px', justifySelf:'end' }}>*/}
        {/*<input placeholder="id to update" value={recipes[0]?.idMeal} onChange={e => setidm(e.target.value)} /> */}
        <div style={{ justifyContent:'center', alignItems:'center'}}>
            <button style={{backgroundColor:'#ff0', fontWeight:'800', paddingBottom:'10px', marginBottom:'5px', width: '150px',color:'rgb(42, 11, 240)'}} type="submit">Update Recipe</button>
        </div>
        { /*</form></div> */}

      </form>
    </div>

    <div style={{ width: '85%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', margintop:'10px',marginBottom: '10px', marginLeft:'30px', marginRight:'30px', backgroundColor:'bisque', gap: '10px', paddingTop:'5px' }}>
      <div style={{display:'flex' , flexDirection: 'row', gap: '20px', justifyContent:'flex-start', alignItems:'normal', width:'100%'  }}>
        <input className='form-input1' style={{backgroundColor:'rgba(132, 234, 246, 0.67)'}}
        type="text" 
        placeholder="Search recipes...by category number"
        onChange={(e) => setSearchbyCategory(e.target.value)}
        value={searchbyCategory}/> 
        <button style={{backgroundColor:'rgb(240, 240, 13)', fontWeight:'800', color:'rgb(42, 11, 240)', height:'30px', width:'200px'}}  onClick={() => fetchSearchRecipesbyCategory(searchbyCategory)}>Search By Category</button>
     </div>  
    
      <div style={{display:'flex' , flexDirection: 'row', gap: '20px', justifyContent:'flex-start', alignItems:'normal', width:'100%'  }}>
        <input className='form-input1' style={{backgroundColor:'rgba(132, 234, 246, 0.67)'}}
        type="text" 
        placeholder="Search recipes...by strMeal"
        onChange={(e) => setSearchstrMeal(e.target.value)}
        value={searchstrMeal}/> 
        <button style={{backgroundColor:'#ff0', fontWeight:'800', color:'rgb(42, 11, 240)', height:'30px', width:'200px'}} onClick={() => fetchSearchRecipebystrMeal(searchstrMeal)}>Search By strMeal</button>
     </div>

      <div style={{display:'flex' , flexDirection: 'row', gap: '20px', justifyContent:'flex-start', alignItems:'normal', width:'100%'  }}>
        {/*
        <input
        type="integer" 
        placeholder="Search recipes...by id"
        onChange={(e) => setSearchbyid(e.target.value)}
        value={searchbyid}/> 
        */}
      <input className='form-input1'style={{backgroundColor:'rgba(132, 234, 246, 0.67)'}}
        type="number"
        placeholder="Search recipes...by id"
        value={searchbyid ?? ""}
        onChange={(e) => setSearchbyid(e.target.value)}
      />

        <button style={{backgroundColor:'#ff0', fontWeight:'800', color:'rgb(42, 11, 240)', height:'30px', width:'200px'}} onClick={() => fetchSearchRecipebyid(searchbyid)}>Search By ID</button>
        
     </div>

     </div>
      
      <div className="recipe-list" style={{ display: 'flex',gap:'10px',textAlign: 'left', paddingLeft:'10px', marginLeft:'10px', marginRight:'10px', paddingRight:'10px' }}>
          <table >
          <thead>
            <tr>
              <th>idMeal</th>
              <th>Meal Name</th>
              <th>Category</th>
            </tr>
          </thead>

          <tbody>
            {recipes.map(r => (
            <tr key={r.idMeal}>
              <td style={{alignSelf:'left', width:'auto'}}>{r.idMeal}</td>
              <td style={{alignSelf:'left', width:'400px'}}>{r.strMeal}</td>
              <td style={{alignSelf:'left', width:'auto'}}>{r.strCategory}</td>
              <td style={{ display:'flex', flexDirection:'row', gap:'20px'}}>
              <button onClick={() => fetchSearchRecipebyid(r.idMeal)}>Edit</button>
              {/* <button onClick={()=> updateRecipe()}>Update</button> */}
              <button style={{paddingright:'20px'}} onClick={() => handleDelete(r.idMeal)}> delete </button>
              </td>
            </tr>
            ))}
          </tbody>
          </table>
      </div>


      <div className='category-list' style={{textAlign:'left', paddingleft:'10%'}}>
        <button style={{fontWeight:'bold'}} onClick={displaystrCategory}>{isVisible ? 'Hide strCategory' : 'Show strCategory'}</button>
        {isVisible && (
          <ul style={{display:'flex', flexDirection: 'column', alignItems:'left'}}>            

            {categories.categories.map(c => (
              <li style={{alignItems:'flex-start'}} key={c.idCategory}>{c.strCategory}</li>
            ))}
          </ul>
        )}
      </div>
      
    </div>
  );
  }

export default App;
