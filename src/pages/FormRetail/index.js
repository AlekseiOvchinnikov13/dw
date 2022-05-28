import '../Form/style.scss';
import AudienceSection from "./-AudienceSection";
import {BONUS_OPTIONS, PARAMETER_OPTIONS, PRODUCT_OPTIONS} from "./data";

const FormRetail = () => {

  const buttonHandler = (e, selector) => {
    const clone = document.querySelector(selector).cloneNode(true);
    e.target.before(clone);
  }

  return (
    <div className='form-page'>
      <h2 className='form-page__description'>Edit retail constructor</h2>
      <div className='form-page__content'>
        <form className='form' id='form'>
          <fieldset className="form-header">
            <label htmlFor="title">
              Title
              <input placeholder='Пример для розничной сети' type="text" id="title" name='title'
                     className='big-input'/>
            </label>
          </fieldset>
          <fieldset className="audience-selection-group">
            <p className='group-title'>Audience selection</p>
            <AudienceSection/>
            <button
              type='button'
              onClick={e => buttonHandler(e, '.audience-selection-set')}
              className="add-audience-section btn-view"
            >
              Add param
            </button>
          </fieldset>
          <fieldset className='steps-to-activate-group'>
            <p className='group-title'>Steps to activate</p>
            <label htmlFor="registration-period">
              Promotion duration
              <div className="input-dates-wrapper">
                <input value="2021-01-01" type="date" id="registration-period-from"
                       name='registration-period-from'/>
                <input value='2021-01-01' type="date" id="registration-period-to"
                       name='registration-period-to'/>
              </div>
            </label>
            <label htmlFor="registration-period">
              Period for event
              <div className="input-dates-wrapper">
                <input value="2021-01-01" type="date" id="registration-period-from"
                       name='registration-period-from'/>
                <input value='2021-01-01' type="date" id="registration-period-to"
                       name='registration-period-to'/>
              </div>
            </label>
          </fieldset>
          <fieldset className='required-parameters-group'>
            <p className='group-title group-title-gray'>Required parameters</p>
            <div className="text-wrapper required-param-text-wrapper">
              <label htmlFor="event" className='label-wrapper'>
                Parameter
                <div className="text-inner-wrapper">
                  <input placeholder='Выбери или впиши параметр' id="event" name='event' list='required-param-list'/>
                  <datalist id='required-param-list'>
                    {PARAMETER_OPTIONS.map(option =>
                      <option key={option} value={option}>{option}</option>
                    )}
                  </datalist>
                  <label htmlFor="param">
                    Attribute
                    <input placeholder='>1000' type="text" id="param" name='param'/>
                  </label>
                </div>
              </label>
            </div>
            <button
              type='button'
              onClick={e => buttonHandler(e, '.required-param-text-wrapper')}
              className="add-required-param btn-view"
            >
              Add param
            </button>
          </fieldset>
          <fieldset className='params-to-choose-from-group'>
            <p className='group-title group-title-gray'>Parameters to choose from</p>
            <div className="text-wrapper params-to-choose-from-wrapper">
              <label htmlFor="event" className='label-wrapper'>
                Parameter
                <div className="text-inner-wrapper">
                  <input placeholder='Выбери или впиши параметр' id="event" name='event'
                         list='params-to-choose-from-list'/>
                  <datalist id='params-to-choose-from-list'>
                    {PARAMETER_OPTIONS.map(option =>
                      <option key={option} value={option}>{option}</option>
                    )}
                  </datalist>
                  <label htmlFor="param">
                    Attribute
                    <input placeholder='>1000' type="text" id="param" name='param'/>
                  </label>
                </div>
              </label>
            </div>
            <button
              type='button'
              onClick={e => buttonHandler(e, '.params-to-choose-from-wrapper')}
              className="add-params-to-choose-from btn-view"
            >
              Add param
            </button>
          </fieldset>
          <fieldset className="offer-terms-group offer-terms-group-extra">
            <p className='group-title'>Offer terms</p>
            <label htmlFor="discount">
              Discount
              <input placeholder='Размер скидки' type="text" id="discount" name='discount' className='big-input'/>
            </label>
            <label htmlFor="earn-points">
              Earn points
              <input placeholder='Количество баллов' type="text" id="earn-points" name='earn-points'
                     className='big-input'/>
            </label>
            <div className="text-wrapper bonus-wrapper">
              <label htmlFor="event" className='label-wrapper'>
                Bonus
                <div className="text-inner-wrapper">
                  <input placeholder='Выбери или впиши параметр' id="event" name='event' list='bonus-list'/>
                  <datalist id='bonus-list'>
                    {BONUS_OPTIONS.map(option =>
                      <option key={option} value={option}>{option}</option>
                    )}
                  </datalist>
                  <label htmlFor="param">
                    Attribute
                    <input placeholder='>1000' type="text" id="param" name='param'/>
                  </label>
                </div>
              </label>
            </div>
            <label htmlFor="product">
              Product
              <select id="product" name='product' className='big-input'>
                <option value='' disabled selected hidden>Проудкты, на которые распросторонятеся</option>
                {PRODUCT_OPTIONS.map(option =>
                  <option key={option} value={option}>{option}</option>
                )}
              </select>
            </label>
          </fieldset>
          <input type="submit" value="Save" className='submit-btn btn-view'/>
        </form>
      </div>
    </div>
  )
}

export default FormRetail
