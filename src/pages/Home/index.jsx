import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import HomeStyle from "./Home.module.css"
import { searchBook } from "../../redux/Slices/bookSlice"


const HomePage = styled.div`
  
`;
const HomeImage = styled.img`
    width: 400px;
    float: right;
`
const Title = styled.h1`
    font-family: sans-serif;
    font-size: 52px;
    width: 450px;
    color: rgb(219, 29, 146);
    font-weight: 900;
`

function Home() {
    // let [search, setSearch] = useState("")
    let dsdas = ""
    const value = useSelector((state) => state.book.bookName)
    const dispatch = useDispatch()
    const navigate = useNavigate();


    function SearcBook(event) {
        if (event.key === "Enter") {
            // console.log(dsdas)
            dispatch(searchBook(dsdas))
            navigate("/library")
        }
    }
    return (
        <div className={HomeStyle.home}>
            <div className={HomeStyle.home__left}>
                <Title className={HomeStyle.title}>Welcome to my Library</Title>
                <input type="text" className={HomeStyle.inputSearch} placeholder="Search book" onChange={(e) => dsdas = e.target.value} onKeyPress={(e) => SearcBook(e)} />
            </div>
            <div className={HomeStyle.home__right}>
                <HomeImage src="img/home.gif" alt="Books Animation gif" ></HomeImage>
            </div>
        </div>
    )
}

export default Home