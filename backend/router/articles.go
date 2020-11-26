package router

import (
	"github.com/FranciscoMendes10866/vissay/backend/articles"
	"github.com/FranciscoMendes10866/vissay/backend/guards"
	"github.com/gofiber/fiber/v2"
)

// ArticlesRouter ...
func ArticlesRouter(app *fiber.App) {
	api := app.Group("/api/v1/articles")
	api.Post("/", guards.Protected(), articles.CreateArticle)
}
