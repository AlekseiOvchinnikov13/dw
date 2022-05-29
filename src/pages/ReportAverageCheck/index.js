import Chart1 from './images/chart1.png';
import Chart2 from './images/chart2.png';
import Chart3 from './images/chart3.png';
import ReportHeader from "../../components/ReportHeader";

const ReportCommon = () => {

  return (
    <div className='form-page'>
      <h2 className='form-page__description'>Данные по отчету - общие данные</h2>
      <div className='form-page__content form-page__content-report'>
        <ReportHeader/>
        <div className='chart-wrapper'>
          <img src={Chart1} alt="chart"/>
          <img src={Chart2} alt="chart"/>
          <img src={Chart3} alt="chart"/>
        </div>
        <div className='report-box average-check-report common-report'>
          <p className='middle-title-cell'>Месяц</p>
          <p className='middle-title-cell'>Дата начала</p>
          <p className='middle-title-cell'>Дата окончания</p>
          <p className='middle-title-cell'>Название компании</p>
          <p className='middle-title-cell'>Канал коммуникации</p>
          <p className='middle-title-cell'>Выборка</p>
          <p className='middle-title-cell'>Отправлено, шт</p>
          <p className='middle-title-cell'>Доставлено, шт</p>
          <p className='middle-title-cell'>OR, %</p>
          <p className='middle-title-cell'>CR, %</p>
          <p className='middle-title-cell'>Открыли, чел</p>
          <p className='middle-title-cell'>Перешли/чел</p>
          <p className='middle-title-cell'>Перешли/клики</p>
          <p className='middle-title-cell'>CTOR, %</p>
          <p className='middle-title-cell'>Ср. чек заказы email, руб</p>
          <p className='middle-title-cell'>Заказы, шт</p>
          <p className='middle-title-cell'>Конверсия, %</p>
          <p className='middle-title-cell'>Выручка по заказам, руб</p>

          <p className='text-cell bg-light'>Февраль</p>
          <p className='text-cell bg-dark'>17.02.2021</p>
          <p className='text-cell bg-light'>24.02.2021</p>
          <p className='text-cell bg-dark'>Скидка 23% на фотокниги вариант 1</p>
          <p className='text-cell bg-light'>Push app</p>
          <p className='text-cell bg-dark'>вся активная база</p>
          <p className='text-cell bg-light'>399 687</p>
          <p className='text-cell bg-dark'>399 310</p>
          <p className='text-cell bg-light'>10,57%</p>
          <p className='text-cell bg-dark'>0,79%</p>
          <p className='text-cell bg-light'>42 215</p>
          <p className='text-cell bg-dark'>30816,95</p>
          <p className='text-cell bg-light'>3 144</p>
          <p className='text-cell bg-dark'>7,45%</p>
          <p className='text-cell bg-light'>1 974</p>
          <p className='text-cell bg-dark'>320</p>
          <p className='text-cell bg-light'>0,08%</p>
          <p className='text-cell bg-dark'>631 640</p>

          <p className='text-cell'>Февраль</p>
          <p className='text-cell bg-light'>17.02.2021</p>
          <p className='text-cell'>24.02.2021</p>
          <p className='text-cell bg-light'>Скидка 23% на фотокниги вариант 1</p>
          <p className='text-cell'>SMS</p>
          <p className='text-cell bg-light'>вся активная база</p>
          <p className='text-cell'>400 090</p>
          <p className='text-cell bg-light'>399 690</p>
          <p className='text-cell'>10,59%</p>
          <p className='text-cell bg-light'>0,77%</p>
          <p className='text-cell'>42 342</p>
          <p className='text-cell bg-light'>30909,66</p>
          <p className='text-cell'>3 059</p>
          <p className='text-cell bg-light'>7,22%</p>
          <p className='text-cell'>2 032</p>
          <p className='text-cell bg-light'>296</p>
          <p className='text-cell'>0,07%</p>
          <p className='text-cell bg-light'>601 509</p>

          <p className='text-cell bg-light'>Февраль</p>
          <p className='text-cell bg-dark'>17.02.2021</p>
          <p className='text-cell bg-light'>24.02.20211</p>
          <p className='text-cell bg-dark'>Скидка 23% на фотокниги вариант 1</p>
          <p className='text-cell bg-light'>Push app</p>
          <p className='text-cell bg-dark'>вся активная база</p>
          <p className='text-cell bg-light'>707 566</p>
          <p className='text-cell bg-dark'>706 861</p>
          <p className='text-cell bg-light'>10,63%</p>
          <p className='text-cell bg-dark'>0,95%</p>
          <p className='text-cell bg-light'>75 111</p>
          <p className='text-cell bg-dark'>54831,03</p>
          <p className='text-cell bg-light'>6 680</p>
          <p className='text-cell bg-dark'>8,89%</p>
          <p className='text-cell bg-light'>1 352</p>
          <p className='text-cell bg-dark'>635</p>
          <p className='text-cell bg-light'>0,09%</p>
          <p className='text-cell bg-dark'>858 330</p>

          <p className='text-cell'>Февраль</p>
          <p className='text-cell bg-light'>17.02.2021</p>
          <p className='text-cell'>24.02.2021</p>
          <p className='text-cell bg-light'>Скидка 23% на фотокниги вариант 1</p>
          <p className='text-cell'>Push app</p>
          <p className='text-cell bg-light'>вся активная база</p>
          <p className='text-cell'>707 197</p>
          <p className='text-cell bg-light'>705 418</p>
          <p className='text-cell'>12,46%</p>
          <p className='text-cell bg-light'>1,09%</p>
          <p className='text-cell'>87 928</p>
          <p className='text-cell bg-light'>64187,44</p>
          <p className='text-cell'>7 656</p>
          <p className='text-cell bg-light'>8,71%</p>
          <p className='text-cell'>1 135</p>
          <p className='text-cell bg-light'>861</p>
          <p className='text-cell'>0,12%</p>
          <p className='text-cell bg-light'>977 574</p>

          <p className='text-cell bg-light'>Февраль</p>
          <p className='text-cell bg-dark'>17.02.2021</p>
          <p className='text-cell bg-light'>24.02.20211</p>
          <p className='text-cell bg-dark'>Скидка 23% на фотокниги вариант 1</p>
          <p className='text-cell bg-light'>Push app</p>
          <p className='text-cell bg-dark'>вся активная база</p>
          <p className='text-cell bg-light'>707 753</p>
          <p className='text-cell bg-dark'>706 017</p>
          <p className='text-cell bg-light'>12,44%</p>
          <p className='text-cell bg-dark'>1,60%</p>
          <p className='text-cell bg-light'>87 820</p>
          <p className='text-cell bg-dark'>64108,6</p>
          <p className='text-cell bg-light'>11 283</p>
          <p className='text-cell bg-dark'>12,85%</p>
          <p className='text-cell bg-light'>929</p>
          <p className='text-cell bg-dark'>1 985</p>
          <p className='text-cell bg-light'>0,28%</p>
          <p className='text-cell bg-dark'>1 843 473</p>

          <p className='text-cell'>Февраль</p>
          <p className='text-cell bg-light'>17.02.2021</p>
          <p className='text-cell'>24.02.2021</p>
          <p className='text-cell bg-light'>Скидка 23% на фотокниги вариант 1</p>
          <p className='text-cell'>E-mail</p>
          <p className='text-cell bg-light'>вся активная база</p>
          <p className='text-cell'>649 246</p>
          <p className='text-cell bg-light'>648 573</p>
          <p className='text-cell'>6,09%</p>
          <p className='text-cell bg-light'>0,51%</p>
          <p className='text-cell'>39 527</p>
          <p className='text-cell bg-light'>28854,71</p>
          <p className='text-cell'>3 337</p>
          <p className='text-cell bg-light'>8,44%</p>
          <p className='text-cell'>1 387</p>
          <p className='text-cell bg-light'>235</p>
          <p className='text-cell'>0,04%</p>
          <p className='text-cell bg-light'>326 040</p>

          <p className='text-cell bg-light'>Февраль</p>
          <p className='text-cell bg-dark'>17.02.2021</p>
          <p className='text-cell bg-light'>24.02.20211</p>
          <p className='text-cell bg-dark'>Скидка 23% на фотокниги вариант 1</p>
          <p className='text-cell bg-light'>E-mail</p>
          <p className='text-cell bg-dark'>вся активная база</p>
          <p className='text-cell bg-light'>715 052</p>
          <p className='text-cell bg-dark'>714 331</p>
          <p className='text-cell bg-light'>11,38%</p>
          <p className='text-cell bg-dark'>0,77%</p>
          <p className='text-cell bg-light'>81 307</p>
          <p className='text-cell bg-dark'>59354,11</p>
          <p className='text-cell bg-light'>5 932</p>
          <p className='text-cell bg-dark'>7,32%</p>
          <p className='text-cell bg-light'>1 522</p>
          <p className='text-cell bg-dark'>468</p>
          <p className='text-cell bg-light'>0,05%</p>
          <p className='text-cell bg-dark'>712 333</p>

          <p className='text-cell'>Февраль</p>
          <p className='text-cell bg-light'>17.02.2021</p>
          <p className='text-cell'>24.02.2021</p>
          <p className='text-cell bg-light'>Скидка 23% на фотокниги вариант 1</p>
          <p className='text-cell'>E-mail</p>
          <p className='text-cell bg-light'>вся активная база</p>
          <p className='text-cell'>713 897</p>
          <p className='text-cell bg-light'>711 674</p>
          <p className='text-cell'>11,00%</p>
          <p className='text-cell bg-light'>0,83%</p>
          <p className='text-cell'>77 820</p>
          <p className='text-cell bg-light'>56808,6</p>
          <p className='text-cell'>5 911</p>
          <p className='text-cell bg-light'>7,60%</p>
          <p className='text-cell'>1 774</p>
          <p className='text-cell bg-light'>308</p>
          <p className='text-cell'>0,04%</p>
          <p className='text-cell bg-light'>546 325</p>

          <p className='text-cell bg-light'>Февраль</p>
          <p className='text-cell bg-dark'>17.02.2021</p>
          <p className='text-cell bg-light'>24.02.20211</p>
          <p className='text-cell bg-dark'>Скидка 23% на фотокниги вариант 1</p>
          <p className='text-cell bg-light'>E-mail</p>
          <p className='text-cell bg-dark'>вся активная база</p>
          <p className='text-cell bg-light'>712 754</p>
          <p className='text-cell bg-dark'>711 766</p>
          <p className='text-cell bg-light'>14,42%</p>
          <p className='text-cell bg-dark'>0,61%</p>
          <p className='text-cell bg-light'>102 626</p>
          <p className='text-cell bg-dark'>74916,98</p>
          <p className='text-cell bg-light'>4 357</p>
          <p className='text-cell bg-dark'>4,25%</p>
          <p className='text-cell bg-light'>2 018</p>
          <p className='text-cell bg-dark'>298</p>
          <p className='text-cell bg-light'>0,04%</p>
          <p className='text-cell bg-dark'>601 365</p>

          <p className='text-cell'>Февраль</p>
          <p className='text-cell bg-light'>17.02.2021</p>
          <p className='text-cell'>24.02.2021</p>
          <p className='text-cell bg-light'>Скидка 23% на фотокниги вариант 1</p>
          <p className='text-cell'>Push app</p>
          <p className='text-cell bg-light'>вся активная база</p>
          <p className='text-cell'>710 658</p>
          <p className='text-cell bg-light'>709 856</p>
          <p className='text-cell'>11,40%</p>
          <p className='text-cell bg-light'>0,63%</p>
          <p className='text-cell'>80 924</p>
          <p className='text-cell bg-light'>59074,52</p>
          <p className='text-cell'>4 486</p>
          <p className='text-cell bg-light'>5,54%</p>
          <p className='text-cell'>2 044</p>
          <p className='text-cell bg-light'>315</p>
          <p className='text-cell'>0,04%</p>
          <p className='text-cell bg-light'>643 851</p>

          <p className='text-cell bg-light'>Февраль</p>
          <p className='text-cell bg-dark'>17.02.2021</p>
          <p className='text-cell bg-light'>24.02.20211</p>
          <p className='text-cell bg-dark'>Скидка 23% на фотокниги вариант 1</p>
          <p className='text-cell bg-light'>Push app</p>
          <p className='text-cell bg-dark'>вся активная база</p>
          <p className='text-cell bg-light'>708 160</p>
          <p className='text-cell bg-dark'>706 999</p>
          <p className='text-cell bg-light'>11,81%</p>
          <p className='text-cell bg-dark'>0,43%</p>
          <p className='text-cell bg-light'>83 492</p>
          <p className='text-cell bg-dark'>60949,16</p>
          <p className='text-cell bg-light'>3 032</p>
          <p className='text-cell bg-dark'>3,63%</p>
          <p className='text-cell bg-light'>2 328</p>
          <p className='text-cell bg-dark'>237</p>
          <p className='text-cell bg-light'>0,03%</p>
          <p className='text-cell bg-dark'>551 725</p>

          <p className='text-cell'>Февраль</p>
          <p className='text-cell bg-light'>17.02.2021</p>
          <p className='text-cell'>24.02.2021</p>
          <p className='text-cell bg-light'>Скидка 23% на фотокниги вариант 1</p>
          <p className='text-cell'>Push app</p>
          <p className='text-cell bg-light'>вся активная база</p>
          <p className='text-cell'>1 603 027</p>
          <p className='text-cell bg-light'>1 595 754</p>
          <p className='text-cell'>3,32%</p>
          <p className='text-cell bg-light'>0,18%</p>
          <p className='text-cell'>52 992</p>
          <p className='text-cell bg-light'>38684,16</p>
          <p className='text-cell'>2 881</p>
          <p className='text-cell bg-light'>5,44%</p>
          <p className='text-cell'>2 534</p>
          <p className='text-cell bg-light'>172</p>
          <p className='text-cell'>0,01%</p>
          <p className='text-cell bg-light'>435 892</p>

          <p className='text-cell bg-light'>Февраль</p>
          <p className='text-cell bg-dark'>17.02.2021</p>
          <p className='text-cell bg-light'>24.02.20211</p>
          <p className='text-cell bg-dark'>Скидка 23% на фотокниги вариант 1</p>
          <p className='text-cell bg-light'>SMS</p>
          <p className='text-cell bg-dark'>вся активная база</p>
          <p className='text-cell bg-light'>1 670 424</p>
          <p className='text-cell bg-dark'>1 664 463</p>
          <p className='text-cell bg-light'>4,60%</p>
          <p className='text-cell bg-dark'>0,30%</p>
          <p className='text-cell bg-light'>69 420</p>
          <p className='text-cell bg-dark'>50676,6</p>
          <p className='text-cell bg-light'>5 470</p>
          <p className='text-cell bg-dark'>7,10%</p>
          <p className='text-cell bg-light'>2 513</p>
          <p className='text-cell bg-dark'>559</p>
          <p className='text-cell bg-light'>0,03%</p>
          <p className='text-cell bg-dark'>1 404 879</p>

          <p className='text-cell'>Февраль</p>
          <p className='text-cell bg-light'>17.02.2021</p>
          <p className='text-cell'>24.02.2021</p>
          <p className='text-cell bg-light'>Скидка 23% на фотокниги вариант 1</p>
          <p className='text-cell'>Push app</p>
          <p className='text-cell bg-light'>вся активная база, часть 1</p>
          <p className='text-cell'>406 751</p>
          <p className='text-cell bg-light'>406 255</p>
          <p className='text-cell'>12,18%</p>
          <p className='text-cell bg-light'>0,56%</p>
          <p className='text-cell'>49 497</p>
          <p className='text-cell bg-light'>36132,81</p>
          <p className='text-cell'>2 290</p>
          <p className='text-cell bg-light'>4,63%</p>
          <p className='text-cell'>2 886</p>
          <p className='text-cell bg-light'>98</p>
          <p className='text-cell'>0,02%</p>
          <p className='text-cell bg-light'>282 813</p>

          <p className='text-cell bg-light'>Февраль</p>
          <p className='text-cell bg-dark'>17.02.2021</p>
          <p className='text-cell bg-light'>24.02.20211</p>
          <p className='text-cell bg-dark'>Скидка 23% на фотокниги вариант 1</p>
          <p className='text-cell bg-light'>Push app</p>
          <p className='text-cell bg-dark'>вся активная база, часть 2</p>
          <p className='text-cell bg-light'>406 938</p>
          <p className='text-cell bg-dark'>406 448</p>
          <p className='text-cell bg-light'>10,33%</p>
          <p className='text-cell bg-dark'>0,58%</p>
          <p className='text-cell bg-light'>41 973</p>
          <p className='text-cell bg-dark'>30640,29</p>
          <p className='text-cell bg-light'>2 368</p>
          <p className='text-cell bg-dark'>5,64%</p>
          <p className='text-cell bg-light'>1 676</p>
          <p className='text-cell bg-dark'>147</p>
          <p className='text-cell bg-light'>0,04%</p>
          <p className='text-cell bg-dark'>246 429</p>

          <p className='text-cell'>Февраль</p>
          <p className='text-cell bg-light'>17.02.2021</p>
          <p className='text-cell'>24.02.2021</p>
          <p className='text-cell bg-light'>Скидка 23% на фотокниги вариант 1</p>
          <p className='text-cell'>Push app</p>
          <p className='text-cell bg-light'>вся активная база</p>
          <p className='text-cell'>934 330</p>
          <p className='text-cell bg-light'>931 304</p>
          <p className='text-cell'>0,94%</p>
          <p className='text-cell bg-light'>0,08%</p>
          <p className='text-cell'>8 740</p>
          <p className='text-cell bg-light'>6380,2</p>
          <p className='text-cell'>789</p>
          <p className='text-cell bg-light'>9,03%</p>
          <p className='text-cell'>2 054</p>
          <p className='text-cell bg-light'>21</p>
          <p className='text-cell'>0,00%</p>
          <p className='text-cell bg-light'>43 135</p>

          <p className='text-cell bg-light'>Февраль</p>
          <p className='text-cell bg-dark'>17.02.2021</p>
          <p className='text-cell bg-light'>24.02.20211</p>
          <p className='text-cell bg-dark'>Скидка 23% на фотокниги вариант 1</p>
          <p className='text-cell bg-light'>SMS</p>
          <p className='text-cell bg-dark'></p>
          <p className='text-cell bg-light'>450</p>
          <p className='text-cell bg-dark'>449</p>
          <p className='text-cell bg-light'>11,36%</p>
          <p className='text-cell bg-dark'>0,45%</p>
          <p className='text-cell bg-light'>51</p>
          <p className='text-cell bg-dark'>37,23</p>
          <p className='text-cell bg-light'>2</p>
          <p className='text-cell bg-dark'>3,92%</p>
          <p className='text-cell bg-light'>0</p>
          <p className='text-cell bg-dark'>0</p>
          <p className='text-cell bg-light'>0,00%</p>
          <p className='text-cell bg-dark'>0</p>

          <p className='text-cell'>Февраль</p>
          <p className='text-cell bg-light'>17.02.2021</p>
          <p className='text-cell'>24.02.2021</p>
          <p className='text-cell bg-light'>Скидка 23% на фотокниги вариант 1</p>
          <p className='text-cell'>SMS</p>
          <p className='text-cell bg-light'>вся активная база</p>
          <p className='text-cell'>798 483</p>
          <p className='text-cell bg-light'>797 718</p>
          <p className='text-cell'>12,76%</p>
          <p className='text-cell bg-light'>0,29%</p>
          <p className='text-cell'>101 796</p>
          <p className='text-cell bg-light'>74311,08</p>
          <p className='text-cell'>2 315</p>
          <p className='text-cell bg-light'>2,27%</p>
          <p className='text-cell'>1 242</p>
          <p className='text-cell bg-light'>73</p>
          <p className='text-cell'>0,01%</p>
          <p className='text-cell bg-light'>90 667</p>

          <p className='text-cell bg-light'>Февраль</p>
          <p className='text-cell bg-dark'>17.02.2021</p>
          <p className='text-cell bg-light'>24.02.20211</p>
          <p className='text-cell bg-dark'>Скидка 23% на фотокниги вариант 1</p>
          <p className='text-cell bg-light'>SMS</p>
          <p className='text-cell bg-dark'>вся активная база</p>
          <p className='text-cell bg-light'>845 407</p>
          <p className='text-cell bg-dark'>842 914</p>
          <p className='text-cell bg-light'>13,69%</p>
          <p className='text-cell bg-dark'>2,03%</p>
          <p className='text-cell bg-light'>116 675</p>
          <p className='text-cell bg-dark'>85172,75</p>
          <p className='text-cell bg-light'>17 141</p>
          <p className='text-cell bg-dark'>14,80%</p>
          <p className='text-cell bg-light'>629</p>
          <p className='text-cell bg-dark'>2 486</p>
          <p className='text-cell bg-light'>0,29%</p>
          <p className='text-cell bg-dark'>1 563 893</p>

          <p className='text-cell'>Февраль</p>
          <p className='text-cell bg-light'>17.02.2021</p>
          <p className='text-cell'>24.02.2021</p>
          <p className='text-cell bg-light'>Скидка 23% на фотокниги вариант 1</p>
          <p className='text-cell'>Push app</p>
          <p className='text-cell bg-light'>вся активная база</p>
          <p className='text-cell'>713 414</p>
          <p className='text-cell bg-light'>712 642</p>
          <p className='text-cell'>7,09%</p>
          <p className='text-cell bg-light'>0,28%</p>
          <p className='text-cell'>50 523</p>
          <p className='text-cell bg-light'>36881,79</p>
          <p className='text-cell'>1 965</p>
          <p className='text-cell bg-light'>3,89%</p>
          <p className='text-cell'>1 972</p>
          <p className='text-cell bg-light'>67</p>
          <p className='text-cell'>0,01%</p>
          <p className='text-cell bg-light'>132 157</p>

          <p className='text-cell bg-light'>Февраль</p>
          <p className='text-cell bg-dark'>17.02.2021</p>
          <p className='text-cell bg-light'>24.02.20211</p>
          <p className='text-cell bg-dark'>Скидка 23% на фотокниги вариант 1</p>
          <p className='text-cell bg-light'>Push app</p>
          <p className='text-cell bg-dark'>вся активная база</p>
          <p className='text-cell bg-light'>826 137</p>
          <p className='text-cell bg-dark'>824 548</p>
          <p className='text-cell bg-light'>12,43%</p>
          <p className='text-cell bg-dark'>2,15%</p>
          <p className='text-cell bg-light'>102 462</p>
          <p className='text-cell bg-dark'>74797,26</p>
          <p className='text-cell bg-light'>17 762</p>
          <p className='text-cell bg-dark'>17,34%</p>
          <p className='text-cell bg-light'>1 602</p>
          <p className='text-cell bg-dark'>524</p>
          <p className='text-cell bg-light'>0,06%</p>
          <p className='text-cell bg-dark'>839 426</p>

          <p className='text-cell'>Февраль</p>
          <p className='text-cell bg-light'>17.02.2021</p>
          <p className='text-cell'>24.02.2021</p>
          <p className='text-cell bg-light'>Скидка 23% на фотокниги вариант 1</p>
          <p className='text-cell'>Push app</p>
          <p className='text-cell bg-light'>вся активная база</p>
          <p className='text-cell'>843 204</p>
          <p className='text-cell bg-light'>842 193</p>
          <p className='text-cell'>11,03%</p>
          <p className='text-cell bg-light'>0,90%</p>
          <p className='text-cell'>92 915</p>
          <p className='text-cell bg-light'>67827,95</p>
          <p className='text-cell'>7 586</p>
          <p className='text-cell bg-light'>8,16%</p>
          <p className='text-cell'>1 080</p>
          <p className='text-cell bg-light'>429</p>
          <p className='text-cell'>0,03%</p>
          <p className='text-cell bg-light'>463 418</p>
        </div>
      </div>
    </div>
  )
}

export default ReportCommon;