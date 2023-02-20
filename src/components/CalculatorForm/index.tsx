import { SetStateAction, useEffect, useState } from 'react'
import { Props } from '../../constants/propsTypes'
import '../../styles/components/calculator-form.scss'
// import { thousandSeparator, removeCommas } from '../../utils/thousandSeparator'
import NumberInput from '../NumberInput'
import TipButtons from './TipButtons'
import IconPerson from '../../assets/images/icon-person.svg'
import OutputField from '../OutputField'

function CalculatorForm({ children }: Props) {
  const [bill, setBill] = useState(0)
  const [people, setPeople] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const tipPercentages = [5, 10, 15, 25, 50]

  function handleBillChange(input: any) {
    setBill(input)
  }

  function handleNumOfPeople(input: number) {
    setPeople(input)
  }

  function handlePercentageChange(input: number) {
    setPercentage(input)
  }

  function calculateTip(bill: number, people: number, percentage: number) {
    console.log(bill, people, percentage)
  }

  useEffect(() => {
    calculateTip(bill, people, percentage)
  },[bill, people, percentage])

  return (
    <div className="calculator_form">
      <div className='calculator_form__left'>
        <p className='calculator_form__label'>Bill</p>
        <div className="input_group">
          <span className="prefix">$</span>
          <input type="number" className='input' value={bill} onChange={(e) => handleBillChange(e.target.value) } />
        </div>

        <p className='calculator_form__label'>Select Tip %</p>
        <TipButtons items={tipPercentages} />

        <p className='calculator_form__label'>Number of People</p>
        <NumberInput prefix={IconPerson} handleChange={handleNumOfPeople} value={people} />
      </div>
      <div className="calculator_form__right">
        <OutputField />
      </div>
    </div>
  )
}

export default CalculatorForm