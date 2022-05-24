import {NavLink} from "react-router-dom";
import './style.scss';

const FormPage = () => {
  const svgDelete =
    <svg className="icon" viewBox="-2 -2 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd"
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
      <path fillRule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
    </svg>

  const svgLeftArrow = <svg className="MuiSvgIcon-root MuiPaginationItem-icon" focusable="false" viewBox="0 0 24 24"
                            aria-hidden="true">
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
  </svg>
  const svgRightArrow = <svg className="MuiSvgIcon-root MuiPaginationItem-icon" focusable="false" viewBox="0 0 24 24"
                             aria-hidden="true">
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
  </svg>
  const svgDoubleLeftArrow = <svg className="MuiSvgIcon-root MuiPaginationItem-icon" focusable="false"
                                  viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path>
  </svg>
  const svgDoubleRightArrow = <svg className="MuiSvgIcon-root MuiPaginationItem-icon" focusable="false"
                                   viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path>
  </svg>

  return (
    <div className='form-page'>
      <h2 className='form-page__description'>Offer constructor</h2>
      <div className='form-page__content'>
        <h3 className='form-page__title'>Found 2</h3>
        <div className='form-page__box'>
          <p className='grid-title'>Title</p>
          <p className='grid-title'>Status</p>
          <p className='grid-title'>Action</p>
          <p className='grid-row cell-link'><NavLink to={'/demo-constructor'}>Пример конструктора предложений</NavLink>
          </p>
          <p className='grid-row'>Running</p>
          <p className='grid-row cell-svg'>{svgDelete}</p>
        </div>
        <div className="form-page__bottom">
          <button className='double-arrow'>{svgDoubleLeftArrow}</button>
          <button className='arrow'>{svgLeftArrow}</button>
          <button className='center'>1</button>
          <button className='arrow'>{svgRightArrow}</button>
          <button className='double-arrow'>{svgDoubleRightArrow}</button>
        </div>
      </div>
    </div>
  )
}

export default FormPage;