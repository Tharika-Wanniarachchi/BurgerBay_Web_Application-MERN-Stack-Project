import React, { useState, useEffect } from 'react'
import Cards from '../../Components/Cards';
import { FaFilter } from 'react-icons/fa';

const Menu = () => {
    const[menu,setMenu] = useState([]);
    const[filteredItems,setFilterdItems] = useState([]);
    const [selectedCategory,setselectedCategory] =useState("all");
    const [sortOption, setsortOption] = useState("default");
    const[currentPage,setCurrentPage] = useState(1);
    const[itemPerPage] =useState(8)

    //Loading data
    useEffect(()=>{
        //fetch data form the backend
        const fetchData = async () =>{
            try{
                const response = await fetch("/menu.json");
                const data = await response.json();
                // Setting the menu and filtered items with fetched data
                setMenu(data);
                setFilterdItems(data);
            }catch (error){
                console.log("Error fetching data " ,error)
            }
        };

        // Call the function to fetch data
        fetchData();
    }, [])

    //filtering data based on category
    const filterItems = (category) => {
        const filtered = 
            category === "all"
                ? menu 
                : menu.filter((item)=> item.category === category);
        
        setFilterdItems(filtered);
        setselectedCategory(category);
        setCurrentPage(1)
    };

    //show all data function
    const showAll = () =>{
        setFilterdItems(menu);
        setselectedCategory("all");
        setCurrentPage(1)

    };

    //sorting based on A-Z , Z-A , Z-A Low-High pricing
    const handleSortChange = (option) => {
        setsortOption(option);

        let sortedItems = [...filteredItems]

        //logic
        switch (option) {
            case "A-Z":
                sortedItems.sort((a, b) => a.name.localeCompare(b.name)); // Sorting alphabetically A-Z
                break;
            case "Z-A":
                sortedItems.sort((a, b) => b.name.localeCompare(a.name)); // Sorting alphabetically Z-A
                break;
            case "low-to-high":
                sortedItems.sort((a, b) => a.price - b.price); // Sorting by price low to high
                break;
            case "high-to-low":
                sortedItems.sort((a, b) => b.price - a.price); // Sorting by price high to low
                break;
            default:
                sortedItems = [...filteredItems]; // Default sorting (unchanged)
                break;
        }

          setFilterdItems(sortedItems);
          setCurrentPage(1)


    };


    //pagination logic
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItem = filteredItems.slice(indexOfFirstItem,indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div>
        {/* Menu page Banner */}
        <div className='bg-banner-color'>
            <div className='section-container '>
                <div className="py-48 flex flex-col justify-center items-center gap-8">
                    <div className="text-center space-y-7 px-4">
                        <h2 className='md:text-5xl text-5xl font-bold md:leading-snug leading-snug'>Savor the Flavor of the Best  <span className='text-primary-color'>Burgers  </span> </h2>
                        <p className='text-xl text-[#4A4A4A] md:w-4/5 mx-auto' >"Embark on a culinary adventure with our top-tier burgers, where every bite offers a perfect blend of gourmet ingredients and innovative flavors, creating an unforgettable taste experience."</p>
                        <button className='btn bg-primary-color px-8 py-3 text-white font-semibold rounded-full hover:text-black'>Order Now</button>
                    </div>   
                </div>
            </div>
        </div>

        {/* Menu category section */}
        <div className="section-container">
            {/* filtersing and sorting */}
            <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center m-8'>
                {/* category buttons */}
                <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 font-medium">
                    <button onClick={showAll} className={selectedCategory === "all" ? "active" : "" }>
                        All
                    </button>
                    <button onClick={() => filterItems("Chicken Burger")} className={selectedCategory === "Chicken Burger" ? "active" : "" }>
                        Chicken Burger
                    </button>
                    <button onClick={() => filterItems("Veggie Burger")} className={selectedCategory === "Veggie Burger" ? "active" : "" }>
                        Veggie Burger
                    </button>
                    <button onClick={() => filterItems("Shawarma")} className={selectedCategory === "Shawarma" ? "active" : "" }>
                        Shawarma
                    </button>
                    <button onClick={() => filterItems("Beverages")} className={selectedCategory === "Beverages" ? "active" : "" }>
                        Beverages
                    </button>
                </div>
                {/* Sorting base filtering */}
                <div className='flex justify-end mb-4 rounded-sm gap-1'>
                    <div className='bg-black p-2'>
                        <FaFilter className="h-4 w-4 text-white" />
                    </div>

                    {/* sorting options */}
                    <select name="sort" id="sort"
                        onChange={(e) => handleSortChange(e.target.value)} value={sortOption}
                        className='bg-black text-white px-2 py-1 rounded-sm'
                    >
                      <option value="default">Default</option>  
                      <option value="A-Z">A-Z</option>  
                      <option value="Z-A">Z-A</option>  
                      <option value="low-to-high">Low-to-High</option>  
                      <option value="high-to-low">High-to-Low</option>  
                    </select>
                </div>
            </div>

            <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1'>
                {
                    currentItem.map((item) => (
                        <Cards key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>

        {/* Pagination section */}
        <div className='flex justify-center my-8'>
            {
                Array.from({length:Math.ceil (filteredItems.length/itemPerPage)}).map((_ , index) => (
                    <button key={index + 1} onClick={()=> paginate(index+1)}
                    className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? "bg-primary-color" : "bg-gray-200" }`}>
                        {index + 1}
                    </button>
                ))
            }
        </div>
    </div>
  )
}

export default Menu
