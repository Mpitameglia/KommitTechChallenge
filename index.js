console.log("hola mundo");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

let head = new Node(10);
head.prev = "-";
let node2 = (head.next = new Node(20));
node2.prev = head;
let node3 = (node2.next = new Node(30));
node3.prev = node2;
let node4 = (node3.next = new Node(10));
node4.prev = node3;
let node5 = (node4.next = new Node(15));
node5.prev = node4;
let node6 = (node5.next = new Node(20));
node5.next.prev = node5;
let tail = (node6.next = new Node(20));
tail.prev = node6;

let temp = head;
let delTemp = head;
let output = "";
let output2 = "";
while (temp !== null) {
  output += temp.value;
  if (temp.next !== null) {
    output += " <-> ";
  }
  temp = temp.next;
}
delX = 30;

function delNode(temp2, delX) {
  while (temp2 !== null) {
    output2 += temp2.value;
    if (temp2.value === delX) {
      temp2 = temp2.next;
    }
    if (temp2.next !== null) {
      output2 += " <-> ";
    }
    temp2 = temp2.next;
  }
}

console.log(output);
console.log(output2);

// console.log(
//   "estos son los next " +
//     head.value +
//     " " +
//     node2.value +
//     " " +
//     node3.value +
//     " " +
//     node4.value +
//     " " +
//     node5.value +
//     " " +
//     node6.value +
//     " " +
//     node7.value
// );

// console.log(
//   "esto  es  los prev " +
//     head.prev.value +
//     " " +
//     node2.prev.value +
//     " " +
//     node3.prev.value +
//     " " +
//     node4.prev.value +
//     " " +
//     node5.prev.value +
//     " " +
//     node6.prev.value +
//     " " +
//     node7.prev.value
// );
