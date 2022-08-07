import React from "react";
import "../img/css/icofont.min.css";
import styled, {css} from "styled-components";


function ChartStats({ name,svg}) {
  return (
    <div>
        <Card>
          <Content>
            <Icon className= "iconfont-paper-plane">{svg}</Icon>
              <PlanTitle>{name}</PlanTitle>
          </Content>
        </Card>
    </div>
  );
}

const gradient = degs => css`
background:
linear-gradient(${ degs || 130 }deg, #222359 0%,#D22E57 100%);`
;
const Card = styled.div`
 position: relative;
 overflow: hidden;
 width: 300px;
 padding: 3rem 0 2rem;
 border-radius: 0.5rem;
 color: white;
 ${gradient()};
 box-shadow: 0 24px 38px 3px rgba(0,0,0,0.025),
 0 9px 46px 8px rgba(0,0,0,0.025),0 11px 15px -7px rgba(0,0,0,0.025);
`;

export const Content = styled.div`
position:relative;
z-index:3;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
export const Icon = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 80px;
height: 80px;
flex: 0 0 auto;
margin-bottom: 2rem;
border-radius: 50%;
font-size: 40px;
color: white;
${gradient()};
box-shadow: 0 11px 15px -7px rgba(0,0,0,0.25);
`;
export const PlanTitle = styled.div`
font-size: 1.25rem;
align-items: center;
justify-content: center;
padding: 10px;
font-size: 21px;
font-weight: 500;
font-style: oblique;
color:  #99ff33;

`;
export const PlanCost = styled.div`
font-size: 3rem;
`;
export const FeatureListItem = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 0.325rem;
`;
export const ActionButton = styled.button`
flex: 0 0 auto;
height: 40px;
padding: 0 2rem;
border: 0;
border-radius: 20px;
color: rgba(0,0,0,0.85);
background: rgba(255,255,255,0.85);
box-shadow: 0 11px 15px -7px rgba(0,0,0,0.025);
transition: background 0.25s;
&:hover {background:rgba(255,255,255,1);}
`;

export default ChartStats;