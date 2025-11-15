export const difficulties = [
    {
        level: 'easy',
        labelColor: 'rgb(16 185 129)'
    },
    {
        level: 'medium',
        labelColor: 'rgb(234 179 8)'
    },
    {
        level: 'hard',
        labelColor: 'rgb(239 68 68)'
    },
]

export const topics = [
  { name: "Array", priority: 0.98 },
  { name: "Hash Table", priority: 0.95 },
  { name: "String", priority: 0.93 },
  { name: "Dynamic Programming", priority: 0.92 },
  { name: "Binary Search", priority: 0.90 },
  { name: "Binary Tree", priority: 0.88 },
  { name: "Linked List", priority: 0.85 },
  { name: "Stack", priority: 0.82 },
  { name: "Graph", priority: 0.80 },
  { name: "Heap", priority: 0.78 },
  { name: "Binary Search Tree", priority: 0.75 },
  { name: "Recursion", priority: 0.72 },
  { name: "Matrix", priority: 0.70 },
  { name: "Queue", priority: 0.68 },
  { name: "Math", priority: 0.65 },
  { name: "Trie", priority: 0.62 },
  { name: "Binary", priority: 0.55 }
];

export const defaultWeekCount = 8
export const defaultHoursPerWeek = 8

export const defaultDifficultiesChosen = difficulties.map((difficulty) => difficulty)
export const defaultTopicsChosen = topics.map((topic) => topic)
