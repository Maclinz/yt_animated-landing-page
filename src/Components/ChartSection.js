import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ChartStats from "./ChartStats";

function ChartSection() {
  return (
    <ChartStyled>
      <h1 className=" choose secondary-heading">Urbanfit Franchies Vision</h1>
      <InnerLayout>
        <div className="chart-con">
          <div className="chart-left">
            <div className="stats">
              <div className="stats-money">
                <ChartStats
                  name={
                    "We aim to bring the change in fitness industry by establishing network of state of the art health supplement storess"
                  }
                  svg={<i class="icofont-chart-bar-graph"></i>}
                />
                <ChartStats
                  name={
                    "There is no possibility of fake products with UrbanFit due to our vast tie network of premium supplement brands"
                  }
                  svg={<i class="icofont-handshake-deal"></i>}
                />
                <ChartStats
                  name={
                    "Our priority will always be our customer. We aim to build trust, happiness and loyalty for our customers relation"
                  }
                  svg={<i class="icofont-ui-social-link"></i>}
                />
              </div>
            </div>
          </div>
        </div>
      </InnerLayout>
    </ChartStyled>
  );
}

const ChartStyled = styled.section`
  .choose {
    display: flex;
    justify-content: center;
  }
  .chart-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 1347px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .chart-left {
      width: 80%;
      @media screen and (max-width: 1347px) {
        width: 100%;
      }
      .stats {
        .stats-money {
          display: flex;
          gap: 50px;
          padding-bottom: 1.3rem;
          justify-content: space-between;
        }
      }
    }
  }
`;

export default ChartSection;
