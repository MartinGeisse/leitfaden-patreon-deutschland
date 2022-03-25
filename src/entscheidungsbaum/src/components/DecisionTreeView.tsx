import {DecisionView} from "./DecisionView";

export type DecisionTreeProps = {
    decisionTree: DecisionTree;
};

export function DecisionTreeView(props: DecisionTreeProps) {
    const [state, setState] = useState<DecisionTreeState>(createInitialDecisionTreeState(props.decisionTree);
    const decision = getNextDecision(props.decisionTree, state);
    if (decision) {
        return <DecisionView
            decision={decision}
            onChooseValue={(value: any) => {
                setState(chooseValue(props.decisionTree, state, value));
            }}
            onUndoChoice={(value: any) => {
                setState(undoChoice(props.decisionTree, state));
            }}
        />;
    } else {
        return <ResultView chosenValues={getChosenValues(props.decisionTree, state)} />;
    }
}
