import {DecisionTree, ChosenValues} from "./model";

const yesNo = [
    {text: "ja", value: true},
    {text: "nein", value: false}
];

export const decisionTree: DecisionTree = [
    {
        key: "patreonEinkommen",
        text: "Welches Einkommen hast du über Patreon?",
        description: "Viele Dinge entscheiden sich nach Obergrenzen oder Daumenregeln, die sich auf das Einkommen" +
            " beziehen. Je weniger Einkommen, desto weniger Aufwand hat man damit. Dabei ist immer entscheidend, ob" +
            " du garantiert unter einer bestimmten Grenze bleibst oder möglicherweise darüber bist.",
        options: [
            {text: "sicher unter 410€ jährlich (durchschnittlich 34,16€ monatlich)", value: 410},
            {text: "sicher unter 9984€ jährlich (durchschnittlich 832€ monatlich)", value: 9984},
            {text: "sicher unter 22000€ jährlich (durchschnittlich 1833,33€ monatlich)", value: 22000},
            {text: "sicher unter 24500€ jährlich (durchschnittlich 2041,66€ monatlich)", value: 24500},
            {text: "sicher unter 60000€ jährlich (durchschnittlich 5000€ monatlich)", value: 60000},
            {text: "möglicherweise mehr als 60000€ jährlich", value: 1000000},
        ],
    },
    {
        key: "hauptberufNebenberuf",
        text: "Welcher der folgenden Punkte trifft zu?",
        description: "Für die Sozialversicherung ist wichtig, ob du haupt- oder nebenberuflich als Kreativer arbeitest," +
            " weil du dann ggf. über den Hauptberuf schon sozialversichert bist. Dann hat die Arbeit als Kreativer" +
            " entweder gar keine Auswirkungen auf die Sozialversicherung oder es erhöhen sich nur die Beiträge." +
            " Für die Steuer gelten im Nebenberuf andere Freibeträge als im Hauptberuf.",
        options: [
            {text: "Ich bin vollzeit angestellt und nebenbei als Kreativer auf Patreon tätig.", value: "vollzeitPlusPatreon"},
            {text: "Ich bin teilzeit angestellt und nebenbei als Kreativer auf Patreon tätig.", value: "teilzeitPlusPatreon"},
            {text: "Ich bin selbtändig und nebenbei als Kreativer auf Patreon tätig.", value: "selbständigPlusPatreon"},
            {text: "Ich bin Student und nebenbei als Kreativer auf Patreon tätig.", value: "studentPlusPatreon"},
            {text: "Ich mache Patreon hauptberuflich.", value: "hauptberuflichPatreon"},
            {text: "Nichts davon.", value: "hauptberufNebenberufUnklar"},
        ],
    },
    {
        condition: (chosenValues: ChosenValues) => chosenValues.patreonEinkommen >= 1645 &&
            chosenValues.patreonEinkommen < 19740 &&
            chosenValues.hauptberufNebenberuf === "vollzeitPlusPatreon",
        key: "patreonWirtschaftlichBedeutend",
        text: "Liegt dein monatliches Einkommen als Kreativer garantiert unter 1645€?",
        description: "Für die Sozialversicherung zählt nicht das Jahres-, sondern das Monatseinkommen. Das heißt," +
            " hier kann man einen schwachen Monat nicht durch einen starken Monat ausgleichen, ohne über die Grenze zu kommen!",
        options: yesNo,
    },
    {
        condition: (chosenValues: ChosenValues) => chosenValues.patreonEinkommen >= 1645 &&
            chosenValues.patreonEinkommen < 19740 &&
            chosenValues.hauptberufNebenberuf === "vollzeitPlusPatreon" &&
            !chosenValues.patreonWirtschaftlichBedeutend,
        key: "patreonArbeitszeit",
        text: "Wie viel Zeit investierst du in die Arbeit als Kreativer?",
        description: "Für die Sozialversicherung wird neben dem Einkommen auch die Arbeitszeit verwendet, um zu" +
            " entscheiden, ob dein Hauptberuf auch wirklich dein Hauptberuf ist oder ob die Arbeit als Kreativer" +
            " zu deinem Hauptberuf geworden ist.",
        options: [
            {text: "weniger als 18 Stunden pro Woche", value: "wenigerAls18"},
            {text: "mehr als 18 Stunden pro Woche", value: "mehrAls18"}
        ],
    },
    {
        key: "gewerblicheTätigkeit",
        text: "Hast du im Zuge der Arbeit als Kreativer Werbeeinnahmen? Oder kombinierst du deine Arbeit als Kreativer mit dem Verkauf von Dingen oder Dienstleistungen, Auftragsarbeiten usw.?",
        description: "Solche Einnahmen machen die Arbeit zu einer gewerblichen Tätigkeit und dann muss ein Gewerbe" +
            " angemeldet werden, was einen höheren bürokratischen Aufwand bedeutet. Je nach Einnahmen wird dann auch" +
            " Gewerbesteuer fällig. Die reine Arbeit als Kreativer -- mit nur Einnahmen über Patreon -- geht i.A." +
            " als freiberufliche Tätigkeit durch und ist deshalb einfacher.\n\nAußerdem müssen für solche Arbeiten" +
            " Rechnungen gestellt werden, d.h. du musst dann die Funktionsweise der Umsatzsteuer verstehen.",
        options: yesNo,
    },
];

export function evaluate(chosenValues: ChosenValues): [string, ...any[]] {
    return [
        "Folgende Punkte müssen beachtet werden:",
        "eins",
        "zwei",
        ["drei", "dreiB", "dreiC"],
        ["vier", ["vierB", "vierB1"], "vierC"],
    ];
}
