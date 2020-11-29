package articles

import (
	"github.com/FranciscoMendes10866/vissay/backend/config"
	"github.com/FranciscoMendes10866/vissay/backend/models"
	"github.com/gofiber/fiber/v2"
)

// DestroyArticle ...
func DestroyArticle(c *fiber.Ctx) error {
	articleID := c.Params("id")
	var article models.Article
	destroy := config.Database.Where("id = ?", articleID).Delete(&article)
	if destroy == nil {
		return c.SendStatus(500)
	}
	return c.SendStatus(200)
}
