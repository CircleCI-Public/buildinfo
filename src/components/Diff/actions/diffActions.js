import * as types from '../const'

export const setDiffType = ( type : String ) => ({
  type: types.SET_DIFF_TYPE,
  payload: type,
})
