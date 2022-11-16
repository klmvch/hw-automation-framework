const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the {string} page", async (page) => {
    await browser.url(`https://the-internet.herokuapp.com/${page}`);
});

// add_remove_elements - yarn 'addRemovePage' command

// Adding and removing 'Delete' button
When("I click on the 'Add element' button", async () => {
    await $('/html/body/div[2]/div/div/button').click();
});
Then("I see a new 'Delete' button", async () => {
    const del = await $('/html/body/div[2]/div/div/div/button[1]');
    await expect(del).toBeExisting();
});
When("I click on the 'Delete' button", async () => {
    await $('/html/body/div[2]/div/div/div/button[1]').click();
});
Then("I see that the 'Delete' button is removed", async () => {
    const del = await $('/html/body/div[2]/div/div/div/button[1]');
    await expect(del).not.toBeExisting();
});
// Adding two 'Delete' buttons
When("I click on the 'Add element' button twice", async () => {
    await $('/html/body/div[2]/div/div/button').doubleClick(); 
});
Then("I see the second 'Delete' button", async () => {
    const sec = await $('/html/body/div[2]/div/div/div/button[2]');
    await expect(sec).toBeExisting();
});

// checkboxes - 'yarn checkboxesPage' command

// Ticking the check mark 
When("I click the check mark on the empty checkbox", async () => {
    const elem = await $('/html/body/div[2]/div/div/form/input[1]');
    await $(elem).click();
});
Then("I can see the ticked checkbox", async () => {
    const elem = await $('/html/body/div[2]/div/div/form/input[1]');
    await expect(elem).toBeChecked();
});
// Removing the check mark
When("I click the check mark on the marked checkbox", async () => {
    const box = await $('/html/body/div[2]/div/div/form/input[2]')
    await $(box).click();
});
Then("I can see the unticked checkbox", async () => {
    const box = await $('/html/body/div[2]/div/div/form/input[2]');
    await expect(box).not.toBeChecked();
});

// hoversPage test

When("I hover on {}", async (profile) => {
    await $('#content > div > div:nth-child(4) > img').moveTo();
});
Then("I can see a profile {string}", async (information) => {
    const info = await $('#content > div > div:nth-child(4) > div > h5');
    await expect(info).toBeExisting();
});

// keyPressesPage tests

When("I press a {}", async (any) => {
    const key = await $('#target');
    await key.keys(any)
});
Then("I see a {string} on the screen", async (result) => {
    const text = await $('#result');
    await expect(text).toBeExisting();
    await expect(text).toHaveTextContaining(result);
});

// login tests - yarn 'loginPage' command

When("I login with {word} and {word}", async (username, password) => {
    await $('#username').setValue(username);
    await $('#password').setValue(password);
    await $('button[type="submit"]').click();
});
Then("I should see a flash message saying {string}", async (message) => {
    const elem = await ('#flash');
    await expect($('#flash')).toBeExisting();
    await expect($('#flash')).toHaveTextContaining(message);
});