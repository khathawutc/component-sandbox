import React from 'react'
import './gridTable.css'

// https://www.c-sharpcorner.com/UploadFile/babu_2082/div-layout-vs-table-layout-web-designing/
// https://stackoverflow.com/questions/60157144/make-first-column-sticky-in-react-table-with-only-css

const InnerComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isOpen2, setIsOpe2] = React.useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  const handleClick2 = () => {
    setIsOpe2(!isOpen2)
  }
  return (
    <>
      <div class="row-header">room-header</div>
      <div class="mhd">
        <button onClick={handleClick}>click</button>
      </div>
      {isOpen && (
        <div class="row-room-header">
          <div class="row-header" onClick={handleClick2}>
            sub-room-header
          </div>
          <div>text2</div>
          <div>text3</div>
          <div>text4</div>
          <div>text5</div>
          <div>text6</div>
          {isOpen2 && (
            <>
              <div class="row-header">sub-room-header-2</div>
              <div>text2</div>
              <div>text3</div>
              <div>text4</div>
              <div>text5</div>
              <div>text6</div>
            </>
          )}
          <div class="row-header">sub-room-header</div>
          <div>text2</div>
          <div>text3</div>
          <div>text4</div>
          <div>text5</div>
          <div>text6</div>
        </div>
      )}
    </>
  )
}

const GridTable = () => {
  return (
    <>
      <div class="section">
        <header class="row-header">header</header>
        <header>header2</header>
        <header>header3</header>
        <header>header4</header>
        <header>header5</header>
        <header>header6</header>
        <InnerComponent />
        <InnerComponent />
        <InnerComponent />
        <InnerComponent />
        <InnerComponent />
      </div>
    </>
  )
}

export default GridTable
