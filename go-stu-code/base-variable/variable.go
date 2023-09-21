package main

import "fmt"

// 变量
var exampleNumber int = 10
var isDarkMode bool = false

// 常量
const WIDTH_OF_RECT int = 12
const ALLOW_DOWNLOAD_WHEN_WIFI bool = true

// 变量的声明
// var name type
// 声明一个名为number的变量，类型为int（整数类型）
var number int = 100

// PI 声明一个名为PI的常量，类型为float64（浮点数类型）
const PI float64 = 3.14

var MY_number = 100

const MY_PI = 3.14

//superNumber := 100

// 批量声明/赋值
// 变量
var (
	//声明+赋值
	numberGo int = 100
	//声明+赋值（类型推断）
	text = "Hello"
	//只声明
	name string
)

// 常量
const (
	// PI 声明+赋值
	PI_GO float64 = 3.14
	// WIDTH 声明+赋值（类型推断）
	WIDTH = 5
	// HEIGHT 声明+赋值（类型推断）
	HEIGHT = 10
)

func main() {
	n := 7
	for i := 1; i <= n; i++ {
		for j := 0; j < n-i; j++ {
			fmt.Print(" ")
		}
		for k := 0; k < 2*i-1; k++ {
			fmt.Print("*")
		}
		fmt.Println()
	}
	for i := 1; i < n; i++ {
		for j := 0; j < i; j++ {
			fmt.Print(" ")
		}
		for k := 0; k < 2*n-1-2*i; k++ {
			fmt.Print("*")
		}
		fmt.Println()
	}

	outputMode := "全"
	if outputMode == "上" || outputMode == "全" {
		for i := 1; i <= n; i++ {
			for j := 0; j < n-i; j++ {
				fmt.Print(" ")
			}
			for k := 0; k < 2*i-1; k++ {
				fmt.Print("*")
			}
			fmt.Println()
		}
	}
	if outputMode == "下" || outputMode == "全" {
		for i := 1; i < n; i++ {
			for j := 0; j < i; j++ {
				fmt.Print(" ")
			}
			for k := 0; k < 2*n-1-2*i; k++ {
				fmt.Print("*")
			}
			fmt.Println()
		}
	}
}
