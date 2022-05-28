import {AUDIENCE_OPTIONS, CHANNEL_OPTIONS, TAG_OPTIONS} from "../data";

const Audience = ({className}) => {

  return (
    <fieldset className={`border-left-block ${className}`}>
      <div className="text-wrapper">
        <label htmlFor="event" className='label-wrapper fw-bold'>
          Audience
          <div className="text-inner-wrapper">
            <input placeholder='Выбери или впиши параметр' id="event" name='event' list='audience-selection-list'/>
            <datalist id='audience-selection-list'>
              {AUDIENCE_OPTIONS.map(option =>
                <option key={option} value={option}>{option}</option>
              )}
            </datalist>
            <label htmlFor="limitation">
              limitation
              <input placeholder='5' type="text" id="limitation" name='limitation'/>
            </label>
          </div>
        </label>
      </div>
      <fieldset className='audience-bottom'>
        <div className="text-wrapper">
          <label htmlFor="period-day" className='period-day'>
            Period day
            <div className='text-inner-wrapper'>
            <input placeholder='30' type="text" id="period-day" name='period-day'/>
              <label htmlFor="channel">
                Channel
                <select id="channel" name='channel'>
                  {CHANNEL_OPTIONS.map(option =>
                    <option key={option} value={option}>{option}</option>
                  )}
                </select>
              </label>
              <label htmlFor="tag">
                Tag
                <select id="tag" name='tag'>
                  {TAG_OPTIONS.map(option =>
                    <option key={option} value={option}>{option}</option>
                  )}
                </select>
              </label>
            </div>
          </label>
        </div>
      </fieldset>
    </fieldset>
  )
}

export default Audience;