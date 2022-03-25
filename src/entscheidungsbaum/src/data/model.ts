
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
    TODO
}

export function chooseValue(decisionTree: DecisionTree, state: DecisionTreeState, value: any): DecisionTreeState {
    TODO
}

export function undoChoice(decisionTree: DecisionTree, state: DecisionTreeState): DecisionTreeState {
    TODO
}

export function getChosenValues(decisionTree: DecisionTree, state: DecisionTreeState): ChosenValues {
    TODO
}

export function isDecisionTreeFinished(decisionTree: DecisionTree, state: DecisionTreeState): boolean {
    TODO
}

export function getNextDecision(decisionTree: DecisionTree, state: DecisionTreeState): Decision {
    TODO
}

export function fillHiddenDecisions(decisionTree: DecisionTree, state: DecisionTreeState): DecisionTreeState {
    TODO
}
