package articles

import (
	"github.com/FranciscoMendes10866/vissay/backend/config"
	"github.com/FranciscoMendes10866/vissay/backend/models"
	"github.com/gofiber/fiber/v2"
)

// PatchArticle ...
func PatchArticle(c *fiber.Ctx) error {
	body := new(models.Article)
	articleID := c.Params("id")
	c.BodyParser(body)
	patch := config.Database.Model(&models.Article{}).Where("id = ?", articleID).Updates(models.Article{
		Title:   body.Title,
		Content: body.Content,
		Date:    body.Date,
	})
	if patch == nil {
		return c.SendStatus(500)
	}
	return c.SendStatus(200)
}
