import {DecisionTree, ChosenValues} from "./model";

export const decisionTree: DecisionTree = [
    {
        key: "foo",
        text: "FOO",
        description: "foobarflupp",
        options: [
            {text: "one", value: 1},
            {text: "two", value: 2},
            {text: "three", value: 3},
        ],
    },
    {
        condition: (values: ChosenValues) => values.foo !== 2,
        key: "bar",
        text: "BAR",
        description: "barbarabarbar",
        options: [
            {text: "four", value: 4},
            {text: "five", value: 5},
            {text: "six", value: 6},
        ],
    },
];
