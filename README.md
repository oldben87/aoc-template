# aoc-template

A project template for solving advent of code challenges

# How to run

1.  `npm install`
2.  `npx ts-node 2015/Day1`

# CLI Flags

- `test` use the test-input.txt file for this run
- `altData` - use either alt-test-input.txt or alt-input.txt file depending on use of the `test` flag
- `pt1` just run part 1
- `pt2` just run part 2
- `-dp` set an alternate data path if the input file cannot be found from your current directory. The new file path must follow this flag
- `-bp` set an alternative base path to run against if you are not in the root directory of the project.
