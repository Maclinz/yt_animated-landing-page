import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Stats from "./Stats";

function CardSection() {
  return (
    <CardSectionStyled>
      <h1 className=" choose secondary-heading">Why UrbanFit</h1>
      <p>
        Owning a franchise not only will give you the opportunity to take charge
        of your own successful business but also allows you to be a part of the
        movement in the business of health supplements. If you are accepted as a
        UrbanFit Franchise owner, you will be a partner of India’s fastest
        growing fitness tech brand and the most trustworthy name in the industry
      </p>
      <InnerLayout>
        <div className="card-container">
          <div className="card-left">
            <Stats name={'Number of Client Per Month'} svg={<i class="icofont-numbered"></i>}/>
            <Stats name={'Number of Store'} svg={<i class="icofont-shopify"></i>}/>
            <Stats name={'Revenue Generated Per Store'} svg={<i class="icofont-money-bag"></i>}/>
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
    display: flex;
    grid-template-columns: repeat(5, 1fr);
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

export default CardSection;



