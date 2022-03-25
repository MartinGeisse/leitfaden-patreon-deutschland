
export type Option = {
    text: string;
    value: any;
};

export type Decision = {
    condition?: (chosenValues: ChosenValues) => boolean;
    key: string;
    text: string;
    description: string;
    options: Option[];
};

export type DecisionTree = Decision[];
export type DecisionTreeState = any[];
export type ChosenValues = {[key: string]: any};

export function createInitialDecisionTreeState(decisionTree: DecisionTree): DecisionTreeState {
    return [];
}

export function chooseValue(decisionTree: DecisionTree, state: DecisionTreeState, value: any): DecisionTreeState {
    return fillHiddenDecisions(decisionTree, [...state, value]);
}

export function fillHiddenDecisions(decisionTree: DecisionTree, state: DecisionTreeState): DecisionTreeState {
    state = [...state];
    while (state.length < decisionTree.length) {
        const decision = decisionTree[state.length];
        if (!decision.condition) {
            break;
        }
        const chosenValues = getChosenValues(decisionTree, state);
        if (decision.condition(chosenValues)) {
            break;
        }
        state.push(undefined);
    }
    return state;
}

export function undoChoice(decisionTree: DecisionTree, state: DecisionTreeState): DecisionTreeState {
    state = [...state];
    state.pop();
    while (state.length > 0 && state[state.length - 1] === undefined) {
        state.pop();
    }
    return state;
}

export function getChosenValues(decisionTree: DecisionTree, state: DecisionTreeState): ChosenValues {
    const chosenValues: ChosenValues = {};
    for (let i = 0; i < state.length; i++) {
        if (state[i] !== undefined) {
            chosenValues[decisionTree[i].key] = state[i];
        }
    }
    return chosenValues;
}

export function getNextDecision(decisionTree: DecisionTree, state: DecisionTreeState): Decision|null {
    state = fillHiddenDecisions(decisionTree, state);
    return state.length < decisionTree.length ? decisionTree[state.length] : null;
}

