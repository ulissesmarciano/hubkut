import styled from "styled-components";

export const Container = styled.section`
    padding: 1.4rem 1rem;
    
    display: flex;
    flex-direction: column;

    background-color: #fff;
    border-radius: .3rem;

    .greeting-name {
        margin-bottom: 1rem;
    }

    .bio {
        margin-bottom: 1.8rem;

        color: #999999;
    }

    .stats-info {
        display: flex;
        gap: 2rem;
    }

    .stats-info li {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .stats-info .item img {
        height: 18px;
    }

    .stats-info .item .name {
        margin-bottom: .6rem;
        
        font-style: italic;
        font-size: .8rem;
        font-weight: 500;
        color: #999999;
        
    }

    .item .link {
        display: flex;
        align-items: center;
        gap: .2rem;

    }

    .item .link p {
        font-size: .8rem;
        color: #308bc5;
        font-weight: 500;
        font-style: italic;
    }

    
`