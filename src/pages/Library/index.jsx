import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchBook, modalToggle } from "../../redux/Slices/bookSlice"
import { BASE_API_LINK } from "../../const"
import LibraryStyle from "./Library.module.css"
// import styled from 'styled-components';

function Library() {
  const value = useSelector((state) => state.book)
  const dispatch = useDispatch()

  const [books, setBooks] = useState([])
  const [modal, setModal] = useState([])

  useEffect(() => {
    if(value.bookName === '') return
    axios.get(BASE_API_LINK + value.bookName).then(resp => {
      setBooks(resp.data.items)
    })
  }, [])


  function Modal(id) {
    setModal([])
    dispatch(modalToggle(true))
    axios.get(BASE_API_LINK + id).then(resp => {
      setModal(resp.data.items)
    })
  }

  console.log(value.modal)
  return (
    <>
      <div className={LibraryStyle.booksWrapper}>
        <div className={LibraryStyle.books}>
          {
            books.map(book => {
              return (
                <div key={book.id} className={LibraryStyle.book}>
                  <div className={LibraryStyle.bookImg}>
                    <img src={`${book?.volumeInfo?.imageLinks?.thumbnail}`} alt="" />
                  </div>
                  <div className={LibraryStyle.content}>
                    <h1 className={LibraryStyle.title}>{book.volumeInfo.title}</h1>
                    <button className={LibraryStyle.detail} onClick={() => Modal(book.id)}>Detail</button>
                    <a className={LibraryStyle.previous} href={`${book?.volumeInfo?.infoLink}`} target="_blank">Previous</a>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>


      <div className={LibraryStyle.modal} style={value.modal ? { display: "flex" } : { display: "none" }} >
        <button className={LibraryStyle.closeBtn} onClick={() => {
          dispatch(modalToggle(false))
        }}>X</button>

        {
          modal.map(item => {
            return (
              <div key={item.id} className={LibraryStyle.modalWrapper}>
                <div className={LibraryStyle.modalLeft}>
                  <img src={`${item?.volumeInfo?.imageLinks?.thumbnail}`} alt="" />
                </div>
                <div className={LibraryStyle.modalRight}>
                  <h1>{item.volumeInfo?.title}</h1>
                  <h4>{item.volumeInfo?.language}</h4>
                  {/* <h4>{item.volumeInfo?.authors[0]}</h4> */}
                  <h4>{item.volumeInfo?.publishedDate}</h4>
                  {/* <h4>{item.volumeInfo?.categories[0]}</h4> */}

                  <p>{item.volumeInfo?.description}</p>
                </div>
              </div>
            )
          })
        }
      </div>

    </>
  )
}

export default Library