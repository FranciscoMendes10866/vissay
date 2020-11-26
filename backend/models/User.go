package models

import "gorm.io/gorm"

// User ...
type User struct {
	gorm.Model
	Username string    `gorm:"unique_index;not null" json:"username"`
	Email    string    `gorm:"unique_index;not null" json:"email"`
	Password string    `gorm:"not null" json:"password"`
	Articles []Article `gorm:"foreignKey:UserID;constraint:OnDelete:CASCADE"`
}
