package auth

import (
	"github.com/FranciscoMendes10866/vissay/backend/config"
	"github.com/FranciscoMendes10866/vissay/backend/models"
	"github.com/form3tech-oss/jwt-go"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

// SignIn ...
func SignIn(c *fiber.Ctx) error {
	body := new(models.User)
	c.BodyParser(body)
	pass := body.Password
	findUser := config.Database.Where(&models.User{Email: body.Email}).Find(body)
	if findUser == nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	response := resStruct{
		ID:       body.ID,
		Username: body.Username,
		Password: body.Password,
	}
	match := bcrypt.CompareHashAndPassword([]byte(response.Password), []byte(pass))
	if match != nil {
		return c.SendStatus(fiber.StatusUnauthorized)
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
