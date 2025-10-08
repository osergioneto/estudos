package structsmethodsinterfaces

import "math"

type Rectangle struct {
	Width  float64
	Height float64
}

type Circle struct {
	Radius float64
}

type Triangle struct {
	Height float64
	Base   float64
	Side1  float64
	Side2  float64
}

type Shape interface {
	Perimeter() float64
	Area() float64
}

func (r Rectangle) Area() float64 {
	return r.Width * r.Height
}

func (c Circle) Area() float64 {
	return math.Pi * math.Pow(c.Radius, 2)
}

func (t Triangle) Area() float64 {
	return (t.Base * t.Height) / 2
}

func (r Rectangle) Perimeter() float64 {
	return 2 * (r.Width + r.Height)
}

func (c Circle) Perimeter() float64 {
	return 2 * math.Pi * c.Radius
}

func (t Triangle) Perimeter() float64 {
	return t.Base + t.Side1 + t.Side2
}
