import '../../styles/components/output-field.scss'
import SPButton from '../SPButton'
import OutputLabel from './OutputLabel'

function OutputField() {
  return (
    <div className='output-field'>
      <div className='output-field__top'>
        <OutputLabel primaryText='Tip Amount' amount={4.27} />
        <OutputLabel primaryText='Total' amount={32.79} />
      </div>

      <div className='output-field__bottom'>
        <SPButton />
      </div>
    </div>
  )
}

export default OutputField