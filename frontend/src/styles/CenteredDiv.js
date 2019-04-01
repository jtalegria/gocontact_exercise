import styled from 'styled-components'

const CenteredDiv = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    
    .h1 {
        font-size: 2.5rem;
    }

    @media(max-width: 599px){       /* Phones */
        flex-direction: column;
        
        h1 {
            font-size: 1.75rem;
        }
        
        #chart > div > canvas{
            width: 375px !important;
            height: 200px !important;
        }
    }

    @media(min-width: 600px), @media (min-width:768px){       /* iPad */
        flex-direction: column;

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

    @media (min-width: 992px){              /* PC */
        flex-direction: row;
        }
    }

    
`

export default CenteredDiv