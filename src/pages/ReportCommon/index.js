import ReportHeader from "../../components/ReportHeader";

const ReportCommon = () => {

  return (
    <div className='form-page'>
      <h2 className='form-page__description'>Данные по отчету - общие данные</h2>
      <div className='form-page__content'>
        <ReportHeader/>
      </div>
    </div>
  )
}

export default ReportCommon;