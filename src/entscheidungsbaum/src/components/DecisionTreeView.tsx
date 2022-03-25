import {DecisionView} from "./DecisionView";

export type DecisionTreeProps = {
    decisionTree: DecisionTree;
};

export function DecisionTreeView(props: DecisionTreeProps) {
    const [state, setState] = useState<DecisionTreeState>(createInitialDecisionTreeState(props.decisionTree);
    if (isDecisionTreeFinished(props.decisionTree, state)) {
        return <ResultView chosenValues={getChosenValues(props.decisionTree, state)} />;
    } else {
        return <DecisionView
            decision={getNextDecision(props.decisionTree, state)}
            onChooseValue={(value: any) => {
                setState(chooseValue(props.decisionTree, state, value));
            }}
            onUndoChoice={(value: any) => {
                setState(undoChoice(props.decisionTree, state));
            }}
        />;
    }
}
