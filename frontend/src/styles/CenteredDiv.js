import styled from 'styled-components'

const CenteredDiv = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    
    .h1 {
        font-size: 2.5rem;
    }

    #left {
        flex-basis:50%;
        order: 0
    }
    
    #middle {
        flex-basis:50%;
        order: 1
    }

    #right {
        flex-basis:50%;
        order: 2 
    }

    @media(max-width: 599px){       /* Phones */
        flex-direction: column;
        
        h1 {
            font-size: 1.75rem;
        }

        #left{

        }

        
        #right{
            order:-1
        }

        #sun{
            width: 100px;
            height: 100px;
        }
    }

    @media(min-width: 600px), @media (min-width:768px){       /* iPad */
        flex-direction: row;

        #chart {
            flex-basis: 40%;
            margin: 0px 25px 0px 25px;
        }

        #table {
            flex-basis: 60%;
            margin: 0px 25px 0px 0px;
        }
        
        h1 {
            font-size: 2.1rem;
        }
    }

    @media (min-width: 992px){
        flex-direction: row;
        h1 {
            font-size: 4rem;
        }
    }

    
`

export default CenteredDiv