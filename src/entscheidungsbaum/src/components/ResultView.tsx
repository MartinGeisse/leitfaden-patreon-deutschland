import {ChosenValues} from "../data/model";

export type ResultViewProps = {
    chosenValues: ChosenValues;
    onUndoChoice: () => void;
};

export function ResultView(props: ResultViewProps) {
    return <div>
        <form onSubmit={(e) => {props.onUndoChoice(); e.preventDefault(); return false}}>
            <input type="submit" value="Zurück" />
        </form>
        <hr />
        <pre>{JSON.stringify(props.chosenValues, null, 2)}</pre>
    </div>;
}
