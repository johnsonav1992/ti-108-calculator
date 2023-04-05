import { ACTIONS } from "../logic/actions"

export const mainSectionButtons = [
    {
        label: '+/-'
        , color: 'red'
        , action: ACTIONS.SPECIALTY
    }
    , {
        label: '√'
        , color: 'red'
        , action: ACTIONS.SPECIALTY
    }
    , {
        label: '%'
        , color: 'red'
        , action: ACTIONS.SPECIALTY
    }
    , {
        label: 'MRC'
        , color: 'red'
        , action: ACTIONS.SPECIALTY
    }
    , {
        label: 'M-'
        , color: 'red'
        , action: ACTIONS.SPECIALTY
    }
    , {
        label: 'M+'
        , color: 'red'
        , action: ACTIONS.SPECIALTY
    }
    , {
        label: '7'
        , color: 'white'
        , action: ACTIONS.INPUT_DIGIT
    }
    , {
        label: '8'
        , color: 'white'
        , action: ACTIONS.INPUT_DIGIT
    }
    , {
        label: '9'
        , color: 'white'
        , action: ACTIONS.INPUT_DIGIT
    }
    , {
        label: '4'
        , color: 'white'
        , action: ACTIONS.INPUT_DIGIT
    }
    , {
        label: '5'
        , color: 'white'
        , action: ACTIONS.INPUT_DIGIT
    }
    , {
        label: '6'
        , color: 'white'
        , action: ACTIONS.INPUT_DIGIT
    }
    , {
        label: '1'
        , color: 'white'
        , action: ACTIONS.INPUT_DIGIT
    }
    , {
        label: '2'
        , color: 'white'
        , action: ACTIONS.INPUT_DIGIT
    }
    , {
        label: '3'
        , color: 'white'
        , action: ACTIONS.INPUT_DIGIT
    }
    , {
        label: 'ON/C'
        , color: 'red'
        , action: ACTIONS.CLEAR
        , secondaryAction: ACTIONS.TURN_ON
    }
    , {
        label: '0'
        , color: 'white'
        , action: ACTIONS.INPUT_DIGIT
    }
    , {
        label: '.'
        , color: 'white'
        , action: ACTIONS.INPUT_DIGIT
    }

]

export const operandSectionButtons = [
    {
        label: '÷'
        , color: 'red'
        , action: ACTIONS.CHOOSE_OPERATION
    }
    , {
        label: 'x'
        , color: 'red'
        , action: ACTIONS.CHOOSE_OPERATION
    }
    , {
        label: '-'
        , color: 'red'
        , action: ACTIONS.CHOOSE_OPERATION
    }
    , {
        label: '+'
        , color: 'red'
        , action: ACTIONS.CHOOSE_OPERATION
    }
    , {
        label: '='
        , color: 'red'
        , action: ACTIONS.EVALUATE
    }
]