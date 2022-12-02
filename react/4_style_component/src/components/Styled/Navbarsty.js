import styled from 'styled-components'

export const Navbarsty = styled.nav`

.container{
    height: 60px;
    width: 100%;
    background-color: gray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2px;
}
ul{
    display: flex;
    
}
li{
    /* padding: 0 8px; */
    margin: 0 8px;
    list-style: none;
    padding-right: 15px;
}
.logo{
    padding: 0 4px;

}
a{
    text-decoration: none;
    color: black;
    font-weight:bold;
}
a:hover{
    color: brown;
 
}

`