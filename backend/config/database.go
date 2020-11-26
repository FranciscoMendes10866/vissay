package config

import (
	"fmt"

	"github.com/FranciscoMendes10866/vissay/backend/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

// Database connection driver
var Database *gorm.DB

// ConnDB ...
func ConnDB() error {
	var err error
	dsn := "root:root@tcp(localhost:5276)/vissay?charset=utf8mb4&parseTime=True&loc=Local"
	Database, err = gorm.Open(mysql.Open(dsn), &gorm.Config{
		SkipDefaultTransaction: true,
		PrepareStmt:            true,
	})
	if err != nil {
		panic(err)
	}
	fmt.Println("Connected to the database!🔥")
	Database.AutoMigrate(&models.User{}, &models.Article{})
	fmt.Println("Database Migrated!🧨")
	return nil
}
