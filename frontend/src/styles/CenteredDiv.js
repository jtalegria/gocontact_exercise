import styled from 'styled-components'

const CenteredDiv = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;

    @media(max-width: 1070px){
        flex-direction: column;
    }
`

export default CenteredDiv