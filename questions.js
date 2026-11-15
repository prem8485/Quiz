
// Question bank for the Online Assessment
const questions = [

    // Python Functions (Q1–Q15)

    {
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "def", "fun", "define"],
        answer: 1
    },
    {
        question: "Which keyword is used to return a value from a function?",
        options: ["print", "break", "return", "pass"],
        answer: 2
    },
    {
        question: "What will be the output of the following code?\n\ndef add(a, b):\n    return a + b\nprint(add(10, 20))",
        options: ["10", "20", "30", "1020"],
        answer: 2
    },
    {
        question: "What does a Python function return if no return statement is specified?",
        options: ["0", "False", "None", "Error"],
        answer: 2
    },
    {
        question: "Which parameter accepts a variable number of positional arguments?",
        options: ["*args", "**kwargs", "args[]", "var"],
        answer: 0
    },
    {
        question: "Which parameter accepts a variable number of keyword arguments?",
        options: ["*args", "**kwargs", "kwargs[]", "key"],
        answer: 1
    },
    {
        question: "What will be the output?\n\ndef greet(name='Student'):\n    print('Hello', name)\ngreet()",
        options: ["Hello", "Hello Student", "Student", "Error"],
        answer: 1
    },
    {
        question: "Which statement is used to stop a function and return a value?",
        options: ["break", "stop", "return", "exit"],
        answer: 2
    },
    {
        question: "What is a function calling itself known as?",
        options: ["Iteration", "Recursion", "Inheritance", "Looping"],
        answer: 1
    },
    {
        question: "Which built-in function returns the length of an object?",
        options: ["size()", "count()", "length()", "len()"],
        answer: 3
    },
    {
        question: "What will be the output?\n\ndef square(x):\n    return x * x\nprint(square(5))",
        options: ["10", "15", "25", "55"],
        answer: 2
    },
    {
        question: "Which of the following is a lambda function?",
        options: [
            "A function without a name",
            "A class",
            "A loop",
            "A module"
        ],
        answer: 0
    },
    {
        question: "Which keyword is used to create an anonymous function?",
        options: ["def", "lambda", "anonymous", "function"],
        answer: 1
    },
    {
        question: "What will be the output?\n\ndef multiply(a, b=2):\n    return a * b\nprint(multiply(5))",
        options: ["5", "7", "10", "Error"],
        answer: 2
    },
    {
        question: "Which statement passes a function without performing any operation?",
        options: ["break", "continue", "pass", "return"],
        answer: 2
    },

    // Python Classes and Objects (Q16–Q30)

    {
        question: "Which keyword is used to define a class in Python?",
        options: ["def", "object", "class", "struct"],
        answer: 2
    },
    {
        question: "What is an object in Python?",
        options: [
            "A function",
            "An instance of a class",
            "A loop",
            "A module"
        ],
        answer: 1
    },
    {
        question: "Which method is commonly used as a constructor in Python?",
        options: ["__start__()", "__main__()", "__create__()", "__init__()"],
        answer: 3
    },
    {
        question: "What does self represent in a Python class?",
        options: [
            "The parent class",
            "The current object",
            "A global variable",
            "A function"
        ],
        answer: 1
    },
    {
        question: "What will be the output?\n\nclass Student:\n    def display(self):\n        print('MCA')\ns = Student()\ns.display()",
        options: ["Student", "display", "MCA", "Error"],
        answer: 2
    },
    {
        question: "Which operator accesses object attributes and methods?",
        options: ["->", ".", "::", "#"],
        answer: 1
    },
    {
        question: "What will be the output?\n\nclass Person:\n    def __init__(self, name):\n        self.name = name\np = Person('Prem')\nprint(p.name)",
        options: ["Person", "name", "Prem", "Error"],
        answer: 2
    },
    {
        question: "Which function checks whether an object belongs to a particular class?",
        options: ["type()", "check()", "isinstance()", "object()"],
        answer: 2
    },
    {
        question: "What is a class in Python?",
        options: [
            "A blueprint for creating objects",
            "A loop",
            "A variable",
            "A conditional statement"
        ],
        answer: 0
    },
    {
        question: "What will be the output?\n\nclass Test:\n    x = 10\nt = Test()\nprint(t.x)",
        options: ["0", "10", "x", "Error"],
        answer: 1
    },
    {
        question: "Which method is automatically called when an object is created?",
        options: ["display()", "start()", "__init__()", "main()"],
        answer: 2
    },
    {
        question: "What is an instance variable?",
        options: [
            "A variable shared by all classes",
            "A variable belonging to an object",
            "A global variable",
            "A loop variable"
        ],
        answer: 1
    },
    {
        question: "What will be the output?\n\nclass Student:\n    def __init__(self):\n        self.name = 'Rahul'\ns = Student()\nprint(s.name)",
        options: ["Student", "Rahul", "name", "Error"],
        answer: 1
    },
    {
        question: "Which function returns the type of an object?",
        options: ["typeof()", "type()", "class()", "object()"],
        answer: 1
    },
    {
        question: "What is the correct way to create an object of class Student?",
        options: [
            "Student = object",
            "Student()",
            "new Student",
            "class Student()"
        ],
        answer: 1
    },

    // Python Single Inheritance (Q31–Q45)

    {
        question: "What is inheritance in Python?",
        options: [
            "Creating a loop",
            "Acquiring properties and methods of another class",
            "Defining a function",
            "Creating a variable"
        ],
        answer: 1
    },
    {
        question: "What is single inheritance?",
        options: [
            "One class inherits from one parent class",
            "One class inherits from multiple classes",
            "Multiple classes inherit from one class",
            "A class inherits from itself"
        ],
        answer: 0
    },
    {
        question: "Which function is commonly used to call the parent class constructor?",
        options: ["parent()", "this()", "super()", "base()"],
        answer: 2
    },
    {
        question: "What will be the output?\n\nclass A:\n    def show(self):\n        print('Parent Class')\nclass B(A):\n    pass\nobj = B()\nobj.show()",
        options: ["Child Class", "Parent Class", "B", "Error"],
        answer: 1
    },
    {
        question: "In class Dog(Animal), which class is the parent class?",
        options: ["Dog", "Animal", "Both", "None"],
        answer: 1
    },
    {
        question: "What is one major advantage of inheritance?",
        options: [
            "Code reusability",
            "Code duplication",
            "Slower execution",
            "Memory wastage"
        ],
        answer: 0
    },
    {
        question: "What will be the output?\n\nclass Human:\n    def __init__(self):\n        self.eyes = 2\nclass Male(Human):\n    pass\nm = Male()\nprint(m.eyes)",
        options: ["0", "1", "2", "Error"],
        answer: 2
    },
    {
        question: "Which is the correct syntax for single inheritance in Python?",
        options: [
            "class B inherits A:",
            "class B(A):",
            "class B extends A:",
            "class B -> A:"
        ],
        answer: 1
    },
    {
        question: "What is method overriding in Python?",
        options: [
            "Defining a new variable",
            "Calling a function repeatedly",
            "Redefining a parent class method in the child class",
            "Deleting a parent class"
        ],
        answer: 2
    },
    {
        question: "What will be the output?\n\nclass A:\n    def show(self):\n        print('Class A')\nclass B(A):\n    def show(self):\n        print('Class B')\nobj = B()\nobj.show()",
        options: ["Class A", "Class B", "A", "Error"],
        answer: 1
    },
    {
        question: "What is the child class also known as?",
        options: ["Base class", "Parent class", "Derived class", "Main class"],
        answer: 2
    },
    {
        question: "What is the parent class also known as?",
        options: ["Derived class", "Base class", "Child class", "Object instance"],
        answer: 1
    },
    {
        question: "What will be the output?\n\nclass A:\n    x = 100\nclass B(A):\n    pass\nobj = B()\nprint(obj.x)",
        options: ["0", "100", "B", "Error"],
        answer: 1
    },
    {
        question: "Which symbol is used to specify the parent class?",
        options: ["[ ]", "( )", "{ }", "< >"],
        answer: 1
    },
    {
        question: "Can a child class access public methods of its parent class?",
        options: ["Yes", "No", "Only with import", "Only with return"],
        answer: 0
    },

    // Python OOP Concepts and Method Overriding (Q46–Q60)

    {
        question: "What does OOP stand for?",
        options: [
            "Object-Oriented Programming",
            "Object Operating Process",
            "Open Object Programming",
            "Ordered Operation Program"
        ],
        answer: 0
    },
    {
        question: "Which of the following is a major concept of OOP?",
        options: ["Looping", "Encapsulation", "Compilation", "Iteration"],
        answer: 1
    },
    {
        question: "What is encapsulation?",
        options: [
            "Combining data and methods into a single unit",
            "Creating multiple loops",
            "Deleting objects",
            "Repeating code"
        ],
        answer: 0
    },
    {
        question: "What is polymorphism?",
        options: [
            "One name with many forms",
            "One class only",
            "Creating variables",
            "Hiding files"
        ],
        answer: 0
    },
    {
        question: "What will be the output?\n\nclass A:\n    def display(self):\n        print('A')\nclass B(A):\n    def display(self):\n        print('B')\nobj = B()\nobj.display()",
        options: ["A", "B", "AB", "Error"],
        answer: 1
    },
    {
        question: "Which method is used to access the parent class implementation?",
        options: ["parent()", "super()", "base()", "this()"],
        answer: 1
    },
    {
        question: "What is abstraction in Python?",
        options: [
            "Hiding implementation details",
            "Showing all internal code",
            "Creating objects only",
            "Repeating statements"
        ],
        answer: 0
    },
    {
        question: "Which module provides support for abstract base classes?",
        options: ["math", "random", "abc", "os"],
        answer: 2
    },
    {
        question: "Which decorator is used to define an abstract method?",
        options: [
            "@staticmethod",
            "@abstractmethod",
            "@classmethod",
            "@property"
        ],
        answer: 1
    },
    {
        question: "What will be the output?\n\nclass A:\n    def show(self):\n        print('Hello')\nclass B(A):\n    pass\nb = B()\nb.show()",
        options: ["B", "Hello", "A", "Error"],
        answer: 1
    },
    {
        question: "Which OOP concept allows the same method name to behave differently?",
        options: [
            "Inheritance",
            "Encapsulation",
            "Polymorphism",
            "Abstraction"
        ],
        answer: 2
    },
    {
        question: "What is the purpose of the pass statement in a class?",
        options: [
            "To terminate the class",
            "To define an empty class body",
            "To create an object",
            "To inherit another class"
        ],
        answer: 1
    },
    {
        question: "What will be the output?\n\nclass Animal:\n    def sound(self):\n        print('Animal Sound')\nclass Dog(Animal):\n    def sound(self):\n        print('Bark')\nd = Dog()\nd.sound()",
        options: ["Animal Sound", "Bark", "Dog", "Error"],
        answer: 1
    },
    {
        question: "Which of the following is used to delete an object attribute?",
        options: ["remove", "delete", "del", "clear"],
        answer: 2
    },
    {
        question: "Which function returns all attributes and methods of an object?",
        options: ["help()", "dir()", "type()", "id()"],
        answer: 1
    }

];
