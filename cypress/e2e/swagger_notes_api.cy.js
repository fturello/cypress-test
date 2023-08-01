describe("Testing API requests", function () {
	it("Create Note test", () => {
		const authToken =
			"e1eeb21ea00842ebacfffe9ec621bef25d55e40914b44fe1a25808298e71275a";

		cy.request({
			url: "https://practice.expandtesting.com/notes/api/notes",
			method: "POST",
			headers: {
				accept: "application/json",
				"x-auth-token": authToken,
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: {
				title: "Test title",
				description: "This is a note content",
				category: "Home",
			},
			form: true,
		}).then((response) => {
			expect(response.status).to.equal(200);
			expect(response.body.data.title).to.equal("Test title");
			expect(response.body.data.description).to.equal("This is a note content");
		});
	});

	it("Edit Note test", () => {
		const authToken =
			"e1eeb21ea00842ebacfffe9ec621bef25d55e40914b44fe1a25808298e71275a";

		const noteIdToUpdate = 1;

		cy.request({
			url: `https://practice.expandtesting.com/notes/api/notes/${noteIdToUpdate}`,
			method: "PUT",
			headers: {
				accept: "application/json",
				"x-auth-token": authToken,
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: {
				title: "Test new title",
				description: "This is a note new content",
				completed: false,
				category: "Home",
			},
			form: true,
		}).then((editResponse) => {
			expect(editResponse.status).to.equal(200);
			expect(editResponse.body.title).to.equal("Test new title");
			expect(editResponse.body.description).to.equal(
				"This is a note new content"
			);
			expect(editResponse.body.completed).to.equal(false);
			expect(editResponse.body.category).to.equal("Home");
		});
	});
});
