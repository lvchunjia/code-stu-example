package main

import "fmt"

func main() {
	bird := *NewBird("小鸟", 1, "公", "绿色")
	fmt.Println(bird)
	bird.Fly()
	bird.CommonAnimal.Eat()

	dog := *NewDogs("小狗", 2, "公", "黄色")
	fmt.Println(dog)
	dog.Bark()
	dog.CommonAnimal.Eat()
}

type Animal struct {
	Name   string
	Age    int
	Gender string
}

func (a *Animal) Eat() {
	fmt.Println(a.Name, "我要吃到饱！")
}

type Bird struct {
	WingColor    string
	CommonAnimal Animal
}

func NewBird(name string, age int, gender string, wingColor string) *Bird {
	return &Bird{
		WingColor: wingColor,
		CommonAnimal: Animal{
			Name:   name,
			Age:    age,
			Gender: gender,
		},
	}
}

func (b *Bird) Fly() {
	fmt.Println("我起飞啦！")
}

type Dogs struct {
	Color        string
	CommonAnimal Animal
}

func NewDogs(name string, age int, gender string, color string) *Dogs {
	return &Dogs{
		Color: color,
		CommonAnimal: Animal{
			Name:   name,
			Age:    age,
			Gender: gender,
		},
	}
}

func (d *Dogs) Bark() {
	fmt.Println("汪汪汪！")
}
