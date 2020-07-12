import { createSelector } from 'reselect'
import * as issues from '../constants/issues'
import {
  EMERGENCY, TALLAHASSEE_NON_EMERGENCY_FIRE, LEGAL_HOTLINE,
  SAMSI, NATIONALALLIANCE, SUICIDE_HOTLINE, NATIONAL_ASSOCIATION_OF_SOCIAL_WORKERS_TALLAHASSEE,
  CRISIS_HOTLINE, TALLAHASSEE_NON_EMERGENCY_POLICE, WOMENS_HOTLINE, PATHWAYSTOSAFETY, WOMEN_HELPING_WOMEN_HOTLINE
} from '../constants/contactInfo'

export const resources = {
  [issues.MENTAL_1]: [{ number: SUICIDE_HOTLINE, name: 'Suicide Hotline' }, { number: NATIONALALLIANCE, name: 'National Alliance On Mental Health Hotline' }, { number: SAMSI, name: 'Substance Abuse and Mental Health Hotline' }],
  [issues.MENTAL_2]: [{ number: NATIONALALLIANCE, name: 'National Alliance On Mental Health Hotline' }, { number: NATIONAL_ASSOCIATION_OF_SOCIAL_WORKERS_TALLAHASSEE, name: 'City Social Worker' }, { number: CRISIS_HOTLINE, name: 'Text HOME to Crisis Hotline' }],
  [issues.MENTAL_3]: [{ number: CRISIS_HOTLINE, name: 'Text HOME to Crisis Hotline' }, { number: NATIONAL_ASSOCIATION_OF_SOCIAL_WORKERS_TALLAHASSEE, name: 'City Social Worker' }, { number: NATIONALALLIANCE, name: 'National Alliance On Mental Health Hotline' }],
  [issues.PHYSICAL_1]: [{ number: EMERGENCY, name: '911' }, { number: TALLAHASSEE_NON_EMERGENCY_FIRE, name: 'Non-Emergency Fire Dept' }, { number: TALLAHASSEE_NON_EMERGENCY_POLICE, name: 'Non-Emergency Police' }],
  [issues.PHYSICAL_2]: [{ number: LEGAL_HOTLINE, name: 'Legal Hotline' }, { number: TALLAHASSEE_NON_EMERGENCY_POLICE, name: 'Non-Emergency Police' }, { number: TALLAHASSEE_NON_EMERGENCY_FIRE, name: 'Non-Emergency Fire Dept' }],
  [issues.PHYSICAL_3]: [{ number: WOMENS_HOTLINE, name: 'Domestic Violence Hotline' }, { number: PATHWAYSTOSAFETY, name: 'Pathways To Safety Hotline' }, { number: WOMEN_HELPING_WOMEN_HOTLINE, name: 'Women Helping Women' }]
}

export const SET_SITUATION = 'SET_SITUATION'

export const setSituation = situation => ({
  type: SET_SITUATION,
  situation
})

export const SET_SPECIFIC_ISSUE = 'SET_SPECIFIC_ISSUE'

export const setSpecificIssue = issue => ({
  type: SET_SPECIFIC_ISSUE,
  issue
})

const initialState = {
  situation: '',
  issue: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SITUATION: return setSituationAction(state, action)
    case SET_SPECIFIC_ISSUE: return setSpecificIssueAction(state, action)
    default: return state
  }
}

const setSituationAction = (state, action) => ({
  ...state,
  situation: action.situation
})

const setSpecificIssueAction = (state, action) => ({
  ...state,
  issue: action.issue
})

export const selectUserFlow = createSelector(
  state => state.userFlow,
  userFlow => userFlow
)
