import {PARAMETER_OPTIONS} from "../FormRetail/data";
import {SEGMENT_DATA} from "./data";
import '../Form/style.scss';

const ControlGroupSteps = () => {

  const buttonHandler = (e, selector) => {
    const clone = document.querySelector(selector).cloneNode(true);
    e.target.before(clone);
  }

  return (
    <div className='form-page'>
      <h2 className='form-page__description'>Edit сontrol group</h2>
      <div className='form-page__content'>
        <form className='form' id='form'>
          <fieldset className="form-header">
            <label htmlFor="title">
              Title
              <input placeholder='Контрольная группа - 1. Avg bill: 0-999' type="text" id="title" name='title'
                     className='big-input'/>
            </label>
          </fieldset>
          <fieldset className="audience-segment-group">
            <p className='group-title'>Audience segment</p>
            <div className="text-wrapper segment-section">
              <label htmlFor="segment" className='label-wrapper'>
                Segment
                <div className="text-inner-wrapper">
                  <input placeholder='Выбери или впиши сегмент аудитории' id="segment" name='segment'
                         list='segment-list'/>
                  <datalist id='segment-list'>
                    {SEGMENT_DATA.map(option =>
                      <option key={option} value={option}>{option}</option>
                    )}
                  </datalist>
                  <label htmlFor="attribute">
                    Attribute
                    <input placeholder='10%' type="text" id="attribute" name='attribute'/>
                  </label>
                </div>
              </label>
            </div>
            <button
              type='button'
              onClick={e => buttonHandler(e, '.segment-section')}
              className="add-audience-section btn-view"
            >
              Add param
            </button>
          </fieldset>
          <fieldset className='audience-segment-group'>
            <p className='group-title'>Audience parameter</p>
            <div className="text-wrapper segment-section-param">
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
                    <input placeholder='1000' type="text" id="param" name='param'/>
                  </label>
                </div>
              </label>
            </div>
            <button
              type='button'
              onClick={e => buttonHandler(e, '.segment-section-param')}
              className="add-required-param btn-view"
            >
              Add param
            </button>
          </fieldset>
          <input type="submit" value="Save as segment" className='submit-btn btn-view segment-btn'/>
        </form>
      </div>
    </div>
  )
}

export default ControlGroupSteps
