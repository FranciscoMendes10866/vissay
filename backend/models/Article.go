package models

import "gorm.io/gorm"

// Article ...
type Article struct {
	gorm.Model
	Title   string `gorm:"not null" json:"title"`
	Content string `gorm:"not null" json:"content"`
	Date    string `gorm:"not null" json:"date"`
	UserID  int    `gorm:"not null" json:"user_id"`
}
