const { test, expect } = require('../util/Fixture');  // Import extended test from multiUserFixture

test('Single user test', async ({pageContainer1})=>{

    await pageContainer1.loginPage.login('Admin', 'admin123');
    // await pageContainer1.sessionPage.assertSessionTitle('Admin sessions');
}) 


test('Mutiple user test', async ({pageContainer1, pageContainer2})=>{

    await pageContainer1.loginPage.login('Admin', 'admin123');
    // await pageContainer1.sessionPage.assertSessionTitle('Admin sessions');

    await pageContainer2.loginPage.login('Officer', 'officer123');
    // await pageContainer2.sessionPage.assertSessionTitle('Officer sessions');

}) 