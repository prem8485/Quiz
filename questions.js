const questions = [

    // ==========================================
    // BASIC LEVEL (Q1–Q15)
    // Python Basics, Operators, Strings, Lists,
    // Loops, Conditions and Functions
    // ==========================================

   // ==========================================
// EASY LEVEL (Q1–Q15)
// Functions, Lambda and OOP Fundamentals
// ==========================================

{
    question: "Which keyword is used to define a function in Python?",
    options: ["function", "def", "fun", "define"],
    answer: 1
},
{
    question: "What is a function in Python?",
    options: [
        "A variable",
        "A reusable block of code",
        "A loop",
        "A data type"
    ],
    answer: 1
},
{
    question: "What will be the output?\n\ndef greet():\n    print('Hello')\n\ngreet()",
    options: ["greet", "Hello", "None", "Error"],
    answer: 1
},
{
    question: "What will be the output?\n\ndef add(a, b):\n    return a + b\n\nprint(add(10, 20))",
    options: ["10", "20", "30", "1020"],
    answer: 2
},
{
    question: "Which statement is used to return a value from a function?",
    options: ["print", "break", "return", "pass"],
    answer: 2
},
{
    question: "What will be the output?\n\ndef square(x):\n    return x * x\n\nprint(square(5))",
    options: ["10", "20", "25", "5"],
    answer: 2
},
{
    question: "What is a lambda function in Python?",
    options: [
        "A function with multiple names",
        "An anonymous function",
        "A class function",
        "A built-in loop"
    ],
    answer: 1
},
{
    question: "Which keyword is used to create a lambda function?",
    options: ["def", "lambda", "return", "anonymous"],
    answer: 1
},
{
    question: "What will be the output?\n\nx = lambda a: a + 10\nprint(x(5))",
    options: ["5", "10", "15", "50"],
    answer: 2
},
{
    question: "What is the purpose of __init__() in Python?",
    options: [
        "To destroy an object",
        "To initialize an object",
        "To create a loop",
        "To return a value"
    ],
    answer: 1
},
{
    question: "What is an object in Python?",
    options: [
        "An instance of a class",
        "A function",
        "A loop",
        "A keyword"
    ],
    answer: 0
},
{
    question: "Which keyword is used to create a class in Python?",
    options: ["object", "class", "def", "new"],
    answer: 1
},
{
    question: "What will be the output?\n\nclass Student:\n    def show(self):\n        print('Student')\n\ns = Student()\ns.show()",
    options: ["Class", "Student", "show", "Error"],
    answer: 1
},
{
    question: "What does self represent in a Python class?",
    options: [
        "The parent class",
        "The current instance of the class",
        "A global variable",
        "A constructor keyword"
    ],
    answer: 1
},
{
    question: "What will be the output?\n\nx = lambda a, b: a * b\nprint(x(4, 5))",
    options: ["9", "20", "45", "1"],
    answer: 1
},

// ==========================================
// MEDIUM LEVEL (Q16–Q35)
// Functions, Lambda, OOPs and Inheritance
// ==========================================

{
    question: "What is a parameter in a Python function?",
    options: [
        "A value returned by a function",
        "A variable defined in the function definition",
        "A class object",
        "A loop condition"
    ],
    answer: 1
},
{
    question: "What will be the output?\n\ndef display(name, age=20):\n    print(name, age)\n\ndisplay('Prem')",
    options: ["Prem 0", "Prem 20", "Prem None", "Error"],
    answer: 1
},
{
    question: "What is the output of the following code?\n\ndef add(a, b=5):\n    return a + b\n\nprint(add(10, 15))",
    options: ["15", "20", "25", "10"],
    answer: 2
},
{
    question: "Which symbol is used for variable-length positional arguments?",
    options: ["**", "*", "//", "@"],
    answer: 1
},
{
    question: "What will be the output?\n\ndef total(*args):\n    return sum(args)\n\nprint(total(1, 2, 3, 4))",
    options: ["6", "10", "1234", "Error"],
    answer: 1
},
{
    question: "What does **kwargs represent in Python?",
    options: [
        "Multiple positional arguments",
        "Multiple keyword arguments",
        "A lambda function",
        "A class variable"
    ],
    answer: 1
},
{
    question: "What will be the output?\n\nx = lambda a, b: a if a > b else b\nprint(x(15, 10))",
    options: ["10", "15", "25", "True"],
    answer: 1
},
{
    question: "What will be the output?\n\nnumbers = [1, 2, 3, 4]\nresult = list(map(lambda x: x * 2, numbers))\nprint(result)",
    options: [
        "[1, 2, 3, 4]",
        "[2, 4, 6, 8]",
        "[1, 4, 9, 16]",
        "[3, 6, 9, 12]"
    ],
    answer: 1
},
{
    question: "What will be the output?\n\nnumbers = [1, 2, 3, 4, 5]\nresult = list(filter(lambda x: x % 2 == 0, numbers))\nprint(result)",
    options: [
        "[1, 3, 5]",
        "[2, 4]",
        "[1, 2, 3, 4, 5]",
        "[2, 4, 6]"
    ],
    answer: 1
},
{
    question: "Which of the following is a feature of OOP?",
    options: [
        "Encapsulation",
        "Inheritance",
        "Polymorphism",
        "All of the above"
    ],
    answer: 3
},
{
    question: "What is inheritance in Python?",
    options: [
        "Creating multiple variables",
        "Acquiring properties of another class",
        "Defining a function",
        "Deleting an object"
    ],
    answer: 1
},
{
    question: "Which class is called the parent class?",
    options: [
        "The class that inherits properties",
        "The class whose properties are inherited",
        "The object class only",
        "The child class"
    ],
    answer: 1
},
{
    question: "What will be the output?\n\nclass A:\n    def show(self):\n        print('Parent')\n\nclass B(A):\n    pass\n\nobj = B()\nobj.show()",
    options: ["Child", "Parent", "Error", "None"],
    answer: 1
},
{
    question: "What is method overriding?",
    options: [
        "Defining two classes",
        "Redefining a parent class method in a child class",
        "Deleting a method",
        "Calling a constructor"
    ],
    answer: 1
},
{
    question: "What will be the output?\n\nclass A:\n    def show(self):\n        print('A')\n\nclass B(A):\n    def show(self):\n        print('B')\n\nobj = B()\nobj.show()",
    options: ["A", "B", "A B", "Error"],
    answer: 1
},
{
    question: "Which function is used to access parent class methods?",
    options: ["parent()", "this()", "super()", "base()"],
    answer: 2
},
{
    question: "What will be the output?\n\nclass A:\n    def __init__(self):\n        self.x = 10\n\nclass B(A):\n    pass\n\nobj = B()\nprint(obj.x)",
    options: ["0", "10", "None", "Error"],
    answer: 1
},
{
    question: "What is a constructor in Python?",
    options: [
        "A method used to initialize an object",
        "A method used to delete a class",
        "A loop",
        "A conditional statement"
    ],
    answer: 0
},
{
    question: "What will be the output?\n\nclass Student:\n    def __init__(self, name):\n        self.name = name\n\ns = Student('Rahul')\nprint(s.name)",
    options: ["Student", "Rahul", "name", "Error"],
    answer: 1
},
{
    question: "What is the output?\n\nclass A:\n    def show(self):\n        print('Hello')\n\nobj = A()\nobj.show()",
    options: ["A", "show", "Hello", "Error"],
    answer: 2
},

// ==========================================
// ADVANCED LEVEL (Q36–Q50)
// Advanced Functions, OOPs, Inheritance,
// Lambda, Polymorphism and Encapsulation
// ==========================================

{
    question: "What will be the output?\n\ndef outer():\n    x = 10\n    def inner():\n        return x + 5\n    return inner()\n\nprint(outer())",
    options: ["5", "10", "15", "Error"],
    answer: 2
},
{
    question: "What will be the output?\n\nx = lambda a: lambda b: a + b\nprint(x(5)(10))",
    options: ["5", "10", "15", "Error"],
    answer: 2
},
{
    question: "What will be the output?\n\nnumbers = [1, 2, 3, 4]\nresult = list(map(lambda x: x ** 2, filter(lambda x: x % 2 == 0, numbers)))\nprint(result)",
    options: [
        "[1, 4, 9, 16]",
        "[4, 16]",
        "[2, 4]",
        "[1, 3]"
    ],
    answer: 1
},
{
    question: "What is recursion in Python?",
    options: [
        "A function calling itself",
        "A class calling another class",
        "A loop inside a loop",
        "A function without arguments"
    ],
    answer: 0
},
{
    question: "What will be the output?\n\ndef factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))",
    options: ["24", "60", "120", "25"],
    answer: 2
},
{
    question: "What is polymorphism in OOP?",
    options: [
        "One class having many objects",
        "One interface or method having different forms",
        "Hiding data",
        "Creating constructors"
    ],
    answer: 1
},
{
    question: "What will be the output?\n\nclass A:\n    def show(self):\n        print('A')\n\nclass B(A):\n    def show(self):\n        super().show()\n        print('B')\n\nobj = B()\nobj.show()",
    options: [
        "A",
        "B",
        "A B",
        "B A"
    ],
    answer: 2
},
{
    question: "What is encapsulation in Python?",
    options: [
        "Combining data and methods into a single unit",
        "Creating multiple loops",
        "Using lambda functions",
        "Defining multiple constructors"
    ],
    answer: 0
},
{
    question: "Which prefix is commonly used for name mangling of private attributes in Python?",
    options: ["_", "__", "#", "$"],
    answer: 1
},
{
    question: "What will be the output?\n\nclass Student:\n    def __init__(self):\n        self.__marks = 90\n\ns = Student()\nprint(s._Student__marks)",
    options: ["90", "None", "Error", "Student"],
    answer: 0
},
{
    question: "What is abstraction in OOP?",
    options: [
        "Showing only essential details and hiding implementation",
        "Creating multiple objects",
        "Copying a class",
        "Defining a lambda function"
    ],
    answer: 0
},
{
    question: "What will be the output?\n\nclass A:\n    x = 10\n\nclass B(A):\n    pass\n\nclass C(B):\n    pass\n\nobj = C()\nprint(obj.x)",
    options: ["0", "10", "None", "Error"],
    answer: 1
},
{
    question: "What type of inheritance is shown below?\n\nclass A:\n    pass\n\nclass B(A):\n    pass\n\nclass C(A):\n    pass",
    options: [
        "Single inheritance",
        "Multiple inheritance",
        "Hierarchical inheritance",
        "Multilevel inheritance"
    ],
    answer: 2
},
{
    question: "What will be the output?\n\nclass A:\n    def __init__(self):\n        self.x = 5\n\nclass B(A):\n    def __init__(self):\n        super().__init__()\n        self.x += 10\n\nobj = B()\nprint(obj.x)",
    options: ["5", "10", "15", "Error"],
    answer: 2
},
{
    question: "Find the error in the following code.\n\nclass Student:\n    def __init__(self, name):\n        self.name = name\n\ns = Student()\nprint(s.name)",
    options: [
        "Error in class definition",
        "Error in self",
        "Missing required argument name",
        "No error"
    ],
    answer: 2
}
];
