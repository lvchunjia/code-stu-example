package main

import "fmt"

func main() {
	playerA := Player{
		"狂斩天下",
		"战士",
		"男",
	}

	//playerB := Player{
	//	name:   "温玉琳琅",
	//	career: "法师",
	//	gender: "女",
	//}

	playerA.career = "战神"

	wishingTree := struct {
		height   float64
		width    float64
		treeType string
	}{
		height:   22.5 * 100,
		width:    50,
		treeType: "banyan"}
	fmt.Println(wishingTree)
}

type Player struct {
	name   string
	career string
	gender string
}
