import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Card from './Card';
import card from '../img/creditcard.svg';
import active from '../img/active.svg';
import inactive from '../img/inactive.svg';
import check from '../img/check.svg';
import checkDisabled from '../img/check-disabled.svg';

function PaymentSection() {
    return (
        <PaymentStyled>
            <InnerLayout>
                <h3 className="small-heading">An exceptional service, <span>at the right price</span></h3>
                <p className="c-para">Start with our free plan and switch to premium as you grow. </p>
                <div className="card-con">
                    <Card 
                    account={'UrbanFit GOLD'}
                    amount={'$30'}
                    text={'Manage your business with a simple and efficient account.'}
                    button={'Get Started'}
                    card={card}
                    active={active}
                    inactive={inactive}
                    check={check}
                    checkDis={checkDisabled}
                    text1={'Exclusive Discount'}
                    text2={'Priority Delivery'}
                    text3={'Early Access'}
                    text4={'Prepaid debit cards'}
                    text5={'Virtual cards'}
                    text6={'Priority 24/7 support'}
                    text7={'Exchange 24 currencies'}
                    text8={'Multi-user access'}
                    />
                    
                    <Card 
                    account={'UrbanFit PREMIUM'}
                    amount={'$50'}
                    text={'Manage your business with a simple and efficient account.'}
                    button={'Get Started'}
                    card={card}
                    active={active}
                    inactive={inactive}
                    check={check}
                    checkDis={checkDisabled}
                    text1={'Exclusive Discount'}
                    text2={'Priority Delivery'}
                    text3={'Early Accesss'}
                    text4={'Get your order delivered early with Urbanfit gold'}
                    text5={'Virtual cards'}
                    text6={'Priority 24/7 support'}
                    text7={'Exchange 24 currencies'}
                    text8={'Multi-user access'}
                    />
                </div>
            </InnerLayout>
        </PaymentStyled>
    )
}

const PaymentStyled = styled.section`
    .card-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem;
        padding-top: 7.4rem;
        @media screen and (max-width: 689px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
    .c-para{
        text-align: center;
    }
`;

export default PaymentSection;
