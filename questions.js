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

// ==========================================
// EASY LEVEL (Q1–Q15)
// Functions, OOPs and Lambda
// ==========================================

{
    question: "Which of the following is a valid function definition in Python?",
    options: [
        "function add():",
        "def add():",
        "create add():",
        "func add():"
    ],
    answer: 1
},
{
    question: "What will be the output?\n\ndef calculate(x):\n    print(x + 5)\n\ncalculate(7)",
    options: ["7", "5", "12", "35"],
    answer: 2
},
{
    question: "What will be the output?\n\ndef test():\n    return 10, 20\n\na, b = test()\nprint(a * b)",
    options: ["30", "200", "1020", "Error"],
    answer: 1
},
{
    question: "What happens when a Python function has no return statement?",
    options: [
        "Returns 0",
        "Returns False",
        "Returns None",
        "Produces an error"
    ],
    answer: 2
},
{
    question: "What will be the output?\n\ndef show(a, b):\n    print(a - b)\n\nshow(b=4, a=15)",
    options: ["11", "19", "-11", "Error"],
    answer: 0
},
{
    question: "Which argument type allows passing values using parameter names?",
    options: [
        "Positional arguments",
        "Keyword arguments",
        "Default arguments",
        "Variable arguments"
    ],
    answer: 1
},
{
    question: "What will be the output?\n\nx = lambda n: n % 3\nprint(x(14))",
    options: ["3", "2", "4", "1"],
    answer: 1
},
{
    question: "What will be the output?\n\nx = lambda a, b, c: a + b * c\nprint(x(2, 3, 4))",
    options: ["20", "14", "24", "18"],
    answer: 1
},
{
    question: "Which of the following is used to call a function?",
    options: [
        "Function name followed by parentheses",
        "Function name followed by brackets",
        "Using the class keyword",
        "Using the return keyword"
    ],
    answer: 0
},
{
    question: "What is the output?\n\nclass Car:\n    color = 'Red'\n\nc = Car()\nprint(c.color)",
    options: ["Car", "color", "Red", "None"],
    answer: 2
},
{
    question: "Which method is automatically called when an object is created?",
    options: [
        "__str__()",
        "__init__()",
        "__delattr__()",
        "__repr__()"
    ],
    answer: 1
},
{
    question: "What will be the output?\n\nclass Demo:\n    def __init__(self):\n        print('Object Created')\n\nobj = Demo()",
    options: [
        "Demo",
        "Object Created",
        "None",
        "Error"
    ],
    answer: 1
},
{
    question: "What is the main purpose of a class?",
    options: [
        "To execute loops",
        "To define a blueprint for objects",
        "To store only numbers",
        "To terminate a program"
    ],
    answer: 1
},
{
    question: "What will be the output?\n\nclass Employee:\n    company = 'ABC'\n\ne1 = Employee()\ne2 = Employee()\nprint(e1.company == e2.company)",
    options: ["True", "False", "ABC", "Error"],
    answer: 0
},
{
    question: "Which function returns the identity of an object?",
    options: [
        "type()",
        "id()",
        "len()",
        "dir()"
    ],
    answer: 1
},

// ==========================================
// MEDIUM LEVEL (Q16–Q35)
// Advanced Functions, OOPs and Inheritance
// ==========================================

