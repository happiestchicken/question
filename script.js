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

const questions = Array(
    "What is a data structure?",
    "What is an array?",
    "What is a linked list?",
    "What does LIFO stand for and what does it mean?",
    "What does FIFO stand for and what does it mean?",
    "What is a stack?",
    "What is a queue?",
    "What is a binary tree?",
    "What is recursion?",
    "What does OOP stand for and what does it mean?",
    "",
    "",
    );

const answers = Array(
    "Data structures are storage formats that define the way that data is stored, organized, retrieved, processed manipulated, etc. Different types of data structures serve different purposes. For a deeper understanding, visit: https://discuss.boardinfinity.com/t/what-is-data-structure-and-it-types/12222/2",
    "An array is a collection of similar-type data items stored at contiguous memory locations. It allows for data to be accesed only by its indexing number(s).",
    "A linear data structure in which the elements are NOT necessarily stored in a contiguous manner. The data elements are instead linked via 'pointers' which index the location of the following element in the sequence. For a visual representation, as well as how linked lists compare to arrays, visit: https://qph.cf2.quoracdn.net/main-qimg-41cdfa9a815220598f2c03f1bccaeff8",
    "LIFO stands for last in, first out. It refers to a way in which data can be stored and retrieved. It means that data which was stored last will be extracted first.",
    "FIFO stands for first in, first out. It refers to a way in which data can be stored and retrieved. It means that data which was stored first will be extracted first.",
    "A stack is a data structure consisting of a set of homogeneous elements and is based on the principle of last in first out. It is a commonly used abstract data type with two major operations, push and pop which are carried out on the element at the top of the stack. The push operation adds an element to the top of the stack while the pop operation removes an element from the top position. An example of this in computer operations is in web browsing. As you browse the web, the url of the page that you are currently on is placed at the top of the stack, whereas the url from where you started can be found at the base. When you hit the 'back' button, your browser moves through the stack starting from the top.",
    "A queue is a linear data structure which stores elements in a first in, first out order. For more information on queues, as well as to learn more about different types of queues, visit: https://www.geeksforgeeks.org/queue-data-structure/ ",
    "A binary tree is an extension of the linked-list data structure where each 'node' has at most two 'children' and each of the 'children nodes' have two 'children nodes' and so forth. The tree begins at he top with the main node which then links to the left sub-tree (whos value is less than its parent node) and the right sub-tree (whos value is greater than its parent node). This data structure allows for speed and accuracy as the amount of key-value pair comparisons that must be made is decreased. For more information, including a detailed visual, visit: https://www.guru99.com/binary-search-tree-data-structure.html",
    "A recursive function solves a particular problem by calling a copy of itself and solving smaller subproblems of the original problems, then combining them to get the desired solution as a whole. This is also referred to as the divide-and-conquer method.",
    "OOP stands for object-oriented programming. This type of programming is centered around creating objects, or interrelated variables (property of the object) and functions (behavior of the object).",
    "",
    "",
    );

function randomQuestion() {
  const len = answers.length;
  const rnd = Math.floor(Math.random() * len);
  document.getElementById('randomQuestion').value = questions[rnd];
  document.getElementById('randomAnswer').value = answers[rnd];
}
