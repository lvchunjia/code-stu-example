import { setupWorker } from 'msw'
import { handlers } from '.'

export const mocker = setupWorker(...handlers)
