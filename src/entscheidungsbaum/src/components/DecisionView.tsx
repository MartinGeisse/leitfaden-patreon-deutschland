
export type DecisionViewProps = {
    decision: Decision;
    onChooseValue: (value: any) => void;
    onUndoChoice: () => void;
};

export function DecisionView(props: DecisionViewProps) {
    const [selectedValue, setSelectedValue] = useState<any>(undefined);
    return <div>
        <form onSubmit={() => props.onUndoChoice()}>
            <input type="submit" value="Zurück">
        </form>
        <hr />
        <form onSubmit={() => props.onChooseValue(selectedValue)}>
            <h2>{props.decision.text}</h2>
            <div>{props.decision.description}</div>
            <select value={selectedValue} onChange={e => setSelectedValue(e.target.value)}>
                {props.decision.options.map(option => <option value={option.value}>{option.text}</option>)}
            </select>
            <input type="submit" value="Ok">
        </form>
    </div>;
}
