import React, { useState, useEffect } from "react";
import { API_URL } from "../api";
import { Link } from "react-router-dom";

const FirmCollections = () => {
  const [firmData, setFirmData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("All")
  const [activeCategory, setActiveCategory] = useState("all")

  const firmDataHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors`);
      const newFirmData = await response.json();
      setFirmData(newFirmData.vendors);
      console.log("new firm data: ", newFirmData);
    } catch (error) {
      alert("firm data not fetched");
      console.log("firm data not fetched", error);
    }
  };

  useEffect(() => {
    firmDataHandler();
  }, []);

  const filterHandler = (region, category) => {
    setSelectedRegion(region)
    setActiveCategory(category)
  }

  return (
    <>
      <h3>Restaurants with online food delivery in Hyderabad</h3>
      <div className="filterButtons">
        <button onClick={()=> filterHandler("All", "all")} className={activeCategory === 'all' ? 'activeButton' : ''}>All</button>
        <button onClick={()=> filterHandler("South-Indian","south-indian")} className={activeCategory === 'south-indian' ? 'activeButton' : ''}>South-Indian</button>
        <button onClick={()=> filterHandler("North-Indian","north-indian")} className={activeCategory === 'north-indian' ? 'activeButton' : ''}>North-Indian</button>
        <button onClick={()=> filterHandler("Chinese","chinese")} className={activeCategory === 'chinese' ? 'activeButton' : ''}>Chinese</button>
        <button onClick={()=> filterHandler("Bakery","bakery")} className={activeCategory === 'bakery' ? 'activeButton' : ''}>Bakery</button>
      </div>
      <section className="firmSection">
        {firmData.map((item) => {
            return item.firm.map((eachItem)=> {
                if(selectedRegion === "All" || 
                    eachItem.region.includes(selectedRegion.toLocaleLowerCase())
                ){
                   
                        return (
                          <Link to={`/products/${eachItem._id}/${eachItem.firmName}`} className="link">
                            <div className="firmGroupBox">
                              <div className="firmGroup">
                                <img src={`${API_URL}/uploads/${eachItem.image}`} />
                                <div className="firmOffer">{eachItem.offer}</div>
                              </div>
                              <div className="firmDetails">
                                <strong className="firmName">
                                  {eachItem.firmName}
                                </strong>
                                <div className="firmArea">
                                  {eachItem.region.join(", ")}
                                </div>
                                <div className="firmArea">{eachItem.area}</div>
                              </div>
                            </div>
                          </Link>
                        );
                     

                }
            })


          return null;
           
          
        })}
      </section>
    </>
  );
};

export default FirmCollections;
