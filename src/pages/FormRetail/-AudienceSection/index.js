import {PARAMETER_OPTIONS} from "../data";

const AudienceSection = () => {

  return (
    <fieldset className='audience-selection-set border-left-block'>
      <div className="text-wrapper">
        <label htmlFor="event" className='label-wrapper'>
          Parameter
          <div className="text-inner-wrapper">
            <input placeholder='Выбери или впиши параметр' id="event" name='event' list='audience-selection-list'/>
            <datalist id='audience-selection-list'>
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
      <fieldset className='event-period-date-set'>
        <label htmlFor="registration-period">
          Event period
          <div className='input-dates-wrapper'>
            <input value='2021-01-01' type="date" id="event-period-from" name='event-period-from'/>
            <input value='2021-01-01' type="date" id="event-period-to" name='event-period-to'/>
          </div>
        </label>
      </fieldset>
    </fieldset>
  )
}

export default AudienceSection;