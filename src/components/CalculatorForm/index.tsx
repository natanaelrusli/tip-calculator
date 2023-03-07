import { useEffect, useState } from 'react'
import '../../styles/components/calculator-form.scss'

import NumberInput from '../NumberInput'
import TipButtons from './TipButtons'
import IconPerson from '../../assets/images/icon-person.svg'
import OutputField from '../OutputField'

interface FormData {
  bill: number
  percentage: number
  people: number
}

interface ResultData {
  tip: number
  total: number
}

function CalculatorForm() {
  const tipPercentages = [5, 10, 15, 25, 50]

  const [formData, setFormData] = useState<FormData>({
    bill: 0,
    percentage: 0,
    people: 0
  })

  const [result, setResult] = useState<ResultData>({
    tip: 0,
    total: 0
  })

  function handleBillChange(e: number) {
    setFormData(
      {
        ...formData,
        bill: e
      }
    )
  }

  function handleNumOfPeople(e: number) {
    setFormData(
      {
        ...formData,
        people: e
      }
    )
  }

  function handlePercentageChange(input: number) {
    setFormData(
      {
        ...formData,
        percentage: input
      }
    )
  }

  function resetForm() {
    setFormData({
      ...formData,
      bill: 0,
      percentage: 0,
      people: 0
    })

    setResult({
      ...result,
      tip: 0,
      total: 0
    })
  }

  function calculateTip(bill: number, people: number, percentage: number) {
    let tip: number = (bill * (percentage / 100)) / people
    let total: number = (bill + tip) / people
    setResult({
      ...result,
      tip: tip,
      total: total
    })
  }

  useEffect(() => {
    if (formData.bill && formData.people && formData.percentage) {
      calculateTip(Number(formData.bill), Number(formData.people), formData.percentage)
    }
  },[formData])

  return (
    <div className="calculator_form">
      <div className='calculator_form__left'>
        <p className='calculator_form__label'>Bill</p>
        <div className="input_group">
          <span className="prefix">$</span>
          <input type="number" className='input' value={formData.bill || ''} onChange={(e) => handleBillChange(Number(e.target.value)) } />
        </div>

        <p className='calculator_form__label'>Select Tip %</p>
        <TipButtons items={tipPercentages} handleChange={handlePercentageChange} />

        <p className='calculator_form__label'>Number of People</p>
        <NumberInput prefix={IconPerson} handleChange={handleNumOfPeople} value={formData.people || ''} />
      </div>
      <div className="calculator_form__right">
        <OutputField handleReset={resetForm} total={result.total} tip={result.tip} />
      </div>
    </div>
  )
}

export default CalculatorForm