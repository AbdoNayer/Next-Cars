
export default function Input({ data, setVal }) {
    return (
      <div className='input-style mt-6 mb-3'>
          <input
            type          = { data.title }
            placeholder   = { data.name }
            maxLength     = { data.title === "mobile" ? 11 : null }
            value         = { data.val ? data.val : undefined } 
            onChange      = { e => setVal(e.target.value) }
            disabled      = { data.disabled ? 'disabled' : null }
            id            = { data.title }
          />
          <label>{ data.name }</label>
      </div>
    )
}
  