{
    question: "What will be the output?\n\ndef power(x, y=2):\n    return x ** y\n\nprint(power(3))",
    options: ["6", "9", "8", "3"],
    answer: 1
},
{
    question: "What will be the output?\n\ndef modify(value):\n    value = value + 10\n    return value\n\nx = 5\nprint(modify(x), x)",
    options: ["15 15", "5 15", "15 5", "5 5"],
    answer: 2
},
{
    question: "What will be the output?\n\ndef operation(a, b):\n    return a // b, a % b\n\nprint(operation(17, 5))",
    options: [
        "(3, 2)",
        "(3, 3)",
        "(2, 3)",
        "(3.4, 2)"
    ],
    answer: 0
},
{
    question: "Which statement is used to create an anonymous function with multiple expressions?",
    options: [
        "lambda",
        "def",
        "return",
        "yield"
    ],
    answer: 0
},
{
    question: "What will be the output?\n\nvalues = [5, 2, 8, 1]\nvalues.sort(key=lambda x: x)\nprint(values)",
    options: [
        "[5, 2, 8, 1]",
        "[8, 5, 2, 1]",
        "[1, 2, 5, 8]",
        "[1, 5, 2, 8]"
    ],
    answer: 2
},
{
    question: "What will be the output?\n\nclass Demo:\n    count = 0\n    def __init__(self):\n        Demo.count += 1\n\na = Demo()\nb = Demo()\nc = Demo()\nprint(Demo.count)",
    options: ["1", "2", "3", "0"],
    answer: 2
},
{
    question: "Which variable is shared among all instances of a class?",
    options: [
        "Local variable",
        "Instance variable",
        "Class variable",
        "Global variable"
    ],
    answer: 2
},
{
    question: "What will be the output?\n\nclass Test:\n    def __init__(self, x):\n        self.value = x\n\na = Test(12)\nb = Test(25)\nprint(a.value + b.value)",
    options: ["12", "25", "37", "13"],
    answer: 2
},
{
    question: "What does the pass statement do inside a class?",
    options: [
        "Stops the program",
        "Acts as a placeholder",
        "Creates an object",
        "Calls the parent class"
    ],
    answer: 1
},
{
    question: "What will be the output?\n\nclass A:\n    def display(self):\n        print('Welcome')\n\nclass B(A):\n    def message(self):\n        print('Python')\n\nobj = B()\nobj.display()\nobj.message()",
    options: [
        "Python Welcome",
        "Welcome Python",
        "Welcome",
        "Error"
    ],
    answer: 1
},
{
    question: "What is the correct syntax for multiple inheritance?",
    options: [
        "class C(A, B):",
        "class C extends A, B:",
        "class C(A + B):",
        "class C inherits A, B:"
    ],
    answer: 0
},
{
    question: "What will be the output?\n\nclass A:\n    def show(self):\n        print('A')\n\nclass B:\n    def show(self):\n        print('B')\n\nclass C(A, B):\n    pass\n\nobj = C()\nobj.show()",
    options: ["A", "B", "A B", "Error"],
    answer: 0
},
{
    question: "Which method is commonly used to provide a string representation of an object?",
    options: [
        "__init__()",
        "__str__()",
        "__call__()",
        "__len__()"
    ],
    answer: 1
},
{
    question: "What will be the output?\n\nclass Book:\n    def __str__(self):\n        return 'Python Book'\n\nb = Book()\nprint(b)",
    options: [
        "Book",
        "Python Book",
        "None",
        "Error"
    ],
    answer: 1
},
{
    question: "Which decorator is used to define a class method?",
    options: [
        "@staticmethod",
        "@property",
        "@classmethod",
        "@abstractmethod"
    ],
    answer: 2
},
{
    question: "What is the first parameter of a class method conventionally called?",
    options: ["self", "cls", "class", "object"],
    answer: 1
},
{
    question: "What will be the output?\n\nclass Calculator:\n    @staticmethod\n    def add(a, b):\n        return a + b\n\nprint(Calculator.add(8, 2))",
    options: ["6", "10", "82", "Error"],
    answer: 1
},
{
    question: "What is the main difference between an instance method and a static method?",
    options: [
        "Instance methods use self, static methods do not require self",
        "Both always require self",
        "Static methods cannot return values",
        "Instance methods cannot access objects"
    ],
    answer: 0
},
{
    question: "What will be the output?\n\nclass A:\n    def __init__(self):\n        self.x = 10\n\nclass B(A):\n    pass\n\nclass C(B):\n    pass\n\nobj = C()\nprint(obj.x * 2)",
    options: ["10", "20", "30", "Error"],
    answer: 1
},
{
    question: "What is method resolution order (MRO) in Python?",
    options: [
        "Order in which variables are created",
        "Order in which Python searches for methods in inheritance",
        "Order in which objects are deleted",
        "Order of function arguments"
    ],
    answer: 1
},

