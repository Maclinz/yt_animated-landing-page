
import React from "react";
import styled, {css}from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import "../img/css/icofont.min.css";
import Stats from "./Stats";

function ShopArea() {
  return (
    <CardSectionStyled>
      <h1 className=" choose secondary-heading">UrbanFit Location</h1>
      <InnerLayout>
        <div className="card-container">
          <div className="card-left">
            <Stats name={'Cerebrum IT Park,Pune Maharashtra 411014'} svg={<i class="icofont-location-pin"></i>}/>
            
            {/* <Stats name={'Number of Store'} svg={<i class="icofont-shopify"></i>}/>
            <Stats name={'Revenue Generated Per Store'} svg={<i class="icofont-money-bag"></i>}/> */}
          </div>
        </div>
      </InnerLayout>
    </CardSectionStyled>
  );
}


const CardSectionStyled = styled.section`
  .choose {
    display: flex;
    justify-content: center;
  }
  .card-container {
    justify-content: center;
    display: flex;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 845px) {
      grid-template-columns: repeat(1, 1fr);
    }
    }

    .card-left {
      display: flex;
      justify-content: center;
      gap:50px;
      p {
        padding: 1rem 1;
      }
    }
`;

export default ShopArea;

