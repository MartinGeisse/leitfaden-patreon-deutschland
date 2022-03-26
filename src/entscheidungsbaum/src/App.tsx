import {DecisionTreeView} from "./components/DecisionTreeView";
import {decisionTree} from "./data/content";

export function App() {
  return <div style={{marginTop: 50, marginLeft: "auto", marginRight: "auto", maxWidth: 1000}}>
    <DecisionTreeView decisionTree={decisionTree} />
  </div>;
}
