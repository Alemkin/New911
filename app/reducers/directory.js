import { createSelector } from 'reselect'

export const SET_DIRECTORY_SELECTION = 'SET_DIRECTORY_SELECTION'

export const setDirectorySelection = directoryInfo => ({
  type: SET_DIRECTORY_SELECTION,
  directoryInfo
})

const initialState = {
  directoryInfo: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_DIRECTORY_SELECTION: return setDirectory(state, action)
    default: return state
  }
}

const setDirectory = (state, action) => ({
  ...state,
  directoryInfo: action.directoryInfo
})

export const selectDirectory = createSelector(
  state => state.directory,
  directory => directory
)
