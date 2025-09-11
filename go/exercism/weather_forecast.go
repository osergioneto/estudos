// Package weather describes the current weather on a certain location.
package weather

// CurrentCondition represents a certain condition of Weather.
var CurrentCondition string

// CurrentLocation represents a certain location.
var CurrentLocation string

// Forecast returns a string of the weather in a certain location.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
