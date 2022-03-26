import {useState} from 'react';
import {Decision, ChosenValues} from "../data/model";

export type DecisionViewProps = {
    decision: Decision;
    onChooseValue: (value: any) => void;
    onUndoChoice: () => void;
};

export function DecisionView(props: DecisionViewProps) {
    const [selectedValue, setSelectedValue] = useState<any>(undefined);
    return <div>
        <form onSubmit={e => {props.onUndoChoice(); e.preventDefault(); return false;}}>
            <input type="submit" value="Zurück" />
        </form>
        <hr />
        <form onSubmit={e => {props.onChooseValue(selectedValue); e.preventDefault(); return false;}}>
            <h2>{props.decision.text}</h2>
            <div style={{whiteSpace: "pre-wrap"}}>{props.decision.description}</div>
            <br />
            {props.decision.options.map((option, i) => <div>
                <input key={i} id={"option" + i} type="radio" value={option.value}
                    checked={option.value === selectedValue}
                    onChange={e => {if (e.target.checked) setSelectedValue(option.value)}}
                />
                <label htmlFor={"option" + i}>{option.text}</label>
            </div>)}
            <br />
            <input type="submit" value="Ok" />
        </form>
    </div>;
}
