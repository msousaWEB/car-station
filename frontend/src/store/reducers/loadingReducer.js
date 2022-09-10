import { actionTypes } from '../actions/loadingAction'

const initialState = {
    open: false,
    msg: 'Carregando...'
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case actionTypes.CHANGE:
    return { ...state, ...payload }

  default:
    return state
  }
}
