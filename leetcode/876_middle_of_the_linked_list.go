package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func middleNode(head *ListNode) *ListNode {
	nodes := []ListNode{}

	for head.Next != nil {
		nodes = append(nodes, *head)
		head = head.Next
	}

	nodes = append(nodes, *head)
	middleNumber := (len(nodes) / 2)

	return &nodes[middleNumber]
}

func main() {
	tail := ListNode{Val: 10, Next: nil}
	node1 := ListNode{Val: 5, Next: &tail}
	node2 := ListNode{Val: 3, Next: &node1}
	node3 := ListNode{Val: 3, Next: &node2}
	node4 := ListNode{Val: 3, Next: &node3}
	head := ListNode{Val: 7, Next: &node4}

	middleNode(&head)
}
