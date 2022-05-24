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
          <p className='bg-dark'>1 000</p>
          <p className='bg-light'>100</p>
          <p className='bg-dark'>543</p>
          <p className='bg-light'>544</p>
          <p className='bg-dark'>435 628 ₽</p>
          <p className='bg-light'>54,40%</p>
          <p className='bg-dark'>801 ₽</p>
          <p className='bg-light'>11</p>
          <p className='bg-dark'>12</p>
          <p className='bg-light'>32 700 ₽</p>
          <p className='bg-dark'>12,00%</p>
          <p className='bg-light'>2 725 ₽</p>
          <p className='bg-dark'>10,75</p>
          <p className='bg-light'>327 000 ₽</p>
          <p className='bg-dark'>108 628 ₽</p>
          <p className='bg-light'>33%</p>
          <p className='bg-dark'>1 451 180,00</p>
          <p className='bg-light'>40%</p>
          <p className='bg-dark'>-1 407 729 ₽</p>
          <p className='bg-light'>1 000 000</p>
          <p className='bg-dark'>10,9%</p>
          <p className='cell-start-group'>Мясная продукция - случайный лес</p>
          <p className='bg-light'>1 000</p>
          <p>100</p>
          <p className='bg-light'>645</p>
          <p>645</p>
          <p className='bg-light'>562 314 ₽</p>
          <p>64,50%</p>
          <p className='bg-light'>872 ₽</p>
          <p>5</p>
          <p className='bg-light'>6</p>
          <p>17 630 ₽</p>
          <p className='bg-light'>6,00%</p>
          <p>2 938 ₽</p>
          <p className='bg-light'>4,16</p>
          <p>176 300 ₽</p>
          <p className='bg-light'>386 014 ₽</p>
          <p>219%</p>
          <p className='bg-light'>887 646,00</p>
          <p>40%</p>
          <p className='bg-light'>-733 240 ₽</p>
          <p>1 000 000</p>
          <p className='bg-light'>38,6%</p>
          <p className='cell-start-group'>Акция 1+1 - дерево решений</p>
          <p className='bg-dark'>1 000</p>
          <p className='bg-light'>100</p>
          <p className='bg-dark'>342</p>
          <p className='bg-light'>345</p>
          <p className='bg-dark'>321 456 ₽</p>
          <p className='bg-light'>34,50%</p>
          <p className='bg-dark'>932 ₽</p>
          <p className='bg-light'>19</p>
          <p className='bg-dark'>19</p>
          <p className='bg-light'>43 222 ₽</p>
          <p className='bg-dark'>19,00%</p>
          <p className='bg-light'>2 275 ₽</p>
          <p className='bg-dark'>5,65</p>
          <p className='bg-light'>432 220 ₽</p>
          <p className='bg-dark'>-110 764 ₽</p>
          <p className='bg-light'>-26%</p>
          <p className='bg-dark'>2 537 871,00</p>
          <p className='bg-light'>40%</p>
          <p className='bg-dark'>-2 582 177 ₽</p>
          <p className='bg-light'>1 000 000</p>
          <p className='bg-dark'>-11,1%</p>
          <p className='cell-start-group'>Выдача карт - ml 1</p>
          <p className='bg-light'>1 000</p>
          <p>100</p>
          <p className='bg-light'>872</p>
          <p>873</p>
          <p className='bg-light'>871 324 ₽</p>
          <p>87,30%</p>
          <p className='bg-light'>998 ₽</p>
          <p>21</p>
          <p className='bg-light'>21</p>
          <p>67 431 ₽</p>
          <p className='bg-light'>21,00%</p>
          <p>3 211 ₽</p>
          <p className='bg-light'>1,82</p>
          <p>674 310 ₽</p>
          <p className='bg-light'>197 014 ₽</p>
          <p>29%</p>
          <p className='bg-light'>1 333 332,00</p>
          <p>40%</p>
          <p className='bg-light'>-1 254 526 ₽</p>
          <p>1 000 000</p>
          <p className='bg-light'>19,7%</p>
          <p className='cell-start-group'>Масла категория - случайный лес</p>
          <p className='bg-dark'>1 000</p>
          <p className='bg-light'>100</p>
          <p className='bg-dark'>721</p>
          <p className='bg-light'>722</p>
          <p className='bg-dark'>782 988 ₽</p>
          <p className='bg-light'>72,20%</p>
          <p className='bg-dark'>1 084 ₽</p>
          <p className='bg-light'>32</p>
          <p className='bg-dark'>32</p>
          <p className='bg-light'>103 287 ₽</p>
          <p className='bg-dark'>32,00%</p>
          <p className='bg-light'>3 228 ₽</p>
          <p className='bg-dark'>3,71</p>
          <p className='bg-light'>1 032 870 ₽</p>
          <p className='bg-dark'>-249 882 ₽</p>
          <p className='bg-light'>-24%</p>
          <p className='bg-dark'>2 299 981,00</p>
          <p className='bg-light'>40%</p>
          <p className='bg-dark'>-2 399 934 ₽</p>
          <p className='bg-light'>1 000 000</p>
          <p className='bg-dark'>-25,0%</p>
          <p className='cell-start-group'>Молочная продукция - градиентный бустинг</p>
          <p className='bg-light'>1 000</p>
          <p>100</p>
          <p className='bg-light'>621</p>
          <p>621</p>
          <p className='bg-light'>563 986 ₽</p>
          <p>62,10%</p>
          <p className='bg-light'>908 ₽</p>
          <p>10</p>
          <p className='bg-light'>11</p>
          <p>28 654 ₽</p>
          <p className='bg-light'>11,00%</p>
          <p>2 605 ₽</p>
          <p className='bg-light'>2,26</p>
          <p>286 540 ₽</p>
          <p className='bg-light'>277 446 ₽</p>
          <p>97%</p>
          <p className='bg-light'>1 694 653,00</p>
          <p>40%</p>
          <p className='bg-light'>-1 583 675 ₽</p>
          <p>1 000 000</p>
          <p className='bg-light'>27,7%</p>
          <p className='bottom-summary-cell bottom-summary-left-cell'>Итого</p>
          <p className='bottom-summary-cell bg-dark'>6 000</p>
          <p className='bottom-summary-cell bg-light'>600</p>
          <p className='bottom-summary-cell bg-dark'>3 744</p>
          <p className='bottom-summary-cell bg-light'>3 750</p>
          <p className='bottom-summary-cell bg-dark'>3 537 696 ₽</p>
          <p className='bottom-summary-cell bg-light'>62,50%</p>
          <p className='bottom-summary-cell bg-dark'>943 ₽</p>
          <p className='bottom-summary-cell bg-light'>98</p>
          <p className='bottom-summary-cell bg-dark'>101</p>
          <p className='bottom-summary-cell bg-light'>292 924 ₽</p>
          <p className='bottom-summary-cell bg-dark'>16,83%</p>
          <p className='bottom-summary-cell bg-light'>2 900 ₽</p>
          <p className='bottom-summary-cell bg-dark'>3,71</p>
          <p className='bottom-summary-cell bg-light'>2 929 240 ₽</p>
          <p className='bottom-summary-cell bg-dark'>608 456 ₽</p>
          <p className='bottom-summary-cell bg-light'>21%</p>
          <p className='bottom-summary-cell bg-dark'>10 204 663 ₽</p>
          <p className='bottom-summary-cell bg-light'>40%</p>
          <p className='bottom-summary-cell bg-dark'>-9 961 281 ₽</p>
          <p className='bottom-summary-cell bg-light'>6 000 000</p>
          <p className='bottom-summary-cell bg-dark'>10,1%</p>
        </div>
      </div>
    </div>
  )
}

export default ReportML;