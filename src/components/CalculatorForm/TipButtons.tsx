import { Dispatch, useState } from 'react'
import '../../styles/components/tip-buttons.scss'
import Props from './propTypes'

interface ButtonData {
  value: number
}

function TipButtons({ items }:Props) {

  const [selected, setSelected] = useState<ButtonData>({ value: 0 })
  const selectedButtonClass = (state: number) :string => {
    if (selected.value === state) {
      return 'button selected'
    }
    return 'button'
  }


  return (
    <div className='tip-buttons'>
      {
        items.map((item) => <button className={selectedButtonClass(Number(item))} onClick={() => setSelected({ value: Number(item) })}>{ item }%</button>)
      }
      <input type="text" className='input' placeholder='Custom' />
    </div>
  )
}

export default TipButtons