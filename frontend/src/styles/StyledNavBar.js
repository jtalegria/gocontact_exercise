import styled from 'styled-components'

const StyledNavBar = styled.nav`
    display: flex;
    height: 100%;

    @media(max-width: 599px){       /* Phones */
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
        #logo{
            order:-1
        }
    }

    @media(min-width: 600px), @media (min-width:768px){       /* iPad */
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
        #logo{
            order:-1
        }
    }

    @media (min-width: 992px){                  /* PC */
        flex-direction: row;
        justify-content: flex-start;
    }
}

`
export default StyledNavBar