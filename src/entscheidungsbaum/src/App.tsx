import {DecisionTreeView} from "./components/DecisionTreeView";
import {decisionTree} from "./data/content";

export function App() {
  return <DecisionTreeView decisionTree={decisionTree} />;
}
