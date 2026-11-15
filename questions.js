const questions = [

    // ==========================================
    // BASIC LEVEL (Q1–Q15)
    // Python Basics, Operators, Strings, Lists,
    // Loops, Conditions and Functions
    // ==========================================

    {
        question: "What will be the output?\n\nx = 10\ny = 3\nprint(x // y)",
        options: ["3.33", "3", "4", "1"],
        answer: 1
    },
    {
        question: "What will be the output?\n\nx = 5\nx += 3\nx *= 2\nprint(x)",
        options: ["11", "13", "16", "10"],
        answer: 2
    },
    {
        question: "What will be the output?\n\nx = 10\nif x > 5:\n    print('Python')\nelse:\n    print('Java')",
        options: ["Java", "Python", "True", "Error"],
        answer: 1
    },
    {
        question: "What will be the output?\n\nfor i in range(1, 5):\n    print(i, end=' ')",
        options: ["1 2 3 4 5", "0 1 2 3", "1 2 3 4", "2 3 4 5"],
        answer: 2
    },
    {
        question: "What will be the output?\n\nx = [10, 20, 30, 40]\nprint(x[2])",
        options: ["10", "20", "30", "40"],
        answer: 2
    },
    {
        question: "What will be the output?\n\nname = 'PYTHON'\nprint(name[1:4])",
        options: ["PYT", "YTH", "THO", "YTHO"],
        answer: 1
    },
    {
        question: "What will be the output?\n\nnumbers = [1, 2, 3]\nnumbers.append(4)\nprint(numbers)",
        options: [
            "[1, 2, 3]",
            "[4, 1, 2, 3]",
            "[1, 2, 3, 4]",
            "[1, 2, 4]"
        ],
        answer: 2
    },
    {
        question: "What will be the output?\n\nx = 10\nif x % 2 == 0:\n    print('Even')\nelse:\n    print('Odd')",
        options: ["Odd", "Even", "10", "Error"],
        answer: 1
    },
    {
        question: "What will be the output?\n\nx = 0\nfor i in range(1, 4):\n    x += i\nprint(x)",
        options: ["3", "5", "6", "10"],
        answer: 2
    },
    {
        question: "What will be the output?\n\ndef add(a, b):\n    return a + b\n\nprint(add(5, 7))",
        options: ["12", "57", "5", "7"],
        answer: 0
    },
    {
        question: "What will be the output?\n\nx = [2, 4, 6, 8]\nprint(len(x))",
        options: ["3", "4", "5", "8"],
        answer: 1
    },
    {
        question: "What will be the output?\n\nx = 5\nwhile x > 2:\n    print(x, end=' ')\n    x -= 1",
        options: ["5 4 3", "5 4 3 2", "4 3 2", "5 4"],
        answer: 0
    },
    {
        question: "What will be the output?\n\nx = (10, 20, 30)\nprint(x[-1])",
        options: ["10", "20", "30", "Error"],
        answer: 2
    },
    {
        question: "What will be the output?\n\nstudent = {'name': 'Prem', 'age': 25}\nprint(student['name'])",
        options: ["student", "name", "Prem", "25"],
        answer: 2
    },
    {
        question: "What will be the output?\n\nx = lambda a: a * a\nprint(x(6))",
        options: ["12", "30", "36", "6"],
        answer: 2
    },


    // ==========================================
    // MEDIUM LEVEL (Q16–Q30)
    // Nested Loops, Functions, Recursion,
    // Lists, Dictionaries and Classes
    // ==========================================

    {
        question: "What will be the output?\n\nfor i in range(1, 4):\n    for j in range(1, 3):\n        print(i + j, end=' ')",
        options: ["2 3 3 4 4 5", "1 2 3 4 5 6", "2 3 4 5", "3 4 5 6"],
        answer: 0
    },
    {
        question: "What will be the output?\n\nnumbers = [1, 2, 3, 4, 5]\nresult = [x * 2 for x in numbers if x % 2 == 0]\nprint(result)",
        options: ["[2, 4, 6, 8, 10]", "[4, 8]", "[2, 4]", "[1, 3, 5]"],
        answer: 1
    },
    {
        question: "What will be the output?\n\ndef calculate(a, b=5):\n    return a + b\n\nprint(calculate(10))",
        options: ["5", "10", "15", "Error"],
        answer: 2
    },
    {
        question: "What will be the output?\n\ndef fun(*args):\n    return sum(args)\n\nprint(fun(2, 4, 6))",
        options: ["6", "10", "12", "246"],
        answer: 2
    },
    {
        question: "What will be the output?\n\ndef factorial(n):\n    if n == 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(4))",
        options: ["10", "16", "24", "12"],
        answer: 2
    },
    {
        question: "What will be the output?\n\nx = [1, 2, 3]\ny = x\nx.append(4)\nprint(y)",
        options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4]", "Error"],
        answer: 1
    },
    {
        question: "What will be the output?\n\nx = {'a': 10, 'b': 20}\nx['c'] = 30\nprint(len(x))",
        options: ["2", "3", "4", "30"],
        answer: 1
    },
    {
        question: "What will be the output?\n\nx = [10, 20, 30, 40, 50]\nprint(x[1:-1])",
        options: ["[10, 20, 30]", "[20, 30, 40]", "[20, 30, 40, 50]", "[10, 20, 30, 40]"],
        answer: 1
    },
    {
        question: "What will be the output?\n\nx = 10\ndef test():\n    x = 20\n    print(x)\n\ntest()\nprint(x)",
        options: ["10 20", "20 10", "20 20", "10 10"],
        answer: 1
    },
    {
        question: "What will be the output?\n\nnumbers = [1, 2, 3, 4]\nprint(list(map(lambda x: x ** 2, numbers)))",
        options: ["[1, 2, 3, 4]", "[2, 4, 6, 8]", "[1, 4, 9, 16]", "[1, 8, 27, 64]"],
        answer: 2
    },
    {
        question: "What will be the output?\n\nx = [1, 2, 3, 4, 5]\nfor i in x:\n    if i == 3:\n        break\n    print(i, end=' ')",
        options: ["1 2 3", "1 2", "2 3", "1 2 3 4 5"],
        answer: 1
    },
    {
        question: "What will be the output?\n\nx = [1, 2, 3, 4, 5]\nfor i in x:\n    if i == 3:\n        continue\n    print(i, end=' ')",
        options: ["1 2 3 4 5", "1 2 4 5", "3", "1 2"],
        answer: 1
    },
    {
        question: "What will be the output?\n\nclass Student:\n    def __init__(self, name):\n        self.name = name\n\ns = Student('Prem')\nprint(s.name)",
        options: ["Student", "name", "Prem", "Error"],
        answer: 2
    },
    {
        question: "What will be the output?\n\nclass Test:\n    x = 10\n\na = Test()\nb = Test()\na.x = 20\nprint(a.x, b.x)",
        options: ["10 10", "20 20", "20 10", "10 20"],
        answer: 2
    },
    {
        question: "What will be the output?\n\nx = [1, 2, 3]\nprint(x[::-1])",
        options: ["[1, 2, 3]", "[3, 2, 1]", "[2, 1, 3]", "Error"],
        answer: 1
    },


    // ==========================================
    // ADVANCED LEVEL (Q31–Q45)
    // Advanced Coding Puzzles, Functions,
    // Objects, Constructors and Single Inheritance
    // ==========================================

    {
        question: "What will be the output?\n\nx = [1, 2, 3]\ny = x.copy()\ny.append(4)\nprint(x)",
        options: ["[1, 2, 3, 4]", "[1, 2, 3]", "[4]", "Error"],
        answer: 1
    },
    {
        question: "What will be the output?\n\nx = [1, 2, 3]\ny = x\nz = x.copy()\ny.append(4)\nz.append(5)\nprint(x, z)",
        options: [
            "[1, 2, 3] [1, 2, 3, 5]",
            "[1, 2, 3, 4] [1, 2, 3, 5]",
            "[1, 2, 3, 4, 5] [1, 2, 3, 5]",
            "Error"
        ],
        answer: 1
    },
    {
        question: "What will be the output?\n\ndef test(a, b, c=10):\n    return a + b + c\n\nprint(test(5, c=20, b=10))",
        options: ["25", "30", "35", "Error"],
        answer: 2
    },
    {
        question: "What will be the output?\n\nx = [1, 2, 3, 4]\nresult = [i for i in x if i % 2 != 0]\nprint(sum(result))",
        options: ["4", "5", "6", "10"],
        answer: 1
    },
    {
        question: "What will be the output?\n\nx = 10\ndef test():\n    global x\n    x = 25\n\ntest()\nprint(x)",
        options: ["10", "25", "None", "Error"],
        answer: 1
    },
    {
        question: "What will be the output?\n\nclass A:\n    def __init__(self):\n        self.x = 10\n\nclass B(A):\n    pass\n\nobj = B()\nprint(obj.x)",
        options: ["0", "10", "None", "Error"],
        answer: 1
    },
    {
        question: "What will be the output?\n\nclass A:\n    def show(self):\n        print('Parent')\n\nclass B(A):\n    def show(self):\n        print('Child')\n\nobj = B()\nobj.show()",
        options: ["Parent", "Child", "Parent Child", "Error"],
        answer: 1
    },
    {
        question: "What will be the output?\n\nclass A:\n    def __init__(self):\n        self.x = 10\n\nclass B(A):\n    def __init__(self):\n        super().__init__()\n        self.y = 20\n\nobj = B()\nprint(obj.x + obj.y)",
        options: ["10", "20", "30", "Error"],
        answer: 2
    },
    {
        question: "What will be the output?\n\nclass Human:\n    def __init__(self):\n        self.eyes = 2\n\nclass Male(Human):\n    def __init__(self, name):\n        super().__init__()\n        self.name = name\n\nm = Male('Prem')\nprint(m.name, m.eyes)",
        options: ["Prem 1", "Prem 2", "Male 2", "Error"],
        answer: 1
    },
    {
        question: "What will be the output?\n\nclass A:\n    x = 100\n\nclass B(A):\n    x = 200\n\nobj = B()\nprint(obj.x)",
        options: ["100", "200", "300", "Error"],
        answer: 1
    },
    {
        question: "What will be the output?\n\nclass A:\n    def show(self):\n        print('A')\n\nclass B(A):\n    def display(self):\n        self.show()\n        print('B')\n\nobj = B()\nobj.display()",
        options: ["A B", "B A", "Only A", "Error"],
        answer: 0
    },
    {
        question: "What will be the output?\n\nclass Parent:\n    def __init__(self):\n        self.a = 5\n\nclass Child(Parent):\n    def __init__(self):\n        super().__init__()\n        self.a += 10\n\nobj = Child()\nprint(obj.a)",
        options: ["5", "10", "15", "Error"],
        answer: 2
    },
    {
        question: "What will be the output?\n\nclass A:\n    def show(self):\n        print('Hello from A')\n\nclass B(A):\n    pass\n\nclass C(B):\n    pass\n\nobj = C()\nobj.show()",
        options: ["Hello from A", "Hello from B", "Hello from C", "Error"],
        answer: 0
    },
    {
        question: "What will be the output?\n\nclass Animal:\n    def sound(self):\n        print('Animal Sound')\n\nclass Dog(Animal):\n    def sound(self):\n        super().sound()\n        print('Bark')\n\nd = Dog()\nd.sound()",
        options: [
            "Bark",
            "Animal Sound",
            "Animal Sound Bark",
            "Error"
        ],
        answer: 2
    },
    {
        question: "Find the error in the following code.\n\nclass Human:\n    def __init__(self):\n        self.eyes = 2\n\nclass Male(Human):\n    def __init__(self, name):\n        super().__init__()\n        self.name = name\n\nm = Male()\nprint(m.name)",
        options: [
            "Error in class Human",
            "Error in super()",
            "Missing required argument name while creating Male object",
            "No error"
        ],
        answer: 2
    }

];
