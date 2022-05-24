import SettingsImg from './settings.png';
import './style.scss';

const ReportHeader = () => {

  return (
    <div className='form-page__header-wrapper'>
      <label className='label-input label-input-date'>
        Period
        <input value='2021-01-01' type="date" id="period-from" name='period-from'/>
        <input value='2021-01-01' type="date" id="period-to" name='period-to'/>
      </label>
      <label htmlFor="campaigns" className='label-input'>
        Campaigns
        <input placeholder='Название компании' type="text" id="campaigns" name='campaigns'/>
      </label>
      <label htmlFor="channels" className='label-input'>
        Channels
        <input placeholder='Название канала' type="text" id="channels" name='channels'/>
      </label>
      <img className='settings-img' src={SettingsImg} alt="settings"/>
      <button className='button-search'>Search</button>
    </div>
  )
}

export default ReportHeader;