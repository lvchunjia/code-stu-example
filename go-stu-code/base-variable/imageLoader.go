package main

func main() {

}

// ImageDownloader 图片加载接口
type ImageDownloader interface {
	// FetchImage 获取图片，需要传入图片地址，方法返回图片数据
	FetchImage(url string) string
}
