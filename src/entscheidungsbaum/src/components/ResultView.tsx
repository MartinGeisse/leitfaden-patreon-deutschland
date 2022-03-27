import {ChosenValues} from "../data/model";
import {evaluate} from "../data/content";

export type ResultViewProps = {
    chosenValues: ChosenValues;
    onUndoChoice: () => void;
};

function NodeView(props: {node: [string, ...any[]]}) {
    const [text, ...subNodes] = props.node;
    const mappedSubNodes = subNodes.length === 0 ? null :
        <ul>{subNodes.map((subNode, i) => <NodeView key={i} node={typeof subNode === "string" ? [subNode] : subNode} />)}</ul>;
    return <li>{text} {mappedSubNodes} </li>;
}

export function ResultView(props: ResultViewProps) {
    const result = evaluate(props.chosenValues);
    return <div>
        <form onSubmit={(e) => {props.onUndoChoice(); e.preventDefault(); return false}}>
            <input type="submit" value="Zurück" />
        </form>
        <hr />
        <ul><NodeView node={result} /></ul>
    </div>;
}