// ==========================================
// ADVANCED LEVEL (Q36–Q50)
// Decorators, Recursion, OOPs and Inheritance
// ==========================================

{
    question: "What will be the output?\n\ndef decorator(func):\n    def wrapper():\n        print('Start')\n        func()\n        print('End')\n    return wrapper\n\n@decorator\ndef greet():\n    print('Hello')\n\ngreet()",
    options: [
        "Hello Start End",
        "Start Hello End",
        "End Hello Start",
        "Error"
    ],
    answer: 1
},
{
    question: "What will be the output?\n\ndef count(n):\n    if n == 0:\n        return 0\n    return 1 + count(n - 1)\n\nprint(count(4))",
    options: ["3", "4", "5", "0"],
    answer: 1
},
{
    question: "What will be the output?\n\ndef fun(n):\n    if n <= 1:\n        return n\n    return fun(n - 1) + fun(n - 2)\n\nprint(fun(6))",
    options: ["5", "6", "8", "13"],
    answer: 2
},
{
    question: "What is the purpose of a base case in recursion?",
    options: [
        "To repeat the function forever",
        "To stop recursive calls",
        "To create an object",
        "To initialize a class"
    ],
    answer: 1
},
{
    question: "What will be the output?\n\nclass A:\n    def display(self):\n        print('Base')\n\nclass B(A):\n    def display(self):\n        print('Derived')\n        super().display()\n\nB().display()",
    options: [
        "Base Derived",
        "Derived Base",
        "Derived",
        "Base"
    ],
    answer: 1
},
{
    question: "What will be the output?\n\nclass A:\n    def __init__(self):\n        self.value = 10\n\nclass B(A):\n    def __init__(self):\n        self.value = 20\n\nobj = B()\nprint(obj.value)",
    options: ["10", "20", "30", "Error"],
    answer: 1
},
{
    question: "Which module provides the ABC class for defining abstract base classes?",
    options: [
        "math",
        "random",
        "abc",
        "os"
    ],
    answer: 2
},
{
    question: "Which decorator is used to declare an abstract method?",
    options: [
        "@classmethod",
        "@abstractmethod",
        "@staticmethod",
        "@property"
    ],
    answer: 1
},
{
    question: "What will be the output?\n\nclass A:\n    def __init__(self, x):\n        self.x = x\n\n    def __add__(self, other):\n        return self.x + other.x\n\na = A(10)\nb = A(20)\nprint(a + b)",
    options: ["10", "20", "30", "Error"],
    answer: 2
},
{
    question: "Which special method is used to overload the + operator?",
    options: [
        "__sub__()",
        "__add__()",
        "__mul__()",
        "__eq__()"
    ],
    answer: 1
},
{
    question: "What will be the output?\n\nclass A:\n    def __init__(self, x):\n        self.x = x\n\n    def __eq__(self, other):\n        return self.x == other.x\n\na = A(5)\nb = A(5)\nprint(a == b)",
    options: ["True", "False", "5", "Error"],
    answer: 0
},
{
    question: "What is the output?\n\nclass Demo:\n    def __init__(self):\n        self.x = 5\n\n    def __del__(self):\n        print('Deleted')\n\nobj = Demo()\ndel obj",
    options: [
        "5",
        "Deleted",
        "None",
        "Error"
    ],
    answer: 1
},
{
    question: "What will be the output?\n\nclass A:\n    @classmethod\n    def show(cls):\n        print(cls.__name__)\n\nclass B(A):\n    pass\n\nB.show()",
    options: ["A", "B", "show", "Error"],
    answer: 1
},
{
    question: "Which function checks whether an object belongs to a particular class or its subclass?",
    options: [
        "type()",
        "id()",
        "isinstance()",
        "issubclass()"
    ],
    answer: 2
},
{
    question: "What will be the output?\n\nclass Animal:\n    pass\n\nclass Dog(Animal):\n    pass\n\nd = Dog()\nprint(isinstance(d, Animal))",
    options: ["True", "False", "Dog", "Error"],
    answer: 0
}
];
