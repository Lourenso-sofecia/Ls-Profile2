import { Visibility } from '@mui/icons-material';
import React, { useState} from 'react';
import { Heading } from '../common/Heading';
import { portfolio } from '../data/dummydata';

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))]

export const Portfolio = () => {

  const [list, setList] = useState(portfolio);
  const [category, setCategory] = useState(allCategory);
  console.log(setCategory);
  const filterItems = (category) => {
    
    const newItems = portfolio.filter( (item) => item.category === category)
    setList (newItems);

    if(category === "all"){
      setList (portfolio);
    }
  
  };

  return (
    <>
      
      <article >
        <div className="container">
          <Heading className = "color-portfolio" title="Portfolio" />
          <div className="cat-button">
            {category.map((category) => (
                <button 
                  className="primaryBtn btn-filter"
                  onClick={() => filterItems(category)}
                  data-aos='zoom-out-down'
                >
                  {category}
                </button>
              ))
            }
          </div>
          
          <div className=" content grid2">
            {list.map ((value, i) => (
              <div data-aos='fade-up' className="box">
                <div className="img">
                  <img src={value.cover} alt="" />
                </div>
                <div className="overlay">
                  <h3>{value.title}</h3>
                  <span>{value.name}</span>
                  <span>Click in Link</span>
                  <a className='white over' href={value.url}>{value.url}</a>
                  <Visibility />
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </article>
      <article className='espaco-portfolio'></article>

      
    </>
  )
}
