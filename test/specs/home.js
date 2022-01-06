describe('Home', () => {
  it('Open URL and assert title', async () => {
    //Open URL
    await browser.url('https://practice.automationbro.com');

    await expect(browser).toHaveTitle("Practice E-Commerce Site – Automation Bro");
  });

  it('Open about page and assert url', async () => {
    //Open URL
    await browser.url('https://practice.automationbro.com/about');

    await expect(browser).toHaveUrl('https://practice.automationbro.com/about/');
  });

  it('Click Get started button and assert url contains text', async () => {
    
    await browser.url('https://practice.automationbro.com');
    await $('#get-started').click();
    await expect(browser).toHaveUrlContaining("get-started");
  });

});

