import renderer from 'react-test-renderer'
import Button from '../Button'

describe('test button component', () => {
  it('render correctly', () => {
    const component = renderer.create(<Button type="primary">123</Button>)

    expect(component).toMatchSnapshot()
  })
})
