// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/react18'
import { MountOptions, MountReturn } from 'cypress/react'
import { EnhancedStore } from '@reduxjs/toolkit'
import store, { RootStore } from '../../src/Redux/store'
import { MemoryRouterProps } from 'react-router-dom'
import { Provider } from 'react-redux'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount(
        component: React.ReactNode,
        options?: MountOptions & { reduxStore?: EnhancedStore<RootStore> } & { routerProps?: MemoryRouterProps }
      ): Cypress.Chainable<MountReturn>
    }
  }
}

Cypress.Commands.add('mount', (component, options = {}) => {
  const { routerProps = { initialEntries: ['/'] } } = options
  const { reduxStore = store, ...mountOptions } = options
  const wrapped = <Provider store={reduxStore}>
  <MemoryRouter {...routerProps}>{component}</MemoryRouter>
  </Provider>

  return mount(wrapped, mountOptions)
})

// Example use:
// cy.mount(<MyComponent />)