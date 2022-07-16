function toggleText() {
    var text = document.getElementById("demo");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  function myToggle() {
    var text = document.getElementById("demo");
    if (text.style.display === "none") {
    } else {
      text.style.display = "none";
    }
  }

const questions = [
  { question: "What is a data structure?", answer: "Data structures are storage formats that define the way that data is stored, organized, retrieved, processed manipulated, etc. Different types of data structures serve different purposes. For a deeper understanding, visit: https://discuss.boardinfinity.com/t/what-is-data-structure-and-it-types/12222/2" },
  { question: "What is an array", answer: "An array is a collection of similar-type data items stored at contiguous memory locations. It allows for data to be accessed only by its indexing number(s)." },
  { question: "What is a linked list?", answer: "A linear data structure in which the elements are NOT necessarily stored in a contiguous manner. The data elements are instead linked via 'pointers' which index the location of the following element in the sequence." },
  { question: "What does LIFO stand for and what does it mean?", answer: "LIFO stands for last in, first out. It refers to a way in which data can be stored and retrieved. It means that data which was stored last will be extracted first." },
  { question: "What does FIFO stand for and what does it mean?", answer: "FIFO stands for first in, first out. It refers to a way in which data can be stored and retrieved. It means that data which was stored first will be extracted first." },
  { question: "What is a stack?", answer: "A stack is a data structure consisting of a set of homogeneous elements and is based on the principle of last in first out. It is a commonly used abstract data type with two major operations, push and pop which are carried out on the element at the top of the stack. The push operation adds an element to the top of the stack while the pop operation removes an element from the top position. An example of this in computer operations is web browsing. As you browse the web, the URL of the page that you are currently on is placed at the top of the stack, whereas the URL from where you started can be found at the base. When you hit the 'back' button, your browser moves through the stack starting from the top." },
  { question: "What is a queue?", answer: "A queue is a linear data structure which stores elements in a first in, first out order. For more information on queues, as well as to learn more about different types of queues, visit: https://www.geeksforgeeks.org/queue-data-structure/ " },
  { question: "What is a binary search tree?", answer: "A binary tree is an extension of the linked-list data structure where each 'node' has at most two 'children' and each of the 'children nodes' has two 'children nodes' and so forth. The tree begins at the top with the main node which then links to the left sub-tree (whose value is less than its parent node) and the right sub-tree (whose value is greater than its parent node). This data structure allows for speed and accuracy as the amount of key-value pair comparisons that must be made is decreased. For more information, including a detailed visual, visit: https://www.guru99.com/binary-search-tree-data-structure.html" },
  { question: "What does a recursive function do?", answer: "A recursive function solves a particular problem by calling a copy of itself and solving smaller subproblems of the original problems, then combining them to get the desired solution as a whole. This is also referred to as the divide-and-conquer method." },
  { question: "What does OOP stand for and what is it?", answer: "OOP stands for object-oriented programming. This type of programming is centered around creating objects, or interrelated variables (property of the object) and functions (behavior of the object)." },
  { question: "From OOP, what are classes, objects, and class constructors?", answer: "A class is a collection of objects which the user defines. Classes are types of data structures that make the data easier to sort, find, manipulate, etc. Objects are instances of a class created with specifically defined data. Class constructors assign values to the data members of the class when an object of the class is created. For more information on OOP, as well as to find examples, visit: https://www.analyticsvidhya.com/blog/2020/09/object-oriented-programming/#:~:text=Now%2C%20there%20are%20four%20fundamental,in%20order%20to%20understand%20OOPs." },
  { question: "What is inheritance? (from OOP)", answer: "A concept in which the 'child' class will inherit all the public and protected properties and methods/behaviors from the 'parent' class. In addition, it can have its own properties and methods." },
  { question: "What is polymorphism? (from OOP)", answer: "Polymorphism describes situations in which something occurs in several different forms. It describes the concept that you can access objects of different types through the same interface and each type can provide its own independent implementation of this interface." },
  { question: "What is abstraction? (from OOP)", answer: "Abstraction is a concept where only necessary attributes of a larger data pool are shown to the user. Unnecessary data is hidden from the users to reduce complexity." },
  { question: "What is encapsulation? (from OOP)", answer: "Encapsulation refers to the bunching of data and code into a single unit. A common example of encapsulation are classes in OOP (object-oriented programming) languages. Classes contain both variables (data) and behaviours (functions/methods)." },
  { question: "What are doubly linked lists?", answer: "A doubly linked list is a way of storing data in a non-contiguous manner. This is made possible by pointers that point to the location of the data that is next in the sequence. With doubly linked lists, navigation of the data is possible in both directions as each set of data has a pointer which contains the location of the succeeding data and a pointer which contains the location of the prior data." },
  { question: "What is a graph?", answer: "A graph is a type of non-linear data structure that is used to store data in the form of nodes and edges/arcs. Fore more information, visit: https://afteracademy.com/blog/introduction-to-graph-in-programming#:~:text=A%20graph%20is%20a%20type,edges%20in%20the%20Graph%20G." },
  { question: "What is a deque?", answer: "A deque is a double-ended queue in which data elements can be added or removed from either end (the front/head and the back/tail)." },
  { question: "What is the difference between a stack and an array?", answer: "A stack follows the last in, first out principle (LIFO) and so to access any of the data, you must start at the top of the stack. Arrays do not follow any specific order. Instead, data can be accessed by refering to the index of the element." },
];

function randomQuestion() {
  const len = questions.length;
  const rnd = Math.floor(Math.random() * len);
  document.getElementById('randomQuestion').value = questions[rnd].question;
  document.getElementById('randomAnswer').value = questions[rnd].answer;
}