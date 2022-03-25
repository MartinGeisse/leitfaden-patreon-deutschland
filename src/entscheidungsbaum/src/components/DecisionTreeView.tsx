import {useState} from 'react';
import {DecisionTree, Decision, DecisionTreeState, ChosenValues, createInitialDecisionTreeState,
    getNextDecision, chooseValue, undoChoice, getChosenValues} from "../data/model";
import {DecisionView} from "./DecisionView";
import {ResultView} from "./ResultView";

export type DecisionTreeProps = {
    decisionTree: DecisionTree;
};

export function DecisionTreeView(props: DecisionTreeProps) {
    const [state, setState] = useState<DecisionTreeState>(createInitialDecisionTreeState(props.decisionTree));
    const decision = getNextDecision(props.decisionTree, state);
    const onChooseValue = (value: any) => setState(chooseValue(props.decisionTree, state, value));
    const onUndoChoice = () => setState(undoChoice(props.decisionTree, state));
    if (decision) {
        return <DecisionView decision={decision} onChooseValue={onChooseValue} onUndoChoice={onUndoChoice} />;
    } else {
        return <ResultView chosenValues={getChosenValues(props.decisionTree, state)} onUndoChoice={onUndoChoice} />;
    }
}
