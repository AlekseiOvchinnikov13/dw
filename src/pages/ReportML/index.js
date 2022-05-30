import './style.scss';
import ReportHeader from "../../components/ReportHeader";

const ReportML = () => {

  return (
    <div className='form-page'>
      <h2 className='form-page__description'>Данные по отчету - с ml моделью</h2>
      <div className='form-page__content form-page__content-report'>
        <ReportHeader/>
        <div className='report-box ml-report'>
          <p className='top-left-cell'>Рассылка</p>
          <p className='top-title-cell include-2'>Охват</p>
          <p className='top-title-cell include-5'>Целевая группа</p>
          <p className='top-title-cell include-5'>Контрольная группа</p>
          <p className='top-title-cell include-7'>Сравнение</p>
          <p className='top-title-cell include-2'>Итого</p>
          <p className='middle-title-cell'>Количество отправленных сообщений, шт</p>
          <p className='middle-title-cell'>Объём контрольной группы, шт</p>
          <p className='middle-title-cell'>Покупатели  ЦГ, чел</p>
          <p className='middle-title-cell'>Чеки ЦГ, шт</p>
          <p className='middle-title-cell'>Выручка ЦГ, руб</p>
          <p className='middle-title-cell'>Отклик ЦГ, %</p>
          <p className='middle-title-cell'>Средний чек ЦГ, руб</p>
          <p className='middle-title-cell'>Покупатели КГ, чел</p>
          <p className='middle-title-cell'>Чеки КГ, шт</p>
          <p className='middle-title-cell'>Выручка КГ, руб</p>
          <p className='middle-title-cell'>Отклик КГ, %</p>
          <p className='middle-title-cell'>Средний чек КГ, руб</p>
          <p className='middle-title-cell'>Отклик ЦГ/Отклик КГ, разница в %</p>
          <p className='middle-title-cell'>Базовая выручка в ЦГ, руб</p>
          <p className='middle-title-cell'>Выручка засчёт рассылки, руб</p>
          <p className='middle-title-cell'>Прирост выручки за счет рассылок, %</p>
          <p className='middle-title-cell'>Расходы на рассылки, руб</p>
          <p className='middle-title-cell'>Маржа, %</p>
          <p className='middle-title-cell'>Итоговая прибыль от проведения рассылки, руб</p>
          <p className='middle-title-cell'>Выручка, руб</p>
          <p className='middle-title-cell'>Доля рассылки в выручке , %</p>

          <p className='cell-start-group'>Молочная продукция - случайный лес</p>
          <p className='bg-dark'>2 000</p>
          <p className='bg-light'>200</p>
          <p className='bg-dark'>1358</p>
          <p className='bg-light'>1 360</p>
          <p className='bg-dark'>1 089 070 ₽</p>
          <p className='bg-light'>68,00%</p>
          <p className='bg-dark'>1 762 ₽</p>
          <p className='bg-light'>32</p>
          <p className='bg-dark'>43</p>
          <p className='bg-light'>58 137 ₽</p>
          <p className='bg-dark'>21,50%</p>
          <p className='bg-light'>1 352 ₽</p>
          <p className='bg-dark'>2,99</p>
          <p className='bg-light'>581 371 ₽</p>
          <p className='bg-dark'>507 699 ₽</p>
          <p className='bg-light'>87%</p>
          <p className='bg-dark'>0,00</p>
          <p className='bg-light'>30%</p>
          <p className='bg-dark'>152 310 ₽</p>
          <p className='bg-light'>1 000 000</p>
          <p className='bg-dark'>50,8%</p>

          <p className='cell-start-group'>Мясная продукция - случайный лес</p>
          <p className='bg-light'>2 000</p>
          <p>200</p>
          <p className='bg-light'>1613</p>
          <p>1 613</p>
          <p className='bg-light'>1 405 785 ₽</p>
          <p>80,63%</p>
          <p className='bg-light'>1 918 ₽</p>
          <p>5</p>
          <p className='bg-light'>54</p>
          <p>63 293 ₽</p>
          <p className='bg-light'>27,00%</p>
          <p>1 172 ₽</p>
          <p className='bg-light'>10,39</p>
          <p>632 930 ₽</p>
          <p className='bg-light'>772 855 ₽</p>
          <p>122%</p>
          <p className='bg-light'>0,00</p>
          <p>30%</p>
          <p className='bg-light'>231 856 ₽</p>
          <p>1 000 000</p>
          <p className='bg-light'>77,3%</p>

          <p className='cell-start-group'>Акция 1+1 - дерево решений</p>
          <p className='bg-dark'>2 000</p>
          <p className='bg-light'>200</p>
          <p className='bg-dark'>2180</p>
          <p className='bg-light'>2 183</p>
          <p className='bg-dark'>2 178 310 ₽</p>
          <p className='bg-light'>109,13%</p>
          <p className='bg-dark'>2 196 ₽</p>
          <p className='bg-light'>3</p>
          <p className='bg-dark'>21</p>
          <p className='bg-light'>72 461 ₽</p>
          <p className='bg-dark'>10,50%</p>
          <p className='bg-light'>3 451 ₽</p>
          <p className='bg-dark'>2,61</p>
          <p className='bg-light'>724 606 ₽</p>
          <p className='bg-dark'>1 453 704 ₽</p>
          <p className='bg-light'>201%</p>
          <p className='bg-dark'>0,00</p>
          <p className='bg-light'>30%</p>
          <p className='bg-dark'>436 111 ₽</p>
          <p className='bg-light'>1 000 000</p>
          <p className='bg-dark'>145,4%</p>

          <p className='cell-start-group'>Выдача карт - ml 1</p>
          <p className='bg-light'>2 000</p>
          <p>200</p>
          <p className='bg-light'>855</p>
          <p>863</p>
          <p className='bg-light'>803 640 ₽</p>
          <p>43,13%</p>
          <p className='bg-light'>2 050 ₽</p>
          <p>23</p>
          <p className='bg-light'>33</p>
          <p>67 646 ₽</p>
          <p className='bg-light'>16,50%</p>
          <p>2 050 ₽</p>
          <p className='bg-light'>12,94</p>
          <p>676 455 ₽</p>
          <p className='bg-light'>127 185 ₽</p>
          <p>19%</p>
          <p className='bg-light'>0,00</p>
          <p>30%</p>
          <p className='bg-light'>38 155 ₽</p>
          <p>1 000 000</p>
          <p className='bg-light'>12,7%</p>

          <p className='cell-start-group'>Масла категория - случайный лес</p>
          <p className='bg-dark'>2 000</p>
          <p className='bg-light'>200</p>
          <p className='bg-dark'>1553</p>
          <p className='bg-light'>1 553</p>
          <p className='bg-dark'>1 409 965 ₽</p>
          <p className='bg-light'>77,63%</p>
          <p className='bg-dark'>1 998 ₽</p>
          <p className='bg-light'>21</p>
          <p className='bg-dark'>12</p>
          <p className='bg-light'>65 935 ₽</p>
          <p className='bg-dark'>6,00%</p>
          <p className='bg-light'>5 495 ₽</p>
          <p className='bg-dark'>15,04</p>
          <p className='bg-light'>659 346 ₽</p>
          <p className='bg-dark'>750 619 ₽</p>
          <p className='bg-light'>114%</p>
          <p className='bg-dark'>0,00</p>
          <p className='bg-light'>30%</p>
          <p className='bg-dark'>225 186 ₽</p>
          <p className='bg-light'>1 000 000</p>
          <p className='bg-dark'>75,1%</p>

          <p className='cell-start-group'>Молочная продукция - градиентный бустинг</p>
          <p className='bg-light'>2 000</p>
          <p>200</p>
          <p className='bg-light'>1803</p>
          <p>1 805</p>
          <p className='bg-light'>1 957 470 ₽</p>
          <p>90,25%</p>
          <p className='bg-light'>2 386 ₽</p>
          <p>32</p>
          <p className='bg-light'>12</p>
          <p>78 733 ₽</p>
          <p className='bg-light'>6,00%</p>
          <p>6 561 ₽</p>
          <p className='bg-light'>5,36</p>
          <p>787 326 ₽</p>
          <p className='bg-light'>1 170 144 ₽</p>
          <p>149%</p>
          <p className='bg-light'>0,00</p>
          <p>30%</p>
          <p className='bg-light'>351 043 ₽</p>
          <p>1 000 000</p>
          <p className='bg-light'>117,0%</p>


          <p className='bottom-summary-cell bottom-summary-left-cell'>Итого</p>
          <p className='bottom-summary-cell bg-dark'>12 000</p>
          <p className='bottom-summary-cell bg-light'>1 200</p>
          <p className='bottom-summary-cell bg-dark'>9 360</p>
          <p className='bottom-summary-cell bg-light'>9 375</p>
          <p className='bottom-summary-cell bg-dark'>8 844 240 ₽</p>
          <p className='bottom-summary-cell bg-light'>78,13%</p>
          <p className='bottom-summary-cell bg-dark'>943 ₽</p>
          <p className='bottom-summary-cell bg-light'>116</p>
          <p className='bottom-summary-cell bg-dark'>175</p>
          <p className='bottom-summary-cell bg-light'>406 203 ₽₽</p>
          <p className='bottom-summary-cell bg-dark'>14,58%</p>
          <p className='bottom-summary-cell bg-light'>2 321 ₽</p>
          <p className='bottom-summary-cell bg-dark'>5,36</p>
          <p className='bottom-summary-cell bg-light'>4 062 035 ₽</p>
          <p className='bottom-summary-cell bg-dark'>4 782 205 ₽</p>
          <p className='bottom-summary-cell bg-light'>118%</p>
          <p className='bottom-summary-cell bg-dark'>- ₽</p>
          <p className='bottom-summary-cell bg-light'>30%</p>
          <p className='bottom-summary-cell bg-dark'>1 434 662 ₽</p>
          <p className='bottom-summary-cell bg-light'>6 000 000</p>
          <p className='bottom-summary-cell bg-dark'>79,7%</p>
        </div>
      </div>
    </div>
  )
}

export default ReportML;