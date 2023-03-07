import '../../styles/components/output-field.scss'
import SPButton from '../SPButton'
import OutputLabel from './OutputLabel'
import Props from './propTypes'

function OutputField({total, tip}: Props) {
  return (
    <div className='output-field'>
      <div className='output-field__top'>
        <OutputLabel primaryText='Tip Amount' amount={tip || 0} />
        <OutputLabel primaryText='Total' amount={total || 0} />
      </div>

      <div className='output-field__bottom'>
        <SPButton text='RESET'/>
      </div>
    </div>
  )
}

export default OutputField