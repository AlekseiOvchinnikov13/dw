import Audience from "./-Audience";

const ContactPolicy = () => {

  const buttonHandler = (e, selector) => {
    const clone = document.querySelector(selector).cloneNode(true);
    e.target.before(clone);
  }

  const buttonConfirmRejectHandler = (e) => {
    const className = e.target.className.split(" ")[1];
    document.querySelectorAll(`.${className}`)
      .forEach(item => item.remove())
  }

  const buttonConfirmRejectHandlerAll = () => {
    document.querySelectorAll('.cell').forEach(item => item.remove());
  }

  const titleCheckboxHandler = (e) => {
    document.querySelectorAll("input[type='checkbox']")
      .forEach(item => item.checked = e.target.checked);
  }

  const allSelectHandler = () => {
    document.querySelectorAll("input[type='checkbox']")
      .forEach(item => item.checked = true);
  }

  return (
    <div className='form-page'>
      <h2 className='form-page__description'>Contact Policy</h2>
      <div className='form-page__content'>
        <form className='form' id='form'>
          <h2 className='contact-policy-title'>Contact policy</h2>
          <fieldset className="contact-policy-audience-selection-group audience-selection-group">
            <p className='group-title'>Audience selection</p>
            <Audience className='audience-set'/>
            <button
              type='button'
              onClick={e => buttonHandler(e, '.audience-set')}
              className="add-audience-section btn-view"
            >
              Add param
            </button>
          </fieldset>
          <fieldset className="contact-policy-audience-exclusion-group audience-selection-group">
            <p className='group-title'>Audience exclusion</p>
            <Audience className='audience-exclusion-set'/>
            <button
              type='button'
              onClick={e => buttonHandler(e, '.audience-exclusion-set')}
              className="add-audience-section btn-view"
            >
              Add param
            </button>
          </fieldset>
        </form>
        <div className="deviation-from-rules">
          <p className='deviation-from-rules__title fw-bold color-blue'>Deviation from rules</p>
          <div className="deviation-from-rules__box">
            <input id='main-checkbox' type="checkbox" onChange={e => titleCheckboxHandler(e)}/>
            <p>Name</p>
            <p>Campaign</p>
            <p>Channel</p>
            <p>Message templates</p>
            <p>Audience</p>
            <p>+|-</p>

            <input type="checkbox" className='row-1 cell'/>
            <p className='row-1 cell'>Василий Федоров</p>
            <p className='row-1 cell'>1=2</p>
            <p className='row-1 cell'>Push app</p>
            <p className='row-1 cell'>1=2 - test 2</p>
            <p className='row-1 cell'>ML model - со скидкой</p>
            <div className='buttons-wrapper row-1 cell'>
              <button className='confirm-btn row-1 cell' onClick={e => buttonConfirmRejectHandler(e)}>Confirm</button>
              <button className='reject-btn row-1 cell' onClick={e => buttonConfirmRejectHandler(e)}>Reject</button>
            </div>

            <input className='row-2 cell' type="checkbox"/>
            <p className='row-2 cell'>Василий Федоров</p>
            <p className='row-2 cell'>1=2</p>
            <p className='row-2 cell'>E - mail </p>
            <p className='row-2 cell'>1=2 - test 2</p>
            <p className='row-2 cell'>ML model - со скидкой</p>
            <div className='buttons-wrapper row-2 cell'>
              <button className='confirm-btn row-2 cell' onClick={e => buttonConfirmRejectHandler(e)}>Confirm</button>
              <button className='reject-btn row-2 cell' onClick={e => buttonConfirmRejectHandler(e)}>Reject</button>
            </div>

            <input className='row-3 cell' type="checkbox"/>
            <p className='row-3 cell'>Василий Федоров</p>
            <p className='row-3 cell'>1=2</p>
            <p className='row-3 cell'>SMS</p>
            <p className='row-3 cell'>1=2 - test 2</p>
            <p className='row-3 cell'>ML model - со скидкой</p>
            <div className='buttons-wrapper row-3 cell'>
              <button className='confirm-btn row-3 cell' onClick={e => buttonConfirmRejectHandler(e)}>Confirm</button>
              <button className='reject-btn row-3 cell' onClick={e => buttonConfirmRejectHandler(e)}>Reject</button>
            </div>

            <input className='row-4 cell' type="checkbox"/>
            <p className='row-4 cell'>Яна Маринская</p>
            <p className='row-4 cell'>30% скидка</p>
            <p className='row-4 cell'>SMS</p>
            <p className='row-4 cell'>30% скидка - 3 вариант</p>
            <p className='row-4 cell'>Индивидуальная скидка</p>
            <div className='buttons-wrapper row-4 cell'>
              <button className='confirm-btn row-4 cell' onClick={e => buttonConfirmRejectHandler(e)}>Confirm</button>
              <button className='reject-btn row-4 cell' onClick={e => buttonConfirmRejectHandler(e)}>Reject</button>
            </div>
          </div>
          <div className='summary-wrapper'>
            <button onClick={allSelectHandler} className='btn-select-all'>All selected</button>
            <div className='buttons-wrapper'>
              <button className='confirm-btn' onClick={buttonConfirmRejectHandlerAll}>Confirm</button>
              <button className='reject-btn' onClick={buttonConfirmRejectHandlerAll}>Reject</button>
            </div>
          </div>
          <div className="btn-wrapper">
            <button className='submit-btn btn-view'>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPolicy;