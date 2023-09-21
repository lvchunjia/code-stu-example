package main

import "fmt"

func main() {
	playerA := createPlayer("狂斩天下", "战士", "男")
	nameA, careerA, genderA, hpA, mpA := playerA()
	fmt.Println(genderA, careerA, nameA, hpA, mpA)

	playerB := createPlayer("温玉琳琅", "法师", "女")
	nameB, careerB, genderB, hpB, mpB := playerB()
	fmt.Println(genderB, careerB, nameB, hpB, mpB)
}

func createPlayer(name string, career string, gender string) func() (string, string, string, int, int) {
	var hp = 0
	var mp = 0
	if career == "战士" {
		hp = 150
		mp = 100
	} else if career == "法师" {
		hp = 100
		mp = 200
	}

	// 闭包
	return func() (string, string, string, int, int) {
		return name, career, gender, hp, mp
	}
}
