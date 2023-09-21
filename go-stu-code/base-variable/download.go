package main

import (
	"fmt"
	"time"
)

// 下载进度
var percent = 0

func main() {
	var keepChecking = true

	// 开启下载
	fmt.Println("开始下载")
	go download("", func() {
		keepChecking = false
		fmt.Println("下载完成")
	}, func(currentPercent int) {
		keepChecking = false
		fmt.Println("下载取消")
	}, func(currentPercent int) {
		keepChecking = false
		fmt.Println("下载失败")
	})

	//	开启检查下载进度
	for {
		if keepChecking {
			time.Sleep(500 * time.Millisecond)
			fmt.Println("当前进度：", getPercent())
		} else {
			break
		}
	}
}

// 获取进度
func getPercent() int {
	return percent
}

// 下载
func download(url string, downloadSuccess func(), downloadCancelled func(int), downloadFailed func(int)) {
	for {
		time.Sleep(1 * time.Second)
		percent++
		if percent >= 100 {
			downloadSuccess()
			break
		}
	}
}
