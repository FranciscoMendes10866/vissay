package articles

import (
	"github.com/FranciscoMendes10866/vissay/backend/config"
	"github.com/FranciscoMendes10866/vissay/backend/models"
	"github.com/form3tech-oss/jwt-go"
	"github.com/gofiber/fiber/v2"
)

// FindArticles ...
func FindArticles(c *fiber.Ctx) error {
	var articles []models.Article
	user := c.Locals("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	tokenID := claims["id"].(float64)
	var IDtoInt int = int(tokenID)
	var response []resStruct
	find := config.Database.Model(&articles).Where("user_id = ?", IDtoInt).Find(&response)
	if find == nil {
		return c.SendStatus(500)
	}
	return c.JSON(&response)
}
