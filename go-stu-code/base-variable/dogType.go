package main

import "fmt"

func main() {
	fatShibaInu := NewDog("Shiba Inu", 2, 12.0, "公")
	weakShibaInu := NewDog("Shiba Inu", 2, 7.0, "公")
	fmt.Println(fatShibaInu)
	fmt.Println(weakShibaInu)

	fmt.Println(fatShibaInu.GetGender())

	fatShibaInu.Sport()
	weakShibaInu.Eat()
}

type Dog struct {
	Breed  string
	Age    int
	Weight float64
	Gender int
}

func NewDog(breed string, age int, weight float64, gender string) *Dog {
	genderValue := 0
	if gender == "公" {
		genderValue = 0
	} else if gender == "母" {
		genderValue = 1
	}
	return &Dog{
		Breed:  breed,
		Age:    age,
		Weight: weight,
		Gender: genderValue,
	}
}

func (d *Dog) GetGender() string {
	if d.Gender == 0 {
		return "公"
	} else if d.Gender == 1 {
		return "母"
	}
	return ""
}

func (d *Dog) Sport() {
	fmt.Println("做运动！")
	d.Weight -= 0.1
	fmt.Println("我减重到了", d.Weight)
}

func (d *Dog) Eat() {
	fmt.Println("多吃饭！")
	d.Weight += 0.1
	fmt.Println("我增重到了", d.Weight)
}
