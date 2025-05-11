const { test, expect } = require('../util/multiUserFixture');  // Import extended test from multiUserFixture

//pageContainer1 and pageContainer2 are created in multiUserFixture
//Pages are created in pageFactory

test('Mutiple user login test', async ({pageContainer1, pageContainer2})=>{

    await pageContainer1.loginPage.login('Admin', 'admin123');
    // await pageContainer1.sessionPage.assertSessionTitle('Admin sessions');
    await pageContainer1.pause()

    await pageContainer2.loginPage.login('Officer', 'officer123');
    // await pageContainer2.sessionPage.assertSessionTitle('Officer sessions');
    await pageContainer2.pause()

}) 