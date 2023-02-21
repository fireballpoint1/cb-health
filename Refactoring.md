# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
- The constants have been moved at the start of the file, so that it can be configured in code or as an environment variable with good visibility, also allows functions to have more business logic on screen without scrolling
- The bigger conditional statements have been made into 2 different functions based upon their decision variable (event and candidate).
    - The original function is smaller and more readable (I personally like to read code in portions, and i can be sure what line 24 does from a single function and then move onto 25 as the next item) 
    - The functions uses callisthenic approach and there are no else statements (Nested loops are hard to read with else conditions).
    - Return statements at if conditions allow you to track a logic branch - especially useful during debugging under pressure.
- Minimal comments to read code with a structure. Can also be used for automated documentation later on.
- Didn't make functions of hashing since it is a one line logic and I wouldn't want to refer a function to get it's useage. 