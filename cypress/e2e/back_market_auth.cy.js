describe("Tests d'inscription et d'authentification", () => {
	const validEmail = "test@example.com";
	const validPassword = "Testpassword123!";

	it("Test d'inscription réussie", () => {
		cy.visit("https://preprod.backmarket.fr/register");
		cy.get("#email").type(validEmail);
		cy.get("#password").type(validPassword);
		cy.get("#submit-signup").click();
		cy.url().should("include", "/dashboard/orders");
	});

	it("Test d'inscription échouée", () => {
		cy.visit("https://preprod.backmarket.fr/register");
		cy.get("#email").type(validEmail);
		cy.get("#password").type(validPassword);
		cy.get("#submit-signup").click();
		cy.get(".bg-danger-light").should("be.visible");
	});

	it("Test d'authentification réussie", () => {
		cy.visit("https://preprod.backmarket.fr/register");
		cy.get("#email").type(validEmail);
		cy.get("#password").type(validPassword);
		cy.get("#submit-login").click();
		cy.url().should("include", "/dashboard/orders");
	});

	it("Test d'authentification échouée", () => {
		cy.visit("https://preprod.backmarket.fr/register");
		cy.get("#email").type("email_incorrect@example.com");
		cy.get("#password").type("mot_de_passe_incorrect");
		cy.get("#submit-login").click();
		cy.get(".bg-danger-light").should("be.visible");
	});
});
