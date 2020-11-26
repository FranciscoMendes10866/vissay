package auth

import (
	"github.com/FranciscoMendes10866/vissay/backend/config"
	"github.com/FranciscoMendes10866/vissay/backend/models"
	"github.com/form3tech-oss/jwt-go"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

// SignUp ...
func SignUp(c *fiber.Ctx) error {
	body := new(models.User)
	c.BodyParser(body)
	hash, err := bcrypt.GenerateFromPassword([]byte(body.Password), 4)
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	body.Password = string(hash)
	create := config.Database.Create(body)
	if create == nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	response := resStruct{
		ID:       body.ID,
		Username: body.Username,
	}
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)
	claims["id"] = response.ID
	assignToken, err := token.SignedString([]byte("qHv0BsgyJBkUTak"))
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	return c.JSON(fiber.Map{
		"token":    assignToken,
		"username": response.Username,
	})
}
