import React from 'react'
import { cleanup, render } from '@testing-library/react-native'

import App from '../App'

afterEach(cleanup)

describe('App', () => {
	it('should show hello world', () => {
		const helloWorldText = 'Hello World!'
		const notFoundText = 'Not found text'

		const { toJSON, getByText, queryByText } = render(<App />)

		const foundHelloWorldTextElement = getByText(helloWorldText)
		const notFoundTextElement = queryByText(notFoundText)

		expect(foundHelloWorldTextElement.props.children).toEqual(helloWorldText)
		expect(notFoundTextElement).toBeNull()
		expect(toJSON()).toMatchSnapshot()
	})

	it('should find the button via testId', () => {
		const testIdName = 'pressMeButton'

		const { getByTestId } = render(<App />)

		const foundButton = getByTestId(testIdName)

		expect(foundButton).toBeTruthy()
	})

	it('should find the button via accessibilityLabel', () => {
		const accessibilityLabel = 'Press me'

		const { getByA11yLabel } = render(<App />)

		const foundButton = getByA11yLabel(accessibilityLabel)

		expect(foundButton).toBeTruthy()
	})

	it('should find the button title', () => {
		const title = 'Press me!'

		const { getByText } = render(<App />)

		const foundButtonTitle = getByText(title)

		expect(foundButtonTitle.props.children).toEqual(title)
	})

	it('should match the body style', () => {
		const { getByTestId } = render(<App />)

		const foundBodyElement = getByTestId('body')
		expect(foundBodyElement.props.style.backgroundColor).toEqual('#ffffff')
	})
})
