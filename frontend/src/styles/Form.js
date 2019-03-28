import styled from 'styled-components'
//font-family: Georgia, "Times New Roman", Times, serif;
const StyledForm = styled.form`
    max-width:400px;
    margin:50px auto;
    background:#fff;
    border-radius:2px;
    padding:20px;
    
    h1{
        display: block;
        text-align: center;
        padding: 0;
        margin: 0px 0px 20px 0px;
        color: #5C5C5C;
        font-size:x-large;
    }
    ul{
        list-style:none;
        padding:0;
        margin:0;	
    }
    li{
        display: block;
        padding: 9px;
        border:1px solid #DDDDDD;
        margin-bottom: 30px;
        border-radius: 3px;
    }
    li:last-child{
        border:none;
        margin-bottom: 0px;
        text-align: center;
    }
    li > label{
        display: block;
        float: left;
        margin-top: -19px;
        background: #FFFFFF;
        
        
        padding: 0px 5px 2px 6px;
        color: #B9B9B9;
        font-size: 14px;
        overflow: hidden;
    }
    input[type="text"],
    input[type="date"],
    input[type="datetime"],
    input[type="email"],
    input[type="number"],
    input[type="search"],
    input[type="time"],
    input[type="url"],
    input[type="password"],
    textarea,
    select 
    {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        width: 100%;
        display: block;
        outline: none;
        border: none;
        height: 25px;
        line-height: 25px;
        font-size: 16px;
        padding: 0;
    }
    input[type="text"]:focus,
    input[type="date"]:focus,
    input[type="datetime"]:focus,
    input[type="email"]:focus,
    input[type="number"]:focus,
    input[type="search"]:focus,
    input[type="time"]:focus,
    input[type="url"]:focus,
    input[type="password"]:focus,
    textarea:focus,
    select:focus 
    {
    }
    li > span{
        background: #F3F3F3;
        display: block;
        padding: 3px;
        margin: 0 -9px -9px -9px;
        text-align: center;
        color: #C0C0C0;
        font-size: 11px;
    }
    textarea{
        resize:none;
    }
    input[type="submit"],
    input[type="button"]{
        background: #cccccc;
        border: none;
        padding: 10px 20px 10px 20px;
        border-bottom: 3px solid #808080;
        border-radius: 8px;
        color: #808080;
    }
    input[type="submit"]:hover,
    input[type="button"]:hover{
        background: #808080;
        color:#fff;
    }
`

export default StyledForm