import AsyncSelect from 'react-select/async'
import makeAnimated from 'react-select/animated'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'mango', label: 'Mango' },
  { value: 'orange', label: 'Orange' },
]

const animatedComponents = makeAnimated()

function App() {
  const loadOptions = (searchValue , callback) => {
    setTimeout(() => {
      console.log(searchValue)
      const filterOptions = options.filter((option) => option.label.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
      callback(filterOptions)
    }, 100)
  }
  return (
    <div style={{ width: "30%" }}>
      <AsyncSelect
        closeMenuOnSelect={false}
        loadOptions={loadOptions}
        defaultOptions={options}
        components={animatedComponents}
        onChange={(select) => {
          console.log(select)
        }}
      />
    </div>
  )
}

export default App
