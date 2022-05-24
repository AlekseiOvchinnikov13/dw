import './style.scss';

const Form = () => {

  return (
    <div className='form-page'>
      <h2 className='form-page__description'>Edit offer constructor</h2>
      <div className='form-page__content'>
        <form className='form' id='form'>
          <fieldset className="form-header">
            <label htmlFor="title">
              Title
              <input placeholder='Пример конструктора предложений' type="text" id="title" name='title'
                     className='big-input'/>
            </label>
          </fieldset>
          <fieldset className="activation-condition-group">
            <p className='group-title'>Activation conditions</p>
            <label htmlFor="have-card">
              Have card
              <select id="have-card" name='have-card' className='big-input'>
                <option value='Карта лояльности'>Карта лояльности</option>
                <option value='Дебетовая карта - золотая'>Дебетовая карта - золотая</option>
                <option value='Кредитная карта - с начислением миль'>Кредитная карта - с начислением миль</option>
                <option value='Карта дебетовая - транспортная'>Карта дебетовая - транспортная</option>
                <option value='Кредитная карта - платиновый статус'>Кредитная карта - платиновый статус</option>
              </select>
            </label>
            <label htmlFor="amount-transactions">
              Amount of transactions
              <input placeholder='40000' type="text" id="amount-transactions" name='amount-of-transactions'
                     className='big-input'/>
            </label>
            <label htmlFor="In-the-group" className='radio-label'>
              In the group
              <div className="radio1">
                <label htmlFor='loyal-clients'>
                  <input id='loyal-clients' name='in-the-group' type="radio"/>
                  Лояльные кленты
                </label>
                <label htmlFor='vip-clients'>
                  <input id='vip-clients' name='in-the-group' type="radio"/>
                  Vip клиенты
                </label>
                <label htmlFor='purchase-probability'>
                  <input id='purchase-probability' name='in-the-group' type="radio"/>
                  Вероятность покупки продукта
                </label>
              </div>
            </label>
            <fieldset className='registration-period-dates'>
              <label htmlFor="registration-period">
                Registration period
                <div className="input-dates-wrapper">
                  <input value="2021-01-01" type="date" id="registration-period-from"
                         name='registration-period-from'/>
                  <input value='2021-01-01' type="date" id="registration-period-to"
                         name='registration-period-to'/>
                </div>
              </label>
            </fieldset>
            <fieldset className='event-set'>
              <div className="text-wrapper">
                <label htmlFor="event" className='label-wrapper'>
                  Event
                  <div className="text-inner-wrapper">
                    <input placeholder='Open email' type="email" id="event" name='event'/>
                    <label htmlFor="param">
                      Param
                      <input placeholder='Скидки для всех' type="text" id="param" name='param'/>
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
            <fieldset className='event-set'>
              <div className="text-wrapper">
                <label htmlFor="event" className='label-wrapper'>
                  Event
                  <div className="text-inner-wrapper">
                    <input placeholder='Open email' type="email" id="event" name='event'/>
                    <label htmlFor="param">
                      Param
                      <input placeholder='Скидки для всех' type="text" id="param" name='param'/>
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
          </fieldset>
          <fieldset className="offer-terms-group">
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
            <label htmlFor="product">
              Product
              <select id="product" name='product' className='big-input'>
                <option value='Зеленая карта - горожанина'>Зеленая карта - горожанина</option>
                <option value='Кредит без процентов - 180 дней'>Кредит без процентов - 180 дней</option>
              </select>
            </label>
          </fieldset>
          <input type="submit" value="Save" className='submit-btn'/>
        </form>
      </div>
    </div>
  )
}

export default Form