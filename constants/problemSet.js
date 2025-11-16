import { defaultHoursPerWeek } from "./preferences";

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

export const difficulties = [
    {
        level: 'easy',
        labelColor: 'rgb(16 185 129)',
        priority: 0.35,
        idealTime: 25
    },
    {
        level: 'medium', 
        labelColor: 'rgb(234 179 8)',
        priority: 0.50,
        idealTime: 35
    },
    {
        level: 'hard',
        labelColor: 'rgb(239 68 68)',
        priority: 0.15,
        idealTime: 55
    },
]


export const problemList = [
  // ===== ARRAY (45 problems) =====
  // Easy (15)
  { name: "Two Sum", difficulty: "easy", topic: "Array", timeTaken: 25 },
  { name: "Best Time to Buy and Sell Stock", difficulty: "easy", topic: "Array", timeTaken: 30 },
  { name: "Contains Duplicate", difficulty: "easy", topic: "Array", timeTaken: 20 },
  { name: "Remove Duplicates from Sorted Array", difficulty: "easy", topic: "Array", timeTaken: 25 },
  { name: "Move Zeroes", difficulty: "easy", topic: "Array", timeTaken: 25 },
  { name: "Plus One", difficulty: "easy", topic: "Array", timeTaken: 20 },
  { name: "Single Number", difficulty: "easy", topic: "Array", timeTaken: 25 },
  { name: "Intersection of Two Arrays II", difficulty: "easy", topic: "Array", timeTaken: 30 },
  { name: "Valid Sudoku", difficulty: "easy", topic: "Array", timeTaken: 35 },
  { name: "Rotate Array", difficulty: "easy", topic: "Array", timeTaken: 30 },
  { name: "Find All Numbers Disappeared in an Array", difficulty: "easy", topic: "Array", timeTaken: 30 },
  { name: "Max Consecutive Ones", difficulty: "easy", topic: "Array", timeTaken: 25 },
  { name: "Reshape the Matrix", difficulty: "easy", topic: "Array", timeTaken: 30 },
  { name: "Pascal's Triangle", difficulty: "easy", topic: "Array", timeTaken: 30 },
  { name: "Missing Number", difficulty: "easy", topic: "Array", timeTaken: 25 },

  // Medium (20)
  { name: "Product of Array Except Self", difficulty: "medium", topic: "Array", timeTaken: 45 },
  { name: "Maximum Subarray", difficulty: "medium", topic: "Array", timeTaken: 40 },
  { name: "Maximum Product Subarray", difficulty: "medium", topic: "Array", timeTaken: 45 },
  { name: "Find Minimum in Rotated Sorted Array", difficulty: "medium", topic: "Array", timeTaken: 40 },
  { name: "Search in Rotated Sorted Array", difficulty: "medium", topic: "Array", timeTaken: 45 },
  { name: "3Sum", difficulty: "medium", topic: "Array", timeTaken: 50 },
  { name: "Container With Most Water", difficulty: "medium", topic: "Array", timeTaken: 40 },
  { name: "Merge Intervals", difficulty: "medium", topic: "Array", timeTaken: 45 },
  { name: "Insert Interval", difficulty: "medium", topic: "Array", timeTaken: 45 },
  { name: "Non-overlapping Intervals", difficulty: "medium", topic: "Array", timeTaken: 40 },
  { name: "4Sum", difficulty: "medium", topic: "Array", timeTaken: 55 },
  { name: "Jump Game", difficulty: "medium", topic: "Array", timeTaken: 40 },
  { name: "Jump Game II", difficulty: "medium", topic: "Array", timeTaken: 45 },
  { name: "Find the Duplicate Number", difficulty: "medium", topic: "Array", timeTaken: 45 },
  { name: "Subarray Sum Equals K", difficulty: "medium", topic: "Array", timeTaken: 45 },
  { name: "Next Permutation", difficulty: "medium", topic: "Array", timeTaken: 45 },
  { name: "Spiral Matrix", difficulty: "medium", topic: "Array", timeTaken: 45 },
  { name: "Set Matrix Zeroes", difficulty: "medium", topic: "Array", timeTaken: 40 },
  { name: "Rotate Image", difficulty: "medium", topic: "Array", timeTaken: 40 },
  { name: "Word Search", difficulty: "medium", topic: "Array", timeTaken: 50 },

  // Hard (10)
  { name: "Trapping Rain Water", difficulty: "hard", topic: "Array", timeTaken: 65 },
  { name: "Median of Two Sorted Arrays", difficulty: "hard", topic: "Array", timeTaken: 80 },
  { name: "First Missing Positive", difficulty: "hard", topic: "Array", timeTaken: 65 },
  { name: "Sliding Window Maximum", difficulty: "hard", topic: "Array", timeTaken: 65 },
  { name: "Minimum Window Substring", difficulty: "hard", topic: "Array", timeTaken: 70 },
  { name: "Largest Rectangle in Histogram", difficulty: "hard", topic: "Array", timeTaken: 70 },
  { name: "Maximal Rectangle", difficulty: "hard", topic: "Array", timeTaken: 75 },
  { name: "Count of Smaller Numbers After Self", difficulty: "hard", topic: "Array", timeTaken: 75 },
  { name: "Candy", difficulty: "hard", topic: "Array", timeTaken: 65 },
  { name: "N-Queens", difficulty: "hard", topic: "Array", timeTaken: 80 },

  // ===== STRING (30 problems) =====
  // Easy (10)
  { name: "Valid Palindrome", difficulty: "easy", topic: "String", timeTaken: 25 },
  { name: "Valid Anagram", difficulty: "easy", topic: "String", timeTaken: 20 },
  { name: "First Unique Character in a String", difficulty: "easy", topic: "String", timeTaken: 25 },
  { name: "Reverse String", difficulty: "easy", topic: "String", timeTaken: 20 },
  { name: "Reverse Integer", difficulty: "easy", topic: "String", timeTaken: 30 },
  { name: "Implement strStr()", difficulty: "easy", topic: "String", timeTaken: 30 },
  { name: "Longest Common Prefix", difficulty: "easy", topic: "String", timeTaken: 30 },
  { name: "Valid Parentheses", difficulty: "easy", topic: "String", timeTaken: 25 },
  { name: "Roman to Integer", difficulty: "easy", topic: "String", timeTaken: 30 },
  { name: "Count and Say", difficulty: "easy", topic: "String", timeTaken: 35 },

  // Medium (15)
  { name: "Longest Substring Without Repeating Characters", difficulty: "medium", topic: "String", timeTaken: 45 },
  { name: "Longest Palindromic Substring", difficulty: "medium", topic: "String", timeTaken: 50 },
  { name: "Palindromic Substrings", difficulty: "medium", topic: "String", timeTaken: 45 },
  { name: "String to Integer (atoi)", difficulty: "medium", topic: "String", timeTaken: 50 },
  { name: "Longest Repeating Character Replacement", difficulty: "medium", topic: "String", timeTaken: 55 },
  { name: "Group Anagrams", difficulty: "medium", topic: "String", timeTaken: 50 },
  { name: "Generate Parentheses", difficulty: "medium", topic: "String", timeTaken: 50 },
  { name: "Simplify Path", difficulty: "medium", topic: "String", timeTaken: 45 },
  { name: "Letter Combinations of a Phone Number", difficulty: "medium", topic: "String", timeTaken: 50 },
  { name: "Word Break", difficulty: "medium", topic: "String", timeTaken: 55 },
  { name: "Decode String", difficulty: "medium", topic: "String", timeTaken: 50 },
  { name: "Find All Anagrams in a String", difficulty: "medium", topic: "String", timeTaken: 50 },
  { name: "Permutation in String", difficulty: "medium", topic: "String", timeTaken: 50 },
  { name: "Basic Calculator II", difficulty: "medium", topic: "String", timeTaken: 55 },
  { name: "Integer to Roman", difficulty: "medium", topic: "String", timeTaken: 45 },

  // Hard (5)
  { name: "Minimum Window Substring", difficulty: "hard", topic: "String", timeTaken: 70 },
  { name: "Edit Distance", difficulty: "hard", topic: "String", timeTaken: 75 },
  { name: "Regular Expression Matching", difficulty: "hard", topic: "String", timeTaken: 80 },
  { name: "Wildcard Matching", difficulty: "hard", topic: "String", timeTaken: 75 },
  { name: "Text Justification", difficulty: "hard", topic: "String", timeTaken: 65 },

  // ===== LINKED LIST (25 problems) =====
  // Easy (10)
  { name: "Reverse Linked List", difficulty: "easy", topic: "Linked List", timeTaken: 25 },
  { name: "Merge Two Sorted Lists", difficulty: "easy", topic: "Linked List", timeTaken: 30 },
  { name: "Linked List Cycle", difficulty: "easy", topic: "Linked List", timeTaken: 25 },
  { name: "Palindrome Linked List", difficulty: "easy", topic: "Linked List", timeTaken: 30 },
  { name: "Remove Linked List Elements", difficulty: "easy", topic: "Linked List", timeTaken: 25 },
  { name: "Middle of the Linked List", difficulty: "easy", topic: "Linked List", timeTaken: 25 },
  { name: "Convert Binary Number in a Linked List to Integer", difficulty: "easy", topic: "Linked List", timeTaken: 20 },
  { name: "Intersection of Two Linked Lists", difficulty: "easy", topic: "Linked List", timeTaken: 30 },
  { name: "Delete Node in a Linked List", difficulty: "easy", topic: "Linked List", timeTaken: 20 },
  { name: "Design Linked List", difficulty: "easy", topic: "Linked List", timeTaken: 35 },

  // Medium (10)
  { name: "Remove Nth Node From End of List", difficulty: "medium", topic: "Linked List", timeTaken: 40 },
  { name: "Copy List with Random Pointer", difficulty: "medium", topic: "Linked List", timeTaken: 45 },
  { name: "Add Two Numbers", difficulty: "medium", topic: "Linked List", timeTaken: 45 },
  { name: "Sort List", difficulty: "medium", topic: "Linked List", timeTaken: 50 },
  { name: "Reorder List", difficulty: "medium", topic: "Linked List", timeTaken: 45 },
  { name: "Flatten a Multilevel Doubly Linked List", difficulty: "medium", topic: "Linked List", timeTaken: 50 },
  { name: "LRU Cache", difficulty: "medium", topic: "Linked List", timeTaken: 50 },
  { name: "Swap Nodes in Pairs", difficulty: "medium", topic: "Linked List", timeTaken: 40 },
  { name: "Odd Even Linked List", difficulty: "medium", topic: "Linked List", timeTaken: 40 },
  { name: "Partition List", difficulty: "medium", topic: "Linked List", timeTaken: 45 },

  // Hard (5)
  { name: "Merge k Sorted Lists", difficulty: "hard", topic: "Linked List", timeTaken: 65 },
  { name: "Reverse Nodes in k-Group", difficulty: "hard", topic: "Linked List", timeTaken: 70 },
  { name: "LFU Cache", difficulty: "hard", topic: "Linked List", timeTaken: 75 },
  { name: "All O`one Data Structure", difficulty: "hard", topic: "Linked List", timeTaken: 70 },
  { name: "Design Skiplist", difficulty: "hard", topic: "Linked List", timeTaken: 80 },

  // ===== BINARY TREE (35 problems) =====
  // Easy (12)
  { name: "Maximum Depth of Binary Tree", difficulty: "easy", topic: "Binary Tree", timeTaken: 25 },
  { name: "Same Tree", difficulty: "easy", topic: "Binary Tree", timeTaken: 25 },
  { name: "Invert Binary Tree", difficulty: "easy", topic: "Binary Tree", timeTaken: 25 },
  { name: "Symmetric Tree", difficulty: "easy", topic: "Binary Tree", timeTaken: 30 },
  { name: "Path Sum", difficulty: "easy", topic: "Binary Tree", timeTaken: 30 },
  { name: "Binary Tree Inorder Traversal", difficulty: "easy", topic: "Binary Tree", timeTaken: 30 },
  { name: "Binary Tree Preorder Traversal", difficulty: "easy", topic: "Binary Tree", timeTaken: 30 },
  { name: "Binary Tree Postorder Traversal", difficulty: "easy", topic: "Binary Tree", timeTaken: 30 },
  { name: "Convert Sorted Array to Binary Search Tree", difficulty: "easy", topic: "Binary Tree", timeTaken: 35 },
  { name: "Balanced Binary Tree", difficulty: "easy", topic: "Binary Tree", timeTaken: 30 },
  { name: "Minimum Depth of Binary Tree", difficulty: "easy", topic: "Binary Tree", timeTaken: 30 },
  { name: "Diameter of Binary Tree", difficulty: "easy", topic: "Binary Tree", timeTaken: 35 },

  // Medium (15)
  { name: "Binary Tree Level Order Traversal", difficulty: "medium", topic: "Binary Tree", timeTaken: 40 },
  { name: "Validate Binary Search Tree", difficulty: "medium", topic: "Binary Tree", timeTaken: 45 },
  { name: "Kth Smallest Element in a BST", difficulty: "medium", topic: "Binary Tree", timeTaken: 40 },
  { name: "Construct Binary Tree from Preorder and Inorder Traversal", difficulty: "medium", topic: "Binary Tree", timeTaken: 50 },
  { name: "Construct Binary Tree from Inorder and Postorder Traversal", difficulty: "medium", topic: "Binary Tree", timeTaken: 50 },
  { name: "Lowest Common Ancestor of a Binary Tree", difficulty: "medium", topic: "Binary Tree", timeTaken: 45 },
  { name: "Binary Tree Right Side View", difficulty: "medium", topic: "Binary Tree", timeTaken: 40 },
  { name: "Count Complete Tree Nodes", difficulty: "medium", topic: "Binary Tree", timeTaken: 45 },
  { name: "Serialize and Deserialize Binary Tree", difficulty: "medium", topic: "Binary Tree", timeTaken: 55 },
  { name: "Flatten Binary Tree to Linked List", difficulty: "medium", topic: "Binary Tree", timeTaken: 45 },
  { name: "Populating Next Right Pointers in Each Node", difficulty: "medium", topic: "Binary Tree", timeTaken: 45 },
  { name: "Sum Root to Leaf Numbers", difficulty: "medium", topic: "Binary Tree", timeTaken: 40 },
  { name: "House Robber III", difficulty: "medium", topic: "Binary Tree", timeTaken: 50 },
  { name: "Path Sum III", difficulty: "medium", topic: "Binary Tree", timeTaken: 45 },
  { name: "Find Largest Value in Each Tree Row", difficulty: "medium", topic: "Binary Tree", timeTaken: 40 },

  // Hard (8)
  { name: "Binary Tree Maximum Path Sum", difficulty: "hard", topic: "Binary Tree", timeTaken: 65 },
  { name: "Serialize and Deserialize BST", difficulty: "hard", topic: "Binary Tree", timeTaken: 50 },
  { name: "Recover Binary Search Tree", difficulty: "hard", topic: "Binary Tree", timeTaken: 55 },
  { name: "Vertical Order Traversal of a Binary Tree", difficulty: "hard", topic: "Binary Tree", timeTaken: 60 },
  { name: "Binary Tree Cameras", difficulty: "hard", topic: "Binary Tree", timeTaken: 65 },
  { name: "Sum of Distances in Tree", difficulty: "hard", topic: "Binary Tree", timeTaken: 70 },
  { name: "Number of Ways to Reorder Array to Get Same BST", difficulty: "hard", topic: "Binary Tree", timeTaken: 75 },
  { name: "Step-By-Step Directions From a Binary Tree Node to Another", difficulty: "hard", topic: "Binary Tree", timeTaken: 60 },

  // ===== DYNAMIC PROGRAMMING (35 problems) =====
  // Easy (10)
  { name: "Climbing Stairs", difficulty: "easy", topic: "Dynamic Programming", timeTaken: 25 },
  { name: "Best Time to Buy and Sell Stock", difficulty: "easy", topic: "Dynamic Programming", timeTaken: 30 },
  { name: "Maximum Subarray", difficulty: "easy", topic: "Dynamic Programming", timeTaken: 30 },
  { name: "House Robber", difficulty: "easy", topic: "Dynamic Programming", timeTaken: 35 },
  { name: "Divisor Game", difficulty: "easy", topic: "Dynamic Programming", timeTaken: 25 },
  { name: "Fibonacci Number", difficulty: "easy", topic: "Dynamic Programming", timeTaken: 20 },
  { name: "N-th Tribonacci Number", difficulty: "easy", topic: "Dynamic Programming", timeTaken: 25 },
  { name: "Min Cost Climbing Stairs", difficulty: "easy", topic: "Dynamic Programming", timeTaken: 30 },
  { name: "Counting Bits", difficulty: "easy", topic: "Dynamic Programming", timeTaken: 35 },
  { name: "Is Subsequence", difficulty: "easy", topic: "Dynamic Programming", timeTaken: 30 },

  // Medium (15)
  { name: "Coin Change", difficulty: "medium", topic: "Dynamic Programming", timeTaken: 50 },
  { name: "Longest Increasing Subsequence", difficulty: "medium", topic: "Dynamic Programming", timeTaken: 45 },
  { name: "Word Break", difficulty: "medium", topic: "Dynamic Programming", timeTaken: 50 },
  { name: "Unique Paths", difficulty: "medium", topic: "Dynamic Programming", timeTaken: 40 },
  { name: "Longest Common Subsequence", difficulty: "medium", topic: "Dynamic Programming", timeTaken: 45 },
  { name: "Partition Equal Subset Sum", difficulty: "medium", topic: "Dynamic Programming", timeTaken: 50 },
  { name: "Target Sum", difficulty: "medium", topic: "Dynamic Programming", timeTaken: 55 },
  { name: "Decode Ways", difficulty: "medium", topic: "Dynamic Programming", timeTaken: 45 },
  { name: "Perfect Squares", difficulty: "medium", topic: "Dynamic Programming", timeTaken: 45 },
  { name: "Coin Change II", difficulty: "medium", topic: "Dynamic Programming", timeTaken: 50 },
  { name: "Maximum Product Subarray", difficulty: "medium", topic: "Dynamic Programming", timeTaken: 45 },
  { name: "Palindromic Substrings", difficulty: "medium", topic: "Dynamic Programming", timeTaken: 40 },
  { name: "Longest Palindromic Substring", difficulty: "medium", topic: "Dynamic Programming", timeTaken: 45 },
  { name: "Jump Game", difficulty: "medium", topic: "Dynamic Programming", timeTaken: 40 },
  { name: "Unique Paths II", difficulty: "medium", topic: "Dynamic Programming", timeTaken: 45 },

  // Hard (10)
  { name: "Edit Distance", difficulty: "hard", topic: "Dynamic Programming", timeTaken: 75 },
  { name: "Regular Expression Matching", difficulty: "hard", topic: "Dynamic Programming", timeTaken: 80 },
  { name: "Wildcard Matching", difficulty: "hard", topic: "Dynamic Programming", timeTaken: 75 },
  { name: "Best Time to Buy and Sell Stock III", difficulty: "hard", topic: "Dynamic Programming", timeTaken: 65 },
  { name: "Best Time to Buy and Sell Stock IV", difficulty: "hard", topic: "Dynamic Programming", timeTaken: 70 },
  { name: "Maximum Profit in Job Scheduling", difficulty: "hard", topic: "Dynamic Programming", timeTaken: 75 },
  { name: "Russian Doll Envelopes", difficulty: "hard", topic: "Dynamic Programming", timeTaken: 70 },
  { name: "Dungeon Game", difficulty: "hard", topic: "Dynamic Programming", timeTaken: 75 },
  { name: "Burst Balloons", difficulty: "hard", topic: "Dynamic Programming", timeTaken: 80 },
  { name: "Palindrome Partitioning II", difficulty: "hard", topic: "Dynamic Programming", timeTaken: 70 },

  // ===== GRAPH (30 problems) =====
  // Easy (8)
  { name: "Number of Islands", difficulty: "easy", topic: "Graph", timeTaken: 40 },
  { name: "Flood Fill", difficulty: "easy", topic: "Graph", timeTaken: 30 },
  { name: "Find the Town Judge", difficulty: "easy", topic: "Graph", timeTaken: 30 },
  { name: "Find Center of Star Graph", difficulty: "easy", topic: "Graph", timeTaken: 25 },
  { name: "Island Perimeter", difficulty: "easy", topic: "Graph", timeTaken: 35 },
  { name: "Max Area of Island", difficulty: "easy", topic: "Graph", timeTaken: 40 },
  { name: "Employee Importance", difficulty: "easy", topic: "Graph", timeTaken: 35 },
  { name: "Keys and Rooms", difficulty: "easy", topic: "Graph", timeTaken: 40 },

  // Medium (15)
  { name: "Clone Graph", difficulty: "medium", topic: "Graph", timeTaken: 45 },
  { name: "Course Schedule", difficulty: "medium", topic: "Graph", timeTaken: 50 },
  { name: "Pacific Atlantic Water Flow", difficulty: "medium", topic: "Graph", timeTaken: 55 },
  { name: "Word Ladder", difficulty: "medium", topic: "Graph", timeTaken: 60 },
  { name: "Graph Valid Tree", difficulty: "medium", topic: "Graph", timeTaken: 45 },
  { name: "Number of Connected Components in an Undirected Graph", difficulty: "medium", topic: "Graph", timeTaken: 45 },
  { name: "Course Schedule II", difficulty: "medium", topic: "Graph", timeTaken: 50 },
  { name: "Alien Dictionary", difficulty: "medium", topic: "Graph", timeTaken: 60 },
  { name: "Cheapest Flights Within K Stops", difficulty: "medium", topic: "Graph", timeTaken: 55 },
  { name: "Network Delay Time", difficulty: "medium", topic: "Graph", timeTaken: 50 },
  { name: "Shortest Path in Binary Matrix", difficulty: "medium", topic: "Graph", timeTaken: 50 },
  { name: "Rotting Oranges", difficulty: "medium", topic: "Graph", timeTaken: 45 },
  { name: "Walls and Gates", difficulty: "medium", topic: "Graph", timeTaken: 50 },
  { name: "Surrounded Regions", difficulty: "medium", topic: "Graph", timeTaken: 55 },
  { name: "Redundant Connection", difficulty: "medium", topic: "Graph", timeTaken: 45 },

  // Hard (7)
  { name: "Word Ladder II", difficulty: "hard", topic: "Graph", timeTaken: 70 },
  { name: "Reconstruct Itinerary", difficulty: "hard", topic: "Graph", timeTaken: 65 },
  { name: "Minimum Height Trees", difficulty: "hard", topic: "Graph", timeTaken: 60 },
  { name: "Critical Connections in a Network", difficulty: "hard", topic: "Graph", timeTaken: 70 },
  { name: "Swim in Rising Water", difficulty: "hard", topic: "Graph", timeTaken: 65 },
  { name: "Sliding Puzzle", difficulty: "hard", topic: "Graph", timeTaken: 60 },
  { name: "Shortest Path to Get All Keys", difficulty: "hard", topic: "Graph", timeTaken: 75 },

  // ===== BINARY SEARCH (20 problems) =====
  // Easy (6)
  { name: "Binary Search", difficulty: "easy", topic: "Binary Search", timeTaken: 25 },
  { name: "First Bad Version", difficulty: "easy", topic: "Binary Search", timeTaken: 30 },
  { name: "Search Insert Position", difficulty: "easy", topic: "Binary Search", timeTaken: 25 },
  { name: "Sqrt(x)", difficulty: "easy", topic: "Binary Search", timeTaken: 30 },
  { name: "Arranging Coins", difficulty: "easy", topic: "Binary Search", timeTaken: 30 },
  { name: "Valid Perfect Square", difficulty: "easy", topic: "Binary Search", timeTaken: 25 },

  // Medium (10)
  { name: "Search a 2D Matrix", difficulty: "medium", topic: "Binary Search", timeTaken: 40 },
  { name: "Find First and Last Position of Element in Sorted Array", difficulty: "medium", topic: "Binary Search", timeTaken: 45 },
  { name: "Search in Rotated Sorted Array", difficulty: "medium", topic: "Binary Search", timeTaken: 45 },
  { name: "Find Minimum in Rotated Sorted Array", difficulty: "medium", topic: "Binary Search", timeTaken: 40 },
  { name: "Capacity To Ship Packages Within D Days", difficulty: "medium", topic: "Binary Search", timeTaken: 50 },
  { name: "Split Array Largest Sum", difficulty: "medium", topic: "Binary Search", timeTaken: 55 },
  { name: "Koko Eating Bananas", difficulty: "medium", topic: "Binary Search", timeTaken: 45 },
  { name: "Find Peak Element", difficulty: "medium", topic: "Binary Search", timeTaken: 40 },
  { name: "Search in Rotated Sorted Array II", difficulty: "medium", topic: "Binary Search", timeTaken: 45 },
  { name: "Time Based Key-Value Store", difficulty: "medium", topic: "Binary Search", timeTaken: 45 },

  // Hard (4)
  { name: "Median of Two Sorted Arrays", difficulty: "hard", topic: "Binary Search", timeTaken: 80 },
  { name: "Minimum Window Substring", difficulty: "hard", topic: "Binary Search", timeTaken: 70 },
  { name: "Find Minimum in Rotated Sorted Array II", difficulty: "hard", topic: "Binary Search", timeTaken: 50 },
  { name: "Max Sum of Rectangle No Larger Than K", difficulty: "hard", topic: "Binary Search", timeTaken: 75 },

  // ===== HEAP (15 problems) =====
  // Easy (4)
  { name: "Kth Largest Element in a Stream", difficulty: "easy", topic: "Heap", timeTaken: 30 },
  { name: "Last Stone Weight", difficulty: "easy", topic: "Heap", timeTaken: 30 },
  { name: "The K Weakest Rows in a Matrix", difficulty: "easy", topic: "Heap", timeTaken: 35 },
  { name: "Maximum Product of Two Elements in an Array", difficulty: "easy", topic: "Heap", timeTaken: 25 },

  // Medium (8)
  { name: "Kth Largest Element in an Array", difficulty: "medium", topic: "Heap", timeTaken: 40 },
  { name: "Top K Frequent Elements", difficulty: "medium", topic: "Heap", timeTaken: 45 },
  { name: "Sort Characters By Frequency", difficulty: "medium", topic: "Heap", timeTaken: 40 },
  { name: "K Closest Points to Origin", difficulty: "medium", topic: "Heap", timeTaken: 45 },
  { name: "Reorganize String", difficulty: "medium", topic: "Heap", timeTaken: 50 },
  { name: "Task Scheduler", difficulty: "medium", topic: "Heap", timeTaken: 50 },
  { name: "Find K Pairs with Smallest Sums", difficulty: "medium", topic: "Heap", timeTaken: 55 },
  { name: "Kth Smallest Element in a Sorted Matrix", difficulty: "medium", topic: "Heap", timeTaken: 50 },

  // Hard (3)
  { name: "Find Median from Data Stream", difficulty: "hard", topic: "Heap", timeTaken: 55 },
  { name: "Sliding Window Median", difficulty: "hard", topic: "Heap", timeTaken: 60 },
  { name: "IPO", difficulty: "hard", topic: "Heap", timeTaken: 65 },

  // ===== STACK (20 problems) =====
  // Easy (6)
  { name: "Valid Parentheses", difficulty: "easy", topic: "Stack", timeTaken: 25 },
  { name: "Min Stack", difficulty: "easy", topic: "Stack", timeTaken: 30 },
  { name: "Implement Queue using Stacks", difficulty: "easy", topic: "Stack", timeTaken: 30 },
  { name: "Next Greater Element I", difficulty: "easy", topic: "Stack", timeTaken: 35 },
  { name: "Backspace String Compare", difficulty: "easy", topic: "Stack", timeTaken: 30 },
  { name: "Remove All Adjacent Duplicates In String", difficulty: "easy", topic: "Stack", timeTaken: 30 },

  // Medium (10)
  { name: "Evaluate Reverse Polish Notation", difficulty: "medium", topic: "Stack", timeTaken: 40 },
  { name: "Daily Temperatures", difficulty: "medium", topic: "Stack", timeTaken: 45 },
  { name: "Asteroid Collision", difficulty: "medium", topic: "Stack", timeTaken: 45 },
  { name: "Decode String", difficulty: "medium", topic: "Stack", timeTaken: 45 },
  { name: "Remove K Digits", difficulty: "medium", topic: "Stack", timeTaken: 50 },
  { name: "132 Pattern", difficulty: "medium", topic: "Stack", timeTaken: 50 },
  { name: "Next Greater Element II", difficulty: "medium", topic: "Stack", timeTaken: 45 },
  { name: "Validate Stack Sequences", difficulty: "medium", topic: "Stack", timeTaken: 40 },
  { name: "Minimum Remove to Make Valid Parentheses", difficulty: "medium", topic: "Stack", timeTaken: 45 },
  { name: "Basic Calculator", difficulty: "medium", topic: "Stack", timeTaken: 55 },

  // Hard (4)
  { name: "Largest Rectangle in Histogram", difficulty: "hard", topic: "Stack", timeTaken: 70 },
  { name: "Maximal Rectangle", difficulty: "hard", topic: "Stack", timeTaken: 75 },
  { name: "Basic Calculator III", difficulty: "hard", topic: "Stack", timeTaken: 80 },
  { name: "Longest Valid Parentheses", difficulty: "hard", topic: "Stack", timeTaken: 65 },

  // ===== HASH TABLE (25 problems) =====
  // Easy (8)
  { name: "Two Sum", difficulty: "easy", topic: "Hash Table", timeTaken: 25 },
  { name: "Contains Duplicate", difficulty: "easy", topic: "Hash Table", timeTaken: 20 },
  { name: "Valid Anagram", difficulty: "easy", topic: "Hash Table", timeTaken: 20 },
  { name: "First Unique Character in a String", difficulty: "easy", topic: "Hash Table", timeTaken: 25 },
  { name: "Intersection of Two Arrays", difficulty: "easy", topic: "Hash Table", timeTaken: 30 },
  { name: "Happy Number", difficulty: "easy", topic: "Hash Table", timeTaken: 30 },
  { name: "Isomorphic Strings", difficulty: "easy", topic: "Hash Table", timeTaken: 30 },
  { name: "Word Pattern", difficulty: "easy", topic: "Hash Table", timeTaken: 30 },

  // Medium (12)
  { name: "Group Anagrams", difficulty: "medium", topic: "Hash Table", timeTaken: 50 },
  { name: "Longest Consecutive Sequence", difficulty: "medium", topic: "Hash Table", timeTaken: 45 },
  { name: "Subarray Sum Equals K", difficulty: "medium", topic: "Hash Table", timeTaken: 45 },
  { name: "LRU Cache", difficulty: "medium", topic: "Hash Table", timeTaken: 50 },
  { name: "Insert Delete GetRandom O(1)", difficulty: "medium", topic: "Hash Table", timeTaken: 45 },
  { name: "Top K Frequent Elements", difficulty: "medium", topic: "Hash Table", timeTaken: 45 },
  { name: "Design Underground System", difficulty: "medium", topic: "Hash Table", timeTaken: 50 },
  { name: "Find Duplicate File in System", difficulty: "medium", topic: "Hash Table", timeTaken: 45 },
  { name: "Brick Wall", difficulty: "medium", topic: "Hash Table", timeTaken: 40 },
  { name: "Contiguous Array", difficulty: "medium", topic: "Hash Table", timeTaken: 45 },
  { name: "Find All Duplicates in an Array", difficulty: "medium", topic: "Hash Table", timeTaken: 40 },
  { name: "Encode and Decode TinyURL", difficulty: "medium", topic: "Hash Table", timeTaken: 40 },

  // Hard (5)
  { name: "LFU Cache", difficulty: "hard", topic: "Hash Table", timeTaken: 75 },
  { name: "All O`one Data Structure", difficulty: "hard", topic: "Hash Table", timeTaken: 70 },
  { name: "First Missing Positive", difficulty: "hard", topic: "Hash Table", timeTaken: 65 },
  { name: "Sudoku Solver", difficulty: "hard", topic: "Hash Table", timeTaken: 80 },
  { name: "Word Squares", difficulty: "hard", topic: "Hash Table", timeTaken: 75 },

  // ===== BINARY SEARCH TREE (10 problems) =====
  // Easy (4)
  { name: "Search in a Binary Search Tree", difficulty: "easy", topic: "Binary Search Tree", timeTaken: 25 },
  { name: "Insert into a Binary Search Tree", difficulty: "easy", topic: "Binary Search Tree", timeTaken: 30 },
  { name: "Delete Node in a BST", difficulty: "easy", topic: "Binary Search Tree", timeTaken: 35 },
  { name: "Lowest Common Ancestor of a Binary Search Tree", difficulty: "easy", topic: "Binary Search Tree", timeTaken: 30 },

  // Medium (4)
  { name: "Validate Binary Search Tree", difficulty: "medium", topic: "Binary Search Tree", timeTaken: 45 },
  { name: "Convert Sorted Array to Binary Search Tree", difficulty: "medium", topic: "Binary Search Tree", timeTaken: 40 },
  { name: "Binary Search Tree Iterator", difficulty: "medium", topic: "Binary Search Tree", timeTaken: 45 },
  { name: "Kth Smallest Element in a BST", difficulty: "medium", topic: "Binary Search Tree", timeTaken: 40 },

  // Hard (2)
  { name: "Serialize and Deserialize BST", difficulty: "hard", topic: "Binary Search Tree", timeTaken: 60 },
  { name: "Recover Binary Search Tree", difficulty: "hard", topic: "Binary Search Tree", timeTaken: 65 },

  // ===== RECURSION (10 problems) =====
  // Easy (4)
  { name: "Reverse String", difficulty: "easy", topic: "Recursion", timeTaken: 20 },
  { name: "Swap Nodes in Pairs", difficulty: "easy", topic: "Recursion", timeTaken: 25 },
  { name: "Merge Two Sorted Lists", difficulty: "easy", topic: "Recursion", timeTaken: 30 },
  { name: "Reverse Linked List", difficulty: "easy", topic: "Recursion", timeTaken: 25 },

  // Medium (4)
  { name: "Permutations", difficulty: "medium", topic: "Recursion", timeTaken: 45 },
  { name: "Subsets", difficulty: "medium", topic: "Recursion", timeTaken: 40 },
  { name: "Generate Parentheses", difficulty: "medium", topic: "Recursion", timeTaken: 50 },
  { name: "Combination Sum", difficulty: "medium", topic: "Recursion", timeTaken: 45 },

  // Hard (2)
  { name: "N-Queens", difficulty: "hard", topic: "Recursion", timeTaken: 80 },
  { name: "Sudoku Solver", difficulty: "hard", topic: "Recursion", timeTaken: 80 },

  // ===== MATRIX (10 problems) =====
  // Easy (4)
  { name: "Reshape the Matrix", difficulty: "easy", topic: "Matrix", timeTaken: 30 },
  { name: "Toeplitz Matrix", difficulty: "easy", topic: "Matrix", timeTaken: 25 },
  { name: "Transpose Matrix", difficulty: "easy", topic: "Matrix", timeTaken: 25 },
  { name: "Matrix Diagonal Sum", difficulty: "easy", topic: "Matrix", timeTaken: 30 },

  // Medium (4)
  { name: "Set Matrix Zeroes", difficulty: "medium", topic: "Matrix", timeTaken: 40 },
  { name: "Spiral Matrix", difficulty: "medium", topic: "Matrix", timeTaken: 45 },
  { name: "Rotate Image", difficulty: "medium", topic: "Matrix", timeTaken: 40 },
  { name: "Word Search", difficulty: "medium", topic: "Matrix", timeTaken: 50 },

  // Hard (2)
  { name: "Game of Life", difficulty: "hard", topic: "Matrix", timeTaken: 55 },
  { name: "Sudoku Solver", difficulty: "hard", topic: "Matrix", timeTaken: 80 },

  // ===== QUEUE (8 problems) =====
  // Easy (3)
  { name: "Implement Stack using Queues", difficulty: "easy", topic: "Queue", timeTaken: 25 },
  { name: "Number of Recent Calls", difficulty: "easy", topic: "Queue", timeTaken: 20 },
  { name: "Moving Average from Data Stream", difficulty: "easy", topic: "Queue", timeTaken: 25 },

  // Medium (3)
  { name: "Open the Lock", difficulty: "medium", topic: "Queue", timeTaken: 45 },
  { name: "Perfect Squares", difficulty: "medium", topic: "Queue", timeTaken: 45 },
  { name: "Design Circular Queue", difficulty: "medium", topic: "Queue", timeTaken: 40 },

  // Hard (2)
  { name: "Sliding Window Maximum", difficulty: "hard", topic: "Queue", timeTaken: 65 },
  { name: "First Unique Number", difficulty: "hard", topic: "Queue", timeTaken: 55 },

  // ===== MATH (10 problems) =====
  // Easy (4)
  { name: "Fizz Buzz", difficulty: "easy", topic: "Math", timeTaken: 20 },
  { name: "Count Primes", difficulty: "easy", topic: "Math", timeTaken: 30 },
  { name: "Power of Three", difficulty: "easy", topic: "Math", timeTaken: 25 },
  { name: "Roman to Integer", difficulty: "easy", topic: "Math", timeTaken: 30 },

  // Medium (4)
  { name: "Happy Number", difficulty: "medium", topic: "Math", timeTaken: 35 },
  { name: "Factorial Trailing Zeroes", difficulty: "medium", topic: "Math", timeTaken: 30 },
  { name: "Excel Sheet Column Number", difficulty: "medium", topic: "Math", timeTaken: 25 },
  { name: "Pow(x, n)", difficulty: "medium", topic: "Math", timeTaken: 40 },

  // Hard (2)
  { name: "Max Points on a Line", difficulty: "hard", topic: "Math", timeTaken: 65 },
  { name: "Basic Calculator", difficulty: "hard", topic: "Math", timeTaken: 70 },

  // ===== TRIE (8 problems) =====
  // Easy (2)
  { name: "Implement Trie (Prefix Tree)", difficulty: "easy", topic: "Trie", timeTaken: 35 },
  { name: "Longest Common Prefix", difficulty: "easy", topic: "Trie", timeTaken: 30 },

  // Medium (4)
  { name: "Add and Search Word", difficulty: "medium", topic: "Trie", timeTaken: 45 },
  { name: "Word Search II", difficulty: "medium", topic: "Trie", timeTaken: 55 },
  { name: "Replace Words", difficulty: "medium", topic: "Trie", timeTaken: 40 },
  { name: "Map Sum Pairs", difficulty: "medium", topic: "Trie", timeTaken: 45 },

  // Hard (2)
  { name: "Concatenated Words", difficulty: "hard", topic: "Trie", timeTaken: 70 },
  { name: "Palindrome Pairs", difficulty: "hard", topic: "Trie", timeTaken: 75 },

  // ===== BINARY (8 problems) =====
  // Easy (3)
  { name: "Number of 1 Bits", difficulty: "easy", topic: "Binary", timeTaken: 25 },
  { name: "Counting Bits", difficulty: "easy", topic: "Binary", timeTaken: 35 },
  { name: "Reverse Bits", difficulty: "easy", topic: "Binary", timeTaken: 30 },

  // Medium (3)
  { name: "Sum of Two Integers", difficulty: "medium", topic: "Binary", timeTaken: 40 },
  { name: "Missing Number", difficulty: "medium", topic: "Binary", timeTaken: 35 },
  { name: "Single Number", difficulty: "medium", topic: "Binary", timeTaken: 30 },

  // Hard (2)
  { name: "Divide Two Integers", difficulty: "hard", topic: "Binary", timeTaken: 55 },
  { name: "Maximum Product of Word Lengths", difficulty: "hard", topic: "Binary", timeTaken: 60 }
];


