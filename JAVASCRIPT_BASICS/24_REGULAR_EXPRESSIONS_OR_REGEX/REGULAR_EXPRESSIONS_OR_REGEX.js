/*
The RegExp Object
A regular expression is a pattern of characters.

The pattern is used for searching and replacing characters in strings.

The RegExp Object is a regular expression with added Properties and Methods.



Basic components and operations most frequently used:

1) Literals: Regular expressions can consist of literal characters that match themselves exactly. For example, the pattern “hello” would match the string “hello” in the target text.

2) Metacharacters: Metacharacters are special characters with a special meaning within a regular expression. Examples include:

. (dot): Matches any character except a newline character.
* (asterisk): matches one or more instances of any character.
+ (plus): Matches one or more occurrences of the preceding character.
? (question mark): Matches zero or one occurrence of the preceding character.
[] (square brackets): Define a character class, matching any character within the brackets.
() (parentheses): Creates a capture group for capturing matched subpatterns.


3) Modifiers: Modifiers specify additional rules for matching. Common modifiers include:

i: Case-insensitive matching.

g: Global matching (matches all occurrences rather than stopping at the first match).

m: Multiline matching.



4) Anchors: Anchors are used to specify the position of a match within the text. Examples include:

^ (caret): Matches the start of a line.

$ (dollar sign): Matches the end of a line.

Combining these components and operations allows you to create intricate and powerful patterns to search, validate, and transform text data using regular expressions.



RegExp Object Methods
*********************
Method	Description

i) compile() :	Deprecated in version 1.5. Compiles a regular expression

ii) exec() :	Tests for a match in a string. Returns the first match

iii) test() :	Tests for a match in a string. Returns true or false

iv) toString() :	Returns the string value of the regular expression


*/
