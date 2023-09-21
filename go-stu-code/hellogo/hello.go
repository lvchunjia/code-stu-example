package main

import "fmt"

/*
1.Hello World
*/
func main() {
	fmt.Println("Hello World!")
	addNum()
}

/*
2.断点与调试
*/
func addNum() {
	var number int = 10
	for i := 0; i < 5; i++ {
		number++
	}
	fmt.Println(number)
}