const topicPriority = new Map();
topics.forEach(topic => topicPriority.set(topic.name, topic.priority));

const difficultyPriority = new Map();
difficulties.forEach(difficulty => difficultyPriority.set(difficulty.level, difficulty.priority));

const difficultyIdealTime = new Map();
difficulties.forEach(difficulty => difficultyIdealTime.set(difficulty.level, difficulty.idealTime));

problemList.forEach(problem => {
    const idealTime = difficultyIdealTime.get(problem.difficulty);
    const timeEfficiency = Math.max(0, 1 - Math.abs(problem.timeTaken - idealTime) / (idealTime * 0.8));
    
    problem.weight = topicPriority.get(problem.topic) * 
                    difficultyPriority.get(problem.difficulty) * 
                    timeEfficiency;
});

export const generateProblemChosenList = (weekCount, hoursPerWeek, difficultiesChosen, topicsChosen) => {
    const totalTime = weekCount * hoursPerWeek * 60;
    
    // Calculate time budget for each difficulty based on priority weights
    const totalPriority = difficultiesChosen.reduce((sum, diff) => sum + diff.priority, 0);
    const timeBudget = {};
    
    difficultiesChosen.forEach(diff => {
        timeBudget[diff.level] = totalTime * (diff.priority / totalPriority);
    });
    
    const resultingList = [];
    
    // Process each difficulty separately
    difficultiesChosen.forEach(diff => {
        const level = diff.level;
        const budget = timeBudget[level];
        
        // Filter problems for this difficulty and chosen topics
        const difficultyProblems = problemList.filter(problem => 
            problem.difficulty === level && 
            topicsChosen.some(t => t.name === problem.topic)
        );
        
        // Sort by weight (highest first)
        difficultyProblems.sort((a, b) => b.weight - a.weight);
        
        let accumulatedTime = 0;
        
        // Select problems until budget is filled
        for (const problem of difficultyProblems) {
            if (accumulatedTime + problem.timeTaken <= budget) {
                resultingList.push(problem);
                accumulatedTime += problem.timeTaken;
            } else {
                break;
            }
        }
        
        console.log(`Difficulty ${level}: Budget ${budget.toFixed(0)}min, Used ${accumulatedTime.toFixed(0)}min, Selected ${resultingList.length} problems`);
    });
    
    return resultingList;
};