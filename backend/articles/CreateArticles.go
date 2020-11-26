package articles

import (
	"github.com/FranciscoMendes10866/vissay/backend/config"
	"github.com/FranciscoMendes10866/vissay/backend/models"
	"github.com/form3tech-oss/jwt-go"
	"github.com/gofiber/fiber/v2"
)

// CreateArticle ...
func CreateArticle(c *fiber.Ctx) error {
	article := new(models.Article)
	c.BodyParser(article)
	user := c.Locals("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	tokenID := claims["id"].(float64)
	var IDtoInt int = int(tokenID)
	article.UserID = IDtoInt
	create := config.Database.Create(article)
	if create == nil {
		return c.SendStatus(500)
	}
	response := resStruct{
		ID:      article.ID,
		Title:   article.Title,
		Content: article.Content,
		Date:    article.Date,
	}
	return c.JSON(response)
}
